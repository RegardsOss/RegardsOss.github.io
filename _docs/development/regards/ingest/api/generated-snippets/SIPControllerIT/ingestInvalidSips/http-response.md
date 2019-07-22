#### Request

* **Code:** 206 Partial Content

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
    
[ {
  "id" : "SIP_001",
  "sipId" : "URN:SIP:DATA:PROJECT:dbbbbe05-b6b8-3300-8431-105f505cbb3c:V1",
  "version" : 1,
  "state" : "REJECTED",
  "rejectionCauses" : [ "{Validation annotation @fr.cnes.regards.framework.file.utils.validation.HandledMessageDigestAlgorithm validating FAKE_ALGO: it is not an handled algorithm for checksum computation at properties.contentInformations[0].dataObject.algorithm: rejected value [null]." ]
}, {
  "id" : "SIP_002",
  "sipId" : "URN:SIP:DATA:PROJECT:bdacbc80-624d-3a7c-8de7-464743b3d1f9:V1",
  "version" : 1,
  "state" : "CREATED"
} ]
```
