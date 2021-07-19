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
    "name" : "target",
    "nbStorageError" : 0,
    "nbDeletionError" : 0,
    "storageRunning" : false,
    "deletionRunning" : false,
    "copyRunning" : false,
    "configuration" : {
      "id" : 13,
      "name" : "target",
      "pluginConfiguration" : {
        "id" : 11,
        "pluginId" : "SimpleOnlineTest",
        "label" : "target",
        "businessId" : "target",
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
      "allocatedSizeInKo" : 1000000
    }
  },
  "links" : [ {
    "rel" : "up",
    "href" : "http://localhost:8080/storages/target/up"
  }, {
    "rel" : "deleteFiles",
    "href" : "http://localhost:8080/storages/target/files"
  }, {
    "rel" : "update",
    "href" : "http://localhost:8080/storages/target"
  }, {
    "rel" : "delete",
    "href" : "http://localhost:8080/storages/target"
  } ]
}
```
