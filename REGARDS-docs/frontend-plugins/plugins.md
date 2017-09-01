---
layout: classic-docs
title: Plugins overview
short-title: Plugins overview
categories:
  - frontend
---

A plugin is a piece of Javascript file that can be added dynamically in the user interface. 
The main advantage is to allow operators to create dedicated HMI depending of the type of data manipulated 
on the project, instead of creating your own fork of rs-frontend just to fits your project needs.

There is currently two types of plugins :
 - criterions: Used in the search form, this type of plugin allows users to create a search filter for a single attribute.
 - services: Used in the search result table, they provide additionnals interactions with data they are associated to. You can ask several values from the user before displaying your service in a popup.

Note that frontend plugins are not designed in the same way than backend plugins.

## Compile your plugin

To compile your plugin you need to setup the rs-frontend repository and to install it. 
When the frontend is installed, you have created Webpack DLL that will be used by plugins to : 
- reduce the compilation duration - DLL are precompiled dependencies
- we provide a DLL named `coreoss` that contains some `@regardsoss/` dependencies, so you can reuse the code from rs-frontend

After setting the core.bundle.js, you can run the here under command to build the plugin

```bash
$ npm run build:watch
$ npm run build
```

### Test your plugin

```bash
$ npm run test 
```

### Lint your plugin

```bash
$ npm run lint:fix 
```

### Deploy plugin into regards 

After compiling your plugin you have a plugin.js file. Copy this file in the `/plugins` repository of the `rs-frontend microservice`.
Trough the administrator interface you can add the plugin from the "User interface / Plugins" menu.  
Indicate your plugin path like `/plugins/sample/plugin.js` and save plugin.  

At this step, your plugin is ready to be used.

## Plugin overall code structure

.  
 ├── src  
 |   ├──   
 |   ├── common          : Plugin common tools and class
 |   ├── components      : React component to display panels  
 |   ├── i18n            : Messages and labels internationalization      
 |   ├── main.js         : Plugin exported index
 |   ├── plugin-info.js  : Plugin definition  
 |   └── reducer.js      : Redux reducers    
 ├── tests  
 ├── package.json        : Npm plugin description file  
 ├── README.md  
 └── webpack.<mode>.js   : Npm plugin description file  

 
## Plugin entry point

 The entry point of your plugin is the `main.js` file.  
 This file is used by the plugin manager to retrieve all needed informations from your plugin.  
 
 Thanks to the `initPlugin` method all those information are exported.
 
 ```js
initPlugin(<ReactComponent>, <React-redux reducers>, <i18nmessages>, <pluginInfo>)
```
- `ReactComponent` : The main React component to display your plugin
- `React-redux reducers` : Not mandatory (can be null), the reducers to initialize if you need to use redux store.
- `i18nmessages` : Internationalization messages as an object with language as a key (en|fr).
- `pluginInfo` : The plugin-info.json object

 

## plugin-info.json

This file is used by the plugin loader to define the configuration needed by the plugin.

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
  "conf" : {
    "attributes": [
      {
        "name":"searchField",
        "description": "Attribute to search",
        "type":"string"
      }
    ]
  }
}

```

The conf property allow you to define the needed REGARDS Models attributes needed by your plugin.  
For each defined attributes :
 - `name`       : Name of the attribute passed into your plugin `attributes` react prop.
 - `description`: Description displayed during the plugin configuration from the administration interface
 - `type`       : Type of needed attribute. Possible values ['string','integer','date']

## Main React component 

The main react component exported as the first parameter of the `initPlugin` method from `main.js` is the displayed component.

### Provided parameters

The here under properties are provided at runtime by the plugin loader :
```js
propTypes = {
    /**
     * Plugin unique identifier provided by the plugin loader
     */
    pluginInstanceId: React.PropTypes.string,
    /**
     * List of attributes associated to the plugin.
     * Keys of this object are the "name" props of the attributes defined in the plugin-info.json
     * Value of each keys are the attribute id (retrieved from the server) associated
     */
    attributes: React.PropTypes.objectOf(AttributeModel),
    /**
      * Function to get initial plugin state saved by the savePluginState
      * Parameters :
      * id: current plugin identifier
      */
    getDefaultState: React.PropTypes.func,
    /**
     * Save the current state in order to retrieve it at initialization with getDefaultState
     * Parameters :
     * id: current plugin identifier
     */
    savePluginState: React.PropTypes.func,
    /**
     * Callback to change the current criteria values in form
     * Parameters :
     * query : The OpenSearch query to add to the global research
     * id: current plugin identifier
     */
     onChange: React.PropTypes.func,
  }
```

the attributes property is a collection of AttributeModel (see src/common/AttributeModel.js)  

Attributes names used into the onpenSearchQuery can be retrieved from an attribute object using the `getAttributeName` method
```js
this.getAttributeName('searchField')

```

Attributes labels can be simply retrieved by using the getAttributeLabel from the superClass PluginComponent.
In the example below 'searchField" in the attribute given in the plugin-info.json
```js
this.getAttributeLabel('searchField')
```

### State management

The state of your plugin is saved by the plugin loader. Thanks to this system, by default the state of your component is initialized with your previous state.  

To save your state manually you can use the `savePluginState` method.  
```js
this.props.savePluginState(this.props.pluginInstanceId, this.state)
```
To retrieve your previous saved state you can use the `getDefaultState` method
```js
this.props.getDefaultState(this.props.pluginInstanceId)
```

### Handle search for your criteria plugin

First you need to define a method `getPluginSearchQuery` into your main react component.
This method have the here under signature :
```js
getPluginSearchQuery = (state) => {
  const openSearchQuery = '<query>'
  return openSearchQuery
}
```

This method is used by the plugin manager to retrieve the openSearchQuery of your plugin.
  
The second method to define into your main react component is the `parseOpenSearchQuery`.
This method allow you to retrieve the current attributes values in order to initialize your plugin 
with the previous values. This method is used to fill your criterion at initialization.
This method is called many times as you have defined attributes in the plugin-info.json.

The here under example is used to transform an open-search query on a string attribute
```js
parseOpenSearchQuery = (parameterName, openSearchQuery) => {
    // A valid open search string query can be '(*test* AND foo AND bar*)
    if (parameterName === 'searchField') {
        // Remove '(' caracter if any
        let value = replace(openSearchQuery, /\(/g, '')
        // Remove ')' caracter if any
        value = replace(value, /\)/g, '')
        // Remove special * caracter if any
        value = replace(value, /\*/g, '')
        // Concat all AND values
        value = replace(value, / AND /g, ' ')
        return value
     }
     return null
  }
```
