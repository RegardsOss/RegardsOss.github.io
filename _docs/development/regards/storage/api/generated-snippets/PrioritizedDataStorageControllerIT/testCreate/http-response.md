#### Request

* **Code:** 201 Created

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
    "id" : 256,
    "dataStorageConfiguration" : {
      "id" : 256,
      "pluginId" : "Local",
      "label" : "PrioritizedDataStorageControllerIT_1",
      "version" : "1.0",
      "priorityOrder" : 0,
      "active" : true,
      "pluginClassName" : "fr.cnes.regards.modules.storage.plugin.datastorage.local.LocalDataStorage",
      "interfaceNames" : [ "fr.cnes.regards.modules.storage.domain.plugin.IDataStorage", "fr.cnes.regards.modules.storage.domain.plugin.IOnlineDataStorage" ],
      "parameters" : [ {
        "id" : 160,
        "name" : "Storage_URL",
        "value" : "file:/app_to_build/storage/storage-rest/target/AIPControllerIT",
        "dynamic" : false,
        "dynamicsValues" : [ ],
        "onlyDynamic" : false
      }, {
        "id" : 161,
        "name" : "Local_Total_Space",
        "value" : 9000000000000000,
        "dynamic" : false,
        "dynamicsValues" : [ ],
        "onlyDynamic" : false
      } ]
    },
    "dataStorageType" : "ONLINE",
    "priority" : 0
  },
  "links" : [ {
    "rel" : "list",
    "href" : "http://localhost:8080/storages"
  }, {
    "rel" : "create",
    "href" : "http://localhost:8080/storages"
  }, {
    "rel" : "self",
    "href" : "http://localhost:8080/storages/256"
  } ]
}
        ```
