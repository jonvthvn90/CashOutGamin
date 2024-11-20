from django.shortcuts import render, redirect
from django.contrib.auth.decorators import login_required
from .models import BlogPost
from .forms import BlogPostForm

def blog_view(request):
    posts = BlogPost.objects.all()
    return render(request, 'blog.html', {'posts': posts})

@login_required
def create_post(request):
    if request.method == 'POST':
        form = BlogPostForm(request.POST)
        if form.is_valid():
            post = form.save(commit=False)
            post.user = request.user
            post.save()
            return redirect('blog_view')
    else:
        form = BlogPostForm()
    return render(request, 'create_post.html', {'form': form})

@login_required
def edit_post(request, post_id):
    post = BlogPost.objects.get(id=post_id)
    if request.method == 'POST':
        form = BlogPostForm(request.POST, instance=post)
        if form.is_valid():
            form.save()
            return redirect('blog_view')
    else:
        form = BlogPostForm(instance=post)
    return render(request, 'edit_post.html', {'form': form})

@login_required
def delete_post(request, post_id):
    post = BlogPost.objects.get(id=post_id)
    post.delete()
    return redirect('blog_view')