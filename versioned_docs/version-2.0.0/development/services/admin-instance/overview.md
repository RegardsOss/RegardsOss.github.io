---
title: Overview
sidebar_label: Overview
slug: /development/services/admin-instance/overview
sidebar_position: 1
---

**Admin instance** (or **rs-admin-instance**) microservice has been designed to centralize processes for the
administration of Regards for all projects. Regards has another microservice with similar
functionalities, `rs-admin`,
with [multitenant](../../concepts/03-multitenant.md) concept to handle administration of project users and roles.

`rs-admin-instance` responsibilities:

* Handle different projects/tenants with their connections to databases
* Handle access rights of users with a single account for all projects
* Manage portal notifications
* Send emails to users of Regards

| Concept                                                                           | Compatibility | Description                                         |
|-----------------------------------------------------------------------------------|---------------|-----------------------------------------------------|
| [Multitenant](../../concepts/03-multitenant.md)                                   | No            | Can handle multiple tenants/projects                | 
| [Vertical scalability](../../concepts/07-scalability.md#vertical-scalability)     | Yes           | Uses Jobs system                                    | 
| [Horizontal scalability](../../concepts/07-scalability.md#horizontal-scalability) | No            | Service can not be deployed with multiple instances |

You can learn how the service works in the [How it works section](./conception.md).

## How to use

You can learn how to **operate** with the microservice thanks to **API Guides** :

- **Browse** all [REST API available endpoints](api-guides/rest/api-swagger.mdx).

## How to access source code

Microservice source code is available
on [GitHub](https://github.com/RegardsOss/regards-backend/tree/master/rs-admin/bootstrap-administration-instance).

* `project-instance` module source included in this microservice is available
  on [GitHub](https://github.com/RegardsOss/regards-backend/tree/master/rs-admin/project-instance).
* `accessrights-instance` module source included in this microservice is available
  on [GitHub](https://github.com/RegardsOss/regards-backend/tree/master/rs-admin/accessrights-instance).
* `notification-instance` module source included in this microservice is available
  on [GitHub](https://github.com/RegardsOss/regards-backend/tree/master/rs-admin/notification-instance).
* `emails-instance` module source for included in microservice is available
  on [GitHub](https://github.com/RegardsOss/regards-backend/tree/master/rs-admin/emails-instance).



