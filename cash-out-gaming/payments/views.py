from django.shortcuts import render
from .models import Payment, Payout

def payment(request):
    payments = Payment.objects.all()
    return render(request, 'payment.html', {'payments': payments})

def payout(request):
    payouts = Payout.objects.all()
    return render(request, 'payout.html', {'payouts': payouts})

def create_payment(request):
    if request.method == 'POST':
        payment = Payment(amount=request.POST['amount'], payment_method=request.POST['payment_method'], user=request.user)
        payment.save()
        return redirect('payment')
    return render(request, 'create_payment.html')

def create_payout(request):
    if request.method == 'POST':
        payout = Payout(amount=request.POST['amount'], payout_method=request.POST['payout_method'], user=request.user)
        payout.save()
        return redirect('payout')
    return render(request, 'create_payout.html')