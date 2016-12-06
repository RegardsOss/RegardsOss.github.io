---
layout: classic-docs
title: Architecture
short-title: Architecture categories:
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

--------

### Utils modules

They provide services to build the core of the app. These modules are cross-application (admin application, front application, user application).

#### access-rights

Receive from the API the list of available actions for the current user and provides utilities to manipulate that data.

#### authentication

Interact with the API to authenticate users. Provides some helper to authenticate the user, get his state,...

#### display-control

Provide ready to use React components to show/hide a component depending on a logic. Available modules: `HateoasDisplayDecorator`

#### form-utils

Provides ready to use internationalized, React components and helpers, validation methods and everything related to forms logic.

#### i18n

Provides services related to internationalization

#### injector

Provide a react component injector that injects for you this.context.(i18n && theme) into child.props.(i18n && theme)

#### plugins

Contains the PluginActions and PluginReducers which allow to load plugins if any. Contains the PluginComponent which allow to display a given loaded plugins.

#### store-utils

Instead of using the default pattern of Redux, (provides a single file that contains all selectors of the application that uncombine the store foreach selector), we created the class `BasicSelector` to handle the uncombination of the store-utils inside the selector itself.
We also created a `BasicListActions` and `BasicListReducers` to catch most of the CRUD for a entity type.


#### 	theme

Provide services related to the theme
