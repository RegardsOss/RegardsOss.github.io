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
  `X-Application-Context: storage-service-test:default,test,testAmqp:-1`
  `Content-Type: application/json;charset=UTF-8`

  **Content:**

```json

[ {
  "ipId" : "URN:AIP:DATA:PROJECT:fa8abd1b-f83e-487e-ab01-8ab622674c07:V1",
  "rejectionCauses" : [ "AIP with ip id URN:AIP:DATA:PROJECT:fa8abd1b-f83e-487e-ab01-8ab622674c07:V1 already exists" ]
} ]
```