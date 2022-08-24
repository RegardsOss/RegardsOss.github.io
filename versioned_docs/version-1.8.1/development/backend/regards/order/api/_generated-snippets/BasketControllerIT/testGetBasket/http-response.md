### Response

* **Code:** 200 OK

**Headers:**

`X-Content-Type-Options:nosniff`  
`X-XSS-Protection:1; mode=block`  
`Cache-Control:no-cache, no-store, max-age=0, must-revalidate`  
`Pragma:no-cache`  
`Expires:0`  
`X-Frame-Options:DENY`  
`Access-Control-Allow-Origin:*`  
`Access-Control-Allow-Methods:POST, PUT, GET, OPTIONS, DELETE`  
`Access-Control-Allow-Headers:authorization, content-type, scope`  
`Access-Control-Max-Age:3600`  
`Content-Type:application/json;charset=UTF-8`  

**Content:**

```json
    
{
  "content" : {
    "id" : 7,
    "owner" : "default_user@regards.fr",
    "datasetSelections" : [ {
      "id" : 5,
      "datasetIpid" : "URN:AIP:DATASET:Olivier:4af7fa7f-110e-42c8-b434-7c863c280548:V1",
      "datasetLabel" : "DATASET1",
      "objectsCount" : 5,
      "filesCount" : 10,
      "filesSize" : 124452,
      "quota" : 8,
      "itemsSelections" : [ {
        "date" : "2021-09-16T20:37:18.142Z",
        "selectionRequest" : {
          "engineType" : "engine",
          "searchParameters" : {
            "q" : [ "" ]
          },
          "selectionDate" : "2021-09-16T20:37:18.142Z"
        },
        "objectsCount" : 5,
        "filesCount" : 10,
        "filesSize" : 124452,
        "quota" : 8
      } ]
    } ],
    "quota" : 8
  },
  "links" : [ ]
}
```
