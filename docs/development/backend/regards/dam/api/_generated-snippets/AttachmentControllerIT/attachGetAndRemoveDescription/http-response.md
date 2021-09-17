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
    "id" : 5,
    "ipId" : "URN:AIP:COLLECTION:PROJECT:7a789a25-f99f-452e-8e6a-5f79f6a46684:V1",
    "creationDate" : "2021-09-16T19:08:55.506Z",
    "lastUpdate" : "2021-09-16T19:08:55.555Z",
    "model" : {
      "id" : 5,
      "name" : "MODEL",
      "description" : "Empty model for testing",
      "type" : "COLLECTION"
    },
    "tags" : [ ],
    "groups" : [ ],
    "feature" : {
      "virtualId" : "URN:AIP:COLLECTION:PROJECT:7a789a25-f99f-452e-8e6a-5f79f6a46684:LAST",
      "providerId" : "COL1",
      "entityType" : "COLLECTION",
      "label" : "Collection label",
      "model" : "MODEL",
      "files" : { },
      "tags" : [ ],
      "last" : true,
      "version" : 1,
      "id" : "URN:AIP:COLLECTION:PROJECT:7a789a25-f99f-452e-8e6a-5f79f6a46684:V1",
      "properties" : { },
      "type" : "Feature"
    }
  },
  "links" : [ ]
}
```
