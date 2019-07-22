#### Request

* **Code:** 201 Created

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
    "id" : 17,
    "qualityFilter" : {
      "maxScore" : 10,
      "minScore" : 0,
      "qualityLevel" : "ACCEPTED"
    },
    "accessLevel" : "FULL_ACCESS",
    "dataset" : {
      "type" : "DATASET",
      "subsettingClause" : {
        "@type@" : "fr.cnes.regards.modules.indexer.domain.criterion.EmptyCriterion"
      },
      "metadata" : {
        "dataObjectsGroups" : { }
      },
      "id" : 15,
      "ipId" : "URN:AIP:DATASET:PROJECT:98cc6510-04c4-4a84-a051-51bad12a1e5a:V1",
      "creationDate" : "2019-07-19T17:13:40.608Z",
      "lastUpdate" : "2019-07-19T17:13:40.673Z",
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
        "id" : "URN:AIP:DATASET:PROJECT:98cc6510-04c4-4a84-a051-51bad12a1e5a:V1",
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
  }, {
    "rel" : "self",
    "href" : "http://localhost:8080/accessrights/17"
  } ]
}
        ```
