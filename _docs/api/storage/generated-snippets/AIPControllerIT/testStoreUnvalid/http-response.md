* **Code:** 422 Unprocessable Entity

  **Headers:**

  `Access-Control-Allow-Origin: *`
  `Access-Control-Allow-Methods: POST, PUT, GET, OPTIONS, DELETE`
  `Access-Control-Allow-Headers: authorization, content-type, scope`
  `Access-Control-Max-Age: 3600`
  `X-Application-Context: storage-service-test:default,test,noschedule,testAmqp:-1`
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
  "aipId" : "URN:AIP:DATA:PROJECT:f988c08c-2708-4b31-a962-b07ead83d824:V1",
  "rejectionCauses" : [ "Property properties.contentInformations[0].dataObject.checksum is invalid: Data file checksum is required" ]
} ]
```
