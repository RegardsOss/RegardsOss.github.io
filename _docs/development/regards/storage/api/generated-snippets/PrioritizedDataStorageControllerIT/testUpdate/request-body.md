    ***Data params**

```json
    {
  "id" : 259,
  "dataStorageConfiguration" : {
    "id" : 259,
    "pluginId" : "Local",
    "label" : "PrioritizedDataStorageControllerIT_1",
    "version" : "1.0",
    "priorityOrder" : 0,
    "active" : false,
    "pluginClassName" : "fr.cnes.regards.modules.storage.plugin.datastorage.local.LocalDataStorage",
    "interfaceNames" : [ "fr.cnes.regards.modules.storage.domain.plugin.IDataStorage", "fr.cnes.regards.modules.storage.domain.plugin.IOnlineDataStorage" ],
    "parameters" : [ {
      "id" : 166,
      "name" : "Storage_URL",
      "value" : "file:/app_to_build/storage/storage-rest/target/AIPControllerIT",
      "dynamic" : false,
      "dynamicsValues" : [ ],
      "onlyDynamic" : false
    }, {
      "id" : 167,
      "name" : "Local_Total_Space",
      "value" : 9000000000000000,
      "dynamic" : false,
      "dynamicsValues" : [ ],
      "onlyDynamic" : false
    } ]
  },
  "dataStorageType" : "ONLINE",
  "priority" : 0
}
        ```
