from django import forms
from .models import Post, Comment
from .models import Game, Platform
from .models import Tournament, Match
from .models import Tournament, Match
from .models import User

class UserForm(forms.ModelForm):
    class Meta:
        model = User
        fields = ('username', 'email', 'balance', 'profile_picture')
class UserForm(forms.ModelForm):
    class Meta:
        model = User
        fields = ('username', 'email', 'balance', 'profile_picture')
class UserForm(forms.ModelForm):
    class Meta:
        model = User
        fields = ('username', 'email', 'password')
class TournamentForm(forms.ModelForm):
    class Meta:
        model = Tournament
        fields = ('name', 'description')

class MatchForm(forms.ModelForm):
    class Meta:
        model = Match
        fields = ('player1', 'player2')
class TournamentForm(forms.ModelForm):
    class Meta:
        model = Tournament
        fields = ('name', 'description')

class MatchForm(forms.ModelForm):
    class Meta:
        model = Match
        fields = ('tournament', 'player1', 'player2')
class GameForm(forms.ModelForm):
    class Meta:
        model = Game
        fields = ('name', 'description', 'platforms', 'genres')

class PlatformForm(forms.ModelForm):
    class Meta:
        model = Platform
        fields = ('name', 'description')
class PostForm(forms.ModelForm):
    class Meta:
        model = Post
        fields = ('title', 'content')

class CommentForm(forms.ModelForm):
    class Meta:
        model = Comment
        fields = ('content',)