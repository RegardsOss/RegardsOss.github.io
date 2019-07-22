#### Request

* **Code:** 200 OK

        **Headers:**

        `Pragma:no-cache`
        `Content-Disposition:attachment; filename="config-storage-service-test.json"`
        `X-XSS-Protection:1; mode=block`
        `X-Frame-Options:DENY`
        `Expires:0`
        `X-Content-Type-Options:nosniff`
        `Access-Control-Allow-Headers:authorization, content-type, scope`
        `Access-Control-Max-Age:3600`
        `Content-Type:application/json`
        `Access-Control-Allow-Origin:*`
        `Cache-Control:no-cache, no-store, max-age=0, must-revalidate`
        `Access-Control-Allow-Methods:POST, PUT, GET, OPTIONS, DELETE`

        **Content:**

```json
    
{
  "microservice" : "storage-service-test",
  "modules" : [ {
    "module" : {
      "id" : "storage",
      "name" : "Storage module",
      "description" : "Manage Archival Information Package (AIP) storage",
      "version" : "0.4.1",
      "author" : "CSSI",
      "legalOwner" : "CNES",
      "documentation" : "https://github.com/RegardsOss"
    },
    "configuration" : [ {
      "key" : "fr.cnes.regards.framework.modules.plugins.domain.PluginConfiguration",
      "value" : {
        "pluginId" : "Local",
        "label" : "fr.cnes.regards.modules.storage.rest.StorageConfigurationManagerIT_PDS1",
        "version" : "1.0",
        "priorityOrder" : 0,
        "active" : true,
        "pluginClassName" : "fr.cnes.regards.modules.storage.plugin.datastorage.local.LocalDataStorage",
        "interfaceNames" : [ "fr.cnes.regards.modules.storage.domain.plugin.IDataStorage", "fr.cnes.regards.modules.storage.domain.plugin.IOnlineDataStorage" ],
        "parameters" : [ {
          "name" : "Storage_URL",
          "value" : "file:/app_to_build/storage/storage-rest/target/PrioritizedDataStorageServiceIT",
          "dynamic" : false,
          "dynamicsValues" : [ ],
          "onlyDynamic" : false
        }, {
          "name" : "Local_Total_Space",
          "value" : 9000000000000000,
          "dynamic" : false,
          "dynamicsValues" : [ ],
          "onlyDynamic" : false
        } ]
      }
    }, {
      "key" : "fr.cnes.regards.framework.modules.plugins.domain.PluginConfiguration",
      "value" : {
        "pluginId" : "Local",
        "label" : "fr.cnes.regards.modules.storage.rest.StorageConfigurationManagerIT_PDS2",
        "version" : "1.0",
        "priorityOrder" : 0,
        "active" : true,
        "pluginClassName" : "fr.cnes.regards.modules.storage.plugin.datastorage.local.LocalDataStorage",
        "interfaceNames" : [ "fr.cnes.regards.modules.storage.domain.plugin.IDataStorage", "fr.cnes.regards.modules.storage.domain.plugin.IOnlineDataStorage" ],
        "parameters" : [ {
          "name" : "Storage_URL",
          "value" : "file:/app_to_build/storage/storage-rest/target/PrioritizedDataStorageServiceIT",
          "dynamic" : false,
          "dynamicsValues" : [ ],
          "onlyDynamic" : false
        }, {
          "name" : "Local_Total_Space",
          "value" : 9000000000000000,
          "dynamic" : false,
          "dynamicsValues" : [ ],
          "onlyDynamic" : false
        } ]
      }
    }, {
      "key" : "fr.cnes.regards.framework.modules.plugins.domain.PluginConfiguration",
      "value" : {
        "pluginId" : "Local",
        "label" : "fr.cnes.regards.modules.storage.rest.StorageConfigurationManagerIT_PDS3",
        "version" : "1.0",
        "priorityOrder" : 0,
        "active" : true,
        "pluginClassName" : "fr.cnes.regards.modules.storage.plugin.datastorage.local.LocalDataStorage",
        "interfaceNames" : [ "fr.cnes.regards.modules.storage.domain.plugin.IDataStorage", "fr.cnes.regards.modules.storage.domain.plugin.IOnlineDataStorage" ],
        "parameters" : [ {
          "name" : "Storage_URL",
          "value" : "file:/app_to_build/storage/storage-rest/target/PrioritizedDataStorageServiceIT",
          "dynamic" : false,
          "dynamicsValues" : [ ],
          "onlyDynamic" : false
        }, {
          "name" : "Local_Total_Space",
          "value" : 9000000000000000,
          "dynamic" : false,
          "dynamicsValues" : [ ],
          "onlyDynamic" : false
        } ]
      }
    }, {
      "key" : "fr.cnes.regards.framework.modules.plugins.domain.PluginConfiguration",
      "value" : {
        "pluginId" : "FakeSecurityDelegation",
        "label" : "fr.cnes.regards.modules.storage.rest.StorageConfigurationManagerIT_SD",
        "version" : "1.0",
        "priorityOrder" : 0,
        "active" : true,
        "pluginClassName" : "fr.cnes.regards.modules.storage.rest.FakeSecurityDelegation",
        "interfaceNames" : [ "fr.cnes.regards.modules.storage.domain.plugin.ISecurityDelegation" ],
        "parameters" : [ ]
      }
    }, {
      "key" : "fr.cnes.regards.framework.modules.plugins.domain.PluginConfiguration",
      "value" : {
        "pluginId" : "DefaultAllocationStrategyPlugin",
        "label" : "fr.cnes.regards.modules.storage.rest.StorageConfigurationManagerIT_AS",
        "version" : "1.0",
        "priorityOrder" : 0,
        "active" : true,
        "pluginClassName" : "fr.cnes.regards.modules.storage.plugin.allocation.strategy.DefaultAllocationStrategyPlugin",
        "interfaceNames" : [ "fr.cnes.regards.modules.storage.domain.plugin.IAllocationStrategy" ],
        "parameters" : [ ]
      }
    } ]
  } ]
}
```
