import stripe
from django.conf import settings
from django.http import HttpResponse

stripe.api_key = settings.STRIPE_API_KEY

def process_payment(amount, payment_method):
    try:
        charge = stripe.Charge.create(
            amount=amount,
            currency='usd',
            source=payment_method,
            description='Cash Out Gaming Payment'
        )
        return charge.id
    except stripe.error.CardError as e:
        return str(e)

def payment_gateway(request):
    if request.method == 'POST':
        amount = request.POST.get('amount')
        payment_method = request.POST.get('payment_method')
        charge_id = process_payment(amount, payment_method)
        if charge_id:
            return HttpResponse('Payment successful!')
        else:
            return HttpResponse('Payment failed!')
    return HttpResponse('Invalid request')