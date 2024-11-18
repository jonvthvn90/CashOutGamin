from django.shortcuts import render
from .models import Game, Platform

def game(request, game_id):
    game = Game.objects.get(id=game_id)
    return render(request, 'game.html', {'game': game})

def platform(request, platform_id):
    platform = Platform.objects.get(id=platform_id)
    return render(request, 'platform.html', {'platform': platform})

def create_game(request):
    if request.method == 'POST':
        game = Game(title=request.POST['title'], description=request.POST['description'], user=request.user)
        game.save()
        return redirect('game')
    return render(request, 'create_game.html')

def create_platform(request):
    if request.method == 'POST':
        platform = Platform(name=request.POST['name'])
        platform.save()
        return redirect('platform')
    return render(request, 'create_platform.html')