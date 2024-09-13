---
title: Static configuration
sidebar_label: Static configuration
slug: /development/services/access-instance/configuration
---

Static configuration is the microservice configuration set before microservice startup in a property file.
This configuration is common to all tenant.

Static configuration for `rs-access-instance` service is :

| Name                                     | Type    | Default Value | Description                                                                                                                                |
|------------------------------------------|---------|---------------|--------------------------------------------------------------------------------------------------------------------------------------------|
| regards.toponyms.limit.save              | Integer | `30`          | Maximum number of of toponyms that can be saved per day and per user                                                                       |
| regards.toponyms.geo.sampling.tolerance  | Double  | `0.1`         | Tolerance (unit: meter) to generate simplified geometry through  ST_Simplify [Postgis function](https://postgis.net/docs/ST_Simplify.html) |
| regards.toponyms.geo.sampling.max.points | Integer | `0`           | Maximum number of points to retrieve for each polygon of a geometry (Default 0 for no sampling)                                            |
| regards.toponyms.expiration              | Integer | `30`          | Parameter used to set the expiration date of a not visible toponym in day                                                                  |

:::info
Some of these properties are customizable in ansible
inventory. [see installation guide](../../../../setup/swarm/advanced/swarm-optimizations.md#dataprovider-optimization).
link

To make missing properties customizable, you have to update regards ansible playbook : the regards-mconfig role.
:::
