* **Code:** 200 OK

  **Headers:**

  `Access-Control-Allow-Origin: *`
  `Access-Control-Allow-Methods: POST, PUT, GET, OPTIONS, DELETE`
  `Access-Control-Allow-Headers: authorization, content-type, scope`
  `Access-Control-Max-Age: 3600`
  `X-Application-Context: Test application:default,test,noschedule:-1`
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
    "id" : 258,
    "owner" : "default_user@regards.fr",
    "datasetSelections" : [ {
      "id" : 255,
      "datasetIpid" : "URN:AIP:DATASET:Olivier:4af7fa7f-110e-42c8-b434-7c863c280548:V1",
      "datasetLabel" : "DATASET1",
      "objectsCount" : 5,
      "filesCount" : 10,
      "filesSize" : 124452,
      "itemsSelections" : [ {
        "date" : "2018-09-07T09:37:19.221Z",
        "selectionRequest" : {
          "engineType" : "engine",
          "searchParameters" : {
            "q" : [ "" ]
          },
          "selectionDate" : "2018-09-07T09:37:19.221Z"
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
