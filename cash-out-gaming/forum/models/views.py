from django.shortcuts import render
from .models import Post, Thread

def forum(request):
    threads = Thread.objects.all()
    return render(request, 'forum.html', {'threads': threads})

def thread(request, thread_id):
    thread = Thread.objects.get(id=thread_id)
    return render(request, 'thread.html', {'thread': thread})

def post(request, post_id):
    post = Post.objects.get(id=post_id)
    return render(request, 'post.html', {'post': post})

def create_post(request):
    if request.method == 'POST':
        post = Post(title=request.POST['title'], content=request.POST['content'], user=request.user)
        post.save()
        return redirect('forum')
    return render(request, 'create_post.html')

def create_thread(request):
    if request.method == 'POST':
        thread = Thread(title=request.POST['title'], user=request.user)
        thread.save()
        return redirect('forum')
    return render(request, 'create_thread.html')