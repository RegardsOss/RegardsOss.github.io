---
layout: classic-docs
title: Frontend Architecture
short-title: Frontend Architecture categories:
categories:
  - frontend
---


The REGARDS frontend is divided in several modules.

Components modules
==================

This package provides **React** components to handle forms, buttons...

Data modules
============

-	api This package contains the normalizr logic to map entities inside the API result.

-	models Provides all typings interface of the application

Utils modules
=============

They provide services to build the core of the app. These modules are cross-application (admin application, front application, user application).

-	access-rights:  
	Receive from the API the list of available actions for the current user and provides utilities to manipulate that data.

-	authentication:  
	Interact with the API to authenticate users.

-	display-control:  
	Interact with the API and provide a service that display on the HMI an element only if the user has the correct right

-	i18n:  
	Provides services related to internationalization

-	injector:  
	Provide a react component injector that injects for you this.context.(i18n && theme) into child.props.(i18n && theme)

-	plugins:  
	Contains the PluginActions and PluginReducers which allow to load plugins if any. Contains the PluginComponent which allow to display a given loaded plugins.

-	store-utils:  
	Instead of using the default pattern of Redux, (provides a single file that contains all selectors of the application that uncombine the store foreach selector), we created the class BasicSelector to handle the uncombination of the store-utils inside the selector itself.

-	store:  
	Create the resulting store injected in the app

-	theme:  
	Provide services related to the theme

Modules
=======

This package contains all dependency modules for the three applications admin, user and portal. Each module is independent.
ons admin, user and portal. Each module is independent.
ns admin, user and portal. Each module is independent.
