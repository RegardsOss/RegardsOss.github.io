---
title: Static configuration
sidebar_label: Static configuration
slug: /development/services/admin-instance/configuration/static_configuration
sidebar_position: 2
---

Static configuration is the microservice configuration set before microservice startup in a property file.

Static configuration for `rs-Admin-Instance` service is :

| Name                                        | Type    | Default Value        | Description                                                                                                                                                                                                                                                                                                                                                                           |
|---------------------------------------------|---------|----------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| regards.mails.noreply.address               | String  | `regards@noreply.fr` | Default sender when a email is sent                                                                                                                                                                                                                                                                                                                                                   |
| regards.send.email.delay.first.range        | Integer | `60`                 | Time between 1, 2 and 3 tentatives (in seconds)                                                                                                                                                                                                                                                                                                                                       |
| regards.send.email.delay.second.range       | Integer | `3600`               | Time between 4, 5 and 6 tentatives (in seconds)                                                                                                                                                                                                                                                                                                                                       |
| regards.send.email.delay.third.range        | Integer | `86400`              | Time between 7, 8 and 9 tentatives (in seconds)                                                                                                                                                                                                                                                                                                                                       |
| regards.accounts.validity.duration          | Integer | `0`                  | Optional duration in days of account validity. If set to a positive integer, accounts remain active only for this specific duration after their creation and become inactive afterwards. If set to `0`, accounts do not expire, but can be manually deactivated by an instance administrator. This duration also applies to the validity of an account after it has been reactivated. |
| regards.accounts.password.validity.duration | Integer | `0`                  | Optional duration before users must change their password. If set to `0`, passwords do not expire.                                                                                                                                                                                                                                                                                    |
| regards.accounts.validity.check.cron        | string  | `0 * * * * ?`        | Cron expression defining when accounts are audited to deactivate the accounts that are past the account validity duration or whose password has expired. The default is once per minute.                                                                                                                                                                                              |
:::info
Some of these properties are customizable in ansible
inventory. [see installation guide](../../../../setup/swarm/advanced/swarm-optimizations.md#dataprovider-optimization).
link

To make missing properties customizable, you have to update regards ansible playbook : the regards-mconfig role.
:::