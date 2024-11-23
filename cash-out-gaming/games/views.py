from django.shortcuts import render, redirect
from django.contrib.auth.decorators import login_required
from .models import Game, Platform
from .forms import GameForm, PlatformForm

def games(request):
    games = Game.objects.all()
    return render(request, 'games/games.html', {'games': games})

def game_detail(request, pk):
    game = Game.objects.get(pk=pk)
    return render(request, 'games/game.html', {'game': game})

@login_required
def create_game(request):
    if request.method == 'POST':
        form = GameForm(request.POST)
        if form.is_valid():
            game = form.save(commit=False)
            game.save()
            return redirect('games')
    else:
        form = GameForm()
    return render(request, 'games/create_game.html', {'form': form})

def platforms(request):
    platforms = Platform.objects.all()
    return render(request, 'games/platforms.html', {'platforms': platforms})

def platform_detail(request, pk):
    platform = Platform.objects.get(pk=pk)
    return render(request, 'games/platform.html', {'platform': platform})

@login_required
def create_platform(request):
    if request.method == 'POST':
        form = PlatformForm(request.POST)
        if form.is_valid():
            platform = form.save(commit=False)
            platform.save()
            return redirect('platforms')
    else:
        form = PlatformForm()
    return render(request, 'games/create_platform.html', {'form': form})