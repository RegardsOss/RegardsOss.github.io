---
layout: classic-docs
title: REGARDS Processing Batch API
---
{% include toc.md %}

## POST /batch

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

### Responses

| Code | Description |
| ---- | ----------- |
| 200 | default response |
| 500 | default response |

Sample 200 response body:

```json
{
  "batchId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
  "correlationId": "string"
}
```