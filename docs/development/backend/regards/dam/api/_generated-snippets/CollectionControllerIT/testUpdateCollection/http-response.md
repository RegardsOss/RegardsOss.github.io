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
    "type" : "COLLECTION",
    "id" : 10,
    "ipId" : "URN:AIP:COLLECTION:PROJECT:a644b4f0-5d97-494f-a884-5dd7e72d2e35:V1",
    "creationDate" : "2021-09-16T19:08:24.078Z",
    "lastUpdate" : "2021-09-16T19:08:24.102Z",
    "model" : {
      "id" : 5,
      "name" : "modelName1",
      "description" : "model desc",
      "type" : "COLLECTION"
    },
    "tags" : [ "URN:AIP:COLLECTION:PROJECT:a4ff0d81-f763-48e4-8e93-e57356d741c2:V1" ],
    "groups" : [ ],
    "feature" : {
      "providerId" : "ProviderId1new",
      "entityType" : "COLLECTION",
      "label" : "collection1clone",
      "model" : "modelName1",
      "files" : { },
      "tags" : [ "URN:AIP:COLLECTION:PROJECT:a4ff0d81-f763-48e4-8e93-e57356d741c2:V1" ],
      "last" : false,
      "version" : 1,
      "id" : "URN:AIP:COLLECTION:PROJECT:a644b4f0-5d97-494f-a884-5dd7e72d2e35:V1",
      "properties" : { },
      "type" : "Feature"
    }
  },
  "links" : [ {
    "rel" : "update",
    "href" : "http://localhost:8080/collections/10"
  } ]
}
```
