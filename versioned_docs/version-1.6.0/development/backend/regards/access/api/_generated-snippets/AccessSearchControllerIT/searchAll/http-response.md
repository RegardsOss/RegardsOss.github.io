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
      "datasetModelNames" : [ ],
      "metadata" : {
        "groups" : { },
        "modelNames" : { }
      },
      "internal" : true,
      "ipId" : {
        "identifier" : "AIP",
        "entityType" : "DATA",
        "tenant" : "PROJECT",
        "entityId" : "00000000-0000-0000-0000-000889305118",
        "version" : 1,
        "last" : false
      },
      "model" : {
        "name" : "dataobjectModel",
        "type" : "DATA"
      },
      "tags" : [ "URN:AIP:DATASET:PROJECT:4a6ac395-3ef9-455b-8967-7f8aa86be1a6:V1", "string_tag" ],
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
        "tags" : [ "URN:AIP:DATASET:PROJECT:4a6ac395-3ef9-455b-8967-7f8aa86be1a6:V1", "string_tag" ],
        "last" : false,
        "version" : 1,
        "id" : {
          "identifier" : "AIP",
          "entityType" : "DATA",
          "tenant" : "PROJECT",
          "entityId" : "00000000-0000-0000-0000-000889305118",
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
  }, {
    "content" : {
      "ipId" : {
        "identifier" : "AIP",
        "entityType" : "COLLECTION",
        "tenant" : "PROJECT",
        "entityId" : "82476ec7-9dc0-429d-84e3-2bf8b45dc2ca",
        "version" : 1,
        "last" : false
      },
      "model" : {
        "name" : "colelctiontModel",
        "type" : "COLLECTION"
      },
      "tags" : [ "URN:AIP:DATASET:PROJECT:d3e0a894-13c8-4009-bee6-1a911b84dda5:V1" ],
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
        "tags" : [ "URN:AIP:DATASET:PROJECT:d3e0a894-13c8-4009-bee6-1a911b84dda5:V1" ],
        "last" : false,
        "version" : 1,
        "id" : {
          "identifier" : "AIP",
          "entityType" : "COLLECTION",
          "tenant" : "PROJECT",
          "entityId" : "82476ec7-9dc0-429d-84e3-2bf8b45dc2ca",
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
          "configId" : "e763edd7-50b8-4e71-9997-cea6a33d89fe",
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
