from django.urls import path
from . import views

urlpatterns = [
    path('', views.blog, name='blog'),
    path('create_post/', views.create_post, name='create_post'),
    path('post/<int:pk>/', views.post, name='post'),
    path('post/<int:pk>/comment/', views.create_comment, name='create_comment'),
    path('post/<int:pk>/edit/', views.edit_post, name='edit_post'),
    path('post/<int:pk>/delete/', views.delete_post, name='delete_post'),
    path('comment/<int:pk>/edit/', views.edit_comment, name='edit_comment'),
    path('comment/<int:pk>/delete/', views.delete_comment, name='delete_comment'),
]