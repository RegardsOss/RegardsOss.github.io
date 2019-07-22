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
    "type" : "DOCUMENT",
    "id" : 17,
    "ipId" : "URN:AIP:DOCUMENT:null:49a7cb32-9a0c-4997-9a4a-706901a1a5d9:V1",
    "creationDate" : "2019-07-19T17:14:31.809Z",
    "model" : {
      "id" : 8,
      "name" : "documentModelName1",
      "description" : "model desc",
      "type" : "COLLECTION"
    },
    "tags" : [ ],
    "groups" : [ ],
    "feature" : {
      "providerId" : "ProviderId3",
      "entityType" : "DOCUMENT",
      "label" : "label",
      "model" : "documentModelName1",
      "files" : { },
      "tags" : [ ],
      "id" : "URN:AIP:DOCUMENT:null:49a7cb32-9a0c-4997-9a4a-706901a1a5d9:V1",
      "properties" : { },
      "type" : "Feature"
    }
  },
  "links" : [ {
    "rel" : "self",
    "href" : "http://localhost:8080/documents/17"
  }, {
    "rel" : "list",
    "href" : "http://localhost:8080/documents"
  }, {
    "rel" : "update",
    "href" : "http://localhost:8080/documents/17"
  } ]
}
```
