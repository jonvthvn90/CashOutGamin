import stripe
from django.conf import settings
from django.http import HttpResponse

stripe.api_key = settings.STRIPE_API_KEY

def process_withdrawal(amount, payment_method):
    try:
        payout = stripe.Payout.create(
            amount=amount,
            currency='usd',
            method=payment_method,
            description='Cash Out Gaming Withdrawal'
        )
        return payout.id
    except stripe.error.InvalidRequestError as e:
        return str(e)

def withdrawal(request):
    if request.method == 'POST':
        amount = request.POST.get('amount')
        payment_method = request.POST.get('payment_method')
        payout_id = process_withdrawal(amount, payment_method)
        if payout_id:
            return HttpResponse('Withdrawal successful!')
        else:
            return HttpResponse('Withdrawal failed!')
    return HttpResponse('Invalid request')