#### Request

* **Code:** 200 OK

        **Headers:**

        `Content-Type:text/csv`
        `Pragma:no-cache`
        `X-XSS-Protection:1; mode=block`
        `X-Frame-Options:DENY`
        `Expires:0`
        `X-Content-Type-Options:nosniff`
        `Access-Control-Allow-Headers:authorization, content-type, scope`
        `Content-Disposition:attachment;filename=orders.csv`
        `Access-Control-Max-Age:3600`
        `Access-Control-Allow-Origin:*`
        `Cache-Control:no-cache, no-store, max-age=0, must-revalidate`
        `Access-Control-Allow-Methods:POST, PUT, GET, OPTIONS, DELETE`

        **Content:**

```json
    
ORDER_ID;CREATION_DATE;EXPIRATION_DATE;OWNER;STATUS;STATUS_DATE;PERCENT_COMPLETE;FILES_IN_ERROR
2;2019-07-22T07:30:00.914Z;2019-07-25T07:30:00.914Z;other.user1@regards.fr;PENDING;2019-07-22T07:30:00.914Z;0;0
3;2019-07-22T07:30:00.921Z;2019-07-25T07:30:00.921Z;default_user@regards.fr;PENDING;2019-07-22T07:30:00.921Z;0;0
4;2019-07-22T07:30:00.926Z;2019-07-25T07:30:00.926Z;other.user2@regards.fr;PENDING;2019-07-22T07:30:00.926Z;0;0

        ```
