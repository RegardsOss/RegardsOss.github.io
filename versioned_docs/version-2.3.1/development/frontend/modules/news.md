---
id: frontend-packages-lazy-modules-news
title: Frontend - Dynamic module News
sidebar_label: News
slug: /development/frontend/packages/lazy-modules/news/
---

## Description

This module is a dynamic configurable module to be used in REGARDS user interfaces.
It is used to display a list of news about the REGARDS project.

## Module structure

```
 .  
 ├── src  
 |   ├──  
 |   ├── clients         : Define all backend clients needed to request/send information  
 |   ├── components      : React component to display panels  
 |   ├── containers      : React-Redux logic to handle module functions  
 |   ├── i18n            : Messages and labels internationalization    
 |   ├── styles          : Panels styles (inline css objects)  
 |   ├── main.js         : Module exported index  
 |   ├── reducer.js      : Redux reducers  
 |   └── router.js       : React-router configuration  
 ├── tests  
 ├── default-icon.svg    : Default module icon as svg, mandatory
 ├── package.json        : Npm module description file  
 └── README.md  
```

## Route

This module is routed by the main application in which it is configured as a static or dynamic module.
Static modules are always displayed in the interface layout.
Dynamic modules are only displayed when the interface route is /modules/:module_id where module_id is the configuration
identifier of the module.

## Exposed functions

This module as a dynamic configurable module exposes its own:

- moduleContainer  : Main module React component used to display this module,
- reducer          : To configure the general Redux Store.
- styles           : Styles of the module
- messages         : Messages and labels internationalization object (default : imported index.js from messages/)
- dependencies     : The needed resources (backend endpoints) to display each part of the module

## Internationalization

All displayed labels are defined in two languages (English and French) and are available from the i18n repository.
