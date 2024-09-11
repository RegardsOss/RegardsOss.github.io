---
title: Configuration Importation/Exportation
sidebar_label: Importation/Exportation
slug: /development/backend/services/order/configuration/import-export
sidebar_position: 1
---


Microservices settings regroup a set of settings that are specific by [tenant](../../../concepts/03-multitenant.md)
and stored in the microservice database.

## Import/Export API

To configure some microservice settings for a specific tenant, you need to follow the [generic Import/Export service
configuration guide](../../common/import-export-configuration.md), it will help you understand the expected JSON
file payload that you can send to the
[import configuration endpoint](../api-guides/rest/order-api-swagger.mdx#tag/module-manager-controller/operation/importConfiguration).

This configuration can also be imported or exported
through [administrator UI](../../../../user-documentation/2-project-configuration/microservices.md).

## Configurable parameters

| Name                  | Type    | Default value                                                                                  | Description                                                                                                                                            |
|-----------------------|---------|------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------|

Not yet release !                                                                                                                       

## Example

```json title='rs-order configuration file example'
{
  "microservice": "rs-order",
  "modules": [
  ]
}
```