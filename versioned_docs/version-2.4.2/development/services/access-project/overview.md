---
title: Overview
sidebar_label: Overview
slug: /development/services/access-project/overview
sidebar_position: 1
---

**Access project** (or **rs-access-project**) microservice is used as a **backend for frontend**. This service is used
by the Web UI to retrieve its configuration and to aggregate some microservices information. It is
a [multitenant](../../concepts/03-multitenant.md) microservice,
deployed for each user project. Regards has another microservice with a similar role, `rs-access-instance`, but
dedicated to the system instance administration UI.

`rs-access-project` responsibilities :

* Handle the configuration of user's UI (UI modules, UI plugins and service plugins, like application's theme or layout)
* Proxy for several microservices :
    - `rs-admin` : CRUD operations concerning users of project
    - `rs-catalog` : search products in catalog in order to
      add [service plugins](../../frontend/plugins/plugin-services.md) applicable
      on each result
    - `rs-storage` : handle quotas in order to limit downloaded files in an order by user
    - `rs-access-instance` & `rs-catalog` : Replace toponyms with geometries in search

| Concept                                                                           | Compatibility | Description                                         |
|-----------------------------------------------------------------------------------|---------------|-----------------------------------------------------|
| [Multitenant](../../concepts/03-multitenant.md)                                   | Yes           | Can handle multiple tenants/projects                | 
| [Vertical scalability](../../concepts/07-scalability.md#vertical-scalability)     | No            | Uses Jobs system                                    | 
| [Horizontal scalability](../../concepts/07-scalability.md#horizontal-scalability) | No            | Service can not be deployed with multiple instances |

You can learn how the service works with the [conception section](conception.md).

## How to use

* Browse all [REST API available endpoints](api-guides/rest/api-swagger.mdx).

## How to configure

To understand the **configuration of a specific tenant** (aka project)
see [Import/export configuration section](configuration/import-export.md).

## How to access source code

* Microservice source code is available
  on [Github](https://github.com/RegardsOss/regards-backend/tree/master/rs-access/bootstrap-access-project)
* `access-services` module source included in this microservice is available
  on [Github](https://github.com/RegardsOss/regards-backend/tree/master/rs-access/access-services)
* `backend-for-frontend` module source included in this microservice is available
  on [Github](https://github.com/RegardsOss/regards-backend/tree/master/rs-access/backend-for-frontend)
* `UI Configuration` module source included in this microservice is available
  on [Github](https://github.com/RegardsOss/regards-backend/tree/master/rs-access/uiconfiguration)
