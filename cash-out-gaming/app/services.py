from django.core.mail import send_mail

def send_welcome_email(user):
    send_mail('Welcome to our site!', 'Welcome to our site!', 'example@example.com', [user.email])