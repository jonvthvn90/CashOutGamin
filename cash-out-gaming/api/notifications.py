from django.core.mail import send_mail
from django.conf import settings

def send_notification(user, message):
    send_mail(
        'Notification from Cash Out Gaming',
        message,
        settings.EMAIL_HOST_USER,
        [user.email],
        fail_silently=False,
    )

def notifications(request, user_id, message):
    user = User.objects.get(id=user_id)
    send_notification(user, message)
    return HttpResponse('Notification sent!')