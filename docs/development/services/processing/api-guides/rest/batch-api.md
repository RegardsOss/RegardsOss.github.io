---
id: backend-processing-batch-api
title: REGARDS Processing Batch API
sidebar_label: Batch
sidebar_position: 1
slug: /development/backend/services/processing/api/batch/
---

## POST `/batch`

Attempt to create a batch for future executions

### Request

Sample request body:

```json
{
  "correlationId": "string",
  "processBusinessId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
  "tenant": "string",
  "user": "string",
  "userRole": "string",
  "parameters": {
    "additionalProp1": {},
    "additionalProp2": {},
    "additionalProp3": {}
  },
  "filesetsByDataset": {
    "additionalProp1": {},
    "additionalProp2": {},
    "additionalProp3": {}
  }
}
```

`tenant`, `user` and `userRole` are retained in the request DTO for the service contract, but the REST controller 
builds the effective user authorization from the current tenant, authenticated user and authenticated role.

### Responses

| Code | Description      |
| ---- | ---------------- |
| 200  | default response |
| 500  | default response |

Sample 200 response body:

```json
{
  "batchId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
  "correlationId": "string"
}
```
