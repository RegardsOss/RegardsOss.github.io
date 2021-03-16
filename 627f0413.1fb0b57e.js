(window.webpackJsonp=window.webpackJsonp||[]).push([[997],{1067:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return s})),t.d(n,"toc",(function(){return c})),t.d(n,"default",(function(){return d}));var r=t(3),o=t(7),a=(t(0),t(2701)),i={},s={unversionedId:"development/backend/regards/ingest/api/generated-snippets/AIPControllerIT/testRetrieveAIPVersionHistory/http-response",id:"version-1.4.0/development/backend/regards/ingest/api/generated-snippets/AIPControllerIT/testRetrieveAIPVersionHistory/http-response",isDocsHomePage:!1,title:"http-response",description:"Request",source:"@site/versioned_docs/version-1.4.0/development/backend/regards/ingest/api/generated-snippets/AIPControllerIT/testRetrieveAIPVersionHistory/http-response.md",slug:"/development/backend/regards/ingest/api/generated-snippets/AIPControllerIT/testRetrieveAIPVersionHistory/http-response",permalink:"/docs/1.4.0/development/backend/regards/ingest/api/generated-snippets/AIPControllerIT/testRetrieveAIPVersionHistory/http-response",editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/versioned_docs/version-1.4.0/development/backend/regards/ingest/api/generated-snippets/AIPControllerIT/testRetrieveAIPVersionHistory/http-response.md",version:"1.4.0"},c=[],p={toc:c};function d(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("h4",{id:"request"},"Request"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},Object(a.b)("strong",{parentName:"p"},"Code:")," 200 OK"),Object(a.b)("pre",{parentName:"li"},Object(a.b)("code",{parentName:"pre"},"  **Headers:**\n\n  `Pragma:no-cache`\n  `X-XSS-Protection:1; mode=block`\n  `Expires:0`\n  `X-Frame-Options:DENY`\n  `X-Content-Type-Options:nosniff`\n  `Access-Control-Allow-Headers:authorization, content-type, scope`\n  `Access-Control-Max-Age:3600`\n  `Content-Type:application/json;charset=UTF-8`\n  `Access-Control-Allow-Origin:*`\n  `Cache-Control:no-cache, no-store, max-age=0, must-revalidate`\n  `Access-Control-Allow-Methods:POST, PUT, GET, OPTIONS, DELETE`\n\n  **Content:**\n")))),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-json"},'    \n{\n  "metadata" : {\n    "size" : 10,\n    "totalElements" : 2,\n    "totalPages" : 1,\n    "number" : 0\n  },\n  "content" : [ {\n    "content" : {\n      "id" : 6,\n      "aipId" : "URN:AIP:DATA:PROJECT:b0b0d3ec-d64b-3a80-b4e0-8770ecec5fdd:V1",\n      "state" : "STORED",\n      "aip" : {\n        "providerId" : "testRetrieveAIPVersionHistory",\n        "sipId" : "URN:SIP:DATA:PROJECT:b0b0d3ec-d64b-3a80-b4e0-8770ecec5fdd:V1",\n        "version" : 1,\n        "ipType" : "DATA",\n        "id" : "URN:AIP:DATA:PROJECT:b0b0d3ec-d64b-3a80-b4e0-8770ecec5fdd:V1",\n        "geometry" : null,\n        "normalizedGeometry" : null,\n        "properties" : {\n          "contentInformations" : [ {\n            "representationInformation" : {\n              "syntax" : {\n                "mimeType" : "application/json;charset=UTF-8"\n              }\n            },\n            "dataObject" : {\n              "regardsDataType" : "RAWDATA",\n              "locations" : [ {\n                "storage" : "NAS #1",\n                "url" : "http://somedomain.com/api/v1/storage/file/2"\n              } ],\n              "filename" : "cdpp_collection.json",\n              "algorithm" : "MD5",\n              "checksum" : "azertyuiopqsdfmlmld",\n              "fileSize" : 1000\n            }\n          } ],\n          "pdi" : {\n            "contextInformation" : {\n              "tags" : [ ]\n            },\n            "referenceInformation" : { },\n            "provenanceInformation" : {\n              "history" : [ {\n                "comment" : "SIP testRetrieveAIPVersionHistory generated",\n                "date" : "2020-05-13T12:30:07.442Z"\n              }, {\n                "type" : "SUBMISSION",\n                "comment" : "AIP created for SIP testRetrieveAIPVersionHistory.",\n                "date" : "2020-05-13T12:30:10.361Z"\n              }, {\n                "type" : "STORAGE",\n                "comment" : "Data file cdpp_collection.json stored on NAS #1 at http://somedomain.com/api/v1/storage/file/2.",\n                "date" : "2020-05-13T12:30:10.364Z"\n              } ]\n            },\n            "fixityInformation" : { },\n            "accessRightInformation" : { }\n          }\n        },\n        "type" : "Feature"\n      },\n      "checksum" : "c435b3d8ebcf657de913e4e3bdb70181",\n      "storages" : [ "NAS #1" ],\n      "sessionOwner" : "ESA",\n      "session" : "2020-05-13T14:30:07.442+02:00",\n      "categories" : [ "CAT 4", "CAT 3" ],\n      "providerId" : "testRetrieveAIPVersionHistory",\n      "version" : 1,\n      "tags" : [ ],\n      "creationDate" : "2020-05-13T12:30:10.363Z",\n      "lastUpdate" : "2020-05-13T12:30:15.548Z",\n      "ipType" : "DATA"\n    },\n    "links" : [ ]\n  }, {\n    "content" : {\n      "id" : 7,\n      "aipId" : "URN:AIP:DATA:PROJECT:b0b0d3ec-d64b-3a80-b4e0-8770ecec5fdd:V2",\n      "state" : "STORED",\n      "aip" : {\n        "providerId" : "testRetrieveAIPVersionHistory",\n        "sipId" : "URN:SIP:DATA:PROJECT:b0b0d3ec-d64b-3a80-b4e0-8770ecec5fdd:V2",\n        "version" : 2,\n        "ipType" : "DATA",\n        "id" : "URN:AIP:DATA:PROJECT:b0b0d3ec-d64b-3a80-b4e0-8770ecec5fdd:V2",\n        "geometry" : null,\n        "normalizedGeometry" : null,\n        "properties" : {\n          "contentInformations" : [ {\n            "representationInformation" : {\n              "syntax" : {\n                "mimeType" : "application/json;charset=UTF-8"\n              }\n            },\n            "dataObject" : {\n              "regardsDataType" : "RAWDATA",\n              "locations" : [ {\n                "storage" : "NAS #1",\n                "url" : "http://somedomain.com/api/v1/storage/file/2"\n              } ],\n              "filename" : "cdpp_collection.json",\n              "algorithm" : "MD5",\n              "checksum" : "azertyuiopqsdfmlmld",\n              "fileSize" : 1000\n            }\n          } ],\n          "pdi" : {\n            "contextInformation" : {\n              "tags" : [ ]\n            },\n            "referenceInformation" : { },\n            "provenanceInformation" : {\n              "history" : [ {\n                "comment" : "SIP testRetrieveAIPVersionHistory generated",\n                "date" : "2020-05-13T12:30:07.256Z"\n              }, {\n                "type" : "SUBMISSION",\n                "comment" : "AIP created for SIP testRetrieveAIPVersionHistory.",\n                "date" : "2020-05-13T12:30:11.544Z"\n              }, {\n                "type" : "STORAGE",\n                "comment" : "Data file cdpp_collection.json stored on NAS #1 at http://somedomain.com/api/v1/storage/file/2.",\n                "date" : "2020-05-13T12:30:11.546Z"\n              } ]\n            },\n            "fixityInformation" : { },\n            "accessRightInformation" : { }\n          }\n        },\n        "type" : "Feature"\n      },\n      "checksum" : "e976e17eb593acca70c33e43f483af57",\n      "storages" : [ "NAS #1" ],\n      "sessionOwner" : "ESA",\n      "session" : "2020-05-13T14:30:07.256+02:00",\n      "categories" : [ "CAT 2", "CAT 1" ],\n      "providerId" : "testRetrieveAIPVersionHistory",\n      "version" : 2,\n      "tags" : [ ],\n      "creationDate" : "2020-05-13T12:30:11.546Z",\n      "lastUpdate" : "2020-05-13T12:30:17.033Z",\n      "ipType" : "DATA"\n    },\n    "links" : [ ]\n  } ],\n  "links" : [ {\n    "rel" : "self",\n    "href" : "http://localhost:8080/aips?page=0&size=10&sort=id,asc"\n  } ]\n}\n')))}d.isMDXComponent=!0},2701:function(e,n,t){"use strict";t.d(n,"a",(function(){return l})),t.d(n,"b",(function(){return u}));var r=t(0),o=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=o.a.createContext({}),d=function(e){var n=o.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},l=function(e){var n=d(e.components);return o.a.createElement(p.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},f=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),l=d(t),f=r,u=l["".concat(i,".").concat(f)]||l[f]||m[f]||a;return t?o.a.createElement(u,s(s({ref:n},p),{},{components:t})):o.a.createElement(u,s({ref:n},p))}));function u(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=f;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<a;p++)i[p]=t[p];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,t)}f.displayName="MDXCreateElement"}}]);