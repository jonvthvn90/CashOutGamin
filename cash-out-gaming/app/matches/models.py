from django.db import models
from django.contrib.auth.models import User

class Match(models.Model):
    team1 = models.CharField(max_length=255)
    team2 = models.CharField(max_length=255)
    date = models.DateField()
    time = models.TimeField()
    created_at = models.DateTimeField(auto_now_add=True)