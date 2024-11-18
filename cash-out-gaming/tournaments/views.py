from django.shortcuts import render
from .models import Tournament, Match

def tournament_list(request):
    tournaments = Tournament.objects.all()
    return render(request, 'tournament.html', {'tournaments': tournaments})

def match_list(request):
    matches = Match.objects.all()
    return render(request, 'match.html', {'matches': matches})