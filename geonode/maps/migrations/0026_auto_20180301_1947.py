# Generated by Django 1.11.10 on 2018-03-02 01:47


from django.db import migrations
import django.db.models.manager


class Migration(migrations.Migration):

    dependencies = [
        ('maps', '0025_auto_20170801_1228'),
    ]

    operations = [
        migrations.AlterModelManagers(
            name='map',
            managers=[
                ('objects', django.db.models.manager.Manager()),
                ('base_objects', django.db.models.manager.Manager()),
            ],
        ),
    ]
