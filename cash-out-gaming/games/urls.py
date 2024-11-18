from django.urls import path
from . import views

urlpatterns = [
    path('', views.game, name='game'),
    path('platform/<int:platform_id>/', views.platform, name='platform'),
]