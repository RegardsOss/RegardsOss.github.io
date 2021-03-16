(window.webpackJsonp=window.webpackJsonp||[]).push([[1549],{1619:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return p})),t.d(n,"toc",(function(){return i})),t.d(n,"default",(function(){return l}));var a=t(3),r=t(7),o=(t(0),t(2701)),c={},p={unversionedId:"development/backend/regards/dam/api/generated-snippets/DataSourceControllerIT/createDataSourceWithSingleTableTest/http-response",id:"version-1.4.0/development/backend/regards/dam/api/generated-snippets/DataSourceControllerIT/createDataSourceWithSingleTableTest/http-response",isDocsHomePage:!1,title:"http-response",description:"Request",source:"@site/versioned_docs/version-1.4.0/development/backend/regards/dam/api/generated-snippets/DataSourceControllerIT/createDataSourceWithSingleTableTest/http-response.md",slug:"/development/backend/regards/dam/api/generated-snippets/DataSourceControllerIT/createDataSourceWithSingleTableTest/http-response",permalink:"/docs/1.4.0/development/backend/regards/dam/api/generated-snippets/DataSourceControllerIT/createDataSourceWithSingleTableTest/http-response",editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/versioned_docs/version-1.4.0/development/backend/regards/dam/api/generated-snippets/DataSourceControllerIT/createDataSourceWithSingleTableTest/http-response.md",version:"1.4.0"},i=[],s={toc:i};function l(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("h4",{id:"request"},"Request"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"Code:")," 200 OK"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre"},"  **Headers:**\n\n  `Pragma:no-cache`\n  `X-XSS-Protection:1; mode=block`\n  `Expires:0`\n  `X-Frame-Options:DENY`\n  `X-Content-Type-Options:nosniff`\n  `Access-Control-Allow-Headers:authorization, content-type, scope`\n  `Access-Control-Max-Age:3600`\n  `Content-Type:application/json;charset=UTF-8`\n  `Access-Control-Allow-Origin:*`\n  `Cache-Control:no-cache, no-store, max-age=0, must-revalidate`\n  `Access-Control-Allow-Methods:POST, PUT, GET, OPTIONS, DELETE`\n\n  **Content:**\n")))),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-json"},'    \n{\n  "content" : {\n    "associatedDatasets" : 0,\n    "id" : 63,\n    "pluginId" : "MockDatasourcePlugin",\n    "label" : "ac6fcd4c-2780-4a85-862a-44bb66f28b97",\n    "businessId" : "02fa086a-b98d-4af7-8b53-333d68eca9d0",\n    "version" : "alpha",\n    "priorityOrder" : 0,\n    "active" : true,\n    "parameters" : [ {\n      "name" : "mapping",\n      "type" : "COLLECTION",\n      "value" : [ {\n        "name" : "providerId",\n        "type" : "LONG",\n        "nameDS" : "id",\n        "attributeType" : "STATIC"\n      }, {\n        "name" : "label",\n        "type" : "STRING",\n        "nameDS" : "name",\n        "attributeType" : "STATIC"\n      }, {\n        "name" : "alt",\n        "type" : "INTEGER",\n        "namespace" : "geometry",\n        "nameDS" : "altitude",\n        "attributeType" : "DYNAMIC"\n      }, {\n        "name" : "lat",\n        "type" : "DOUBLE",\n        "namespace" : "geometry",\n        "nameDS" : "latitude",\n        "attributeType" : "DYNAMIC"\n      }, {\n        "name" : "long",\n        "type" : "DOUBLE",\n        "namespace" : "geometry",\n        "nameDS" : "longitude",\n        "attributeType" : "DYNAMIC"\n      }, {\n        "name" : "creationDate1",\n        "type" : "DATE_ISO8601",\n        "namespace" : "hello",\n        "nameDS" : "timeStampWithoutTimeZone",\n        "attributeType" : "DYNAMIC"\n      }, {\n        "name" : "creationDate2",\n        "type" : "DATE_ISO8601",\n        "namespace" : "hello",\n        "nameDS" : "timeStampWithoutTimeZone",\n        "attributeType" : "DYNAMIC"\n      }, {\n        "name" : "date",\n        "type" : "DATE_ISO8601",\n        "namespace" : "hello",\n        "nameDS" : "date",\n        "attributeType" : "DYNAMIC"\n      }, {\n        "name" : "timeStampWithTimeZone",\n        "type" : "DATE_ISO8601",\n        "namespace" : "hello",\n        "nameDS" : "timeStampWithTimeZone",\n        "attributeType" : "DYNAMIC"\n      }, {\n        "name" : "isUpdate",\n        "type" : "BOOLEAN",\n        "namespace" : "hello",\n        "nameDS" : "update",\n        "attributeType" : "DYNAMIC"\n      } ],\n      "dynamic" : false\n    }, {\n      "name" : "modelName",\n      "type" : "STRING",\n      "value" : "VALIDATION_MODEL_2",\n      "dynamic" : false\n    }, {\n      "name" : "connection",\n      "type" : "PLUGIN",\n      "value" : "638f9b06-d09d-491d-bbac-044c1a82a7b1",\n      "dynamic" : false\n    }, {\n      "name" : "table",\n      "type" : "STRING",\n      "value" : "t_test_plugin_data_source",\n      "dynamic" : false\n    } ]\n  },\n  "links" : [ {\n    "rel" : "self",\n    "href" : "http://localhost:8080/datasources/02fa086a-b98d-4af7-8b53-333d68eca9d0"\n  }, {\n    "rel" : "delete",\n    "href" : "http://localhost:8080/datasources/02fa086a-b98d-4af7-8b53-333d68eca9d0"\n  }, {\n    "rel" : "update",\n    "href" : "http://localhost:8080/datasources/02fa086a-b98d-4af7-8b53-333d68eca9d0"\n  }, {\n    "rel" : "list",\n    "href" : "http://localhost:8080/datasources"\n  } ]\n}\n')))}l.isMDXComponent=!0},2701:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return b}));var a=t(0),r=t.n(a);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=r.a.createContext({}),l=function(e){var n=r.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},d=function(e){var n=l(e.components);return r.a.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},m=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=l(t),m=a,b=d["".concat(c,".").concat(m)]||d[m]||u[m]||o;return t?r.a.createElement(b,p(p({ref:n},s),{},{components:t})):r.a.createElement(b,p({ref:n},s))}));function b(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,c=new Array(o);c[0]=m;var p={};for(var i in n)hasOwnProperty.call(n,i)&&(p[i]=n[i]);p.originalType=e,p.mdxType="string"==typeof e?e:a,c[1]=p;for(var s=2;s<o;s++)c[s]=t[s];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);