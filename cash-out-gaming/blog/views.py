from django.shortcuts import render
from .models import Post

def blog(request):
    posts = Post.objects.all()
    return render(request, 'blog.html', {'posts': posts})

def post(request, post_id):
    post = Post.objects.get(id=post_id)
    return render(request, 'post.html', {'post': post})

def create_post(request):
    if request.method == 'POST':
        post = Post(title=request.POST['title'], content=request.POST['content'], user=request.user)
        post.save()
        return redirect('blog')
    return render(request, 'create_post.html')