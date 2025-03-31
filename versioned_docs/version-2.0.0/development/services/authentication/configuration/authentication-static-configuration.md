---
id: backend-authentication-static-configuration
title: Authentication static configuration
sidebar_label: Static configuration
slug: /development/backend/services/authentication/configuration/static-configuration
sidebar_position: 2
---

Static configuration is the microservice configuration set before microservice startup in a property file.
This configuration is common to all tenant.

Static configuration for `Authentication` service is : 




| Name                             | Type             | Default Value     | Description                |
| -------------------------------- | ---------------- | ----------------- | -------------------------- |
| http.proxy.host                  | string           | `null`            | Optional proxy host        |
| http.proxy.login                 | string           | `null`            | Optional proxy login       |
| http.proxy.password              | string encrypted | `null`            | Optional proxy password    |
| http.proxy.port                  | integer          | `null`            | Optional proxy port        |
| http.proxy.noproxy               | string[]         | `[]` (empty list) | Optional list of noproxy   |
| regards.accounts.root.user.login | string           | no default value  | Root user login of Regards |


:::info
To make missing properties customizable, you have to update regards ansible playbook : the regards-mconfig role. [See more details here](/docs/user-documentation/0-z2_concept/configuration-overview.md)
:::