import os
import logging
from django.conf import settings
from django.core.mail import send_mail
from django.template.loader import render_to_string
from django.utils.html import strip_tags
from django.core.exceptions import ObjectDoesNotExist
from app.models import Game, Review, PaymentMethod, PaymentTransaction, CashOutRequest, CashOutTransaction

# Logging Configuration
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

def send_email(subject, message, from_email, to_email):
    try:
        send_mail(subject, message, from_email, [to_email], fail_silently=False)
        logger.info(f'Email sent to {to_email} successfully.')
    except Exception as e:
        logger.error(f'Error sending email to {to_email}: {str(e)}')

def render_email_template(template_name, context):
    try:
        html_message = render_to_string(template_name, context)
        plain_message = strip_tags(html_message)
        return html_message, plain_message
    except Exception as e:
        logger.error(f'Error rendering email template: {str(e)}')
        return None, None

def get_game_by_id(game_id):
    try:
        game = Game.objects.get(id=game_id)
        return game
    except ObjectDoesNotExist:
        logger.error(f'Game with id {game_id} does not exist.')
        return None

def get_review_by_id(review_id):
    try:
        review = Review.objects.get(id=review_id)
        return review
    except ObjectDoesNotExist:
        logger.error(f'Review with id {review_id} does not exist.')
        return None

def get_payment_method_by_id(payment_method_id):
    try:
        payment_method = PaymentMethod.objects.get(id=payment_method_id)
        return payment_method
    except ObjectDoesNotExist:
        logger.error(f'Payment method with id {payment_method_id} does not exist.')
        return None

def get_payment_transaction_by_id(payment_transaction_id):
    try:
        payment_transaction = PaymentTransaction.objects.get(id=payment_transaction_id)
        return payment_transaction
    except ObjectDoesNotExist:
        logger.error(f'Payment transaction with id {payment_transaction_id} does not exist.')
        return None

def get_cash_out_request_by_id(cash_out_request_id):
    try:
        cash_out_request = CashOutRequest.objects.get(id=cash_out_request_id)
        return cash_out_request
    except ObjectDoesNotExist:
        logger.error(f'Cash out request with id {cash_out_request_id} does not exist.')
        return None

def get_cash_out_transaction_by_id(cash_out_transaction_id):
    try:
        cash_out_transaction = CashOutTransaction.objects.get(id=cash_out_transaction_id)
        return cash_out_transaction
    except ObjectDoesNotExist:
        logger.error(f'Cash out transaction with id {cash_out_transaction_id} does not exist.')
        return None

def create_payment_transaction(payment_method, amount):
    try:
        payment_transaction = PaymentTransaction.objects.create(payment_method=payment_method, amount=amount)
        return payment_transaction
    except Exception as e:
        logger.error(f'Error creating payment transaction: {str(e)}')
        return None

def create_cash_out_request(amount):
    try:
        cash_out_request = CashOutRequest.objects.create(amount=amount)
        return cash_out_request
    except Exception as e:
        logger.error(f'Error creating cash out request: {str(e)}')
        return None

def create_cash_out_transaction(cash_out_request, amount):
    try:
        cash_out_transaction = CashOutTransaction.objects.create(cash_out_request=cash_out_request, amount=amount)
        return cash_out_transaction
    except Exception as e:
        logger.error(f'Error creating cash out transaction: {str(e)}')
        return None