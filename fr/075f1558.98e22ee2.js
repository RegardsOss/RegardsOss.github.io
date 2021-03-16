(window.webpackJsonp=window.webpackJsonp||[]).push([[77],{142:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return p})),t.d(n,"toc",(function(){return i})),t.d(n,"default",(function(){return m}));var a=t(3),r=t(7),o=(t(0),t(2701)),c={},p={unversionedId:"development/backend/regards/dam/api/generated-snippets/DataSourceControllerIT/createDataSourceWithFromClauseTest/request-body",id:"development/backend/regards/dam/api/generated-snippets/DataSourceControllerIT/createDataSourceWithFromClauseTest/request-body",isDocsHomePage:!1,title:"request-body",description:"*Data params",source:"@site/docs/development/backend/regards/dam/api/generated-snippets/DataSourceControllerIT/createDataSourceWithFromClauseTest/request-body.md",slug:"/development/backend/regards/dam/api/generated-snippets/DataSourceControllerIT/createDataSourceWithFromClauseTest/request-body",permalink:"/fr/docs/development/backend/regards/dam/api/generated-snippets/DataSourceControllerIT/createDataSourceWithFromClauseTest/request-body",editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/docs/development/backend/regards/dam/api/generated-snippets/DataSourceControllerIT/createDataSourceWithFromClauseTest/request-body.md",version:"current"},i=[],u={toc:i};function m(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},u,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"***Data params**\n")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-json"},'    {\n  "pluginId" : "MockDatasourcePlugin",\n  "label" : "6be79a75-8dac-41be-9669-3a70afb3eba4",\n  "businessId" : "a307a268-a9f3-4368-8e9b-963f81d63232",\n  "priorityOrder" : 0,\n  "active" : true,\n  "parameters" : [ {\n    "name" : "mapping",\n    "type" : "COLLECTION",\n    "value" : [ {\n      "name" : "providerId",\n      "type" : "LONG",\n      "nameDS" : "id",\n      "attributeType" : "STATIC"\n    }, {\n      "name" : "label",\n      "type" : "STRING",\n      "nameDS" : "name",\n      "attributeType" : "STATIC"\n    }, {\n      "name" : "alt",\n      "type" : "INTEGER",\n      "namespace" : "geometry",\n      "nameDS" : "altitude",\n      "attributeType" : "DYNAMIC"\n    }, {\n      "name" : "lat",\n      "type" : "DOUBLE",\n      "namespace" : "geometry",\n      "nameDS" : "latitude",\n      "attributeType" : "DYNAMIC"\n    }, {\n      "name" : "long",\n      "type" : "DOUBLE",\n      "namespace" : "geometry",\n      "nameDS" : "longitude",\n      "attributeType" : "DYNAMIC"\n    }, {\n      "name" : "creationDate1",\n      "type" : "DATE_ISO8601",\n      "namespace" : "hello",\n      "nameDS" : "timeStampWithoutTimeZone",\n      "attributeType" : "DYNAMIC"\n    }, {\n      "name" : "creationDate2",\n      "type" : "DATE_ISO8601",\n      "namespace" : "hello",\n      "nameDS" : "timeStampWithoutTimeZone",\n      "attributeType" : "DYNAMIC"\n    }, {\n      "name" : "date",\n      "type" : "DATE_ISO8601",\n      "namespace" : "hello",\n      "nameDS" : "date",\n      "attributeType" : "DYNAMIC"\n    }, {\n      "name" : "timeStampWithTimeZone",\n      "type" : "DATE_ISO8601",\n      "namespace" : "hello",\n      "nameDS" : "timeStampWithTimeZone",\n      "attributeType" : "DYNAMIC"\n    }, {\n      "name" : "isUpdate",\n      "type" : "BOOLEAN",\n      "namespace" : "hello",\n      "nameDS" : "update",\n      "attributeType" : "DYNAMIC"\n    } ],\n    "dynamic" : false\n  }, {\n    "name" : "fromClause",\n    "type" : "STRING",\n    "value" : "from T_TEST_PLUGIN_DATA_SOURCE",\n    "dynamic" : false\n  }, {\n    "name" : "modelName",\n    "type" : "STRING",\n    "value" : "VALIDATION_MODEL_2",\n    "dynamic" : false\n  }, {\n    "name" : "connection",\n    "type" : "PLUGIN",\n    "value" : "d0850bd4-8900-4a5b-8783-4457ea3478e0",\n    "dynamic" : false\n  } ]\n}\n')))}m.isMDXComponent=!0},2701:function(e,n,t){"use strict";t.d(n,"a",(function(){return s})),t.d(n,"b",(function(){return b}));var a=t(0),r=t.n(a);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var u=r.a.createContext({}),m=function(e){var n=r.a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},s=function(e){var n=m(e.components);return r.a.createElement(u.Provider,{value:n},e.children)},l={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},d=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),s=m(t),d=a,b=s["".concat(c,".").concat(d)]||s[d]||l[d]||o;return t?r.a.createElement(b,p(p({ref:n},u),{},{components:t})):r.a.createElement(b,p({ref:n},u))}));function b(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,c=new Array(o);c[0]=d;var p={};for(var i in n)hasOwnProperty.call(n,i)&&(p[i]=n[i]);p.originalType=e,p.mdxType="string"==typeof e?e:a,c[1]=p;for(var u=2;u<o;u++)c[u]=t[u];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);