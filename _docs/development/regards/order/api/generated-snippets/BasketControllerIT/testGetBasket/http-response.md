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
    "id" : 6,
    "owner" : "default_user@regards.fr",
    "datasetSelections" : [ {
      "id" : 4,
      "datasetIpid" : "URN:AIP:DATASET:Olivier:4af7fa7f-110e-42c8-b434-7c863c280548:V1",
      "datasetLabel" : "DATASET1",
      "objectsCount" : 5,
      "filesCount" : 10,
      "filesSize" : 124452,
      "itemsSelections" : [ {
        "date" : "2019-07-22T07:29:49.95Z",
        "selectionRequest" : {
          "engineType" : "engine",
          "searchParameters" : {
            "q" : [ "" ]
          },
          "selectionDate" : "2019-07-22T07:29:49.95Z"
        },
        "objectsCount" : 5,
        "filesCount" : 10,
        "filesSize" : 124452
      } ]
    } ]
  },
  "links" : [ ]
}
```
