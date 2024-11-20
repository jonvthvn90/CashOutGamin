from django.urls import path
from . import views

urlpatterns = [
    path('', views.matches, name='matches'),
    path('create_match/', views.create_match, name='create_match'),
    path('<int:pk>/', views.match_detail, name='match_detail'),
    path('<int:pk>/edit/', views.edit_match, name='edit_match'),
    path('<int:pk>/delete/', views.delete_match, name='delete_match'),
]