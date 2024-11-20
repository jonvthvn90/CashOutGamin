from django.db.models import Q
from .models import User, Game, Tournament, Match

def get_leaderboard(game_id):
    users = User.objects.filter(Q(game_id=game_id) & Q(score__gt=0)).order_by('-score')
    return users

def get_tournament_leaderboard(tournament_id):
    users = User.objects.filter(Q(tournament_id=tournament_id) & Q(score__gt=0)).order_by('-score')
    return users

def leaderboard(request, game_id):
    users = get_leaderboard(game_id)
    return HttpResponse(users)

def tournament_leaderboard(request, tournament_id):
    users = get_tournament_leaderboard(tournament_id)
    return HttpResponse(users)