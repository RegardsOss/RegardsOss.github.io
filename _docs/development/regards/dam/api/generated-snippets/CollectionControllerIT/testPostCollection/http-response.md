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
    "type" : "COLLECTION",
    "id" : 7,
    "ipId" : "URN:AIP:COLLECTION:null:751343a9-eb1a-4b85-8d20-7fc378de9752:V1",
    "creationDate" : "2019-07-19T17:14:38.992Z",
    "model" : {
      "id" : 3,
      "name" : "modelName1",
      "description" : "model desc",
      "type" : "COLLECTION"
    },
    "tags" : [ ],
    "groups" : [ ],
    "feature" : {
      "providerId" : "COL2",
      "entityType" : "COLLECTION",
      "label" : "collection2",
      "model" : "modelName1",
      "files" : { },
      "tags" : [ ],
      "id" : "URN:AIP:COLLECTION:null:751343a9-eb1a-4b85-8d20-7fc378de9752:V1",
      "properties" : { },
      "type" : "Feature"
    }
  },
  "links" : [ {
    "rel" : "list",
    "href" : "http://localhost:8080/collections"
  }, {
    "rel" : "update",
    "href" : "http://localhost:8080/collections/7"
  } ]
}
        ```
