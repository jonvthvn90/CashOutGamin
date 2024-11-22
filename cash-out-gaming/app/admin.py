from django.contrib import admin
from .models import User, Profile
from .models import Post, Comment

admin.site.register(User)
admin.site.register(Profile)
admin.site.register(Post)
admin.site.register(Comment)