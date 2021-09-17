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
    "ipId" : "URN:AIP:COLLECTION:PROJECT:8b54869a-e9c7-4a13-ae50-d011bf9ec3ea:V1",
    "creationDate" : "2021-09-16T19:08:53.978Z",
    "lastUpdate" : "2021-09-16T19:08:54.068Z",
    "model" : {
      "id" : 1,
      "name" : "MODEL",
      "description" : "Empty model for testing",
      "type" : "COLLECTION"
    },
    "tags" : [ ],
    "groups" : [ ],
    "feature" : {
      "virtualId" : "URN:AIP:COLLECTION:PROJECT:8b54869a-e9c7-4a13-ae50-d011bf9ec3ea:LAST",
      "providerId" : "COL1",
      "entityType" : "COLLECTION",
      "label" : "Collection label",
      "model" : "MODEL",
      "files" : {
        "DESCRIPTION" : [ {
          "dataType" : "DESCRIPTION",
          "reference" : true,
          "uri" : "https://tools.ietf.org/html/rfc7946",
          "mimeType" : "text/html;charset=UTF-8",
          "online" : true,
          "checksum" : "7a24604603987e930102902ad28fb1b8",
          "digestAlgorithm" : "MD5",
          "filename" : "rfc7946",
          "types" : [ ]
        } ]
      },
      "tags" : [ ],
      "last" : true,
      "version" : 1,
      "id" : "URN:AIP:COLLECTION:PROJECT:8b54869a-e9c7-4a13-ae50-d011bf9ec3ea:V1",
      "properties" : { },
      "type" : "Feature"
    }
  },
  "links" : [ ]
}
```
