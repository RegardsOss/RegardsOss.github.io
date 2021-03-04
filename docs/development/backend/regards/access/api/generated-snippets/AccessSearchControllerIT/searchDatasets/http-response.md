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
    "size" : 2,
    "totalElements" : 2,
    "totalPages" : 1,
    "number" : 0
  },
  "content" : [ {
    "content" : {
      "metadata" : {
        "dataObjectsGroups" : { }
      },
      "ipId" : {
        "oaisIdentifier" : "AIP",
        "entityType" : "DATASET",
        "tenant" : "PROJECT",
        "entityId" : "0504e33a-1452-4c69-a6eb-1498dac32c13",
        "version" : 1
      },
      "model" : {
        "name" : "datasetModel",
        "type" : "DATASET"
      },
      "tags" : [ ],
      "groups" : [ ],
      "wgs84" : {
        "type" : "UNLOCATED"
      },
      "feature" : {
        "providerId" : "DS0",
        "entityType" : "DATASET",
        "label" : "dataset0",
        "model" : "datasetModel",
        "files" : { },
        "tags" : [ ],
        "id" : {
          "oaisIdentifier" : "AIP",
          "entityType" : "DATASET",
          "tenant" : "PROJECT",
          "entityId" : "0504e33a-1452-4c69-a6eb-1498dac32c13",
          "version" : 1
        },
        "geometry" : {
          "type" : "UNLOCATED"
        },
        "normalizedGeometry" : {
          "type" : "UNLOCATED"
        },
        "properties" : [ ],
        "type" : "FEATURE"
      },
      "services" : [ ]
    },
    "links" : [ ]
  }, {
    "content" : {
      "metadata" : {
        "dataObjectsGroups" : { }
      },
      "ipId" : {
        "oaisIdentifier" : "AIP",
        "entityType" : "DATASET",
        "tenant" : "PROJECT",
        "entityId" : "bfab4738-3254-458b-a654-5bbfb13defff",
        "version" : 1
      },
      "model" : {
        "name" : "datasetModel",
        "type" : "DATASET"
      },
      "tags" : [ "URN:AIP:DATASET:PROJECT:0504e33a-1452-4c69-a6eb-1498dac32c13:V1" ],
      "groups" : [ ],
      "wgs84" : {
        "type" : "UNLOCATED"
      },
      "feature" : {
        "providerId" : "DS1",
        "entityType" : "DATASET",
        "label" : "dataset1",
        "model" : "datasetModel",
        "files" : { },
        "tags" : [ "URN:AIP:DATASET:PROJECT:0504e33a-1452-4c69-a6eb-1498dac32c13:V1" ],
        "id" : {
          "oaisIdentifier" : "AIP",
          "entityType" : "DATASET",
          "tenant" : "PROJECT",
          "entityId" : "bfab4738-3254-458b-a654-5bbfb13defff",
          "version" : 1
        },
        "geometry" : {
          "type" : "UNLOCATED"
        },
        "normalizedGeometry" : {
          "type" : "UNLOCATED"
        },
        "properties" : [ ],
        "type" : "FEATURE"
      },
      "services" : [ {
        "content" : {
          "configId" : "c1adaf22-3448-4038-a3df-3bd8ec0c39dc",
          "label" : "conf0",
          "applicationModes" : [ "MANY", "ONE" ],
          "entityTypes" : [ "DATA" ],
          "type" : "CATALOG"
        },
        "links" : [ ]
      }, {
        "content" : {
          "configId" : "3",
          "label" : "uiPluginConfiguration2",
          "applicationModes" : [ "MANY" ],
          "entityTypes" : [ "COLLECTION" ],
          "type" : "UI"
        },
        "links" : [ ]
      } ]
    },
    "links" : [ ]
  } ],
  "links" : [ ]
}
```
