* **Code:** 422 Unprocessable Entity

  **Headers:**

  `Access-Control-Allow-Origin: *`
  `Access-Control-Allow-Methods: POST, PUT, GET, OPTIONS, DELETE`
  `Access-Control-Allow-Headers: authorization, content-type, scope`
  `Access-Control-Max-Age: 3600`
  `X-Application-Context: Test application:default,test,noschedule:-1`
  `Content-Type: application/json;charset=UTF-8`
  `X-Content-Type-Options: nosniff`
  `X-XSS-Protection: 1; mode=block`
  `Cache-Control: no-cache, no-store, max-age=0, must-revalidate`
  `Pragma: no-cache`
  `Expires: 0`
  `X-Frame-Options: DENY`

  **Content:**

```json

[ {
  "id" : "providerId41",
  "sipId" : "URN:SIP:DATA:PROJECT:0aa28452-06fe-32f1-8cea-7ba2a1400099:V1",
  "version" : 1,
  "state" : "REJECTED",
  "rejectionCauses" : [ "A representation information is required in content information", "Data file checksum is required" ]
}, {
  "id" : "providerId42",
  "sipId" : "URN:SIP:DATA:PROJECT:a7768256-478a-3fa5-889e-e14cd48f04f1:V1",
  "version" : 1,
  "state" : "REJECTED",
  "rejectionCauses" : [ "A representation information is required in content information", "Information package type is required", "{Validation annotation @fr.cnes.regards.framework.file.utils.validation.HandledMessageDigestAlgorithm validating FAKE: it is not an handled algorithm for checksum computation" ]
} ]
```
