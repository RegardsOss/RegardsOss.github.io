---
title: Static Configuration
sidebar_label: Static configuration
slug: /development/backend/services/gateway/configuration/static-configuration
sidebar_position: 2
---

Static configuration is the microservice configuration set before microservice startup in a property file.
This configuration is common to all tenants.

Static configuration for `Gateway` service is :

| Name                                       | Type     | Default Value | Description                                                                                                                                                                                                               |
|--------------------------------------------|----------|---------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| spring.cloud.gateway.httpclient.response-timeout  | duration | `60s`  | Maximum time allowed for a request to return a response. Beyond this time, an error response with status `504 Gateway Timeout` is returned. If no unit is specified, the value is assumed to be in milliseconds. (1) |

(1) The microservice `rs-front` also has a configurable timeout policy (nginx property `proxy_read_timeout`). It must be
set in accordance to the timeout value of the gateway. The consistency between these values is automatically ensured 
when the customization is done through the ansible inventory.

:::info
Some of these properties are customizable in ansible
inventory. [See installation guide](../../../../../setup/swarm/advanced/microservices-configs).

To make missing properties customizable, you have to update regards ansible playbook : the regards-mconfig role.
:::