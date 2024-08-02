---
id: backend-rest-configure-settings
title: Configure delivery settings
sidebar_label: Configure settings
slug: /development/backend/services/delivery/guides/rest/configure-settings
---

## Request

To configure delivery settings, send a `PUT` request on update operation of dynamic-tenant-setting-controller (
see [rest api documentation](./rs-delivery-api-swagger.mdx)) for each setting that needs to be set.

## Body

| Name            | Type   | Default value                                                                                                                  | Description                                                                                                                                    |
|-----------------|--------|--------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------|
| request_ttl     | int    | 12                                                                                                                             | Request time to live in hours. Passed this delay, delivery requests will be deleted.                                                           |
| s3_server       | Object | ```{"scheme":"https","host":"rs-s3-minio","port":9000,"region":"fr-regards-1","key":"default-key","secret":"default-secret"``` | Configuration to access S3 server. It has to be overridden to provide your own S3 configuration.                                               |  
| build_bucket    | String | default-build-bucket                                                                                                           | Temporary bucket on which available files will be transferred before building final zips.  (Not used for now)                                  |
| delivery_bucket | String | default-delivery-bucket                                                                                                        | Bucket on which the ZIP archives will be dropped once orders have been completed. It has to be overridden to provide your own delivery bucket. |
