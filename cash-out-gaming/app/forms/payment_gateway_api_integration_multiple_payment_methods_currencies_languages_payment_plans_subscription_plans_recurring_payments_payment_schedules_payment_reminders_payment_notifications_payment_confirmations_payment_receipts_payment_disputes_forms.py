from django import forms
from .models import PaymentGatewayAPIIntegrationMultiplePaymentMethodsCurrenciesLanguagesPaymentPlansSubscriptionPlansRecurringPaymentsPaymentSchedulesPaymentRemindersPaymentNotificationsPaymentConfirmationsPaymentReceiptsPaymentDisputes

class PaymentGatewayAPIIntegrationMultiplePaymentMethodsCurrenciesLanguagesPaymentPlansSubscriptionPlansRecurringPaymentsPaymentSchedulesPaymentRemindersPaymentNotificationsPaymentConfirmationsPaymentReceiptsPaymentDisputesForm(forms.ModelForm):
    class Meta:
        model = PaymentGatewayAPIIntegrationMultiplePaymentMethodsCurrenciesLanguagesPaymentPlansSubscriptionPlansRecurringPaymentsPaymentSchedulesPaymentRemindersPaymentNotificationsPaymentConfirmationsPaymentReceiptsPaymentDisputes
        fields = (
            'payment_method',
            'currency',
            'language',
            'payment_plan',
            'subscription_plan',
            'recurring_payment',
            'payment_schedule',
            'payment_reminder',
            'payment_notification',
            'payment_confirmation',
            'payment_receipt',
            'payment_dispute',
        )

    def __init__(self, *args, **kwargs):
        super(PaymentGatewayAPIIntegrationMultiplePaymentMethodsCurrenciesLanguagesPaymentPlansSubscriptionPlansRecurringPaymentsPaymentSchedulesPaymentRemindersPaymentNotificationsPaymentConfirmationsPaymentReceiptsPaymentDisputesForm, self).__init__(*args, **kwargs)
        self.fields['payment_method'].widget = forms.Select(choices=[
            ('stripe', 'Stripe'),
            ('paypal', 'PayPal'),
            ('bank_transfer', 'Bank Transfer'),
        ])
        self.fields['currency'].widget = forms.Select(choices=[
            ('usd', 'USD'),
            ('eur', 'EUR'),
            ('gbp', 'GBP'),
        ])
        self.fields['language'].widget = forms.Select(choices=[
            ('en', 'English'),
            ('fr', 'French'),
            ('es', 'Spanish'),
        ])
        self.fields['payment_plan'].widget = forms.Select(choices=[
            ('basic', 'Basic'),
            ('premium', 'Premium'),
            ('enterprise', 'Enterprise'),
        ])
        self.fields['subscription_plan'].widget = forms.Select(choices=[
            ('monthly', 'Monthly'),
            ('yearly', 'Yearly'),
        ])
        self.fields['recurring_payment'].widget = forms.Select(choices=[
            ('yes', 'Yes'),
            ('no', 'No'),
        ])
        self.fields['payment_schedule'].widget = forms.Select(choices=[
            ('immediately', 'Immediately'),
            ('daily', 'Daily'),
            ('weekly', 'Weekly'),
            ('monthly', 'Monthly'),
        ])
        self.fields['payment_reminder'].widget = forms.Select(choices=[
            ('yes', 'Yes'),
            ('no', 'No'),
        ])
        self.fields['payment_notification'].widget = forms.Select(choices=[
            ('yes', 'Yes'),
            ('no', 'No'),
        ])
        self.fields['payment_confirmation'].widget = forms.Select(choices=[
            ('yes', 'Yes'),
            ('no', 'No'),
        ])
        self.fields['payment_receipt'].widget = forms.Select(choices=[
            ('yes', 'Yes'),
            ('no', 'No'),
        ])
        self.fields['payment_dispute'].widget = forms.Select(choices=[
            ('yes', 'Yes'),
            ('no', 'No'),
        ])

    def clean(self):
        cleaned_data = super(PaymentGatewayAPIIntegrationMultiplePaymentMethodsCurrenciesLanguagesPaymentPlansSubscriptionPlansRecurringPaymentsPaymentSchedulesPaymentRemindersPaymentNotificationsPaymentConfirmationsPaymentReceiptsPaymentDisputesForm, self).clean()
        payment_method = cleaned_data.get('payment_method')
        currency = cleaned_data.get('currency')
        language = cleaned_data.get('language')
        payment_plan = cleaned_data.get('payment_plan')
        subscription_plan = cleaned_data.get('subscription_plan')
        recurring_payment = cleaned_data.get('recurring_payment')
        payment_schedule = cleaned_data.get('payment_schedule')
        payment_reminder = cleaned_data.get('payment_reminder')
        payment_notification = cleaned_data.get('payment_notification')
        payment_confirmation = cleaned_data.get('payment_confirmation')
        payment_receipt = cleaned_data.get('payment_receipt')
        payment_dispute = cleaned_data.get('payment_dispute')

        if payment_method == 'stripe' and currency != 'usd':
            self.add_error('currency', 'Stripe only supports USD')

        if payment_method == 'paypal' and currency not in ['usd', 'eur', 'gbp']:
            self.add_error('currency', 'PayPal only supports USD, EUR, and GBP')

        if payment_plan == 'basic' and subscription_plan != 'monthly':
            self.add_error('subscription_plan', 'Basic plan only supports monthly subscription')

        if payment_plan == 'premium' and subscription_plan != 'yearly':
            self.add_error('subscription_plan', 'Premium plan only supports yearly subscription')

        if recurring_payment == 'yes' and payment_schedule not in ['immediately', 'daily', 'weekly', 'monthly']:
            self.add_error('payment_schedule', 'Recurring payment only supports immediately, daily, weekly, and monthly schedules')

        return cleaned_data