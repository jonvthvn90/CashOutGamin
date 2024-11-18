from django.shortcuts import render
from .models import Leaderboard

def leaderboard(request):
    leaderboards = Leaderboard.objects.all()
    return render(request, 'leaderboard.html', {'leaderboards': leaderboards})

def create_leaderboard(request):
    if request.method == 'POST':
        leaderboard = Leaderboard(name=request.POST['name'], description=request.POST['description'], user=request.user)
        leaderboard.save()
        return redirect('leaderboard')
    return render(request, 'create_leaderboard.html')