### Response

* **Code:** 200 OK

**Headers:**

`Access-Control-Allow-Origin:*`  
`Access-Control-Allow-Methods:POST, PUT, GET, OPTIONS, DELETE`  
`Access-Control-Allow-Headers:authorization, content-type, scope`  
`Access-Control-Max-Age:3600`  
`Content-Type:application/json`  
`Content-Disposition:attachment; filename="config-Test application.json"`  
`X-Content-Type-Options:nosniff`  
`X-XSS-Protection:1; mode=block`  
`Cache-Control:no-cache, no-store, max-age=0, must-revalidate`  
`Pragma:no-cache`  
`Expires:0`  
`X-Frame-Options:DENY`  

**Content:**

Template :

```json
{
    "microservice": "{microservice name}",
    "modules": [
        {
            "module": {
                "id": "{module id}",
                "name": "{module name}",
                "description": "{module description}",
                "version": "{module version}",
                "author": "{module author}",
                "legalOwner": "{module owner}",
                "documentation": "{module docu url}"
            },
            "configuration": [
                {
                    "key": "{fully qualified class name}",
                    "value": "{json}"
                }
            ]
        }
    ]
}
```
