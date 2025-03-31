---
title: RS-ACCESS-INSTANCE microservice
sidebar_label: Overview
slug: /development/services/access-instance/overview
sidebar_position: 1
---

## Overview

**Access instance** (or **rs-access-instance**) microservice manage the configuration of instance UI such as the portal.
Regards has another microservice with similar functionalities, `rs-access-project`,
with [multitenant](../../concepts/03-multitenant.md) conpect to handle configuration of projects or tenant user UI.

There are two versions of this microservice. One (`rs-access-instance`) is compatible with toponym management and
requires a postgres database with the postgis extension installed, and the other (`rs-access-instance-light`) is not
compatible with a standard postgres database :

- `rs-access-instance` responsibilities :
    - handle the configuration of UI for the portal interface :
        - UI modules (portal menu and List of projects),
        - application's theme or layout
    - toponyms : create/search geographic locations in a database
- `rs-access-instance-light` responsibilities :
    - handle the configuration of UI for the portal interface :
        - UI modules (portal menu and List of projects),
        - application's theme or layout

| Concept                                                                           | Compatibility | Description                                         |
|-----------------------------------------------------------------------------------|---------------|-----------------------------------------------------|
| [Multitenant](../../concepts/03-multitenant.md)                                   | No            | Can handle multiple tenants/projects                | 
| [Vertical scalability](../../concepts/07-scalability.md#vertical-scalability)     | No            | Do not uses Jobs system                             | 
| [Horizontal scalability](../../concepts/07-scalability.md#horizontal-scalability) | No            | Service can not be deployed with multiple instances |

You can learn how the service works with the [How it works section](conception.md).

## How to use

You can learn how to **operate** with the microservice thanks to **API Guides** :

* Browse all [REST API available endpoints](api-guides/rest/api-swagger.mdx).

## How to access through UI

You can follow the **User manuel** to learn about the instance administrator UI related functionalities :

- [How to configure **Portal UI**](../../../user-documentation/1-global-configuration/portal-configuration.md).

## How to access source code

Microservice source code for `rs-access-instance` is available
on [Github](https://github.com/RegardsOss/regards-backend/tree/master/rs-access/bootstrap-access-instance)

Microservice source code for `rs-access-instance-light` is available
on [Github](https://github.com/RegardsOss/regards-backend/tree/master/rs-access/bootstrap-access-instance-light)

* `uiconfiguration` module source included in this microservice is available
  on [Github](https://github.com/RegardsOss/regards-backend/tree/master/rs-access/uiconfiguration)
* `toponyms-instance` module source included in this microservice is available
  on [Github](https://github.com/RegardsOss/regards-backend/tree/master/rs-access/toponyms-instance)
