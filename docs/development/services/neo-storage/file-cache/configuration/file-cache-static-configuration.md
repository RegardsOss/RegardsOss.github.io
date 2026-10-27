---
id: backend-file-cache-static-configuration
title: Static Configuration
sidebar_label: Static configuration
slug: /development/backend/services/file-cache/configuration/static-configuration
---

Static configuration refers to the microservice configuration defined in a property file before the microservice starts.
This configuration is common to all tenants.

The configuration for the `file-cache` microservice is:

| Property name | Type | Default value | Description |
|---|---|---|---|
|**Handler**|---|---|---|
| regards.storage.file.cache.restoration.request.response.bulk.size | Integer | 100 | Batch size for processing file restoration response events. |
| regards.storage.file.cache.restoration.request.creation.bulk.size | Integer | 100 | Batch size for processing restoration file request events. |
| regards.storage.file.cache.download.request.response.bulk.size | Integer | 100 | Batch size for processing download file response events. |
|**Service**|---|---|---|
| regards.storage.file.cache.restoration.request.processing.bulk.size | Integer | 100 | Page size used when processing file restore operations. |
| regards.storage.file.cache.expiration.hours | Integer | 24 | Maximum age of a file in the cache. |
| internal.cache.almost.full.threshold.percent | Integer | 90 | Cache usage threshold that triggers overflow handling. |
| internal.cache.getting.full.threshold.percent | Integer | 70 | Usage threshold (%) for getting-full internal cache alert. |
| regards.storage.file.cache.purge.bulk.size | Integer | 500 | Page size used for internal cache cleanup. |
| regards.storage.file.cache.purge.max.simultaneous.file.deletion | Integer | 10000 | Maximum number of cache files deleted in one bulk deletion step. |
| regards.storage.cache.availability.hours | Integer | 24 | Lifetime of a cached file in hours. |
|**Schedulers**|---|---|---|
| regards.storage.file.cache.restoration.expiration.schedule | String | 0 0/6 * * * * | Cron expression for the periodicity of the expiration check of cached files. By default every 6 hours. |
| regards.storage.file.cache.restoration.completion.schedule | String | 0 * * * * * | Cron expression for the periodicity of checking request completion for duplicate requests. By default every minute. |
| regards.storage.file.cache.restore.file.schedule | String | 0 * * * * * | Cron expression for the periodicity of the scheduling of restoration jobs. By default every minute. |


:::info
Some of these properties are customizable in the Ansible inventory ([see the installation guide](../../../../../setup/swarm/advanced/swarm-optimizations.md)).

To make additional properties customizable, you need to update the corresponding Ansible playbook, specifically the **regards-mconfig** role.
:::


