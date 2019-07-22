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
        "entityId" : "9dc2ffd1-214b-4851-ab98-e3d771ce9333",
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
          "entityId" : "9dc2ffd1-214b-4851-ab98-e3d771ce9333",
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
        "entityId" : "1f3f019f-3da0-4fd4-9de7-8c05c632117b",
        "version" : 1
      },
      "model" : {
        "name" : "datasetModel",
        "type" : "DATASET"
      },
      "tags" : [ "URN:AIP:DATASET:PROJECT:9dc2ffd1-214b-4851-ab98-e3d771ce9333:V1" ],
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
        "tags" : [ "URN:AIP:DATASET:PROJECT:9dc2ffd1-214b-4851-ab98-e3d771ce9333:V1" ],
        "id" : {
          "oaisIdentifier" : "AIP",
          "entityType" : "DATASET",
          "tenant" : "PROJECT",
          "entityId" : "1f3f019f-3da0-4fd4-9de7-8c05c632117b",
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
          "configId" : 1,
          "label" : "conf0",
          "applicationModes" : [ "MANY", "ONE" ],
          "entityTypes" : [ "DATA" ],
          "type" : "CATALOG"
        },
        "links" : [ ]
      }, {
        "content" : {
          "configId" : 3,
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
