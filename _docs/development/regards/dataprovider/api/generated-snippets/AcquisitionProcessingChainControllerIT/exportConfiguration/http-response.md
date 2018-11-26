* **Code:** 200 OK

  **Headers:**

  `Access-Control-Allow-Origin: *`
  `Access-Control-Allow-Methods: POST, PUT, GET, OPTIONS, DELETE`
  `Access-Control-Allow-Headers: authorization, content-type, scope`
  `Access-Control-Max-Age: 3600`
  `X-Application-Context: Test application:default,test,noschedule:-1`
  `Content-Type: application/json`
  `Content-Disposition: attachment; filename="config-Test application.json"`
  `X-Content-Type-Options: nosniff`
  `X-XSS-Protection: 1; mode=block`
  `Cache-Control: no-cache, no-store, max-age=0, must-revalidate`
  `Pragma: no-cache`
  `Expires: 0`
  `X-Frame-Options: DENY`

  **Content:**

```json

{
  "microservice" : "Test application",
  "modules" : [ {
    "module" : {
      "id" : "acquisition",
      "name" : "Acquisition module",
      "description" : "Data driven SIP creation",
      "version" : "2.0.0-SNAPSHOT",
      "author" : "CSSI",
      "legalOwner" : "CNES",
      "documentation" : "https://github.com/RegardsOss"
    },
    "configuration" : [ {
      "key" : "fr.cnes.regards.modules.acquisition.domain.chain.AcquisitionProcessingChain",
      "value" : {
        "label" : "Processing chain 1",
        "active" : true,
        "mode" : "MANUAL",
        "ingestChain" : "DefaultIngestChain",
        "fileInfos" : [ {
          "mandatory" : true,
          "scanPlugin" : {
            "pluginId" : "GlobDiskScanning",
            "label" : "one : Scan plugin",
            "version" : "1.0.0-SNAPSHOT",
            "priorityOrder" : 0,
            "active" : true,
            "pluginClassName" : "fr.cnes.regards.modules.acquisition.service.plugins.GlobDiskScanning",
            "interfaceNames" : [ "fr.cnes.regards.modules.acquisition.plugins.IScanPlugin" ],
            "parameters" : [ {
              "name" : "directories",
              "value" : [ ],
              "dynamic" : false,
              "dynamicsValues" : [ ],
              "onlyDynamic" : false
            } ]
          },
          "mimeType" : "application/octet-stream",
          "dataType" : "RAWDATA",
          "comment" : "A comment"
        } ],
        "validationPluginConf" : {
          "pluginId" : "DefaultFileValidation",
          "label" : "one : Validation plugin",
          "version" : "1.0.0-SNAPSHOT",
          "priorityOrder" : 0,
          "active" : true,
          "pluginClassName" : "fr.cnes.regards.modules.acquisition.service.plugins.DefaultFileValidation",
          "interfaceNames" : [ "fr.cnes.regards.modules.acquisition.plugins.IValidationPlugin" ],
          "parameters" : [ ]
        },
        "productPluginConf" : {
          "pluginId" : "DefaultProductPlugin",
          "label" : "one : Product plugin",
          "version" : "1.0.0-SNAPSHOT",
          "priorityOrder" : 0,
          "active" : true,
          "pluginClassName" : "fr.cnes.regards.modules.acquisition.service.plugins.DefaultProductPlugin",
          "interfaceNames" : [ "fr.cnes.regards.modules.acquisition.plugins.IProductPlugin" ],
          "parameters" : [ ]
        },
        "generateSipPluginConf" : {
          "pluginId" : "DefaultSIPGeneration",
          "label" : "one : SIP generation plugin",
          "version" : "1.0.0-SNAPSHOT",
          "priorityOrder" : 0,
          "active" : true,
          "pluginClassName" : "fr.cnes.regards.modules.acquisition.service.plugins.DefaultSIPGeneration",
          "interfaceNames" : [ "fr.cnes.regards.modules.acquisition.plugins.ISipGenerationPlugin" ],
          "parameters" : [ ]
        }
      }
    }, {
      "key" : "fr.cnes.regards.modules.acquisition.domain.chain.AcquisitionProcessingChain",
      "value" : {
        "label" : "Processing chain 1",
        "active" : true,
        "mode" : "MANUAL",
        "ingestChain" : "DefaultIngestChain",
        "fileInfos" : [ {
          "mandatory" : true,
          "scanPlugin" : {
            "pluginId" : "GlobDiskScanning",
            "label" : "two : Scan plugin",
            "version" : "1.0.0-SNAPSHOT",
            "priorityOrder" : 0,
            "active" : true,
            "pluginClassName" : "fr.cnes.regards.modules.acquisition.service.plugins.GlobDiskScanning",
            "interfaceNames" : [ "fr.cnes.regards.modules.acquisition.plugins.IScanPlugin" ],
            "parameters" : [ {
              "name" : "directories",
              "value" : [ ],
              "dynamic" : false,
              "dynamicsValues" : [ ],
              "onlyDynamic" : false
            } ]
          },
          "mimeType" : "application/octet-stream",
          "dataType" : "RAWDATA",
          "comment" : "A comment"
        } ],
        "validationPluginConf" : {
          "pluginId" : "DefaultFileValidation",
          "label" : "two : Validation plugin",
          "version" : "1.0.0-SNAPSHOT",
          "priorityOrder" : 0,
          "active" : true,
          "pluginClassName" : "fr.cnes.regards.modules.acquisition.service.plugins.DefaultFileValidation",
          "interfaceNames" : [ "fr.cnes.regards.modules.acquisition.plugins.IValidationPlugin" ],
          "parameters" : [ ]
        },
        "productPluginConf" : {
          "pluginId" : "DefaultProductPlugin",
          "label" : "two : Product plugin",
          "version" : "1.0.0-SNAPSHOT",
          "priorityOrder" : 0,
          "active" : true,
          "pluginClassName" : "fr.cnes.regards.modules.acquisition.service.plugins.DefaultProductPlugin",
          "interfaceNames" : [ "fr.cnes.regards.modules.acquisition.plugins.IProductPlugin" ],
          "parameters" : [ ]
        },
        "generateSipPluginConf" : {
          "pluginId" : "DefaultSIPGeneration",
          "label" : "two : SIP generation plugin",
          "version" : "1.0.0-SNAPSHOT",
          "priorityOrder" : 0,
          "active" : true,
          "pluginClassName" : "fr.cnes.regards.modules.acquisition.service.plugins.DefaultSIPGeneration",
          "interfaceNames" : [ "fr.cnes.regards.modules.acquisition.plugins.ISipGenerationPlugin" ],
          "parameters" : [ ]
        }
      }
    }, {
      "key" : "fr.cnes.regards.modules.acquisition.domain.chain.AcquisitionProcessingChain",
      "value" : {
        "label" : "Processing chain 1",
        "active" : true,
        "mode" : "MANUAL",
        "ingestChain" : "DefaultIngestChain",
        "fileInfos" : [ {
          "mandatory" : true,
          "scanPlugin" : {
            "pluginId" : "GlobDiskScanning",
            "label" : "Scan plugin update",
            "version" : "1.0.0-SNAPSHOT",
            "priorityOrder" : 0,
            "active" : true,
            "pluginClassName" : "fr.cnes.regards.modules.acquisition.service.plugins.GlobDiskScanning",
            "interfaceNames" : [ "fr.cnes.regards.modules.acquisition.plugins.IScanPlugin" ],
            "parameters" : [ {
              "name" : "directories",
              "value" : [ ],
              "dynamic" : false,
              "dynamicsValues" : [ ],
              "onlyDynamic" : false
            } ]
          },
          "mimeType" : "application/octet-stream",
          "dataType" : "RAWDATA",
          "comment" : "A comment"
        } ],
        "validationPluginConf" : {
          "pluginId" : "DefaultFileValidation",
          "label" : "update : Validation plugin",
          "version" : "1.0.0-SNAPSHOT",
          "priorityOrder" : 0,
          "active" : true,
          "pluginClassName" : "fr.cnes.regards.modules.acquisition.service.plugins.DefaultFileValidation",
          "interfaceNames" : [ "fr.cnes.regards.modules.acquisition.plugins.IValidationPlugin" ],
          "parameters" : [ ]
        },
        "productPluginConf" : {
          "pluginId" : "DefaultProductPlugin",
          "label" : "update : Product plugin",
          "version" : "1.0.0-SNAPSHOT",
          "priorityOrder" : 0,
          "active" : true,
          "pluginClassName" : "fr.cnes.regards.modules.acquisition.service.plugins.DefaultProductPlugin",
          "interfaceNames" : [ "fr.cnes.regards.modules.acquisition.plugins.IProductPlugin" ],
          "parameters" : [ ]
        },
        "generateSipPluginConf" : {
          "pluginId" : "DefaultSIPGeneration",
          "label" : "update : SIP generation plugin",
          "version" : "1.0.0-SNAPSHOT",
          "priorityOrder" : 0,
          "active" : true,
          "pluginClassName" : "fr.cnes.regards.modules.acquisition.service.plugins.DefaultSIPGeneration",
          "interfaceNames" : [ "fr.cnes.regards.modules.acquisition.plugins.ISipGenerationPlugin" ],
          "parameters" : [ ]
        }
      }
    }, {
      "key" : "fr.cnes.regards.modules.acquisition.domain.chain.AcquisitionProcessingChain",
      "value" : {
        "label" : "Processing chain 1",
        "active" : true,
        "mode" : "MANUAL",
        "ingestChain" : "DefaultIngestChain",
        "fileInfos" : [ {
          "mandatory" : true,
          "scanPlugin" : {
            "pluginId" : "GlobDiskScanning",
            "label" : "post : Scan plugin",
            "version" : "1.0.0-SNAPSHOT",
            "priorityOrder" : 0,
            "active" : true,
            "pluginClassName" : "fr.cnes.regards.modules.acquisition.service.plugins.GlobDiskScanning",
            "interfaceNames" : [ "fr.cnes.regards.modules.acquisition.plugins.IScanPlugin" ],
            "parameters" : [ {
              "name" : "directories",
              "value" : [ ],
              "dynamic" : false,
              "dynamicsValues" : [ ],
              "onlyDynamic" : false
            } ]
          },
          "mimeType" : "application/octet-stream",
          "dataType" : "RAWDATA",
          "comment" : "A comment"
        } ],
        "validationPluginConf" : {
          "pluginId" : "DefaultFileValidation",
          "label" : "post : Validation plugin",
          "version" : "1.0.0-SNAPSHOT",
          "priorityOrder" : 0,
          "active" : true,
          "pluginClassName" : "fr.cnes.regards.modules.acquisition.service.plugins.DefaultFileValidation",
          "interfaceNames" : [ "fr.cnes.regards.modules.acquisition.plugins.IValidationPlugin" ],
          "parameters" : [ ]
        },
        "productPluginConf" : {
          "pluginId" : "DefaultProductPlugin",
          "label" : "post : Product plugin",
          "version" : "1.0.0-SNAPSHOT",
          "priorityOrder" : 0,
          "active" : true,
          "pluginClassName" : "fr.cnes.regards.modules.acquisition.service.plugins.DefaultProductPlugin",
          "interfaceNames" : [ "fr.cnes.regards.modules.acquisition.plugins.IProductPlugin" ],
          "parameters" : [ ]
        },
        "generateSipPluginConf" : {
          "pluginId" : "DefaultSIPGeneration",
          "label" : "post : SIP generation plugin",
          "version" : "1.0.0-SNAPSHOT",
          "priorityOrder" : 0,
          "active" : true,
          "pluginClassName" : "fr.cnes.regards.modules.acquisition.service.plugins.DefaultSIPGeneration",
          "interfaceNames" : [ "fr.cnes.regards.modules.acquisition.plugins.ISipGenerationPlugin" ],
          "parameters" : [ ]
        }
      }
    }, {
      "key" : "fr.cnes.regards.modules.acquisition.domain.chain.AcquisitionProcessingChain",
      "value" : {
        "label" : "Processing chain 1",
        "active" : true,
        "mode" : "MANUAL",
        "ingestChain" : "DefaultIngestChain",
        "fileInfos" : [ {
          "mandatory" : true,
          "scanPlugin" : {
            "pluginId" : "GlobDiskScanning",
            "label" : "first : Scan plugin",
            "version" : "1.0.0-SNAPSHOT",
            "priorityOrder" : 0,
            "active" : true,
            "pluginClassName" : "fr.cnes.regards.modules.acquisition.service.plugins.GlobDiskScanning",
            "interfaceNames" : [ "fr.cnes.regards.modules.acquisition.plugins.IScanPlugin" ],
            "parameters" : [ {
              "name" : "directories",
              "value" : [ ],
              "dynamic" : false,
              "dynamicsValues" : [ ],
              "onlyDynamic" : false
            } ]
          },
          "mimeType" : "application/octet-stream",
          "dataType" : "RAWDATA",
          "comment" : "A comment"
        } ],
        "validationPluginConf" : {
          "pluginId" : "DefaultFileValidation",
          "label" : "first : Validation plugin",
          "version" : "1.0.0-SNAPSHOT",
          "priorityOrder" : 0,
          "active" : true,
          "pluginClassName" : "fr.cnes.regards.modules.acquisition.service.plugins.DefaultFileValidation",
          "interfaceNames" : [ "fr.cnes.regards.modules.acquisition.plugins.IValidationPlugin" ],
          "parameters" : [ ]
        },
        "productPluginConf" : {
          "pluginId" : "DefaultProductPlugin",
          "label" : "first : Product plugin",
          "version" : "1.0.0-SNAPSHOT",
          "priorityOrder" : 0,
          "active" : true,
          "pluginClassName" : "fr.cnes.regards.modules.acquisition.service.plugins.DefaultProductPlugin",
          "interfaceNames" : [ "fr.cnes.regards.modules.acquisition.plugins.IProductPlugin" ],
          "parameters" : [ ]
        },
        "generateSipPluginConf" : {
          "pluginId" : "DefaultSIPGeneration",
          "label" : "first : SIP generation plugin",
          "version" : "1.0.0-SNAPSHOT",
          "priorityOrder" : 0,
          "active" : true,
          "pluginClassName" : "fr.cnes.regards.modules.acquisition.service.plugins.DefaultSIPGeneration",
          "interfaceNames" : [ "fr.cnes.regards.modules.acquisition.plugins.ISipGenerationPlugin" ],
          "parameters" : [ ]
        }
      }
    }, {
      "key" : "fr.cnes.regards.modules.acquisition.domain.chain.AcquisitionProcessingChain",
      "value" : {
        "label" : "Processing chain 1",
        "active" : true,
        "mode" : "AUTO",
        "periodicity" : 10,
        "ingestChain" : "DefaultIngestChain",
        "fileInfos" : [ {
          "mandatory" : true,
          "scanPlugin" : {
            "pluginId" : "GlobDiskScanning",
            "label" : "Auto10s : Scan plugin",
            "version" : "1.0.0-SNAPSHOT",
            "priorityOrder" : 0,
            "active" : true,
            "pluginClassName" : "fr.cnes.regards.modules.acquisition.service.plugins.GlobDiskScanning",
            "interfaceNames" : [ "fr.cnes.regards.modules.acquisition.plugins.IScanPlugin" ],
            "parameters" : [ {
              "name" : "directories",
              "value" : [ ],
              "dynamic" : false,
              "dynamicsValues" : [ ],
              "onlyDynamic" : false
            } ]
          },
          "mimeType" : "application/octet-stream",
          "dataType" : "RAWDATA",
          "comment" : "A comment"
        } ],
        "validationPluginConf" : {
          "pluginId" : "DefaultFileValidation",
          "label" : "Auto10s : Validation plugin",
          "version" : "1.0.0-SNAPSHOT",
          "priorityOrder" : 0,
          "active" : true,
          "pluginClassName" : "fr.cnes.regards.modules.acquisition.service.plugins.DefaultFileValidation",
          "interfaceNames" : [ "fr.cnes.regards.modules.acquisition.plugins.IValidationPlugin" ],
          "parameters" : [ ]
        },
        "productPluginConf" : {
          "pluginId" : "DefaultProductPlugin",
          "label" : "Auto10s : Product plugin",
          "version" : "1.0.0-SNAPSHOT",
          "priorityOrder" : 0,
          "active" : true,
          "pluginClassName" : "fr.cnes.regards.modules.acquisition.service.plugins.DefaultProductPlugin",
          "interfaceNames" : [ "fr.cnes.regards.modules.acquisition.plugins.IProductPlugin" ],
          "parameters" : [ ]
        },
        "generateSipPluginConf" : {
          "pluginId" : "DefaultSIPGeneration",
          "label" : "Auto10s : SIP generation plugin",
          "version" : "1.0.0-SNAPSHOT",
          "priorityOrder" : 0,
          "active" : true,
          "pluginClassName" : "fr.cnes.regards.modules.acquisition.service.plugins.DefaultSIPGeneration",
          "interfaceNames" : [ "fr.cnes.regards.modules.acquisition.plugins.ISipGenerationPlugin" ],
          "parameters" : [ ]
        }
      }
    }, {
      "key" : "fr.cnes.regards.modules.acquisition.domain.chain.AcquisitionProcessingChain",
      "value" : {
        "label" : "Processing chain 2",
        "active" : false,
        "mode" : "AUTO",
        "periodicity" : 10,
        "ingestChain" : "DefaultIngestChain",
        "fileInfos" : [ {
          "mandatory" : true,
          "scanPlugin" : {
            "pluginId" : "GlobDiskScanning",
            "label" : "Auto11s : Scan plugin",
            "version" : "1.0.0-SNAPSHOT",
            "priorityOrder" : 0,
            "active" : true,
            "pluginClassName" : "fr.cnes.regards.modules.acquisition.service.plugins.GlobDiskScanning",
            "interfaceNames" : [ "fr.cnes.regards.modules.acquisition.plugins.IScanPlugin" ],
            "parameters" : [ {
              "name" : "directories",
              "value" : [ ],
              "dynamic" : false,
              "dynamicsValues" : [ ],
              "onlyDynamic" : false
            } ]
          },
          "mimeType" : "application/octet-stream",
          "dataType" : "RAWDATA",
          "comment" : "A comment"
        } ],
        "validationPluginConf" : {
          "pluginId" : "DefaultFileValidation",
          "label" : "Auto11s : Validation plugin",
          "version" : "1.0.0-SNAPSHOT",
          "priorityOrder" : 0,
          "active" : true,
          "pluginClassName" : "fr.cnes.regards.modules.acquisition.service.plugins.DefaultFileValidation",
          "interfaceNames" : [ "fr.cnes.regards.modules.acquisition.plugins.IValidationPlugin" ],
          "parameters" : [ ]
        },
        "productPluginConf" : {
          "pluginId" : "DefaultProductPlugin",
          "label" : "Auto11s : Product plugin",
          "version" : "1.0.0-SNAPSHOT",
          "priorityOrder" : 0,
          "active" : true,
          "pluginClassName" : "fr.cnes.regards.modules.acquisition.service.plugins.DefaultProductPlugin",
          "interfaceNames" : [ "fr.cnes.regards.modules.acquisition.plugins.IProductPlugin" ],
          "parameters" : [ ]
        },
        "generateSipPluginConf" : {
          "pluginId" : "DefaultSIPGeneration",
          "label" : "Auto11s : SIP generation plugin",
          "version" : "1.0.0-SNAPSHOT",
          "priorityOrder" : 0,
          "active" : true,
          "pluginClassName" : "fr.cnes.regards.modules.acquisition.service.plugins.DefaultSIPGeneration",
          "interfaceNames" : [ "fr.cnes.regards.modules.acquisition.plugins.ISipGenerationPlugin" ],
          "parameters" : [ ]
        }
      }
    } ]
  } ]
}
```
