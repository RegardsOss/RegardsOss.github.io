(window.webpackJsonp=window.webpackJsonp||[]).push([[1933],{2005:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return s})),r.d(t,"toc",(function(){return l})),r.d(t,"default",(function(){return c}));var n=r(3),i=r(7),a=(r(0),r(2704)),o={},s={unversionedId:"development/backend/regards/ingest/api/generated-snippets/AIPControllerIT/searchAIPCategories/request-fields",id:"version-1.4.0/development/backend/regards/ingest/api/generated-snippets/AIPControllerIT/searchAIPCategories/request-fields",isDocsHomePage:!1,title:"request-fields",description:"|Path|Type|Description|Constraints| |||||",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-1.4.0/development/backend/regards/ingest/api/generated-snippets/AIPControllerIT/searchAIPCategories/request-fields.md",slug:"/development/backend/regards/ingest/api/generated-snippets/AIPControllerIT/searchAIPCategories/request-fields",permalink:"/fr/docs/1.4.0/development/backend/regards/ingest/api/generated-snippets/AIPControllerIT/searchAIPCategories/request-fields",editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/versioned_docs/version-1.4.0/development/backend/regards/ingest/api/generated-snippets/AIPControllerIT/searchAIPCategories/request-fields.md",version:"1.4.0"},l=[],p={toc:l};function c(e){var t=e.components,r=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"|Path|Type|Description|Constraints| |:--:|:--:|:---------:|:---------:|\n    |state| `String` |AIP Entity state filter|Optional. Multiple values allowed. Allowed values : GENERATED, STORED, DELETED|\n    |lastUpdate.from| `OffsetDateTime` |ISO Date time filtering on last update|Optional. Required format : yyyy-MM-dd'T'HH:mm:ss.SSSZ|\n    |lastUpdate.to| `OffsetDateTime` |ISO Date time filtering on last update|Optional. Required format : yyyy-MM-dd'T'HH:mm:ss.SSSZ|\n    |tags| `List` |A list of tags every entity must have|Optional.|\n    |providerIds| `String` |A list of provider ids filter|Optional. If you add the % character, we will use the like operator to match provider id|\n    |sessionOwner| `String` |Session owner filter|Optional.|\n    |session| `String` |Session filter|Optional.|\n    |categories| `List` |A list of categories every entity must have|Optional.|\n    |storages| `List` |A list of storage names the entity must have, at least one|Optional.|\n    |aipIds| `List` |A list of aip ids|Optional.|\n    |aipIds| `List` |A list of aip ids|Optional.|\n    |state| `String` |This attribute describe what the aipIds list mean.|Optional. Allowed values : INCLUDE, EXCLUDE|\n")))}c.isMDXComponent=!0},2704:function(e,t,r){"use strict";r.d(t,"a",(function(){return d})),r.d(t,"b",(function(){return g}));var n=r(0),i=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var p=i.a.createContext({}),c=function(e){var t=i.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},d=function(e){var t=c(e.components);return i.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},f=i.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(r),f=n,g=d["".concat(o,".").concat(f)]||d[f]||u[f]||a;return r?i.a.createElement(g,s(s({ref:t},p),{},{components:r})):i.a.createElement(g,s({ref:t},p))}));function g(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,o=new Array(a);o[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var p=2;p<a;p++)o[p]=r[p];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"}}]);