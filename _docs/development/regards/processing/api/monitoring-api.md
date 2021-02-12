---
layout: classic-docs
title: REGARDS Processing Monitoring API
---
{% include toc.md %}

## GET /monitoring/executions

List the executions present in the processing database, filtered by diverse criteria.

### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| tenant | query | The tenant | Yes | string |
| status | query | The list of execution status | Yes | [ RUNNING, SUCCESS, FAILURE, TIMED_OUT ] |
| userEmail | query | The optional user who launched the executions | No | string |
| processBusinessId | query | The optional process business ID the executions refer to | No | string |
| from | query | The execution 'last updated' minimum timestamp | No | string |
| to | query | The execution 'last updated' maximum timestamp | No | string |
| page | query | The page number  | No | integer |
| size | query | The page size | No | integer |

### Responses

| Code | Description |
| ---- | ----------- |
| 200 | default response |
| 500 | default response |

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
      "inputFiles": [
        {}
      ],
      "steps": [
        {}
      ],
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