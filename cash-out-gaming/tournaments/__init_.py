from .models import Tournament, Match
from .views import tournament_list, match_list
from .views import tournaments, tournament_detail, create_tournament, create_match

def get_tournament():
    return Tournament()

def get_match():
    return Match()