---
title: Static Configuration
sidebar_label: Static configuration
slug: /development/backend/services/order/configuration/static-configuration
sidebar_position: 2
---

Static configuration is the microservice configuration set before microservice startup in a property file.
This configuration is common to all tenant.

Static configuration for `Order` service is :

| Name                                                 | Type    | Default Value                                 | Description                                                                                                                                 |
| ---------------------------------------------------- | ------- | --------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| regards.order.secret                                 | string  |                                               | use to generate auth token to use on order endpoints                                                                                                 |
| regards.order.max.storage.files.jobs.per.user        | integer | 2                                             | Max number of concurrent storage files retrieval jobs per user                                                                              |
| regards.order.client.response.batch.size             | integer | 1000                                          | Max bulk size of AutoOrderEvent managed in a row                                                                                            |
| regards.order.cancel.request.bulk.size               | integer | 1000                                          | Max bulk size of OrderCancelEvent managed in a row                                                                                          |
| regards.order.request.bulk.size                      | integer | 1000                                          | Max bulk size of OrderRequestEvent managed in a row                                                                                         |
| regards.order.batch.size                             | integer | 10000                                         | Page size of the search request generated (destinated to rs-catalog)                                                                        |
| regards.order.basket.upload.file.max.lines           | integer | 1000                                          | Max number of provider ids of uploaded file (see [basket upload file api](../api-guides/rest/fill-basket-from-file.md))                     |
| regards.order.files.bucket.size.Mb                   | integer | 100                                           | Max size of files to retreive in a single storage job (single suborder)                                                                     |
| regards.order.clean.expired.rate.ms                  | integer | 3600000   (1h)                                | Frequency of check order expiration.                                                                                                        |
| regards.order.computation.update.rate.ms             | integer | 1000 (1s)                                     | Scheduled method frequency to update all current running orders completions values and all order available files count values into database |
| regards.order.periodic.files.availability.check.cron | cron    | 0 0 7 * * MON-FRI (every working day at 7 am) | Frequency of sending email to users, for remind that some orders are waiting for him                                                        |


:::info
Some of these properties are customizable in ansible
inventory. [see installation guide](../../../../setup/swarm/advanced/swarm-optimizations.md#dataprovider-optimization).
link

To make missing properties customizable, you have to update regards ansible playbook : the regards-mconfig role.
:::