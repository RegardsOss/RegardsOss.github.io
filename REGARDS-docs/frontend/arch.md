---
layout: classic-docs
title: Architecture
short-title: Architecture
categories:
  - frontend
---

The REGARDS frontend is divided in several NPM modules, each one has a `package.json` defining the name of the module in the application. It allows us to import a module using his name instead of using a relative path.

```
import { configureStore } from '@regardsoss/store' // Good
import { configureStore } from '../web_modules/data/store/src/main.js' // It works, but that's a bad practice
```

### Overall architecture

```
├── webapp                                    # REGARDS Frontend folder
    ├── conf                                  # Store browser global variables not merged in the build
    |  ├── staticConfiguration.js             # Global variables defined on prod
    |  └── staticConfiguration.dev.js         # Global variables defined on dev
    ├── reports                               # Local reports
    |  ├── coverage                           # Coverage report
    |  ├── mocha                              # Test report
    |  └── mocha                              # Storybook static website
    ├── scripts                               # Shell scripts (Linux only) that our package.json refers to
    |  └── bootstrap.sh                       # Create NPM links between modules / node system folder / main app
    ├── src                                   # Application root folder
    |  ├── main.jsx                           # The first file read in the app
    |  ├── rootReducer.js                     # Load the Redux tree
    |  └── rootRouter.js                      # Load the react-router logic
    ├── tests                                 # tests related to the folder ./src
    ├── web_modules                           # Contains all @regardsoss modules
    |  ├── business-common                    # Reusable business logic
    |  ├── business-modules                   # Modules related to the admin app
    |  ├── components                         # Reusable React components
    |  ├── data                               # PropTypes & everything to interact with the backend server
    |  ├── modules                            # Modules related to the portal/user app
    |  ├── utils                              # REGARDS "generic" toolkit we've build
    |  └── vendors                            # Libraries fork we've done
    ├── package.json                          # Define npm scripts and list all dependencies
    ├── webpack.common.config.js              # Webpack generic behavior
    ├── webpack.dev.config.js                 # Webpack generic behavior in dev mode
    ├── webpack.dev.preprod.config.js         # Used when running the app in dev
    ├── webpack.coverage.config.js            # Used when covering the app in test mode
    ├── webpack.test.config.js                # Used when running test
    ├── webpack.dll.config.js                 # Webpack generic DLL behavior
    ├── webpack.dev.dll.config.js             # Used to generate DLL in dev (fast hot reload)
    ├── webpack.prod.dll.config.js            # Used to generate DLL in prod (by plugins)
    └── webpack.common.config.js              # Webpack generic
```

### Business modules

This folder contains all business modules for the admin applications.

```
admin
│   admin-project-management
│   admin-account-management
│   admin-database-management
│   admin-data-management
    |     admin-data-model-management
    |     admin-data-dataset-management
    |     admin-data-attributemodel-management
│   admin-user-management
    |     admin-user-projectuser-management
    |     admin-user-role-management
    |     admin-user-role-resource-access-management
│   admin-database-management
│   ...
user
|   modules
    |    archival-storage-aip-status
    |    archival-storage-plugins-monitoring
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
