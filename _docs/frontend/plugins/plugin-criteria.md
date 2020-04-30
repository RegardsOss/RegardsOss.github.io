---
layout: classic-docs
title: Plugin criterion
short-title: Criterion
---

{% include toc.md %}

# Presentation

A front-end criterion plugin is a javascript bundle used in [Search results modules](/frontend/modules/search-results/) to create form fields and panes. Each criterion plugin generates OpenSearch request parameters sent to the rs-catalog microservice in order to search resulting entities. Criterion plugins accept attributes to filter as configuration.

![](/assets/images/frontend/plugins/search-form-small.png)  
*Example of search form, using many criterion plugins*

**Notes** :
* Criterion plugin also respects main plugin consideration. Thus, make sure reading [plugins page](/frontend/plugins/plugins) first!
* OpenSearch requests are expressed using the [Lucene format](https://lucene.apache.org/core/2_9_4/queryparsersyntax.html).

# Main principles

Each criterion plugin:
* shares its state with parent search-form. That state:
  * can be initially undefined
  * will be saved / restored automatically
  * must be published together with new request parameters
* displays one or many table rows and columns in the form 
* builds requests parameters that can filter search results (assembling them is performed automatically by parent module).

# Specific configuration (plugin-info.json fields)

First of all, the plugin-info.json file field **"type"** should indicate **"CRITERIA"**, to ensure it is considered as a criterion, and not as a service.

Then, the plugin indicates a list of attributes he intends to use for building request parameters, and their type restrictions, in **"conf"."attributes"** field. Please note that the field is mandatory, but can be left empty:
* `attributes`: *{array}* An array of attributes definitions, that indicates the number and type of attributes that should be provided to the criterion, when adding the criterion into a search form. Each array element defines the following fields:
  * `name`: *{string}* The name used in code to refer to that attribute. For instance, if an attribute is named `myAttribute`, it will be possible to access it, in the main criterion component, with the property `this.props.attributes.myAttribute`.
  * `description`: *{string}* Description displayed to the administrator when he selects **actual attribute** for this abstract attribute, at plugin configuration time.
  * `attributeType`: *{array}* Accepted types for that attribute. Possible attributes types, from JAVA class **fr.cnes.regards.modules.models.domain.attributes.AttributeType**, are [`"STRING"`, `"INTEGER"`, `"DOUBLE"`, `"DATE_ISO8601"`, `"URL"`, `"BOOLEAN"`, `"STRING_ARRAY"`, `"INTEGER_ARRAY"`, `"DOUBLE_ARRAY"`, `"DATE_ARRAY"`, `"INTEGER_INTERVAL"`, `"DOUBLE_INTERVAL"`, `"DATE_INTERVAL"`, `"LONG"`, `"LONG_INTERVAL"`, `"LONG_ARRAY"`]

The following example illustrates a criterion that uses 3 attributes, first one being a date attribute, second one a string attribute and last one a number attribute.

*Criterion plugin-info.json example*

```json
{
  "name": "my-plugin",
  "description": "It is my plugin",
  "version" : "1.0.0",
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
    pluginInstanceId: PropTypes.string.isRequired,
    /** Resolved attributes for configuration attributes, by attributes name, as described in previous plugin-info.json example */
    attributes: PropTypes.shape({
      attributeA: AttributeModelWithBounds.isRequired,
      attributeB: AttributeModelWithBounds.isRequired,
      attributeC: AttributeModelWithBounds.isRequired,
    }).isRequired,
    /** Criterion search context */
    searchContext: CatalogShapes.SearchContext.isRequired,
    // configured plugin label, where object key is locale and object value message
    label: UIShapes.IntlMessage.isRequired,
    // Callback to share state update with parent form like (state, requestParameters) => ()
    publishState: PropTypes.func.isRequired,
  }
```

Those properties, excepted pluginInstanceId which is a common plugin property, are detailed in following subsections.

## attributes property

**For each attribute specified in plugin-info.json**, the attributes object will hold an **AttributeModelWithBounds** with [attribute.name] key. That object contains the following fields (the shape can be found in web_modules/utils/plugins/src/shapes/AttributeModelWithBounds.js):
* `jsonPath`: *{string}* Attribute path, to be used within OpenSearch requests
* `label`: *{string}* Attribute label
* `description`: *{string}* Attribute description
* `boundsInformation`: *{object}* Current context's bounds information for range attributes (date or numbers), compound of fields:
  * `exists`: *{boolean}* True when the attribute is a range type attribute DATE_ISO8601, INTEGER, DOUBLE or LONG
  * `loading`: *{boolean}* True when bounds are currently loading
  * `error`: *{boolean}* True when bounds loading finished in error
  * `lowerBound`: *{number}* Resolved lower attribute value, in current form context, when bounds exist, loading finished, there were no error while loading them and attribute has values in current search context
  * `upperBound`: *{number}* Resolved upper attribute value (works as lowerBound field)
* `type`: *{string}* Attribute type (as specified in plugin-info.json, from **fr.cnes.regards.modules.models.domain.attributes.AttributeType**)
* `unit`: *{string}* Unit if any (only for number type attributes)
* `precision`: *{number}* Precision if any (only for floating number types attributes)
* `arraysize`: *{number}* Array size if any (only for array type attributes)
* `optional`: *{boolean}* True when that attribute, in a given data object, can be omitted
* `defaultValue`: *{string}* Default value if any
* `fragment`: *{object}* Attribute fragment, holding id, name and description fields
* `name`: *{string}* Attribute name 
* `id`: *{number}* Attribute database id

## searchContext property

That property holds the current search context. It can be used to perform a query and check available choices for user (like performed in standard criterion "enumerated"). It is an object like:
```js
{
  engineType: '...',
  searchParameters: {
    // ... parameters...
  },
}
```
**Note:** The searchContext does not include the request parameters this criterion built, to avoid blocking situations in form.

## label

Internationalized label provided, at configuration, by administrator. It holds locales as keys and corresponding message as value.

It is an object like:
```js
{
  en: 'my label',
  fr: 'mon libellé',
}
```

## publishState

That function allows publishing state and new request parameters from criterion to parent search-form. It expects the following parameters:
1. New criterion state, as a JS object.
1. New request parameters as a JS object where keys are the parameter name and values are the corresponding values. It can be an empty / null / undefined object. Please note that values types are restricted to:
  * boolean
  * string
  * number
  * array, containing elements of previous types

# Implementation

## Working principles

Criterion plugins, as parts of the search form, must respect the following requirements:
* They can emit, on user demand, some OpenSearch request parameters (or part of it)
* Their state can be restored from one session to another
* Their state can be shared using current browser URL

In order to provide those functionalities, while keeping plugins code light, the URL and session restoration systems are implemented within the parent search form. That results in parent form reading and updating, on need, criterion plugins state.  
The following design was retained to achieve state sharing between form and plugins:
* The application initialize the plugins state with
  * found state in URL, if any
  * found state in web browser storage, if any
  * undefined otherwise (the plugin should then chose an initial state)
* The criterion updates its state with interactions, then publishes new state and request parameters (after publishing, parent form will save the state into URL and web browser storage)

## Criterion state design

The criterion state should hold each variable that will modify its OpenSearch output parameters. Each time the state changes, it must be published alongside with new requestParameters, using publishState callback from properties.

**Note:** As state is serialized, shorten field name is a good practice - especially due to limited URL size.

## Handling errors

Optionally, criterion state can hold the field **error**, at state root. When that field is true, parent search form will disable search button, hence preventing search in current state.

![](/assets/images/frontend/plugins/criterion-error.png)  
*An example of criterion in error (note that search button is disabled, due to error)*

# Example

To illustrate it, let take the following example: 
we want to implement a criterion plugin that selects any data object where value **IS EQUAL TO** or **IS NOT EQUAL TO** the user entered value. In that example, let's call it `SimpleCriterion`, the user selects the operator to use and enters the value. To - artificially - manage an error state too, let's say the criterion is in error when user enters a negative number.

The criterion request parameters would be expressed as following:
* When IS EQUAL TO operator is selected: `{ q: "${attributeJsonPath}:${userEnteredValue}" }`, like `{ q: 'attr1: 18' }` for instance.
* When IS NOT EQUAL TO operator is selected: `{ q: "${attributeJsonPath}:!${userEnteredValue}" }`, like `{ q:' attr1:!18' }` for instance.

## Writing plugin-info.json

First, the requested attribute should be added to the configuration. Doing so lets the criterion work for configured attribute, instead of using an hard coded constant attribute path. However, as we need to test negative values, we will restrain administrator possible choices to number attributes only.

```json
{
  "name": "equal-or-different-criterion",
  "description": "Criterion widget that returns all data what attribute is equal to / different of a given value",
  "version": "1.0.0",
  "author": "A super trainer!",
  "company": "CNES (https://cnes.fr)",
  "contributors": [
    "CS-SI <regards@c-s.fr> (https://www.c-s.fr)"
  ],
  "email": "regards@c-s.fr",
  "url": "http://www.cnes.fr",
  "license": "GPLv3",
  "type": "CRITERIA",
  "conf": {
    "attributes": [
      {
        "name": "exampleAttribute",
        "description": "Example attribute",
        "attributeType": ["INTEGER", "DOUBLE", "LONG"]
      }
    ]
  }
}
```


## Initializing main file

Lets name the main component `ExampleCriterionContainer`.jsx' here. As we will not use the reducers for that example,
the 'main.js' file should hold the following code:
```js
initPlugin(ExampleCriterionContainer, pluginInfo, getReducer, messages, styles)
```

## Implementing main component

### Handle state 

First we should define what is the main component state. To build the query, the component needs to know:
* the operator currently selected by user (equal or different)
* The value entered by the user  

As we also handle here and error state (when user inputs a negative number), the state would look like:

```js
state={
  operator: '...', // enumerated operator
  value: X, // numeric value
  error: true, // or false...
}
```

Then, we need to identify when state and parameters will change. Here:
* When user inputs a new number
* When user selects the other operator

With those elements, we can write the following code. Note that we provide a default state when parent search form sends us 'undefined', to not deal with undefined state cases.

```jsx
const Operators = { 
  EQUALS: 'E', // use small constant for state serialization
  DIFFERENT: 'D',
}

export class ExampleCriterionContainer extends React.Component {
  static DEFAULT_STATE = {
    value: null,
    operator: Operators.EQUALS,
    error: false,
  }
  
  static propTypes = {
    attributes: PropTypes.shape({ // from plugin-info
      exampleAttribute: AttributeModelWithBounds.isRequired,
    }).isRequired,
    label: UIShapes.IntlMessage.isRequired,
    state: PropTypes.shape({
      value: PropTypes.number,
      operator: PropTypes.oneOf(operators.EQUAL, operators.DIFFERENT).isRequired,
      error: PropTypes.bool.isRequired,
    }),
    publishState: PropTypes.func.isRequired,
  }
  
  static defaultProps = {
    state: ExampleCriterionContainer.DEFAULT_STATE,
  }
  
  onNewValueInput = (newNumber) =>{
    // ...
  }
  
  onOperatorSelected = (newOperator) => {
    // ...
  }
}
```

### Update state and request

Now that the state is designed, the criterion should update it when callbacks are invoked (onNewValueInput / onOperatorSelected). To perform that update, we will use a common method, avoiding the need to copy/paste code...

```jsx
// ... ExampleCriterionContainer code above
  
  onNewValueInput = (newNumber) => this.onUpdateState(newNumber, this.props.state.operator)
  
  onOperatorSelected = (newOperator) => this.onUpdateState(this.props.state.value, newOperator)

  onUpdateState = (value, operator) => {
    const { attributes: { exampleAttribute }, publishState } = this.props
    const nextState = { 
      value, 
      operator, 
      // we do not want to show an error here while user has not input any number!
      error: !isNil(value) && value < 1,
    }
    publishState(newState, { 
      // cf. top section for request expression. Here we only need q parameter.
      q: `${exampleAttribute.jsonPath}:${operator === Operators.EQUALS ? '' : '!' }${value}`
    })
  }
```

That code ensures that:
* When user inputs a number, criterion state (with error) and search request are updated
* When user selects an operator, criterion state (with error) and search request are updated

### Rendering?
Most of the time, in REGARDS, state management is performed in container and graphics are delegated to a component with the same name. So let's do it right, and render using that component. We provide at same time all the elements the component may use for graphical state feedback.

```jsx
// ... ExampleCriterionContainer code above

  render(){
    const { state: {value, operator, error}, label } = this.props
    return <ExampleCriterionComponent
      label={label}
      value={value}
      operator={operator}
      error={error}
      onNewValueInput={this.onNewValueInput}
      onOperatorSelected={this.onOperatorSelected}
    >
  }
```
## Graphical component implementation

The graphical implementation is quite straightforward. To keep the code light we'll suppose here to have an OperatorSelector that renders and selects one of Operators values and a NumberInput that renders errors and current value. Although it is not exactly the same operators, similar examples can be found in most default plugins.
Please note that the component renders itself in a table row, as search form is drawn using an HTML table. We will also use here the common applicative theme.

```jsx
export class ExampleCriterionComponent extends React.Component {
  static propTypes = {
    label: UIShapes.IntlMessage.isRequired,
    value: PropTypes.number,
    operator: PropTypes.string.isRequired,
    error: PropTypes.bool.isRequired,
    onNewValueInput: PropTypes.func.isRequired,
    onOperatorSelected: PropTypes.func.isRequired,
  }

  static contextTypes = {
    // enable muiTheme and moduleTheme access through this.context
    ...themeContextType,
    // enable intl access through this.context
    ...i18nContextType,
  }

  render(){
    const { 
      label, value, operator, error,
      onNewValueInput, onOperatorSelected
    } = this.props
    const { intl, muiTheme } = this.context
     return (
      <tr>
        {/* 1. First column: label (locale is found in intl context) */}
        <td style={muiTheme.module.searchResults.searchPane.criteria.firstCell}>
          {label[intl.locale]}
        </td>
        {/* 2. Second column: comparison selector */}
        <td style={muiTheme.module.searchResults.searchPane.criteria.nextCell}>
          <OperatorSelector
            operator={operator}
            onChange={onOperatorSelected}
          />
        </td>
        {/* 3. Third column: input box.
          * we use here an intl message. It should be added, as key, in 
          * plugins/criterion/example-criterion/src/i18n/messages.en.i18n.js (and fr)
          */}
        <td style={muiTheme.module.searchResults.searchPane.criteria.nextCell}>
          <NumberInput
            hintText={intl.formatMessage({id: 'example.criterion.input.hint'})}
            error={error}
            value={value}
            onChange={onNewValueInput}
          />
        </td>
      </tr>
    )
  }
}
```

# Helpers

Numerous helpers can be found in `webapp/web_modules/utils/plugins-api`. They are covering common plugin fields like computing hint text and tooltips according with attribute bounds, resolving constraints range intersection, and so on....

# Going further

There are several criteria provided in *webapp/plugin/criterion* folder, of *rs-frontend* repository. `full-text` criterion illustrates a very simple criterion without attribute while `enumerated` shows a more complicated use case, fetching server data and handling error state. Those criteria should be a good starting point from here.
