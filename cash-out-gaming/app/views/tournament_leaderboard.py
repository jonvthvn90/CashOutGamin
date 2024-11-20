from django.shortcuts import render
from app.models import User, Tournament

def tournament_leaderboard(request, tournament_id):
    tournament = Tournament.objects.get(id=tournament_id)
    users = User.objects.filter(tournament=tournament).order_by('-score')
    return render(request, 'tournament_leaderboard.html', {'users': users})