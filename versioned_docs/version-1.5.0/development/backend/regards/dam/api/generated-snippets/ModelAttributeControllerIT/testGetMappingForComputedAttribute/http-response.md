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
    
[ {
  "content" : {
    "attrType" : "STRING",
    "pluginConfigurations" : [ ],
    "pluginMetaDatas" : [ {
      "content" : {
        "pluginClassName" : "fr.cnes.regards.modules.dam.rest.models.TestComputedAttribute",
        "interfaceNames" : [ "fr.cnes.regards.modules.dam.domain.models.IComputedAttribute" ],
        "author" : "REGARDS Team",
        "pluginId" : "TestComputedAttribute",
        "version" : "1.0.0",
        "description" : "plugin there just for tests in model-rest",
        "markdown" : "",
        "url" : "https://github.com/RegardsOss",
        "contact" : "regards@c-s.fr",
        "owner" : "CSSI",
        "license" : "GPLv3",
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
        "id" : 1,
        "pluginId" : "IntSumComputePlugin",
        "label" : "f097a0ea-43db-4dce-97a4-abd137a55f89",
        "businessId" : "26d193c3-c6a7-4270-9854-3d6c6423b2e2",
        "version" : "1.0.0",
        "priorityOrder" : 0,
        "active" : true,
        "parameters" : [ {
          "name" : "resultAttributeName",
          "type" : "STRING",
          "value" : "titi",
          "dynamic" : false
        }, {
          "name" : "parameterAttributeName",
          "type" : "STRING",
          "value" : "toto",
          "dynamic" : false
        } ]
      },
      "links" : [ ]
    } ],
    "pluginMetaDatas" : [ {
      "content" : {
        "pluginClassName" : "fr.cnes.regards.modules.dam.plugin.entities.IntSumComputePlugin",
        "interfaceNames" : [ "fr.cnes.regards.modules.dam.domain.models.IComputedAttribute" ],
        "author" : "REGARDS Team",
        "pluginId" : "IntSumComputePlugin",
        "version" : "1.0.0",
        "description" : "allows to compute the sum of IntegerAttribute according to a collection of data using the same IntegerAttribute name",
        "markdown" : "",
        "url" : "https://github.com/RegardsOss",
        "contact" : "regards@c-s.fr",
        "owner" : "CSSI",
        "license" : "GPLv3",
        "parameters" : [ {
          "name" : "parameterAttributeName",
          "label" : "Parameter attribute name",
          "description" : "Name of parameter attribute used to compute result attribute.",
          "type" : "STRING",
          "optional" : false,
          "sensitive" : false,
          "unconfigurable" : false
        }, {
          "name" : "parameterAttributeFragmentName",
          "label" : "Parameter fragment name",
          "description" : "Name of parameter attribute fragment. If parameter attribute belongs to default fragment, leave this field empty.",
          "type" : "STRING",
          "optional" : true,
          "sensitive" : false,
          "unconfigurable" : false
        }, {
          "name" : "resultAttributeName",
          "label" : "Result attribute name",
          "description" : "Name of attribute to compute (ie result attribute).",
          "type" : "STRING",
          "optional" : false,
          "sensitive" : false,
          "unconfigurable" : true
        }, {
          "name" : "resultAttributeFragmentName",
          "label" : "Result fragment name",
          "description" : "Name of attribute to compute fragment. If computed attribute belongs to default fragment, this value can be set to null.",
          "type" : "STRING",
          "optional" : true,
          "sensitive" : false,
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
        "pluginClassName" : "fr.cnes.regards.modules.dam.plugin.entities.MaxDateComputePlugin",
        "interfaceNames" : [ "fr.cnes.regards.modules.dam.domain.models.IComputedAttribute" ],
        "author" : "REGARDS Team",
        "pluginId" : "MaxDateComputePlugin",
        "version" : "1.0.0",
        "description" : "allows to compute the maximum of a DateAttribute according to a collection of data",
        "markdown" : "",
        "url" : "https://github.com/RegardsOss",
        "contact" : "regards@c-s.fr",
        "owner" : "CSSI",
        "license" : "GPLv3",
        "parameters" : [ {
          "name" : "parameterAttributeName",
          "label" : "Parameter attribute name",
          "description" : "Name of parameter attribute used to compute result attribute.",
          "type" : "STRING",
          "optional" : false,
          "sensitive" : false,
          "unconfigurable" : false
        }, {
          "name" : "parameterAttributeFragmentName",
          "label" : "Parameter fragment name",
          "description" : "Name of parameter attribute fragment. If parameter attribute belongs to default fragment, leave this field empty.",
          "type" : "STRING",
          "optional" : true,
          "sensitive" : false,
          "unconfigurable" : false
        }, {
          "name" : "resultAttributeName",
          "label" : "Result attribute name",
          "description" : "Name of attribute to compute (ie result attribute).",
          "type" : "STRING",
          "optional" : false,
          "sensitive" : false,
          "unconfigurable" : true
        }, {
          "name" : "resultAttributeFragmentName",
          "label" : "Result fragment name",
          "description" : "Name of attribute to compute fragment. If computed attribute belongs to default fragment, this value can be set to null.",
          "type" : "STRING",
          "optional" : true,
          "sensitive" : false,
          "unconfigurable" : true
        } ]
      },
      "links" : [ ]
    }, {
      "content" : {
        "pluginClassName" : "fr.cnes.regards.modules.dam.plugin.entities.MinDateComputePlugin",
        "interfaceNames" : [ "fr.cnes.regards.modules.dam.domain.models.IComputedAttribute" ],
        "author" : "REGARDS Team",
        "pluginId" : "MinDateComputePlugin",
        "version" : "1.0.0",
        "description" : "allows to compute the minimum of a DateAttribute according to a collection of data",
        "markdown" : "",
        "url" : "https://github.com/RegardsOss",
        "contact" : "regards@c-s.fr",
        "owner" : "CSSI",
        "license" : "GPLv3",
        "parameters" : [ {
          "name" : "parameterAttributeName",
          "label" : "Parameter attribute name",
          "description" : "Name of parameter attribute used to compute result attribute.",
          "type" : "STRING",
          "optional" : false,
          "sensitive" : false,
          "unconfigurable" : false
        }, {
          "name" : "parameterAttributeFragmentName",
          "label" : "Parameter fragment name",
          "description" : "Name of the parameter attribute fragment. If the parameter attribute belongs to the default fragment, leave this field empty.",
          "type" : "STRING",
          "optional" : true,
          "sensitive" : false,
          "unconfigurable" : false
        }, {
          "name" : "resultAttributeName",
          "label" : "Result attribute name",
          "description" : "Name of attribute to compute (ie result attribute).",
          "type" : "STRING",
          "optional" : false,
          "sensitive" : false,
          "unconfigurable" : true
        }, {
          "name" : "resultAttributeFragmentName",
          "label" : "Result fragment name",
          "description" : "Name of attribute to compute fragment. If computed attribute belongs to default fragment, this value can be set to null.",
          "type" : "STRING",
          "optional" : true,
          "sensitive" : false,
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
        "pluginClassName" : "fr.cnes.regards.modules.dam.plugin.entities.LongSumComputePlugin",
        "interfaceNames" : [ "fr.cnes.regards.modules.dam.domain.models.IComputedAttribute" ],
        "author" : "REGARDS Team",
        "pluginId" : "LongSumComputePlugin",
        "version" : "1.0.0",
        "description" : "allows to compute the sum of LongAttribute according to a collection of data using the same LongAttribute name",
        "markdown" : "",
        "url" : "https://github.com/RegardsOss",
        "contact" : "regards@c-s.fr",
        "owner" : "CSSI",
        "license" : "GPLv3",
        "parameters" : [ {
          "name" : "parameterAttributeName",
          "label" : "Parameter attribute name",
          "description" : "Name of parameter attribute used to compute result attribute.",
          "type" : "STRING",
          "optional" : false,
          "sensitive" : false,
          "unconfigurable" : false
        }, {
          "name" : "parameterAttributeFragmentName",
          "label" : "Parameter fragment name",
          "description" : "Name of parameter attribute fragment. If parameter attribute belongs to default fragment, leave this field empty.",
          "type" : "STRING",
          "optional" : true,
          "sensitive" : false,
          "unconfigurable" : false
        }, {
          "name" : "resultAttributeName",
          "label" : "Result attribute name",
          "description" : "Name of attribute to compute (ie result attribute).",
          "type" : "STRING",
          "optional" : false,
          "sensitive" : false,
          "unconfigurable" : true
        }, {
          "name" : "resultAttributeFragmentName",
          "label" : "Result fragment name",
          "description" : "Name of attribute to compute fragment. If computed attribute belongs to default fragment, this value can be set to null.",
          "type" : "STRING",
          "optional" : true,
          "sensitive" : false,
          "unconfigurable" : true
        } ]
      },
      "links" : [ ]
    }, {
      "content" : {
        "pluginClassName" : "fr.cnes.regards.modules.dam.plugin.entities.CountPlugin",
        "interfaceNames" : [ "fr.cnes.regards.modules.dam.domain.models.IComputedAttribute" ],
        "author" : "REGARDS Team",
        "pluginId" : "CountPlugin",
        "version" : "1.0.0",
        "description" : "allows to compute the number of data of a Dataset",
        "markdown" : "",
        "url" : "https://github.com/RegardsOss",
        "contact" : "regards@c-s.fr",
        "owner" : "CSSI",
        "license" : "GPLv3",
        "parameters" : [ {
          "name" : "resultAttributeName",
          "label" : "Result attribute name",
          "description" : "Name of attribute to compute (ie result attribute).",
          "type" : "STRING",
          "optional" : false,
          "sensitive" : false,
          "unconfigurable" : true
        }, {
          "name" : "resultAttributeFragmentName",
          "label" : "Result fragment name",
          "description" : "Name of attribute to compute fragment. If computed attribute belongs to default fragment, this value can be set to null.",
          "type" : "STRING",
          "optional" : true,
          "sensitive" : false,
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
