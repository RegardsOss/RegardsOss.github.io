---
layout: classic-docs
title: Plugins overview
short-title: Plugins overview
---

A plugin is a piece of Javascript file that can be added dynamically in the user interface. 
The main advantage is to allow operators to create dedicated HMI depending of the type of data manipulated 
on the project, instead of creating your own fork of rs-frontend just to fits your project needs.

There is currently two types of plugins :
 - `criterion`: Used in the search form, this type of plugin allows users to create a search filter for a single attribute.
 - `services`: Used in the search result table, they provide additionnals interactions with data they are associated to. You can ask several values from the user before displaying your service in a popup.

Note that frontend plugins are not designed in the same way than backend plugins.

## Create a new plugin

You can create a new module using the yeoman generator `generator-regards-ui-plugin` provided with sources into "webapp/yeoman/generator-regards-ui-plugin".  

```bash
$ cd webapp/yeoman
$ npm install -g yo
$ npm install -g ./generator-regards-ui-plugin
$ cd ../plugins
$ yo regards-ui-plugin
```
After the last command, informations will be asked for the new module to generate.    
After the process is over, the all source architecture of a module is iniatialized with some simple exemples.

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

### Deploy your plugin into regards 

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
  "conf" : {}
}

```

The conf property is specific for each plugin type.

## Plugin administration panels

All plugins configuration panels are automaticly generate by the administror interface using the plugin-info.json (conf part) to generate configurable fields.

## Main React component 

The main react component exported as the first parameter of the `initPlugin` method from `main.js` is the displayed component.

### Provided parameters

The here under properties are provided at runtime by the plugin loader to every plugins :
```js
propTypes = {
    /**
     * Plugin unique identifier provided by the plugin loader
     */
    pluginInstanceId: React.PropTypes.string,
  }
```