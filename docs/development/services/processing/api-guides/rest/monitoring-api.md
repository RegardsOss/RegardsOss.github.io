---
id: backend-processing-monitoring-api
title: REGARDS Processing Monitoring API
sidebar_label: Monitoring
sidebar_position: 2
slug: /development/backend/services/processing/api/monitoring/
---

## POST `/monitoring/executions`

List the executions present in the processing database, filtered by diverse criteria.

### Parameters

| Name              | Located in | Description                                              | Required | Schema                                   |
| ----------------- | ---------- | -------------------------------------------------------- | -------- | ---------------------------------------- |
| tenant            | query      | The tenant                                               | Yes      | string                                   |
| page              | query      | The page number                                          | No       | integer                                  |
| size              | query      | The page size                                            | No       | integer                                  |
| sort              | query      | Sorting criteria, for example `created,DESC`             | No       | string[]                                 |

### Request body

The request body is a `SearchExecutionEntityParameters` object. All its
filters are optional.

```json
{
  "processBusinessId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
  "userEmail": {
    "include": ["user@example.com"]
  },
  "creationDate": {
    "after": "2026-01-01T00:00:00Z",
    "before": "2026-12-31T23:59:59Z"
  },
  "status": {
    "include": ["RUNNING", "SUCCESS"]
  }
}
```


### Responses

| Code | Description      |
| ---- | ---------------- |
| 200  | default response |
| 500  | default response |

Sample 200 response body:

```json
{
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
  ],
  "content": [
    {
      "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      "executionCorrelationId": "string",
      "batchId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      "batchCorrelationId": "string",
      "expectedDuration": 0,
      "inputFiles": [{}],
      "steps": [{}],
      "tenant": "string",
      "userName": "string",
      "processBusinessId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      "created": "2020-12-31T00:00:00Z",
      "lastUpdated": "2020-12-31T00:00:00Z",
      "version": 0,
      "persisted": true,
      "processName": "string",
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
  ],
  "page": {
    "size": 0,
    "totalElements": 0,
    "totalPages": 0,
    "number": 0
  }
}
```
