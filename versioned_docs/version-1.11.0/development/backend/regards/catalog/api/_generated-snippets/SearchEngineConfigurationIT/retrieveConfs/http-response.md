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
    "totalElements" : 3,
    "totalPages" : 1,
    "number" : 0
  },
  "content" : [ {
    "content" : {
      "id" : 1,
      "label" : "REGARDS search protocol",
      "configuration" : {
        "id" : 1,
        "pluginId" : "legacy",
        "label" : "search-engine-legacy",
        "businessId" : "search-engine-legacy",
        "version" : "1.0.0",
        "priorityOrder" : 0,
        "active" : true,
        "parameters" : [ ]
      }
    },
    "links" : [ {
      "rel" : "self",
      "href" : "http://localhost:8080/enginesconfig/1"
    }, {
      "rel" : "update",
      "href" : "http://localhost:8080/enginesconfig/1"
    }, {
      "rel" : "search",
      "href" : "http://localhost:8080/engines/legacy/entities/search"
    }, {
      "rel" : "search-objects",
      "href" : "http://localhost:8080/engines/legacy/dataobjects/search"
    }, {
      "rel" : "search-datasets",
      "href" : "http://localhost:8080/engines/legacy/datasets/search"
    }, {
      "rel" : "search-collections",
      "href" : "http://localhost:8080/engines/legacy/collections/search"
    } ]
  }, {
    "content" : {
      "id" : 109,
      "label" : "Opensearch conf for all datasets",
      "configuration" : {
        "id" : 106,
        "pluginId" : "opensearch",
        "label" : "14563505-eac3-48e3-ace8-460576edf488",
        "businessId" : "9f7121bb-642c-4e9a-a639-35fd563709d3",
        "version" : "1.0.0",
        "priorityOrder" : 0,
        "active" : true,
        "parameters" : [ {
          "name" : "timeExtension",
          "type" : "POJO",
          "value" : {
            "activated" : true
          },
          "dynamic" : false
        }, {
          "name" : "parametersConfiguration",
          "type" : "COLLECTION",
          "value" : [ {
            "name" : "planet",
            "optionsEnabled" : true,
            "optionsCardinality" : 10,
            "attributeModelJsonPath" : "properties.planet"
          }, {
            "allias" : "debut",
            "name" : "start",
            "namespace" : "time",
            "optionsEnabled" : false,
            "optionsCardinality" : 0,
            "attributeModelJsonPath" : "properties.TimePeriod.startDate"
          }, {
            "allias" : "fin",
            "name" : "end",
            "namespace" : "time",
            "optionsEnabled" : false,
            "optionsCardinality" : 0,
            "attributeModelJsonPath" : "properties.TimePeriod.stopDate"
          } ],
          "dynamic" : false
        }, {
          "name" : "engineConfiguration",
          "type" : "POJO",
          "value" : {
            "searchTitle" : "search",
            "searchDescription" : "desc",
            "contact" : "regards@c-s.fr",
            "image" : "http://plop/image.png",
            "attribution" : "Plop",
            "entityLastUpdateDatePropertyPath" : "TimePeriod.startDate"
          },
          "dynamic" : false
        }, {
          "name" : "regardsExtension",
          "type" : "POJO",
          "value" : {
            "activated" : true
          },
          "dynamic" : false
        }, {
          "name" : "mediaExtension",
          "type" : "POJO",
          "value" : {
            "activated" : true
          },
          "dynamic" : false
        } ]
      }
    },
    "links" : [ {
      "rel" : "self",
      "href" : "http://localhost:8080/enginesconfig/109"
    }, {
      "rel" : "delete",
      "href" : "http://localhost:8080/enginesconfig/109"
    }, {
      "rel" : "update",
      "href" : "http://localhost:8080/enginesconfig/109"
    }, {
      "rel" : "search",
      "href" : "http://localhost:8080/engines/opensearch/entities/search"
    }, {
      "rel" : "search-objects",
      "href" : "http://localhost:8080/engines/opensearch/dataobjects/search"
    }, {
      "rel" : "search-datasets",
      "href" : "http://localhost:8080/engines/opensearch/datasets/search"
    }, {
      "rel" : "search-collections",
      "href" : "http://localhost:8080/engines/opensearch/collections/search"
    }, {
      "rel" : "opensearchdescription.xml",
      "href" : "http://localhost:8080/engines/opensearch/dataobjects/search/opensearchdescription.xml"
    } ]
  }, {
    "content" : {
      "id" : 110,
      "label" : "Opensearch conf for one dataset",
      "configuration" : {
        "id" : 106,
        "pluginId" : "opensearch",
        "label" : "14563505-eac3-48e3-ace8-460576edf488",
        "businessId" : "9f7121bb-642c-4e9a-a639-35fd563709d3",
        "version" : "1.0.0",
        "priorityOrder" : 0,
        "active" : true,
        "parameters" : [ {
          "name" : "timeExtension",
          "type" : "POJO",
          "value" : {
            "activated" : true
          },
          "dynamic" : false
        }, {
          "name" : "parametersConfiguration",
          "type" : "COLLECTION",
          "value" : [ {
            "name" : "planet",
            "optionsEnabled" : true,
            "optionsCardinality" : 10,
            "attributeModelJsonPath" : "properties.planet"
          }, {
            "allias" : "debut",
            "name" : "start",
            "namespace" : "time",
            "optionsEnabled" : false,
            "optionsCardinality" : 0,
            "attributeModelJsonPath" : "properties.TimePeriod.startDate"
          }, {
            "allias" : "fin",
            "name" : "end",
            "namespace" : "time",
            "optionsEnabled" : false,
            "optionsCardinality" : 0,
            "attributeModelJsonPath" : "properties.TimePeriod.stopDate"
          } ],
          "dynamic" : false
        }, {
          "name" : "engineConfiguration",
          "type" : "POJO",
          "value" : {
            "searchTitle" : "search",
            "searchDescription" : "desc",
            "contact" : "regards@c-s.fr",
            "image" : "http://plop/image.png",
            "attribution" : "Plop",
            "entityLastUpdateDatePropertyPath" : "TimePeriod.startDate"
          },
          "dynamic" : false
        }, {
          "name" : "regardsExtension",
          "type" : "POJO",
          "value" : {
            "activated" : true
          },
          "dynamic" : false
        }, {
          "name" : "mediaExtension",
          "type" : "POJO",
          "value" : {
            "activated" : true
          },
          "dynamic" : false
        } ]
      },
      "datasetUrn" : "URN:AIP:DATASET:PROJECT:4ec7b25b-62cc-408e-9449-4086a6968801:V1",
      "dataset" : {
        "type" : "DATASET",
        "metadata" : {
          "dataObjectsGroups" : { }
        },
        "id" : 1,
        "ipId" : "URN:AIP:DATASET:tenant:27de606c-a6cd-411f-a5ba-bd1b2f29c965:V1",
        "model" : {
          "name" : "MockedModel"
        },
        "tags" : [ ],
        "groups" : [ ],
        "feature" : {
          "providerId" : "DSMOCK",
          "entityType" : "DATASET",
          "label" : "Mocked dataset response from mock dataset dam client",
          "model" : "MockedModel",
          "files" : { },
          "tags" : [ ],
          "last" : false,
          "version" : 1,
          "id" : "URN:AIP:DATASET:tenant:27de606c-a6cd-411f-a5ba-bd1b2f29c965:V1",
          "properties" : { },
          "type" : "Feature"
        }
      }
    },
    "links" : [ {
      "rel" : "self",
      "href" : "http://localhost:8080/enginesconfig/110"
    }, {
      "rel" : "delete",
      "href" : "http://localhost:8080/enginesconfig/110"
    }, {
      "rel" : "update",
      "href" : "http://localhost:8080/enginesconfig/110"
    }, {
      "rel" : "search",
      "href" : "http://localhost:8080/engines/opensearch/datasets/URN:AIP:DATASET:PROJECT:4ec7b25b-62cc-408e-9449-4086a6968801:V1/dataobjects/search"
    }, {
      "rel" : "opensearchdescription.xml",
      "href" : "http://localhost:8080/engines/opensearch/datasets/URN:AIP:DATASET:PROJECT:4ec7b25b-62cc-408e-9449-4086a6968801:V1/dataobjects/search/opensearchdescription.xml"
    } ]
  } ],
  "links" : [ {
    "rel" : "self",
    "href" : "http://localhost:8080/enginesconfig?page=0&size=10&sort=id,asc"
  } ]
}
```
