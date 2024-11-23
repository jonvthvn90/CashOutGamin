from .models import UserProfile
from .views import user_list
from .models import User
from .views import users, user_detail, create_user

def get_user():
    return User()

def get_user_detail():
    return User()