---
title: Static Configuration
sidebar_label: Static configuration
slug: /development/backend/services/order/configuration/static-configuration
sidebar_position: 2
---

Static configuration is the microservice configuration set before microservice startup in a property file.
This configuration is common to all tenant.

Static configuration for `Order` service is :

| Name                                       | Type    | Default Value | Description                                                                              |
|--------------------------------------------|---------|---------------|------------------------------------------------------------------------------------------|

Not yet released.

:::info
Some of these properties are customizable in ansible
inventory. [see installation guide](../../../../setup/swarm/advanced/swarm-optimizations.md#dataprovider-optimization).
link

To make missing properties customizable, you have to update regards ansible playbook : the regards-mconfig role.
:::