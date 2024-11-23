from django.core.management.base import BaseCommand
from django.conf import settings
from django.db import transaction
from app.models import PaymentProcessor, PaymentMethod
import requests
import json

class Command(BaseCommand):
    help = 'Create payment processor API integration'

    def handle(self, *args, **options):
        self.create_payment_processor_api_integration()

    def create_payment_processor_api_integration(self):
        # Create payment processor API integration
        payment_processor = PaymentProcessor.objects.create(
            name='PayPal',
            description='PayPal payment processor',
            api_key=settings.PAYPAL_API_KEY,
            api_secret=settings.PAYPAL_API_SECRET,
        )

        # Create payment methods for payment processor
        payment_method1 = PaymentMethod.objects.create(
            payment_processor=payment_processor,
            name='Credit Card',
            description='Credit card payment method',
        )

        payment_method2 = PaymentMethod.objects.create(
            payment_processor=payment_processor,
            name='Bank Transfer',
            description='Bank transfer payment method',
        )

        # Create API integration with payment processor
        api_integration = self.create_api_integration(payment_processor)

        # Test API integration
        self.test_api_integration(api_integration)

    def create_api_integration(self, payment_processor):
        # Create API integration with payment processor
        api_key = payment_processor.api_key
        api_secret = payment_processor.api_secret
        api_url = 'https://api.paypal.com/v1'

        # Set API headers
        headers = {
            'Authorization': f'Bearer {api_key}',
            'Content-Type': 'application/json',
        }

        # Create API integration
        response = requests.post(f'{api_url}/payments/payment', headers=headers)
        if response.status_code == 200:
            api_integration = response.json()
            return api_integration
        else:
            self.stdout.write(self.style.ERROR(f'Failed to create API integration: {response.text}'))

    def test_api_integration(self, api_integration):
        # Test API integration
        api_url = 'https://api.paypal.com/v1'
        headers = {
            'Authorization': f'Bearer {api_integration["client_secret"]}',
            'Content-Type': 'application/json',
        }

        # Test API integration by creating a payment
        response = requests.post(f'{api_url}/payments/payment', headers=headers, json={
            'intent': 'sale',
            'payer': {
                'payment_method': 'paypal',
            },
            'transactions': [
                {
                    'amount': {
                        'total': '10.00',
                        'currency': 'USD',
                    },
                },
            ],
        })

        if response.status_code == 200:
            self.stdout.write(self.style.SUCCESS(f'API integration tested successfully: {response.text}'))
        else:
            self.stdout.write(self.style.ERROR(f'Failed to test API integration: {response.text}'))

    def create_webhook(self, payment_processor):
        # Create webhook for payment processor
        api_key = payment_processor.api_key
        api_secret = payment_processor.api_secret
        api_url = 'https://api.paypal.com/v1'

        # Set API headers
        headers = {
            'Authorization': f'Bearer {api_key}',
            'Content-Type': 'application/json',
        }

        # Create webhook
        response = requests.post(f'{api_url}/notifications/webhooks', headers=headers, json={
            'url': 'https://example.com/paypal-webhook',
            'event_types': [
                'PAYMENT.SALE.COMPLETED',
            ],
        })

        if response.status_code == 200:
            self.stdout.write(self.style.SUCCESS(f'Webhook created successfully: {response.text}'))
        else:
            self.stdout.write(self.style.ERROR(f'Failed to create webhook: {response.text}'))

    def create_subscription_plan(self, payment_processor):
        # Create subscription plan for payment processor
        api_key = payment_processor.api_key
        api_secret = payment_processor.api_secret
        api_url = 'https://api.paypal.com/v1'

        # Set API headers
        headers = {
            'Authorization': f'Bearer {api_key}',
            'Content-Type': 'application/json',
        }

        # Create subscription plan
        response = requests.post(f'{api_url}/billing/plans', headers=headers, json={
            'name': 'Monthly Subscription',
            'description': 'Monthly subscription plan',
            'type': 'INFINITE',
            'payment_definitions': [
                {
                    'name': 'Monthly Payment',
                    'type': 'REGULAR',
                    'frequency': 'MONTH',
                    'frequency_interval': 1,
                    'amount': {
                        'value': '10.00',
                        'currency': 'USD',
                    },
                },
            ],
        })

        if response.status_code == 200:
            self.stdout.write(self.style.SUCCESS(f'Subscription plan created successfully: {response.text}'))
        else:
            self.stdout.write(self.style.ERROR(f'Failed to create subscription plan: {response.text}'))