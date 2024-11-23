from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('games/', views.games, name='games'),
    path('games/<int:game_id>/', views.game_detail, name='game_detail'),
    path('games/<int:game_id>/reviews/', views.game_reviews, name='game_reviews'),
    path('games/<int:game_id>/reviews/create/', views.create_review, name='create_review'),
    path('games/<int:game_id>/reviews/<int:review_id>/edit/', views.edit_review, name='edit_review'),
    path('games/<int:game_id>/reviews/<int:review_id>/delete/', views.delete_review, name='delete_review'),
    path('payment-methods/', views.payment_methods, name='payment_methods'),
    path('payment-methods/<int:payment_method_id>/', views.payment_method_detail, name='payment_method_detail'),
    path('payment-transactions/', views.payment_transactions, name='payment_transactions'),
    path('payment-transactions/<int:payment_transaction_id>/', views.payment_transaction_detail, name='payment_transaction_detail'),
    path('cash-out-requests/', views.cash_out_requests, name='cash_out_requests'),
    path('cash-out-requests/<int:cash_out_request_id>/', views.cash_out_request_detail, name='cash_out_request_detail'),
    path('cash-out-transactions/', views.cash_out_transactions, name='cash_out_transactions'),
    path('cash-out-transactions/<int:cash_out_transaction_id>/', views.cash_out_transaction_detail, name='cash_out_transaction_detail'),

    path('twitch/', views.twitch_api, name='twitch_api'),
    path('paypal/', views.paypal_api, name='paypal_api'),
    path('cashapp/', views.cashapp_api, name='cashapp_api'),
]