---
id: backend-storage-import-export-configuration
title: Configuration Importation/Exportation
sidebar_label: Importation/Exportation
slug: /development/services/storage/configuration/import-export
sidebar_position: 1
---

Microservices settings regroup a set of settings that are specific by [tenant](../../../concepts/03-multitenant.md)
and stored in the microservice database.

## Import/Export API

To configure `rs-storage` settings for a specific tenant, you need to follow the [generic Import/Export service
configuration guide](../../common/import-export-configuration.md), it will help you understand the expected JSON
file payload that you can send to the
[import configuration endpoint](../api-guides/rest/storage-api-swagger.mdx#tag/module-manager-controller/operation/importConfiguration).

This configuration can also be imported or exported
through the [administrator UI](../../../../user-documentation/2-project-configuration/microservices.md).

When you import a plugin configuration, dataset (`resetBeforeImport` to false) :

- update dynamic tenant settings
- if the storage location exists (_name_ exists), it returns an error
- if the storage location does not exist (_name_ does not exist), it creates it

When you set `resetBeforeImport` to true :

- `rs-storage` resets only its dynamic tenants settings
- `rs-storage` does not remove any existing storage location (same behaviour with `resetBeforeImport` to
  false with storage location)

## Configurable parameters

Dynamic settings for `rs-storage` microservice are :

| Name            | Type                   | Default value   | Description                                                                                 |
|-----------------|------------------------|-----------------|---------------------------------------------------------------------------------------------|
| rateLimit       | Integer                | -1 (unlimited)  | Rate limit for file download                                                                |
| tenantCachePath | Path (String)          | /cache/[tenant] | Path where file will be temporarily saved when retrieved .                                  |
| maxQuota        | Integer (in kilobytes) | -1 (unlimited)  | Default max quota (quantity of data that can be downloaded by a user) for RAWDATA download. |
| cacheMaxSize    | Integer (in Bytes)     | 500000000       | Maximum size of the cache before it is cleaned                                              |

### Storage Location Configuration

| Name              | Type                 | Description                                                                         |
|-------------------|----------------------|-------------------------------------------------------------------------------------|
| name              | String               | Printed name of the storage location                                                |
| storageType       | Enum (String)        | [Online or Nearline](../overview.md)                                                |
| priority          | Plugin configuration | Higher priorities will be accessed first if a file is stored on multiple locations. |
| allocatedSizeInKo | Integer              | Size of the location. If full, no more file can be added.                           |

### Plugins configuration format

| Name          | Type    | Description                                                                   |
|---------------|---------|-------------------------------------------------------------------------------|
| pluginId      | String  | Plugin unique identifier. Used to identify which plugin to use                |
| businessId    | String  | Plugin configuration unique identifier                                        |
| label         | String  | Plugin configuration label.                                                   |
| version       | String  | Plugin configuration compatible version                                       |
| priorityOrder | Integer | plugin configuration priority.                                                |
| active        | Boolean | Enable or disable plugin configuration                                        |
| parameters    | Object  | Json format of the plugin configuration parameters (specific for each plugin) | 

### Local plugin specific parameters

| Parameter Name                      | Type                | Default   | Description                                                                                    | 
|-------------------------------------|---------------------|-----------|------------------------------------------------------------------------------------------------|
| Storage_URL                         | Path (String)       |           | Root path on the file system where the files will be stored (/rootPath/subdirectory/checksum)  | 
| Local_Delete_Option                 | Boolean             | false     | If false, the files won't be deleted from the file system when they are deleted from regards   |
| Local_Storage_Max_File_Size_For_Zip | Integer (in bytes)  | 1000      | Maximal size of a file to be considered a small file so it uses the small file archival system |
| Local_Storage_Max_Zip_Size          | Integer (in bytes ) | 500000000 | Maximal size of an archive, no more files will be added once it reaches this size              |
| File_Naming_Strategy                | Enum (String)       | CHECKSUM  | Either CHECKSUM or FILENAME, determine how the file will be named on the file system           |

### S3 plugin specific parameters

| Parameter Name                             | Type                   | Default  | Description                                                                                                      | 
|--------------------------------------------|------------------------|----------|------------------------------------------------------------------------------------------------------------------|
| S3_Server_Endpoint                         | Url (String)           |          | Endpoint where to reach the desired S3 server, this should contain the whole url and stop just before the bucket |
| S3_Server_Region                           | String                 |          | Region of the S3 server, this must match the region configured on the server                                     |
| S3_Server_Key                              | String                 |          | Key (user) to access the server                                                                                  |
| S3_Server_Secret                           | String                 |          | Secret (password) to access the server                                                                           |
| S3_Server_Bucket                           | String                 |          | Name of the S3 bucket where the files should be stored                                                           |
| Root_Path                                  | Path (String)          | /        | Root path on the S3 server where the files will be stored (host/pathtobucket/rootPath/subdirectory/checksum)     | 
| Upload_With_Multipart_Threshold_In_Mb      | Integer (in megabytes) | 5        | For multipart upload, the file will be cut in part of this size                                                  | 
| Upload_With_Multipart_Parallel_Part_Number | Integer                | 5        | For multipart upload, number of parts that will be loaded in memory in REGARDS                                   | 
| S3_Allow_Deletion                          | Boolean                | false    | If false, the files won't be deleted from the file system when they are deleted from regards                     |
| File_Naming_Strategy                       | Enum (String)          | CHECKSUM | Either CHECKSUM or FILENAME, determine how the file will be named on the file system                             |

### S3 Glacier plugin specific parameters

| Parameter Name                                 | Type                   | Default  | Description                                                                                                       | 
|------------------------------------------------|------------------------|----------|-------------------------------------------------------------------------------------------------------------------|
| Glacier_Workspace_Path                         | Path (String)          |          | Path to the workspace were the plugin will process the small files and regroup them in archives                   |
| Glacier_Small_File_Max_Size                    | Integer (in bytes)     | 1048576  | Maximal size of a file to be considered a small file so it uses the small file archival system                    |
| Glacier_Small_File_Archive_Max_Size            | Integer (in bytes)     | 10485760 | Maximal size of an archive, the archive will be closed and stored when it reaches this size                       |
| Glacier_Small_File_Archive_Duration_In_Hours   | Integer (in hours)     | 24       | Maximal age of an archive after which it will be closed and stored, even if it isn't full                         |
| Glacier_Parallel_Restore_Number                | Integer                | 20       | Number of files restoration in parallel, each restoration need an active thread idling until the file is restored |
| Glacier_Parallel_Upload_Number                 | Integer                | 5        | Number of upload to process at the same time, an higher number will require more resources from the microservice  |
| Glacier_Local_Workspace_File_Lifetime_In_Hours | Integer (in hours)     | 24       | How long will the restored small file archived will be kept in regards cache before being deleted                 |
| Glacier_S3_Access_Try_Timeout                  | Integer (in seconds)   | 3600     | How long the restoration process will wait for the restored file to be available before failing                   |
| standardStorageClassName                       | String                 | STANDARD | The name of the storage class were files are moved to be available (Tier 2)                                       |
| useExternalCacheName                           | Boolean                | false    | If true, this storage will use the cache of the S3 Server instead of the cache of REGARDS                         |
| S3_Server_Endpoint                             | Url (String)           |          | Endpoint where to reach the desired S3 server, this should contain the whole url and stop just before the bucket  |
| S3_Server_Region                               | String                 |          | Region of the S3 server, this must match the region configured on the server                                      |
| S3_Server_Key                                  | String                 |          | Key (user) to access the server                                                                                   |
| S3_Server_Secret                               | String                 |          | Secret (password) to access the server                                                                            |
| S3_Server_Bucket                               | String                 |          | Name of the S3 bucket where the files should be stored                                                            |
| Root_Path                                      | Path (String)          | /        | Root path on the S3 server where the files will be stored (host/pathtobucket/rootPath/subdirectory/checksum)      | 
| Upload_With_Multipart_Threshold_In_Mb          | Integer (in megabytes) | 5        | For multipart upload, the file will be cut in part of this size                                                   | 
| Upload_With_Multipart_Parallel_Part_Number     | Integer                | 5        | For multipart upload, number of parts that will be loaded in memory in REGARDS                                    | 
| S3_Allow_Deletion                              | Boolean                | false    | If false, the files won't be deleted from the file system when they are deleted from regards                      |
| File_Naming_Strategy                           | Enum (String)          | CHECKSUM | Either CHECKSUM or FILENAME, determine how the file will be named on the file system                              |

## Example

```json title='rs-storage configuration file example'
{
  "microservice": "rs-storage",
  "modules": [
    {
      "module": {
        "id": "storage",
        "name": "Storage module",
        "description": "Handle storage locations, and files management processes",
        "version": "1.6.0",
        "author": "REGARDS",
        "legalOwner": "CNES",
        "documentation": "https://github.com/RegardsOss"
      },
      "resetBeforeImport": false,
      "configuration": [
        {
          "key": "fr.cnes.regards.framework.modules.tenant.settings.domain.DynamicTenantSetting",
          "value": {
            "name": "rateLimit",
            "description": "Default rate limit for RAWDATA download. Must be \u003e -1.",
            "value": "-1",
            "defaultValue": "-1",
            "className": "java.lang.Long",
            "containsSensitiveParameters": false
          }
        },
        {
          "key": "fr.cnes.regards.framework.modules.tenant.settings.domain.DynamicTenantSetting",
          "value": {
            "name": "tenantCachePath",
            "description": "Cache path for this tenant. The path does not need to exist but it has to be readable and writable if it does.",
            "value": "\"/cache/tenant1\"",
            "defaultValue": "\"/cache/tenant1\"",
            "className": "sun.nio.fs.UnixPath",
            "containsSensitiveParameters": false
          }
        },
        {
          "key": "fr.cnes.regards.framework.modules.tenant.settings.domain.DynamicTenantSetting",
          "value": {
            "name": "maxQuota",
            "description": "Default max quota for RAWDATA download. Must be \u003e -1.",
            "value": "-1",
            "defaultValue": "-1",
            "className": "java.lang.Long",
            "containsSensitiveParameters": false
          }
        },
        {
          "key": "fr.cnes.regards.framework.modules.tenant.settings.domain.DynamicTenantSetting",
          "value": {
            "name": "cacheMaxSize",
            "description": "Cache max size for this tenant in kilo-bytes. it has to be \u003e0",
            "value": "500000000",
            "defaultValue": "500000000",
            "className": "java.lang.Long",
            "containsSensitiveParameters": false
          }
        },
        {
          "key": "fr.cnes.regards.modules.storage.domain.database.StorageLocationConfiguration",
          "value": {
            "name": "Local",
            "pluginConfiguration": {
              "pluginId": "Local",
              "label": "Local",
              "businessId": "Local",
              "version": "1.0",
              "priorityOrder": 0,
              "active": true,
              "parameters": [
                {
                  "name": "Storage_URL",
                  "type": "STRING",
                  "value": "/storages/tenant1/local",
                  "dynamic": false
                },
                {
                  "name": "Local_Delete_Option",
                  "type": "BOOLEAN",
                  "value": true,
                  "dynamic": false
                }
              ]
            },
            "storageType": "ONLINE",
            "priority": 0,
            "allocatedSizeInKo": 150000000
          }
        },
        {
          "key": "fr.cnes.regards.modules.storage.domain.database.StorageLocationConfiguration",
          "value": {
            "name": "S3-Minio",
            "pluginConfiguration": {
              "pluginId": "S3",
              "label": "S3-Minio",
              "businessId": "S3-Minio",
              "version": "1.0",
              "priorityOrder": 0,
              "active": true,
              "parameters": [
                {
                  "name": "S3_Server_Bucket",
                  "type": "STRING",
                  "value": "bucket-tenant1",
                  "dynamic": false
                },
                {
                  "name": "S3_Server_Region",
                  "type": "STRING",
                  "value": "fr",
                  "dynamic": false
                },
                {
                  "name": "S3_Server_Secret",
                  "type": "STRING",
                  "value": "abcdefghijklmnopqrstuvwxyz",
                  "dynamic": false
                },
                {
                  "name": "S3_Server_Endpoint",
                  "type": "STRING",
                  "value": "http://rs-minio:9000",
                  "dynamic": false
                },
                {
                  "name": "Upload_With_Multipart_Threshold_In_Mb",
                  "type": "INTEGER",
                  "value": 5,
                  "dynamic": false
                },
                {
                  "name": "S3_Allow_Deletion",
                  "type": "BOOLEAN",
                  "value": false,
                  "dynamic": false
                },
                {
                  "name": "Upload_With_Multipart_Parallel_Part_Number",
                  "type": "INTEGER",
                  "value": 5,
                  "dynamic": false
                },
                {
                  "name": "S3_Server_Key",
                  "type": "STRING",
                  "value": "regards",
                  "dynamic": false
                }
              ]
            },
            "storageType": "ONLINE",
            "priority": 3,
            "allocatedSizeInKo": 5000000
          }
        },
        {
          "key": "fr.cnes.regards.modules.storage.domain.database.StorageLocationConfiguration",
          "value": {
            "name": "S3-Glacier",
            "pluginConfiguration": {
              "pluginId": "S3Glacier",
              "label": "S3-Glacier",
              "businessId": "S3-Glacier",
              "version": "1.0",
              "priorityOrder": 0,
              "active": true,
              "parameters": [
                {
                  "name": "S3_Server_Bucket",
                  "type": "STRING",
                  "value": "bucket-glacier-tenant1",
                  "dynamic": false
                },
                {
                  "name": "Glacier_Small_File_Archive_Duration_In_Hours",
                  "type": "INTEGER",
                  "value": 24,
                  "dynamic": false
                },
                {
                  "name": "S3_Server_Secret",
                  "type": "STRING",
                  "value": "abcdefghijklmnopqrstuvwxyz",
                  "dynamic": false
                },
                {
                  "name": "S3_Server_Region",
                  "type": "STRING",
                  "value": "fr",
                  "dynamic": false
                },
                {
                  "name": "S3_Server_Endpoint",
                  "type": "STRING",
                  "value": "http://rs-minio:9000",
                  "dynamic": false
                },
                {
                  "name": "Glacier_Workspace_Path",
                  "type": "STRING",
                  "value": "/storages/glacier/tenant1",
                  "dynamic": false
                },
                {
                  "name": "Glacier_S3_Access_Try_Timeout",
                  "type": "INTEGER",
                  "value": 3600,
                  "dynamic": false
                },
                {
                  "name": "Glacier_Local_Workspace_File_Lifetime_In_Hours",
                  "type": "INTEGER",
                  "value": 24,
                  "dynamic": false
                },
                {
                  "name": "Upload_With_Multipart_Threshold_In_Mb",
                  "type": "INTEGER",
                  "value": 5,
                  "dynamic": false
                },
                {
                  "name": "Upload_With_Multipart_Parallel_Part_Number",
                  "type": "INTEGER",
                  "value": 5,
                  "dynamic": false
                },
                {
                  "name": "Glacier_Parallel_Upload_Number",
                  "type": "INTEGER",
                  "value": 20,
                  "dynamic": false
                },
                {
                  "name": "Glacier_Small_File_Max_Size",
                  "type": "INTEGER",
                  "value": 1024,
                  "dynamic": false
                },
                {
                  "name": "Root_Path",
                  "type": "STRING",
                  "value": "tenant1/example",
                  "dynamic": false
                },
                {
                  "name": "File_Naming_Strategy",
                  "type": "STRING",
                  "value": "CHECKSUM",
                  "dynamic": false
                },
                {
                  "name": "Glacier_Parallel_Restore_Number",
                  "type": "INTEGER",
                  "value": 20,
                  "dynamic": false
                },
                {
                  "name": "useExternalCacheName",
                  "type": "BOOLEAN",
                  "value": false,
                  "dynamic": false
                },
                {
                  "name": "S3_Allow_Deletion",
                  "type": "BOOLEAN",
                  "value": true,
                  "dynamic": false
                },
                {
                  "name": "Glacier_Small_File_Archive_Max_Size",
                  "type": "INTEGER",
                  "value": 20000,
                  "dynamic": false
                },
                {
                  "name": "S3_Server_Key",
                  "type": "STRING",
                  "value": "regards",
                  "dynamic": false
                }
              ]
            },
            "storageType": "NEARLINE",
            "priority": 1,
            "allocatedSizeInKo": 500000000
          }
        }
      ]
    }
  ]
}
```
