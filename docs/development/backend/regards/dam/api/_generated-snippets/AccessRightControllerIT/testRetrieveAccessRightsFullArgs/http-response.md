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
  "metadata" : {
    "size" : 10,
    "totalElements" : 1,
    "totalPages" : 1,
    "number" : 0
  },
  "content" : [ {
    "content" : {
      "id" : 11,
      "qualityFilter" : {
        "maxScore" : 10,
        "minScore" : 0,
        "qualityLevel" : "ACCEPTED"
      },
      "accessLevel" : "FULL_ACCESS",
      "dataAccessLevel" : "NO_ACCESS",
      "dataset" : {
        "type" : "DATASET",
        "metadata" : {
          "dataObjectsGroups" : { }
        },
        "id" : 11,
        "ipId" : "URN:AIP:DATASET:PROJECT:42bf1a27-9c42-48ff-8e75-1e37dea31d12:V1",
        "creationDate" : "2021-09-16T19:08:01.383Z",
        "model" : {
          "id" : 6,
          "name" : "model1",
          "description" : "desc",
          "type" : "DATASET"
        },
        "tags" : [ ],
        "groups" : [ ],
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
          "id" : "URN:AIP:DATASET:PROJECT:42bf1a27-9c42-48ff-8e75-1e37dea31d12:V1",
          "properties" : { },
          "type" : "Feature"
        }
      },
      "accessGroup" : {
        "id" : 63,
        "name" : "AG1",
        "users" : [ {
          "email" : "test@email.com"
        } ],
        "isPublic" : false,
        "isInternal" : false
      }
    },
    "links" : [ ]
  } ],
  "links" : [ {
    "rel" : "self",
    "href" : "http://localhost:8080/accessrights?page=0&size=10&sort=id,asc"
  } ]
}
```
