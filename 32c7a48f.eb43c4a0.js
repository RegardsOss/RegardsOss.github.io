(window.webpackJsonp=window.webpackJsonp||[]).push([[510],{2701:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return f}));var r=t(0),o=t.n(r);function s(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){s(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=o.a.createContext({}),l=function(e){var n=o.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=l(e.components);return o.a.createElement(p.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},g=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,s=e.originalType,a=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(t),g=r,f=u["".concat(a,".").concat(g)]||u[g]||d[g]||s;return t?o.a.createElement(f,i(i({ref:n},p),{},{components:t})):o.a.createElement(f,i({ref:n},p))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var s=t.length,a=new Array(s);a[0]=g;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,a[1]=i;for(var p=2;p<s;p++)a[p]=t[p];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,t)}g.displayName="MDXCreateElement"},582:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return a})),t.d(n,"metadata",(function(){return i})),t.d(n,"toc",(function(){return c})),t.d(n,"default",(function(){return l}));var r=t(3),o=t(7),s=(t(0),t(2701)),a={},i={unversionedId:"development/backend/regards/ingest/api/generated-snippets/IngestProcessingChainControllerIT/deleteIngestProcessingChain/http-request",id:"development/backend/regards/ingest/api/generated-snippets/IngestProcessingChainControllerIT/deleteIngestProcessingChain/http-request",isDocsHomePage:!1,title:"http-request",description:"Request",source:"@site/docs/development/backend/regards/ingest/api/generated-snippets/IngestProcessingChainControllerIT/deleteIngestProcessingChain/http-request.md",slug:"/development/backend/regards/ingest/api/generated-snippets/IngestProcessingChainControllerIT/deleteIngestProcessingChain/http-request",permalink:"/docs/next/development/backend/regards/ingest/api/generated-snippets/IngestProcessingChainControllerIT/deleteIngestProcessingChain/http-request",editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/docs/development/backend/regards/ingest/api/generated-snippets/IngestProcessingChainControllerIT/deleteIngestProcessingChain/http-request.md",version:"current"},c=[],p={toc:c};function l(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(s.b)("wrapper",Object(r.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre"},"#### Request\n\n    ***URL***\n\n    `/processingchains/ingestProcessingChain_test`\n\n    ***URL template***\n\n    `/processingchains/{name}`\n\n    ***Method***\n\n    `DELETE`\n\n    ***Headers***\n\n    `Authorization:Bearer{token}`\n    `Content-Type:application/geo+json;charset=UTF-8`\n")))}l.isMDXComponent=!0}}]);