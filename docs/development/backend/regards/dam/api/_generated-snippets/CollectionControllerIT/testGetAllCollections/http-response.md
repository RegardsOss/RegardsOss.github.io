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
  "metadata" : {
    "size" : 10,
    "totalElements" : 2,
    "totalPages" : 1,
    "number" : 0
  },
  "content" : [ {
    "content" : {
      "type" : "COLLECTION",
      "id" : 3,
      "ipId" : "URN:AIP:COLLECTION:PROJECT:66a9b2b5-9850-4493-920a-4ed5ba9c6661:V1",
      "creationDate" : "2021-09-16T19:08:22.862Z",
      "model" : {
        "id" : 2,
        "name" : "modelName1",
        "description" : "model desc",
        "type" : "COLLECTION"
      },
      "tags" : [ "URN:AIP:COLLECTION:PROJECT:90e6cd27-f4cf-4d75-9b14-541c27aca3e3:V1" ],
      "groups" : [ ],
      "feature" : {
        "providerId" : "ProviderId1",
        "entityType" : "COLLECTION",
        "label" : "label",
        "model" : "modelName1",
        "files" : { },
        "tags" : [ "URN:AIP:COLLECTION:PROJECT:90e6cd27-f4cf-4d75-9b14-541c27aca3e3:V1" ],
        "last" : false,
        "version" : 1,
        "id" : "URN:AIP:COLLECTION:PROJECT:66a9b2b5-9850-4493-920a-4ed5ba9c6661:V1",
        "properties" : { },
        "type" : "Feature"
      }
    },
    "links" : [ {
      "rel" : "list",
      "href" : "http://localhost:8080/collections"
    } ]
  }, {
    "content" : {
      "type" : "COLLECTION",
      "id" : 4,
      "ipId" : "URN:AIP:COLLECTION:PROJECT:1ee1d46d-e47d-40ac-b778-fa5f0b42ac79:V1",
      "creationDate" : "2021-09-16T19:08:22.862Z",
      "model" : {
        "id" : 2,
        "name" : "modelName1",
        "description" : "model desc",
        "type" : "COLLECTION"
      },
      "tags" : [ ],
      "groups" : [ ],
      "feature" : {
        "providerId" : "ProviderId3",
        "entityType" : "COLLECTION",
        "label" : "label",
        "model" : "modelName1",
        "files" : { },
        "tags" : [ ],
        "last" : false,
        "version" : 1,
        "id" : "URN:AIP:COLLECTION:PROJECT:1ee1d46d-e47d-40ac-b778-fa5f0b42ac79:V1",
        "properties" : { },
        "type" : "Feature"
      }
    },
    "links" : [ {
      "rel" : "list",
      "href" : "http://localhost:8080/collections"
    } ]
  } ],
  "links" : [ {
    "rel" : "self",
    "href" : "http://localhost:8080/collections?page=0&size=10&sort=id,asc"
  } ]
}
```
