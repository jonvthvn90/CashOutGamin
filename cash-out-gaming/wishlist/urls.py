from django.urls import path
from . import views

urlpatterns = [
    path('', views.wallet_list, name='wallet_list'),
    path('create/', views.create_wallet, name='create_wallet'),
]