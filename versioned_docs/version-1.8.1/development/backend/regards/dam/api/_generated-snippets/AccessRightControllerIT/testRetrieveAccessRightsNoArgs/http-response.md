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
    "totalElements" : 2,
    "totalPages" : 1,
    "number" : 0
  },
  "content" : [ {
    "content" : {
      "id" : 4,
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
        "id" : 4,
        "ipId" : "URN:AIP:DATASET:PROJECT:dcae7bb2-011e-489a-a116-69ffec970b49:V1",
        "creationDate" : "2021-09-16T19:07:59.799Z",
        "model" : {
          "id" : 2,
          "name" : "model1",
          "description" : "desc",
          "type" : "DATASET"
        },
        "tags" : [ ],
        "groups" : [ ],
        "feature" : {
          "licence" : "licence",
          "providerId" : "DS2",
          "entityType" : "DATASET",
          "label" : "DS2",
          "model" : "model1",
          "files" : { },
          "tags" : [ ],
          "last" : false,
          "version" : 1,
          "id" : "URN:AIP:DATASET:PROJECT:dcae7bb2-011e-489a-a116-69ffec970b49:V1",
          "properties" : { },
          "type" : "Feature"
        }
      },
      "accessGroup" : {
        "id" : 56,
        "name" : "AG2",
        "users" : [ ],
        "isPublic" : false,
        "isInternal" : false
      }
    },
    "links" : [ ]
  }, {
    "content" : {
      "id" : 3,
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
        "id" : 3,
        "ipId" : "URN:AIP:DATASET:PROJECT:da841ff1-44ee-4066-b128-e59b5872ee2c:V1",
        "creationDate" : "2021-09-16T19:07:59.799Z",
        "model" : {
          "id" : 2,
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
          "id" : "URN:AIP:DATASET:PROJECT:da841ff1-44ee-4066-b128-e59b5872ee2c:V1",
          "properties" : { },
          "type" : "Feature"
        }
      },
      "accessGroup" : {
        "id" : 55,
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
