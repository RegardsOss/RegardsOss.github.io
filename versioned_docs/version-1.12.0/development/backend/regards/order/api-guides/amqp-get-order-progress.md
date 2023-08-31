---
id: backend-get-order-progress-amqp
title: Get Order progress AMQP
sidebar_label: Get Order progress AMQP
slug: /development/backend/services/order/guides/get-order-progress-amqp
---


### Exchange 

Exchange where Order requests responses are sent:  
`regards.broadcast.fr.cnes.regards.modules.order.amqp.output.OrderResponseDtoEvent`  
*To listen to Order requests responses, the REGARDS administrator must create for you a dedicated queue bound to this exchange and allow your RabbitMQ user to access to that queue.*

### AMQP Headers

Headers are the same for all kind of responses.

```json
{
  "app_id": "REGARDS",
  "timestamp" : 1681461977,
  "correlation_id": "xxx",
  "priority": 1,
  "delivery_mode" : 2,
  "content_encoding": "UTF-8",
  "content_type": "application/json",
  "headers": {
    "regards.tenant": "tenant"
  }
}
```

### Granted response

REGARDS will publish a request granted event on response exchange when request is validated.

```json
{
  "correlationId": "xxx",
  "orderId": 1,
  "status" : "GRANTED"
}
```


### SubOrder done response

REGARDS will publish SubOrder done events on response exchange. 

**If your order creates several SubOrders (when order contains many large files), you should react to `SUBORDER_DONE` event.**  

```json
{
  "status": "SUBORDER_DONE",
  "orderId": 1234,
  "correlationId": "xxx",
  "message": "A sub-order of user john@cnes.fr is finished and ready to download",
  "downloadLink": "<host>/api/v1/rs-order/user/orders/1234/download"
}
```

:::info
Use the [downloadLink value to perform a REST request](./download-ordered-files) to download all available files related to this order and allow next SubOrder to start.
:::

### Order done response

REGARDS will publish an order done event on response exchange.

**If your order always creates a single SubOrders, you should react to `DONE` event.**  

```json
{
    "status" : "DONE",
    "orderId": 1234,
    "correlationId": "xxx",
    "message": "Order of user john@cnes.fr is finished",
    "downloadLink": "<host>/api/v1/rs-order/user/orders/1234/download"
}
```

:::info
Use the [downloadLink value to perform a REST request](./download-ordered-files) to download all available files related to this order to complete the Order.
:::


### Invalid response

REGARDS will publish a request denied event on response exchange when request is not valid.

```json
{
    "status" : "DENIED",
    "correlationId": "xxx",
    "message" : "deny cause",
}
```

:::info How to handle it?
Look at your request, fix it and submit a new one.
:::

### Internal error response

After request has been granted by REGARDS, internal errors can occur. In such case, an error response will be published on response exchange.

This error response will be published if at least one file of the order has failed.

```json
{
    "status" : "FAILED",
    "orderId": 1,
    "correlationId": "xxx",
    "message": "Error cause",
}
```

:::info How to handle it?
Retry later with new order request or contact REGARDS administrators.
:::

