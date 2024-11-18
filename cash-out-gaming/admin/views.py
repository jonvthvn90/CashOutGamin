from django.shortcuts import render
from .models import User, Tournament, Match

def index(request):
    return render(request, 'index.html')

def login(request):
    return render(request, 'login.html')

def register(request):
    return render(request, 'register.html')

def profile(request):
    return render(request, 'profile.html')

def tournament(request):
    return render(request, 'tournament.html')

def match(request):
    return render(request, 'match.html')

def users(request):
    users = User.objects.all()
    return render(request, 'users.html', {'users': users})

def user(request, user_id):
    user = User.objects.get(id=user_id)
    return render(request, 'user.html', {'user': user})

def tournaments(request):
    tournaments = Tournament.objects.all()
    return render(request, 'tournaments.html', {'tournaments': tournaments})

def tournament(request, tournament_id):
    tournament = Tournament.objects.get(id=tournament_id)
    return render(request, 'tournament.html', {'tournament': tournament})

def matches(request):
    matches = Match.objects.all()
    return render(request, 'matches.html', {'matches': matches})

def match(request, match_id):
    match = Match.objects.get(id=match_id)
    return render(request, 'match.html', {'match': match})