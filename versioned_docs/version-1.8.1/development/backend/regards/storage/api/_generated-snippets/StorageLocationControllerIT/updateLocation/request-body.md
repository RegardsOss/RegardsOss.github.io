**Data params**

```json
{
  "name" : "name",
  "nbStorageError" : 0,
  "nbDeletionError" : 0,
  "storageRunning" : false,
  "deletionRunning" : false,
  "copyRunning" : false,
  "allowsPhysicalDeletion" : true,
  "configuration" : {
    "id" : 5,
    "name" : "name",
    "pluginConfiguration" : {
      "id" : 5,
      "pluginId" : "SimpleOnlineTest",
      "label" : "name",
      "businessId" : "name",
      "version" : "1.0",
      "priorityOrder" : 0,
      "active" : true,
      "parameters" : [ {
        "name" : "Storage_URL",
        "type" : "STRING",
        "value" : "target/ONLINE-STORAGE",
        "dynamic" : false
      }, {
        "name" : "delete_error_file_pattern",
        "type" : "STRING",
        "value" : "delErr.*",
        "dynamic" : false
      }, {
        "name" : "error_file_pattern",
        "type" : "STRING",
        "value" : "error.*",
        "dynamic" : false
      } ]
    },
    "storageType" : "ONLINE",
    "priority" : 1,
    "allocatedSizeInKo" : 10000
  }
}
```
