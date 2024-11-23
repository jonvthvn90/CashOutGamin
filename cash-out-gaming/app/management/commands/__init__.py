from django.core.management.commands import BaseCommand
from django.db.models import Q
from app.models import Game, Review, PaymentMethod, PaymentTransaction, CashOutRequest, CashOutTransaction

class Command(BaseCommand):
    help = 'Management commands for the app'

    def add_arguments(self, parser):
        parser.add_argument('--create-test-data', action='store_true', help='Create test data')
        parser.add_argument('--delete-test-data', action='store_true', help='Delete test data')
        parser.add_argument('--list-games', action='store_true', help='List games')
        parser.add_argument('--list-reviews', action='store_true', help='List reviews')
        parser.add_argument('--list-payment-methods', action='store_true', help='List payment methods')
        parser.add_argument('--list-payment-transactions', action='store_true', help='List payment transactions')
        parser.add_argument('--list-cash-out-requests', action='store_true', help='List cash out requests')
        parser.add_argument('--list-cash-out-transactions', action='store_true', help='List cash out transactions')

    def handle(self, *args, **options):
        if options['create_test_data']:
            self.create_test_data()
        elif options['delete_test_data']:
            self.delete_test_data()
        elif options['list_games']:
            self.list_games()
        elif options['list_reviews']:
            self.list_reviews()
        elif options['list_payment_methods']:
            self.list_payment_methods()
        elif options['list_payment_transactions']:
            self.list_payment_transactions()
        elif options['list_cash_out_requests']:
            self.list_cash_out_requests()
        elif options['list_cash_out_transactions']:
            self.list_cash_out_transactions()

    def create_test_data(self):
        # Create test data
        game1 = Game.objects.create(title='Game 1', description='This is game 1')
        game2 = Game.objects.create(title='Game 2', description='This is game 2')

        review1 = Review.objects.create(game=game1, rating=5, review='This is review 1')
        review2 = Review.objects.create(game=game1, rating=4, review='This is review 2')
        review3 = Review.objects.create(game=game2, rating=3, review='This is review 3')

        payment_method1 = PaymentMethod.objects.create(name='Payment Method 1', description='This is payment method 1')
        payment_method2 = PaymentMethod.objects.create(name='Payment Method 2', description='This is payment method 2')

        payment_transaction1 = PaymentTransaction.objects.create(payment_method=payment_method1, amount=10.99)
        payment_transaction2 = PaymentTransaction.objects.create(payment_method=payment_method2, amount=5.99)

        cash_out_request1 = CashOutRequest.objects.create(amount=10.99)
        cash_out_request2 = CashOutRequest.objects.create(amount=5.99)

        cash_out_transaction1 = CashOutTransaction.objects.create(cash_out_request=cash_out_request1, amount=10.99)
        cash_out_transaction2 = CashOutTransaction.objects.create(cash_out_request=cash_out_request2, amount=5.99)

    def delete_test_data(self):
        # Delete test data
        Game.objects.all().delete()
        Review.objects.all().delete()
        PaymentMethod.objects.all().delete()
        PaymentTransaction.objects.all().delete()
        CashOutRequest.objects.all().delete()
        CashOutTransaction.objects.all().delete()

    def list_games(self):
        # List games
        games = Game.objects.all()
        for game in games:
            self.stdout.write(self.style.SUCCESS(f'Title: {game.title}, Description: {game.description}'))

    def list_reviews(self):
        # List reviews
        reviews = Review.objects.all()
        for review in reviews:
            self.stdout.write(self.style.SUCCESS(f'Game: {review.game.title}, Rating: {review.rating}, Review: {review.review}'))

    def list_payment_methods(self):
        # List payment methods
        payment_methods = PaymentMethod.objects.all()
        for payment_method in payment_methods:
            self.stdout.write(self.style.SUCCESS(f'Name: {payment_method.name}, Description: {payment_method.description}'))

    def list_payment_transactions(self):
        # List payment transactions
        payment_transactions = PaymentTransaction.objects.all()
        for payment_transaction in payment_transactions:
            self.stdout.write(self.style.SUCCESS(f'Payment Method: {payment_transaction.payment_method.name}, Amount: {payment_transaction.amount}'))

    def list_cash_out_requests(self):
        # List cash out requests
        cash_out_requests = CashOutRequest.objects.all()
        for cash_out_request in cash_out_requests:
            self.stdout.write(self.style.SUCCESS(f'Amount: {cash_out_request.amount}'))

    def list_cash_out_transactions(self):
        # List cash out transactions
        cash_out_transactions = CashOutTransaction.objects.all()
        for cash_out_transaction in cash_out_transactions:
            self.stdout.write(self.style.SUCCESS(f'Cash Out Request: {cash_out_transaction.cash_out_request.amount}, Amount: {cash_out_transaction.amount}'))