---
title: Static configuration
sidebar_label: Static configuration
slug: /development/services/admin-instance/configuration/static_configuration
sidebar_position: 2
---

Static configuration is the microservice configuration set before microservice startup in a property file.

Static configuration for `rs-Admin-Instance` service is :

| Name                                  | Type    | Default Value        | Description                                     |
|---------------------------------------|---------|----------------------|-------------------------------------------------|
| regards.mails.noreply.address         | String  | `regards@noreply.fr` | Default sender when a email is sent             |
| regards.send.email.delay.first.range  | Integer | `60`                 | Time between 1, 2 and 3 tentatives (in seconds) |
| regards.send.email.delay.second.range | Integer | `3600`               | Time between 4, 5 and 6 tentatives (in seconds) |
| regards.send.email.delay.third.range  | Integer | `86400`              | Time between 7, 8 and 9 tentatives (in seconds) |

:::info
Some of these properties are customizable in ansible
inventory. [see installation guide](../../../../setup/swarm/advanced/swarm-optimizations.md#dataprovider-optimization).
link

To make missing properties customizable, you have to update regards ansible playbook : the regards-mconfig role.
:::