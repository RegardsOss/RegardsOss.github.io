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
    "id" : 12,
    "ipId" : "URN:AIP:COLLECTION:PROJECT:4039f47a-ffa6-4a5b-9610-05c3daf00744:V1",
    "creationDate" : "2020-05-11T11:36:33.285Z",
    "model" : {
      "id" : 6,
      "name" : "modelName1",
      "description" : "model desc",
      "type" : "COLLECTION"
    },
    "tags" : [ "URN:AIP:COLLECTION:PROJECT:31d4900f-18ec-462a-85b8-c8dc7ab62999:V1" ],
    "groups" : [ ],
    "feature" : {
      "providerId" : "ProviderId1",
      "entityType" : "COLLECTION",
      "label" : "label",
      "model" : "modelName1",
      "files" : { },
      "tags" : [ "URN:AIP:COLLECTION:PROJECT:31d4900f-18ec-462a-85b8-c8dc7ab62999:V1" ],
      "id" : "URN:AIP:COLLECTION:PROJECT:4039f47a-ffa6-4a5b-9610-05c3daf00744:V1",
      "properties" : { },
      "type" : "Feature"
    }
  },
  "links" : [ {
    "rel" : "self",
    "href" : "http://localhost:8080/collections/12"
  }, {
    "rel" : "list",
    "href" : "http://localhost:8080/collections"
  }, {
    "rel" : "delete",
    "href" : "http://localhost:8080/collections/12"
  }, {
    "rel" : "update",
    "href" : "http://localhost:8080/collections/12"
  } ]
}
```
