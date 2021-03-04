(window.webpackJsonp=window.webpackJsonp||[]).push([[2251],{2321:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return s})),t.d(n,"toc",(function(){return c})),t.d(n,"default",(function(){return l}));var r=t(3),a=t(7),o=(t(0),t(2701)),i={},s={unversionedId:"development/backend/regards/ingest/api/generated-snippets/IngestProcessingChainControllerIT/createIngestProcessingChain/request-body",id:"version-1.4.0/development/backend/regards/ingest/api/generated-snippets/IngestProcessingChainControllerIT/createIngestProcessingChain/request-body",isDocsHomePage:!1,title:"request-body",description:"Data params",source:"@site/versioned_docs/version-1.4.0/development/backend/regards/ingest/api/generated-snippets/IngestProcessingChainControllerIT/createIngestProcessingChain/request-body.md",slug:"/development/backend/regards/ingest/api/generated-snippets/IngestProcessingChainControllerIT/createIngestProcessingChain/request-body",permalink:"/docs/development/backend/regards/ingest/api/generated-snippets/IngestProcessingChainControllerIT/createIngestProcessingChain/request-body",editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/versioned_docs/version-1.4.0/development/backend/regards/ingest/api/generated-snippets/IngestProcessingChainControllerIT/createIngestProcessingChain/request-body.md",version:"1.4.0"},c=[],p={toc:c};function l(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"***Data params***\n")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-json"},'    {\n  "name" : "ingestProcessingChain_test",\n  "description" : "the ingest processing chain description",\n  "validationPlugin" : {\n    "pluginId" : "FakeValidationTestPlugin",\n    "label" : "FakeValidationTestPlugin",\n    "businessId" : "55fe8a50-7c9b-4548-80e5-ef889902b4b6",\n    "priorityOrder" : 0,\n    "active" : true,\n    "parameters" : [ ]\n  },\n  "generationPlugin" : {\n    "pluginId" : "FakeAIPGenerationTestPlugin",\n    "label" : "FakeAIPGenerationTestPlugin",\n    "businessId" : "e000241a-0057-4c89-95d3-142c5a5216ff",\n    "priorityOrder" : 0,\n    "active" : true,\n    "parameters" : [ ]\n  }\n}\n')))}l.isMDXComponent=!0},2701:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return b}));var r=t(0),a=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=a.a.createContext({}),l=function(e){var n=a.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},u=function(e){var n=l(e.components);return a.a.createElement(p.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},g=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(t),g=r,b=u["".concat(i,".").concat(g)]||u[g]||d[g]||o;return t?a.a.createElement(b,s(s({ref:n},p),{},{components:t})):a.a.createElement(b,s({ref:n},p))}));function b(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=g;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=t[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,t)}g.displayName="MDXCreateElement"}}]);