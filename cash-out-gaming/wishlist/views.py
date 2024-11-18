from django.shortcuts import render
from .models import Wallet

def wallet_list(request):
    wallets = Wallet.objects.all()
    return render(request, 'wallet.html', {'wallets': wallets})

def create_wallet(request):
    if request.method == 'POST':
        user = request.user
        wallet, created = Wallet.objects.get_or_create(user=user)
        return redirect('wallet_list')
    return render(request, 'create_wallet.html')