from django.shortcuts import render, redirect
from django.contrib.auth.decorators import login_required
from .models import Post, Comment
from .forms import PostForm, CommentForm

def forum(request):
    posts = Post.objects.all()
    return render(request, 'forum.html', {'posts': posts})

@login_required
def create_post(request):
    if request.method == 'POST':
        form = PostForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('forum')
    else:
        form = PostForm()
    return render(request, 'create_post.html', {'form': form})

@login_required
def post(request, pk):
    post = Post.objects.get(pk=pk)
    comments = post.comment_set.all()
    if request.method == 'POST':
        form = CommentForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('post', pk=pk)
    else:
        form = CommentForm()
    return render(request, 'post.html', {'post': post, 'comments': comments, 'form': form})