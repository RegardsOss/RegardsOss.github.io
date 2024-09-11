---
id: backend-order-overview
title: Overview
sidebar_label: Overview
sidebar_position: 1
slug: /development/backend/services/order/overview/
---

The RS-ORDER microservice is the main service of
the [set of Restitution Services (Functional overview)](../../../overview/functional-overview/05-product-restitution-services.md).

The RS-ORDER microservice allows authenticated users to order files from the REGARDS catalog and download them.  
To do so, RS-ORDER provides these functionalities:

- an user basket - you can add a selection of catalog products to your cart and order them later
- create order - you can transform your user basket selection into an order
- retrieve order status - the order may be running or even wait for user to download a subset of the order (SubOrders)
- download ordered files
- process ordered files - your ordered files can be reprocessed before you download them

:::info Max order size
There is no limit on the number of files or even on the size of the files users can order.  
Nevertheless, if the order is too big, it will be devided in many groups of files we name **SubOrders**.  
In that case, user has to retrieve available files from the finished SubOrder, before the next one can be processed by
the system.
:::

| Concept                                                                           | Compatibility | Description                                         |
|-----------------------------------------------------------------------------------|---------------|-----------------------------------------------------|
| [Multitenant](../../concepts/03-multitenant.md)                                   | Yes           | Can handle multiple tenants/projects                | 
| [Vertical scalability](../../concepts/07-scalability.md#vertical-scalability)     | Yes           | Uses Jobs system                                    | 
| [Horizontal scalability](../../concepts/07-scalability.md#horizontal-scalability) | No            | Service can not be deployed with multiple instances |

You can learn how the service works with the [How it works section](conception.md).

## How to use

You can learn how to **operate** with the microservice thanks to **API Guides** :

- Create Order [using REST API](api-guides/rest/rest-create-order.md)
  or [using AMQP API](api-guides/amqp/amqp-create-order.md) shows you how to create a basket selection and create the
  order in a single request. **Recommended for interoperability since v1.12**
- Get Order [status using REST API](api-guides/rest/rest-get-order-status.md)
  or [progress threw AMQP API](api-guides/amqp/amqp-get-order-progress.md) shows you how to create a basket selection
  and create the order in a single request. **Recommended for interoperability since v1.12**
- [Download ordered files using REST API](api-guides/rest/rest-download-ordered-files.md)
- **Browse** all [REST API available endpoints](api-guides/rest/order-api-swagger.mdx).

## How to configure

To learn how the microservice is configured with **static parameters from properties files**
see [Configuration section](./configuration/configurations.md).

To understand the **configuration of specific tenant** (aka project)
see [Import/export configuration section](./configuration/import-export.md).

## How to access through UI

You can follow the **User manuel** to learn about the administrator UI related functionalities :

- [Manage orders](../../../user-documentation/8-order-data/manage-orders.md)
- [Monitor orders](../../../user-documentation/8-order-data/monitor-orders.md)
- [Settings](../../../user-documentation/8-order-data/settings-orders.md)

## How to access source code

Microservice source code is available on [GitHub](https://github.com/RegardsOss/regards-backend/tree/master/rs-order).

 