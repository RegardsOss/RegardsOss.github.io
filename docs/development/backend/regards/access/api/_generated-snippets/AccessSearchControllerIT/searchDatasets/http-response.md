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
        "identifier" : "AIP",
        "entityType" : "DATASET",
        "tenant" : "PROJECT",
        "entityId" : "4a6ac395-3ef9-455b-8967-7f8aa86be1a6",
        "version" : 1,
        "last" : false
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
        "last" : false,
        "version" : 1,
        "id" : {
          "identifier" : "AIP",
          "entityType" : "DATASET",
          "tenant" : "PROJECT",
          "entityId" : "4a6ac395-3ef9-455b-8967-7f8aa86be1a6",
          "version" : 1,
          "last" : false
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
        "identifier" : "AIP",
        "entityType" : "DATASET",
        "tenant" : "PROJECT",
        "entityId" : "d3e0a894-13c8-4009-bee6-1a911b84dda5",
        "version" : 1,
        "last" : false
      },
      "model" : {
        "name" : "datasetModel",
        "type" : "DATASET"
      },
      "tags" : [ "URN:AIP:DATASET:PROJECT:4a6ac395-3ef9-455b-8967-7f8aa86be1a6:V1" ],
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
        "tags" : [ "URN:AIP:DATASET:PROJECT:4a6ac395-3ef9-455b-8967-7f8aa86be1a6:V1" ],
        "last" : false,
        "version" : 1,
        "id" : {
          "identifier" : "AIP",
          "entityType" : "DATASET",
          "tenant" : "PROJECT",
          "entityId" : "d3e0a894-13c8-4009-bee6-1a911b84dda5",
          "version" : 1,
          "last" : false
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
          "configId" : "f7638f8d-0412-4aed-8de9-597373aa984b",
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
