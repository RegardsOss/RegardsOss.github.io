### Response

* **Code:** 201 Created

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
    "id" : 7,
    "ipId" : "URN:AIP:COLLECTION:null:1bf0257e-28a8-487a-ba6d-5ef1ba5e0220:V1",
    "creationDate" : "2021-09-16T19:08:23.332Z",
    "model" : {
      "id" : 3,
      "name" : "modelName1",
      "description" : "model desc",
      "type" : "COLLECTION"
    },
    "tags" : [ ],
    "groups" : [ ],
    "feature" : {
      "virtualId" : "URN:AIP:COLLECTION:null:1bf0257e-28a8-487a-ba6d-5ef1ba5e0220:LAST",
      "providerId" : "COL2",
      "entityType" : "COLLECTION",
      "label" : "collection2",
      "model" : "modelName1",
      "files" : { },
      "tags" : [ ],
      "last" : true,
      "version" : 1,
      "id" : "URN:AIP:COLLECTION:null:1bf0257e-28a8-487a-ba6d-5ef1ba5e0220:V1",
      "properties" : { },
      "type" : "Feature"
    }
  },
  "links" : [ ]
}
```
