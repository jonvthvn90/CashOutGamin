from django.shortcuts import render
from .models import Player

def player(request, player_id):
    player = Player.objects.get(id=player_id)
    return render(request, 'player.html', {'player': player})

def create_player(request):
    if request.method == 'POST':
        player = Player(username=request.POST['username'], email=request.POST['email'])
        player.save()
        return redirect('player')
    return render(request, 'create_player.html')