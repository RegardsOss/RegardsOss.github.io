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
    "id" : 12,
    "ipId" : "URN:AIP:COLLECTION:PROJECT:95222d0c-1b7e-4fc2-a145-c2ec0085c14c:V1",
    "creationDate" : "2021-09-16T19:08:24.461Z",
    "model" : {
      "id" : 6,
      "name" : "modelName1",
      "description" : "model desc",
      "type" : "COLLECTION"
    },
    "tags" : [ "URN:AIP:COLLECTION:PROJECT:33cc68ff-4360-4f4a-a9fc-07cee458406b:V1" ],
    "groups" : [ ],
    "feature" : {
      "providerId" : "ProviderId1",
      "entityType" : "COLLECTION",
      "label" : "label",
      "model" : "modelName1",
      "files" : { },
      "tags" : [ "URN:AIP:COLLECTION:PROJECT:33cc68ff-4360-4f4a-a9fc-07cee458406b:V1" ],
      "last" : false,
      "version" : 1,
      "id" : "URN:AIP:COLLECTION:PROJECT:95222d0c-1b7e-4fc2-a145-c2ec0085c14c:V1",
      "properties" : { },
      "type" : "Feature"
    }
  },
  "links" : [ {
    "rel" : "self",
    "href" : "http://localhost:8080/collections/12"
  } ]
}
```
