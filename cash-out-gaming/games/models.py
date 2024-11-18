from django.db import models

class Game(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    user = models.ForeignKey('auth.User', on_delete=models.CASCADE)

class Platform(models.Model):
    name = models.CharField(max_length=255)
    games = models.ManyToManyField(Game)