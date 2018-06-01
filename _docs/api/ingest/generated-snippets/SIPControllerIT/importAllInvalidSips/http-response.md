* **Code:** 422 Unprocessable Entity

  **Headers:**

  `X-Content-Type-Options: nosniff`
  `X-XSS-Protection: 1; mode=block`
  `Cache-Control: no-cache, no-store, max-age=0, must-revalidate`
  `Pragma: no-cache`
  `Expires: 0`
  `X-Frame-Options: DENY`
  `Access-Control-Allow-Origin: *`
  `Access-Control-Allow-Methods: POST, PUT, GET, OPTIONS, DELETE`
  `Access-Control-Allow-Headers: authorization, content-type, scope`
  `Access-Control-Max-Age: 3600`
  `X-Application-Context: Test application:default,test:-1`
  `Content-Type: application/json;charset=UTF-8`

  **Content:**

```json

[ {
  "id" : "sipId41",
  "ipId" : "URN:SIP:DATA:PROJECT:eac3c667-1ed9-3abf-a7a2-f8934747ea2b:V1",
  "version" : 1,
  "state" : "REJECTED",
  "rejectionCauses" : [ "Data file checksum is required", "A representation information is required in content information" ]
}, {
  "id" : "sipId42",
  "ipId" : "URN:SIP:DATA:PROJECT:744c3f24-7512-3476-a100-bec0dc7d56c8:V1",
  "version" : 1,
  "state" : "REJECTED",
  "rejectionCauses" : [ "Information package type is required", "{Validation annotation @fr.cnes.regards.framework.file.utils.validation.HandledMessageDigestAlgorithm validating FAKE: it is not an handled algorithm for checksum computation", "A representation information is required in content information" ]
} ]
```
