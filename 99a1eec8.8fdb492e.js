(window.webpackJsonp=window.webpackJsonp||[]).push([[1588],{1658:function(e,n,r){"use strict";r.r(n),r.d(n,"frontMatter",(function(){return s})),r.d(n,"metadata",(function(){return o})),r.d(n,"toc",(function(){return l})),r.d(n,"default",(function(){return g}));var t=r(3),i=r(7),a=(r(0),r(2699)),s={},o={unversionedId:"development/backend/regards/ingest/api/generated-snippets/IngestProcessingChainControllerIT/createIngestProcessingChain/http-response",id:"version-1.4.0/development/backend/regards/ingest/api/generated-snippets/IngestProcessingChainControllerIT/createIngestProcessingChain/http-response",isDocsHomePage:!1,title:"http-response",description:"Request",source:"@site/versioned_docs/version-1.4.0/development/backend/regards/ingest/api/generated-snippets/IngestProcessingChainControllerIT/createIngestProcessingChain/http-response.md",slug:"/development/backend/regards/ingest/api/generated-snippets/IngestProcessingChainControllerIT/createIngestProcessingChain/http-response",permalink:"/docs/1.4.0/development/backend/regards/ingest/api/generated-snippets/IngestProcessingChainControllerIT/createIngestProcessingChain/http-response",editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/versioned_docs/version-1.4.0/development/backend/regards/ingest/api/generated-snippets/IngestProcessingChainControllerIT/createIngestProcessingChain/http-response.md",version:"1.4.0"},l=[],c={toc:l};function g(e){var n=e.components,r=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(t.a)({},c,r,{components:n,mdxType:"MDXLayout"}),Object(a.b)("h4",{id:"request"},"Request"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},Object(a.b)("strong",{parentName:"p"},"Code:")," 201 Created"),Object(a.b)("pre",{parentName:"li"},Object(a.b)("code",{parentName:"pre"},"  **Headers:**\n\n  `Pragma:no-cache`\n  `X-XSS-Protection:1; mode=block`\n  `Expires:0`\n  `X-Frame-Options:DENY`\n  `X-Content-Type-Options:nosniff`\n  `Access-Control-Allow-Headers:authorization, content-type, scope`\n  `Content-Type:application/hal+json;charset=UTF-8`\n  `Access-Control-Max-Age:3600`\n  `Access-Control-Allow-Origin:*`\n  `Cache-Control:no-cache, no-store, max-age=0, must-revalidate`\n  `Access-Control-Allow-Methods:POST, PUT, GET, OPTIONS, DELETE`\n\n  **Content:**\n")))),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-json"},'    \n{\n  "id" : 57,\n  "name" : "ingestProcessingChain_test",\n  "description" : "the ingest processing chain description",\n  "preProcessingPlugin" : null,\n  "validationPlugin" : {\n    "id" : 60,\n    "metaData" : {\n      "pluginClassName" : "fr.cnes.regards.modules.ingest.service.plugin.FakeValidationTestPlugin",\n      "interfaceNames" : [ "fr.cnes.regards.modules.ingest.domain.plugin.ISipValidation" ],\n      "author" : "REGARDS Team",\n      "pluginId" : "FakeValidationTestPlugin",\n      "version" : "1.0.0",\n      "description" : "Fake plugin for SIP validation",\n      "markdown" : "",\n      "url" : "https://regardsoss.github.io/",\n      "contact" : "regards@c-s.fr",\n      "owner" : "CNES",\n      "license" : "GPLv3",\n      "parameters" : [ ]\n    },\n    "pluginId" : "FakeValidationTestPlugin",\n    "label" : "FakeValidationTestPlugin",\n    "businessId" : "55fe8a50-7c9b-4548-80e5-ef889902b4b6",\n    "version" : "1.0.0",\n    "priorityOrder" : 0,\n    "active" : true,\n    "parameters" : [ ],\n    "iconUrl" : null,\n    "pluginClassName" : "fr.cnes.regards.modules.ingest.service.plugin.FakeValidationTestPlugin",\n    "interfaceNames" : [ "fr.cnes.regards.modules.ingest.domain.plugin.ISipValidation" ],\n    "identifiable" : true\n  },\n  "generationPlugin" : {\n    "id" : 61,\n    "metaData" : {\n      "pluginClassName" : "fr.cnes.regards.modules.ingest.service.plugin.FakeAIPGenerationTestPlugin",\n      "interfaceNames" : [ "fr.cnes.regards.modules.ingest.domain.plugin.IAipGeneration" ],\n      "author" : "REGARDS Team",\n      "pluginId" : "FakeAIPGenerationTestPlugin",\n      "version" : "1.0.0",\n      "description" : "Fake plugin for AIP generation",\n      "markdown" : "",\n      "url" : "https://regardsoss.github.io/",\n      "contact" : "regards@c-s.fr",\n      "owner" : "CNES",\n      "license" : "GPLv3",\n      "parameters" : [ ]\n    },\n    "pluginId" : "FakeAIPGenerationTestPlugin",\n    "label" : "FakeAIPGenerationTestPlugin",\n    "businessId" : "e000241a-0057-4c89-95d3-142c5a5216ff",\n    "version" : "1.0.0",\n    "priorityOrder" : 0,\n    "active" : true,\n    "parameters" : [ ],\n    "iconUrl" : null,\n    "pluginClassName" : "fr.cnes.regards.modules.ingest.service.plugin.FakeAIPGenerationTestPlugin",\n    "interfaceNames" : [ "fr.cnes.regards.modules.ingest.domain.plugin.IAipGeneration" ],\n    "identifiable" : true\n  },\n  "tagPlugin" : null,\n  "postProcessingPlugin" : null,\n  "chainPlugins" : [ {\n    "id" : 60,\n    "metaData" : {\n      "pluginClassName" : "fr.cnes.regards.modules.ingest.service.plugin.FakeValidationTestPlugin",\n      "interfaceNames" : [ "fr.cnes.regards.modules.ingest.domain.plugin.ISipValidation" ],\n      "author" : "REGARDS Team",\n      "pluginId" : "FakeValidationTestPlugin",\n      "version" : "1.0.0",\n      "description" : "Fake plugin for SIP validation",\n      "markdown" : "",\n      "url" : "https://regardsoss.github.io/",\n      "contact" : "regards@c-s.fr",\n      "owner" : "CNES",\n      "license" : "GPLv3",\n      "parameters" : [ ]\n    },\n    "pluginId" : "FakeValidationTestPlugin",\n    "label" : "FakeValidationTestPlugin",\n    "businessId" : "55fe8a50-7c9b-4548-80e5-ef889902b4b6",\n    "version" : "1.0.0",\n    "priorityOrder" : 0,\n    "active" : true,\n    "parameters" : [ ],\n    "iconUrl" : null,\n    "pluginClassName" : "fr.cnes.regards.modules.ingest.service.plugin.FakeValidationTestPlugin",\n    "interfaceNames" : [ "fr.cnes.regards.modules.ingest.domain.plugin.ISipValidation" ],\n    "identifiable" : true\n  }, {\n    "id" : 61,\n    "metaData" : {\n      "pluginClassName" : "fr.cnes.regards.modules.ingest.service.plugin.FakeAIPGenerationTestPlugin",\n      "interfaceNames" : [ "fr.cnes.regards.modules.ingest.domain.plugin.IAipGeneration" ],\n      "author" : "REGARDS Team",\n      "pluginId" : "FakeAIPGenerationTestPlugin",\n      "version" : "1.0.0",\n      "description" : "Fake plugin for AIP generation",\n      "markdown" : "",\n      "url" : "https://regardsoss.github.io/",\n      "contact" : "regards@c-s.fr",\n      "owner" : "CNES",\n      "license" : "GPLv3",\n      "parameters" : [ ]\n    },\n    "pluginId" : "FakeAIPGenerationTestPlugin",\n    "label" : "FakeAIPGenerationTestPlugin",\n    "businessId" : "e000241a-0057-4c89-95d3-142c5a5216ff",\n    "version" : "1.0.0",\n    "priorityOrder" : 0,\n    "active" : true,\n    "parameters" : [ ],\n    "iconUrl" : null,\n    "pluginClassName" : "fr.cnes.regards.modules.ingest.service.plugin.FakeAIPGenerationTestPlugin",\n    "interfaceNames" : [ "fr.cnes.regards.modules.ingest.domain.plugin.IAipGeneration" ],\n    "identifiable" : true\n  } ],\n  "_links" : {\n    "delete" : {\n      "href" : "http://localhost:8080/processingchains/ingestProcessingChain_test"\n    },\n    "update" : {\n      "href" : "http://localhost:8080/processingchains/ingestProcessingChain_test"\n    },\n    "export" : {\n      "href" : "http://localhost:8080/processingchains/ingestProcessingChain_test/export"\n    }\n  }\n}\n')))}g.isMDXComponent=!0},2699:function(e,n,r){"use strict";r.d(n,"a",(function(){return p})),r.d(n,"b",(function(){return m}));var t=r(0),i=r.n(t);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function s(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function o(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?s(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function l(e,n){if(null==e)return{};var r,t,i=function(e,n){if(null==e)return{};var r,t,i={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(i[r]=e[r]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=i.a.createContext({}),g=function(e){var n=i.a.useContext(c),r=n;return e&&(r="function"==typeof e?e(n):o(o({},n),e)),r},p=function(e){var n=g(e.components);return i.a.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},d=i.a.forwardRef((function(e,n){var r=e.components,t=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=g(r),d=t,m=p["".concat(s,".").concat(d)]||p[d]||u[d]||a;return r?i.a.createElement(m,o(o({ref:n},c),{},{components:r})):i.a.createElement(m,o({ref:n},c))}));function m(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var a=r.length,s=new Array(a);s[0]=d;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o.mdxType="string"==typeof e?e:t,s[1]=o;for(var c=2;c<a;c++)s[c]=r[c];return i.a.createElement.apply(null,s)}return i.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);