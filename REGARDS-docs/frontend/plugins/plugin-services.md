---
layout: classic-docs
title: Plugin services
short-title: Services
---

## Description

This document aims at helping the developper to create a plugin service, that can be used in regards results. Before, reading any further, make sure to read the plugins page ([Common plugins description](/frontend/plugins/plugins/)), as 
following sections are appliable to the plugin service:
* Code structure
* Entry point
* Main react component, although it holds differences on properties
* Plugin compilation

## Definition

A plugin service (front-end) is a javascript module that can perform operations on one or many entities - the developper specifies it, see plugin-info.json section.
It can receive static parameters (configured by the administrator) and dynamic parameters (configured just before the service launches, by the user)
By design, a service that run with many entities can either receive entities or a query (see later provided parameters sections)

## plugin-info.json

It is very similar to a common plugin. However the plugin type always indicates "SERVICE".
Furthermore, in configuration field `conf`, `attributes` field is removed and the following fields are added:
* `applicationMode`: an array that can contain one or both the following values:
  * *"ONE"*: the plugin is able to run for one entity
  * *"MANY"*: the plugin is able to run for many entities or a query
* `static`: a list of parameters for project administrator(*): Those parameters will be requested to the project administrator when he configures a plugin service for results
* `dynamic`: a list of parameters for project user(**): Those parameters will be requested to the project user just before launching the plugin service


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
    "applicationMode": "<%= application mode %>",
    "static": {
      "adminParameter1": "<%= administator parameter %>",
      "adminParameter2": "<%= administator parameter %>",
    },
    "dynamic": {
      "userParameter1": "<%= user parameter %>",
      "userParameter2": "<%= user parameter %>",
    }
  }
}

```
* (*) **Administrator parameter**: The key, in static object, is the parameter name. It will also be used as label in configuration form. The object must have the following fields:
  * `"type"` : *{string}* One of ["bool","char","date","float", "int", "string"]. It determinates the type that will be actually received at runtime by the plugin (see later provided parameters section)
  * `"required"`: *{boolean}* It means, when true, that the project administrator must fill the attribute value. When false, the administrator can leave it blank and, therefore, it can be undefined at plugin runtime
* (**) **User parameter**: The key, in dynamic object, is the parameter name. The object must have the following fields:
  * `"type"` : *{string}* like administator parameter
  * `"required"`: *{boolean}* like administator parameter, however this time, it indicates if the user, and not the administrator, will be obliged to fill it. Please note that the administator may have entered a default value too
  * `"label"`: *{string}* Parameter label, that will be shown to user when he configures the plugin, just before launching it


## Main React component 

It mostly works just like a common plugin. However, provided parameters - plugin configuration and target - are not the same

### Provided parameters

The here under properties are provided at runtime to the plugin service main component:
```js
propTypes = {
    /** Similar to a common plugin */
    pluginInstanceId: React.PropTypes.string,
    /** The runtime target, see section below */
    runtimeTarget: AccessShapes.RuntimeTarget.isRequired,
    /** The plugin configuration, containing admin and user parameters, see section below */
    configuration: AccessShapes.RuntimeConfiguration.isRequired,
  }
```

#### Provided runtime configuration

When launched, the service plugin main component receives the property `configuration`. That object reprensents the runtime configuration.
It has the following fields.
* `static`: *{object}* This field contains administator parameters value. The keys are *parameter names* and the values are those the administrator entered, with the type specified in package-info. Every parameter that was marked as `required` is granted here to be defined (never null nor undefined). Other ones should be checked before being used.
* `dynamic`: *{object}* This field contains user parameters value. It works exactly the same than static field. 

#### Provided runtime target

When launched, the service plugin main component receives the property `runtimeTarget`.
That object represents the plugin target. it can be of either types: 
* `One entity target` (enumerated type: RuntimeTargetTypes.ONE), if the service application mode contains "ONE"
* `Many entities target` (enumerated type: RuntimeTargetTypes.MANY), if the service application mode contains "MANY"
* `Query target` (enumerated type: RuntimeTargetTypes.QUERY), if the service application mode contains "MANY"

note: RuntimeTargetTypes is exported as a field of `AccessDomain`, in module `regardsoss/domain`

#### Common runtime target fields

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
  
##### Runtime target specific fields for type ONE

* `entity`: *{string}* That field contains entity IP ID
* `getFetchAction`: *{function}* For target type ONE, the method signature is `() => (dipatchableAction:object)`. When dispatched, the action will retrieve the single entity instance

##### Runtime target specific fields for type MANY

* `entities`: *{array(string)}* That field contains entities IP ID, as an array of string
* `getFetchAction`: *{function}* For target type MANY, the method signature is `(ipID:string) => (dipatchableAction:object)`. When dispatched, the action will retrieve the entity with IP IDas parameter.

##### Runtime target specific fields for type QUERY

* `q`: *{string}* That field contains the open search query to retrieve elements
* `entityType`: *{string}* That field contains the current entity type, as one of the enumated values ENTITY_TYPES_ENUM, exported as a field of `DamDomain`, from `@regardsoss/domain`
* `excludedIpIds`: *{array(string)}* That field contains the IP IDs of elements that user de-selected in query
* `getFetchAction`: *{function}* For target type QUERY, method signature is `(pageIndex: (optional) number, pageSize: (optional) number) => (dipatchableAction:object)`.  
 *Warning 1: Removing page index and page size will result in fetching all elements at once. As there may be a lot, it is probably way better to fetch it in many pages. You can compute the total number of pages using `entitiesCount` common target field*  
 *Warning 2: Fetch actions will retrieve **every query element**. When using that result, it is required to verify in excludedIpIds array if the entity has been excluded by the user.*  
 *Warning 3: There is a current limitation on the number of entities that can be fetched. So far it is blocked at 10 000 entities.*

## Going further

The React container ExampleContainer, from *webapp/plugin/services/example*, in *rs-frontend* repository illustrates using the plugin service configuration and target to show entities partitions. It uses `getReducePromise` to avoid handling manually the target types when fetching data, recovering data through actions, test react components... Reading that example code may be a good starting point from here.