from django.shortcuts import render, redirect
from django.http import HttpResponse
from .models import PaymentGatewayAPIIntegrationMultiplePaymentMethodsCurrenciesLanguagesPaymentPlansSubscriptionPlansRecurringPaymentsPaymentSchedulesPaymentRemindersPaymentNotificationsPaymentConfirmationsPaymentReceiptsPaymentDisputes
from .forms import PaymentGatewayAPIIntegrationMultiplePaymentMethodsCurrenciesLanguagesPaymentPlansSubscriptionPlansRecurringPaymentsPaymentSchedulesPaymentRemindersPaymentNotificationsPaymentConfirmationsPaymentReceiptsPaymentDisputesForm

def payment_gateway_api_integration_multiple_payment_methods_currencies_languages_payment_plans_subscription_plans_recurring_payments_payment_schedules_payment_reminders_payment_notifications_payment_confirmations_payment_receipts_payment_disputes(request):
    if request.method == 'POST':
        form = PaymentGatewayAPIIntegrationMultiplePaymentMethodsCurrenciesLanguagesPaymentPlansSubscriptionPlansRecurringPaymentsPaymentSchedulesPaymentRemindersPaymentNotificationsPaymentConfirmationsPaymentReceiptsPaymentDisputesForm(request.POST)
        if form.is_valid():
            payment_method = form.cleaned_data['payment_method']
            currency = form.cleaned_data['currency']
            language = form.cleaned_data['language']
            payment_plan = form.cleaned_data['payment_plan']
            subscription_plan = form.cleaned_data['subscription_plan']
            recurring_payment = form.cleaned_data['recurring_payment']
            payment_schedule = form.cleaned_data['payment_schedule']
            payment_reminder = form.cleaned_data['payment_reminder']
            payment_notification = form.cleaned_data['payment_notification']
            payment_confirmation = form.cleaned_data['payment_confirmation']
            payment_receipt = form.cleaned_data['payment_receipt']
            payment_dispute = form.cleaned_data['payment_dispute']

            # Create a new payment gateway API integration
            payment_gateway_api_integration = PaymentGatewayAPIIntegrationMultiplePaymentMethodsCurrenciesLanguagesPaymentPlansSubscriptionPlansRecurringPaymentsPaymentSchedulesPaymentRemindersPaymentNotificationsPaymentConfirmationsPaymentReceiptsPaymentDisputes(
                payment_method=payment_method,
                currency=currency,
                language=language,
                payment_plan=payment_plan,
                subscription_plan=subscription_plan,
                recurring_payment=recurring_payment,
                payment_schedule=payment_schedule,
                payment_reminder=payment_reminder,
                payment_notification=payment_notification,
                payment_confirmation=payment_confirmation,
                payment_receipt=payment_receipt,
                payment_dispute=payment_dispute,
            )
            payment_gateway_api_integration.save()

            return redirect('payment_gateway_api_integration_multiple_payment_methods_currencies_languages_payment_plans_subscription_plans_recurring_payments_payment_schedules_payment_reminders_payment_notifications_payment_confirmations_payment_receipts_payment_disputes_success')
    else:
        form = PaymentGatewayAPIIntegrationMultiplePaymentMethodsCurrenciesLanguagesPaymentPlansSubscriptionPlansRecurringPaymentsPaymentSchedulesPaymentRemindersPaymentNotificationsPaymentConfirmationsPaymentReceiptsPaymentDisputesForm()

    return render(request, 'payment_gateway_api_integration_multiple_payment_methods_currencies_languages_payment_plans_subscription_plans_recurring_payments_payment_schedules_payment_reminders_payment_notifications_payment_confirmations_payment_receipts_payment_disputes.html', {'form': form})

def payment_gateway_api_integration_multiple_payment_methods_currencies_languages_payment_plans_subscription_plans_recurring_payments_payment_schedules_payment_reminders_payment_notifications_payment_confirmations_payment_receipts_payment_disputes_success(request):
    return HttpResponse('Payment gateway API integration created successfully!')