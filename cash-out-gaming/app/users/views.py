from django.shortcuts import render, redirect
from django.contrib.auth.decorators import login_required
from .models import User
from .forms import UserForm

@login_required
def profile(request):
    user = request.user
    return render(request, 'profile.html', {'user': user})

@login_required
def update_profile(request):
    user = request.user
    if request.method == 'POST':
        form = UserForm(request.POST, instance=user)
        if form.is_valid():
            form.save()
            return redirect('profile')
    else:
        form = UserForm(instance=user)
    return render(request, 'update_profile.html', {'form': form})