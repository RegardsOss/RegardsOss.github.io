---
id: backend-notifier-static-configuration
title: Notifier static configuration
sidebar_label: Static configuration
slug: /development/backend/services/notifier/configuration/static-configuration
---

Static configuration is the microservice configuration set before microservice startup in a property file.
This configuration is common to all tenant.

Static configuration for the `Notifier` microservice are :

| Name                                     | Type    | Default Value | Description                                     |
|------------------------------------------|---------|---------------|-------------------------------------------------|
| regards.notifier.max.bulk.size           | integer | `1000`        | Maximum number of requests to process at once.  |
| regards.notifier.batch.receive.timeout   | integer | `1000`        | Batch message reception timeout in milliseconds |
| regards.notifier.delay.before.processing | integer | `5`           | Delay, in seconds, before processing            |
| regards.notifier.remote.request.timeout  | integer | `5`           | Timeout, in minutes, for the remote request     |
| regards.notifier.metrics.enabled         | boolean | `false`       | Metrics are enabled if `true`                   |

:::info
Some of these properties are customizable in ansible inventory. 
[see installation guide](../../../../../setup/swarm/advanced/optimizations#notifier-optimization)

To make missing properties customizable, you have to update regards ansible playbook : the regards-mconfig role.
:::