from django.shortcuts import render, redirect
from .matchmaking import train_matchmaking_model
from .forms import MatchmakingForm

def matchmaking(request):
    return render(request, 'matchmaking.html')

def find_match(request):
    if request.method == 'POST':
        form = MatchmakingForm(request.POST)
        if form.is_valid():
            # Train matchmaking model and find match
            model = train_matchmaking_model()
            match = model.predict(request.POST['user_id'], request.POST['game_id'])
            return render(request, 'matchmaking.html', {'match': match})
    else:
        form = MatchmakingForm()
    return render(request, 'matchmaking.html', {'form': form})