---
id: backend-rest-patch-product
title: Patch FEM product using REST API
sidebar_label: Patch product
slug: /development/backend/fem/guides/rest/patch-product
---

### Feature Patch request example

### Request

**URL**

`/features`

**URL template**

`/features`

**Method**

`PATCH`

**Headers**

`Authorization:Bearer{token}`  
`Content-Type:application/geo+json;charset=UTF-8`

**Data params**

```json
{
  "requestOwner" : "test",
  "metadata" : {
    "storages" : [ ],
    "priority" : "NORMAL"
  },
  "features" : [ {
    "urn" : "URN:FEATURE:DATA:tenant:ca4015e5-9c59-49ff-b35e-f30c6929f402:V1",
    "entityType" : "DATA",
    "model" : "FEATURE01",
    "history" : {
      "createdBy" : "owner",
      "updatedBy" : null,
      "deletedBy" : null
    },
    "files" : [ ],
    "last" : false,
    "id" : "MyId",
    "geometry" : null,
    "normalizedGeometry" : null,
    "properties" : {
      "file_characterization" : {
        "invalidation_date" : "2021-09-16T20:06:25.906Z",
        "valid" : false
      }
    },
    "type" : "Feature"
  } ],
  "type" : "FeatureCollection"
}
```

### Response

* **Code:** 201 Created

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
`Content-Type:application/hal+json`

**Content:**

```json
    
{
  "granted" : {
    "URN:FEATURE:DATA:tenant:ca4015e5-9c59-49ff-b35e-f30c6929f402:V1" : "65726bf9-a039-4f34-a6d2-620a601ace64"
  },
  "denied" : {
    "empty" : true
  },
  "messages" : [ ]
}
```


API return maps of granted and denied requests :

* Granted property maps feature urn to its related request id and allows the producer to optionnaly monitor request lifecycle listening to request event.
* Denied property maps feature urn to a list of rejection causes.
