---
layout: classic-docs
title: Plugins
short-title: Plugins
categories:
  - frontend
---

## Description

This document aims at helping the developper to create a plugin service, that can be used in regards results. Before, reading any further, make sure to read the plugins page, as 
following sections are appliable to the plugin service:
* Code structure
* Entry point
* Main react component (except for provided parameters and criteria research, that doesn't fit the purpose of a service plugin)

## Definition

A plugin service (front-end) is a javascript module that can perform operations on one or many entities - the developper specifies it, see plugin-info.json section.
It can receive static parameters (configured by the administrator) and dynamic parameters (configured just before the service launches, by the user)
By design, a service that run with many entities can either receive entities or a query (see later provided parameters sections)

## plugin-info.json

It is very similar to a common plugin. However the plugin type always indicates "SERVICE".
Furthermore, in configuration field `conf`, `attributes` field is removed and the following fields are added:
* applicationMode: an array that can contain one or both the following values:
  * "ONE": the plugin is able to run for one entity
  * "MANY": the plugin is able to run for many entities or a query
* static: a list of parameters for project administrator(*): Those parameters will be requested to the project administrator when he configures a plugin service for results
* dynamic: a list of parameters for project user(**): Those parameters will be requested to the project user just before launching the plugin service


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
  * `"type"` : A string value, one of ["bool","char","date","float", "int", "string"]. It determinates the type that will be actually received at runtime by the plugin (see later provided parameters section)
  * `"required"`: A boolean (true or false). It means, when true, that the project administrator must fill the attribute value. When false, the administrator can leave blank abd therefore, it can be undefined at plugin runtime
* (**) **User parameter**: The key, in static object, is the parameter name. The object must have the following fields:
  * `"type"` : like administator parameter
  * `"required"`: like administator parameter, however this time, it indicates if the user, and not the administrator, will be obliged to fill it. Please note that the administator may have entered a default value too
  * `"label"`: a string that will be shown to user when he configures the plugin, just before launching it


## Main React component 

It mostly works just like a common plugin. However, provided parameters - plugin configuration and target - are not the same

### Provided parameters

The here under properties are provided at runtime by the plugin service loader :
```js
propTypes = {
    /** Similar to a common plugin */
    pluginInstanceId: React.PropTypes.string,
    /** The runtime target, see section below */
    runtimeTarget: AccessShapes.RuntimeTarget.isRequired,
    /** The plugin configuration, containing parameters, see section below */
    configuration: AccessShapes.RuntimeConfiguration.isRequired,
  }
```

#### Provided runtime configuration

The runtime configuration is an object with fields:
* `static`: *{object}* This field contains administator parameters value. The key is *parameter name* and the value is the administrator filled value, with the type specified in package-info. Every parameter that was marked as `required` is granted here to be defined (never null nor undefined). Other ones should checked before using their values.
* `dynamic`: *{object}* This field contains user parameters value. It works exactly the same than static field. 

#### Provided runtime target

When launched, the service plugin main component receives the property `runtimeTarget`.
That object represents the plugin target: it can be either a: 
* `One entity target` (enumerated type: RuntimeTargetTypes.ONE), if the service application mode contains "ONE"
* `Many entities target` (enumerated type: RuntimeTargetTypes.MANY), if the service application mode contains "MANY"
* `Query target` (enumerated type: RuntimeTargetTypes.QUERY), if the service application mode contains "MANY"

note: RuntimeTargetTypes is exported as a field of AccessDomain, in regardsoss/domain

All the targets, no matter their type, share the following common attributes:
* `type`: *{string}* The target type, on of the RuntimeTargetTypes enumerated before
* `entitiesCount`: *{number}* the count of entities in current target
* `getFetchAction`: A method to build a redux fetch action. Such action can be used with Redux method dispatch(getFetchAction(...args)).
*Warning*: That method arguments depends on the target type, see later
* `getReducePromise`: *{function}* to apply a treatment on each entity . The promise will resolve with the applier result (see MDN or lodash reduce methods documentation). It has the following signature:  
`(dispatchMethod: func, reducer: func, initValue: *, pageSize: number) => Promise.`  
Where:
  * `dispatchMethod`: *{function}* redux dispatch method (used to fetch the data). That parameter makes getReducePromise a good candidate for partial applying during `mapDispatchToProps`
  * `reducer`: *{function}* with signature : `(accumulator: *, entity: <entity content> ) => *`. The reducer returned value will be the value of accumulator in next reducer call
  * `initValue`: *{any}*. The initial reduction value (provided as accumulator at the first reducer call)
  * `pageSize`: *(optional){number}*. Size of the pages to fetch, when in QUERY mode (it is optional and will be ignored if provided to ONE and MANY)
  
##### Runtime target specific fields for type ONE

  * `entity`: *{string}* that field contains entity IP ID
  * `getFetchAction`: *{function}* For target type ONE, method signature is `() => (dipatchableAction:object)`

##### Runtime target specific fields for type MANY

  *  `entities`: *{array<string>}* that field contains entities IP ID, as an array of string
  * `getFetchAction`: *{function}* for target type MANY, method signature is `(ipID:string) => (dipatchableAction:object)`

##### Runtime target specific fields for type QUERY

 * `q`: *{string}* that field contains the open search query to retrieve elements
 * `entityType`: *{string}* that field contains the current entity type, as one of the enumated values ENTITY_TYPES_ENUM, exported as a field for DamDomain, from @regardsoss/domain
 * `getFetchAction`: *{function}* for target type MANY, method signature is `(pageIndex: (optional) number, (optional) pageSize:number) => (dipatchableAction:object)`.  
 **Warning**: Removing page index and page size will result in fetching all elements at once. As there may be a lot, it is probably way better to fetch it in many pages. You can compute the total number of pages using `entitiesCount` common target field

