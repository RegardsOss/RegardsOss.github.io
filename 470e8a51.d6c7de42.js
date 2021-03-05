(window.webpackJsonp=window.webpackJsonp||[]).push([[707],{2699:function(e,n,t){"use strict";t.d(n,"a",(function(){return s})),t.d(n,"b",(function(){return b}));var a=t(0),r=t.n(a);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=r.a.createContext({}),u=function(e){var n=r.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},s=function(e){var n=u(e.components);return r.a.createElement(l.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},d=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),s=u(t),d=a,b=s["".concat(i,".").concat(d)]||s[d]||m[d]||o;return t?r.a.createElement(b,c(c({ref:n},l),{},{components:t})):r.a.createElement(b,c({ref:n},l))}));function b(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=d;var c={};for(var p in n)hasOwnProperty.call(n,p)&&(c[p]=n[p]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=t[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},779:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return c})),t.d(n,"toc",(function(){return p})),t.d(n,"default",(function(){return u}));var a=t(3),r=t(7),o=(t(0),t(2699)),i={},c={unversionedId:"development/backend/regards/dam/api/generated-snippets/DataSourceControllerIT/createDataSourceWithSingleTableTest/request-body",id:"version-1.4.0/development/backend/regards/dam/api/generated-snippets/DataSourceControllerIT/createDataSourceWithSingleTableTest/request-body",isDocsHomePage:!1,title:"request-body",description:"*Data params",source:"@site/versioned_docs/version-1.4.0/development/backend/regards/dam/api/generated-snippets/DataSourceControllerIT/createDataSourceWithSingleTableTest/request-body.md",slug:"/development/backend/regards/dam/api/generated-snippets/DataSourceControllerIT/createDataSourceWithSingleTableTest/request-body",permalink:"/docs/1.4.0/development/backend/regards/dam/api/generated-snippets/DataSourceControllerIT/createDataSourceWithSingleTableTest/request-body",editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/versioned_docs/version-1.4.0/development/backend/regards/dam/api/generated-snippets/DataSourceControllerIT/createDataSourceWithSingleTableTest/request-body.md",version:"1.4.0"},p=[],l={toc:p};function u(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"***Data params**\n")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-json"},'    {\n  "pluginId" : "MockDatasourcePlugin",\n  "label" : "ac6fcd4c-2780-4a85-862a-44bb66f28b97",\n  "businessId" : "02fa086a-b98d-4af7-8b53-333d68eca9d0",\n  "priorityOrder" : 0,\n  "active" : true,\n  "parameters" : [ {\n    "name" : "mapping",\n    "type" : "COLLECTION",\n    "value" : [ {\n      "name" : "providerId",\n      "type" : "LONG",\n      "nameDS" : "id",\n      "attributeType" : "STATIC"\n    }, {\n      "name" : "label",\n      "type" : "STRING",\n      "nameDS" : "name",\n      "attributeType" : "STATIC"\n    }, {\n      "name" : "alt",\n      "type" : "INTEGER",\n      "namespace" : "geometry",\n      "nameDS" : "altitude",\n      "attributeType" : "DYNAMIC"\n    }, {\n      "name" : "lat",\n      "type" : "DOUBLE",\n      "namespace" : "geometry",\n      "nameDS" : "latitude",\n      "attributeType" : "DYNAMIC"\n    }, {\n      "name" : "long",\n      "type" : "DOUBLE",\n      "namespace" : "geometry",\n      "nameDS" : "longitude",\n      "attributeType" : "DYNAMIC"\n    }, {\n      "name" : "creationDate1",\n      "type" : "DATE_ISO8601",\n      "namespace" : "hello",\n      "nameDS" : "timeStampWithoutTimeZone",\n      "attributeType" : "DYNAMIC"\n    }, {\n      "name" : "creationDate2",\n      "type" : "DATE_ISO8601",\n      "namespace" : "hello",\n      "nameDS" : "timeStampWithoutTimeZone",\n      "attributeType" : "DYNAMIC"\n    }, {\n      "name" : "date",\n      "type" : "DATE_ISO8601",\n      "namespace" : "hello",\n      "nameDS" : "date",\n      "attributeType" : "DYNAMIC"\n    }, {\n      "name" : "timeStampWithTimeZone",\n      "type" : "DATE_ISO8601",\n      "namespace" : "hello",\n      "nameDS" : "timeStampWithTimeZone",\n      "attributeType" : "DYNAMIC"\n    }, {\n      "name" : "isUpdate",\n      "type" : "BOOLEAN",\n      "namespace" : "hello",\n      "nameDS" : "update",\n      "attributeType" : "DYNAMIC"\n    } ],\n    "dynamic" : false\n  }, {\n    "name" : "modelName",\n    "type" : "STRING",\n    "value" : "VALIDATION_MODEL_2",\n    "dynamic" : false\n  }, {\n    "name" : "connection",\n    "type" : "PLUGIN",\n    "value" : "638f9b06-d09d-491d-bbac-044c1a82a7b1",\n    "dynamic" : false\n  }, {\n    "name" : "table",\n    "type" : "STRING",\n    "value" : "t_test_plugin_data_source",\n    "dynamic" : false\n  } ]\n}\n')))}u.isMDXComponent=!0}}]);