---
title: Static configuration
sidebar_label: Static configuration
sidebar_position: 2
slug: /development/backend/services/fem/configuration/static-configuration
---

Static configuration is the microservice configuration set before microservice starts in a property file.
This configuration is common to all tenants.

Static configuration for `Feature manager` service contains the following parameters:

| Name                                                       | Type    | Default Value | Description                                                       |
|------------------------------------------------------------|---------|---------------|-------------------------------------------------------------------|
| regards.feature.update.dissemination.put.page.size         | integer | `500`         | Pagination size for handling PUT information requests             |
| regards.feature.update.dissemination.ack.page.size         | integer | `100`         | Pagination size for handling acknowledgement information requests |
| regards.feature.update.dissemination.max.requests.schedule | integer | `5000`        | Maximum number of requests to handle in one schedule task         |
| regards.feature.abort.page.size                            | integer | `1000`        | Pagination size for handling abort requests                       |
| regards.feature.abort.delay.hours                          | integer | `1`           | Minimum delay before aborting running request, in hours           |
| regards.feature.max.bulk.size                              | integer | `1000`        | Maximum number of requests to process at one time                 |
| regards.feature.batch.size                                 | integer | `1000`        | Batch message size                                                |
| regards.feature.batch.receive.timeout                      | long    | `1000`        | Batch message reception timeout in milliseconds                   |
| regards.feature.delay.before.processing                    | integer | `5`           | Minimum delay before processing request, in seconds               |
| regards.feature.metrics.enabled                            | bolean  | `false`       | If `true`, metrics are enabled for this service                   |
| regards.feature.dump.zip-limit                             | int     | `1000`        | Limit number of features to retrieve in one zip during the dump   |
| regards.feature.notify.notification.job.size               | int     | `1000`        | Pagination size for handling notification jobs                    |
| regards.feature.deletion.notification.job.size             | int     | `1000`        | Pagination size for handling deletion jobs                        |


:::info
Some of these properties are customizable in ansible inventory.
[see installation guide](../../../../../setup/swarm/advanced/optimizations#fem-optimization)

To make missing properties customizable, you have to update Regards ansible playbook : the regards-mconfig role.
:::