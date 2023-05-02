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
      "datasetIpId" : "URN:AIP:DATASET:PROJECT:364ebe2b-b107-49e8-970a-dbbe11d90c9c:V1",
      "dataset" : {
        "type" : "DATASET",
        "metadata" : {
          "dataObjectsGroups" : { }
        },
        "id" : 13,
        "ipId" : "URN:AIP:DATASET:PROJECT:364ebe2b-b107-49e8-970a-dbbe11d90c9c:V1",
        "creationDate" : "2021-09-16T19:08:01.872Z",
        "model" : {
          "id" : 7,
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
          "id" : "URN:AIP:DATASET:PROJECT:364ebe2b-b107-49e8-970a-dbbe11d90c9c:V1",
          "properties" : { },
          "type" : "Feature"
        }
      },
      "accessRight" : {
        "id" : 13,
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
          "id" : 13,
          "ipId" : "URN:AIP:DATASET:PROJECT:364ebe2b-b107-49e8-970a-dbbe11d90c9c:V1",
          "creationDate" : "2021-09-16T19:08:01.872Z",
          "model" : {
            "id" : 7,
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
            "id" : "URN:AIP:DATASET:PROJECT:364ebe2b-b107-49e8-970a-dbbe11d90c9c:V1",
            "properties" : { },
            "type" : "Feature"
          }
        },
        "accessGroup" : {
          "id" : 65,
          "name" : "AG1",
          "users" : [ {
            "email" : "test@email.com"
          } ],
          "isPublic" : false,
          "isInternal" : false
        }
      }
    },
    "links" : [ ]
  }, {
    "content" : {
      "datasetIpId" : "URN:AIP:DATASET:PROJECT:2a195c6f-5cd5-43d4-ae02-21132e83affd:V1",
      "dataset" : {
        "type" : "DATASET",
        "metadata" : {
          "dataObjectsGroups" : { }
        },
        "id" : 14,
        "ipId" : "URN:AIP:DATASET:PROJECT:2a195c6f-5cd5-43d4-ae02-21132e83affd:V1",
        "creationDate" : "2021-09-16T19:08:01.872Z",
        "model" : {
          "id" : 7,
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
          "id" : "URN:AIP:DATASET:PROJECT:2a195c6f-5cd5-43d4-ae02-21132e83affd:V1",
          "properties" : { },
          "type" : "Feature"
        }
      }
    },
    "links" : [ ]
  } ],
  "links" : [ {
    "rel" : "self",
    "href" : "http://localhost:8080/datasets/access-rights/group/AG1?page=0&size=10&sort=id,asc"
  } ]
}
```
