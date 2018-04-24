---
layout: classic-docs
title: REGARDS Storage API
shot-title: REGARDS Storage API
categories:
  - api
---
<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

Base API URL may vary and is not mentioned here. So in production, each URL specified here must be prefixed with this base URL.!

{% for controller in site.data.storageControllers %}
  - [{{ controller.controllerName }}](#{{ controller.controllerName | downcase }})
{% endfor %}

{% include_relative includes/rs-storage-template.md controllers=site.data.storageControllers %}