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
`Content-Type:application/hal+json`  

**Content:**

```json
    
{
  "id" : 3,
  "name" : "ingestProcessingChain_test",
  "description" : "the updated description",
  "preProcessingPlugin" : null,
  "validationPlugin" : {
    "id" : 3,
    "metaData" : {
      "pluginClassName" : "fr.cnes.regards.modules.ingest.service.plugin.FakeValidationTestPlugin",
      "interfaceNames" : [ "fr.cnes.regards.modules.ingest.domain.plugin.ISipValidation" ],
      "author" : "REGARDS Team",
      "pluginId" : "FakeValidationTestPlugin",
      "version" : "1.0.0",
      "description" : "Fake plugin for SIP validation",
      "markdown" : "",
      "url" : "https://regardsoss.github.io/",
      "contact" : "regards@c-s.fr",
      "owner" : "CNES",
      "license" : "GPLv3",
      "parameters" : [ ]
    },
    "pluginId" : "FakeValidationTestPlugin",
    "label" : "FakeValidationTestPlugin",
    "businessId" : "c0ed1c04-2dec-480d-a5c2-eb061931273c",
    "version" : "1.0.0",
    "priorityOrder" : 0,
    "active" : true,
    "parameters" : [ ],
    "iconUrl" : null,
    "interfaceNames" : [ "fr.cnes.regards.modules.ingest.domain.plugin.ISipValidation" ],
    "pluginClassName" : "fr.cnes.regards.modules.ingest.service.plugin.FakeValidationTestPlugin",
    "identifiable" : true
  },
  "generationPlugin" : {
    "id" : 4,
    "metaData" : {
      "pluginClassName" : "fr.cnes.regards.modules.ingest.service.plugin.FakeAIPGenerationTestPlugin",
      "interfaceNames" : [ "fr.cnes.regards.modules.ingest.domain.plugin.IAipGeneration" ],
      "author" : "REGARDS Team",
      "pluginId" : "FakeAIPGenerationTestPlugin",
      "version" : "1.0.0",
      "description" : "Fake plugin for AIP generation",
      "markdown" : "",
      "url" : "https://regardsoss.github.io/",
      "contact" : "regards@c-s.fr",
      "owner" : "CNES",
      "license" : "GPLv3",
      "parameters" : [ ]
    },
    "pluginId" : "FakeAIPGenerationTestPlugin",
    "label" : "FakeAIPGenerationTestPlugin",
    "businessId" : "d3b82b6a-58d5-424d-b750-5d3763cd23ca",
    "version" : "1.0.0",
    "priorityOrder" : 0,
    "active" : true,
    "parameters" : [ ],
    "iconUrl" : null,
    "interfaceNames" : [ "fr.cnes.regards.modules.ingest.domain.plugin.IAipGeneration" ],
    "pluginClassName" : "fr.cnes.regards.modules.ingest.service.plugin.FakeAIPGenerationTestPlugin",
    "identifiable" : true
  },
  "tagPlugin" : null,
  "postProcessingPlugin" : null,
  "chainPlugins" : [ {
    "id" : 3,
    "metaData" : {
      "pluginClassName" : "fr.cnes.regards.modules.ingest.service.plugin.FakeValidationTestPlugin",
      "interfaceNames" : [ "fr.cnes.regards.modules.ingest.domain.plugin.ISipValidation" ],
      "author" : "REGARDS Team",
      "pluginId" : "FakeValidationTestPlugin",
      "version" : "1.0.0",
      "description" : "Fake plugin for SIP validation",
      "markdown" : "",
      "url" : "https://regardsoss.github.io/",
      "contact" : "regards@c-s.fr",
      "owner" : "CNES",
      "license" : "GPLv3",
      "parameters" : [ ]
    },
    "pluginId" : "FakeValidationTestPlugin",
    "label" : "FakeValidationTestPlugin",
    "businessId" : "c0ed1c04-2dec-480d-a5c2-eb061931273c",
    "version" : "1.0.0",
    "priorityOrder" : 0,
    "active" : true,
    "parameters" : [ ],
    "iconUrl" : null,
    "interfaceNames" : [ "fr.cnes.regards.modules.ingest.domain.plugin.ISipValidation" ],
    "pluginClassName" : "fr.cnes.regards.modules.ingest.service.plugin.FakeValidationTestPlugin",
    "identifiable" : true
  }, {
    "id" : 4,
    "metaData" : {
      "pluginClassName" : "fr.cnes.regards.modules.ingest.service.plugin.FakeAIPGenerationTestPlugin",
      "interfaceNames" : [ "fr.cnes.regards.modules.ingest.domain.plugin.IAipGeneration" ],
      "author" : "REGARDS Team",
      "pluginId" : "FakeAIPGenerationTestPlugin",
      "version" : "1.0.0",
      "description" : "Fake plugin for AIP generation",
      "markdown" : "",
      "url" : "https://regardsoss.github.io/",
      "contact" : "regards@c-s.fr",
      "owner" : "CNES",
      "license" : "GPLv3",
      "parameters" : [ ]
    },
    "pluginId" : "FakeAIPGenerationTestPlugin",
    "label" : "FakeAIPGenerationTestPlugin",
    "businessId" : "d3b82b6a-58d5-424d-b750-5d3763cd23ca",
    "version" : "1.0.0",
    "priorityOrder" : 0,
    "active" : true,
    "parameters" : [ ],
    "iconUrl" : null,
    "interfaceNames" : [ "fr.cnes.regards.modules.ingest.domain.plugin.IAipGeneration" ],
    "pluginClassName" : "fr.cnes.regards.modules.ingest.service.plugin.FakeAIPGenerationTestPlugin",
    "identifiable" : true
  } ],
  "_links" : {
    "delete" : {
      "href" : "http://localhost:8080/processingchains/ingestProcessingChain_test"
    },
    "update" : {
      "href" : "http://localhost:8080/processingchains/ingestProcessingChain_test"
    }
  }
}
```
