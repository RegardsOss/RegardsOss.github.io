---
title: Static Configuration
sidebar_label: Static configuration
slug: /development/services/dam/configuration/static-configuration
sidebar_position: 2
---

Static configuration is the microservice configuration set before microservice startup in a property file.
This configuration is common to all tenant.

Static configuration for `rs-dam` service is :

| Name                              | Type | Default Value | Description                                                                                                                                                            |
|-----------------------------------|------|---------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| regards.access.rights.update.cron | cron | `0 0 1 ? * *` | Periodicity of scheduler to handle dynamic modification of access rights between dataset and group of users thanks to dynamic plugins(`IDataObjectAccessFilterPlugin`) |

:::info
Some of these properties are customizable in ansible
inventory. [see installation guide](../../../../setup/swarm/advanced/swarm-optimizations.md#dataprovider-optimization).
link

To make missing properties customizable, you have to update regards ansible playbook : the regards-mconfig role.
:::