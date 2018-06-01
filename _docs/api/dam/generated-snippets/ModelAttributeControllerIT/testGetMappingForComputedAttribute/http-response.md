* **Code:** 200 OK

  **Headers:**

  `X-Content-Type-Options: nosniff`
  `X-XSS-Protection: 1; mode=block`
  `Cache-Control: no-cache, no-store, max-age=0, must-revalidate`
  `Pragma: no-cache`
  `Expires: 0`
  `X-Frame-Options: DENY`
  `Access-Control-Allow-Origin: *`
  `Access-Control-Allow-Methods: POST, PUT, GET, OPTIONS, DELETE`
  `Access-Control-Allow-Headers: authorization, content-type, scope`
  `Access-Control-Max-Age: 3600`
  `X-Application-Context: Test application:default,test:-1`
  `Content-Type: application/json;charset=UTF-8`

  **Content:**

```json

[ {
  "content" : {
    "attrType" : "STRING",
    "pluginConfigurations" : [ ],
    "pluginMetaDatas" : [ {
      "content" : {
        "pluginClassName" : "fr.cnes.regards.modules.models.rest.TestComputedAttribute",
        "interfaceNames" : [ "fr.cnes.regards.modules.models.domain.IComputedAttribute" ],
        "author" : "REGARDS Team",
        "pluginId" : "TestComputedAttribute",
        "version" : "1.0.0",
        "description" : "plugin there just for tests in model-rest",
        "markdown" : "",
        "url" : "https://github.com/RegardsOss",
        "contact" : "regards@c-s.fr",
        "owner" : "CSSI",
        "licence" : "LGPLv3.0",
        "parameters" : [ ]
      },
      "links" : [ ]
    } ]
  },
  "links" : [ ]
}, {
  "content" : {
    "attrType" : "INTEGER",
    "pluginConfigurations" : [ {
      "content" : {
        "id" : 52,
        "pluginId" : "IntSumComputePlugin",
        "label" : "8152ea7f-78e0-4cc4-871e-82af61fdcac9",
        "version" : "1.0.0",
        "priorityOrder" : 0,
        "active" : true,
        "pluginClassName" : "fr.cnes.regards.modules.entities.plugin.IntSumComputePlugin",
        "interfaceNames" : [ "fr.cnes.regards.modules.models.domain.IComputedAttribute" ],
        "parameters" : [ {
          "id" : 1,
          "name" : "parameterAttributeName",
          "value" : "toto",
          "dynamic" : false,
          "dynamicsValues" : [ ],
          "onlyDynamic" : false
        }, {
          "id" : 2,
          "name" : "resultAttributeName",
          "value" : "titi",
          "dynamic" : false,
          "dynamicsValues" : [ ],
          "onlyDynamic" : false
        } ]
      },
      "links" : [ ]
    } ],
    "pluginMetaDatas" : [ {
      "content" : {
        "pluginClassName" : "fr.cnes.regards.modules.entities.plugin.IntSumComputePlugin",
        "interfaceNames" : [ "fr.cnes.regards.modules.models.domain.IComputedAttribute" ],
        "author" : "REGARDS Team",
        "pluginId" : "IntSumComputePlugin",
        "version" : "1.0.0",
        "description" : "allows to compute the sum of IntegerAttribute according to a collection of data using the same IntegerAttribute name",
        "markdown" : "",
        "url" : "https://github.com/RegardsOss",
        "contact" : "regards@c-s.fr",
        "owner" : "CSSI",
        "licence" : "LGPLv3.0",
        "parameters" : [ {
          "name" : "parameterAttributeName",
          "label" : "Parameter attribute name",
          "description" : "Name of parameter attribute used to compute result attribute.",
          "markdown" : "",
          "type" : "java.lang.String",
          "paramType" : "PRIMITIVE",
          "optional" : false,
          "parameters" : [ ],
          "unconfigurable" : false
        }, {
          "name" : "parameterAttributeFragmentName",
          "label" : "Parameter fragment name",
          "description" : "Name of parameter attribute fragment. If parameter attribute belongs to default fragment, this value can be set to null.",
          "markdown" : "",
          "type" : "java.lang.String",
          "paramType" : "PRIMITIVE",
          "optional" : true,
          "parameters" : [ ],
          "unconfigurable" : false
        }, {
          "name" : "resultAttributeName",
          "label" : "Result attribute name",
          "description" : "Name of attribute to compute (ie result attribute).",
          "markdown" : "",
          "type" : "java.lang.String",
          "paramType" : "PRIMITIVE",
          "optional" : false,
          "parameters" : [ ],
          "unconfigurable" : true
        }, {
          "name" : "resultAttributeFragmentName",
          "label" : "Result fragment name",
          "description" : "Name of attribute to compute fragment. If computed attribute belongs to default fragment, this value can be set to null.",
          "markdown" : "",
          "type" : "java.lang.String",
          "paramType" : "PRIMITIVE",
          "optional" : true,
          "parameters" : [ ],
          "unconfigurable" : true
        } ]
      },
      "links" : [ ]
    } ]
  },
  "links" : [ ]
}, {
  "content" : {
    "attrType" : "DOUBLE",
    "pluginConfigurations" : [ ],
    "pluginMetaDatas" : [ ]
  },
  "links" : [ ]
}, {
  "content" : {
    "attrType" : "DATE_ISO8601",
    "pluginConfigurations" : [ ],
    "pluginMetaDatas" : [ {
      "content" : {
        "pluginClassName" : "fr.cnes.regards.modules.entities.plugin.MinDateComputePlugin",
        "interfaceNames" : [ "fr.cnes.regards.modules.models.domain.IComputedAttribute" ],
        "author" : "REGARDS Team",
        "pluginId" : "MinDateComputePlugin",
        "version" : "1.0.0",
        "description" : "allows to compute the minimum of a DateAttribute according to a collection of data",
        "markdown" : "",
        "url" : "https://github.com/RegardsOss",
        "contact" : "regards@c-s.fr",
        "owner" : "CSSI",
        "licence" : "LGPLv3.0",
        "parameters" : [ {
          "name" : "parameterAttributeName",
          "label" : "Parameter attribute name",
          "description" : "Name of parameter attribute used to compute result attribute.",
          "markdown" : "",
          "type" : "java.lang.String",
          "paramType" : "PRIMITIVE",
          "optional" : false,
          "parameters" : [ ],
          "unconfigurable" : false
        }, {
          "name" : "parameterAttributeFragmentName",
          "label" : "Parameter fragment name",
          "description" : "Name of the parameter attribute fragment. If the parameter attribute belongs to the default fragment, this value can be set to null.",
          "markdown" : "",
          "type" : "java.lang.String",
          "paramType" : "PRIMITIVE",
          "optional" : true,
          "parameters" : [ ],
          "unconfigurable" : false
        }, {
          "name" : "resultAttributeName",
          "label" : "Result attribute name",
          "description" : "Name of attribute to compute (ie result attribute).",
          "markdown" : "",
          "type" : "java.lang.String",
          "paramType" : "PRIMITIVE",
          "optional" : false,
          "parameters" : [ ],
          "unconfigurable" : true
        }, {
          "name" : "resultAttributeFragmentName",
          "label" : "Result fragment name",
          "description" : "Name of attribute to compute fragment. If computed attribute belongs to default fragment, this value can be set to null.",
          "markdown" : "",
          "type" : "java.lang.String",
          "paramType" : "PRIMITIVE",
          "optional" : true,
          "parameters" : [ ],
          "unconfigurable" : true
        } ]
      },
      "links" : [ ]
    }, {
      "content" : {
        "pluginClassName" : "fr.cnes.regards.modules.entities.plugin.MaxDateComputePlugin",
        "interfaceNames" : [ "fr.cnes.regards.modules.models.domain.IComputedAttribute" ],
        "author" : "REGARDS Team",
        "pluginId" : "MaxDateComputePlugin",
        "version" : "1.0.0",
        "description" : "allows to compute the maximum of a DateAttribute according to a collection of data",
        "markdown" : "",
        "url" : "https://github.com/RegardsOss",
        "contact" : "regards@c-s.fr",
        "owner" : "CSSI",
        "licence" : "LGPLv3.0",
        "parameters" : [ {
          "name" : "parameterAttributeName",
          "label" : "Parameter attribute name",
          "description" : "Name of parameter attribute used to compute result attribute.",
          "markdown" : "",
          "type" : "java.lang.String",
          "paramType" : "PRIMITIVE",
          "optional" : false,
          "parameters" : [ ],
          "unconfigurable" : false
        }, {
          "name" : "parameterAttributeFragmentName",
          "label" : "Parameter fragment name",
          "description" : "Name of parameter attribute fragment. If parameter attribute belongs to default fragment, this value can be set to null.",
          "markdown" : "",
          "type" : "java.lang.String",
          "paramType" : "PRIMITIVE",
          "optional" : true,
          "parameters" : [ ],
          "unconfigurable" : false
        }, {
          "name" : "resultAttributeName",
          "label" : "Result attribute name",
          "description" : "Name of attribute to compute (ie result attribute).",
          "markdown" : "",
          "type" : "java.lang.String",
          "paramType" : "PRIMITIVE",
          "optional" : false,
          "parameters" : [ ],
          "unconfigurable" : true
        }, {
          "name" : "resultAttributeFragmentName",
          "label" : "Result fragment name",
          "description" : "Name of attribute to compute fragment. If computed attribute belongs to default fragment, this value can be set to null.",
          "markdown" : "",
          "type" : "java.lang.String",
          "paramType" : "PRIMITIVE",
          "optional" : true,
          "parameters" : [ ],
          "unconfigurable" : true
        } ]
      },
      "links" : [ ]
    } ]
  },
  "links" : [ ]
}, {
  "content" : {
    "attrType" : "URL",
    "pluginConfigurations" : [ ],
    "pluginMetaDatas" : [ ]
  },
  "links" : [ ]
}, {
  "content" : {
    "attrType" : "BOOLEAN",
    "pluginConfigurations" : [ ],
    "pluginMetaDatas" : [ ]
  },
  "links" : [ ]
}, {
  "content" : {
    "attrType" : "STRING_ARRAY",
    "pluginConfigurations" : [ ],
    "pluginMetaDatas" : [ ]
  },
  "links" : [ ]
}, {
  "content" : {
    "attrType" : "INTEGER_ARRAY",
    "pluginConfigurations" : [ ],
    "pluginMetaDatas" : [ ]
  },
  "links" : [ ]
}, {
  "content" : {
    "attrType" : "DOUBLE_ARRAY",
    "pluginConfigurations" : [ ],
    "pluginMetaDatas" : [ ]
  },
  "links" : [ ]
}, {
  "content" : {
    "attrType" : "DATE_ARRAY",
    "pluginConfigurations" : [ ],
    "pluginMetaDatas" : [ ]
  },
  "links" : [ ]
}, {
  "content" : {
    "attrType" : "INTEGER_INTERVAL",
    "pluginConfigurations" : [ ],
    "pluginMetaDatas" : [ ]
  },
  "links" : [ ]
}, {
  "content" : {
    "attrType" : "DOUBLE_INTERVAL",
    "pluginConfigurations" : [ ],
    "pluginMetaDatas" : [ ]
  },
  "links" : [ ]
}, {
  "content" : {
    "attrType" : "DATE_INTERVAL",
    "pluginConfigurations" : [ ],
    "pluginMetaDatas" : [ ]
  },
  "links" : [ ]
}, {
  "content" : {
    "attrType" : "LONG",
    "pluginConfigurations" : [ ],
    "pluginMetaDatas" : [ {
      "content" : {
        "pluginClassName" : "fr.cnes.regards.modules.entities.plugin.LongSumComputePlugin",
        "interfaceNames" : [ "fr.cnes.regards.modules.models.domain.IComputedAttribute" ],
        "author" : "REGARDS Team",
        "pluginId" : "LongSumComputePlugin",
        "version" : "1.0.0",
        "description" : "allows to compute the sum of LongAttribute according to a collection of data using the same LongAttribute name",
        "markdown" : "",
        "url" : "https://github.com/RegardsOss",
        "contact" : "regards@c-s.fr",
        "owner" : "CSSI",
        "licence" : "LGPLv3.0",
        "parameters" : [ {
          "name" : "parameterAttributeName",
          "label" : "Parameter attribute name",
          "description" : "Name of parameter attribute used to compute result attribute.",
          "markdown" : "",
          "type" : "java.lang.String",
          "paramType" : "PRIMITIVE",
          "optional" : false,
          "parameters" : [ ],
          "unconfigurable" : false
        }, {
          "name" : "parameterAttributeFragmentName",
          "label" : "Parameter fragment name",
          "description" : "Name of parameter attribute fragment. If parameter attribute belongs to default fragment, this value can be set to null.",
          "markdown" : "",
          "type" : "java.lang.String",
          "paramType" : "PRIMITIVE",
          "optional" : true,
          "parameters" : [ ],
          "unconfigurable" : false
        }, {
          "name" : "resultAttributeName",
          "label" : "Result attribute name",
          "description" : "Name of attribute to compute (ie result attribute).",
          "markdown" : "",
          "type" : "java.lang.String",
          "paramType" : "PRIMITIVE",
          "optional" : false,
          "parameters" : [ ],
          "unconfigurable" : true
        }, {
          "name" : "resultAttributeFragmentName",
          "label" : "Result fragment name",
          "description" : "Name of attribute to compute fragment. If computed attribute belongs to default fragment, this value can be set to null.",
          "markdown" : "",
          "type" : "java.lang.String",
          "paramType" : "PRIMITIVE",
          "optional" : true,
          "parameters" : [ ],
          "unconfigurable" : true
        } ]
      },
      "links" : [ ]
    }, {
      "content" : {
        "pluginClassName" : "fr.cnes.regards.modules.entities.plugin.CountPlugin",
        "interfaceNames" : [ "fr.cnes.regards.modules.models.domain.IComputedAttribute" ],
        "author" : "REGARDS Team",
        "pluginId" : "CountPlugin",
        "version" : "1.0.0",
        "description" : "allows to compute the number of data of a Dataset",
        "markdown" : "",
        "url" : "https://github.com/RegardsOss",
        "contact" : "regards@c-s.fr",
        "owner" : "CSSI",
        "licence" : "LGPLv3.0",
        "parameters" : [ {
          "name" : "resultAttributeName",
          "label" : "Result attribute name",
          "description" : "Name of attribute to compute (ie result attribute).",
          "markdown" : "",
          "type" : "java.lang.String",
          "paramType" : "PRIMITIVE",
          "optional" : false,
          "parameters" : [ ],
          "unconfigurable" : true
        }, {
          "name" : "resultAttributeFragmentName",
          "label" : "Result fragment name",
          "description" : "Name of attribute to compute fragment. If computed attribute belongs to default fragment, this value can be set to null.",
          "markdown" : "",
          "type" : "java.lang.String",
          "paramType" : "PRIMITIVE",
          "optional" : true,
          "parameters" : [ ],
          "unconfigurable" : true
        } ]
      },
      "links" : [ ]
    } ]
  },
  "links" : [ ]
}, {
  "content" : {
    "attrType" : "LONG_INTERVAL",
    "pluginConfigurations" : [ ],
    "pluginMetaDatas" : [ ]
  },
  "links" : [ ]
}, {
  "content" : {
    "attrType" : "LONG_ARRAY",
    "pluginConfigurations" : [ ],
    "pluginMetaDatas" : [ ]
  },
  "links" : [ ]
} ]
```
