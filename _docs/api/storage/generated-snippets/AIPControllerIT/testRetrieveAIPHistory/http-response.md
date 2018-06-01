* **Code:** 200 OK

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
  "type" : "SUBMISSION",
  "comment" : "test event",
  "date" : "2018-06-01T09:39:53.178Z"
}, {
  "type" : "SUBMISSION",
  "comment" : "Submission to REGARDS",
  "date" : "2018-06-01T09:39:53.276Z"
} ]
```
