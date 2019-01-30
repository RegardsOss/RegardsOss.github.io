---
layout: classic-docs
title: Plugin criterion
short-title: Criterion
---

{% include toc.md %}

# Presentation

A front-end criterion plugin is a javascript bundle used in [Search form modules](/frontend/modules/search-form/) to create form fields and panes. Each criterion plugin generates opensearch request parameters sent to the rs-catalog microservice in order to search resulting entities. Criterion plugins accept attributes to filter as configuration.

**NOTE** : Opensearch requests are made with the [lucene format](https://lucene.apache.org/core/2_9_4/queryparsersyntax.html).

# Design

All criteria plugins and their parent search form are sharing a common redux space. In that space, plugins can publish:
* Their state, that will be restored automatically when user enters back the form
* Some OpenSearch request parameters that will be used as constraint on research results. Among those parameters:
  * **q** parameter (OpenSearch query) will be merged using all criteria q values
  * Other parameters (like geometry) will retain only one value. Hence, publishing such parameter multiple times in a search form in strongly discouraged.

The criteria plugins accept, as configuration, some model attributes. That allows expressing a generic criterion constraint through an OpenSearch query built using a dynamic attribute name.

# Specific plugin-info.json fields

The service plugin-info.json files defines all standard plugin fields so the `"type"` field must be equal to `"CRITERIA"`.
The `"conf"` field is a JSON object holding the following children fields:
* `attributes`: *{array}* An array of attributes that indicates the number and type of dataobjects attributes that should be provided to the criterion, when adding the criterion into a search form. Each array element defines the following fields:
  * `name`: *{string}* The name used in code to refer to that attribute. For instance, if an attribute is named `myAttribute`, it will be possible to access it, in the main criterion component, with the property `this.props.attributes.myAttribute`.
  * `description`: *{string}* Description displayed to the administrator when he configures that attribute in criterion.
  * `attributeType`: *{array}* Accepted types for that attribute. Possible attributes types, from JAVA class **fr.cnes.regards.modules.models.domain.attributes.AttributeType**, are [`"STRING"`, `"INTEGER"`, `"DOUBLE"`, `"DATE_ISO8601"`, `"URL"`, `"BOOLEAN"`, `"STRING_ARRAY"`, `"INTEGER_ARRAY"`, `"DOUBLE_ARRAY"`, `"DATE_ARRAY"`, `"INTEGER_INTERVAL"`, `"DOUBLE_INTERVAL"`, `"DATE_INTERVAL"`, `"LONG"`, `"LONG_INTERVAL"`, `"LONG_ARRAY"`]

The following example illustrates a criterion that uses 3 attributes, first one being of date type, second one of string type and last one of any number type.
*Criterion plugin-info.json example*

```json
{
  "name": "my-plugin",
  "description": "It is my plugin",
  "version" : 1.0,
  "author" : "Someone",
  "company" : "Some company",
  "email" : "someone@some-company.com",
  "url" : "www.my-plugin-is-awesome.com",
  "license": "GPL-V3",
  "type" : "CRITERIA",
  "conf" : {
    "attributes": [{
      "name": "attributeA",
      "description": "My first attribute",
      "attributeType": ["DATE_ISO8601"]
    }, {
      "name": "attributeB",
      "description":"My second attribute",
      "attributeType": ["STRING"]
    }, {
      "name": "attributeC",
      "description":"My third attribute",
      "attributeType": ["INTEGER", "DOUBLE", "LONG"]
    }]
  }
}
```

# Specific runtime properties

The main criterion component - the one exported in main.js file - will receive the following properties at runtime:

```js
  static propTypes = {
    /** Plugin instance identifier */
    pluginInstanceId: PropTypes.string.isRequired, // used in mapStateToProps and mapDispatchToProps
    /** Configuration attributes, by attributes name, as described in previous plugin-info.json example */
    attributes: PropTypes.shape({
      attributeA: AttributeModelWithBounds.isRequired,
      attributeB: AttributeModelWithBounds.isRequired,
      attributeC: AttributeModelWithBounds.isRequired,
    }).isRequired,
    /** The parent search form initial query */
    initialQuery: PropTypes.string, // used in mapDispatchToProps
  }
```

Those properies, excepted pluginInstanceId, which is a common plugin property, are detailed in following subsections.

## Attributes property

**For each attribute specified in plugin-info.json**, the attributes object will hold, as attribute name key, an **AttributeModelWithBounds**. That object contains the following fields, by significance order for criterion development:
* `jsonPath`: *{string}* Attribute path (fragments and properties), to be used within OpenSearch requests
* `label`: *{string}* Attribute label
* `description`: *{string}* Attribute description
* `boundsInformation`: *{object}* Current context's bounds information for range attributes (date or numbers), compound of fields:
  * `exists`: *{boolean}* True when the attribute is a range type attribute DATE_ISO8601, INTEGER, DOUBLE or LONG (such attribute is "bound-able")
  * `loading`: *{boolean}* True when bounds are currently loading
  * `error`: *{boolean}* True when bounds loading finished in error
  * `lowerBound`: *{number}* Resolved lower attribute value, in initial form context, when attribute has a range type, bounds were successfully loaded and attribute has values in context
  * `upperBound`: *{number}* Resolved upper attribute value, in initial form context, when attribute has a range type, bounds were successfully loaded and attribute has values in context
* `type`: *{string}* Attribute type (as specified in plugin-info.json, from **fr.cnes.regards.modules.models.domain.attributes.AttributeType**)
* `unit`: *{string}* Unit if any (only for number type attributes)
* `precision`: *{number}* Precision if any (only for floatting number types attributes)
* `arraysize`: *{number}* Array size if any (only for array type attributes)
* `optional`: *{boolean}* True when that attribute, in a given dataobject, can be ommited
* `defaultValue`: *{string}* Default value if any
* `fragment`: *{object}* Attribute fragment, holding id, name and description fields
* `name`: *{string}* Attribute name 
* `id`: *{number}* Attribute database id

## initialQuery property

That attribute holds the initial form context OpenSearch query. For instance, when form is restricted to the dataset URN:DATASET:D1 and URN:DATASET:D2, the query would be equal to "tags:(URN:DATASET:D1 OR URN:DATASET:D2)". That query can be used to obtain a list of available values for given attributes in form context.

# Implementation

## Working principles

Criterion plugins, as parts of the search form, must respect the following requirements:
* They can emit, on user demand, some OpenSearch request parameters (or part of it)
* Their state can be restored from one session to another
* Their state can be shared using current browser URL

In order to provide those functionnalities, while keeping plugins code light, the URL and session restoration systems are implemented within the parent search form. That results in parent form reading and updating, on need, criterion plugins state.  
The following design was retained to achieve state sharing between form and plugins:
* The application initializes a common Redux store space for plugins.
* Search form module uses that space to:
  * Build the next OpenSearch request, using current criterion plugins state
  * Serialize and restore plugins state into / from URL or localStorage
* Criterion plugins use that space to retrieve or update their state and current request parameters

## Criterion state design

The criterion state should hold each variable that will modify its OpenSearch output parameters.  
To illustrate it, let's take the following example: we want to implement a criterion plugin that selects any data object where value **IS EQUAL TO** or **IS NOT EQUAL TO** the user entered value. In that example, let's call it `SimpleCriterion`, the user selects the operator to use and enters the value.  
The criterion OpenSearch output parameters would be expressed as the following queries:
* When IS EQUAL TO operator is selected, `{ q: ${attributeJsonPath}:"${userEnteredValue}" }`, like `{ q: 'label:"myLabel"' }` for instance.
* When IS NOT EQUAL TO operator is selected, `{ q: ${attributeJsonPath}:!("${userEnteredValue}") }`, like `{ q: label:!("some label") }` for instance.
In that example, the attribute JSON path comes from props.attributes, and state would look like:
```js
state: {
  operator: PropTypes.oneOf([SimpleCriterionContainer.EQUAL, SimpleCriterionContainer.NOT_EQUAL]).isRequired, // User selected operator
  value: PropTypes.string, // User entered value
}
```

## Binding state from store

To recover the plugin's state from the shared Redux space, a plugin has to bind it, within Redux mapStateToProps method, using the `pluginStateSelectors#getCriterionState` method. State recovering is demonstrated in code below.

```jsx
import { connect } from '@regardsoss/redux'
import { pluginStateActions, pluginStateSelectors } from '@regardsoss/plugins-api'


export class SimpleCriterionContainer extends React.Component {

  // ...

  static mapStateToProps(state, { pluginInstanceId }) {
    return {
      state: pluginStateSelectors.getCriterionState(state, pluginInstanceId),
  }
  
  // ...
}

// Exports redux store connected component
export default connect(
  SimpleCriterionContainer.mapStateToProps,
  SimpleCriterionContainer.mapDispatchToProps)(SimpleCriterionContainer)
```

Most of the time, it is more convenient to define a default state to avoid testing if the state is null or undefined. However, mapStateToProps method being often called, **the developer must avoid creating new instances** in that method, otherwise the component will constantly render. The following code illustrates state recovering with a default state in the SimpleCriterion example.

```jsx
import { connect } from '@regardsoss/redux'
import { pluginStateActions, pluginStateSelectors } from '@regardsoss/plugins-api'


export class SimpleCriterionContainer extends React.Component {

  /** EQUAL operator ID */
  static EQUAL = 'equal'
  /** NOT EQUAL operator ID */
  static EQUAL = 'not.equal'

  /** Component default state (avoids new instances in mapStateToProps) */
  static DEFAULT_STATE = {
    operator: SimpleCriterionContainer.EQUAL,
    value: '',
  }

  static mapStateToProps(state, { pluginInstanceId }) { // using pluginInstanceId from component properties
    return {
      state: pluginStateSelectors.getCriterionState(state, pluginInstanceId) || SimpleCriterionContainer.DEFAULT_STATE,
    }
  }
  
  static propTypes = {
    // ... criterion plugin common properties
    // From redux mapStateToProps
    state: { 
      // User selected operator
      operator: PropTypes.oneOf([SimpleCriterionContainer.EQUAL, SimpleCriterionContainer.NOT_EQUAL]).isRequired,
      // User input text
      value: PropTypes.string,
    }
  }

  render(){
    const { state: { operator, value } } = this.props
    return // ...rendering
  }


}
```

Note that, as Redux binding is called each time the store receives modifications, the component state is **granted to be updated as soon as it changes**.

## Publishing on state change

When criterion requires updating its state, on user input for instance, it has to dispatch an action built by `pluginStateActions#publishState`. The following code illustrate it.
```jsx
import { connect } from '@regardsoss/redux'
import { pluginStateActions, pluginStateSelectors } from '@regardsoss/plugins-api'


export class SimpleCriterionContainer extends React.Component {

  // ...

  static mapDispatchToProps(dispatch, { pluginInstanceId }) { // using pluginInstanceId from component properties
    return {
      publishState: (state, query) => dispatch(pluginStateActions.publishState(pluginInstanceId, state, query)),
    }
  }

  static propTypes = {
    // ...
    publishState: PropTypes.func.isRequired,
  }

  // ...
}

// Exports redux store connected component
export default connect(
  SimpleCriterionContainer.mapStateToProps,
  SimpleCriterionContainer.mapDispatchToProps)(SimpleCriterionContainer)
```

The pluginStateActions#publishState expects 3 parameters: 

* pluginInstanceId: *{string}* Criterion pluginInstanceId, used to address the specific plugin redux space
* state: *{object}* Criterion state to publish
* requestParameters: *{string}* Criterion OpenSearch request parameters for published state

In the code sample above, specifically in the mapStateToProps method, a closure on pluginInstanceId was built. That method only takes the state and the requestParameters as parameters. Back on the SimpleCriterion example, when a user selects the other operator or inputs some value, the following code would publish a new state and request parameters.

```jsx
export class SimpleCriterionContainer extends React.Component {
  // mapStateToProps, mapDispatchToProps, propTypes...

  /**
   * Converts state into OpenSearch request parameters. We introduce it here to avoid copying that code in onTextInput 
   * and onOperatorSelected methods. Query building Unit Tests will also be easier to write that way
   * @param {{operator: string, value: string}} state criterion state for which request should be built
   * @param {*} attribute configured attribute for that plugin
   * @return {*} built request parameters. Here, only OpenSearch query (q)
   */
  static convertToRequestParameters(state, attribute){
    let q = null
    if (state.value){
      q = state.operator === SimpleCriterionContainer.EQUAL ?
        `${attribute.jsonPath}:"${state.value}"`: // Data with attribute value that is equal to user input
        `${attribute.jsonPath}:!("${state.value}")` // Data with attribute value that is not equal to user input
    }
    // do not create a query while user did not enter anything 
    // (or it would filter attribute value equal to or different of '')
    return { q } 
  }

  /**
   * User input some text
   * @param {string} text input
   */
  onTextInput = (textValue) => {
    // note that we suppose here that searchAttribute has been defined in plugin-info.json
    const { publishState, state, attributes: { searchAttribute } } = this.props 
    const nextState = {
      operator: state.operator,
      value: textValue,
    }
    publishState(nextState, SimpleCriterionContainer.convertToRequestParameters(nextState, searchAttribute))
  }

  /**
   * User selected a new operator
   * @param {string} selectedOperator newly selected operator
   */
  onOperatorSelected = (selectedOperator) => {
    const { publishState, state, attributes: { searchAttribute } } = this.props 
    const nextState = {
      operator: selectedOperator,
      value: state.value,
    }
    publishState(nextState, SimpleCriterionContainer.convertToRequestParameters(nextState, searchAttribute))
  }

}
// ... connect
```

With onTextInput and onOperatorSelected callbacks connected, the plugin is now able updating its state and request parameters for parent form.

## Complete SimpleCriterion example

To summarize previously explained points, the code below illustrates both state binding and state publishing. Each time the component publishes a new state, it will receive new state values through properties and then re-render with this new state. To make that example a bit shorter, the render method will use the imaginary components *Selector*, *Choice* and *Textfield*. However, those components' real world counterparts are easy to find, in material-ui for instance.

*simple-criterion/src/plugin-info.json*
```json
{
  "name": "simple-criterion",
  "description": "A simple criterion, that allow user searching data objects where attribute value is equal or different of a value.",
  "version": "0.0.1-alpha",
  "author": "Demo boy",
  "company": "CS-SI",
  "email": "demo.boy@c-s.fr",
  "license": "GPL V3",
  "type": "CRITERIA",
  "conf": {
    "attributes": [{
      "name": "searchAttribute",
      "description":"Search attribute",
      "attributeType": ["STRING"]
    }]
  }
}
```


*simple-criterion/src/containers/SimpleCriterionContainer.js*
```jsx
import { connect } from '@regardsoss/redux'
import { pluginStateActions, pluginStateSelectors } from '@regardsoss/plugins-api'


export class SimpleCriterionContainer extends React.Component {
  /** EQUAL operator ID */
  static EQUAL = 'equal'

  /** NOT EQUAL operator ID */
  static EQUAL = 'not.equal'

  /** Component default state (avoids new instances in mapStateToProps) */
  static DEFAULT_STATE = {
    operator: SimpleCriterionContainer.EQUAL,
    value: '',
  }

  static mapStateToProps(state, { pluginInstanceId }) { // using pluginInstanceId from component properties
    return {
      // bind state from shared redux space (it will be automatically updated on change)
      state: pluginStateSelectors.getCriterionState(state, pluginInstanceId) || SimpleCriterionContainer.DEFAULT_STATE,
    }
  }

  static mapDispatchToProps(dispatch, { pluginInstanceId }) { // using pluginInstanceId from component properties
    return {
      // dispatch state change (closure on pluginInstanceId)
      publishState: (state, query) => dispatch(pluginStateActions.publishState(pluginInstanceId, state, query)),
    }
  }

  static propTypes = {
    /** Plugin instance identifier */
    pluginInstanceId: PropTypes.string.isRequired, // used in mapStateToProps and mapDispatchToProps
    /** Configuration attributes, by attributes name, as described in previous plugin-info.json example */
    attributes: PropTypes.shape({
      searchAttribute: AttributeModelWithBounds.isRequired,
    }).isRequired,
    /** Parent search form initial query */
    initialQuery: PropTypes.string,
    // From mapStateToProps
    state: {
      // User selected operator
      operator: PropTypes.oneOf([SimpleCriterionContainer.EQUAL, SimpleCriterionContainer.NOT_EQUAL]).isRequired,
      // User input text
      value: PropTypes.string
    },
    // From mapDispatchToProps
    publishState: PropTypes.func.isRequired
  }

 /**
   * Converts state into OpenSearch request parameters. We introduce it here to avoid copying that code in onTextInput 
   * and onOperatorSelected methods. Query building Unit Tests will also be easier to write that way
   * @param {{operator: string, value: string}} state criterion state for which request should be built
   * @param {*} attribute configured attribute for that plugin
   * @return {*} built request parameters. Here, only OpenSearch query (q)
   */
  static convertToRequestParameters(state, attribute){
    let q = null
    if (state.value){
      q = state.operator === SimpleCriterionContainer.EQUAL ?
        `${attribute.jsonPath}:"${state.value}"`: // Data with attribute value that is equal to user input
        `${attribute.jsonPath}:!("${state.value}")` // Data with attribute value that is not equal to user input
    }
    // do not create a query while user did not enter anything 
    // (or it would filter attribute value equal to or different of '')
    return { q } 
  }

  /**
   * User input some text
   * @param {string} text input
   */
  onTextInput = (textValue) => {
    // note that we suppose here that searchAttribute has been defined in plugin-info.json
    const { publishState, state, attributes: { searchAttribute } } = this.props 
    const nextState = {
      operator: state.operator,
      value: textValue,
    }
    publishState(nextState, SimpleCriterionContainer.convertToRequestParameters(nextState, searchAttribute))
  }

  /**
   * User selected a new operator
   * @param {string} selectedOperator newly selected operator
   */
  onOperatorSelected = (selectedOperator) => {
    const { publishState, state, attributes: { searchAttribute } } = this.props 
    const nextState = {
      operator: selectedOperator,
      value: state.value,
    }
    publishState(nextState, SimpleCriterionContainer.convertToRequestParameters(nextState, searchAttribute))
  }

  render() {
    const { state, attributes: { searchAttribute } } = this.props
    // Connect components with current state, configuration and callbacks
    // Nota: In real world situation, we would probably like to add here
    // internationalized message and styles.
    // We strongly encourage, in REGARDS, to perform such rendering in a
    // dedicated sub component
    return (
      <div>
        { /* Render attribute label */ }
        <span>{searchAttribute.label}</span>
        { /* Render operator selector */ }
        <Selector onSelected={this.onOperatorSelected} selectedValue={state.value}>
          <Choice label="Equal to" value={SimpleCriterionContainer.EQUAL} />
          <Choice label="Diffent of" value={SimpleCriterionContainer.NOT_EQUAL} />
        </Selector>
        { /* Render text field */ }
        <Textfield text={state.value} onInput={this.onTextInput} />
      </div>
    )
  }
}

// Exports redux store connected component
export default connect(
  SimpleCriterionContainer.mapStateToProps,
  SimpleCriterionContainer.mapDispatchToProps)(SimpleCriterionContainer)
```
And this is it, congratulations! That plugin is now fully functionnal. It is able to emit some of the current form OpenSearch request parameters, on the attribute it is configured to work with. Please note that **the query is not built when there isn't any value**, as it would result in retrieving no data in default state (ie initially).

## Helpers for plugins text

To improve labels consistency over all plugins, the following tools, described in subsections, are provided

### getFieldHintText

That method provides label according with the attribute as parameter, its role in the plugin and its bounds:
* `intl`: *{object}* intl context (must be declared by the component)
* `attribute`: *{object}* attribute as provided in attributes properties
* `boundType`: *{string}* Role of that attribute in criterion
  * `BOUND_TYPE.LOWER_BOUND` means the resulting values will be greater or equal to input value
  * `BOUND_TYPE.UPPER_BOUND` means the resulting values will be lower or equal to input value.
  * `BOUND_TYPE.ANY_BOUND` means the resulting values may be greater or lower than input value
  * `BOUND_TYPE.NONE` means value bounds should be ignored (attribute type is not range-able)

It provides, according with case, the following texts:
* Bounds are not existing for current type or in error: "{Attribute type}"
* Bounds are loading: "{Attribute type} {Loading message}"
* BOUND_TYPE.LOWER_BOUND and there is a lower bound value : "> {lowerBoundValue}"
* BOUND_TYPE.UPPER_BOUND and there is an upper bound value : "< {upperBoundValue}"
* BOUND_TYPE.ANY_BOUND and there is at least one bound value : "{Values range}". Note that lower or upper bound might be replaced with infinity symbol if not found
* Any other case: "{Attribute type}". Note that in those cases, there is no value for the corresponding attribute in current context (hasNoValue method returns true)

*Use example*
```js
import { i18nContextType } from '@regardsoss/i18n'
import { BOUND_TYPE, formatHintText } from '@regardsoss/plugins-api'

class ExampleComponent extends React.Component {
// ...
  static contextTypes = {
    ...i18nContextType,
  }
// ...
  render(){
    const { attributes: { attributeToFormat }} = this.props
    return getFieldHintText(this.context.intl, attributeToFormat, BOUND_TYPE.LOWER_BOUND)
  }
}
```

### getFieldTooltip

That method provides a common tooltip for plugin fields working on an attribute.
Its provides, according with case, the following texts:
* Bounds not existing for current type, are loading or in error: "{Attribute type}"
* No upper nor lower bound value: "{Attribute type} {Message for undefined bounds information}"
* Upper and / or lower bound value: "{Attribute type} {Values range}". Note that lower or upper bound might be replaced with infinity symbol if not found

*Use example*
```js
import { i18nContextType } from '@regardsoss/i18n'
import { BOUND_TYPE, formatHintText } from '@regardsoss/plugins-api'

class ExampleComponent extends React.Component {
// ...
  static contextTypes = {
    ...i18nContextType,
  }
// ...
  render(){
    const { attributes: { attributeToFormat }} = this.props
    return formatTooltip(this.context.intl, attributeToFormat)
  }
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


