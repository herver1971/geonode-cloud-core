# Generated by Django 2.2.16 on 2021-05-20 20:53

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('harvesting', '0010_harvestableresource_should_be_harvested'),
    ]

    operations = [
        migrations.AddField(
            model_name='harvester',
            name='status',
            field=models.CharField(choices=[('ready', 'ready'), ('updating', 'updating'), ('harvesting', 'harvesting')], default='ready', max_length=20),
        ),
    ]
