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
    "licence" : "",
    "virtualId" : "URN:AIP:DATASET:legacy:e865b7a9-a87b-418d-9466-a792ef0f2e3b:LAST",
    "providerId" : "Solar system",
    "entityType" : "DATASET",
    "label" : "Solar system",
    "model" : "DATASET_ENGINE",
    "files" : { },
    "tags" : [ "REGARDS", "CS-SI", "CNES" ],
    "last" : false,
    "version" : 1,
    "id" : "URN:AIP:DATASET:legacy:e865b7a9-a87b-418d-9466-a792ef0f2e3b:V1",
    "properties" : {
      "startSystem" : "Solar system"
    },
    "type" : "Feature"
  },
  "links" : [ {
    "rel" : "self",
    "href" : "http://localhost:8080/engines/legacy/datasets/URN:AIP:DATASET:legacy:e865b7a9-a87b-418d-9466-a792ef0f2e3b:V1"
  }, {
    "rel" : "dataobjects",
    "href" : "http://localhost:8080/engines/legacy/datasets/URN:AIP:DATASET:legacy:e865b7a9-a87b-418d-9466-a792ef0f2e3b:V1/dataobjects/search"
  } ]
}
```
