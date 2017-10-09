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

You can refer to the [#business-modules](business modules dependency graph) to get an overview on how these three interfaces are loaded by our app.

Moreover, for the `Portal` and `User` interfaces, we've created [Dynamic modules](/frontend/modules/dynamic-modules/) to brings UI features that the administrator can controll (options, layout,...).
  

### Overall architecture

The REGARDS frontend is divided in several NPM modules, each one has a `package.json` file defining the name of the module in the application. It allows us to import a module using his name instead of using a relative path.

```
import { configureStore } from '@regardsoss/store' // Good
import { configureStore } from '../web_modules/data/store/src/main.js' // It works, but that's a bad practice
```

Before understanding further the role of each module, here are the main files used to create the app: 

```
├── webapp                                    # REGARDS Frontend folder
    ├── conf                                  # Store browser global variables not merged in the build
    |  ├── staticConfiguration.js             # Global variables defined on prod
    |  └── staticConfiguration.dev.js         # Global variables defined on dev
    ├── reports                               # Local reports
    |  ├── coverage                           # Coverage report
    |  ├── mocha                              # Test report
    ├── scripts                               # Shell scripts (Linux only) that our package.json refers to
    |  └── bootstrap.sh                       # Create NPM links between modules / node system folder / main app
    ├── src                                   # Application root folder
    |  ├── main.jsx                           # The first file read in the app
    |  ├── rootReducer.js                     # Load the Redux tree
    |  └── rootRouter.js                      # Load the react-router logic
    ├── tests                                 # tests related to the folder ./src
    ├── web_modules                           # Contains all @regardsoss and @regardsoss-modules modules
    |  ├── business-common                    # Reusable business logic
    |  ├── business-modules                   # Modules related to the admin app
    |  ├── components                         # Reusable React components
    |  ├── data                               # PropTypes & everything to interact with the backend server
    |  ├── modules                            # Dynamic configurable Modules related to the portal & user app
    |  ├── utils                              # REGARDS "generic" toolkit we've build
    |  └── vendors                            # Libraries fork we've done
    ├── package.json                          # Define npm scripts and list all dependencies
    ├── webpack.dev.preprod.config.js         # Used when building the app to run in development mode
    ├── webpack.coverage.config.js            # Used when building the app to run tests coverage mode
    ├── webpack.test.config.js                # Used when building the app to run tests 
    ├── webpack.prod.config.js                # Used when building the app to run in production mode
    ├── webpack.dev.dll.config.js             # Used to generate DLL in development mode (fast hot reload)
    ├── webpack.prod.core.dll.config.js       # Used to generate DLL in prodocution mode (by plugins)
    └── webpack.prod.coreoss.dll.config.js    # Used to generate DLL in prodocution mode (by plugins)
```


### Common businness modules (business-common)

This folder contains business related modules, shared accross many REGARDS modules and / or applicationsportal)

1. `admin-data-entities-attributes-management`:
    Shared React component to handle entities attributes configuration
1. `attributes-common`: Shared React components to configure and display attributes values
1. `endpoints-common`: Shared data fetcher and storage for endpoint access rights
1. `entities-common`: Shared React components for entities related UI services (like displaying entity detail)
1. `global-system-error`: Shared React components to display errors in REGARDS interfaces
1. `project-handler`: Shared react High Order Component to fetch and publish in Redux store (see later sections) the current project
1. `user-metadata-common`: Shared project user metadata definition and edition React components

### Business modules

This folder contains all applications modules that are not *dynamic* - ie that cannot be configured and set up in user nor in portal applications
As administration interface is not generic, all administration modules are also in this folder.  

_Note: The administration application is structured in a thematic tree, like seen in the tree below. Each module at a given tree level imports the modules below_

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
### Components modules
This package provides **React** generic components to handle forms, buttons, cards and so on. More details are available in [components detail page](/frontend-modules/components)

### Data
This folder holds data related modules:

1. `api modules`: Contains the [normalizr](https://github.com/paularmstrong/normalizr) logic to map entities from an API result using a Schema into what we put in the store.
1. `client`: Contains clients to access REGARDS API. Clients are used to fetch data, using [Redux API middleware](https://www.npmjs.com/package/redux-api-middleware). Thus, they are defining some of the following elements, allowing them to work within the [Redux system](http://redux.js.org/):  
    1.  Actions: define the API endpoint, fetching options and success, pending and error operations
    1.  Reducer: define the action handler (it converts actions results into a Redux state). _Note: it needs to be installed, when not shared_
    1.  Selector: define the redux state selector (data retriever) for that Regards API operation
1. `domain`: It holds constants related with API use, by microservice.  
    _Note: it also contains some constants used only by the frontend, when those constants are stored and retrieved through the API._
1. `shape`: Contains React properties shapes matching with REGARDS API, by microservice.  
    _Note: it also contains some shapes used only by the frontend, when those shapes are stored and retrieved through the API._
1. `store`: Create the initial [Redux](http://redux.js.org/) application store. Also set up the store middlewares (automatic actions handling).

### Modules
This folder contains all _dynamic_ modules, ie all modules that can be configured to be displayed in user and portal application.
1. `archival-storage-aip-status`: **Not ready in REGARDS V1**. Displays AIP storage jobs status.
1. `archival-storage-plugins-monitoring`: **Not ready in REGARDS V1** Displays AIP plugins storage capacities and remaining spaces.
1. `authentication`: Provides interface authentication capacities (connexion, account creation, password reset...)
1. `generator-regards-ui-module`:  Allows generating dynamic modules - it is not a dynamic module and **Will be moved in next versions**.
1. `home-page`: Displays project home page
1. `licenses`: Displays project license
1. `menu`: Displays user interface navigation menu, authentication, language and theme options
1. `news`: **Not ready in REGARDS v1** Displays a project news
1. `project-list`: Displays project list
1. `search-facets`: Provides a results facets (used by the search-results modules)
1. `search-form`: Allows searching catalog elements
1. `search-graph`: Allows browsing catalog collections and datasets
1. `search-results`: Displays catalog datasets and dataobjects

You can get additionnal informations [here](/frontend/modules/dynamic-modules/)  

### Utils modules
This folder holds modules providing high level services, tools and components shared by all application interfaces (admininistration, user application and portal application).

1. `adapters`: Provides enriched components
from external librairies - adds headless render funtionnality to a component for instance
1. `authentication-manager`: Interact with the API to authenticate users. Provides some helper to authenticate the user, get authentication state, and so on. Also manages 'external authentication parameters' used, for instance, by the mail link sent when creating a new account email
1. `display-control`: Provide ready to use React components to show/hide a component depending on a logic - show loading when fetching, hide a button when user has not sufficient rights, and so on...
1. `form-utils`: Provides ready to use internationalized, React components and various tools to manage and update [Redux forms](http://redux-form.com)
1. `i18n`: Provides services and components related to REGARDS internationalization. Note: REGARDS i18n system relies on [React intl](https://github.com/yahoo/react-intl)
1. `layout`: Provides components and tools to handle REGARDS user interface layout customizing and render
1. `modules`: Provides components and tools to handle REGARDS user interface modules customizing and render. For instance, it allows to instanciate a dynamic module like 'search-results'. Then, through configuration, it can show the module configuration form or the user interface component.
1. `plugins`: Provides components and tools to handle REGARDS user interface plugins customizing and render. Note that this modules is only related with "UI plugins", as opposed to "Backend plugins"
1. `redux`: Provides connection tools to application store
1. `store-utils`: Provides redux generic actions, reducers and selectors to build and handle [Redux API middleware](https://www.npmjs.com/package/redux-api-middleware) given the expected result type, and ensuring API results will be normalized (see data/api module). Also provides some other standard redux models for REGARDS, like partitions storage model
1. `test-helpers`: Provides test  tools for react components headless tests.
    _Note: this modules is only provided for test, it should never be imported outside tests folders of other modules_
1. `theme`: Provide tools and clients to fetch, render and customize REGARDS user interface themes
