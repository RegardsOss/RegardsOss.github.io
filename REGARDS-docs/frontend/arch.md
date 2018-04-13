---
layout: classic-docs
title: Architecture & Overall presentation
short-title: Architecture
categories:
  - frontend
---

The REGARDS frontend contains three differents interfaces:
 - The `Portal interface`, fully configurable (layout, theme and modules displayed), that lists projects. 
 - The `User interface`, fully configurable (layout, theme and modules displayed), that lets users browse project content. 
 - The `Administrator interface` allows **Instance admin** to create Projects and **Project Admin** to configure projects. 

For the `Portal` and `User` interfaces, REGARDS UI defines [Dynamic modules](/frontend/modules/dynamic-modules/) to bring UI features that the administrator can controll (options, layout, menus...).

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->


- [Structure](#structure)
- [Common businness modules (business-common)](#common-businness-modules-business-common)
- [Business modules](#business-modules)
- [Eslint configuration module](#eslint-configuration-module)
- [Mocks](#mocks)
- [Plugins](#plugins)
- [Components modules](#components-modules)
- [Data](#data)
- [Modules](#modules)
- [Utils modules](#utils-modules)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

# Structure

The REGARDS frontend is divided in several NPM modules. Each one has a `package.json` file defining the name of the module in the application. It allows us to import a module using his name instead of using a relative path.

```
import { configureStore } from '@regardsoss/store' // Good
import { configureStore } from '../web_modules/data/store/src/main.js' // Bad practice
```

Before further explanation about the role of each module and folders, let's have a look on the global rs-frontend/webapp folder structure.

```
├── webapp                                    # REGARDS Frontend webapp folder
    ├── dist                                  # transpiled code for dev and prod 
    ├── eslint-config-es6-rules               # Eslint configuration for project (as a module)
    ├── mocks                                 # Holds mock servers for features development
    ├── plugins                               # REGARDS plugins
    ├── reports                               # Local reports
    |  ├── coverage                           # Coverage report
    |  ├── mocha                              # Test report
    ├── resources                             # Some demo resources
    ├── scripts                               # Some helper scripts for installing, building... Mainly for plugins usage
    ├── src                                   # frontend starter source code, common to user, portal and admin applications
    |  ├── main.jsx                           # Starter React file
    |  ├── rootReducer.js                     # Loads the Redux tree
    |  └── rootRouter.js                      # Loads the react-router logic
    ├── tests                                 # Tests corresponding to src folder
    ├── web_modules                           # Contains all @regardsoss and @regardsoss-modules modules, except builder and lint modules
    |  ├── business-common                    # Reusable business logic, often shared between admin and user app
    |  ├── business-modules                   # Application static modules and specific applications starters `admin`, `portal` and `user`
    |  ├── components                         # Reusable React components
    |  ├── data                               # data related reusable elements
    |  |  ├── api                             # module holding normalizer configurations for backend API
    |  |  ├── client                          # module holding redux client to fetch data from backend
    |  |  ├── domain                          # module holding business domain enumerations and constants
    |  |  ├── shape                           # React PropTypes related with backend data and normalized data
    |  |  └── store                           # Redux store helpers and configurators
    |  ├── modules                            # Dynamic modules 
    |  ├── utils                              # REGARDS "generic" toolkit
    |  └── vendors                            # External libraries forks
    ├── webpack-config-front                  # Module holding plugins and modules webpack transpiler and defining dev and prod build constants
    ├── yeoman                                # Yeoman templates (cli to generate frontend modules and plugins)
    ├── package.json                          # Define npm scripts and list all dependencies
    ├── webpack.*.config.js                   # Various webpack configuration files, corresponding to similar NPM task in package.json
```


# Common businness modules (business-common)

This folder contains business related modules, shared accross many REGARDS modules and / or applications)

1. `admin-data-entities-attributes-management`:
    Shared React component to handle entities attributes configuration
1. `attributes-common`: Shared React components to configure and display attributes values
1. `endpoints-common`: Shared data fetcher and storage for endpoint access rights
1. `entities-common`: Shared React components for entities related UI services (like displaying entity detail)
1. `global-system-error`: Shared React components to display errors in REGARDS interfaces
1. `project-handler`: Shared react High Order Component to fetch and publish in Redux store (see later sections) the current project
1. `user-metadata-common`: Shared project user metadata definition and edition React components

# Business modules

This folder contains all applications modules that are not *dynamic* - ie that cannot be configured and set up in user nor in portal applications
As administration interface elements cannot be configured, all administration modules are also in this folder.  

_Note: The administration application is structured in a thematic tree, like seen in the tree below. Each module at a given tree level imports and sets up the modules below (reducers, routers,...)_

```
├── portal                                              # Portal app starter
├── user                                                # User app starter
└── admin                                               # Admin app starter
    ├── admin-data-management                           # Data (rs-dam tenant)
        ├── admin-data-attributemodel-management        # Attribute model
        ├── admin-data-collection-management            # Collection 
        ├── admin-data-connection-management            # Connection 
        ├── admin-data-dataset-management               # Dataset 
        ├── admin-data-datasource-management            # Datasource 
        ├── admin-data-fragment-management              # Fragment 
        ├── admin-data-model-management                 # Model 
        └── admin-data-modelattribute-management        # Model attribute association
    ├── admin-microservice-management                   # Java Plugins and microservice lifecycle
    ├── admin-project-management                        # Project (rs-admin instance)
    ├── admin-account-management                        # Account (rs-admin instance)
    ├── admin-ui-management                             # User interface (rs-access-*)
        ├── admin-ui-module-management                  # UI Modules configuration
        ├── admin-ui-plugin-management                  # UI Plugin
        ├── admin-ui-layout-management                  # UI Layout
        ├── admin-ui-service-management                 # UI Plugin services
        └── admin-ui-theme-management                   # UI Theme
    ├── admin-user-management                           # User configuration (rs-admin tenant)
        ├── admin-user-projectuser-management           # Project User 
        ├── admin-user-role-management                  # Role
        └── admin-user-role-resource-access-management  # REST resource authorisation per role
    └── admin-accessright-management                    # Data access rights (rs-dam tenant)
        ├── admin-accessright-accessgroup-management    # Data access groups
        └── admin-accessright-dataaccess-management     # Data access rights per group 
```

# Eslint configuration module

The folder `eslint-config-es6-rules` holds the lint configuration module for REGARDS frontend. Lint corresponds to the set of style rules that are applied to project code.

# Mocks

The `mocks` folder contains runnable mock servers:
* *front* folder contains a standalone server that answers all front end calls based on a node JS server
* *json* folder contains a standalone server that answers all front end calls using JSONServer
* *proxy* folder contains a standalone server that answers known front end calls based on a local node JS server and is able to report unknown URL onto configured backend server, acting as a proxy

Those servers are used to develop and test new functionnalities. The team recently uses **proxy** server for most new features development.

# Plugins

The `plugins` folder contains REGARDS front end plugins code. Those plugins are separed of front end core code. However, it is convenient for development to keep the folder within webapp to address compilation, version and references issues. For more detail about plugins, see [about plugins page](/frontend/plugins/)

# Components modules

This package provides **React** generic components to handle forms, buttons, cards and so on. More details are available in [components detail page](/frontend/components/components/)

# Data

This folder holds API data related modules (server fetching, shapes, redux store, middlewares...). See [data presentation page](/frontend/data/)

# Modules

This folder contains all _dynamic_ modules, ie all modules that can be configured to be displayed in user and portal application. For more details, see [dynamic modules sections](/frontend/modules/dynamic-modules/)  

# Utils modules
This folder holds modules, one by folder, providing high level tools and components shared by all application interfaces (admininistration, user application and portal application).

1. `adapters`: Provides enriched components from external librairies - adds headless render or default styles to a component for instance
1. `authentication-utils`: Interact with the API to authenticate users. Provides some helpers to authenticate the user, get authentication state, and so on. Also manages 'external authentication parameters' used, for instance, by the mail link sent when creating a new account email
1. `display-control`: Provide ready to use React components to show/hide a component depending on a logic - show loading when fetching, hide a button when user has not sufficient rights, and so on...
1. `file-utils`: Provide ready to use React components to manage files.
1. `form-utils`: Provides ready to use internationalized React components and various tools to manage and update [Redux forms](http://redux-form.com)
1. `i18n`: Provides tools and components to manage REGARDS components internationalization. Note: REGARDS i18n system relies on [React intl](https://github.com/yahoo/react-intl)
1. `i18n-ui`: Provides i18n graphic interactors to select / display current i18n state in application
1. `layout`: Provides components and tools to handle REGARDS user interface layout customizing and render
1. `mime-types`: Provides tools and enumerationrs related with MIME type management in REGARDS
1. `modules`: Provides components and tools to show dynamic modules in REGARDS interfaces
1. `modules-api`: Provides tools to implement new modules configuration and user interfaces
1. `plugins`: Provides components and tools to show plugins in REGARDS interfaces. Note that this modules is only related with "UI plugins"; "Backend plugins" are not handled here
1. `plugins-api`: Provides tools to implement new UI plugins in REGARDS.
1. `redux`: Provides tools to connect with application Redux store
1. `store-utils`: Provides redux generic actions, reducers and selectors to make [Redux API middleware](https://www.npmjs.com/package/redux-api-middleware) use easier with REGARDS backend. Also provides some other standard redux models for REGARDS, like partitions storage model
1. `test-helpers`: Provides test  tools for react components headless tests.
    _Note: this modules is only provided for test, it should never be bundled with the core application_
1. `theme`: Provide tools and components to manage REGARDS components theme. Note: it relies on [Material UI theme](http://www.material-ui.com/#/customization/themes) system
1. `theme-ui`: Provides i18n graphic interactors to select / display current theme state in application
