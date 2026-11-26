---
id: backend-lta-manager-static-configuration
title: LTA Manager static configuration
sidebar_label: Static configuration
slug: /development/backend/services/lta-manager/configuration/static-configuration
---

Static configuration is the microservice configuration set before microservice startup in a property file.
This configuration is common to all tenant.

Static configuration for `LTA Manager` service are : 

| Name                                           | Type    | Default Value | Description                                                                                                  |
| ---------------------------------------------- | ------- | ------------- | ------------------------------------------------------------------------------------------------------------ |
| regards.ltamanager.request.deletion.batch.size | integer | `1000`        | Max deletions treated at once.                                                                               |
| regards.ltamanager.cache.model.expires_minutes | integer | `60`          | Model cache expiration in minutes. Models are cached in LTA-Manager because they come from DAM microservice. |
| regards.ltamanager.request.bulk.size           | integer | `1000`        | Bulk size limit to handle messages                                                                           |

Some other properties can be updated, please check [LTA Manager section in the install guide](/docs/setup/swarm/advanced/optimizations#lta-manager-optimization).

:::info
Some of these properties are customizable in ansible inventory. [see installation guide](http://localhost:3000/docs/next/setup/swarm/advanced/optimizations#dataprovider-optimization)

To make missing properties customizable, you have to update regards ansible playbook : the regards-mconfig role.
:::