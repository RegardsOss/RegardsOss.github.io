### Response

* **Code:** 201 Created

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
  "id" : 7,
  "name" : "ingestProcessingChain_test",
  "description" : "the ingest processing chain description",
  "preProcessingPlugin" : null,
  "validationPlugin" : {
    "id" : 11,
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
    "businessId" : "e9497f97-850b-4995-bc66-b916476fe398",
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
    "id" : 12,
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
    "businessId" : "a209f715-13db-4b93-91b6-35708589d449",
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
    "id" : 11,
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
    "businessId" : "e9497f97-850b-4995-bc66-b916476fe398",
    "version" : "1.0.0",
    "priorityOrder" : 0,
    "active" : true,
    "parameters" : [ ],
    "iconUrl" : null,
    "interfaceNames" : [ "fr.cnes.regards.modules.ingest.domain.plugin.ISipValidation" ],
    "pluginClassName" : "fr.cnes.regards.modules.ingest.service.plugin.FakeValidationTestPlugin",
    "identifiable" : true
  }, {
    "id" : 12,
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
    "businessId" : "a209f715-13db-4b93-91b6-35708589d449",
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
