from django.apps import AppConfig
from django.db.models.signals import post_migrate
from django.dispatch import receiver
from . import commands

class ManagementConfig(AppConfig):
    name = 'app.management'
    verbose_name = 'Management'

    def ready(self):
        import app.management.signals

default_app_config = 'app.management.ManagementConfig'

@receiver(post_migrate)
def create_groups(sender, **kwargs):
    from django.contrib.auth.models import Group, Permission
    from django.contrib.contenttypes.models import ContentType
    from app.models import Game, Review, PaymentMethod, PaymentTransaction, CashOutRequest, CashOutTransaction

    game_content_type = ContentType.objects.get_for_model(Game)
    review_content_type = ContentType.objects.get_for_model(Review)
    payment_method_content_type = ContentType.objects.get_for_model(PaymentMethod)
    payment_transaction_content_type = ContentType.objects.get_for_model(PaymentTransaction)
    cash_out_request_content_type = ContentType.objects.get_for_model(CashOutRequest)
    cash_out_transaction_content_type = ContentType.objects.get_for_model(CashOutTransaction)

    game_permissions = Permission.objects.filter(content_type=game_content_type)
    review_permissions = Permission.objects.filter(content_type=review_content_type)
    payment_method_permissions = Permission.objects.filter(content_type=payment_method_content_type)
    payment_transaction_permissions = Permission.objects.filter(content_type=payment_transaction_content_type)
    cash_out_request_permissions = Permission.objects.filter(content_type=cash_out_request_content_type)
    cash_out_transaction_permissions = Permission.objects.filter(content_type=cash_out_transaction_content_type)

    admin_group, created = Group.objects.get_or_create(name='Admin')
    moderator_group, created = Group.objects.get_or_create(name='Moderator')
    user_group, created = Group.objects.get_or_create(name='User')

    admin_group.permissions.add(*game_permissions)
    admin_group.permissions.add(*review_permissions)
    admin_group.permissions.add(*payment_method_permissions)
    admin_group.permissions.add(*payment_transaction_permissions)
    admin_group.permissions.add(*cash_out_request_permissions)
    admin_group.permissions.add(*cash_out_transaction_permissions)

    moderator_group.permissions.add(*review_permissions)
    moderator_group.permissions.add(*payment_method_permissions)
    moderator_group.permissions.add(*payment_transaction_permissions)
    moderator_group.permissions.add(*cash_out_request_permissions)
    moderator_group.permissions.add(*cash_out_transaction_permissions)

    user_group.permissions.add(*payment_method_permissions)
    user_group.permissions.add(*payment_transaction_permissions)
    user_group.permissions.add(*cash_out_request_permissions)
    user_group.permissions.add(*cash_out_transaction_permissions)