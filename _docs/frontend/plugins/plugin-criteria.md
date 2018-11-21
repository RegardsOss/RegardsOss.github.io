---
layout: classic-docs
title: Plugin criterion
short-title: Criterion
---

* automatic table of content
{:toc}

# Presentation

Criteria plugins (front-end) are javascript bundles used by the [Search form module](/frontend/modules/search-form/) to create search criteria section. Each criterion plugin can generate a part of the full opensearch request sent to the rs-catalog microservice in order to request catalog entities.  
By the way, a criteria plugin respects all general plugin principles documented in [Plugins](/frontend/plugins/plugins/) page.

# Working principles

The criterion plugin must respect the following working principles to be correctly integrated within REGARDS:
1. It must declare attributes list in plugin-info.json (see section below). The attributes names mentioned are not related with attribute models. Instead they are used in implementation as logical attribute name, like 'firstAttribute' or 'simpleAttribute' for instance.
1. Its main component must inherit PluginCriterionContainer.
Indeed that is more of an helper but many mechanisms would be very hard to implement without it, especially when it comes to publish new URL and update state from URL.
1. When user input some data, the plugin main component must update its state to publish the new values of attributes, using the attribute name declared in package-info. That will allow parent form updatin plugin saved state (form URL) and catalog request
1. It must ensure publishing its main component state to an open search query in a way it can restore it (see state management section)
1. It must ensure parsing open search query into a usable state for main component

# plugin-info.json

It is very similar to a common plugin. However the plugin type always indicates "CRITERIA".
Furthermore, it defines configuration field `conf.attributes`, indicating the number and type of dataobjects attributes the administrator should provide to the plugin runtime instance.
  
For each defined attributes, the plugin developer must provide :
 - `name` : Name of the attribute as it will be adressed in the plugin main component state (like searchField)
 - `description` : Description displayed to administrator at configuration.
 - `attributeType` : Type constraint on the expected attribute type. When setting the plugin criterion, in search form configuration, only attribute models matching one of the listed types will be available for selection (see sub section below).

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
      "attributeType": [<%= type 1 %>, ...],
    }, ...]
  }
}
```

## Attribute type

The attributeType parameter, shortly described above, lists the model attribute types allowed to be used within this plugin critetion instance. For instance, by specifying `attributeType: [A, B]`, the plugin ensures receiving a data attribute of type A or B.  
The possible types comes from REGARDS backend attribute types definition, in Java class `fr.cnes.regards.modules.models.domain.attributes.AttributeType`:

```Java
public enum AttributeType {

    STRING,
    INTEGER,
    DOUBLE,
    DATE_ISO8601,
    URL,
    BOOLEAN,
    STRING_ARRAY,  // ...
    INTEGER_ARRAY, // ...
    DOUBLE_ARRAY, // ...
    DATE_ARRAY, // ...
    INTEGER_INTERVAL, // ...
    DOUBLE_INTERVAL, // ...
    DATE_INTERVAL, // ...
    LONG,
    LONG_INTERVAL, // ...
    LONG_ARRAY, // ...

    // ...
}
```

Below stands an example plugin criterion with two fields, where first field works with a STRING attribute and second one with any numerical attribute

```json
{
  // ...
  "conf" : {
    "attributes": [{
      "name":"firstField",
      "description":"First search field",
      "attributeType": ["STRING"]
    }, {
      "name":"secondField",
      "description":"Seconf search field",
      "attributeType": ["INTEGER", "DOUBLE", "LONG"]
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
     * Map of attributes associated to the plugin, optionnaly with boundsInformation.
     * Keys of this object are the "name" props of the attributes defined in the plugin-info.json
     * Value of each keys are the attribute id (retrieved from the server) associated
     */
    attributes: React.PropTypes.objectOf(AttributeModelWithBounds),
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
The attributes property is a map of AttributeModelWithBounds (see web_modules/utils/plugins-api/src/shapes/AttributeModelWithBounds.js). **Each attribute specified in field conf.attributes, from file plugin-info.json, is granted to be present here.**

When implementing the plugin, attributes names used into the onpenSearchQuery can be retrieved from an attribute object using the `getAttributeName` method from PluginCriterionContainer:
```js
this.getAttributeName('searchField') 
// Note: it is equivalent to this.props.attributes.searchField.jsonPath

```

Attributes labels can be retrieved the same way using:
```js
this.getAttributeLabel('myField')
// Note: it is equivalent to this.props.attributes.myField.label
```

Attributes bounds can be retrieved using 
```js
this.getAttributesBounds('myField2')
// Note: that is equivalent to this.props.attributes.myField2.boundsInformation
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

## Attributes bounds and common labels

Criteria receive as props types AttributeModelWithBounds map. Each of them has all the AttributeModel fields but also holds the field `boundsInformation`, that contains following fields:
* `exists`: Should bounds exists for this attribute type. It worthes true for any number types (LONG, DOUBLE, INTEGER) and date type (DATE_ISO8601).
* `loading`: Are bounds currently being loaded
* `error`: Has bounds loading finished in error?
* `lowerBound`: Lower attribute value in current search context, when bounds *exists*, are *not loading* and *not in error*.
* `upperBound`: Upper attribute value in current search context, when bounds *exists*, are *not loading* and *not in error*.

Lower and upper bound types depends on attribute type. Indeed, it is a number for number types and a string (ISO date format) for date type. Even when existing and loaded without error, **bound values are not neccessary provided** (as the attribute may have no value in current search context)

PluginCriterionContainer provides the following methods to compute attribute and bounds related state and labels.

### hasNoValue

```js
this.hasNoValue('myAttr')
```
That method returns true when there is no bound for a resolved, "boundable" (number or date) attribute, ie if it **exists for attribute type, is not loading, has no error and has no value for lowerBound and upperBound**. As bounds are resolved using an opensearch query, that specific case means there is no dataobject bearing a value for that attribute in current search context.
When that method returns true, the plugin should disable corresponding attribute fields (as attribute is useless in context).

### getFieldHintText

```js
this.getFieldHintText('myAttr', PluginCriterionContainer.BOUND_TYPE.LOWER_BOUND)
```
That method provides label according with the attribute, its role in plugin and its bounds:
* `BOUND_TYPE.LOWER_BOUND` means the resulting values will be greater or equal to entered value for attribute
* `BOUND_TYPE.UPPER_BOUND` means the resulting values will be lower or equal to value.
* `BOUND_TYPE.ANY_BOUND` means the resulting values may be greater or lower than value
* `BOUND_TYPE.NONE` means value bounds should be ignored

It provides, according with case, the following texts:
* Bounds are not existing for current type or in error: "{Attribute type}"
* Bounds are loading: "{Attribute type} {Loading message}"
* BOUND_TYPE.LOWER_BOUND and there is a lower bound value : "> {lowerBoundValue}"
* BOUND_TYPE.UPPER_BOUND and there is an upper bound value : "< {upperBoundValue}"
* BOUND_TYPE.ANY_BOUND and there is at least one bound value : "{Values range}". Note that lower or upper bound might be replaced with infinity symbol if not found
* Any other case: "{Attribute type}". Note that in those cases, there is no value for the corresponding attribute in current context (hasNoValue method returns true)

### getFieldTooltip

```js
this.getFieldTooltip('myAttr')
```
That method provides a common tooltip for plugin fields working on an attribute.
Its provides, according with case, the following texts:
* Bounds not existing for current type, are loading or in error: "{Attribute type}"
* No upper nor lower bound value: "{Attribute type} {Message for undefined bounds information}"
* Upper and / or lower bound value: "{Attribute type} {Values range}". Note that lower or upper bound might be replaced with infinity symbol if not found


