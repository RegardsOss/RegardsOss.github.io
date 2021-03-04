---
id: frontend-packages-lazy-modules-order-history
title: Frontend - Dynamic module Order History
sidebar_label: Order history
slug: /development/frontend/packages/lazy-modules/order-history
---


## Description

This module is a dynamic configurable module to be used in REGARDS user interfaces. It displays the history of a logged user orders. It is also used to show all users orders history in project administration interface.

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

This module is routed as a dynamic module to show user order history.
Dynamic modules are only displayed when the interface route is /modules/:module_id where module_id is the configuration identifier of the module.

## Exposed functions

This module as a dynamic configurable module exposes its own:
  - moduleContainer  : Main module React component used to display this module,
  - adminContainer   : Main module React component used to display the administration panel of this module,
  - reducer          : To configure the general Redux Store.
  - styles           : Styles of the module
  - messages         : Messages and labels internationalization objcet (default : imported index.js from messages/)
  - dependencies     : The needed resources (backend enpoints) to display each part of the module

## Internationalization

All displayed labels are defined in two languages (English and French) and are avaible from the i18n repository.
