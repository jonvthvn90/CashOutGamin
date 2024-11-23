from django.http import HttpResponse
from django.shortcuts import render

def paypal_match_payment_processor_api_integration_multiple_payment_methods_currencies_languages_payment_plans_subscription_plans_recurring_payments_payment_schedules_payment_reminders_payment_notifications_payment_confirmations_payment_receipts_payment_disputes(request):
    paypal_match_payment_processor_api_integration = PayPalMatchPaymentProcessorAPIIntegration.objects.get(id=1)
    payment_methods = paypal_match_payment_processor_api_integration.payment_methods.all()
    currencies = paypal_match_payment_processor_api_integration.currencies.all()
    languages = paypal_match_payment_processor_api_integration.languages.all()
    payment_plans = paypal_match_payment_processor_api_integration.payment_plans.all()
    subscription_plans = paypal_match_payment_processor_api_integration.subscription_plans.all()
    recurring_payments = paypal_match_payment_processor_api_integration.recurring_payments.all()
    payment_schedules = paypal_match_payment_processor_api_integration.payment_schedules.all()
    payment_reminders = paypal_match_payment_processor_api_integration.payment_reminders.all()
    payment_notifications = paypal_match_payment_processor_api_integration.payment_notifications.all()
    payment_confirmations = paypal_match_payment_processor_api_integration.payment_confirmations.all()
    payment_receipts = paypal_match_payment_processor_api_integration.payment_receipts.all()
    payment_disputes = paypal_match_payment_processor_api_integration.payment_disputes.all()
    
    # Create a dictionary to store the data
    data = {
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
    }
    
    # Render the template with the data
    return render(request, 'paypal_match_payment_processor_api_integration_multiple_payment_methods_currencies_languages_payment_plans_subscription_plans_recurring_payments_payment_schedules_payment_reminders_payment_notifications_payment_confirmations_payment_receipts_payment_disputes.html', data)