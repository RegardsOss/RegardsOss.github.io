---
layout: classic-docs
title: Plugin criterion
short-title: Criterion
---

## Description

This document aims at helping the developper to create a plugin service, that can be used in regards results. Before, reading any further, make sure to read the plugins page [Common plugins description](/frontend/plugins/plugins/), as 
following sections are appliable to the plugin service:
* Code structure
* Entry point
* Main react component (except for provided parameters and criteria research, that doesn't fit the purpose of a service plugin)
* Plugin compilation

## Definition

A criteria plugin (front-end) is a javascript module used by the [Search form module](/frontnend/modules/search-form/) to create search criteria section. Each criteria plugin can generate a part of the full opensearch request sent to the rs-catalog mictoservice in order to request catalog entities.

## plugin-info.json

It is very similar to a common plugin. However the plugin type always indicates "CRITERIA".
Furthermore, in configuration field `conf`, `attributes` you can define the static configuration fields that the administrator must define during plugin configuration in administration panels.  
  
Each attribute defined in the plugin-info.json will be associated to a model attribute during plugin configuration by administrors into the search-form module configuration.   

For each defined attributes :
 - `name`       : Name of the attribute passed into your plugin `attributes` react prop.
 - `description`: Description displayed during the plugin configuration from the administration interface
 - `type`       : Type of needed attribute. Possible values ['string','integer','date','numerical']

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
  "type" : "SERVICE",
  "conf" : {
  	"attributes": [
  		"name":"searchField",
  		"description":"Attribute to search for",
  		"type":"numerical",
  	]
  }
}

```
## Main React component 

It mostly works just like a common plugin.

### Provided runtime parameters

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
