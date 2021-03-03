#### Request

* **Code:** 201 Created

        **Headers:**

        `Pragma:no-cache`
        `X-XSS-Protection:1; mode=block`
        `Expires:0`
        `X-Frame-Options:DENY`
        `X-Content-Type-Options:nosniff`
        `Access-Control-Allow-Headers:authorization, content-type, scope`
        `Content-Type:application/hal+json;charset=UTF-8`
        `Access-Control-Max-Age:3600`
        `Access-Control-Allow-Origin:*`
        `Cache-Control:no-cache, no-store, max-age=0, must-revalidate`
        `Access-Control-Allow-Methods:POST, PUT, GET, OPTIONS, DELETE`

        **Content:**

```json
    
{
  "id" : 57,
  "name" : "ingestProcessingChain_test",
  "description" : "the ingest processing chain description",
  "preProcessingPlugin" : null,
  "validationPlugin" : {
    "id" : 60,
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
    "businessId" : "55fe8a50-7c9b-4548-80e5-ef889902b4b6",
    "version" : "1.0.0",
    "priorityOrder" : 0,
    "active" : true,
    "parameters" : [ ],
    "iconUrl" : null,
    "pluginClassName" : "fr.cnes.regards.modules.ingest.service.plugin.FakeValidationTestPlugin",
    "interfaceNames" : [ "fr.cnes.regards.modules.ingest.domain.plugin.ISipValidation" ],
    "identifiable" : true
  },
  "generationPlugin" : {
    "id" : 61,
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
    "businessId" : "e000241a-0057-4c89-95d3-142c5a5216ff",
    "version" : "1.0.0",
    "priorityOrder" : 0,
    "active" : true,
    "parameters" : [ ],
    "iconUrl" : null,
    "pluginClassName" : "fr.cnes.regards.modules.ingest.service.plugin.FakeAIPGenerationTestPlugin",
    "interfaceNames" : [ "fr.cnes.regards.modules.ingest.domain.plugin.IAipGeneration" ],
    "identifiable" : true
  },
  "tagPlugin" : null,
  "postProcessingPlugin" : null,
  "chainPlugins" : [ {
    "id" : 60,
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
    "businessId" : "55fe8a50-7c9b-4548-80e5-ef889902b4b6",
    "version" : "1.0.0",
    "priorityOrder" : 0,
    "active" : true,
    "parameters" : [ ],
    "iconUrl" : null,
    "pluginClassName" : "fr.cnes.regards.modules.ingest.service.plugin.FakeValidationTestPlugin",
    "interfaceNames" : [ "fr.cnes.regards.modules.ingest.domain.plugin.ISipValidation" ],
    "identifiable" : true
  }, {
    "id" : 61,
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
    "businessId" : "e000241a-0057-4c89-95d3-142c5a5216ff",
    "version" : "1.0.0",
    "priorityOrder" : 0,
    "active" : true,
    "parameters" : [ ],
    "iconUrl" : null,
    "pluginClassName" : "fr.cnes.regards.modules.ingest.service.plugin.FakeAIPGenerationTestPlugin",
    "interfaceNames" : [ "fr.cnes.regards.modules.ingest.domain.plugin.IAipGeneration" ],
    "identifiable" : true
  } ],
  "_links" : {
    "delete" : {
      "href" : "http://localhost:8080/processingchains/ingestProcessingChain_test"
    },
    "update" : {
      "href" : "http://localhost:8080/processingchains/ingestProcessingChain_test"
    },
    "export" : {
      "href" : "http://localhost:8080/processingchains/ingestProcessingChain_test/export"
    }
  }
}
```
