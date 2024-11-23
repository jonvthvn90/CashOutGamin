from django.shortcuts import render, redirect
from django.contrib.auth.decorators import login_required
from .models import User
from .forms import UserForm

def users(request):
    users = User.objects.all()
    return render(request, 'users/users.html', {'users': users})

def user_detail(request, pk):
    user = User.objects.get(pk=pk)
    return render(request, 'users/user.html', {'user': user})

@login_required
def create_user(request):
    if request.method == 'POST':
        form = UserForm(request.POST)
        if form.is_valid():
            user = form.save(commit=False)
            user.save()
            return redirect('users')
    else:
        form = UserForm()
    return render(request, 'users/create_user.html', {'form': form})

@login_required
def update_user(request, pk):
    user = User.objects.get(pk=pk)
    if request.method == 'POST':
        form = UserForm(request.POST, instance=user)
        if form.is_valid():
            form.save()
            return redirect('user_detail', pk=pk)
    else:
        form = UserForm(instance=user)
    return render(request, 'users/update_user.html', {'form': form, 'user': user})

@login_required
def delete_user(request, pk):
    user = User.objects.get(pk=pk)
    if request.method == 'POST':
        user.delete()
        return redirect('users')
    return render(request, 'users/delete_user.html', {'user': user})