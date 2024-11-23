from django.db import models

class PayPalPaymentProcessorAPIIntegrationMultiplePaymentMethodsCurrenciesLanguagesPaymentPlansSubscriptionPlansRecurringPaymentsPaymentSchedulesPaymentRemindersPaymentNotificationsPaymentConfirmationsPaymentReceiptsPaymentDisputes(models.Model):
    PAYMENT_METHOD_CHOICES = [
        ('paypal', 'PayPal'),
        ('credit_card', 'Credit Card'),
        ('debit_card', 'Debit Card'),
        ('bank_transfer', 'Bank Transfer'),
    ]

    CURRENCY_CHOICES = [
        ('usd', 'USD'),
        ('eur', 'EUR'),
        ('gbp', 'GBP'),
        ('aud', 'AUD'),
        ('cad', 'CAD'),
    ]

    LANGUAGE_CHOICES = [
        ('en', 'English'),
        ('fr', 'French'),
        ('es', 'Spanish'),
        ('de', 'German'),
        ('it', 'Italian'),
    ]

    PAYMENT_PLAN_CHOICES = [
        ('basic', 'Basic'),
        ('premium', 'Premium'),
        ('enterprise', 'Enterprise'),
    ]

    SUBSCRIPTION_PLAN_CHOICES = [
        ('monthly', 'Monthly'),
        ('yearly', 'Yearly'),
    ]

    RECURRING_PAYMENT_CHOICES = [
        ('yes', 'Yes'),
        ('no', 'No'),
    ]

    PAYMENT_SCHEDULE_CHOICES = [
        ('immediately', 'Immediately'),
        ('daily', 'Daily'),
        ('weekly', 'Weekly'),
        ('monthly', 'Monthly'),
    ]

    PAYMENT_REMINDER_CHOICES = [
        ('yes', 'Yes'),
        ('no', 'No'),
    ]

    PAYMENT_NOTIFICATION_CHOICES = [
        ('yes', 'Yes'),
        ('no', 'No'),
    ]

    PAYMENT_CONFIRMATION_CHOICES = [
        ('yes', 'Yes'),
        ('no', 'No'),
    ]

    PAYMENT_RECEIPT_CHOICES = [
        ('yes', 'Yes'),
        ('no', 'No'),
    ]

    PAYMENT_DISPUTE_CHOICES = [
        ('yes', 'Yes'),
        ('no', 'No'),
    ]

    payment_method = models.CharField(max_length=255, choices=PAYMENT_METHOD_CHOICES)
    currency = models.CharField(max_length=255, choices=CURRENCY_CHOICES)
    language = models.CharField(max_length=255, choices=LANGUAGE_CHOICES)
    payment_plan = models.CharField(max_length=255, choices=PAYMENT_PLAN_CHOICES)
    subscription_plan = models.CharField(max_length=255, choices=SUBSCRIPTION_PLAN_CHOICES)
    recurring_payment = models.CharField(max_length=255, choices=RECURRING_PAYMENT_CHOICES)
    payment_schedule = models.CharField(max_length=255, choices=PAYMENT_SCHEDULE_CHOICES)
    payment_reminder = models.CharField(max_length=255, choices=PAYMENT_REMINDER_CHOICES)
    payment_notification = models.CharField(max_length=255, choices=PAYMENT_NOTIFICATION_CHOICES)
    payment_confirmation = models.CharField(max_length=255, choices=PAYMENT_CONFIRMATION_CHOICES)
    payment_receipt = models.CharField(max_length=255, choices=PAYMENT_RECEIPT_CHOICES)
    payment_dispute = models.CharField(max_length=255, choices=PAYMENT_DISPUTE_CHOICES)

    paypal_payment_id = models.CharField(max_length=255, blank=True, null=True)
    paypal_payment_token = models.CharField(max_length=255, blank=True, null=True)
    paypal_payment_payer_id = models.CharField(max_length=255, blank=True, null=True)
    paypal_payment_payer_email = models.CharField(max_length=255, blank=True, null=True)
    paypal_payment_amount = models.DecimalField(max_digits=10, decimal_places=2, blank=True, null=True)
    paypal_payment_currency = models.CharField(max_length=255, blank=True, null=True)
    paypal_payment_status = models.CharField(max_length=255, blank=True, null=True)

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f'{self.payment_method} - {self.currency} - {self.language} - {self.payment_plan} - {self.subscription_plan} - {self.recurring_payment} - {self.payment_schedule} - {self.payment_reminder} - {self.payment_notification} - {self.payment_confirmation} - {self.payment_receipt} - {self.payment_dispute}'

    class Meta:
        verbose_name = 'PayPal Payment Processor API Integration'
        verbose_name_plural = 'PayPal Payment Processor API Integrations'