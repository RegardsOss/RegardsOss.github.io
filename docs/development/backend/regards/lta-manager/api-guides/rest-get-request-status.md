---
id: backend-rest-request-status
title: Get request status REST
sidebar_label: Get request status REST
slug: /development/backend/services/lta-manager/guides/get-request-status-rest
---

*This page assumes you know how to [authenticate](/docs/development/backend/services/authentication/api-guides/retrieve-token-rest/) your REST API requests *

### Request 

| description | url | verb |
| ----------- | --- | ---- |
| Product creation request info | `<HOST>`/api/v1/rs-lta-manager/products/{correlationId}/info | GET |

`Request headers`
```json
{
  "Content-Type": "application/json",
  "Authorization": "Bearer <token>"
}
```

### Response

| Http status | description |
| ----------- | ------------ |
| 200         | Your request is successfully created |
| 403         | Access denied |

```json
{
  "content": {
    "correlationId": "string",
    "productId": "string",
    "status": "DONE",
    "statusDate": "2022-12-22T10:25:52.243Z",
    "session": "string",
    "message": "string"
  },
  "links": [
  ]
}
```

| Parameter | Type | Optional | Description |
| --------- | ---- | :--------: | ----------- |
| correlationId | String | No | Request identifier |
| productId | String | No | Id of the product to create |
| status | String | No | Status of the request. More details below.|
| expires | String Date ISO 8601| No |  Request expiration date. Format yyyy-MM-dd'T'HH:mm:ss.SSSZ |
| session | String | No | Request session name |
| message | String | Yes | Information message about your request |

 `status` : can be :
  - `VALIDATED` : Your request is valid and will be processed soon.
  - `GENERATION_PENDING` : Your request is processing.
  - `GENERATED`: Your request is processing.
  - `INGESTION_PENDING`: Your request is processing.
  - `DONE`: Your request is successfully done.
  - `GENERATION_ERROR` : Your request is terminated in error during OAIS product generation.
  - `INGESTION_ERROR` : Your request is terminated in error during OAIS product ingestion.
