from django.http import HttpResponse
from django.shortcuts import render

def paypal_match_payment_processor(request):
    # PayPal match payment processor code here
    return HttpResponse("PayPal match payment processor successful")