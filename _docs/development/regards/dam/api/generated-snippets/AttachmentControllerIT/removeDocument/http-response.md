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
    "id" : 2,
    "ipId" : "URN:AIP:COLLECTION:PROJECT:08326caa-ef20-45ab-92e7-3c1238d2be37:V1",
    "creationDate" : "2019-07-19T17:15:15.107Z",
    "lastUpdate" : "2019-07-19T17:15:15.173Z",
    "model" : {
      "id" : 2,
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
      "id" : "URN:AIP:COLLECTION:PROJECT:08326caa-ef20-45ab-92e7-3c1238d2be37:V1",
      "properties" : { },
      "type" : "Feature"
    }
  },
  "links" : [ ]
}
```
