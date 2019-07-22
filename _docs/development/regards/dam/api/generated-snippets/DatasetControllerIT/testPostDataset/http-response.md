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
    "type" : "DATASET",
    "subsettingClause" : {
      "@type@" : "fr.cnes.regards.modules.indexer.domain.criterion.EmptyCriterion"
    },
    "metadata" : {
      "dataObjectsGroups" : { }
    },
    "id" : 24,
    "ipId" : "URN:AIP:DATASET:PROJECT:21caaf70-eed0-4e04-97f7-a2b90b0346cf:V1",
    "creationDate" : "2019-07-19T17:14:54.413Z",
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
      "providerId" : "DS21",
      "entityType" : "DATASET",
      "label" : "dataSet21",
      "model" : "modelName1",
      "files" : { },
      "tags" : [ ],
      "id" : "URN:AIP:DATASET:PROJECT:21caaf70-eed0-4e04-97f7-a2b90b0346cf:V1",
      "properties" : { },
      "type" : "Feature"
    }
  },
  "links" : [ {
    "rel" : "self",
    "href" : "http://localhost:8080/datasets/24"
  }, {
    "rel" : "list",
    "href" : "http://localhost:8080/datasets"
  }, {
    "rel" : "delete",
    "href" : "http://localhost:8080/datasets/24"
  }, {
    "rel" : "update",
    "href" : "http://localhost:8080/datasets/24"
  } ]
}
```
