#### Request

* **Code:** 200 OK

        **Headers:**

        `Pragma:no-cache`
        `X-XSS-Protection:1; mode=block`
        `Expires:0`
        `X-Frame-Options:DENY`
        `X-Content-Type-Options:nosniff`
        `Access-Control-Allow-Headers:authorization, content-type, scope`
        `Access-Control-Max-Age:3600`
        `Content-Type:application/json;charset=UTF-8`
        `Access-Control-Allow-Origin:*`
        `Cache-Control:no-cache, no-store, max-age=0, must-revalidate`
        `Access-Control-Allow-Methods:POST, PUT, GET, OPTIONS, DELETE`

        **Content:**

```json
    
{
  "content" : {
    "name" : "name",
    "nbFilesStored" : 0,
    "totalStoredFilesSizeKo" : 0,
    "nbStorageError" : 0,
    "nbDeletionError" : 0,
    "storageRunning" : false,
    "deletionRunning" : false,
    "copyRunning" : false,
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
  },
  "links" : [ {
    "rel" : "update",
    "href" : "http://localhost:8080/storages/name"
  } ]
}
```
