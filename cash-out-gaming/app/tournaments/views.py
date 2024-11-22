from django.shortcuts import render, redirect
from django.contrib.auth.decorators import login_required
from .models import Tournament
from .forms import TournamentForm

def tournaments(request):
    tournaments = Tournament.objects.all()
    return render(request, 'tournaments.html', {'tournaments': tournaments})

@login_required
def create_tournament(request):
    if request.method == 'POST':
        form = TournamentForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('tournaments')
    else:
        form = TournamentForm()
    return render(request, 'create_tournament.html', {'form': form})