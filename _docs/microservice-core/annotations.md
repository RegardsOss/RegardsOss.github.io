{% comment %}
---
layout: classic-docs
title: Annotations
short-title: Annotations
categories:
  - microservice-core
---
{% endcomment %}

# Domain

Domain annotations provide a simple way to validate objects :

- when an object is deserialized inside a controller method
- before being saved in the Database

## Supported list of annotations

### Integers and floats

- `@NotNull`
- `@Min(0)`
