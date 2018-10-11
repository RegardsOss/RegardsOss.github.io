---
layout: classic-docs
title: REGARDS Frontend Plugins
short-title: Plugins
---

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->


- [Presentation](#presentation)
- [Create a new plugin](#create-a-new-plugin)
- [Plugin overall code structure](#plugin-overall-code-structure)
- [Compile plugin](#compile-plugin)
- [Test plugin](#test-plugin)
- [Lint plugin](#lint-plugin)
- [Deploy plugin](#deploy-plugin)
- [Plugin entry point](#plugin-entry-point)
- [plugin-info.json](#plugin-infojson)
- [Plugin administration panels](#plugin-administration-panels)
- [Main React component](#main-react-component)
- [Redux management](#redux-management)
  - [Building reducers](#building-reducers)
  - [Using actions and selectors](#using-actions-and-selectors)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

# Presentation

REGARDS UI plugins are pieces of Javascript files bundled together that can be added dynamically into the user interface. 
Their main advantage is allowing operators to create dedicated HMI depending on the type of data manipulated by the project, instead of creating a global rs-frontend project fork.

There are currently two types of plugins :
* `criterion`: Used in the search form, this type of plugin allows users creating search filters on attributes. See [criteria plugins](/frontend/plugins/plugin-criteria/) page for more detail
* `services`: Used in the search result table, they provide additionnals interactions with data they are associated with. The developer can ask both administration (configuration) and user (runtime configuration) to fill several values before computing and displaying service results in a dialog box. See [service plugins](/frontend/plugins/plugin-services/) page for more detail

Plugins are very similar to REGARDS UI dynamic modules, but:
* They are not bundled along the core source code. Instead, they are compiled separetely and should be loaded through an HTTP repository.
* They accept administrator and user parameters whereas dynamic modules accept only an administror configuration

The following sections will discuss the common points to all plugin types.

Note: Obviously, frontend plugins are not designed in the same way than backend plugins, especially when it comes to handle large data requests - backend plugins have way better performances in such cases. Therefore, the developer may need to create a backend plugin counterpart for frontend plugins working with large data payloads.

# Create a new plugin

You can create a new plugin using the yeoman generator `generator-regards-ui-plugin` provided with sources into `webapp/yeoman/generator-regards-ui-plugin`. To install and use the generator, move into generator-regards-ui-plugin root folder then run the following commands:

```bash
$ npm install -g
$ npm install -g yo
$ cd ../../plugins
$ yo regards-ui-plugin
```

Yeoman will ask you several parameters to generate the new plugin. Once finished, the architecture of the plugin is iniatialized with some basic examples.  

# Plugin overall code structure

The generated plugin folder should look like the following tree
 ```
 ├── node_modules        : Installed node modules from package JSON
 ├── reports             : Built reports for coverage and tests
 ├── src                 : Plugin main source folder
 |   ├── clients         : Plugin redux API clients
 |   ├── components      : Plugin React components
 |   ├── i18n            : Plugin internationalization
 |   ├── styles          : Plugin graphic styles
 |   ├── main.js         : Plugin exported index
 |   ├── plugin-info.js  : Plugin definition  
 |   └── reducer.js      : Redux reducers    
 ├── target              : Built sources for plugins  
 ├── tests               : Plugin tests source folder
 ├── package.json        : Npm module file describing plugin module
 ├── README.md           : Plugin README
 └── webpack.<mode>.js   : Webpack files for plugin building 
```

*Note: node_modules, reports and target folders may not be present initially, as they are build folders. Some folders like clients are not initially created. Indeed they should be added by developer on need.*

# Compile plugin

To compile the plugin you need to setup the rs-frontend repository and to install it - please report to [Setup page](/frontend/setup/) for detailed instructions. 
When the frontend is installed, Webpack DLL are built. They will be used by plugins to: 
- reduce the compilation duration - DLL are precompiled dependencies
- reduce bundle size through `coreoss` DLL that holds front end core code and dependencies

After setting the core.bundle.js, you can run the here under command to build the plugin - to be executed in root folder of the new plugin:

```bash
$ npm run build:watch
```

While this command is running, the plugin code will be recompiled when any file of the plugin is saved. Alternatively, you may use `build:dev` to build the plugin one time or `build:production` to build it for production deployment

# Test plugin

The following command, to be executed in root folder of the plugin, runs any test file with extension `.test.js` or `.test.jsx` in plugin `tests` folder

```bash
$ npm run test 
```

# Lint plugin

The following command, to be executed in root folder of the plugin, applies lint rules to the `src` and `tests` folders. It will attempt to fix automatically syntaxic rules then produce a list of warning and errors to fix manually using console logs.

```bash
$ npm run lint:fix 
```

# Deploy plugin

When building for production, the plugin must be deployed into a plugin reposity, ie an accessible URL for front-end. Note that it is not required for development build, as Webpack dev server acts as an HTTP server, allowing the core code to fetch plugin bundle directly from dev server.
To deploy the plugin, you must first compile it for production, see [Compile plugin](#compile-plugin). Build command produces the file `target/prod/plugin.js`. That file must be copied in the `/plugins` repository of the `rs-frontend microservice`, depending on server configuration for the REGARDS instance you are working with. Then, trough the administrator interface, you must add the plugin from the "User interface / Plugins" menu, providing a plugin path like `/plugins/my-plugin/plugin.js`. Finally, you can use the plugin, either in search-form modules for criteria or in datasets definitions for services.

# Plugin entry point

 The entry point of a plugin is the `main.js` file.  
 This file is used by the plugin manager to retrieve all needed informations from the plugin.  
 
 Thanks to the `initPlugin` method all those information can be easily exported.
 
 ```js
initPlugin(<ReactComponent>, <React-redux reducers builder>, <i18nmessages>, <pluginInfo>)
```
- `ReactComponent` : The main React component to display your plugin
- `React-redux reducers builder` : Not mandatory (can be null), a function taking plugin instance ID as parameter and returing a map of reducer field to reducer function (see [Redux management](#redux-management) section)
- `i18nmessages` : Internationalization messages as an object with languages as keys (en|fr).
- `pluginInfo` : The plugin-info.json object


# plugin-info.json

This file is used by the plugin loader to define the configuration required by the plugin.

```json
{
  "name": "<%= name %>",
  "description": "<%= description %>",
  "version" : 1.0,
  "author" : "<%= author %>",
  "company" : "<%= company %>",
  "email" : "<%= email %>",
  "url" : "<%= url %>",
  "license": "<%= licence %>",
  "type" : "<%= type %>",
  "conf" : {}
}

```

The conf property is specific criteria and services plugins and will be discussed in their own pages.

# Plugin administration panels

All plugins configuration panels are automaticly generated by the administror interface using the plugin-info.json (conf part) to generate configurable fields.

# Main React component 

The main react component exported as the first parameter of the `initPlugin` method from `main.js` is the first displayed component in plugin.

The here under properties are provided at runtime by the plugin loader to the main component :
```js
propTypes = {
    /**
     * Plugin unique identifier provided by the plugin loader
     */
    pluginInstanceId: React.PropTypes.string,
  }
```

*Note: other plugin properties are specific to the plugin type, see [criterion](/frontend/plugins/plugin-criteria/) or [service](/frontend/plugins/plugin-services/) plugin pages for more detail.*

# Redux management

As mentioned above, the plugins can initialize reducers to use redux actions and  selectors. However, as a plugin may be instantiated multiple times on a single page, the plugin reducers cannot be statically declared - like in, for instance, dynamic modules. Instead, plugins have to declare a `buildReducer` function and retrieve / rebuild actions and selectors at runtime. Those operations are detailed in following subsections.

## Building reducers

The plugin buildReducer function aims at providing dynamic reducer for each plugin instance. Therefore it must use pluginInstanceId string to generate unique reducers namespaces. That way, we can ensure plugin instance 1 will not reduce plugin instance 2 Redux actions.

*Build plugin reducers function example (might be placed in reducer.js file):*
```jsx
  // ...
/*  
 * Build reducer function 
 * @param {string} pluginInstanceId plugin instance ID, must be used to generate unique namespaces and store paths
 * @return {*} reducers configuration for plugin instance
 */
export default function buildReducer(pluginInstanceId) {
  return {
    myModel1: getMyModel1Client(pluginInstanceId).reducer,
    myModel2: getMyModel2Client(pluginInstanceId).reducer,
  }
}
```

*An example is available in enumerated criterion, at path webapp/plugins/criterion/enumerated/src/reducer.js*

As a consequence of the dynamic reduction system, the store path must also take the pluginInstanceID in account. For plugins, it is always an array where:
* first element is 'plugins.**{Plugin name}**.**{Plugin instance ID}**'. Plugin name must match the name declared in plugin-info.json and plugin instance ID is provided as parameter of buildReducer function.
* second element is the reducer field in buildReducer function (myModel1 or myModel2 in example above)

*Once more, an example of those principles is available in enumerated criterion, at path webapp/plugins/criterion/enumerated/src/clients/EnumeratedDOPropertyValuesClient.js*

## Using actions and selectors

As the Redux reducers of the plugin are dynamic, so are the actions selectors, due to dynamic namespace and store path. However, building actions and selectors each time mapStateToProps and mapDispatchToProps are called is memory consuming.
For that purpose, REGARDS provides a small tool that handles a lazy map of redux clients (action, selectors and optional reducer). That tool can be used easily in main plugin component, as shown in example below:

```jsx
  // MyPluginContainer.jsx
  import React from 'react'
  import { PluginsClientsMap, PluginCriterionContainer } from '@regardsoss/plugins-api'
  //...
  class MyPluginContainer extends PluginCriterionContainer {
    // This map will hold the instances of actions and selectors for all
    // plugins instance ID
    static CLIENTS_MAP = new PluginsClientsMap()

    // Here is how we could use the map to retrieve actions and selectors
    // note that pluginInstanceId prop is always provided to the main plugin component
    static mapStateToProps(state, { pluginInstanceId }) {
      const mySelectors = MyPluginContainer.CLIENTS_MAP.getClient(buildMyClient, pluginInstanceId).selectors  // here, my client would export an object like {actions, selectors}
      return {
        myValue: mySelectors.getMyValue(state)
      }
    }

    static mapDispatchToPropsToProps(dispatch, { pluginInstanceId }) {
      const myActions = MyPluginContainer.CLIENTS_MAP.getClient(buildMyClient, pluginInstanceId).actions  
      return {
        dispatchSomething: () => dispatch(myActions.doSomething())
      }
    }

```

*Note: The PluginsClientsMap is a simple tool that buffers a map on pluginInstanceId => builder => builtValue. It is very straightforward code and can be replaced by a locally coded buffer if you prefer. In order to work correctly, it requires clientBuilder instance - buildMyClient in previous example - to be a constant JS function reference for a single client.*
