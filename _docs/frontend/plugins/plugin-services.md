---
layout: classic-docs
title: Plugin service
short-title: Service
---

{% include toc.md %}

# Presentation

A front-end service plugin is a javascript bundle used by [search results](/frontend/modules/search-results/), [search form](/frontend/modules/search-form/) and [search graph](/frontend/modules/search-graph/) modules to add services onto displayed data.  
A service may work for one or for many data objects. It allows defining administator (static) and user (dynamic) parameters for execution.  

## Frontend service plugin VS Catalog service plugin

A frontend service plugin and a catalog service plugin are both able to provide services for a set of data. However, their purpose is slightly different:
* The catalog service, by design, can only build a file as execution result
* The frontend service can show graphic components, charts, and so on...
* The catalog service, as part of the backend:
  * has better data retrieving performances, especially when it comes to huge data amounts.
  * has better computing performances, since it executes on server computers

Therefore, the frontent service should be preferred when:
* That service will not be dealing with huge data amounts
* That service will not perform heavy computing
* Their must be a specific data displaying, that cannot be a simple file preview / download

When their should be a specific data displaying, but computing and retrieval cannot be performed on frontend side, both services should be implemented to work together, ie  a frontend service should be created, relying on a catalog service to get data to display.

# Specific plugin-info.json fields

The service plugin-info.json files defines all standard plugin fields but the `"type"` field must worth `"SERVICE"`.  
The `"conf"` field is a JSON object holding the following children fields:
* `applicationModes`: *{array}* a required array that can contain one or both the following values:
  * `ONE`: the service applies to one entity
  * `MANY`: the service applies to many entities (expressed as an internal IDs list or a query)
* `entityTypes`: *{array}* a required array that can contain some of all the following values:
  * `DATA`: The service works with dataobjects
  * `COLLECTION`: The service works with collections, *not supported yet*
  * `DATASET`: The service works with datasets, *not supported yet*
  * `DOCUMENT`: The service works with documents, *not supported yet*
* `static`: *{object}* an optional object of parameters to be filled in by the project administrator when he configures a service plugin for results. Each parameter, in that object will be defined as following:
  * `object key`: key to point out the parameter in main component props. It will also be used as label in the configuration form
  * `type` : *{string}* One of `"bool"`, `"char"`, `"date"`, `"float"`, `"int"`, `"string"` types. It determinates the type that will be actually received at runtime by the plugin
  * `required`: *{boolean}* It means, when true, that the project administrator must fill the attribute value. When false, the administrator can leave it blank and, therefore, it can be undefined at runtime
* `dynamic`: *{object}* an optional object of parameters to be filled in by the project user when he applies the service.
  * `object key`: key to point out the parameter in main component props
  * `type` : *{string}* working like static parameter
  * `required` : *{boolean}* working like static parameter, but applying to user
  * `label`: *{string}* Parameter label, that will be shown to user

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
    /** Plugin instance identifier */
    pluginInstanceId: React.PropTypes.string,
    /** The runtime target, see sections below */
    runtimeTarget: AccessShapes.RuntimeTarget.isRequired,
    /** The plugin configuration, containing admin and user parameters, see sections below */
    configuration: AccessShapes.RuntimeConfiguration.isRequired,
  }
```

## Configuration

When launched, the service plugin main component receives the property `configuration`. That object reprensents the runtime configuration.
It has the following fields:
* `static`: *{object}* This field contains administator parameters value. The keys are *parameter names* and the values are those the administrator entered, with the type specified in package-info. Every parameter that was marked as `required` is granted here to be defined (never null nor undefined). Other ones should be checked before being used.
* `dynamic`: *{object}* This field contains user parameters value. It works exactly the same than static field. 

## Provided runtime target

When launched, the service plugin main component receives the property `runtimeTarget`. That object holds the service target for current execution. Its type can be one of: 
* `One entity target` (enumerated type: RuntimeTargetTypes.ONE), if the service application mode contains "ONE"
* `Many entities target` (enumerated type: RuntimeTargetTypes.MANY), if the service application mode contains "MANY"
* `Query target` (enumerated type: RuntimeTargetTypes.QUERY), if the service application mode contains "MANY"

Notes: 
* If the plugin application mode is only ONE, main component will never receive MANY and QUERY target types. Reciprocally, if it is only MANY, main component will never receive ONE target type.
* RuntimeTargetTypes can be accessed in code as a field of `AccessDomain`, in module `regardsoss/domain`
* Query target expresses a list of entities as a query. This is required when user works in select all mode within results table. Indeed, as REGARDS catalog may contain large amount of entities, it is not possible in such case to express selection as an entity IDs array, as that would require to fetch all those entities from backend.

The following sub section explains in detail what fields are provided along with each target type.

### Common runtime target fields

Any target, no matter its type, has the following common fields:
* `type`: *{string}* The target type, one of the RuntimeTargetTypes enumerated before
* `entitiesCount`: *{number}* The count of entities in current target
* `getFetchAction`: *{function}* A method to build a redux fetch action in current target context. Such action can be used with Redux method `dispatch(getFetchAction(...args))`.  
*Warning: That method arguments depends on the target type, see later*
* `getReducePromise`: *{function}* A method to apply a treatment on each entity . The promise will resolve with the applier result (see MDN or lodash reduce methods documentation). It has the following signature:  
`(dispatchMethod: func, reducer: func, initValue: *, pageSize: number) => Promise.`  
Where:
  * `dispatchMethod`: *{function}* Redux dispatch method (used to fetch the data). That parameter makes getReducePromise a good candidate for partial applying during `mapDispatchToProps`
  * `reducer`: *{function}* with signature `(accumulator: *, entity: <entity content> ) => *`. The reducer returned value will be the value of accumulator in next reducer call
  * `initValue`: *{any}*. The initial reduction value (provided as accumulator at the first reducer call)
  * `pageSize`: *(optional){number}*. Size of the pages to fetch, when in QUERY mode (it is optional and will be ignored if provided to ONE and MANY)
  * The `Promise` returned is a standard Javascript promise (use then() method to get the reduction result and catch() to get any error that could happen during treatment)
  
### Runtime target specific fields for type ONE

* `entity`: *{string}* That field contains the internal ID of the entity for which service is currently running
* `getFetchAction`: *{function}* For target type ONE, the method signature is `() => (dipatchableAction:object)`. When dispatched, the action will retrieve the single entity instance

### Runtime target specific fields for type MANY

* `entities`: *{array(string)}* That field contains the internal ID of the entities for which service is currently running
* `getFetchAction`: *{function}* For target type MANY, the method signature is `(id:string) => (dipatchableAction:object)`. When dispatched, the action will retrieve the entity with ID as parameter.

### Runtime target specific fields for type QUERY

* `q`: *{string}* That field contains the open search query to retrieve elements
* `entityType`: *{string}* That field contains the current entity type, as one of the enumated values ENTITY_TYPES_ENUM, exported as a field of `DamDomain`, from `@regardsoss/domain`
* `excludedIDs`: *{array(string)}* That field contains the internal IDs of entities that are excluded from request results for current service execution, ie that should be ignored by the service when fetching results though fetch action.
* `getFetchAction`: *{function}* For target type QUERY, method signature is `(pageIndex: (optional) number, pageSize: (optional) number) => (dipatchableAction:object)`.  
 *Warning 1: Removing page index and page size when calling getFetchAction will result in fetching all elements at once. As there may be a lot, it is way better to fetch it over many pages. You can compute the total number of pages using `entitiesCount` common target field*  
 *Warning 2: Fetch actions will retrieve **every query element**. When using that result, it is required to verify in excludedIpIds array if the entity has been excluded by the user.*  

# Going further

The React container ExampleContainer, from *webapp/plugin/services/example*, in *rs-frontend* repository, illustrates using the plugin service configuration and target to show entities partitions. It uses `getReducePromise` to avoid handling manually the target types when fetching data, recovering it through actions, test react components... Reading that example code may be a good starting point from here.
