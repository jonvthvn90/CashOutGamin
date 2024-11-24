from django import forms
from .models import Post, Comment
from .models import Game, Platform
from .models import Tournament, Match
from .models import Tournament, Match
from .models import User
from .models import User, Tournament, Game, Match, Bet
from django.shortcuts import render, redirect
from django.contrib.auth.decorators import login_required
from .forms import UserForm

@login_required
def user_list(request):
    users = User.objects.all()
    return render(request, 'admin/users.html', {'users': users})

@login_required
def user_detail(request, pk):
    user = User.objects.get(pk=pk)
    return render(request, 'admin/user_detail.html', {'user': user})

@login_required
def user_update(request, pk):
    user = User.objects.get(pk=pk)
    if request.method == 'POST':
        form = UserForm(request.POST, instance=user)
        if form.is_valid():
            form.save()
            return redirect('user_list')
    else:
        form = UserForm(instance=user)
    return render(request, 'admin/user_update.html', {'form': form})

@login_required
def user_delete(request, pk):
    user = User.objects.get(pk=pk)
    if request.method == 'POST':
        user.delete()
        return redirect('user_list')
    return render(request, 'admin/user_delete.html', {'user': user})

@login_required
def user_create(request):
    if request.method == 'POST':
        form = UserForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('user_list')
    else:
        form = UserForm()
    return render(request, 'admin/user_create.html', {'form': form})
class UserForm(forms.ModelForm):
    class Meta:
        model = User
        fields = ('username', 'email', 'password')

class TournamentForm(forms.ModelForm):
    class Meta:
        model = Tournament
        fields = ('name', 'description')

class GameForm(forms.ModelForm):
    class Meta:
        model = Game
        fields = ('name', 'description')

class MatchForm(forms.ModelForm):
    class Meta:
        model = Match
        fields = ('tournament', 'game')

class BetForm(forms.ModelForm):
    class Meta:
        model = Bet
        fields = ('match', 'user', 'amount')
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