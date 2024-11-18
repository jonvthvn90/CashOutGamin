import factory

from .models import User, Profile

class UserFactory(factory.Factory):
    class Meta:
        model = User

    username = factory.Faker('username')
    email = factory.Faker('email')
    password = factory.Faker('password')

class ProfileFactory(factory.Factory):
    class Meta:
        model = Profile

    user = factory.SubFactory(UserFactory)
    bio = factory.Faker('text')