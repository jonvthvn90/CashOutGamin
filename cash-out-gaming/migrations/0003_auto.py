from django.db import migrations, models

class Migration(migrations.Migration):
    dependencies = [
        ('app', '0002_auto_<timestamp>'),
    ]
    operations = [
        migrations.AddField(
            model_name='profile',
            name='created_at',
            field=models.DateTimeField(auto_now_add=True, default=django.utils.timezone.now),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='profile',
            name='updated_at',
            field=models.DateTimeField(auto_now=True),
        ),
    ]