(window.webpackJsonp=window.webpackJsonp||[]).push([[390],{2708:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return f}));var r=t(0),i=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=i.a.createContext({}),l=function(e){var n=i.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},d=function(e){var n=l(e.components);return i.a.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},m=i.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=l(t),m=r,f=d["".concat(o,".").concat(m)]||d[m]||u[m]||a;return t?i.a.createElement(f,s(s({ref:n},p),{},{components:t})):i.a.createElement(f,s({ref:n},p))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,o=new Array(a);o[0]=m;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var p=2;p<a;p++)o[p]=t[p];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},465:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return s})),t.d(n,"toc",(function(){return c})),t.d(n,"default",(function(){return l}));var r=t(3),i=t(7),a=(t(0),t(2708)),o={},s={unversionedId:"development/backend/regards/ingest/api/generated-snippets/SIPControllerIT/getSips/http-response",id:"development/backend/regards/ingest/api/generated-snippets/SIPControllerIT/getSips/http-response",isDocsHomePage:!1,title:"http-response",description:"Request",source:"@site/docs/development/backend/regards/ingest/api/generated-snippets/SIPControllerIT/getSips/http-response.md",slug:"/development/backend/regards/ingest/api/generated-snippets/SIPControllerIT/getSips/http-response",permalink:"/fr/docs/development/backend/regards/ingest/api/generated-snippets/SIPControllerIT/getSips/http-response",editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/docs/development/backend/regards/ingest/api/generated-snippets/SIPControllerIT/getSips/http-response.md",version:"current"},c=[],p={toc:c};function l(e){var n=e.components,t=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("h4",{id:"request"},"Request"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},Object(a.b)("strong",{parentName:"p"},"Code:")," 200 OK"),Object(a.b)("pre",{parentName:"li"},Object(a.b)("code",{parentName:"pre"},"  **Headers:**\n\n  `Pragma:no-cache`\n  `X-XSS-Protection:1; mode=block`\n  `Expires:0`\n  `X-Frame-Options:DENY`\n  `X-Content-Type-Options:nosniff`\n  `Access-Control-Allow-Headers:authorization, content-type, scope`\n  `Access-Control-Max-Age:3600`\n  `Content-Type:application/json;charset=UTF-8`\n  `Access-Control-Allow-Origin:*`\n  `Cache-Control:no-cache, no-store, max-age=0, must-revalidate`\n  `Access-Control-Allow-Methods:POST, PUT, GET, OPTIONS, DELETE`\n\n  **Content:**\n")))),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-json"},'    \n{\n  "metadata" : {\n    "size" : 10,\n    "totalElements" : 2,\n    "totalPages" : 1,\n    "number" : 0\n  },\n  "content" : [ {\n    "content" : {\n      "id" : 5,\n      "providerId" : "SIP_001",\n      "sipId" : "URN:SIP:DATA:PROJECT:dbbbbe05-b6b8-3300-8431-105f505cbb3c:V1",\n      "owner" : "default_user@regards.fr",\n      "version" : 1,\n      "state" : "CREATED",\n      "processingErrors" : [ ],\n      "checksum" : "edcbbe4a163660e9cd3af0a0c9cc8d2b",\n      "sip" : {\n        "ipType" : "DATA",\n        "id" : "SIP_001",\n        "geometry" : null,\n        "normalizedGeometry" : null,\n        "properties" : {\n          "contentInformations" : [ {\n            "representationInformation" : {\n              "syntax" : {\n                "description" : "http://www.iana.org/assignments/media-types/application/fits",\n                "mimeType" : "application/fits",\n                "name" : "FITS(FlexibleImageTransport)"\n              }\n            },\n            "dataObject" : {\n              "regardsDataType" : "RAWDATA",\n              "reference" : false,\n              "urls" : [ "file:/app_to_build/ingest/ingest-rest/data1.fits" ],\n              "filename" : "data1.fits",\n              "algorithm" : "MD5",\n              "checksum" : "b463726cfbb52d47e432bedf08edbec3",\n              "fileSize" : 12345\n            }\n          } ],\n          "pdi" : {\n            "contextInformation" : {\n              "tags" : [ "JASON_MISSION" ]\n            },\n            "referenceInformation" : {\n              "ark" : "http://example.org/ark:/13030/654xz321/s3/f8.05v.tiff",\n              "doi" : "https://doi.org/10.1007/s00223-003-0070-0",\n              "ivoa" : "ivo://XXXXX-YYYYYY"\n            },\n            "provenanceInformation" : {\n              "history" : [ {\n                "type" : "creation",\n                "comment" : "AIP creation",\n                "date" : "2014-01-02T22:10:05Z"\n              }, {\n                "type" : "update",\n                "comment" : "instrument calibration",\n                "date" : "2014-01-09T08:01:37Z"\n              }, {\n                "type" : "update",\n                "comment" : "data acquisition",\n                "date" : "2014-02-13T11:25:36Z"\n              }, {\n                "type" : "update",\n                "comment" : "new calibratiopn parameter 0.001",\n                "date" : "2014-02-19T12:31:17Z"\n              } ],\n              "facility" : "CNES",\n              "instrument" : "Doris instrument",\n              "filter" : "a filter",\n              "detector" : "detector",\n              "proposal" : "a proposal",\n              "additional" : {\n                "key-ref-1" : "additional value 1",\n                "key-ref-2" : "additional value 2",\n                "key-ref-3" : "additional value 3"\n              }\n            },\n            "fixityInformation" : {\n              "key-fixity-1" : "fixity value 1",\n              "key-fixity-2" : "fixity value 2"\n            },\n            "accessRightInformation" : {\n              "licence" : "licence",\n              "dataRights" : "access rights",\n              "publicReleaseDate" : "2014-01-12T22:10:05Z"\n            }\n          },\n          "descriptiveInformation" : {\n            "dateProperty" : "2014-05-03T01:10:17Z",\n            "longProperty" : 987654,\n            "stringProperty" : "Lorem ipsum dolor sit amet"\n          },\n          "miscInformation" : {\n            "key-misc-3" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",\n            "key-misc-1" : "misc value 1",\n            "key-misc-2" : "2014-02-10T00:00:01.123Z"\n          }\n        },\n        "type" : "Feature"\n      },\n      "ingestDate" : "2019-07-19T17:31:58.809Z",\n      "processing" : "DefaultProcessingChain",\n      "session" : {\n        "id" : "sessionId",\n        "lastActivationDate" : "2019-07-19T17:31:58.854Z",\n        "sipsCount" : 0,\n        "indexedSipsCount" : 0,\n        "storedSipsCount" : 0,\n        "generatedSipsCount" : 0,\n        "errorSipsCount" : 0,\n        "deletedSipsCount" : 0,\n        "generationErrorCount" : 0\n      }\n    },\n    "links" : [ ]\n  }, {\n    "content" : {\n      "id" : 6,\n      "providerId" : "SIP_002",\n      "sipId" : "URN:SIP:DATA:PROJECT:bdacbc80-624d-3a7c-8de7-464743b3d1f9:V1",\n      "owner" : "default_user@regards.fr",\n      "version" : 1,\n      "state" : "CREATED",\n      "processingErrors" : [ ],\n      "checksum" : "8da8da83ad4432eb59db18b9550603e4",\n      "sip" : {\n        "ipType" : "DATA",\n        "id" : "SIP_002",\n        "geometry" : null,\n        "normalizedGeometry" : null,\n        "properties" : {\n          "contentInformations" : [ {\n            "representationInformation" : {\n              "syntax" : {\n                "description" : "http://www.iana.org/assignments/media-types/application/fits",\n                "mimeType" : "application/fits",\n                "name" : "FITS(FlexibleImageTransport)"\n              }\n            },\n            "dataObject" : {\n              "regardsDataType" : "RAWDATA",\n              "reference" : false,\n              "urls" : [ "file:/app_to_build/ingest/ingest-rest/data2.fits" ],\n              "filename" : "data2.fits",\n              "algorithm" : "MD5",\n              "checksum" : "b463726cfbb52d47e432bedf08edbec3",\n              "fileSize" : 12345\n            }\n          } ],\n          "pdi" : {\n            "contextInformation" : {\n              "tags" : [ "JASON_MISSION" ]\n            },\n            "referenceInformation" : {\n              "ark" : "http://example.org/ark:/13030/654xz321/s3/f8.05v.tiff",\n              "doi" : "https://doi.org/10.1007/s00223-003-0070-0",\n              "ivoa" : "ivo://XXXXX-YYYYYY"\n            },\n            "provenanceInformation" : {\n              "history" : [ {\n                "type" : "creation",\n                "comment" : "AIP creation",\n                "date" : "2014-01-02T22:10:05Z"\n              }, {\n                "type" : "update",\n                "comment" : "instrument calibration",\n                "date" : "2014-01-09T08:01:37Z"\n              }, {\n                "type" : "update",\n                "comment" : "data acquisition",\n                "date" : "2014-02-13T11:25:36Z"\n              }, {\n                "type" : "update",\n                "comment" : "new calibratiopn parameter 0.001",\n                "date" : "2014-02-19T12:31:17Z"\n              } ],\n              "facility" : "CNES",\n              "instrument" : "Doris instrument",\n              "filter" : "a filter",\n              "detector" : "detector",\n              "proposal" : "a proposal",\n              "additional" : {\n                "key-ref-1" : "additional value 1",\n                "key-ref-2" : "additional value 2",\n                "key-ref-3" : "additional value 3"\n              }\n            },\n            "fixityInformation" : {\n              "key-fixity-1" : "fixity value 1",\n              "key-fixity-2" : "fixity value 2"\n            },\n            "accessRightInformation" : {\n              "licence" : "licence",\n              "dataRights" : "access rights",\n              "publicReleaseDate" : "2014-01-12T22:10:05Z"\n            }\n          },\n          "descriptiveInformation" : {\n            "dateProperty" : "2014-05-03T01:10:17Z",\n            "longProperty" : 987654,\n            "stringProperty" : "Lorem ipsum dolor sit amet"\n          },\n          "miscInformation" : {\n            "key-misc-3" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",\n            "key-misc-1" : "misc value 1",\n            "key-misc-2" : "2014-02-10T00:00:01.123Z"\n          }\n        },\n        "type" : "Feature"\n      },\n      "ingestDate" : "2019-07-19T17:31:58.841Z",\n      "processing" : "DefaultProcessingChain",\n      "session" : {\n        "id" : "sessionId",\n        "lastActivationDate" : "2019-07-19T17:31:58.854Z",\n        "sipsCount" : 0,\n        "indexedSipsCount" : 0,\n        "storedSipsCount" : 0,\n        "generatedSipsCount" : 0,\n        "errorSipsCount" : 0,\n        "deletedSipsCount" : 0,\n        "generationErrorCount" : 0\n      }\n    },\n    "links" : [ ]\n  } ],\n  "links" : [ {\n    "rel" : "self",\n    "href" : "http://localhost:8080/sips?page=0&size=10&sort=id,asc"\n  } ]\n}\n')))}l.isMDXComponent=!0}}]);