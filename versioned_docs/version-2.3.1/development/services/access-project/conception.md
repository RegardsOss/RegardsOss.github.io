---
title: How it works
sidebar_label: How it works
slug: /development/services/access-project/conception
sidebar_position: 2
---

## Introduction

The `rs-access-project` aims several specific responsibilities for each project created in the Regards architecture.
This microservice groups together a set of functionalities divided into different modules.

## Module : uiconfiguration

This module allows to handle the configuration of the Regards user interface with CRUD operations on the database
concerning the UI widgets, layout and themes. All these graphical elements are configured in a configuration
file ([Import/export configuration section](configuration/import-export.md)),
which lists the [UI modules](../../frontend/modules/dynamic-modules.md), [UI theme](../../frontend/components/theme.md)
and used [UI layout](../../frontend/layout-configuration.md) with their specific features, to display the Regards
interface with
the user role and to display the Regards interface with the administrator role.

* Endpoints in order to handle the configuration
  of [UI module](../../frontend/modules/dynamic-modules.md) for user's
  UI : [Module Controller](api-guides/rest/api-swagger.mdx#tag/module-controller)
* Endpoints in order to handle the configuration
  of [UI theme](../../frontend/components/theme.md) for user's
  UI : [UI Theme Controller](api-guides/rest/api-swagger.mdx#tag/theme-controller)
* Endpoints in order to handle the configuration
  of [UI layout](../../frontend/layout-configuration.md) for user's
  UI : [UI Layout Controller](api-guides/rest/api-swagger.mdx#tag/ui-layout-controller)
* Endpoints in order to handle the UI
  configuration : [UI Configuration Controller](api-guides/rest/api-swagger.mdx#tag/ui-layout-controller)
* Endpoints in order to handle the search history in the user's
  UI for the search form : [Search History Controller](api-guides/rest/api-swagger.mdx#tag/search-history-controller)

## Module : backend-for-frontend

### Concept

A part of this microservice is based on an architectural pattern named **BFF** (Backend-For-Frontend), used in modern
web developement to improve the efficiency and flexibility of frontend applications.

The `rs-Access-Project` microservice serves as an
intermediary layer between the frontend client and multiple backend services, more particulary microservices in Regards.
This module allows to organise in a same HTTP request a complex functionality in order to reduce the number of requests
between the browser and the server. Also there will be less response processing and therefore less complexity on the
browser side.  
If, moreover, the backend and frontend teams are different, the use of a BFF is clearly a good solution to isolate
responsibilities between each team.

We use a HTTP API client in order to communicate with other microservices.  
**Feign Client** is a Java-based tool used for simplifying HTTP communication in microservices architecture,
particularly in systems that use REST APIs. It is commonly used in Spring Boot applications.
Feign allows you to define REST clients in a declarative way, meaning you can specify how to interact with external
services by simply defining an interface with annotated methods.  
This eliminates the need for boilerplate code that handles the HTTP request and response.
Using Feign Client reduces the amount of code you need to write.  
You don’t need to manually write the code for creating HTTP connections, setting headers, serializing requests, or
deserializing responses. Feign abstracts all of this, allowing you to focus on the business logic.

### [Access Search Controller](./api-guides/rest/api-swagger.mdx#tag/access-search-controller)

This endpoint allows to search in the Regards catalog and injects services to manipulate the results. Services are
stored in a
memory
cache. This controller is a proxy controller thanks to :

* feign client to call HTTP API methods in `rs-catalog`
* feign client to call HTTP API methods in `rs-access-project`

### [Recipient Dto Controller](./api-guides/rest/api-swagger.mdx#tag/recipient-dto-controller)

This endpoint allows to retrieve all recipients of notification in Regards. This controller is a proxy controller thanks
to :

* feign client to call HTTP API methods in `rs-notifier`

### [Toponyms Controller](./api-guides/rest/api-swagger.mdx#tag/toponyms-controller)

This endpoint allows to search toponyms in the catalog of Regards. This controller is a proxy controller thanks to :

* feign client to call HTTP API methods in `rs-access-instance`

## Module : access-services

This module allows to handle the configuration of the Regards user interface with CRUD operations on the database
concerning the [UI plugins](../../frontend/plugins/plugins.md).

* Endpoints in order to handle the configuration
  of [UI plugins](../../frontend/plugins/plugins.md) : [UI Plugin Controller](api-guides/rest/api-swagger.mdx#tag/ui-plugin-service-controller),
  [UI Plugin Definition Controller](api-guides/rest/api-swagger.mdx#tag/ui-plugin-definition-controller), [UI Plugin Configuration Controller](./api-guides/rest/api-swagger.mdx#tag/ui-plugin-configuration-controller),
  [Link UI Plugin s Datasets Controller](api-guides/rest/api-swagger.mdx#tag/link-ui-plugins-datasets-controller)
* Endpoints in order to retrieve aggregations of UI plugins services and `Catalog` (included a feign client to call HTTP
  API methods in `rs-catalog`)
  microservices : [Services Aggregator Controller](api-guides/rest/api-swagger.mdx#tag/services-aggregator-controller)

Moreover, this module allows you to manage access, resources and the registration links to project users in Regards(
=each tenant of Regards) with the Backend-For-Frontend pattern.

### [Project Users Controller](./api-guides/rest/api-swagger.mdx#tag/project-users-controller)

This endpoint allows to manage project users in Regards. This controller is a proxy controller thanks to :

* feign client to call HTTP API methods in `rs-admin`
* feign client to call HTTP API methods in `rs-storage`

### [Storage Download Quota Controller](./api-guides/rest/api-swagger.mdx#tag/storage-download-quota-controller)

This endpoint allows to indicate quotas concerning the downloaded files in an order in Regards. This controller is a
proxy
controller thanks to :

* feign client to call HTTP API methods in `rs-storage`

### [AccessSettingsController](./api-guides/rest/api-swagger.mdx#tag/access-settings-controller)

This endpoint allows to manage access global settings in Regards. Accesses are the state of project users during the
activation process. This controller is a proxy controller thanks to :

* feign client to call HTTP API methods in `rs-admin`
* feign client to call HTTP API methods in `rs-storage`

### [User Resource Controller](./api-guides/rest/api-swagger.mdx#tag/user-resource-controller)

This endpoint allows to manage ressources for project users in Regards. This controller is a proxy controller thanks
to :

* feign client to call HTTP API methods in `rs-admin`

### [Registration Controller](./api-guides/rest/api-swagger.mdx#tag/registration-controller)

This endpoint allows to handle users registration for a project in Regards. This controller is a proxy controller thanks
to :

* feign client to call HTTP API methods in `rs-admin`