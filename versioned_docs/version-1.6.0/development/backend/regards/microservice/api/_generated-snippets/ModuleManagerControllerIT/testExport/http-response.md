### Response

* **Code:** 200 OK

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
`Content-Type:application/json`  
`Content-Disposition:attachment; filename="config-rs-test.json"`  

**Content:**

```json
    
{
  "microservice" : "rs-test",
  "modules" : [ {
    "module" : {
      "id" : "testModule",
      "name" : "testModule",
      "description" : "Test module",
      "version" : "Test",
      "author" : "Author",
      "legalOwner" : "CSSI",
      "documentation" : "http://test.com"
    },
    "resetBeforeImport" : false,
    "configuration" : [ {
      "key" : "fr.cnes.regards.framework.microservice.rest.test.domain.ConfigurationPojo",
      "value" : {
        "attribute" : "Configuration 0"
      }
    }, {
      "key" : "fr.cnes.regards.framework.microservice.rest.test.domain.ConfigurationPojo",
      "value" : {
        "attribute" : "Configuration 1"
      }
    }, {
      "key" : "fr.cnes.regards.framework.microservice.rest.test.domain.ConfigurationPojo",
      "value" : {
        "attribute" : "Configuration 2"
      }
    }, {
      "key" : "fr.cnes.regards.framework.microservice.rest.test.domain.ConfigurationPojo",
      "value" : {
        "attribute" : "Configuration 3"
      }
    }, {
      "key" : "fr.cnes.regards.framework.microservice.rest.test.domain.ConfigurationPojo",
      "value" : {
        "attribute" : "Configuration 4"
      }
    }, {
      "key" : "fr.cnes.regards.framework.microservice.rest.test.domain.ConfigurationPojo",
      "value" : {
        "attribute" : "Configuration 5"
      }
    }, {
      "key" : "fr.cnes.regards.framework.microservice.rest.test.domain.ConfigurationPojo",
      "value" : {
        "attribute" : "Configuration 6"
      }
    }, {
      "key" : "fr.cnes.regards.framework.microservice.rest.test.domain.ConfigurationPojo",
      "value" : {
        "attribute" : "Configuration 7"
      }
    }, {
      "key" : "fr.cnes.regards.framework.microservice.rest.test.domain.ConfigurationPojo",
      "value" : {
        "attribute" : "Configuration 8"
      }
    }, {
      "key" : "fr.cnes.regards.framework.microservice.rest.test.domain.ConfigurationPojo",
      "value" : {
        "attribute" : "Configuration 9"
      }
    } ]
  } ]
}
```
