---
id: backend-amqp-get-product-progress
title: Get product progress AMQP
sidebar_label: Get product progress AMQP
slug: /development/backend/services/lta-manager/guides/get-product-progress-amqp
---

### Exchange

Exchange where submission requests responses are sent:  
`regards.broadcast.fr.cnes.regards.modules.ltamanager.amqp.output.SubmissionResponseDtoEvent`  
*To listen to Submission requests responses, the REGARDS administrator must create for you a dedicated queue bound to this exchange and allow your RabbitMQ user to access to that queue.*

### AMQP Headers

Headers are the same for all kind of responses.

```json
{
  "app_id": "REGARDS",
  "timestamp": 1681461977,
  "correlation_id": "xxx",
  "priority": 1,
  "delivery_mode": 2,
  "content_encoding": "UTF-8",
  "content_type": "application/json",
  "headers": {
    "regards.tenant": "tenant"
  }
}
```

### Granted response

REGARDS will publish a granted notification on the response exchange when the request is validated.

```json
{
    "correlationId": "xxx",
    "productId": "xxx",
    "responseStatus": "GRANTED",
}
```

### Success response

REGARDS will publish a success notification on the response exchange when the request is terminated in success.

```json
{
    "correlationId": "xxx",
    "productId": "xxx",
    "responseStatus": "SUCCESS",
    "expires": "",
    "session": "xxx",
    "message": ""
}
```

### Invalid request responses

REGARDS will publish a denied notification on the response exchange when the request is not valid.

```json
{
    "correlationId": "xxx",
    "productId": "xxx",
    "responseStatus": "DENIED",
    "expires": "",
    "session": "xxx",
    "message": ""
}
```

A request can be invalid, if :
 - Request is not well formed
 - Provided datatype is unknown or not configured.

:::info How to handle it?
Look at your request, fix it and submit a new one.
:::

### Internal error responses

After request has been granted by REGARDS, internal errors may occur.  In such case, an error response will be published on the response exchange.

```json
{
    "correlationId": "xxx",
    "productId": "xxx",
    "responseStatus": "ERROR",
    "expires": "",
    "session": "xxx",
    "message": "Cause of the internal error"
}
```

:::info How to handle it?
Retry later with new request or contact REGARDS administrators.
:::
