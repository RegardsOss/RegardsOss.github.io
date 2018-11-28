* **Code:** 206 Partial Content

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
  "id" : "providerId31",
  "sipId" : "URN:SIP:DATA:PROJECT:48c45ca7-0b58-3763-96d6-26d83b2eedf4:V1",
  "version" : 1,
  "state" : "CREATED"
}, {
  "id" : "providerId32",
  "sipId" : "URN:SIP:DATA:PROJECT:d6d1777c-e8d2-365c-a95a-c4da1c7d73d4:V1",
  "version" : 1,
  "state" : "REJECTED",
  "rejectionCauses" : [ "{Validation annotation @fr.cnes.regards.framework.file.utils.validation.HandledMessageDigestAlgorithm validating PLOUF: it is not an handled algorithm for checksum computation", "A representation information is required in content information", "Information package type is required" ]
} ]
```
