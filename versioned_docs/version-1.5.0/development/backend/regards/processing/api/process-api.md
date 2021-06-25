---
id: backend-processing-process-api
title: REGARDS Processing Process API
sidebar_label: Process
slug: /development/backend/services/processing/api/process/
---

#### GET /process

Find all processes / plugin configurations.

##### Responses

| Code | Description      |
| ---- | ---------------- |
| 200  | default response |
| 500  | default response |

Sample 200 response body:

```json
[
  {
    "processId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    "processName": "string",
    "active": true,
    "processInfo": {
      "additionalProp1": {},
      "additionalProp2": {},
      "additionalProp3": {}
    },
    "params": [{}]
  }
]
```

#### GET /process/{processBusinessId}

Find a process / plugin configuration by its business UUID.

##### Parameters

| Name              | Located in | Description                                     | Required | Schema        |
| ----------------- | ---------- | ----------------------------------------------- | -------- | ------------- |
| processBusinessId | path       | The process / plugin configuration business ID. | Yes      | string (uuid) |

##### Responses

| Code | Description      |
| ---- | ---------------- |
| 200  | default response |
| 500  | default response |

Sample 200 response body:

```json
{
  "processId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
  "processName": "string",
  "active": true,
  "processInfo": {
    "additionalProp1": {},
    "additionalProp2": {},
    "additionalProp3": {}
  },
  "params": [{}]
}
```
