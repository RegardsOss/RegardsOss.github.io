**Data params**

```json
{
  "name" : "plop2",
  "storageRunning" : false,
  "deletionRunning" : false,
  "copyRunning" : false,
  "allowsPhysicalDeletion" : false,
  "configuration" : {
    "name" : "plop2",
    "pluginConfiguration" : {
      "pluginId" : "SimpleOnlineTest",
      "label" : "plop2",
      "businessId" : "7ce089c8-3268-4496-ab7c-8390e3d3ef26",
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
    "storageType" : "OFFLINE",
    "allocatedSizeInKo" : 10000
  }
}
```
