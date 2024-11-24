from django.contrib import admin
from django.urls import path, include
from . import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('admin.urls')),
    path('api/', include('api.urls')),
    path('machine_learning/', include('machine_learning.urls')),
    path('forum/', include('forum.urls')),
    path('blog/', include('blog.urls')),
    path('games/', include('games.urls')),
    path('leaderboards/', include('leaderboards.urls')),
    path('maintenance/', include('maintenance.urls')),
    path('payments/', include('payments.urls')),
    path('players/', include('players.urls')),
    path('stats/', include('stats.urls')),
    path('store/', include('store.urls')),
    path('tests/', include('tests.urls')),
    path('tournaments/', include('tournaments.urls')),
    path('types/', include('types.urls')),
    path('utils/', include('utils.urls')),
    path('users/', include('users.urls')),
    path('wallets/', include('wallets.urls')),
    path('matches/', include('matches.urls')),
    path('bets/', include('bets.urls')),
    path('users/', views.user_list, name='user_list'),
    path('users/<int:pk>/', views.user_detail, name='user_detail'),
    path('users/<int:pk>/update/', views.user_update, name='user_update'),
    path('users/<int:pk>/delete/', views.user_delete, name='user_delete'),
    path('users/create/', views.user_create, name='user_create'),
]