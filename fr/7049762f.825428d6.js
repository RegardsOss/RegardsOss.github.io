(window.webpackJsonp=window.webpackJsonp||[]).push([[1186],{1256:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return p})),t.d(n,"toc",(function(){return i})),t.d(n,"default",(function(){return d}));var a=t(3),r=t(7),o=(t(0),t(2701)),c={},p={unversionedId:"development/backend/regards/dam/api/generated-snippets/DataSourceControllerIT/dataSourceUpdateDBConnection/request-body",id:"development/backend/regards/dam/api/generated-snippets/DataSourceControllerIT/dataSourceUpdateDBConnection/request-body",isDocsHomePage:!1,title:"request-body",description:"*Data params",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/development/backend/regards/dam/api/generated-snippets/DataSourceControllerIT/dataSourceUpdateDBConnection/request-body.md",slug:"/development/backend/regards/dam/api/generated-snippets/DataSourceControllerIT/dataSourceUpdateDBConnection/request-body",permalink:"/fr/docs/next/development/backend/regards/dam/api/generated-snippets/DataSourceControllerIT/dataSourceUpdateDBConnection/request-body",editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/i18n/fr/docusaurus-plugin-content-docs/current/development/backend/regards/dam/api/generated-snippets/DataSourceControllerIT/dataSourceUpdateDBConnection/request-body.md",version:"current"},i=[],u={toc:i};function d(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},u,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"***Data params**\n")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-json"},'    {\n  "id" : 60,\n  "pluginId" : "MockDatasourcePlugin",\n  "label" : "76cffa14-8dd7-4b5e-9644-3eccfb56bf89",\n  "businessId" : "6f2fe43b-e7da-4a39-a20c-fa60b3925523",\n  "version" : "alpha",\n  "priorityOrder" : 0,\n  "active" : true,\n  "parameters" : [ {\n    "name" : "mapping",\n    "type" : "COLLECTION",\n    "value" : [ {\n      "name" : "providerId",\n      "type" : "LONG",\n      "nameDS" : "id",\n      "attributeType" : "STATIC"\n    }, {\n      "name" : "label",\n      "type" : "STRING",\n      "nameDS" : "name",\n      "attributeType" : "STATIC"\n    }, {\n      "name" : "alt",\n      "type" : "INTEGER",\n      "namespace" : "geometry",\n      "nameDS" : "altitude",\n      "attributeType" : "DYNAMIC"\n    }, {\n      "name" : "lat",\n      "type" : "DOUBLE",\n      "namespace" : "geometry",\n      "nameDS" : "latitude",\n      "attributeType" : "DYNAMIC"\n    }, {\n      "name" : "long",\n      "type" : "DOUBLE",\n      "namespace" : "geometry",\n      "nameDS" : "longitude",\n      "attributeType" : "DYNAMIC"\n    }, {\n      "name" : "creationDate1",\n      "type" : "DATE_ISO8601",\n      "namespace" : "hello",\n      "nameDS" : "timeStampWithoutTimeZone",\n      "attributeType" : "DYNAMIC"\n    }, {\n      "name" : "creationDate2",\n      "type" : "DATE_ISO8601",\n      "namespace" : "hello",\n      "nameDS" : "timeStampWithoutTimeZone",\n      "attributeType" : "DYNAMIC"\n    }, {\n      "name" : "date",\n      "type" : "DATE_ISO8601",\n      "namespace" : "hello",\n      "nameDS" : "date",\n      "attributeType" : "DYNAMIC"\n    }, {\n      "name" : "timeStampWithTimeZone",\n      "type" : "DATE_ISO8601",\n      "namespace" : "hello",\n      "nameDS" : "timeStampWithTimeZone",\n      "attributeType" : "DYNAMIC"\n    }, {\n      "name" : "isUpdate",\n      "type" : "BOOLEAN",\n      "namespace" : "hello",\n      "nameDS" : "update",\n      "attributeType" : "DYNAMIC"\n    } ],\n    "dynamic" : false\n  }, {\n    "name" : "fromClause",\n    "type" : "STRING",\n    "value" : "from T_TEST_PLUGIN_DATA_SOURCE",\n    "dynamic" : false\n  }, {\n    "name" : "modelName",\n    "type" : "STRING",\n    "value" : "VALIDATION_MODEL_2",\n    "dynamic" : false\n  }, {\n    "name" : "connection",\n    "type" : "PLUGIN",\n    "value" : "51e1b6e9-07a9-4965-9eca-8b35db561f8d",\n    "dynamic" : false\n  } ]\n}\n')))}d.isMDXComponent=!0},2701:function(e,n,t){"use strict";t.d(n,"a",(function(){return m})),t.d(n,"b",(function(){return b}));var a=t(0),r=t.n(a);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var u=r.a.createContext({}),d=function(e){var n=r.a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},m=function(e){var n=d(e.components);return r.a.createElement(u.Provider,{value:n},e.children)},l={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},s=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=d(t),s=a,b=m["".concat(c,".").concat(s)]||m[s]||l[s]||o;return t?r.a.createElement(b,p(p({ref:n},u),{},{components:t})):r.a.createElement(b,p({ref:n},u))}));function b(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,c=new Array(o);c[0]=s;var p={};for(var i in n)hasOwnProperty.call(n,i)&&(p[i]=n[i]);p.originalType=e,p.mdxType="string"==typeof e?e:a,c[1]=p;for(var u=2;u<o;u++)c[u]=t[u];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,t)}s.displayName="MDXCreateElement"}}]);