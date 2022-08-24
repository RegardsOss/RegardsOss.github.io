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
    "subsettingClause" : {
      "@type@" : "fr.cnes.regards.modules.indexer.domain.criterion.EmptyCriterion"
    },
    "metadata" : {
      "dataObjectsGroups" : { }
    },
    "id" : 5,
    "ipId" : "URN:AIP:DATASET:PROJECT:6c1ff08f-f4be-4436-a78e-d639f4149de2:V1",
    "creationDate" : "2021-09-16T19:08:31.54Z",
    "lastUpdate" : "2021-09-16T19:08:31.603Z",
    "model" : {
      "id" : 5,
      "name" : "modelName1",
      "description" : "model desc",
      "type" : "DATASET"
    },
    "tags" : [ ],
    "groups" : [ ],
    "feature" : {
      "licence" : "licence",
      "providerId" : "ProviderId1new",
      "entityType" : "DATASET",
      "label" : "label",
      "model" : "modelName1",
      "files" : { },
      "tags" : [ ],
      "last" : false,
      "version" : 1,
      "id" : "URN:AIP:DATASET:PROJECT:6c1ff08f-f4be-4436-a78e-d639f4149de2:V1",
      "properties" : { },
      "type" : "Feature"
    }
  },
  "links" : [ {
    "rel" : "update",
    "href" : "http://localhost:8080/datasets/5"
  } ]
}
```
