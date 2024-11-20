from django.urls import path
from . import views

urlpatterns = [
    path('matchmaking/', views.matchmaking, name='matchmaking'),
    path('matchmaking/find_match/', views.find_match, name='find_match'),
]