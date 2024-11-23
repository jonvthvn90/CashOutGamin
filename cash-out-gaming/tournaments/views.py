from django.shortcuts import render
from .models import Tournament, Match
from django.shortcuts import render, redirect
from django.contrib.auth.decorators import login_required
from .forms import TournamentForm, MatchForm

def tournaments(request):
    tournaments = Tournament.objects.all()
    return render(request, 'tournaments/tournaments.html', {'tournaments': tournaments})

def tournament_detail(request, pk):
    tournament = Tournament.objects.get(pk=pk)
    matches = tournament.match_set.all()
    return render(request, 'tournaments/tournament.html', {'tournament': tournament, 'matches': matches})

@login_required
def create_tournament(request):
    if request.method == 'POST':
        form = TournamentForm(request.POST)
        if form.is_valid():
            tournament = form.save(commit=False)
            tournament.save()
            return redirect('tournaments')
    else:
        form = TournamentForm()
    return render(request, 'tournaments/create_tournament.html', {'form': form})

@login_required
def create_match(request, pk):
    tournament = Tournament.objects.get(pk=pk)
    if request.method == 'POST':
        form = MatchForm(request.POST)
        if form.is_valid():
            match = form.save(commit=False)
            match.tournament = tournament
            match.save()
            return redirect('tournament_detail', pk=pk)
    else:
        form = MatchForm()
    return render(request, 'tournaments/create_match.html', {'form': form, 'tournament': tournament})
def tournament_list(request):
    tournaments = Tournament.objects.all()
    return render(request, 'tournament.html', {'tournaments': tournaments})

def match_list(request):
    matches = Match.objects.all()
    return render(request, 'match.html', {'matches': matches})