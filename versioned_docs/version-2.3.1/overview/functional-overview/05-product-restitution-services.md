---
title: Product Restitution services
sidebar_label: Product Restitution services
slug: /development/functional-overview/microservices-restitution/
---


Products restitution Services are a set of **facultative REGARDS services** that allows user to retrieve files associated to products from the metacatalog.

In REGARDS, there are two types of storage. Hot storage, for direct downloading of data. Cold storage, which allows data to be downloaded only after it has been made available.

:::info Cold storages files
Restitution services are mandatory for products with files stored on **Cold storages**. This kind of storage implies
that all the data are not available for download at any time. Users need to request files for availability first.
:::

To allow users to download products from both storage types, you need to use the downloader microservice : 
- [rs-donwloader](../../development/services/downloader/overview.md) : Manage products files downloads.

To allow users to request the return of files stored on a cold storage space, you need to ise the order microservice :
- [rs-order](../../development/services/order/overview.md) : Manage users products orders.

Finally, there are two **optional** services :
- [rs-delivery](../../development/services/delivery/delivery-overview.md) : Enables users who have placed product orders via the order service to retrieve order totals from an S3 server.
- [rs-processing](../../development/services/processing/overview.md) : Enables users to request light processing of data ordered via the order service.

The following schema explains the interactions between microservices to handle products restitution.

In this diagram, steps 1 to 6 correspond to the issue of the command, and from step 7 onwards, two scenarios are possible:
 - Scenario A: The user downloads the order files one by one via REGARDS.
 - Scenario B: The user downloads the result of his order to an S3 server.

![](img/order_workflow.png)