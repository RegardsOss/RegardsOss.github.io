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
    "totalElements" : 2,
    "totalPages" : 1,
    "number" : 0
  },
  "content" : [ {
    "content" : {
      "datasetIpId" : "URN:AIP:DATASET:PROJECT:c79d168f-cec8-48ec-8dfa-5c6316e64e29:V1",
      "dataset" : {
        "type" : "DATASET",
        "metadata" : {
          "dataObjectsGroups" : { }
        },
        "id" : 13,
        "ipId" : "URN:AIP:DATASET:PROJECT:c79d168f-cec8-48ec-8dfa-5c6316e64e29:V1",
        "creationDate" : "2019-07-19T17:13:40.477Z",
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
          "id" : "URN:AIP:DATASET:PROJECT:c79d168f-cec8-48ec-8dfa-5c6316e64e29:V1",
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
        "dataAccessRight" : {
          "dataAccessLevel" : "NO_ACCESS"
        },
        "dataset" : {
          "type" : "DATASET",
          "metadata" : {
            "dataObjectsGroups" : { }
          },
          "id" : 13,
          "ipId" : "URN:AIP:DATASET:PROJECT:c79d168f-cec8-48ec-8dfa-5c6316e64e29:V1",
          "creationDate" : "2019-07-19T17:13:40.477Z",
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
            "id" : "URN:AIP:DATASET:PROJECT:c79d168f-cec8-48ec-8dfa-5c6316e64e29:V1",
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
      "datasetIpId" : "URN:AIP:DATASET:PROJECT:c78c1ae3-ebea-47f5-a3b6-4fd09f17b710:V1",
      "dataset" : {
        "type" : "DATASET",
        "metadata" : {
          "dataObjectsGroups" : { }
        },
        "id" : 14,
        "ipId" : "URN:AIP:DATASET:PROJECT:c78c1ae3-ebea-47f5-a3b6-4fd09f17b710:V1",
        "creationDate" : "2019-07-19T17:13:40.477Z",
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
          "id" : "URN:AIP:DATASET:PROJECT:c78c1ae3-ebea-47f5-a3b6-4fd09f17b710:V1",
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
