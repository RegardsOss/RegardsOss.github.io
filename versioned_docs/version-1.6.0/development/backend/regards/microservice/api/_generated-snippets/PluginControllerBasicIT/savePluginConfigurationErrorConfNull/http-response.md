### Response

* **Code:** 400 Bad Request

**Headers:**

`X-Content-Type-Options:nosniff`  
`X-XSS-Protection:1; mode=block`  
`Cache-Control:no-cache, no-store, max-age=0, must-revalidate`  
`Pragma:no-cache`  
`Expires:0`  
`X-Frame-Options:DENY`  
`Access-Control-Allow-Origin:*`  
`Access-Control-Allow-Methods:POST, PUT, GET, OPTIONS, DELETE`  
`Access-Control-Allow-Headers:authorization, content-type, scope`  
`Access-Control-Max-Age:3600`  
`Content-Type:application/json;charset=UTF-8`  

**Content:**

```json
    
{
  "messages" : [ "Required request body is missing: public org.springframework.http.ResponseEntity<org.springframework.hateoas.EntityModel<fr.cnes.regards.framework.modules.plugins.domain.PluginConfiguration>> fr.cnes.regards.framework.modules.plugins.rest.PluginController.savePluginConfiguration(fr.cnes.regards.framework.modules.plugins.domain.PluginConfiguration) throws fr.cnes.regards.framework.module.rest.exception.ModuleException" ]
}
```
