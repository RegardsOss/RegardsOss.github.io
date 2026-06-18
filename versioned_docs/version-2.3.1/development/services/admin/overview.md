---
title: Overview
sidebar_label: Overview
slug: /development/services/admin/overview
sidebar_position: 1
---

## Overview

**Admin project** (or **rs-admin**) microservice has been designed to manage processes for the administration of
Regards. It is a [multitenant](../../concepts/03-multitenant.md) microservice, deployed one for all user projects.
Regards has another microservice with a similar role, `rs-admin-instance`, but dedicated to the system instance
administration.

`rs-admin` responsibilities:

- Manage registrations and registration settings
- Manage users and their roles
- Manage endpoints security according to user roles
- Manage project notifications
- Manage licences
- Manage sessions concerning the monitoring of data additions in Regards

| Concept                                                                           | Compatibility | Description                                         |
|-----------------------------------------------------------------------------------|---------------|-----------------------------------------------------|
| [Multitenant](../../concepts/03-multitenant.md)                                   | Yes           | Can handle multiple tenants/projects                | 
| [Vertical scalability](../../concepts/07-scalability.md#vertical-scalability)     | Yes           | Uses Jobs system                                    | 
| [Horizontal scalability](../../concepts/07-scalability.md#horizontal-scalability) | No            | Service can not be deployed with multiple instances |

You can learn how the service works in the [How it works section](conception.md).

# How to use

* Browse all [REST API available endpoints](api-guides/rest/api-swagger.mdx).

## How to access source code

* Microservice source code is available
  on [GitHub](https://github.com/RegardsOss/regards-backend/tree/master/rs-admin/bootstrap-administration).
* `notification` module source included in this microservice is available
  on [Github](https://github.com/RegardsOss/regards-backend/tree/master/rs-admin/notification)
* `accessrights` module source included in this microservice is available
  on [Github](https://github.com/RegardsOss/regards-backend/tree/master/rs-admin/accessrights)
* `session` module source included in this microservice is available
  on [Github](https://github.com/RegardsOss/regards-backend/tree/master/rs-microservice/regards-modules/session)
