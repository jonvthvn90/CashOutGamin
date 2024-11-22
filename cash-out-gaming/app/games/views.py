from django.shortcuts import render, redirect
from django.contrib.auth.decorators import login_required
from .models import Game
from .forms import GameForm

def games(request):
    games = Game.objects.all()
    return render(request, 'games.html', {'games': games})

@login_required
def create_game(request):
    if request.method == 'POST':
        form = GameForm(request.POST)
        if form.is_valid():
            game = form.save(commit=False)
            game.author = request.user
            game.save()
            return redirect('games')
    else:
        form = GameForm()
    return render(request, 'create_game.html', {'form': form})

@login_required
def game_detail(request, pk):
    game = Game.objects.get(pk=pk)
    return render(request, 'game_detail.html', {'game': game})

@login_required
def edit_game(request, pk):
    game = Game.objects.get(pk=pk)
    if request.method == 'POST':
        form = GameForm(request.POST, instance=game)
        if form.is_valid():
            form.save()
            return redirect('games')
    else:
        form = GameForm(instance=game)
    return render(request, 'edit_game.html', {'form': form})

@login_required
def delete_game(request, pk):
    game = Game.objects.get(pk=pk)
    if request.method == 'POST':
        game.delete()
        return redirect('games')
    return render(request, 'delete_game.html', {'game': game})