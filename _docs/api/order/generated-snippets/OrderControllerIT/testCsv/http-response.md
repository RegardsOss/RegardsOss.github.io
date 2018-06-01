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
  `X-Application-Context: Test application:default,test:-1`
  `Content-disposition: attachment;filename=orders.csv`
  `Content-Type: text/csv`

  **Content:**

```json

ORDER_ID;CREATION_DATE;EXPIRATION_DATE;OWNER;STATUS;STATUS_DATE;PERCENT_COMPLETE;FILES_IN_ERROR
653;2018-06-01T12:37:08.306Z;2018-06-04T12:37:08.306Z;other.user1@regards.fr;PENDING;2018-06-01T12:37:08.306Z;0;0
654;2018-06-01T12:37:08.311Z;2018-06-04T12:37:08.311Z;default_user@regards.fr;PENDING;2018-06-01T12:37:08.311Z;0;0
655;2018-06-01T12:37:08.316Z;2018-06-04T12:37:08.316Z;other.user2@regards.fr;PENDING;2018-06-01T12:37:08.315Z;0;0

```
