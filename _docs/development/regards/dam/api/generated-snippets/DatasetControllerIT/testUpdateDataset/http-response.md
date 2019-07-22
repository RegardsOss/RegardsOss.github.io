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
    "type" : "DATASET",
    "subsettingClause" : {
      "@type@" : "fr.cnes.regards.modules.indexer.domain.criterion.EmptyCriterion"
    },
    "metadata" : {
      "dataObjectsGroups" : { }
    },
    "id" : 25,
    "ipId" : "URN:AIP:DATASET:PROJECT:f3d79e74-5c80-40ec-a89c-73e48913200f:V1",
    "creationDate" : "2019-07-19T17:14:54.503Z",
    "lastUpdate" : "2019-07-19T17:14:54.533Z",
    "model" : {
      "id" : 20,
      "name" : "modelName1",
      "description" : "model desc",
      "type" : "DATASET"
    },
    "tags" : [ "URN:AIP:DATASET:PROJECT:9e4c100c-70d7-4ca6-b2ea-47f31b597e1d:V1" ],
    "groups" : [ ],
    "feature" : {
      "licence" : "licence",
      "providerId" : "ProviderId1",
      "entityType" : "DATASET",
      "label" : "label",
      "model" : "modelName1",
      "files" : { },
      "tags" : [ "URN:AIP:DATASET:PROJECT:9e4c100c-70d7-4ca6-b2ea-47f31b597e1d:V1" ],
      "id" : "URN:AIP:DATASET:PROJECT:f3d79e74-5c80-40ec-a89c-73e48913200f:V1",
      "properties" : { },
      "type" : "Feature"
    }
  },
  "links" : [ {
    "rel" : "self",
    "href" : "http://localhost:8080/datasets/25"
  }, {
    "rel" : "list",
    "href" : "http://localhost:8080/datasets"
  }, {
    "rel" : "delete",
    "href" : "http://localhost:8080/datasets/25"
  }, {
    "rel" : "update",
    "href" : "http://localhost:8080/datasets/25"
  } ]
}
        ```
