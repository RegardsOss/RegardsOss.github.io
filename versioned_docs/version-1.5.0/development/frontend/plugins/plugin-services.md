---
id: frontend-service-plugins
title: Plugin service
sidebar_label: Services
slug: /development/frontend/plugins/service/
---


## Presentation

A front-end service plugin is a javascript bundle used by [search results modules](../../packages/lazy-modules/search-results/) to add a graphical service onto a given entity or entities selection.

![](/images/frontend/plugins/services-example.png)
*Some services example: on lines, services for one entity. On header, services for current selection.*

**Notes**:  Service plugin also respects main plugin consideration. Thus, make sure reading [plugins page](../../plugins/) first!

A service may work for one or for many data objects. It allows defining administrator (static) and user (dynamic) parameters for execution. 

## Main principles

Each service plugin:
* displays a **custom graphical component** for a given object or selection
* defines working modes (one entity or selection / query)
* receives optionally, at runtime, two layers of configuration
  * a static layer, configured by project administrator
  * a dynamic layer, configured by current user just before running the service.


## Frontend plugin service VS Catalog plugin

A frontend service and a catalog plugin are both able to provide services for a set of data. However, their purpose and constraints are slightly different:
* The catalog plugin, by design, can only build a file as execution result. It has better data retrieving and computing performances, as it runs on a server node. That consideration is highly important when dealing with huge data amounts.
* The frontend service shows graphical components, charts, and so on... It has low CPU and memory resources as it runs in user web browser.

Therefore, the catalog plugin should be preferred when a simple file, downloaded by user and opened externally, can fully provide the service. On the other hand, frontend service should be preferred when a new interface functionality is required.

It can occur that such a new functionality is required **and must work with heavy data volumes**. In such cases, it is usually a good solution to couple a catalog plugin with a frontend service, delegating tasks as following:
* Catalog service receives data retrieval request and prepares a file holding data to be used by the front-end service
* Frontend service starts the catalog service, waits for resulting file then consumes it to show user view.

## Life cycle

The plugin service life cycle is compound of the following steps:
* A. Administration configuration
  1. Plugin declaration (see common plugin page)
  1. Service configuration creation, by administrator.
* B. Service running (can be iterated)
  1. Service runtime configuration, by user. That step is skipped if service has no dynamic configuration layer.
  1. Service display

![](/images/frontend/plugins/service-configuration-declaration.png)  
*An example of service configuration creation (A.2 step)*

![](/images/frontend/plugins/service-runtime-configuration.png)  
*An example of service runtime configuration (B.1 step)*

![](/images/frontend/plugins/service-results-display.png)  
*An example of service display (B.2 step)*

## Specific configuration (plugin-info.json fields)

First of all, the plugin-info.json file field **"type"** should indicate **"SERVICE"**, to ensure it is considered as a service, and not as a criterion.

Then, the plugin must indicate its **application mode** (one entity and / or many entities), the **entity types** he expects to work with and its configuration (static and dynamic, see previous sections for more detail). Therefore, the **"conf"** field, in **plugin-info.json** file,  contains the following specific fields:
* `"applicationModes"`: *{array}* a required array that can contain one or both the following values:
  * **"ONE"**: the service applies to one entity
  * **"MANY"**: the service applies to many entities
* `"entityTypes"`: *{array}* a required array that can contain some or all the following values:
  * **"DATA"**: The service works with data objects
  * **"COLLECTION"**: The service works with collections, *not supported yet*
  * **"DATASET"**: The service works with datasets, *not supported yet*
* `"showButtonsBar"`: *{boolean}* When true, service launcher button bar is displayed below the service, after configuration, allowing the user to step back to runtime configuration anb close the service. When false, button bar is hidden and the service should handle closing by itself.
* `static`: *{object}* an optional object of parameters defining the static configuration layer. Each parameter in that object will be defined as following:
  * `{object key}`: property key, as it will be used by the plugin at runtime. It is also used as label in the administrator configuration form
  * `type` : *{string}* It determines the type that will actually be received at runtime by the plugin. One of **"bool"**, **"char"**, **"date"**, **"float"**, **"int"**, **"string"** types. 
  * `required`: *{boolean}* When true, null or undefined values will be forbidden for the property.
* `dynamic`: *{object}* an optional object of parameters defining the dynamic configuration layer.
  * `{object key}`: property key, as it will be used by the plugin at runtime.
  * `type` : *{string}* working like corresponding element in **static** field
  * `required` : *{boolean}* working like corresponding element in **static** field
  * `label`: *{string}* Parameter label, that will be shown to user when filling dynamic configuration form

*Note that administrator is allowed setting a default value for all dynamic parameters. That value will be used, when provided, as initial parameter value, but the user will still be allowed modifying it*

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
*An example of plugin-info.json for service criterion*

## Specific runtime properties

The main service component - the one exported in main.js file - will receive the following properties at runtime: 
```js
  static propTypes = {
    pluginInstanceId: React.PropTypes.string,
    target: AccessShapes.PluginTarget.isRequired,
    configuration: AccessShapes.RuntimeConfiguration.isRequired,
    onClose: PropTypes.func.isRequired,
  }
```

Those properties, excepted pluginInstanceId which is a common plugin property, are detailed in following subsections.

### target property

Target property exact shape depends on current target type. However, the following fields are always present:
* `type`: The current target type from `AccessDomain.RuntimeTargetTypes`
* `searchContext`: the current search context, with fields:
  * `engineType`: name of the search engine currently used
  * `searchParameters`: search parameters to retrieve entities for which service currently runs
* `entitiesCount`: number of entities for which service currently runs
* `entityType`: type of entities for which service currently runs

According with service configuration, some of those fields may be constants. For instance, *target.entityTypes* would always be *'DATA'* if service configuration specifies `"entityTypes": ["DATA"]`. In the same way, *target.entitiesCount* is always *1* if service is currently running for a single entity.

Each target type also adds a custom field:
* When type is `AccessDomain.RuntimeTargetTypes.ONE`, `entity` field is added in target. It holds the entity for which service currently runs, matching CatalogShapes.Entity shape
* When type is `AccessDomain.RuntimeTargetTypes.MANY`, `entities` field is added in target. It holds the list of entities for which service currently runs, matching PropTypes.arrayOf(CatalogShapes.Entity)
* When type is `AccessDomain.RuntimeTargetTypes.QUERY`, `excludedEntities` field is added in target. It holds the list of entities that should be ignored in current search context, matching PropTypes.arrayOf(CatalogShapes.Entity)

Finally, please note that a plugin **will never receive a target that does not match what was specified** in configuration fields *applicationModes* and *entityTypes*

### configuration property

When launched, the service plugin main component receives the property `configuration`. That object represents the runtime configuration.
It has the following fields:
* `static`: *{object}* This field contains the static configuration layer map, filled by administrator. The keys in map are *parameter names* and the values are those entered by the administrator, matching type specified in plugin-info.json. Every parameter that was marked as `required` is granted here to be defined (never null nor undefined). Other ones should be checked before using.
* `dynamic`: *{object}* This field contains the dynamic configuration layer map, filled by user. It works exactly the same than static field. 

### onClose property

That property can be used to close the service at any moment, by performing

```jsx
onUserIsRude = () => {
  this.props.onClose() // He's gone too far now!
}
```

## Handling targets seamlessly

REGARDS source code provide a small tool to handle seamlessly any target type. It allows reducing selected entities - see [reduce method documentation](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/reduce), imitating a simple array reduction. To be able using it, it must be declared in mapStateToProps method (see [Redux documentation](https://react-redux.js.org/using-react-redux/connect-mapdispatch) if you are not familiar with that method).
```jsx
// ...
import { TargetEntitiesResolver } from '@regardsoss/plugins-api'
// ...
class MyServiceContainer extends React.Component {
  // ...
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
    const { getReducePromise } = this.props
    getReducePromise((previousResult, entity, index) => {
      // retreat the entity and append treament result to previously managed entities array
      return [...previousResults, this.doSomethingWithEntity(entity)]
    }, []) // initial value, here an empty array
    .then((results) => this.onResolved(results)
    .catch((e) => this.onResolutionError(e))
  }

// ...
```

**Notes:**
* Although it is not exposed, that method may perform network calls in background. Hence, when the payload is important, it may be very time consuming.
* Appending all entities in memory, without modifying them to cut down their weight, is a bad practice, once again due to the possible payload size.

## Going further

The React container ExampleContainer, from *webapp/plugin/services/example*, in *rs-frontend* repository, illustrates using the plugin service configuration and target to show entities partitions. It uses `getReducePromise` to avoid handling manually the target types when fetching data, recovering it through actions, test react components... Reading that example should be a good starting point from here.
