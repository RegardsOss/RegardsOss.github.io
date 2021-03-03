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
      "datasetModelNames" : [ ],
      "metadata" : {
        "groups" : { },
        "modelNames" : { }
      },
      "internal" : true,
      "ipId" : {
        "oaisIdentifier" : "AIP",
        "entityType" : "DATA",
        "tenant" : "PROJECT",
        "entityId" : "00000000-0000-0000-0000-001333276354",
        "version" : 1
      },
      "model" : {
        "name" : "dataobjectModel",
        "type" : "DATA"
      },
      "tags" : [ "URN:AIP:DATASET:PROJECT:0504e33a-1452-4c69-a6eb-1498dac32c13:V1", "string_tag" ],
      "groups" : [ ],
      "wgs84" : {
        "type" : "UNLOCATED"
      },
      "feature" : {
        "providerId" : "DO1",
        "entityType" : "DATA",
        "label" : "dataobject",
        "model" : "dataobjectModel",
        "files" : { },
        "tags" : [ "URN:AIP:DATASET:PROJECT:0504e33a-1452-4c69-a6eb-1498dac32c13:V1", "string_tag" ],
        "id" : {
          "oaisIdentifier" : "AIP",
          "entityType" : "DATA",
          "tenant" : "PROJECT",
          "entityId" : "00000000-0000-0000-0000-001333276354",
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
  }, {
    "content" : {
      "ipId" : {
        "oaisIdentifier" : "AIP",
        "entityType" : "COLLECTION",
        "tenant" : "PROJECT",
        "entityId" : "12bfb848-8e6f-40d2-b530-e7ff98f319a1",
        "version" : 1
      },
      "model" : {
        "name" : "colelctiontModel",
        "type" : "COLLECTION"
      },
      "tags" : [ "URN:AIP:DATASET:PROJECT:bfab4738-3254-458b-a654-5bbfb13defff:V1" ],
      "groups" : [ ],
      "wgs84" : {
        "type" : "UNLOCATED"
      },
      "feature" : {
        "providerId" : "COL1",
        "entityType" : "COLLECTION",
        "label" : "collection",
        "model" : "colelctiontModel",
        "files" : { },
        "tags" : [ "URN:AIP:DATASET:PROJECT:bfab4738-3254-458b-a654-5bbfb13defff:V1" ],
        "id" : {
          "oaisIdentifier" : "AIP",
          "entityType" : "COLLECTION",
          "tenant" : "PROJECT",
          "entityId" : "12bfb848-8e6f-40d2-b530-e7ff98f319a1",
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
          "configId" : "685a72b7-d103-4793-9462-5f8051ff8a2f",
          "label" : "conf1",
          "applicationModes" : [ "MANY", "ONE" ],
          "entityTypes" : [ "DATA" ],
          "type" : "CATALOG"
        },
        "links" : [ ]
      } ]
    },
    "links" : [ ]
  } ],
  "links" : [ ]
}
```
