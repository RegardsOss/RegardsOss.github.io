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
    "id" : 17,
    "qualityFilter" : {
      "maxScore" : 10,
      "minScore" : 0,
      "qualityLevel" : "ACCEPTED"
    },
    "accessLevel" : "FULL_ACCESS",
    "dataAccessLevel" : "NO_ACCESS",
    "dataset" : {
      "type" : "DATASET",
      "subsettingClause" : {
        "@type@" : "fr.cnes.regards.modules.indexer.domain.criterion.EmptyCriterion"
      },
      "metadata" : {
        "dataObjectsGroups" : { }
      },
      "id" : 15,
      "ipId" : "URN:AIP:DATASET:PROJECT:c597cd04-8535-42a6-9d14-d3eee6255356:V1",
      "creationDate" : "2021-09-16T19:08:02.322Z",
      "lastUpdate" : "2021-09-16T19:08:02.366Z",
      "model" : {
        "id" : 8,
        "name" : "model1",
        "description" : "desc",
        "type" : "DATASET"
      },
      "tags" : [ ],
      "groups" : [ "AG2" ],
      "feature" : {
        "licence" : "licence",
        "providerId" : "DS1",
        "entityType" : "DATASET",
        "label" : "DS1",
        "model" : "model1",
        "files" : { },
        "tags" : [ ],
        "last" : false,
        "version" : 1,
        "id" : "URN:AIP:DATASET:PROJECT:c597cd04-8535-42a6-9d14-d3eee6255356:V1",
        "properties" : { },
        "type" : "Feature"
      }
    },
    "accessGroup" : {
      "id" : 68,
      "name" : "AG2",
      "users" : [ ],
      "isPublic" : false,
      "isInternal" : false
    }
  },
  "links" : [ {
    "rel" : "create",
    "href" : "http://localhost:8080/accessrights"
  } ]
}
```
