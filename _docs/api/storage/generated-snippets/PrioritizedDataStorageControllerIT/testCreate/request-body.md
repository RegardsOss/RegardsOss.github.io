* **Data params**

```json
 {
  "dataStorageConfiguration" : {
    "pluginId" : "Local",
    "label" : "PrioritizedDataStorageControllerIT_1",
    "version" : "1.0",
    "priorityOrder" : 0,
    "active" : true,
    "pluginClassName" : "fr.cnes.regards.modules.storage.plugin.datastorage.local.LocalDataStorage",
    "interfaceNames" : [ "fr.cnes.regards.modules.storage.domain.plugin.IDataStorage", "fr.cnes.regards.modules.storage.domain.plugin.IOnlineDataStorage" ],
    "parameters" : [ {
      "name" : "Local_Total_Space",
      "value" : 9000000000000000,
      "dynamic" : false,
      "dynamicsValues" : [ ],
      "onlyDynamic" : false
    }, {
      "name" : "Storage_URL",
      "value" : "file:/home/svissier/workspace/REGARDS/rs-storage/storage/storage-rest/target/AIPControllerIT",
      "dynamic" : false,
      "dynamicsValues" : [ ],
      "onlyDynamic" : false
    } ]
  },
  "dataStorageType" : "ONLINE"
}
```
