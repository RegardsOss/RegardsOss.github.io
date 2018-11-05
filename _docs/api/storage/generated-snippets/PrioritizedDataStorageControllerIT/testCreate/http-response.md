* **Code:** 201 Created

  **Headers:**

  `Access-Control-Allow-Origin: *`
  `Access-Control-Allow-Methods: POST, PUT, GET, OPTIONS, DELETE`
  `Access-Control-Allow-Headers: authorization, content-type, scope`
  `Access-Control-Max-Age: 3600`
  `X-Application-Context: storage-service-test:default,test,noschedule:-1`
  `Content-Type: application/json;charset=UTF-8`
  `X-Content-Type-Options: nosniff`
  `X-XSS-Protection: 1; mode=block`
  `Cache-Control: no-cache, no-store, max-age=0, must-revalidate`
  `Pragma: no-cache`
  `Expires: 0`
  `X-Frame-Options: DENY`

  **Content:**

```json

{
  "content" : {
    "id" : 255,
    "dataStorageConfiguration" : {
      "id" : 255,
      "pluginId" : "Local",
      "label" : "PrioritizedDataStorageControllerIT_1",
      "version" : "1.0",
      "priorityOrder" : 0,
      "active" : true,
      "pluginClassName" : "fr.cnes.regards.modules.storage.plugin.datastorage.local.LocalDataStorage",
      "interfaceNames" : [ "fr.cnes.regards.modules.storage.domain.plugin.IDataStorage", "fr.cnes.regards.modules.storage.domain.plugin.IOnlineDataStorage" ],
      "parameters" : [ {
        "id" : 58,
        "name" : "Storage_URL",
        "value" : "file:/home/svissier/workspace/REGARDS/rs-storage/storage/storage-rest/target/AIPControllerIT",
        "dynamic" : false,
        "dynamicsValues" : [ ],
        "onlyDynamic" : false
      }, {
        "id" : 59,
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
    "href" : "http://localhost:8080/storages/255"
  } ]
}
```
