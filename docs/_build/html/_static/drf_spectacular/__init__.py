import django

__version__ = '0.26.5'

if django.VERSION < (3, 2):
    default_app_config = 'drf_spectacular.apps.SpectacularConfig'
