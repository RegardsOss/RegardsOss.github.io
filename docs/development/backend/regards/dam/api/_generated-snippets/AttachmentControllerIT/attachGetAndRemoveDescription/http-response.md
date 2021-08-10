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
    "type" : "COLLECTION",
    "id" : 5,
    "ipId" : "URN:AIP:COLLECTION:PROJECT:9b6b6db5-8cb2-4c49-82ea-0f1fc8c7d4c3:V1",
    "creationDate" : "2020-05-11T11:39:01.379Z",
    "lastUpdate" : "2020-05-11T11:39:02.143Z",
    "model" : {
      "id" : 5,
      "name" : "MODEL",
      "description" : "Empty model for testing",
      "type" : "COLLECTION"
    },
    "tags" : [ ],
    "groups" : [ ],
    "feature" : {
      "providerId" : "COL1",
      "entityType" : "COLLECTION",
      "label" : "Collection label",
      "model" : "MODEL",
      "files" : { },
      "tags" : [ ],
      "id" : "URN:AIP:COLLECTION:PROJECT:9b6b6db5-8cb2-4c49-82ea-0f1fc8c7d4c3:V1",
      "properties" : { },
      "type" : "Feature"
    }
  },
  "links" : [ ]
}
```
