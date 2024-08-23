---
id: backend-delivery-static-configuration
title: Delivery static configuration
sidebar_label: Static configuration
slug: /development/backend/services/delivery/configuration/static-configuration
---

Static configuration is the microservice configuration set before microservice startup in a property file.
This configuration is common to all tenant.

Static configuration for `Delivery` service is : 

| Name                                            | Type    | Default Value | Description                                                                           |
| ----------------------------------------------- | ------- | ------------- | ------------------------------------------------------------------------------------- |
| regards.delivery.request.finished.bulk.size     | integer | `100`         | Max ended delivery requested in request deletion scheduler                            |
| regards.delivery.available.files.bulk.size      | integer | `100`         | Page size (in database) of the getting available files request                        |
| regards.delivery.request.bulk.size              | integer | `1000`        | Max bulk size of input delivery request handler                                       |
| regards.delivery.request.expired.jobs.bulk.size | integer | `100`         | Max number of jobs to stop at once if several delivery request have timeout (expired) |
| regards.delivery.request.expired.bulk.size      | integer | `100`         | Max number of expired requests to stop at once                                        |


:::info
Some of these properties are customizable in ansible inventory. [see installation guide](/docs/next/setup/swarm/advanced/optimizations#dataprovider-optimization) FIXME TODO link

To make missing properties customizable, you have to update regards ansible playbook : the regards-mconfig role.
:::