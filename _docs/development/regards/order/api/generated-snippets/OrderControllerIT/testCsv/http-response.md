* **Code:** 200 OK

  **Headers:**

  `Access-Control-Allow-Origin: *`
  `Access-Control-Allow-Methods: POST, PUT, GET, OPTIONS, DELETE`
  `Access-Control-Allow-Headers: authorization, content-type, scope`
  `Access-Control-Max-Age: 3600`
  `X-Application-Context: Test application:default,test,noschedule:-1`
  `Content-Disposition: attachment;filename=orders.csv`
  `Content-Type: text/csv`
  `X-Content-Type-Options: nosniff`
  `X-XSS-Protection: 1; mode=block`
  `Cache-Control: no-cache, no-store, max-age=0, must-revalidate`
  `Pragma: no-cache`
  `Expires: 0`
  `X-Frame-Options: DENY`

  **Content:**

```json

ORDER_ID;CREATION_DATE;EXPIRATION_DATE;OWNER;STATUS;STATUS_DATE;PERCENT_COMPLETE;FILES_IN_ERROR
653;2018-09-07T09:37:10.884Z;2018-09-10T09:37:10.884Z;other.user1@regards.fr;PENDING;2018-09-07T09:37:10.884Z;0;0
654;2018-09-07T09:37:10.906Z;2018-09-10T09:37:10.906Z;default_user@regards.fr;PENDING;2018-09-07T09:37:10.906Z;0;0
655;2018-09-07T09:37:10.926Z;2018-09-10T09:37:10.926Z;other.user2@regards.fr;PENDING;2018-09-07T09:37:10.926Z;0;0

```
