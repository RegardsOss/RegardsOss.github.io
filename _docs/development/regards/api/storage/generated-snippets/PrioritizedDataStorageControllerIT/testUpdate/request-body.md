* **Data params**

```json
 {
  "id" : 7,
  "dataStorageConfiguration" : {
    "id" : 7,
    "pluginId" : "Local",
    "label" : "PrioritizedDataStorageControllerIT_1",
    "version" : "1.0",
    "priorityOrder" : 0,
    "active" : false,
    "pluginClassName" : "fr.cnes.regards.modules.storage.plugin.datastorage.local.LocalDataStorage",
    "interfaceNames" : [ "fr.cnes.regards.modules.storage.domain.plugin.IDataStorage", "fr.cnes.regards.modules.storage.domain.plugin.IOnlineDataStorage" ],
    "parameters" : [ {
      "id" : 13,
      "name" : "Local_Total_Space",
      "value" : 9000000000000000,
      "dynamic" : false,
      "dynamicsValues" : [ ],
      "onlyDynamic" : false
    }, {
      "id" : 14,
      "name" : "Storage_URL",
      "value" : "file:/home/msordi/git/rs-storage/storage/storage-rest/target/AIPControllerIT",
      "dynamic" : false,
      "dynamicsValues" : [ ],
      "onlyDynamic" : false
    } ]
  },
  "dataStorageType" : "ONLINE",
  "priority" : 0
}
```
