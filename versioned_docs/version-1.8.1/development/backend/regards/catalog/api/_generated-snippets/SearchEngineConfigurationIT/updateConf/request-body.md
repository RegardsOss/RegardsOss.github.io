**Data params**

```json
{
  "id" : 102,
  "label" : "Opensearch conf for all datasets",
  "configuration" : {
    "id" : 102,
    "pluginId" : "opensearch",
    "label" : "21df2006-10b1-44a7-8669-b234cc9e53f2",
    "businessId" : "d7296002-6721-4d3f-bdf4-7698962d6b8c",
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
  "datasetUrn" : "URN:AIP:DATASET:PROJECT:d053f81f-6804-4ffe-b0f2-64efc8595361:V2",
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
}
```
