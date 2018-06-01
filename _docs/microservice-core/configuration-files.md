{% comment %}
---
layout: classic-docs
title: Configurations files
short-title: Configurations files
categories:
  - microservice-core
---
{% endcomment %}

All microservices depends on several configuration files. Here is an overview of each of them.

# Logs

The configuration file for the microservice Logger can be found inside `myMicroService/bootstrap-myMicroservice/src/main/resources/logback.xml`.

To change the verbosity, replace the value of `label` inside `<root level="test">` to one of the following: `debug`, `info`, `warn` and `error`.
