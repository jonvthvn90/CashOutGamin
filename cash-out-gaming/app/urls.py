from django.urls import path
from . import views

urlpatterns = [
    path('twitch/', views.twitch_api, name='twitch_api'),
    path('paypal/', views.paypal_api, name='paypal_api'),
    path('cashapp/', views.cashapp_api, name='cashapp_api'),
]