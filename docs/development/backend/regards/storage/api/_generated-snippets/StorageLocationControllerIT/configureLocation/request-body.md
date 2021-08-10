    ***Data params**

```json
    {
  "name" : "plop2",
  "storageRunning" : false,
  "deletionRunning" : false,
  "copyRunning" : false,
  "configuration" : {
    "name" : "plop2",
    "pluginConfiguration" : {
      "pluginId" : "SimpleOnlineTest",
      "label" : "plop2",
      "businessId" : "1e6de4d4-c74c-4f6c-b62b-8f8b7adb500e",
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
