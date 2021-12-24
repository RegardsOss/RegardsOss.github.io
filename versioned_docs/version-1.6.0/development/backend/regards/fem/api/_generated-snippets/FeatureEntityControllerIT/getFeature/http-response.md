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
  "id" : 1,
  "urn" : "URN:FEATURE:DATA:PROJECT:a31139e2-f524-3d87-9b9a-036d05944c89:V1",
  "source" : "source1",
  "session" : "session1",
  "providerId" : "feature_1_3",
  "version" : 1,
  "lastUpdate" : "2021-09-16T20:05:24.475Z",
  "feature" : {
    "urn" : "URN:FEATURE:DATA:PROJECT:a31139e2-f524-3d87-9b9a-036d05944c89:V1",
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
    "last" : true,
    "id" : "feature_1_3",
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
  }
}
```
