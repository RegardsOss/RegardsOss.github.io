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
  "facets" : [ ],
  "metadata" : {
    "size" : 20,
    "totalElements" : 1,
    "totalPages" : 1,
    "number" : 0
  },
  "content" : [ {
    "content" : {
      "virtualId" : "URN:AIP:COLLECTION:legacy:40bd5976-7e18-4a31-8f54-cf795df30fa5:LAST",
      "providerId" : "Sun",
      "entityType" : "COLLECTION",
      "label" : "Sun",
      "model" : "star",
      "files" : { },
      "tags" : [ ],
      "last" : false,
      "version" : 1,
      "id" : "URN:AIP:COLLECTION:legacy:40bd5976-7e18-4a31-8f54-cf795df30fa5:V1",
      "properties" : {
        "star" : "Sun",
        "abstract" : "The Sun is the star at the center of the Solar System."
      },
      "type" : "Feature"
    },
    "links" : [ {
      "rel" : "self",
      "href" : "http://localhost:8080/engines/legacy/collections/URN:AIP:COLLECTION:legacy:40bd5976-7e18-4a31-8f54-cf795df30fa5:V1"
    } ]
  } ],
  "links" : [ {
    "rel" : "self",
    "href" : "http://localhost:8080/engines/legacy/collections/search?q=star:Sun&page=0&size=20"
  } ]
}
```
