from django import forms

class MatchmakingForm(forms.Form):
    user_id = forms.IntegerField()
    game_id = forms.IntegerField()