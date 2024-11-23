from django.shortcuts import render, redirect
from django.contrib.auth.decorators import login_required
from .models import Forum, Thread, Post, Comment
from .forms import ThreadForm, PostForm, CommentForm

def forum_view(request):
    forums = Forum.objects.all()
    return render(request, 'forum.html', {'forums': forums})

def thread_view(request, thread_id):
    thread = Thread.objects.get(id=thread_id)
    posts = Post.objects.filter(thread=thread)
    return render(request, 'thread.html', {'thread': thread, 'posts': posts})

@login_required
def create_thread(request):
    if request.method == 'POST':
        form = ThreadForm(request.POST)
        if form.is_valid():
            thread = form.save(commit=False)
            thread.user = request.user
            thread.save()
            return redirect('forum_view')
    else:
        form = ThreadForm()
    return render(request, 'create_thread.html', {'form': form})

@login_required
def create_post(request, thread_id):
    if request.method == 'POST':
        form = PostForm(request.POST)
        if form.is_valid():
            post = form.save(commit=False)
            post.thread = Thread.objects.get(id=thread_id)
            post.user = request.user
            post.save()
            return redirect('thread_view', thread_id=thread_id)
    else:
        form = PostForm()
    return render(request, 'create_post.html', {'form': form})

@login_required
def create_comment(request, pk):
    post = Post.objects.get(pk=pk)
    if request.method == 'POST':
        form = CommentForm(request.POST)
        if form.is_valid():
            comment = form.save(commit=False)
            comment.post = post
            comment.author = request.user
            comment.save()
            return redirect('post_detail', pk=pk)
    else:
        form = CommentForm()
    return render(request, 'forum/create_comment.html', {'form': form, 'post': post})