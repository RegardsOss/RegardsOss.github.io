---
title: Configuration Importation/Exportation
sidebar_label: Importation/Exportation
slug: /development/backend/services/order/configuration/import-export
sidebar_position: 1
---


Microservices settings regroup a set of settings that are specific by [tenant](../../../concepts/03-multitenant.md)
and stored in the microservice database.

## Import/Export API

The import export is not possible for the order microservice.

## Configurable parameters

| Name                             | Type                                                                       | Default value                                              | Description                                          |
| -------------------------------- | -------------------------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------- |
| expiration_max_duration_in_hours | integer                                                                    | 168 (7 jours)                                              | Order expiration duration maximal (in hours)         |
| app_sub_order_duration           | integer                                                                    | 2                                                          | Sub order duration for applicative orders (in hours) |
| user_order_parameters            | object `{"subOrderDuration":"integer",` `"delayBeforeEmailNotification":"integer"}` | `{"subOrderDuration":"240",` `"delayBeforeEmailNotification":"72"}` | Parameters for User order (in hours)                 | 

