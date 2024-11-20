from django.shortcuts import render, redirect
from django.contrib.auth.decorators import login_required
from .models import Match
from .forms import MatchForm

def matches(request):
    matches = Match.objects.all()
    return render(request, 'matches.html', {'matches': matches})

@login_required
def create_match(request):
    if request.method == 'POST':
        form = MatchForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('matches')
    else:
        form = MatchForm()
    return render(request, 'create_match.html', {'form': form})