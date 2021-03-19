---
id: backend-processing-open-api
title: REGARDS Processing Open API
sidebar_label: Open
slug: /development/backend/processing/api/open/
---


# Launch process batches and monitor executions

## Version: 1.0.0

**License:**

### /processplugins/config

#### GET
##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| processNameLike | query |  | No | string |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | default response |
| 500 | default response |

#### POST
##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | default response |
| 500 | default response |

### /processplugins/config/{processBusinessId}

#### GET
##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| processBusinessId | path |  | Yes | string (uuid) |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | default response |
| 500 | default response |

#### PUT
##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| processBusinessId | path |  | Yes | string (uuid) |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | default response |
| 500 | default response |

#### DELETE
##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| processBusinessId | path |  | Yes | string (uuid) |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | default response |
| 500 | default response |

### /processplugins/config/{processBusinessId}/userRole

#### PUT
##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| processBusinessId | path |  | Yes | string (uuid) |
| userRole | query |  | Yes | string |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | default response |
| 500 | default response |

### /processplugins/fordatasets

#### POST
##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | default response |
| 500 | default response |

### /processplugins/linkprocessdataset/{datasetIpId}

#### GET
##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| datasetIpId | path |  | Yes | string |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | default response |
| 500 | default response |

#### PUT
##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| datasetIpId | path |  | Yes | string |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | default response |
| 500 | default response |

### /processplugins/metadata

#### GET
##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | default response |
| 500 | default response |

### /monitoring/executions

#### GET
##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| tenant | query |  | Yes | string |
| status | query |  | Yes | [ string ] |
| userEmail | query |  | No | string |
| processBusinessId | query |  | No | string |
| from | query |  | No | string |
| to | query |  | No | string |
| page | query |  | No | integer |
| size | query |  | No | integer |
| assembler | query |  | Yes | object |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | default response |
| 500 | default response |

### /batch

#### POST
##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | default response |
| 500 | default response |

### /process

#### GET
##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | default response |
| 500 | default response |

### /process/{processBusinessId}

#### GET
##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| processBusinessId | path |  | Yes | string (uuid) |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | default response |
| 500 | default response |

### Models

#### ErrorStructure

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| errorId | string (uuid) |  | No |
| message | string |  | No |
| time | dateTime | ISO formatted UTC date-time<br/>_Example:_ `"2020-12-31T00:00:00Z"` | No |

#### EntityModelProcessPluginConfigurationRightsDTO

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| pluginConfiguration | object |  | No |
| rights | object |  | No |
| links | [ object ] |  | No |

#### IPluginParam

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| dynamic | boolean |  | No |
| name | string |  | No |
| value | object |  | No |
| type | string | _Enum:_ `"STRING"`, `"BYTE"`, `"SHORT"`, `"INTEGER"`, `"LONG"`, `"FLOAT"`, `"DOUBLE"`, `"BOOLEAN"`, `"MAP"`, `"COLLECTION"`, `"POJO"`, `"PLUGIN"` | No |

#### Link

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| rel | string |  | No |
| href | string |  | No |
| hreflang | string |  | No |
| media | string |  | No |
| title | string |  | No |
| type | string |  | No |
| deprecation | string |  | No |
| profile | string |  | No |
| name | string |  | No |

#### PluginConfiguration

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| id | long |  | No |
| metaData | object |  | No |
| pluginId | string |  | No |
| label | string |  | Yes |
| businessId | string |  | No |
| version | string |  | No |
| priorityOrder | integer |  | Yes |
| active | boolean |  | No |
| parameters | [ object ] |  | No |
| iconUrl | string (url) |  | No |
| interfaceNames | [ string ] |  | No |
| isActive | boolean |  | No |
| pluginClassName | string |  | No |
| identifiable | boolean |  | No |

#### PluginMetaData

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| pluginClassName | string |  | No |
| interfaceNames | [ string ] |  | No |
| author | string |  | No |
| pluginId | string |  | No |
| version | string |  | No |
| description | string |  | No |
| markdown | string |  | No |
| url | string |  | No |
| contact | string |  | No |
| owner | string |  | No |
| license | string |  | No |
| parameters | [ object ] |  | No |
| licence | string |  | No |

#### PluginParamDescriptor

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| name | string |  | No |
| keyLabel | string |  | No |
| label | string |  | No |
| description | string |  | No |
| markdown | string |  | No |
| parameterizedSubTypes | [ string ] |  | No |
| type | string | _Enum:_ `"STRING"`, `"BYTE"`, `"SHORT"`, `"INTEGER"`, `"LONG"`, `"FLOAT"`, `"DOUBLE"`, `"BOOLEAN"`, `"MAP"`, `"COLLECTION"`, `"POJO"`, `"PLUGIN"` | No |
| pluginType | string |  | No |
| defaultValue | string |  | No |
| optional | boolean |  | No |
| sensitive | boolean |  | No |
| unconfigurable | boolean |  | No |
| sensible | boolean |  | No |

#### ProcessPluginConfigurationRightsDTO

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| pluginConfiguration | object |  | No |
| rights | object |  | No |

#### Rights

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| role | string |  | No |
| datasets | [ object ] |  | No |
| linkedToAllDatasets | boolean |  | No |

#### ProcessLabelDTO

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| processBusinessId | string (uuid) |  | No |
| label | string |  | No |

#### PagedResourcesAssemblerExecutionMonitoringDTO

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| forceFirstAndLastRels | boolean |  | No |

#### EntityModelExecutionMonitoringDTO

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| id | string (uuid) |  | No |
| executionCorrelationId | string |  | No |
| batchId | string (uuid) |  | No |
| batchCorrelationId | string |  | No |
| expectedDuration | number | Duration in nanoseconds | No |
| inputFiles | [ object ] |  | No |
| steps | [ object ] |  | No |
| tenant | string |  | No |
| userName | string |  | No |
| processBusinessId | string (uuid) |  | No |
| created | dateTime | ISO formatted UTC date-time<br/>_Example:_ `"2020-12-31T00:00:00Z"` | No |
| lastUpdated | dateTime | ISO formatted UTC date-time<br/>_Example:_ `"2020-12-31T00:00:00Z"` | No |
| version | integer |  | No |
| persisted | boolean |  | No |
| processName | string |  | No |
| links | [ object ] |  | No |

#### PageMetadata

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| size | long |  | No |
| totalElements | long |  | No |
| totalPages | long |  | No |
| number | long |  | No |

#### PagedModelEntityModelExecutionMonitoringDTO

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| links | [ object ] |  | No |
| content | [ object ] |  | No |
| page | object |  | No |

#### PBatchRequest

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| correlationId | string |  | No |
| processBusinessId | string (uuid) |  | No |
| tenant | string |  | No |
| user | string |  | No |
| userRole | string |  | No |
| parameters | object |  | No |
| filesetsByDataset | object |  | No |

#### PBatchResponse

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| batchId | string (uuid) |  | No |
| correlationId | string |  | No |

#### PProcessDTO

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| processId | string (uuid) |  | No |
| processName | string |  | No |
| active | boolean |  | No |
| processInfo | object |  | No |
| params | [ object ] |  | No |

#### GenericResponseBody

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| message | string |  | No |
| properties | object |  | No |

#### EntityModelMapStringMaintenanceInfo

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| links | [ object ] |  | No |

#### ModuleImportReport

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| moduleInformation | object |  | No |
| importErrors | [ string ] |  | No |
| onlyErrors | boolean |  | No |

#### ModuleInformation

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| id | string |  | Yes |
| name | string |  | Yes |
| description | string |  | No |
| version | string |  | Yes |
| author | string |  | Yes |
| legalOwner | string |  | No |
| documentation | string |  | No |

#### ModuleRestartReport

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| moduleInformation | object |  | No |
| messages | [ string ] |  | No |

#### ModuleReadinessReportObject

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| ready | boolean |  | No |
| reasons | [ string ] |  | No |
| specifications | object |  | No |

#### EntityModelPluginConfiguration

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| id | long |  | No |
| metaData | object |  | No |
| pluginId | string |  | No |
| label | string |  | No |
| businessId | string |  | No |
| version | string |  | No |
| priorityOrder | integer |  | No |
| active | boolean |  | No |
| parameters | [ object ] |  | No |
| iconUrl | string (url) |  | No |
| interfaceNames | [ string ] |  | No |
| isActive | boolean |  | No |
| pluginClassName | string |  | No |
| identifiable | boolean |  | No |
| links | [ object ] |  | No |

#### EntityModelPluginMetaData

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| pluginClassName | string |  | No |
| interfaceNames | [ string ] |  | No |
| author | string |  | No |
| pluginId | string |  | No |
| version | string |  | No |
| description | string |  | No |
| markdown | string |  | No |
| url | string |  | No |
| contact | string |  | No |
| owner | string |  | No |
| license | string |  | No |
| parameters | [ object ] |  | No |
| licence | string |  | No |
| links | [ object ] |  | No |

#### EntityModelString

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| content | string |  | No |
| links | [ object ] |  | No |

#### ResourceAccess

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| ResourceAccess | object |  |  |

#### ResourceMapping

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| resourceAccess | object |  | No |
| fullPath | string |  | No |
| controllerSimpleName | string |  | No |
| method | string | _Enum:_ `"GET"`, `"HEAD"`, `"POST"`, `"PUT"`, `"PATCH"`, `"DELETE"`, `"OPTIONS"`, `"TRACE"` | No |
| autorizedRoles | [ object ] |  | No |
| resourceMappingId | string |  | No |

#### RoleAuthority

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| authorizedIpAdresses | [ string ] |  | No |
| roleName | string |  | No |
| authority | string |  | No |
