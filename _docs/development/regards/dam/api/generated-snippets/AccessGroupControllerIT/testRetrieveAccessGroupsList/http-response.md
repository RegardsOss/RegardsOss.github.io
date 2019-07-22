#### Request

* **Code:** 200 OK

        **Headers:**

        `Pragma:no-cache`
        `X-XSS-Protection:1; mode=block`
        `Expires:0`
        `X-Frame-Options:DENY`
        `X-Content-Type-Options:nosniff`
        `Access-Control-Allow-Headers:authorization, content-type, scope`
        `Access-Control-Max-Age:3600`
        `Content-Type:application/json;charset=UTF-8`
        `Access-Control-Allow-Origin:*`
        `Cache-Control:no-cache, no-store, max-age=0, must-revalidate`
        `Access-Control-Allow-Methods:POST, PUT, GET, OPTIONS, DELETE`

        **Content:**

        ```json
    
{
  "metadata" : {
    "size" : 10,
    "totalElements" : 2,
    "totalPages" : 1,
    "number" : 0
  },
  "content" : [ {
    "content" : {
      "id" : 10,
      "name" : "AG1",
      "users" : [ ],
      "isPublic" : false,
      "isInternal" : false
    },
    "links" : [ {
      "rel" : "self",
      "href" : "http://localhost:8080/accessgroups/AG1"
    } ]
  }, {
    "content" : {
      "id" : 11,
      "name" : "AG2",
      "users" : [ ],
      "isPublic" : true,
      "isInternal" : false
    },
    "links" : [ {
      "rel" : "self",
      "href" : "http://localhost:8080/accessgroups/AG2"
    } ]
  } ],
  "links" : [ {
    "rel" : "self",
    "href" : "http://localhost:8080/accessgroups?page=0&size=10&sort=id,asc"
  } ]
}
        ```
