#### Request

* **Code:** 200 OK

        **Headers:**

        `Pragma:no-cache`
        `X-XSS-Protection:1; mode=block`
        `Expires:0`
        `X-Frame-Options:DENY`
        `X-Content-Type-Options:nosniff`
        `Access-Control-Allow-Headers:authorization, content-type, scope`
        `Access-Control-Max-Age:3600`
        `Content-Type:application/json;charset=UTF-8`
        `Access-Control-Allow-Origin:*`
        `Cache-Control:no-cache, no-store, max-age=0, must-revalidate`
        `Access-Control-Allow-Methods:POST, PUT, GET, OPTIONS, DELETE`

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
      "dataAccessRight" : {
        "dataAccessLevel" : "NO_ACCESS"
      },
      "dataset" : {
        "type" : "DATASET",
        "metadata" : {
          "dataObjectsGroups" : { }
        },
        "id" : 11,
        "ipId" : "URN:AIP:DATASET:PROJECT:aaa42286-e558-4c2e-b953-d4aca63e95e7:V1",
        "creationDate" : "2019-07-19T17:13:40.393Z",
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
          "id" : "URN:AIP:DATASET:PROJECT:aaa42286-e558-4c2e-b953-d4aca63e95e7:V1",
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
    "links" : [ {
      "rel" : "self",
      "href" : "http://localhost:8080/accessrights/11"
    } ]
  } ],
  "links" : [ {
    "rel" : "self",
    "href" : "http://localhost:8080/accessrights?page=0&size=10&sort=id,asc"
  } ]
}
```
