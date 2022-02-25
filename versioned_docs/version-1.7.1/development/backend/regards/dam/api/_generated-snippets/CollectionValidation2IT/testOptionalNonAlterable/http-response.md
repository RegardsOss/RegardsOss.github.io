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
    "id" : 53,
    "ipId" : "URN:AIP:COLLECTION:PROJECT:339eb4d6-df80-4748-a86a-c5412c169e92:V1",
    "creationDate" : "2021-09-16T19:08:15.079Z",
    "lastUpdate" : "2021-09-16T19:08:15.103Z",
    "model" : {
      "id" : 203,
      "name" : "TestOptionalNonAlterable",
      "description" : "Sample mission",
      "type" : "COLLECTION"
    },
    "tags" : [ ],
    "groups" : [ ],
    "feature" : {
      "providerId" : "COL4",
      "entityType" : "COLLECTION",
      "label" : "optionalNotGivenNonAlterable",
      "model" : "TestOptionalNonAlterable",
      "files" : { },
      "tags" : [ ],
      "last" : false,
      "version" : 1,
      "id" : "URN:AIP:COLLECTION:PROJECT:339eb4d6-df80-4748-a86a-c5412c169e92:V1",
      "properties" : { },
      "type" : "Feature"
    }
  },
  "links" : [ {
    "rel" : "update",
    "href" : "http://localhost:8080/collections/53"
  } ]
}
```
