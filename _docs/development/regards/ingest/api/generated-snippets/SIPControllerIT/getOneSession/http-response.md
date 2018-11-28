* **Code:** 200 OK

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

{
  "content" : {
    "id" : "sessions-id",
    "lastActivationDate" : "2018-09-06T09:08:19.098Z",
    "sipsCount" : 0,
    "indexedSipsCount" : 0,
    "storedSipsCount" : 0,
    "generatedSipsCount" : 0,
    "errorSipsCount" : 0,
    "deletedSipsCount" : 0
  },
  "links" : [ {
    "rel" : "self",
    "href" : "http://localhost:8080/sessions/sessions-id"
  } ]
}
```
