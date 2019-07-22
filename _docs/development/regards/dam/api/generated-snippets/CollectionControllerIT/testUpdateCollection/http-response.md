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
    "id" : 10,
    "ipId" : "URN:AIP:COLLECTION:PROJECT:e6487905-90e3-4245-bd8f-54bde6fd58c1:V1",
    "creationDate" : "2019-07-19T17:14:39.078Z",
    "lastUpdate" : "2019-07-19T17:14:39.108Z",
    "model" : {
      "id" : 5,
      "name" : "modelName1",
      "description" : "model desc",
      "type" : "COLLECTION"
    },
    "tags" : [ "URN:AIP:COLLECTION:PROJECT:0bf9da68-4e33-45b3-9704-e3e0188dc54c:V1" ],
    "groups" : [ ],
    "feature" : {
      "providerId" : "ProviderId1new",
      "entityType" : "COLLECTION",
      "label" : "collection1clone",
      "model" : "modelName1",
      "files" : { },
      "tags" : [ "URN:AIP:COLLECTION:PROJECT:0bf9da68-4e33-45b3-9704-e3e0188dc54c:V1" ],
      "id" : "URN:AIP:COLLECTION:PROJECT:e6487905-90e3-4245-bd8f-54bde6fd58c1:V1",
      "properties" : { },
      "type" : "Feature"
    }
  },
  "links" : [ {
    "rel" : "list",
    "href" : "http://localhost:8080/collections"
  }, {
    "rel" : "delete",
    "href" : "http://localhost:8080/collections/10"
  }, {
    "rel" : "update",
    "href" : "http://localhost:8080/collections/10"
  } ]
}
        ```
