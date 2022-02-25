---
id: frontend-packages-lazy-modules-search-results
title: Frontend - Dynamic module Search Results
sidebar_label: Search results
slug: /development/frontend/packages/lazy-modules/search-results/
---


## Description

This module is a dynamic configurable module to be used in REGARDS user interfaces. It displays search results from REGARDS catalog. It is used by modules
  - @regardsoss/search-form
  - @regardsoss/search-graph
  
It can be used as a stand-alone module to display the results of a research on a the whole project data catalog.

This module allows:
  - Displaying results data
  - Displaying results datasets
  - Switching display mode between list, table, quicklook and map views
  - Sorting results
  - Filtering results on facets
  - Configuring displayed columns (table mode)
  - Applying Services (UI and Business) on data and dataset data
  - Display a search form and filter results using it
  
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
Dynamic modules are only displayed when the interface route is /modules/:module_id where module_id is the configuration identifier of the module.

## Exposed functions

This module as a dynamic configurable module exposes its own:
  - moduleContainer  : Main module React component used to display this module,
  - adminContainer   : Main module React component used to display the administration panel of this module,
  - reducer          : To configure the general Redux Store.
  - styles           : Styles of the module
  - messages         : Messages and labels internationalization object (default : imported index.js from messages/)
  - dependencies     : The needed resources (backend enpoints) to display each part of the module

## Internationalization

All displayed labels are defined in two languages (English and French) and are avaible from the i18n repository.
