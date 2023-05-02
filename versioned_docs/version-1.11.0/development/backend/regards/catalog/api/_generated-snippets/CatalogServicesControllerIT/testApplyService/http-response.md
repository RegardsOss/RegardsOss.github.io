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
`Content-Type:application/json`  
`Content-Disposition:attachment; filename=result.json`  
`Access-Control-Expose-Headers:Content-Disposition`  

**Content:**

```json
    
[ {
  "datasetModelNames" : [ ],
  "metadata" : {
    "groups" : { },
    "modelNames" : { }
  },
  "internal" : true,
  "ipId" : {
    "identifier" : "AIP",
    "entityType" : "DATA",
    "tenant" : "pTenant",
    "entityId" : "924d1f0d-37ba-4da1-9be3-d94aac629897",
    "version" : 1,
    "last" : false
  },
  "model" : {
    "name" : "pName",
    "description" : "pDescription",
    "type" : "DATA"
  },
  "tags" : [ ],
  "groups" : [ ],
  "wgs84" : {
    "type" : "UNLOCATED"
  },
  "feature" : {
    "providerId" : "DO1",
    "entityType" : "DATA",
    "label" : "pLabel1",
    "model" : "pName",
    "files" : { },
    "tags" : [ ],
    "last" : false,
    "version" : 1,
    "id" : {
      "identifier" : "AIP",
      "entityType" : "DATA",
      "tenant" : "pTenant",
      "entityId" : "924d1f0d-37ba-4da1-9be3-d94aac629897",
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
  }
}, {
  "datasetModelNames" : [ ],
  "metadata" : {
    "groups" : { },
    "modelNames" : { }
  },
  "internal" : true,
  "ipId" : {
    "identifier" : "AIP",
    "entityType" : "DATA",
    "tenant" : "pTenant",
    "entityId" : "74f2c965-0136-47f0-93e1-4fd098db701c",
    "version" : 1,
    "last" : false
  },
  "model" : {
    "name" : "pName",
    "description" : "pDescription",
    "type" : "DATA"
  },
  "tags" : [ ],
  "groups" : [ ],
  "wgs84" : {
    "type" : "UNLOCATED"
  },
  "feature" : {
    "providerId" : "DO2",
    "entityType" : "DATA",
    "label" : "pLabel2",
    "model" : "pName",
    "files" : { },
    "tags" : [ ],
    "last" : false,
    "version" : 1,
    "id" : {
      "identifier" : "AIP",
      "entityType" : "DATA",
      "tenant" : "pTenant",
      "entityId" : "74f2c965-0136-47f0-93e1-4fd098db701c",
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
  }
} ]
```
