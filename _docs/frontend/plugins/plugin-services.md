---
layout: classic-docs
title: Plugin service
short-title: Service
---

{% include toc.md %}

# Presentation

A front-end service plugin is a javascript bundle used by [search results](/frontend/modules/search-results/), [search form](/frontend/modules/search-form/) and [search graph](/frontend/modules/search-graph/) modules to add a graphical service onto a given data or selection.

![](/assets/images/frontend/plugins/services-example.png)
*Some services example: on lines, services for one entity. On header, services for current selection.*

**Notes**:  Service plugin also respects main plugin consideration. Thus, make sure reading [plugins page](/frontend/plugins/plugins.md) first!

A service may work for one or for many data objects. It allows defining administrator (static) and user (dynamic) parameters for execution. 

# Main principles

Each service plugin:
* displays a **custom graphical component** for a given object or selection
* defines working modes (one entity or selection / query)
* receives optionally, at runtime, two layers of configuration
  * a static layer, configured by project administrator
  * a dynamic layer, configured by current user just before running the service.


# Frontend service VS Catalog service

A frontend service plugin and a catalog service plugin are both able to provide services for a set of data. However, their purpose is slightly different:
* The catalog service, by design, can only build a file as execution result
* The frontend service shows graphical components, charts, and so on...
* The catalog service, as part of the backend:
  * has better data retrieving performances, especially when it comes to huge data amounts.
  * has better computing performances, since it executes on server computers

Therefore, the frontend service should be preferred when a simple file, downloaded by user and opened externally, is not enough to provide the service.

When such service is expected, but may work with huge data amounts (big selections), it is usually a good solution to couple it with a catalog service, delegating tasks as following:
* Catalog service receives data retrieval request and prepares a file holding data to be used by the front-end service
* Frontend service starts the catalog service, waits for resulting file then consumes it to show user view.

# Life cycle

The plugin service life cycle is compound of the following steps:
* A. Administration configuration
  1. Plugin declaration (see common plugin page)
  1. Service configuration creation, by administrator
* B. Service running (can be iterated)
  1. Service runtime configuration, by user
  1. Service display

![](/assets/images/frontend/plugins/service-configuration-declaration.png)
*A.2 - An example of service configuration creation *

![](/assets/images/frontend/plugins/service-runtime-configuration.png)
*B.1 - An example of service runtime configuration *

![](/assets/images/frontend/plugins/service-results-display.png)
*B.2 - An example of service display *

# Specific configuration (plugin-info.json fields)

First of all, the plugin-info.json file field **"type"** should indicate **"SERVICE"**, to ensure it is considered as a service, and not as a criterion.

Then, the plugin must indicate its **application mode** (one entity and / or many entities), the **entity types** he expects to work with and its configuration (static and dynamic, see previous sections for more detail). Therefore, the **"conf"** field, in **plugin-info.json** file,  contains the following specific fields:
* `"applicationModes"`: *{array}* a required array that can contain one or both the following values:
  * **"ONE"**: the service applies to one entity
  * **"MANY"**: the service applies to many entities (expressed as an internal IDs list or an OpenSearch request)
* `"entityTypes"`: *{array}* a required array that can contain some or all the following values:
  * **"DATA"**: The service works with data objects
  * **"COLLECTION"**: The service works with collections, *not supported yet*
  * **"DATASET"**: The service works with datasets, *not supported yet*
* `"showButtonsBar"`: *{boolean}* When true, service launcher button bar is displayed below the service, after configuration (allowing user to perform back operation / close service). When false, button bar is hidden and service should handle closing by itself.
* `static`: *{object}* an optional object of parameters defining static configuration layer. Each parameter in that object will be defined as following:
  * `{object key}`: property key, as it will be used by the plugin at runtime. It is also used as label in the administrator configuration form
  * `type` : *{string}* It determines the type that will be actually at runtime by the plugin. One of **"bool"**, **"char"**, **"date"**, **"float"**, **"int"**, **"string"** types. 
  * `required`: *{boolean}* When true, null or undefined values will be forbidden for the property.
* `dynamic`: *{object}* an optional object of parameters defining the dynamic configuration layer.
  * `{object key}`: property key, as it will be used by the plugin at runtime.
  * `type` : *{string}* working like corresponding element in **static** field
  * `required` : *{boolean}* working like corresponding element in **static** field
  * `label`: *{string}* Parameter label, that will be shown to user when filling dynamic configuration form

*Note that administrator is allowed setting a default value for all dynamic parameters. That value will be used, when provided, as initial parameter value, but the user will still be allowed modifying it*

*Service plugin-info.json example:*

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
  "type" : "SERVICE",
  "conf" : {
    "applicationModes": [
      "ONE",
      "MANY"
    ],
    "entityTypes": [
      "DATA"
    ],
    "showButtonsBar": true,
    "static": {
      "adminParam1": {
        "type": "string",
        "required": false
      },
    },
    "dynamic": {
      "userParam1": {
        "label": "A boolean",
        "type": "bool",
        "required": true
      },
      "userParam2": {
        "label": "A char",
        "type": "char",
        "required": false
      },
    }
  }
}

```

# Specific runtime properties

The main service component - the one exported in main.js file - will receive the following properties at runtime: 
```js
  static propTypes = {
    pluginInstanceId: React.PropTypes.string,
    target: AccessShapes.PluginTarget.isRequired,
    configuration: AccessShapes.RuntimeConfiguration.isRequired,
    onClose: PropTypes.func.isRequired,
  }
```

Those properties are detailed in sections below, except the pluginInstanceId property, which is part of the common plugins API (see [plugins page](/frontend/plugins/plugins)).

## target property

Target property exact shape depends on current target type. However, the following fields are always present:
* `type`: The current target type from `AccessDomain.RuntimeTargetTypes`
* `searchContext`: the current search context, with fields:
  * `engineType`: type of the search engine currently used
  * `searchParameters`: search parameters to retrieve entities the service applies on
* `entitiesCount`: number of entities in selection
* `entityType`: type of selected entities

According with service configuration, some of those fields may be constants. For instance, *target.type*, would always be *'DATA'* if service configuration specifies `"entityTypes": ["DATA"]`. In the same way, *target.entitiesCount* is always *1* if service is currently running for a single entity.

Each target type also adds a custom field:
* When type is `AccessDomain.RuntimeTargetTypes.ONE`, `entity` field is added in target. It holds the entity the service currently runs for, matching CatalogShapes.Entity shape
* When type is `AccessDomain.RuntimeTargetTypes.MANY`, `entities` field is added in target. It holds The list of entities the service currently runs for, matching PropTypes.arrayOf(CatalogShapes.Entity)
* When type is `AccessDomain.RuntimeTargetTypes.QUERY`, `excludedEntities` field is added in target. It holds the list of entities that should be ignored in current search context, matching PropTypes.arrayOf(CatalogShapes.Entity)

Finally, please note that a plugin **will never receive a target that does not match what was specified** in configuration fields *applicationModes* and *entityTypes*

## configuration property

When launched, the service plugin main component receives the property `configuration`. That object represents the runtime configuration.
It has the following fields:
* `static`: *{object}* This field contains the static configuration layer map, filled by administrator. The keys in map are *parameter names* and the values are those entered by the administrator, with the type specified in package-info. Every parameter that was marked as `required` is granted here to be defined (never null nor undefined). Other ones should be checked before using.
* `dynamic`: *{object}* This field contains the dynamic configuration layer map, filled by user. It works exactly the same than static field. 

## onClose property

That property can be used to close the service at any moment, by performing

```jsx
onUserIsRude = () => {
  this.props.onClose() // He's gone to far this time!
}
```

# Handling targets seamlessly

REGARDS source code provide a small util to handle seamlessly any target type. It allows reducing selected entities - see [reduce method documentation](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/reduce), imitating a simple array reduction. To be able using it, it must be declared in mapStateToProps method (part of the redux system, discussed in genaral frontend pages).
```jsx
// ...
import { TargetEntitiesResolver } from '@regardsoss/plugins-api'
// ...
class MyServiceContainer extends React.Component {
  // ...

  /**
   * Redux connector to dispatch: allows dispatching action. used here to demo the reduce promise on runtime target
   * @param {*} dispatch redux dispatch function
   * @param {*} props this properties (non redux injected)
   */
  static mapDispatchToProps = (dispatch, { target }) => ({
    // we apply partially the method getReducePromise to ignore dispatch reference at runtime
    getReducePromise: (reducer, initialValue) => TargetEntitiesResolver.getReducePromise(dispatch, target, reducer, initialValue),
  })

  static propTypes = {
    pluginInstanceId: PropTypes.string.isRequired, // Plugin identifier (unused here)
    target: AccessShapes.PluginTarget.isRequired,
    configuration: AccessShapes.RuntimeConfiguration.isRequired,
    // ...
    // From mapDispatchToProps
    getReducePromise: PropTypes.func.isRequired,
  }
  
  // ...

componentDidMount() {
    const { getReducePromise, configuration: { dynamic: { pDate } } } = this.props
    getReducePromise((previousResult, entity, index) => {
      // retreat the entity and append treament result to previously managed entities 
      return [...previousResults, this.doSomethingWithEntity(entity)]
    })
    .then((results) => this.onResolved(results)
    .catch((e) => this.onResolutionError(e))
  }

// ...

```

**Notes:**
* Although it is not exposed, that method may perform network calls in background. Hence, when the payload is important, it may be very time consuming.
* Appending all entities in memory, without modifying them to cut down their weight, is for the same reason, a bad practice.

# Going further

The React container ExampleContainer, from *webapp/plugin/services/example*, in *rs-frontend* repository, illustrates using the plugin service configuration and target to show entities partitions. It uses `getReducePromise` to avoid handling manually the target types when fetching data, recovering it through actions, test react components... Reading that example code may be a good starting point from here.
