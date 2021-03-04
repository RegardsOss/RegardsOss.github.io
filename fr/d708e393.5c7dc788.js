(window.webpackJsonp=window.webpackJsonp||[]).push([[2230],{2300:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return u})),n.d(t,"default",(function(){return m}));var a=n(3),r=n(7),o=(n(0),n(2701)),i={},s={unversionedId:"development/backend/regards/dam/api/generated-snippets/ModelAttributeControllerIT/testGetMappingForComputedAttribute/http-response",id:"development/backend/regards/dam/api/generated-snippets/ModelAttributeControllerIT/testGetMappingForComputedAttribute/http-response",isDocsHomePage:!1,title:"http-response",description:"Request",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/development/backend/regards/dam/api/generated-snippets/ModelAttributeControllerIT/testGetMappingForComputedAttribute/http-response.md",slug:"/development/backend/regards/dam/api/generated-snippets/ModelAttributeControllerIT/testGetMappingForComputedAttribute/http-response",permalink:"/fr/docs/next/development/backend/regards/dam/api/generated-snippets/ModelAttributeControllerIT/testGetMappingForComputedAttribute/http-response",editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/i18n/fr/docusaurus-plugin-content-docs/current/development/backend/regards/dam/api/generated-snippets/ModelAttributeControllerIT/testGetMappingForComputedAttribute/http-response.md",version:"current"},u=[],l={toc:u};function m(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h4",{id:"request"},"Request"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"Code:")," 200 OK"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre"},"  **Headers:**\n\n  `Pragma:no-cache`\n  `X-XSS-Protection:1; mode=block`\n  `Expires:0`\n  `X-Frame-Options:DENY`\n  `X-Content-Type-Options:nosniff`\n  `Access-Control-Allow-Headers:authorization, content-type, scope`\n  `Access-Control-Max-Age:3600`\n  `Content-Type:application/json;charset=UTF-8`\n  `Access-Control-Allow-Origin:*`\n  `Cache-Control:no-cache, no-store, max-age=0, must-revalidate`\n  `Access-Control-Allow-Methods:POST, PUT, GET, OPTIONS, DELETE`\n\n  **Content:**\n")))),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-json"},'    \n[ {\n  "content" : {\n    "attrType" : "STRING",\n    "pluginConfigurations" : [ ],\n    "pluginMetaDatas" : [ {\n      "content" : {\n        "pluginClassName" : "fr.cnes.regards.modules.dam.rest.models.TestComputedAttribute",\n        "interfaceNames" : [ "fr.cnes.regards.modules.dam.domain.models.IComputedAttribute" ],\n        "author" : "REGARDS Team",\n        "pluginId" : "TestComputedAttribute",\n        "version" : "1.0.0",\n        "description" : "plugin there just for tests in model-rest",\n        "markdown" : "",\n        "url" : "https://github.com/RegardsOss",\n        "contact" : "regards@c-s.fr",\n        "owner" : "CSSI",\n        "license" : "GPLv3",\n        "parameters" : [ ]\n      },\n      "links" : [ ]\n    } ]\n  },\n  "links" : [ ]\n}, {\n  "content" : {\n    "attrType" : "INTEGER",\n    "pluginConfigurations" : [ {\n      "content" : {\n        "id" : 1,\n        "pluginId" : "IntSumComputePlugin",\n        "label" : "f097a0ea-43db-4dce-97a4-abd137a55f89",\n        "businessId" : "26d193c3-c6a7-4270-9854-3d6c6423b2e2",\n        "version" : "1.0.0",\n        "priorityOrder" : 0,\n        "active" : true,\n        "parameters" : [ {\n          "name" : "resultAttributeName",\n          "type" : "STRING",\n          "value" : "titi",\n          "dynamic" : false\n        }, {\n          "name" : "parameterAttributeName",\n          "type" : "STRING",\n          "value" : "toto",\n          "dynamic" : false\n        } ]\n      },\n      "links" : [ ]\n    } ],\n    "pluginMetaDatas" : [ {\n      "content" : {\n        "pluginClassName" : "fr.cnes.regards.modules.dam.plugin.entities.IntSumComputePlugin",\n        "interfaceNames" : [ "fr.cnes.regards.modules.dam.domain.models.IComputedAttribute" ],\n        "author" : "REGARDS Team",\n        "pluginId" : "IntSumComputePlugin",\n        "version" : "1.0.0",\n        "description" : "allows to compute the sum of IntegerAttribute according to a collection of data using the same IntegerAttribute name",\n        "markdown" : "",\n        "url" : "https://github.com/RegardsOss",\n        "contact" : "regards@c-s.fr",\n        "owner" : "CSSI",\n        "license" : "GPLv3",\n        "parameters" : [ {\n          "name" : "parameterAttributeName",\n          "label" : "Parameter attribute name",\n          "description" : "Name of parameter attribute used to compute result attribute.",\n          "type" : "STRING",\n          "optional" : false,\n          "sensitive" : false,\n          "unconfigurable" : false\n        }, {\n          "name" : "parameterAttributeFragmentName",\n          "label" : "Parameter fragment name",\n          "description" : "Name of parameter attribute fragment. If parameter attribute belongs to default fragment, leave this field empty.",\n          "type" : "STRING",\n          "optional" : true,\n          "sensitive" : false,\n          "unconfigurable" : false\n        }, {\n          "name" : "resultAttributeName",\n          "label" : "Result attribute name",\n          "description" : "Name of attribute to compute (ie result attribute).",\n          "type" : "STRING",\n          "optional" : false,\n          "sensitive" : false,\n          "unconfigurable" : true\n        }, {\n          "name" : "resultAttributeFragmentName",\n          "label" : "Result fragment name",\n          "description" : "Name of attribute to compute fragment. If computed attribute belongs to default fragment, this value can be set to null.",\n          "type" : "STRING",\n          "optional" : true,\n          "sensitive" : false,\n          "unconfigurable" : true\n        } ]\n      },\n      "links" : [ ]\n    } ]\n  },\n  "links" : [ ]\n}, {\n  "content" : {\n    "attrType" : "DOUBLE",\n    "pluginConfigurations" : [ ],\n    "pluginMetaDatas" : [ ]\n  },\n  "links" : [ ]\n}, {\n  "content" : {\n    "attrType" : "DATE_ISO8601",\n    "pluginConfigurations" : [ ],\n    "pluginMetaDatas" : [ {\n      "content" : {\n        "pluginClassName" : "fr.cnes.regards.modules.dam.plugin.entities.MaxDateComputePlugin",\n        "interfaceNames" : [ "fr.cnes.regards.modules.dam.domain.models.IComputedAttribute" ],\n        "author" : "REGARDS Team",\n        "pluginId" : "MaxDateComputePlugin",\n        "version" : "1.0.0",\n        "description" : "allows to compute the maximum of a DateAttribute according to a collection of data",\n        "markdown" : "",\n        "url" : "https://github.com/RegardsOss",\n        "contact" : "regards@c-s.fr",\n        "owner" : "CSSI",\n        "license" : "GPLv3",\n        "parameters" : [ {\n          "name" : "parameterAttributeName",\n          "label" : "Parameter attribute name",\n          "description" : "Name of parameter attribute used to compute result attribute.",\n          "type" : "STRING",\n          "optional" : false,\n          "sensitive" : false,\n          "unconfigurable" : false\n        }, {\n          "name" : "parameterAttributeFragmentName",\n          "label" : "Parameter fragment name",\n          "description" : "Name of parameter attribute fragment. If parameter attribute belongs to default fragment, leave this field empty.",\n          "type" : "STRING",\n          "optional" : true,\n          "sensitive" : false,\n          "unconfigurable" : false\n        }, {\n          "name" : "resultAttributeName",\n          "label" : "Result attribute name",\n          "description" : "Name of attribute to compute (ie result attribute).",\n          "type" : "STRING",\n          "optional" : false,\n          "sensitive" : false,\n          "unconfigurable" : true\n        }, {\n          "name" : "resultAttributeFragmentName",\n          "label" : "Result fragment name",\n          "description" : "Name of attribute to compute fragment. If computed attribute belongs to default fragment, this value can be set to null.",\n          "type" : "STRING",\n          "optional" : true,\n          "sensitive" : false,\n          "unconfigurable" : true\n        } ]\n      },\n      "links" : [ ]\n    }, {\n      "content" : {\n        "pluginClassName" : "fr.cnes.regards.modules.dam.plugin.entities.MinDateComputePlugin",\n        "interfaceNames" : [ "fr.cnes.regards.modules.dam.domain.models.IComputedAttribute" ],\n        "author" : "REGARDS Team",\n        "pluginId" : "MinDateComputePlugin",\n        "version" : "1.0.0",\n        "description" : "allows to compute the minimum of a DateAttribute according to a collection of data",\n        "markdown" : "",\n        "url" : "https://github.com/RegardsOss",\n        "contact" : "regards@c-s.fr",\n        "owner" : "CSSI",\n        "license" : "GPLv3",\n        "parameters" : [ {\n          "name" : "parameterAttributeName",\n          "label" : "Parameter attribute name",\n          "description" : "Name of parameter attribute used to compute result attribute.",\n          "type" : "STRING",\n          "optional" : false,\n          "sensitive" : false,\n          "unconfigurable" : false\n        }, {\n          "name" : "parameterAttributeFragmentName",\n          "label" : "Parameter fragment name",\n          "description" : "Name of the parameter attribute fragment. If the parameter attribute belongs to the default fragment, leave this field empty.",\n          "type" : "STRING",\n          "optional" : true,\n          "sensitive" : false,\n          "unconfigurable" : false\n        }, {\n          "name" : "resultAttributeName",\n          "label" : "Result attribute name",\n          "description" : "Name of attribute to compute (ie result attribute).",\n          "type" : "STRING",\n          "optional" : false,\n          "sensitive" : false,\n          "unconfigurable" : true\n        }, {\n          "name" : "resultAttributeFragmentName",\n          "label" : "Result fragment name",\n          "description" : "Name of attribute to compute fragment. If computed attribute belongs to default fragment, this value can be set to null.",\n          "type" : "STRING",\n          "optional" : true,\n          "sensitive" : false,\n          "unconfigurable" : true\n        } ]\n      },\n      "links" : [ ]\n    } ]\n  },\n  "links" : [ ]\n}, {\n  "content" : {\n    "attrType" : "URL",\n    "pluginConfigurations" : [ ],\n    "pluginMetaDatas" : [ ]\n  },\n  "links" : [ ]\n}, {\n  "content" : {\n    "attrType" : "BOOLEAN",\n    "pluginConfigurations" : [ ],\n    "pluginMetaDatas" : [ ]\n  },\n  "links" : [ ]\n}, {\n  "content" : {\n    "attrType" : "STRING_ARRAY",\n    "pluginConfigurations" : [ ],\n    "pluginMetaDatas" : [ ]\n  },\n  "links" : [ ]\n}, {\n  "content" : {\n    "attrType" : "INTEGER_ARRAY",\n    "pluginConfigurations" : [ ],\n    "pluginMetaDatas" : [ ]\n  },\n  "links" : [ ]\n}, {\n  "content" : {\n    "attrType" : "DOUBLE_ARRAY",\n    "pluginConfigurations" : [ ],\n    "pluginMetaDatas" : [ ]\n  },\n  "links" : [ ]\n}, {\n  "content" : {\n    "attrType" : "DATE_ARRAY",\n    "pluginConfigurations" : [ ],\n    "pluginMetaDatas" : [ ]\n  },\n  "links" : [ ]\n}, {\n  "content" : {\n    "attrType" : "INTEGER_INTERVAL",\n    "pluginConfigurations" : [ ],\n    "pluginMetaDatas" : [ ]\n  },\n  "links" : [ ]\n}, {\n  "content" : {\n    "attrType" : "DOUBLE_INTERVAL",\n    "pluginConfigurations" : [ ],\n    "pluginMetaDatas" : [ ]\n  },\n  "links" : [ ]\n}, {\n  "content" : {\n    "attrType" : "DATE_INTERVAL",\n    "pluginConfigurations" : [ ],\n    "pluginMetaDatas" : [ ]\n  },\n  "links" : [ ]\n}, {\n  "content" : {\n    "attrType" : "LONG",\n    "pluginConfigurations" : [ ],\n    "pluginMetaDatas" : [ {\n      "content" : {\n        "pluginClassName" : "fr.cnes.regards.modules.dam.plugin.entities.LongSumComputePlugin",\n        "interfaceNames" : [ "fr.cnes.regards.modules.dam.domain.models.IComputedAttribute" ],\n        "author" : "REGARDS Team",\n        "pluginId" : "LongSumComputePlugin",\n        "version" : "1.0.0",\n        "description" : "allows to compute the sum of LongAttribute according to a collection of data using the same LongAttribute name",\n        "markdown" : "",\n        "url" : "https://github.com/RegardsOss",\n        "contact" : "regards@c-s.fr",\n        "owner" : "CSSI",\n        "license" : "GPLv3",\n        "parameters" : [ {\n          "name" : "parameterAttributeName",\n          "label" : "Parameter attribute name",\n          "description" : "Name of parameter attribute used to compute result attribute.",\n          "type" : "STRING",\n          "optional" : false,\n          "sensitive" : false,\n          "unconfigurable" : false\n        }, {\n          "name" : "parameterAttributeFragmentName",\n          "label" : "Parameter fragment name",\n          "description" : "Name of parameter attribute fragment. If parameter attribute belongs to default fragment, leave this field empty.",\n          "type" : "STRING",\n          "optional" : true,\n          "sensitive" : false,\n          "unconfigurable" : false\n        }, {\n          "name" : "resultAttributeName",\n          "label" : "Result attribute name",\n          "description" : "Name of attribute to compute (ie result attribute).",\n          "type" : "STRING",\n          "optional" : false,\n          "sensitive" : false,\n          "unconfigurable" : true\n        }, {\n          "name" : "resultAttributeFragmentName",\n          "label" : "Result fragment name",\n          "description" : "Name of attribute to compute fragment. If computed attribute belongs to default fragment, this value can be set to null.",\n          "type" : "STRING",\n          "optional" : true,\n          "sensitive" : false,\n          "unconfigurable" : true\n        } ]\n      },\n      "links" : [ ]\n    }, {\n      "content" : {\n        "pluginClassName" : "fr.cnes.regards.modules.dam.plugin.entities.CountPlugin",\n        "interfaceNames" : [ "fr.cnes.regards.modules.dam.domain.models.IComputedAttribute" ],\n        "author" : "REGARDS Team",\n        "pluginId" : "CountPlugin",\n        "version" : "1.0.0",\n        "description" : "allows to compute the number of data of a Dataset",\n        "markdown" : "",\n        "url" : "https://github.com/RegardsOss",\n        "contact" : "regards@c-s.fr",\n        "owner" : "CSSI",\n        "license" : "GPLv3",\n        "parameters" : [ {\n          "name" : "resultAttributeName",\n          "label" : "Result attribute name",\n          "description" : "Name of attribute to compute (ie result attribute).",\n          "type" : "STRING",\n          "optional" : false,\n          "sensitive" : false,\n          "unconfigurable" : true\n        }, {\n          "name" : "resultAttributeFragmentName",\n          "label" : "Result fragment name",\n          "description" : "Name of attribute to compute fragment. If computed attribute belongs to default fragment, this value can be set to null.",\n          "type" : "STRING",\n          "optional" : true,\n          "sensitive" : false,\n          "unconfigurable" : true\n        } ]\n      },\n      "links" : [ ]\n    } ]\n  },\n  "links" : [ ]\n}, {\n  "content" : {\n    "attrType" : "LONG_INTERVAL",\n    "pluginConfigurations" : [ ],\n    "pluginMetaDatas" : [ ]\n  },\n  "links" : [ ]\n}, {\n  "content" : {\n    "attrType" : "LONG_ARRAY",\n    "pluginConfigurations" : [ ],\n    "pluginMetaDatas" : [ ]\n  },\n  "links" : [ ]\n} ]\n')))}m.isMDXComponent=!0},2701:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return g}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),m=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=m(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),p=m(n),d=a,g=p["".concat(i,".").concat(d)]||p[d]||c[d]||o;return n?r.a.createElement(g,s(s({ref:t},l),{},{components:n})):r.a.createElement(g,s({ref:t},l))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);