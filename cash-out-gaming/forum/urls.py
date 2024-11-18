from django.urls import path
from . import views

urlpatterns = [
    path('', views.forum, name='forum'),
    path('thread/<int:thread_id>/', views.thread, name='thread'),
    path('post/<int:post_id>/', views.post, name='post'),
]