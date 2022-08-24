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
    "type" : "DATASET",
    "metadata" : {
      "dataObjectsGroups" : { }
    },
    "id" : 17,
    "ipId" : "URN:AIP:DATASET:PROJECT:78b5e78b-6444-4966-8067-453c985868e9:V1",
    "creationDate" : "2021-09-16T19:08:33.549Z",
    "model" : {
      "id" : 14,
      "name" : "modelName1",
      "description" : "model desc",
      "type" : "DATASET"
    },
    "tags" : [ "URN:AIP:DATASET:PROJECT:b1504721-c16f-4da0-ac19-991d1ba48daa:V1" ],
    "groups" : [ ],
    "feature" : {
      "licence" : "licence",
      "providerId" : "ProviderId1",
      "entityType" : "DATASET",
      "label" : "label",
      "model" : "modelName1",
      "files" : { },
      "tags" : [ "URN:AIP:DATASET:PROJECT:b1504721-c16f-4da0-ac19-991d1ba48daa:V1" ],
      "last" : false,
      "version" : 1,
      "id" : "URN:AIP:DATASET:PROJECT:78b5e78b-6444-4966-8067-453c985868e9:V1",
      "properties" : { },
      "type" : "Feature"
    }
  },
  "links" : [ {
    "rel" : "self",
    "href" : "http://localhost:8080/datasets/17"
  } ]
}
```
