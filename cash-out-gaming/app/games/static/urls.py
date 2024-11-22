from django.urls import path
from . import views

urlpatterns = [
    path('', views.games, name='games'),
    path('create_game/', views.create_game, name='create_game'),
    path('<int:pk>/', views.game_detail, name='game_detail'),
    path('<int:pk>/edit/', views.edit_game, name='edit_game'),
    path('<int:pk>/delete/', views.delete_game, name='delete_game'),
]