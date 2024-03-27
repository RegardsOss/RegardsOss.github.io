---
id: backend-rest-create-product
title: Create FEM product using REST API
sidebar_label: Create product
slug: /development/backend/fem/guides/rest/create-product
---

For creation and update requests, REST API is expected a GeoJSON collection extended with specific metadata.

The structure is as follows :

* Required `metadata` that apply to **all features**,
* A required `type` with value `FeatureCollection`,
* Required `features` containing a set of [GeoJson feature](#payloadppt).

Example of feature creation collection:

```json
{
    "metadata": {
        "session": "session",
        "sessionOwner": "owner",
        "storages": [
            {
                "pluginBusinessId": "disk"
            }
        ],
        "priority": "NORMAL"
    },
    "requestOwner": "owner",
    "features": [{}, {}, {}],
    "type": "FeatureCollection"
}
```

Example of feature update collection:

```json
{
    "metadata": {
        "storages": [
            {
                "pluginBusinessId": "disk"
            }
        ],
        "priority": "NORMAL"
    },
    "features": [{}, {}, {}],
    "type": "FeatureCollection"
}
```

:::danger
Session & session owner are not supported in update metadata!
:::

### Feature Creation request example

### Request

**URL**

`/features`

**URL template**

`/features`

**Method**

`POST`

**Headers**

`Authorization:Bearer{token}`  
`Content-Type:application/geo+json;charset=UTF-8`

**Data params**

```json
{
  "requestOwner" : "test",
  "metadata" : {
    "sessionOwner" : "owner",
    "session" : "session",
    "storages" : [ {
      "pluginBusinessId" : "disk"
    } ],
    "priority" : "NORMAL"
  },
  "features" : [ {
    "urn" : null,
    "entityType" : "DATA",
    "model" : "FEATURE01",
    "history" : {
      "createdBy" : "owner",
      "updatedBy" : null,
      "deletedBy" : null
    },
    "files" : [ {
      "locations" : [ {
        "storage" : null,
        "url" : "http://www.test.com/filename.xml"
      } ],
      "attributes" : {
        "dataType" : "RAWDATA",
        "mimeType" : "application/xml",
        "filename" : "filename",
        "filesize" : 100,
        "algorithm" : "MD5",
        "checksum" : "checksum"
      }
    } ],
    "last" : false,
    "id" : "MyId",
    "geometry" : {
      "coordinates" : [ 10.0, 20.0 ],
      "type" : "Point",
      "bbox" : null,
      "crs" : null
    },
    "normalizedGeometry" : null,
    "properties" : {
      "data_type" : "TYPE01",
      "file_characterization" : {
        "valid" : true
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
    "MyId" : "d1b873d8-caeb-4380-b822-8728ec97ee73"
  },
  "denied" : {
    "empty" : true
  },
  "messages" : [ ]
}
```

API return maps of granted and denied requests :

* Granted property maps feature id to its related request id and allows the producer to optionnaly monitor request lifecycle listening to request event.
* Denied property maps feature id to a list of rejection causes.
