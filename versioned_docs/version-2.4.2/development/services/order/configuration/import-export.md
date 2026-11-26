---
title: Configuration Importation/Exportation
sidebar_label: Importation/Exportation
slug: /development/backend/services/order/configuration/import-export
sidebar_position: 1
---

Microservices settings regroup a set of settings that are specific by [tenant](../../../concepts/03-multitenant.md)
and stored in the microservice database.

## Import/Export API

To configure `rs-order` settings for a specific tenant, you need to follow the [generic Import/Export service
configuration guide](../../common/import-export-configuration.md), it will help you understand the expected JSON
file payload that you can send to the
[import configuration endpoint](../api-guides/rest/order-api-swagger.mdx#tag/module-manager-controller/operation/importConfiguration).

This configuration can also be imported or exported
through the [administrator UI](../../../../user-documentation/2-project-configuration/microservices.md).

## Configurable parameters

Dynamic settings for `rs-order` microservice are :

| Name                             | Type                                                                                | Default value                                                       | Description                                          |
|----------------------------------|-------------------------------------------------------------------------------------|---------------------------------------------------------------------|------------------------------------------------------|
| expiration_max_duration_in_hours | Integer                                                                             | 168 (7 jours)                                                       | Order expiration duration maximal (in hours)         |
| app_sub_order_duration           | Integer                                                                             | 2                                                                   | Sub order duration for applicative orders (in hours) |
| user_order_parameters            | Object `{"subOrderDuration":"Integer",` `"delayBeforeEmailNotification":"Integer"}` | `{"subOrderDuration":"240",` `"delayBeforeEmailNotification":"72"}` | Parameters for User order (in hours)                 | 

This configuration can also be changed
through the [administrator UI](../../../../user-documentation/8-order-data/settings-orders.md).

## Example

```json title='rs-order configuration file example'
{
  "microservice": "rs-order",
  "modules": [
    {
      "module": {
        "id": "order",
        "name": "Order module",
        "description": "Handle users products orders",
        "version": "2.1.0",
        "author": "REGARDS",
        "legalOwner": "CNES",
        "documentation": "https://github.com/RegardsOss"
      },
      "resetBeforeImport": true,
      "configuration": [
        {
          "key": "fr.cnes.regards.framework.modules.tenant.settings.domain.DynamicTenantSetting",
          "value": {
            "name": "user_order_parameters",
            "description": "Parameters for User order (in hours)",
            "value": "{\"subOrderDuration\":240,\"delayBeforeEmailNotification\":72}",
            "defaultValue": "{\"subOrderDuration\":240,\"delayBeforeEmailNotification\":72}",
            "className": "fr.cnes.regards.modules.order.service.settings.UserOrderParameters",
            "containsSensitiveParameters": false
          }
        },
        {
          "key": "fr.cnes.regards.framework.modules.tenant.settings.domain.DynamicTenantSetting",
          "value": {
            "name": "expiration_max_duration_in_hours",
            "description": "Order expiration duration maximal (in hours)",
            "value": "168",
            "defaultValue": "168",
            "className": "java.lang.Integer",
            "containsSensitiveParameters": false
          }
        },
        {
          "key": "fr.cnes.regards.framework.modules.tenant.settings.domain.DynamicTenantSetting",
          "value": {
            "name": "app_sub_order_duration",
            "description": "Sub order duration for applicative orders (in hours)",
            "value": "2",
            "defaultValue": "2",
            "className": "java.lang.Integer",
            "containsSensitiveParameters": false
          }
        }
      ]
    }
  ]
}
```