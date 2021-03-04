(window.webpackJsonp=window.webpackJsonp||[]).push([[2574],{2644:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return p})),t.d(n,"metadata",(function(){return i})),t.d(n,"toc",(function(){return c})),t.d(n,"default",(function(){return m}));var a=t(3),r=t(7),o=(t(0),t(2701)),p={},i={unversionedId:"development/backend/regards/dam/api/generated-snippets/DataSourceControllerIT/dataSourceUpdateFromClause/request-body",id:"version-1.4.0/development/backend/regards/dam/api/generated-snippets/DataSourceControllerIT/dataSourceUpdateFromClause/request-body",isDocsHomePage:!1,title:"request-body",description:"*Data params",source:"@site/versioned_docs/version-1.4.0/development/backend/regards/dam/api/generated-snippets/DataSourceControllerIT/dataSourceUpdateFromClause/request-body.md",slug:"/development/backend/regards/dam/api/generated-snippets/DataSourceControllerIT/dataSourceUpdateFromClause/request-body",permalink:"/docs/development/backend/regards/dam/api/generated-snippets/DataSourceControllerIT/dataSourceUpdateFromClause/request-body",editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/versioned_docs/version-1.4.0/development/backend/regards/dam/api/generated-snippets/DataSourceControllerIT/dataSourceUpdateFromClause/request-body.md",version:"1.4.0"},c=[],u={toc:c};function m(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},u,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"***Data params**\n")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-json"},'    {\n  "id" : 67,\n  "pluginId" : "MockDatasourcePlugin",\n  "label" : "666e0659-031a-4448-aa0b-b601707f9685",\n  "businessId" : "1b8ae392-beb4-494c-b3b7-af1720c3058c",\n  "priorityOrder" : 0,\n  "active" : true,\n  "parameters" : [ {\n    "name" : "mapping",\n    "type" : "COLLECTION",\n    "value" : [ {\n      "name" : "providerId",\n      "type" : "LONG",\n      "nameDS" : "id",\n      "attributeType" : "STATIC"\n    }, {\n      "name" : "label",\n      "type" : "STRING",\n      "nameDS" : "name",\n      "attributeType" : "STATIC"\n    }, {\n      "name" : "alt",\n      "type" : "INTEGER",\n      "namespace" : "geometry",\n      "nameDS" : "altitude",\n      "attributeType" : "DYNAMIC"\n    }, {\n      "name" : "lat",\n      "type" : "DOUBLE",\n      "namespace" : "geometry",\n      "nameDS" : "latitude",\n      "attributeType" : "DYNAMIC"\n    }, {\n      "name" : "long",\n      "type" : "DOUBLE",\n      "namespace" : "geometry",\n      "nameDS" : "longitude",\n      "attributeType" : "DYNAMIC"\n    }, {\n      "name" : "creationDate1",\n      "type" : "DATE_ISO8601",\n      "namespace" : "hello",\n      "nameDS" : "timeStampWithoutTimeZone",\n      "attributeType" : "DYNAMIC"\n    }, {\n      "name" : "creationDate2",\n      "type" : "DATE_ISO8601",\n      "namespace" : "hello",\n      "nameDS" : "timeStampWithoutTimeZone",\n      "attributeType" : "DYNAMIC"\n    }, {\n      "name" : "date",\n      "type" : "DATE_ISO8601",\n      "namespace" : "hello",\n      "nameDS" : "date",\n      "attributeType" : "DYNAMIC"\n    }, {\n      "name" : "timeStampWithTimeZone",\n      "type" : "DATE_ISO8601",\n      "namespace" : "hello",\n      "nameDS" : "timeStampWithTimeZone",\n      "attributeType" : "DYNAMIC"\n    }, {\n      "name" : "isUpdate",\n      "type" : "BOOLEAN",\n      "namespace" : "hello",\n      "nameDS" : "update",\n      "attributeType" : "DYNAMIC"\n    } ],\n    "dynamic" : false\n  }, {\n    "name" : "fromClause",\n    "type" : "STRING",\n    "value" : "from table where table.id>1000",\n    "dynamic" : false\n  }, {\n    "name" : "modelName",\n    "type" : "STRING",\n    "value" : "VALIDATION_MODEL_2",\n    "dynamic" : false\n  }, {\n    "name" : "connection",\n    "type" : "PLUGIN",\n    "value" : "308c2a4e-a580-4d7c-8e1d-456674f880d4",\n    "dynamic" : false\n  } ]\n}\n')))}m.isMDXComponent=!0},2701:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return b}));var a=t(0),r=t.n(a);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function p(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?p(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var u=r.a.createContext({}),m=function(e){var n=r.a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=m(e.components);return r.a.createElement(u.Provider,{value:n},e.children)},l={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},s=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=m(t),s=a,b=d["".concat(p,".").concat(s)]||d[s]||l[s]||o;return t?r.a.createElement(b,i(i({ref:n},u),{},{components:t})):r.a.createElement(b,i({ref:n},u))}));function b(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,p=new Array(o);p[0]=s;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,p[1]=i;for(var u=2;u<o;u++)p[u]=t[u];return r.a.createElement.apply(null,p)}return r.a.createElement.apply(null,t)}s.displayName="MDXCreateElement"}}]);