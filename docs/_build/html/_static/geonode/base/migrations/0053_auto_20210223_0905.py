# Generated by Django 2.2.16 on 2021-02-23 09:05

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0052_auto_20210205_1631'),
    ]

    operations = [
        migrations.AlterField(
            model_name='thesaurus',
            name='id',
            field=models.PositiveIntegerField(primary_key=True, serialize=False, unique=True),
        ),
    ]
