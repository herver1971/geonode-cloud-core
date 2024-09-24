# Configuration file for the Sphinx documentation builder.
#
# For the full list of built-in configuration values, see the documentation:
# https://www.sphinx-doc.org/en/master/usage/configuration.html

# -- Project information -----------------------------------------------------
# https://www.sphinx-doc.org/en/master/usage/configuration.html#project-information
import os
import sys
import django
from django.conf import settings
from django.apps import apps

sys.path.insert(0, os.path.abspath('..'))
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'geonode.settings')

#os.environ['DJANGO_SETTINGS_MODULE'] = 'geonode.settings'

# Inicializa Django
django.setup()

#sys.path.insert(0, os.path.abspath('..'))
#os.environ['DJANGO_SETTINGS_MODULE'] = 'geonode'
#django.setup()

project = 'GeoNode Cloud Core'
copyright = '2024, Kan Territory & IT'
author = 'Kan Territory & IT'
release = '1.0.0'

# -- General configuration ---------------------------------------------------
# https://www.sphinx-doc.org/en/master/usage/configuration.html#general-configuration

extensions = [
    'sphinx.ext.autodoc',
    'sphinx.ext.napoleon',
    'sphinx_autodoc_typehints',
    'sphinx.ext.todo',
    'sphinx.ext.autosummary',
    'sphinxcontrib.openapi',
    'sphinx.ext.coverage',
    'sphinx.ext.doctest',
    'sphinx.ext.intersphinx',
    'sphinx.ext.viewcode'
]

templates_path = ['_templates']
exclude_patterns = ['_build', 'Thumbs.db', '.DS_Store']

language = 'en'
locale_dirs = ['locale/']  # Directorio que contiene los archivos de traducción
gettext_compact = False    # Para evitar la compresión de mensajes en un solo archivo

# -- Options for HTML output -------------------------------------------------
# https://www.sphinx-doc.org/en/master/usage/configuration.html#options-for-html-output

import sphinx_rtd_theme
html_theme = 'sphinx_rtd_theme'
html_static_path = [sphinx_rtd_theme.get_html_theme_path()]
