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
  "content" : {
    "id" : 7,
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
      "id" : 7,
      "ipId" : "URN:AIP:DATASET:PROJECT:1f224c19-51ee-4c5e-93e3-a10bf9eeb34a:V1",
      "creationDate" : "2020-05-11T11:42:16.527Z",
      "model" : {
        "id" : 4,
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
        "id" : "URN:AIP:DATASET:PROJECT:1f224c19-51ee-4c5e-93e3-a10bf9eeb34a:V1",
        "properties" : { },
        "type" : "Feature"
      }
    },
    "accessGroup" : {
      "id" : 8,
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
    "href" : "http://localhost:8080/accessrights/7"
  } ]
}
```
