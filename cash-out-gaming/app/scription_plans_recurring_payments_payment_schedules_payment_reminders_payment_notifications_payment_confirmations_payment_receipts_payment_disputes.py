from django.http import HttpResponse
from django.shortcuts import render

def payment_gateway_api_integration_multiple_payment_methods_currencies_languages_payment_plans_subscription_plans_recurring_payments_payment_schedules_payment_reminders_payment_notifications_payment_confirmations_payment_receipts_payment_disputes(request):
    payment_gateway_api_integration = PaymentGatewayAPIIntegration.objects.get(id=1)
    payment_methods = payment_gateway_api_integration.payment_methods.all()
    currencies = payment_gateway_api_integration.currencies.all()
    languages = payment_gateway_api_integration.languages.all()
    payment_plans = payment_gateway_api_integration.payment_plans.all()
    subscription_plans = payment_gateway_api_integration.subscription_plans.all()
    recurring_payments = payment_gateway_api_integration.recurring_payments.all()
    payment_schedules = payment_gateway_api_integration.payment_schedules.all()
    payment_reminders = payment_gateway_api_integration.payment_reminders.all()
    payment_notifications = payment_gateway_api_integration.payment_notifications.all()
    payment_confirmations = payment_gateway_api_integration.payment_confirmations.all()
    payment_receipts = payment_gateway_api_integration.payment_receipts.all()
    payment_disputes = payment_gateway_api_integration.payment_disputes.all()
    return render(request, 'payment_gateway_api_integration_multiple_payment_methods_currencies_languages_payment_plans_subscription_plans_recurring_payments_payment_schedules_payment_reminders_payment_notifications_payment_confirmations_payment_receipts_payment_disputes.html', {
        'payment_methods': payment_methods,
        'currencies': currencies,
        'languages': languages,
        'payment_plans': payment_plans,
        'subscription_plans': subscription_plans,
        'recurring_payments': recurring_payments,
        'payment_schedules': payment_schedules,
        'payment_reminders': payment_reminders,
        'payment_notifications': payment_notifications,
        'payment_confirmations': payment_confirmations,
        'payment_receipts': payment_receipts,
        'payment_disputes': payment_disputes,
    })