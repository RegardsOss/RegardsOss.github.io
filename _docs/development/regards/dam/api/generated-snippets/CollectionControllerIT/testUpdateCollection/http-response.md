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
    "ipId" : "URN:AIP:COLLECTION:PROJECT:3c114c21-149d-4f1e-96d2-0f1f939a2bdf:V1",
    "creationDate" : "2020-05-11T11:36:31.844Z",
    "lastUpdate" : "2020-05-11T11:36:32.383Z",
    "model" : {
      "id" : 5,
      "name" : "modelName1",
      "description" : "model desc",
      "type" : "COLLECTION"
    },
    "tags" : [ "URN:AIP:COLLECTION:PROJECT:5590d3a2-1251-46fa-ae19-daf31f45bb37:V1" ],
    "groups" : [ ],
    "feature" : {
      "providerId" : "ProviderId1new",
      "entityType" : "COLLECTION",
      "label" : "collection1clone",
      "model" : "modelName1",
      "files" : { },
      "tags" : [ "URN:AIP:COLLECTION:PROJECT:5590d3a2-1251-46fa-ae19-daf31f45bb37:V1" ],
      "id" : "URN:AIP:COLLECTION:PROJECT:3c114c21-149d-4f1e-96d2-0f1f939a2bdf:V1",
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
