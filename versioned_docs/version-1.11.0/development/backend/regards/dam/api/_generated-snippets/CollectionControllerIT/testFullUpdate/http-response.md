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
    "id" : 1,
    "ipId" : "URN:AIP:COLLECTION:PROJECT:ae35419a-4ded-45a3-a443-4a746619c456:V1",
    "creationDate" : "2021-09-16T19:08:22.376Z",
    "lastUpdate" : "2021-09-16T19:08:22.487Z",
    "model" : {
      "id" : 1,
      "name" : "modelName1",
      "description" : "model desc",
      "type" : "COLLECTION"
    },
    "tags" : [ ],
    "groups" : [ ],
    "feature" : {
      "providerId" : "ProviderId1new",
      "entityType" : "COLLECTION",
      "label" : "label",
      "model" : "modelName1",
      "files" : { },
      "tags" : [ ],
      "last" : false,
      "version" : 1,
      "id" : "URN:AIP:COLLECTION:PROJECT:ae35419a-4ded-45a3-a443-4a746619c456:V1",
      "properties" : { },
      "type" : "Feature"
    }
  },
  "links" : [ {
    "rel" : "update",
    "href" : "http://localhost:8080/collections/1"
  } ]
}
```
