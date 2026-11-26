---
id: backend-file-packager-static-configuration
title: Static Configuration
sidebar_label: Static configuration
slug: /development/backend/services/file-packager/configuration/static-configuration
---

Static configuration refers to the microservice configuration defined in a property file before the microservice starts.
This configuration is common to all tenants.

The static configuration for the rs-file-packager service is:

| Parameter Name                                                          | Type                 | Default  | Description                                                                                |
|-------------------------------------------------------------------------|----------------------|----------|--------------------------------------------------------------------------------------------|
| regards.file.packager.archive.max.size.in.ko                            | Integer (in kB)      | 1024     | Maximum archive size before closing a package and creating the ZIP archive.                |
| regards.file.packager.archive.max.age.in.hours                          | Integer (in hours)   | 24       | Maximum age of a building package before it is closed and archived.                        |
| regards.file.packager.store.complete.package.job.page.size              | Integer              | 100      | Page size used when scheduling jobs to store complete packages.                            |
| regards.file.packager.archive.directory                                 | String (path)        | /archive | Directory shared between file-packager and file-access to build and store archives.        |
| regards.file.packager.files.archive.request.bulk.size                   | Integer              | 100      | Number of file archive requests handled in a single batch.                                 |
| regards.file.packager.storage.response.bulk.size                        | Integer              | 50       | Number of storage response events handled in a single batch.                               |
| regards.file.packager.complete.package.lock.duration.in.seconds         | Integer (in seconds) | 300      | Lock duration for the scheduler that completes packages to avoid concurrent processing.    |
| regards.file.packager.file.deleting.lock.duration                       | Integer (in seconds) | 60       | Lock duration for the scheduler that deletes local files after archival.                   |
| regards.file.packager.file.packaging.scheduler.lock.duration.in.seconds | Integer (in seconds) | 300      | Lock duration for the scheduler that associates files to packages and closes old packages. |
| regards.file.packager.file.packaging.scheduler.page.size                | Integer              | 100      | Page size used when scanning files waiting for packaging.                                  |
| regards.file.packager.retry.file.packaging.retry.lock.duration          | Integer (in seconds) | 60       | Lock duration for the scheduler that retries packaging operations in error.                |

:::info
Some of these properties are customizable in the Ansible inventory ([see the installation guide](../../../../../setup/swarm/advanced/swarm-optimizations.md)).

To make additional properties customizable, you need to update the corresponding Ansible playbook, specifically the **regards-mconfig** role.
:::
