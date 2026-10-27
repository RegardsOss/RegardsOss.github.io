---
id: backend-file-access-static-configuration
title: Static Configuration
sidebar_label: Static configuration
slug: /development/backend/services/file-access/configuration/static-configuration
---

Static configuration refers to the microservice configuration defined in a property file before the microservice starts.
This configuration is common to all tenants.

The configuration for the `file-access` microservice is:



| Property name | Type | Default value | Description |
|---|---|---|---|
|**Services**|---|---|---|
| regards.neostorage.restoration.max.request.age.minutes | Integer | 10 | Maximum age of restoration requests. Requests will timeout after this duration. |
| regards.neostorage.restoration.base.duration.between.tries.minutes | Integer | 1 | Base duration between restoration retries. Duration increases between tries. |
| regards.neostorage.restoration.requests.per.job | Integer | 100 | Number of restoration requests processed by each job. |
| regards.neostorage.download.requests.per.job | Integer | 100 | Number of download requests processed by each job. |
|**Handlers**|---|---|---|---|
| regards.neostorage.restoration.request.bulk.size | Integer | 10 | Batch size for processing restore file events. |
| regards.file-access.job.restoreFile.maxRetry | Integer | 5 | Maximum number of retries for failed jobs |
| regards.neostorage.download.request.bulk.size | Integer | 10 | Batch size for processing download file events. |
| **Schedulers**|---|---|---|---|
| regards.neostorage.file.access.download.file.schedule | String | 0 * * * * * | Cron expression for the periodicity of the scheduling of download jobs. By default every minute. |
| regards.neostorage.file.access.restore.file.retry.schedule | String | 0 * * * * * | Cron expression for the periodicity of the scheduling of job retries. By default every minute. |
| regards.neostorage.file.access.restore.file.schedule | String | 0 * * * * * | Cron expression for the periodicity of the scheduling of restoration jobs. By default every minute. |

:::info
Some of these properties are customizable in ansible
inventory. [see installation guide](../../../../../setup/swarm/advanced/swarm-optimizations.md)

To make missing properties customizable, you have to update regards ansible playbook : the **regards-mconfig** role.
:::