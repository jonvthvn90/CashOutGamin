from django.urls import path
from . import views

urlpatterns = [
    path('', views.tournaments, name='tournaments'),
    path('create_tournament/', views.create_tournament, name='create_tournament'),
    path('<int:pk>/', views.tournament_detail, name='tournament_detail'),
    path('<int:pk>/edit/', views.edit_tournament, name='edit_tournament'),
    path('<int:pk>/delete/', views.delete_tournament, name='delete_tournament'),
]