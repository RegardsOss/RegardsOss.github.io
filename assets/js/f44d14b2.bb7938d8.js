(window.webpackJsonp=window.webpackJsonp||[]).push([[2498],{2570:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return u}));var r=n(3),o=n(7),s=(n(0),n(2704)),a={},i={unversionedId:"development/backend/regards/ingest/api/generated-snippets/RequestControllerIT/searchRequests/response-fields",id:"development/backend/regards/ingest/api/generated-snippets/RequestControllerIT/searchRequests/response-fields",isDocsHomePage:!1,title:"response-fields",description:"|Path|Type|Description|Constraints| |||||",source:"@site/docs/development/backend/regards/ingest/api/generated-snippets/RequestControllerIT/searchRequests/response-fields.md",slug:"/development/backend/regards/ingest/api/generated-snippets/RequestControllerIT/searchRequests/response-fields",permalink:"/docs/development/backend/regards/ingest/api/generated-snippets/RequestControllerIT/searchRequests/response-fields",editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/docs/development/backend/regards/ingest/api/generated-snippets/RequestControllerIT/searchRequests/response-fields.md",version:"current"},c=[],p={toc:c};function u(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(s.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre"},"|Path|Type|Description|Constraints| |:--:|:--:|:---------:|:---------:|\n    |content[].content.id| `Number` |Request id||\n    |content[].content.creationDate| `OffsetDateTime` |Date of Request creation||\n    |content[].content.remoteStepDeadline| `OffsetDateTime` |Date of Request timeout||\n    |content[].content.state| `String` |Request state. Allowed values : TO_SCHEDULE, CREATED, BLOCKED, RUNNING, ERROR, ABORTED||\n    |content[].content.dtype| `String` |Request type. Allowed values : INGEST, UPDATE, AIP_UPDATES_CREATOR, STORE_METADATA, OAIS_DELETION, OAIS_DELETION_CREATOR||\n    |content[].content.sessionOwner| `String` |Session owner||\n    |content[].content.session| `String` |Session||\n    |content[].content.providerId| `String` |Provider id||\n    |content[].content.errors| `Array` |List of errors associated to the request||\n")))}u.isMDXComponent=!0},2704:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return m}));var r=n(0),o=n.n(r);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=o.a.createContext({}),u=function(e){var t=o.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=u(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,a=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),l=u(n),f=r,m=l["".concat(a,".").concat(f)]||l[f]||d[f]||s;return n?o.a.createElement(m,i(i({ref:t},p),{},{components:n})):o.a.createElement(m,i({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,a=new Array(s);a[0]=f;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,a[1]=i;for(var p=2;p<s;p++)a[p]=n[p];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"}}]);