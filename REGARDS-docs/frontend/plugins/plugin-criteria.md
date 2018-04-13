---
layout: classic-docs
title: Plugin criterion
short-title: Criterion
---

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->


- [Presentation](#presentation)
- [Working principles](#working-principles)
- [plugin-info.json](#plugin-infojson)
- [Main React component](#main-react-component)
  - [Provided runtime parameters](#provided-runtime-parameters)
  - [Manage state and search query](#manage-state-and-search-query)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->


# Presentation

A criteria plugin (front-end) is a javascript bundle used by the [Search form module](/frontend/modules/search-form/) to create search criteria section. Each criterion plugin can generate a part of the full opensearch request sent to the rs-catalog microservice in order to request catalog entities.  
By the way, a criteria plugin respects all general plugin principles documented in [Plugins](/frontend/plugins/) page.

# Working principles

The service plugin must respect the following working principles to be correctly integrated within REGARDS:
1. It must declare attributes list in plugin-info.json (see section below). The attributes names mentioned are not related with attribute models. Instead they are used in implementation as logical attribute name, like 'firstAttribute' or 'simpleAttribute' for instance.
1. Its main component must inherit PluginCriterionContainer.
Indeed that is more of an helper but many mechanisms would be very hard to implement without it, especially when it comes to publish new URL and update state from URL.
1. When user input some data, the plugin main component must update its state to publish the new values of attributes, using the attribute name declared in package-info. That will allow parent form to update plugin saved state (form URL) and catalog request
1. It must ensure publishing its main component state to an open search query in a way it can restore it (see state management section)
1. It must ensure parsing open search query into a usable state for main component

# plugin-info.json

It is very similar to a common plugin. However the plugin type always indicates "CRITERIA".
Furthermore, it defines configuration field `conf.attributes`, indicating the number and type of dataobjects attributes the administrator should provide to the plugin runtime instance.
  
For each defined attributes, the plugin developer must provide :
 - `name` : Name of the attribute as it will be adressed in the plugin main component state (like searchField)
 - `description` : Description displayed to administrator at configuration.
 - `type` : Type constraint on the expected attributes. Possible values ['string','integer','date','numerical'].

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
  "type" : "CRITERIA",
  "conf" : {
    "attributes": [{
      "name":"searchField",
      "description":"Attribute to search for",
      "type":"numerical",
    }]
  }
}
```

# Main React component 

The criterion plugin should extend PluginCriterionContainer class, for a more concise implementation. In next sub sections, behaviors that are specific to criterion main component will be listed.

## Provided runtime parameters

Criterion main component receives the following properties, provided at runtime by the plugin loader:

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
     /**
      * Callback to register the main component clear state function
      * (used automatically by the PluginCriterionContainer)
      */
     registerClear: React.PropTypes.func,
     /**
      * Initial values if any, consumed automatically by the 
      * PluginCriterionContainer
      */
     initialValues: PropTypes.objectOf(PropTypes.string),
     /**
      * Initial search query (datasets and models restrictions) 
      * for plugins using it, consumed automatically by the 
      * PluginCriterionContainer
      */
    initialQuery: PropTypes.string,
  }
```
The attributes property is a collection of AttributeModel (see webapp/web_modules/data/shape/src/rs-dam/AttributeModel.js)  

When implementing the plugin, attributes names used into the onpenSearchQuery can be retrieved from an attribute object using the `getAttributeName` method from PluginCriterionContainer:
```js
this.getAttributeName('searchField') // 'searchField' is the attribute name from previous 'plugin-info.json' example 

```

Attributes labels can be retrieved the same way using:
```js
this.getAttributeLabel('searchField')
```

## Manage state and search query

When extending the PluginCriterionContainer class, the criterion main component must implement the following methods:
* `getPluginSearchQuery`  
*(state:Object) => string*  
Convert this component state, where state is first parameter, into a query part like, for instance, 'MY_VALUE:35'. State fields here correspond to attribute names, from plugin-info.json.
* `parseOpenSearchQuery`  
*(attributeName: string, openSearchValue} => (state)*  
Parses the component state for attributeName as parameter. It is essential here for implementation to understand that:
  * attributeName is the name given in plugin-info.json to some attribute
  * openSearchValue is the value on right side of open search expression. It would be '35' in example above
  * The method will be called at least one time for each attribute declared in package-info.json and found in current query
  * The result of that method will be assigned to state.{attributeName}

With those two methods, and when extending the PluginCriterionContainer, initialization and state saving will be performed automatically. Plus, any update of the main component state, using `this.setState`, will trigger an update of the current open search query - ie call getPluginSearchQuery method and then update URL.

However, it is still possible to:
* save the state manually using the `savePluginState` method.  
```js
this.props.savePluginState(this.props.pluginInstanceId, this.state)
```
* retrieve the previous state using the `getDefaultState` method
```js
this.props.getDefaultState(this.props.pluginInstanceId)
```

Each main plugin component, extending or not the PluginCriterionContainer, should also implement the reset state method handleClear:
```js
handleClear = () => {
  this.setState(defaultState) // update the plugin root component state to clear user input
}
```
