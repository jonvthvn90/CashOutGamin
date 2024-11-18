from django.shortcuts import render
from .models import UserProfile

def user_list(request):
    users = UserProfile.objects.all()
    return render(request, 'user.html', {'users': users})

def create_user(request):
    if request.method == 'POST':
        user = User.objects.create_user(
            username=request.POST['username'],
            email=request.POST['email'],
            password=request.POST['password']
        )
        user_profile = UserProfile(
            user=user,
            bio=request.POST['bio'],
            location=request.POST['location']
        )
        user_profile.save()
        return redirect('user_list')
    return render(request, 'create_user.html')