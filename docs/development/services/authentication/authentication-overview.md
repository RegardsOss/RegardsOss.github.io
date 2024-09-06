---
title: Overview
sidebar_label: Overview
slug: /development/backend/services/authentication/overview/
sidebar_position: 1
---

This microservice is a mandatory microservice of the REGARDS architecture and is an integral part of
the [main functional group](../../../overview/functional-overview/02-meta-catalog-services.md).

The RS-AUTHENTICATION multi-tenant microservice allows users to authenticate.
To do so, RS-AUTHENTICATION provides these functionalities:

- allow authentication using REGARDS internal user base
- allow fully externalized authentication system to connect through external SSO
- allow external user base (LDAP,...).

| Concept                                                                           | Compatibility | Description                                     |
|-----------------------------------------------------------------------------------|---------------|-------------------------------------------------|
| [Multitenant](../../concepts/03-multitenant.md)                                   | Yes           | Can handle multiple tenants/projects            | 
| [Vertical scalability](../../concepts/07-scalability.md#vertical-scalability)     | No            | Service do not use Jobs system                  | 
| [Horizontal scalability](../../concepts/07-scalability.md#horizontal-scalability) | Yes           | Service can be deployed with multiple instances |

You can learn how the service works with the [How it works section](./authentication-conception.md).

## How to use

You can learn how to **operate** with the microservice thanks to **API Guides** :

- [Get token using REST API](./api-guides/rest/authent-oauth2.mdx) shows how to retrieve a REGARDS token using user and
  password and use it in following requests.
- **Browse** all [REST API available endpoints](./api-guides/rest/authentication-api-swagger.mdx).

## Plugins

See [Plugins section](./plugins/authentication-plugins.md) to learn how to customize authentication system.

## How to configure

There is currently no API configuration system. You have to use the
administrator UI to configure the authorised authentication systems.

## How to access through UI

You can follow the **User manuel** to learn about the administrator UI related functionalities :

- [How to configure **Authentication systems
  **](../../../user-documentation/2-project-configuration/users-authentication.md).
