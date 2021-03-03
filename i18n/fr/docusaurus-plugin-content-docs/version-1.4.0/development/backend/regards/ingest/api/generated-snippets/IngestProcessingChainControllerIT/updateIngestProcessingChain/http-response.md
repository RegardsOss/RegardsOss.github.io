#### Request

* **Code:** 200 OK

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
  "id" : 53,
  "name" : "ingestProcessingChain_test",
  "description" : "the updated description",
  "preProcessingPlugin" : null,
  "validationPlugin" : {
    "id" : 52,
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
    "businessId" : "fdcdea4a-6291-48e9-a482-162fa0a65311",
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
    "id" : 53,
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
    "businessId" : "94a12f2b-fa02-46c1-8b64-f82f6a78bc29",
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
    "id" : 52,
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
    "businessId" : "fdcdea4a-6291-48e9-a482-162fa0a65311",
    "version" : "1.0.0",
    "priorityOrder" : 0,
    "active" : true,
    "parameters" : [ ],
    "iconUrl" : null,
    "pluginClassName" : "fr.cnes.regards.modules.ingest.service.plugin.FakeValidationTestPlugin",
    "interfaceNames" : [ "fr.cnes.regards.modules.ingest.domain.plugin.ISipValidation" ],
    "identifiable" : true
  }, {
    "id" : 53,
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
    "businessId" : "94a12f2b-fa02-46c1-8b64-f82f6a78bc29",
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
    }
  }
}
```
