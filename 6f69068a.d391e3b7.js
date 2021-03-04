(window.webpackJsonp=window.webpackJsonp||[]).push([[1118],{1188:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return s})),r.d(t,"toc",(function(){return l})),r.d(t,"default",(function(){return c}));var n=r(3),i=r(7),a=(r(0),r(2701)),o={},s={unversionedId:"development/backend/regards/ingest/api/generated-snippets/AIPControllerIT/testUpdateAips/request-fields",id:"development/backend/regards/ingest/api/generated-snippets/AIPControllerIT/testUpdateAips/request-fields",isDocsHomePage:!1,title:"request-fields",description:"|Path|Type|Description|Constraints| |||||",source:"@site/docs/development/backend/regards/ingest/api/generated-snippets/AIPControllerIT/testUpdateAips/request-fields.md",slug:"/development/backend/regards/ingest/api/generated-snippets/AIPControllerIT/testUpdateAips/request-fields",permalink:"/docs/next/development/backend/regards/ingest/api/generated-snippets/AIPControllerIT/testUpdateAips/request-fields",editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/docs/development/backend/regards/ingest/api/generated-snippets/AIPControllerIT/testUpdateAips/request-fields.md",version:"current"},l=[],p={toc:l};function c(e){var t=e.components,r=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"|Path|Type|Description|Constraints| |:--:|:--:|:---------:|:---------:|\n    |addTags| `List` |A list of tags every entity will have|Optional.|\n    |removeTags| `List` |A list of tags every entity won't have anymore|Optional.|\n    |addCategories| `List` |A list of categories every entity will have|Optional.|\n    |removeCategories| `List` |A list of categories every entity won't have anymore|Optional.|\n    |removeStorages| `List` |A list of storages every entity won't use anymore|Optional.|\n    |criteria.state| `String` |AIP Entity state filter|Optional. Multiple values allowed. Allowed values : GENERATED, STORED, DELETED|\n    |criteria.lastUpdate.from| `OffsetDateTime` |ISO Date time filtering on last update|Optional. Required format : yyyy-MM-dd'T'HH:mm:ss.SSSZ|\n    |criteria.lastUpdate.to| `OffsetDateTime` |ISO Date time filtering on last update|Optional. Required format : yyyy-MM-dd'T'HH:mm:ss.SSSZ|\n    |criteria.tags| `List` |A list of tags every entity must have|Optional.|\n    |criteria.providerIds| `String` |A list of provider ids filter|Optional. If you add the % character, we will use the like operator to match provider id|\n    |criteria.sessionOwner| `String` |Session owner filter|Optional.|\n    |criteria.session| `String` |Session filter|Optional.|\n    |criteria.categories| `List` |A list of categories every entity must have|Optional.|\n    |criteria.storages| `List` |A list of storage names the entity must have, at least one|Optional.|\n    |criteria.aipIds| `List` |A list of aip ids|Optional.|\n    |criteria.aipIds| `List` |A list of aip ids|Optional.|\n    |criteria.state| `String` |This attribute describe what the aipIds list mean.|Optional. Allowed values : INCLUDE, EXCLUDE|\n")))}c.isMDXComponent=!0},2701:function(e,t,r){"use strict";r.d(t,"a",(function(){return d})),r.d(t,"b",(function(){return m}));var n=r(0),i=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var p=i.a.createContext({}),c=function(e){var t=i.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},d=function(e){var t=c(e.components);return i.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},f=i.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(r),f=n,m=d["".concat(o,".").concat(f)]||d[f]||u[f]||a;return r?i.a.createElement(m,s(s({ref:t},p),{},{components:r})):i.a.createElement(m,s({ref:t},p))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,o=new Array(a);o[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var p=2;p<a;p++)o[p]=r[p];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"}}]);