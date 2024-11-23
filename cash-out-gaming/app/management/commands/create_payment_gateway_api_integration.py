from django.core.management.base import BaseCommand
from django.conf import settings
from django.db import transaction
from app.models import PaymentGateway, PaymentMethod
import requests
import json

class Command(BaseCommand):
    help = 'Create payment gateway API integration'

    def handle(self, *args, **options):
        self.create_payment_gateway_api_integration()

    def create_payment_gateway_api_integration(self):
        # Create payment gateway API integration
        payment_gateway = PaymentGateway.objects.create(
            name='Stripe',
            description='Stripe payment gateway',
            api_key=settings.STRIPE_API_KEY,
            api_secret=settings.STRIPE_API_SECRET,
        )

        # Create payment methods for payment gateway
        payment_method1 = PaymentMethod.objects.create(
            payment_gateway=payment_gateway,
            name='Credit Card',
            description='Credit card payment method',
        )

        payment_method2 = PaymentMethod.objects.create(
            payment_gateway=payment_gateway,
            name='Bank Transfer',
            description='Bank transfer payment method',
        )

        # Create API integration with payment gateway
        api_integration = self.create_api_integration(payment_gateway)

        # Test API integration
        self.test_api_integration(api_integration)

    def create_api_integration(self, payment_gateway):
        # Create API integration with payment gateway
        api_key = payment_gateway.api_key
        api_secret = payment_gateway.api_secret
        api_url = 'https://api.stripe.com/v1'

        # Set API headers
        headers = {
            'Authorization': f'Bearer {api_key}',
            'Content-Type': 'application/json',
        }

        # Create API integration
        response = requests.post(f'{api_url}/payment_intents', headers=headers)
        if response.status_code == 200:
            api_integration = response.json()
            return api_integration
        else:
            self.stdout.write(self.style.ERROR(f'Failed to create API integration: {response.text}'))

    def test_api_integration(self, api_integration):
        # Test API integration
        api_url = 'https://api.stripe.com/v1'
        headers = {
            'Authorization': f'Bearer {api_integration["client_secret"]}',
            'Content-Type': 'application/json',
        }

        # Test API integration by creating a payment intent
        response = requests.post(f'{api_url}/payment_intents', headers=headers, json={
            'amount': 1000,
            'currency': 'usd',
            'payment_method_types': ['card'],
        })

        if response.status_code == 200:
            self.stdout.write(self.style.SUCCESS(f'API integration tested successfully: {response.text}'))
        else:
            self.stdout.write(self.style.ERROR(f'Failed to test API integration: {response.text}'))