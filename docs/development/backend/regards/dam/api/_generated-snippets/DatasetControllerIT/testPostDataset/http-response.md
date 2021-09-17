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
    "type" : "DATASET",
    "subsettingClause" : {
      "@type@" : "fr.cnes.regards.modules.indexer.domain.criterion.EmptyCriterion"
    },
    "metadata" : {
      "dataObjectsGroups" : { }
    },
    "id" : 24,
    "ipId" : "URN:AIP:DATASET:PROJECT:6883d5fa-6915-4ba7-bc61-2958e56d2abe:V1",
    "creationDate" : "2021-09-16T19:08:34.142Z",
    "model" : {
      "id" : 16,
      "name" : "modelName1",
      "description" : "model desc",
      "type" : "DATASET"
    },
    "tags" : [ ],
    "groups" : [ ],
    "feature" : {
      "licence" : "licence",
      "virtualId" : "URN:AIP:DATASET:PROJECT:6883d5fa-6915-4ba7-bc61-2958e56d2abe:LAST",
      "providerId" : "DS21",
      "entityType" : "DATASET",
      "label" : "dataSet21",
      "model" : "modelName1",
      "files" : { },
      "tags" : [ ],
      "last" : true,
      "version" : 1,
      "id" : "URN:AIP:DATASET:PROJECT:6883d5fa-6915-4ba7-bc61-2958e56d2abe:V1",
      "properties" : { },
      "type" : "Feature"
    }
  },
  "links" : [ ]
}
```
