---
id: backend-order-overview
title: RS-ORDER microservice
sidebar_label: Overview
slug: /development/backend/services/order/overview/
---

The RS-ORDER microservice allows authenticated users to order files from the REGARDS catalog and download them.  
To do so, RS-ORDER provides these functionnalities:
 - an user basket - you can add a selection of catalog products to your cart and order them later
 - create order - you can transform your user basket selection into an order
 - retrieve order status - the order may be running or even wait for user to download a subset of the order (SubOrders)
 - download ordered files
 - process ordered files - your ordered files can be reprocessed before you download them

:::info Max order size 
There is no limit on the number of files or even on the size of the files users can order.  
Nevertheless, if the order is too big, it will be devided in many groups of files we name **SubOrders**.  
In that case, user has to retrieve available files from the finished SubOrder, before the next one can be processed by the system.
:::

### API Guides

 - [Order life cycle](api-guides/order-lifecycle.md) allows you to understand how an order will progress over time.
 - Create Order [using REST API](api-guides/rest-create-order.md) or [using AMQP API](api-guides/amqp-create-order.md) shows you how to create a basket selection and create the order in a single request. **Recommended for interoperability since v1.12**
 - Get Order [status using REST API](api-guides/rest-get-order-status.md) or [progress threw AMQP API](api-guides/amqp-get-order-progress.md) shows you how to create a basket selection and create the order in a single request. **Recommended for interoperability since v1.12**
 - [Download ordered files using REST API](api-guides/rest-download-ordered-files.md)


### REST API
- The [RS-ORDER microservice REST API](order-api-swagger.mdx) auto generated using OpenAPI.  

 
### Contributors guides
 - more incomming...

 