---
layout: classic-docs
title: test
short-title: test
categories:
  - frontend
---

The REGARDS frontend is divided in several modules.

### Business modules

This folder contains all business modules for these applications: admin, user and portal.

```
admin
│   admin-data-management
    |     admin-data-model-management
    |     admin-data-dataset-management
│   admin-project-management
│   admin-account-management
│   admin-user-management
    |     admin-user-projectuser-management
    |     admin-user-role-management
│   admin-database-management
│   ...
user
│   ...
portal
```

Each module is independent.

--------

### Components modules

This package provides **React** components to handle forms, buttons...

### Data

#### api modules

This package contains the [normalizr](https://github.com/paularmstrong/normalizr) logic to map entities from an API result using a Schema into what we put in the store.

```
GIVE AN EXAMPLE HERE
```
#### Models


#### store

Create the intial store injected in the app and add store middlewares
