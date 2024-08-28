---
id: backend-delivery-import-export
title: Configuration Importation/Exportation
sidebar_label: Importation/Exportation
slug: /development/backend/services/delivery/configuration
---

## Request

To configure delivery settings, send a `POST` request on update operation of dynamic-tenant-setting-controller (
see [rest api documentation](../api-guides/rest/rs-delivery-api-swagger.mdx#tag/module-manager-controller/operation/importConfiguration))
for each setting that needs to be set. The configuration is stored in database for each tenant or project.

This configuration can also be imported or exported
through [administrator HMI](../../../../user-documentation/2-project-configuration/microservices.md).

## Body

| Name                   | Type   | Default value                                                                                                                  | Description                                                                                                                                                                                                       |
|------------------------|--------|--------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| request_ttl            | int    | 12                                                                                                                             | Request time to live in hours. Passed this delay, delivery requests will be deleted.                                                                                                                              |
| s3_server              | Object | ```{"scheme":"https","host":"rs-s3-minio","port":9000,"region":"fr-regards-1","key":"default-key","secret":"default-secret"``` | Configuration to access S3 server. It has to be overridden to provide your own S3 configuration.                                                                                                                  |
| build_bucket           | String | default-build-bucket                                                                                                           | Temporary bucket on which available files will be transferred before building final zips.  (Not used for now)                                                                                                     |
| delivery_bucket        | String | default-delivery-bucket                                                                                                        | Bucket on which the ZIP archives will be dropped once orders have been completed. It has to be overridden to provide your own delivery bucket.                                                                    |
| order_size_limit_bytes | Long   | 5368709120 (5Go)                                                                                                               | Maximum size in octets allowed for a delivery order. This value should not be greater than a suborder size in `rs-order` microservice (FIXME TODO link) as delivery does not allow order with multiple suborders. |

```json title='rs-delivery configuration file example'
{
  "microservice": "rs-delivery",
  "modules": [
    {
      "module": {
        "id": "delivery",
        "name": "Delivery module",
        "description": "File delivery system for order microservice.",
        "version": "{version number}",
        "author": "REGARDS",
        "legalOwner": "CNES",
        "documentation": "https://github.com/RegardsOss"
      },
      "resetBeforeImport": true,
      "configuration": [
        {
          "key": "fr.cnes.regards.framework.modules.tenant.settings.domain.DynamicTenantSetting",
          "value": {
            "name": "request_ttl",
            "description": "Maximum retention time of a delivery request in hours.",
            "value": "12",
            "defaultValue": "12",
            "className": "java.lang.Integer",
            "containsSensitiveParameters": false
          }
        },
        {
          "key": "fr.cnes.regards.framework.modules.tenant.settings.domain.DynamicTenantSetting",
          "value": {
            "name": "s3_server",
            "description": "S3 server to place orders.",
            "value": "{\"scheme\":\"https\",\"host\":\"rs-minio\",\"port\":9000,\"region\":\"fr-regards-1\",\"key\":\"default-key\",\"secret\":\"*******\"}",
            "defaultValue": "{\"scheme\":\"https\",\"host\":\"rs-minio\",\"port\":9000,\"region\":\"fr-regards-1\",\"key\":\"default-key\",\"secret\":\"default-secret\"}",
            "className": "fr.cnes.regards.modules.delivery.domain.settings.S3DeliveryServer",
            "containsSensitiveParameters": true
          }
        },
        {
          "key": "fr.cnes.regards.framework.modules.tenant.settings.domain.DynamicTenantSetting",
          "value": {
            "name": "delivery_bucket",
            "description": "Bucket on which the ZIP archives will be dropped once orders have been completed.",
            "value": "default-delivery-bucket",
            "defaultValue": "default-delivery-bucket",
            "className": "java.lang.String",
            "containsSensitiveParameters": false
          }
        },
        {
          "key": "fr.cnes.regards.framework.modules.tenant.settings.domain.DynamicTenantSetting",
          "value": {
            "name": "order_size_limit_bytes",
            "description": "Maximum size in octets allowed for a delivery order. This value should not be greater than a suborder size in order microservice as delivery does not allow order with multiple suborders.",
            "value": "5368709120",
            "defaultValue": "5368709120",
            "className": "java.lang.Long",
            "containsSensitiveParameters": false
          }
        },
        {
          "key": "fr.cnes.regards.framework.modules.tenant.settings.domain.DynamicTenantSetting",
          "value": {
            "name": "build_bucket",
            "description": "Temporary bucket on which available files will be transferred before building final zips.",
            "value": "default-build-bucket",
            "defaultValue": "default-build-bucket",
            "className": "java.lang.String",
            "containsSensitiveParameters": false
          }
        }
      ]
    }
  ]
}
```