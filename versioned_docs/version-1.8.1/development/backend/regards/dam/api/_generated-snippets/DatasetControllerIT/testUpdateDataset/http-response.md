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
    "id" : 25,
    "ipId" : "URN:AIP:DATASET:PROJECT:7f1832b3-1a1b-4543-947c-706a5d6e0623:V1",
    "creationDate" : "2021-09-16T19:08:34.53Z",
    "lastUpdate" : "2021-09-16T19:08:34.551Z",
    "model" : {
      "id" : 20,
      "name" : "modelName1",
      "description" : "model desc",
      "type" : "DATASET"
    },
    "tags" : [ "URN:AIP:DATASET:PROJECT:0a6609b3-2c7f-41aa-81a3-6804dbe99ac1:V1" ],
    "groups" : [ ],
    "feature" : {
      "licence" : "licence",
      "providerId" : "ProviderId1",
      "entityType" : "DATASET",
      "label" : "label",
      "model" : "modelName1",
      "files" : { },
      "tags" : [ "URN:AIP:DATASET:PROJECT:0a6609b3-2c7f-41aa-81a3-6804dbe99ac1:V1" ],
      "last" : false,
      "version" : 1,
      "id" : "URN:AIP:DATASET:PROJECT:7f1832b3-1a1b-4543-947c-706a5d6e0623:V1",
      "properties" : { },
      "type" : "Feature"
    }
  },
  "links" : [ {
    "rel" : "update",
    "href" : "http://localhost:8080/datasets/25"
  } ]
}
```
