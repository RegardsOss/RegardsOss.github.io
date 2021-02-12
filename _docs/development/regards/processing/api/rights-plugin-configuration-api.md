---
layout: classic-docs
title: REGARDS Processing Plugin API
---
{% include toc.md %}

## GET /processplugins/config

Allows to list existing plugin configurations corresponding to defined processes.

### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| processNameLike | query | A regexp matching the process names / plugin configuration labels to return | No | string |

### Responses

| Code | Description |
| ---- | ----------- |
| 200 | default response |
| 500 | default response |

Sample 200 response body:

```json
[
  {
    "pluginConfiguration": {
      "id": 0,
      "metaData": {
        "pluginClassName": "string",
        "interfaceNames": [
          "string"
        ],
        "author": "string",
        "pluginId": "string",
        "version": "string",
        "description": "string",
        "markdown": "string",
        "url": "string",
        "contact": "string",
        "owner": "string",
        "license": "string",
        "parameters": [
          {
            "name": "string",
            "keyLabel": "string",
            "label": "string",
            "description": "string",
            "markdown": "string",
            "parameterizedSubTypes": [
              "STRING"
            ],
            "type": "STRING",
            "pluginType": "string",
            "defaultValue": "string",
            "optional": true,
            "unconfigurable": true,
            "sensible": true
          }
        ]
      },
      "pluginId": "string",
      "label": "string",
      "businessId": "string",
      "version": "string",
      "priorityOrder": 0,
      "active": true,
      "parameters": [
        {
          "dynamic": true,
          "name": "string",
          "value": {},
          "type": "STRING"
        }
      ],
      "iconUrl": "string",
      "interfaceNames": [
        "string"
      ],
      "pluginClassName": "string",
      "identifiable": true
    },
    "rights": {
      "role": "string",
      "datasets": [
        {}
      ],
      "linkedToAllDatasets": true
    },
    "links": [
      {
        "rel": "string",
        "href": "string",
        "hreflang": "string",
        "media": "string",
        "title": "string",
        "type": "string",
        "deprecation": "string",
        "profile": "string",
        "name": "string"
      }
    ]
  }
]
```

Sample 500 response body:

```json
{
  "errorId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
  "message": "string",
  "time": "2020-12-31T00:00:00Z"
}
```

## POST /processplugins/config

Allows to create a new process / plugin configuration.

### Request

#### Parameters
Not applicable.

#### Body
Sample body:
```json
{
  "pluginConfiguration": {
    "id": 0,
    "metaData": {
      "pluginClassName": "string",
      "interfaceNames": [
        "string"
      ],
      "author": "string",
      "pluginId": "string",
      "version": "string",
      "description": "string",
      "markdown": "string",
      "url": "string",
      "contact": "string",
      "owner": "string",
      "license": "string",
      "parameters": [
        {
          "name": "string",
          "keyLabel": "string",
          "label": "string",
          "description": "string",
          "markdown": "string",
          "parameterizedSubTypes": [
            "STRING"
          ],
          "type": "STRING",
          "pluginType": "string",
          "defaultValue": "string",
          "optional": true,
          "sensitive": true,
          "unconfigurable": true,
          "sensible": true
        }
      ],
      "licence": "string"
    },
    "pluginId": "string",
    "label": "string",
    "businessId": "string",
    "version": "string",
    "priorityOrder": 0,
    "active": true,
    "parameters": [
      {
        "dynamic": true,
        "name": "string",
        "value": {},
        "type": "STRING"
      }
    ],
    "iconUrl": "string",
    "interfaceNames": [
      "string"
    ],
    "isActive": true,
    "pluginClassName": "string",
    "identifiable": true
  },
  "rights": {
    "role": "string",
    "datasets": [
      {}
    ],
    "linkedToAllDatasets": true
  }
}
```
### Responses

| Code | Description |
| ---- | ----------- |
| 200 | default response |
| 500 | default response |


Sample 200 response body:

```json
[
  {
    "pluginConfiguration": {
      "id": 0,
      "metaData": {
        "pluginClassName": "string",
        "interfaceNames": [
          "string"
        ],
        "author": "string",
        "pluginId": "string",
        "version": "string",
        "description": "string",
        "markdown": "string",
        "url": "string",
        "contact": "string",
        "owner": "string",
        "license": "string",
        "parameters": [
          {
            "name": "string",
            "keyLabel": "string",
            "label": "string",
            "description": "string",
            "markdown": "string",
            "parameterizedSubTypes": [
              "STRING"
            ],
            "type": "STRING",
            "pluginType": "string",
            "defaultValue": "string",
            "optional": true,
            "unconfigurable": true,
            "sensible": true
          }
        ]
      },
      "pluginId": "string",
      "label": "string",
      "businessId": "string",
      "version": "string",
      "priorityOrder": 0,
      "active": true,
      "parameters": [
        {
          "dynamic": true,
          "name": "string",
          "value": {},
          "type": "STRING"
        }
      ],
      "iconUrl": "string",
      "interfaceNames": [
        "string"
      ],
      "pluginClassName": "string",
      "identifiable": true
    },
    "rights": {
      "role": "string",
      "datasets": [
        {}
      ],
      "linkedToAllDatasets": true
    },
    "links": [
      {
        "rel": "string",
        "href": "string",
        "hreflang": "string",
        "media": "string",
        "title": "string",
        "type": "string",
        "deprecation": "string",
        "profile": "string",
        "name": "string"
      }
    ]
  }
]
```

Sample 500 response body:

```json
{
  "errorId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
  "message": "string",
  "time": "2020-12-31T00:00:00Z"
}
```

## GET /processplugins/config/{processBusinessId}

Access to a process / plugin configuration from its business UUID.

### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| processBusinessId | path | The plugin business ID | Yes | string (uuid) |

### Responses

| Code | Description |
| ---- | ----------- |
| 200 | default response |
| 500 | default response |


Sample 200 response body:

```json
[
  {
    "pluginConfiguration": {
      "id": 0,
      "metaData": {
        "pluginClassName": "string",
        "interfaceNames": [
          "string"
        ],
        "author": "string",
        "pluginId": "string",
        "version": "string",
        "description": "string",
        "markdown": "string",
        "url": "string",
        "contact": "string",
        "owner": "string",
        "license": "string",
        "parameters": [
          {
            "name": "string",
            "keyLabel": "string",
            "label": "string",
            "description": "string",
            "markdown": "string",
            "parameterizedSubTypes": [
              "STRING"
            ],
            "type": "STRING",
            "pluginType": "string",
            "defaultValue": "string",
            "optional": true,
            "unconfigurable": true,
            "sensible": true
          }
        ]
      },
      "pluginId": "string",
      "label": "string",
      "businessId": "string",
      "version": "string",
      "priorityOrder": 0,
      "active": true,
      "parameters": [
        {
          "dynamic": true,
          "name": "string",
          "value": {},
          "type": "STRING"
        }
      ],
      "iconUrl": "string",
      "interfaceNames": [
        "string"
      ],
      "pluginClassName": "string",
      "identifiable": true
    },
    "rights": {
      "role": "string",
      "datasets": [
        {}
      ],
      "linkedToAllDatasets": true
    },
    "links": [
      {
        "rel": "string",
        "href": "string",
        "hreflang": "string",
        "media": "string",
        "title": "string",
        "type": "string",
        "deprecation": "string",
        "profile": "string",
        "name": "string"
      }
    ]
  }
]
```

Sample 500 response body:

```json
{
  "errorId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
  "message": "string",
  "time": "2020-12-31T00:00:00Z"
}
```

## PUT /processplugins/config/{processBusinessId}

Update a process / plugin configuration for the given business ID.

### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| processBusinessId | path | The process / plugin configuration business ID | Yes | string (uuid) |

### Responses

| Code | Description |
| ---- | ----------- |
| 200 | default response |
| 500 | default response |

Sample 200 response body:

```json
[
  {
    "pluginConfiguration": {
      "id": 0,
      "metaData": {
        "pluginClassName": "string",
        "interfaceNames": [
          "string"
        ],
        "author": "string",
        "pluginId": "string",
        "version": "string",
        "description": "string",
        "markdown": "string",
        "url": "string",
        "contact": "string",
        "owner": "string",
        "license": "string",
        "parameters": [
          {
            "name": "string",
            "keyLabel": "string",
            "label": "string",
            "description": "string",
            "markdown": "string",
            "parameterizedSubTypes": [
              "STRING"
            ],
            "type": "STRING",
            "pluginType": "string",
            "defaultValue": "string",
            "optional": true,
            "unconfigurable": true,
            "sensible": true
          }
        ]
      },
      "pluginId": "string",
      "label": "string",
      "businessId": "string",
      "version": "string",
      "priorityOrder": 0,
      "active": true,
      "parameters": [
        {
          "dynamic": true,
          "name": "string",
          "value": {},
          "type": "STRING"
        }
      ],
      "iconUrl": "string",
      "interfaceNames": [
        "string"
      ],
      "pluginClassName": "string",
      "identifiable": true
    },
    "rights": {
      "role": "string",
      "datasets": [
        {}
      ],
      "linkedToAllDatasets": true
    },
    "links": [
      {
        "rel": "string",
        "href": "string",
        "hreflang": "string",
        "media": "string",
        "title": "string",
        "type": "string",
        "deprecation": "string",
        "profile": "string",
        "name": "string"
      }
    ]
  }
]
```

Sample 500 response body:

```json
{
  "errorId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
  "message": "string",
  "time": "2020-12-31T00:00:00Z"
}
```

## DELETE /processplugins/config/{processBusinessId}

Delete a process / plugin configuration given from its business ID.

### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| processBusinessId | path | The process / plugin configuration business ID | Yes | string (uuid) |

### Responses

| Code | Description |
| ---- | ----------- |
| 200 | default response |
| 500 | default response |


Sample 200 response body:

```json
```

Sample 500 response body:

```json
{
  "errorId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
  "message": "string",
  "time": "2020-12-31T00:00:00Z"
}
```

## PUT /processplugins/config/{processBusinessId}?userRole={role}
### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| processBusinessId | path | The process / plugin configuration business ID | Yes | string (uuid) |
| userRole | query | The new minimal user role for this process / plugin configuration | Yes | string |

### Responses

| Code | Description |
| ---- | ----------- |
| 200 | default response |
| 500 | default response |

Sample 200 response body:

```json
```

Sample 500 response body:

```json
{
  "errorId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
  "message": "string",
  "time": "2020-12-31T00:00:00Z"
}
```

## POST /processplugins/fordatasets

List all the processes attached to the given datasets, grouped by dataset.

### Request

#### Body

The body is a list of dataset URNs.

Sample body:

```json
[
  "URN:DATASET:...",
  "URN:DATASET:..."
]
```

### Responses

| Code | Description |
| ---- | ----------- |
| 200 | default response |
| 500 | default response |

Sample 200 response body: 

```json
{
  "URN:DATASET:...": [
    {
      "processBusinessId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      "label": "string"
    }
  ]
}
```

Sample 500 response body:

```json
{
  "errorId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
  "message": "string",
  "time": "2020-12-31T00:00:00Z"
}
```

## GET /processplugins/linkprocessdataset/{datasetIpId}

Find processes attached to the given dataset.

### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| datasetIpId | path | The dataset identifier (URN) | Yes | string |

### Responses

| Code | Description |
| ---- | ----------- |
| 200 | default response |
| 500 | default response |

Sample 200 response body: 

```json
[
  {
    "processBusinessId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    "label": "string"
  }
]
```

Sample 500 response body:

```json
{
  "errorId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
  "message": "string",
  "time": "2020-12-31T00:00:00Z"
}
```

## PUT /processplugins/linkprocessdataset/{datasetIpId}

Attach the given dataset (as a URL path param) to all the given processes 
(as a list of process business IDs in the request body).

### Request

#### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| datasetIpId | path | The dataset ID (URN) | Yes | string |

#### Body

Sample body:

```json
[
  "87f0f7c2-5d89-4b37-bf02-6439f927ceca",
  "b51e4aef-447f-43c5-ae35-2b9de55bfa89"
]
```

### Responses

| Code | Description |
| ---- | ----------- |
| 200 | default response |
| 500 | default response |

Sample 200 response body: 

```json
```

Sample 500 response body:

```json
{
  "errorId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
  "message": "string",
  "time": "2020-12-31T00:00:00Z"
}
```

## GET /processplugins/metadata

Get the list of process plugins found on the classpath.

### Responses

| Code | Description |
| ---- | ----------- |
| 200 | default response |
| 500 | default response |

Sample 200 response body:

```json
[
  {
    "pluginClassName": "string",
    "interfaceNames": [
      "string"
    ],
    "author": "string",
    "pluginId": "string",
    "version": "string",
    "description": "string",
    "markdown": "string",
    "url": "string",
    "contact": "string",
    "owner": "string",
    "license": "string",
    "parameters": [
      {
        "name": "string",
        "keyLabel": "string",
        "label": "string",
        "description": "string",
        "markdown": "string",
        "parameterizedSubTypes": [
          "STRING"
        ],
        "type": "STRING",
        "pluginType": "string",
        "defaultValue": "string",
        "optional": true,
        "unconfigurable": true,
        "sensible": true
      }
    ]
  }
]
```

Sample 500 response body:

```json
{
  "errorId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
  "message": "string",
  "time": "2020-12-31T00:00:00Z"
}
```