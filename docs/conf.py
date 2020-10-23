# -*- coding: utf-8 -*-
import sys, os
from recommonmark.parser import CommonMarkParser

project = u'REGARDS OSS'
author = 'CS GROUP France'
copyright = u'2020, CNES'
version = '1.3'
release = '1.3.0'

# General options
needs_sphinx = '1.0'
master_doc = 'index'
pygments_style = 'tango'
add_function_parentheses = True

extensions = ['sphinx.ext.autodoc', 
'sphinxcontrib.plantuml', 
'sphinxcontrib.redoc', 
'sphinxcontrib.openapi', 
'sphinx_markdown_tables',
'recommonmark']

templates_path = ['_templates']
exclude_trees = ['.build']
source_suffix = {
    '.rst': 'restructuredtext',
    '.txt': 'restructuredtext',
    '.md': 'markdown',
}
source_encoding = 'utf-8-sig'
# source_parsers = {
#   '.md': CommonMarkParser
# }

# HTML options
html_theme = 'sphinx_rtd_theme'
html_theme_options = {
    'logo_only': True,
    'navigation_depth': 5
}
html_short_title = "regards-oss"
htmlhelp_basename = 'regards-oss-doc'
html_use_index = True
html_show_sourcelink = False
html_static_path = ['_static']
html_logo = "regards.png"
html_style = 'css/regards-theme.css'

# PlantUML options
plantuml = os.getenv('plantuml')

# OpenAPI
redoc = [
    {
        'name': 'Feature Manager API',
        'page': 'openapi/fem',
        'spec': 'openapi/fem-api-docs.json',
        'embed': True,
    }
]