# Generated by Django 1.11.25 on 2019-10-04 15:48

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('services', '0027_auto_20190429_0831'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='service',
            name='last_updated',
        ),
    ]
