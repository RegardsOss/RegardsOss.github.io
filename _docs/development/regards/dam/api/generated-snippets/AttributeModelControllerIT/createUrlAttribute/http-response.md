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
  "content" : {
    "id" : 22,
    "name" : "URL_ATT",
    "description" : "url description",
    "type" : "URL",
    "fragment" : {
      "id" : 10,
      "name" : "default",
      "description" : "Default fragment"
    },
    "alterable" : false,
    "optional" : false,
    "label" : "ForTests",
    "dynamic" : true,
    "internal" : false,
    "jsonPath" : "properties.URL_ATT"
  },
  "links" : [ ]
}
        ```
