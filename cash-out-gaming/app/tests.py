from django.test import TestCase
from .models import User, Profile
from .models import Post, Comment

class PostTestCase(TestCase):
    def test_post_creation(self):
        post = Post.objects.create(title='Test Post', content='This is a test post.')
        self.assertEqual(post.title, 'Test Post')
        self.assertEqual(post.content, 'This is a test post.')

class CommentTestCase(TestCase):
    def test_comment_creation(self):
        post = Post.objects.create(title='Test Post', content='This is a test post.')
        comment = Comment.objects.create(post=post, content='This is a test comment.')
        self.assertEqual(comment.post, post)
        self.assertEqual(comment.content, 'This is a test comment.')
        
class TestModels(TestCase):
    def test_user_creation(self):
        user = User.objects.create(username='testuser', email='testuser@example.com', password='testpassword')
        self.assertEqual(user.username, 'testuser')
        self.assertEqual(user.email, 'testuser@example.com')

    def test_profile_creation(self):
        user = User.objects.create(username='testuser', email='testuser@example.com', password='testpassword')
        profile = Profile.objects.create(user=user, bio='Test bio')
        self.assertEqual(profile.user, user)
        self.assertEqual(profile.bio, 'Test bio')
import unittest
from django.contrib.auth import get_user_model
from .models import User, Game, GameCategory, GameSubCategory, GameTag, GameReview, PaymentMethod, PaymentTransaction, CashOutRequest, CashOutTransaction

class TestUserModel(TestCase):
    def test_user_creation(self):
        user = User.objects.create_user(username='testuser', email='testuser@example.com', password='password')
        self.assertEqual(user.username, 'testuser')
        self.assertEqual(user.email, 'testuser@example.com')
        self.assertTrue(user.is_active)
        self.assertFalse(user.is_staff)
        self.assertFalse(user.is_superuser)

    def test_user_update(self):
        user = User.objects.create_user(username='testuser', email='testuser@example.com', password='password')
        user.username = 'newusername'
        user.email = 'newemail@example.com'
        user.save()
        self.assertEqual(user.username, 'newusername')
        self.assertEqual(user.email, 'newemail@example.com')

    def test_user_delete(self):
        user = User.objects.create_user(username='testuser', email='testuser@example.com', password='password')
        user.delete()
        self.assertEqual(User.objects.count(), 0)

class TestGameModel(TestCase):
    def test_game_creation(self):
        game = Game.objects.create(title='Test Game', description='This is a test game')
        self.assertEqual(game.title, 'Test Game')
        self.assertEqual(game.description, 'This is a test game')

    def test_game_update(self):
        game = Game.objects.create(title='Test Game', description='This is a test game')
        game.title = 'New Game Title'
        game.description = 'New game description'
        game.save()
        self.assertEqual(game.title, 'New Game Title')
        self.assertEqual(game.description, 'New game description')

    def test_game_delete(self):
        game = Game.objects.create(title='Test Game', description='This is a test game')
        game.delete()
        self.assertEqual(Game.objects.count(), 0)

class TestGameCategoryModel(TestCase):
    def test_game_category_creation(self):
        category = GameCategory.objects.create(name='Test Category', description='This is a test category')
        self.assertEqual(category.name, 'Test Category')
        self.assertEqual(category.description, 'This is a test category')

    def test_game_category_update(self):
        category = GameCategory.objects.create(name='Test Category', description='This is a test category')
        category.name = 'New Category Name'
        category.description = 'New category description'
        category.save()
        self.assertEqual(category.name, 'New Category Name')
        self.assertEqual(category.description, 'New category description')

    def test_game_category_delete(self):
        category = GameCategory.objects.create(name='Test Category', description='This is a test category')
        category.delete()
        self.assertEqual(GameCategory.objects.count(), 0)

class TestGameSubCategoryModel(TestCase):
    def test_game_sub_category_creation(self):
        category = GameCategory.objects.create(name='Test Category', description='This is a test category')
        sub_category = GameSubCategory.objects.create(category=category, name='Test Sub Category', description='This is a test sub category')
        self.assertEqual(sub_category.category, category)
        self.assertEqual(sub_category.name, 'Test Sub Category')
        self.assertEqual(sub_category.description, 'This is a test sub category')

    def test_game_sub_category_update(self):
        category = GameCategory.objects.create(name='Test Category', description='This is a test category')
        sub_category = GameSubCategory.objects.create(category=category, name='Test Sub Category', description='This is a test sub category')
        sub_category.name = 'New Sub Category Name'
        sub_category.description = 'New sub category description'
        sub_category.save()
        self.assertEqual(sub_category.name, 'New Sub Category Name')
        self.assertEqual(sub_category.description, 'New sub category description')

    def test_game_sub_category_delete(self):
        category = GameCategory.objects.create(name='Test Category', description='This is a test category')
        sub_category = GameSubCategory.objects.create(category=category, name='Test Sub Category', description='This is a test sub category')
        sub_category.delete()
        self.assertEqual(GameSubCategory.objects.count(), 0)

class TestGameTagModel(TestCase):
    def test_game_tag_creation(self):
        tag = GameTag.objects.create(name='Test Tag', description='This is a test tag')
        self.assertEqual(tag.name, 'Test Tag')
        self.assertEqual(tag.description, 'This is a test tag')

    def test_game_tag_update(self):
        tag = GameTag.objects.create(name='Test Tag', description='This is a test tag')
        tag.name = 'New Tag Name'
        tag.description = 'New tag description'
        tag.save()
        self.assertEqual(tag.name, 'New Tag Name')
        self.assertEqual(tag.description, 'New tag description')

    def test_game_tag_delete(self):
        tag = GameTag.objects.create(name='Test Tag', description='This is a test tag')
        tag.delete()
        self.assertEqual(GameTag.objects.count(), 0)

class TestGameReviewModel(TestCase):
    def test_game_review_creation(self):
        game = Game.objects.create(title='Test Game', description='This is a test game')
        user = User.objects.create_user(username='testuser', email='testuser@example.com', password='password')
        review = GameReview.objects.create(game=game, user=user, rating=5, review='This is a test review')
        self.assertEqual(review.game, game)
        self.assertEqual(review.user, user)
        self.assertEqual(review.rating, 5)
        self.assertEqual(review.review, 'This is a test review')

    def test_game_review_update(self):
        game = Game.objects.create(title='Test Game', description='This is a test game')
        user = User.objects.create_user(username='testuser', email='testuser@example.com', password='password')
        review = GameReview.objects.create(game=game, user=user, rating=5, review='This is a test review')
        review.rating = 4
        review.review = 'New review text'
        review.save()
        self.assertEqual(review.rating, 4)
        self.assertEqual(review.review, 'New review text')

    def test_game_review_delete(self):
        game = Game.objects.create(title='Test Game', description='This is a test game')
        user = User.objects.create_user(username='testuser', email='testuser@example.com', password='password')
        review = GameReview.objects.create(game=game, user=user, rating=5, review='This is a test review')
        review.delete()
        self.assertEqual(GameReview.objects.count(), 0)

class TestPaymentMethodModel(TestCase):
    def test_payment_method_creation(self):
        payment_method = PaymentMethod.objects.create(name='Test Payment Method', description='This is a test payment method')
        self.assertEqual(payment_method.name, 'Test Payment Method')
        self.assertEqual(payment_method.description, 'This is a test payment method')

    def test_payment_method_update(self):
        payment_method = PaymentMethod.objects.create(name='Test Payment Method', description='This is a test payment method')
        payment_method.name = 'New Payment Method Name'
        payment_method.description = 'New payment method description'
        payment_method.save()
        self.assertEqual(payment_method.name, 'New Payment Method Name')
        self.assertEqual(payment_method.description, 'New payment method description')

    def test_payment_method_delete(self):
        payment_method = PaymentMethod.objects.create(name='Test Payment Method', description='This is a test payment method')
        payment_method.delete()
        self.assertEqual(PaymentMethod.objects.count(), 0)

class TestPaymentTransactionModel(TestCase):
    def test_payment_transaction_creation(self):
        payment_method = PaymentMethod.objects.create(name='Test Payment Method', description='This is a test payment method')
        user = User.objects.create_user(username='testuser', email='testuser@example.com', password='password')
        transaction = PaymentTransaction.objects.create(payment_method=payment_method, user=user, amount=10.99)
        self.assertEqual(transaction.payment_method, payment_method)
        self.assertEqual(transaction.user, user)
        self.assertEqual(transaction.amount, 10.99)

    def test_payment_transaction_update(self):
        payment_method = PaymentMethod.objects.create(name='Test Payment Method', description='This is a test payment method')
        user = User.objects.create_user(username='testuser', email='testuser@example.com', password='password')
        transaction = PaymentTransaction.objects.create(payment_method=payment_method, user=user, amount=10.99)
        transaction.amount = 5.99
        transaction.save()
        self.assertEqual(transaction.amount, 5.99)

    def test_payment_transaction_delete(self):
        payment_method = PaymentMethod.objects.create(name='Test Payment Method', description='This is a test payment method')
        user = User.objects.create_user(username='testuser', email='testuser@example.com', password='password')
        transaction = PaymentTransaction.objects.create(payment_method=payment_method, user=user, amount=10.99)
        transaction.delete()
        self.assertEqual(PaymentTransaction.objects.count(), 0)

class TestCashOutRequestModel(TestCase):
    def test_cash_out_request_creation(self):
        user = User.objects.create_user(username='testuser', email='testuser@example.com', password='password')
        request = CashOutRequest.objects.create(user=user, amount=10.99)
        self.assertEqual(request.user, user)
        self.assertEqual(request.amount, 10.99)

    def test_cash_out_request_update(self):
        user = User.objects.create_user(username='testuser', email='testuser@example.com', password='password')
        request = CashOutRequest.objects.create(user=user, amount=10.99)
        request.amount = 5.99
        request.save()
        self.assertEqual(request.amount, 5.99)

   