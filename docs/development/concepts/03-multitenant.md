---
id: concepts-multitenant
title: Multitenant architecture
sidebar_label: Multitenant
slug: /development/concepts/multitenant/
---

Regards is a **Multitenants** architectured system, which allows a single instance of REGARDS to handle as many
projects as you want (depends on allocated resources).

:::info
In Regards context, a tenant is a project into the Regards instance.
Each tenant (or project) in Regards system ensure **data isolation** in database and on files storage locations to avoid
conflicts between projects.
:::

With this implementation some microservices are designed to manage the instance of Regards.
:::note Microservice working on instance
Any service suffixed with **-instance** is not a multitenant service.  
:::

Instance microservices are:

- [rs-admin-instance](../backend/regards/admin-instance/overview.md) : Microservice to manage all the projects of the
  instance and to centralize all shared accounts between projets.
- [rs-access-instance](../backend/regards/access-instance/overview.md) : Microservice to configure instance
  administration
  web UI.

To learn more about Regards multitenant implementation in microservices
see [Multitenant Regards Starter](../backend/framework/starters/multitenant-starter.md)
and [JPA Multitenant starter](../backend/framework/starters/jpa-multitenant-starter.md).