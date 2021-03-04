(window.webpackJsonp=window.webpackJsonp||[]).push([[2258],{2328:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return a})),t.d(n,"metadata",(function(){return c})),t.d(n,"toc",(function(){return i})),t.d(n,"default",(function(){return l}));var r=t(3),o=t(7),s=(t(0),t(2701)),a={},c={unversionedId:"development/backend/regards/ingest/api/generated-snippets/AIPControllerIT/searchAIPs/response-fields",id:"development/backend/regards/ingest/api/generated-snippets/AIPControllerIT/searchAIPs/response-fields",isDocsHomePage:!1,title:"response-fields",description:"|Path|Type|Description|Constraints| |||||",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/development/backend/regards/ingest/api/generated-snippets/AIPControllerIT/searchAIPs/response-fields.md",slug:"/development/backend/regards/ingest/api/generated-snippets/AIPControllerIT/searchAIPs/response-fields",permalink:"/fr/docs/next/development/backend/regards/ingest/api/generated-snippets/AIPControllerIT/searchAIPs/response-fields",editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/i18n/fr/docusaurus-plugin-content-docs/current/development/backend/regards/ingest/api/generated-snippets/AIPControllerIT/searchAIPs/response-fields.md",version:"current"},i=[],p={toc:i};function l(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(s.b)("wrapper",Object(r.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre"},"|Path|Type|Description|Constraints| |:--:|:--:|:---------:|:---------:|\n    |content[].content.state| `String` |State|Must not be null. Allowed values : GENERATED, STORED, DELETED|\n    |content[].content.providerId| `String` |Provider id|Must not be blank|\n    |content[].content.aipId| `String` |AIP id|Must not be blank|\n    |content[].content.creationDate| `String` |Date of AIP creation|Must not be null|\n    |content[].content.lastUpdate| `String` |Date of last AIP update|Must not be null|\n    |content[].content.tags| `Array` |List of tags||\n    |content[].content.aip| `Object` |Generated AIP|Must not be null|\n    |content[].content.sessionOwner| `String` |Session owner|Must not be blank|\n    |content[].content.session| `String` |Session|Must not be blank|\n    |content[].content.storages| `Array` |List of storage||\n    |content[].content.categories| `Array` |List of categories||\n")))}l.isMDXComponent=!0},2701:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return g}));var r=t(0),o=t.n(r);function s(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){s(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=o.a.createContext({}),l=function(e){var n=o.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},u=function(e){var n=l(e.components);return o.a.createElement(p.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},f=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,s=e.originalType,a=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=l(t),f=r,g=u["".concat(a,".").concat(f)]||u[f]||d[f]||s;return t?o.a.createElement(g,c(c({ref:n},p),{},{components:t})):o.a.createElement(g,c({ref:n},p))}));function g(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var s=t.length,a=new Array(s);a[0]=f;var c={};for(var i in n)hasOwnProperty.call(n,i)&&(c[i]=n[i]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var p=2;p<s;p++)a[p]=t[p];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,t)}f.displayName="MDXCreateElement"}}]);