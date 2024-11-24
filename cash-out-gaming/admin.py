from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import User, Tournament, Game, Match, Bet

admin.site.register(User, UserAdmin)

@admin.register(Tournament)
class TournamentAdmin(admin.ModelAdmin):
    list_display = ('name', 'description', 'created_at')
    search_fields = ('name', 'description')

@admin.register(Game)
class GameAdmin(admin.ModelAdmin):
    list_display = ('name', 'description', 'created_at')
    search_fields = ('name', 'description')

@admin.register(Match)
class MatchAdmin(admin.ModelAdmin):
    list_display = ('tournament', 'game', 'created_at')
    search_fields = ('tournament__name', 'game__name')

@admin.register(Bet)
class BetAdmin(admin.ModelAdmin):
    list_display = ('match', 'user', 'amount', 'created_at')
    search_fields = ('match__tournament__name', 'match__game__name', 'user__username')