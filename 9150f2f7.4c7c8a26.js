(window.webpackJsonp=window.webpackJsonp||[]).push([[1501],{1571:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return o})),t.d(r,"metadata",(function(){return s})),t.d(r,"toc",(function(){return l})),t.d(r,"default",(function(){return p}));var n=t(3),i=t(7),a=(t(0),t(2699)),o={},s={unversionedId:"development/backend/regards/dataprovider/api/generated-snippets/AcquisitionFileControllerIT/searchAllFiles/request-parameters",id:"version-1.4.0/development/backend/regards/dataprovider/api/generated-snippets/AcquisitionFileControllerIT/searchAllFiles/request-parameters",isDocsHomePage:!1,title:"request-parameters",description:"*Query params",source:"@site/versioned_docs/version-1.4.0/development/backend/regards/dataprovider/api/generated-snippets/AcquisitionFileControllerIT/searchAllFiles/request-parameters.md",slug:"/development/backend/regards/dataprovider/api/generated-snippets/AcquisitionFileControllerIT/searchAllFiles/request-parameters",permalink:"/docs/1.4.0/development/backend/regards/dataprovider/api/generated-snippets/AcquisitionFileControllerIT/searchAllFiles/request-parameters",editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/versioned_docs/version-1.4.0/development/backend/regards/dataprovider/api/generated-snippets/AcquisitionFileControllerIT/searchAllFiles/request-parameters.md",version:"1.4.0"},l=[],c={toc:l};function p(e){var r=e.components,t=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},c,t,{components:r,mdxType:"MDXLayout"}),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"***Query params**\n\n    |Parameter|Type|Description|Constraints| |:-------:|:--:|:---------:|:---------:|\n    | `filePath` |String|Entire file path filter|Optional|\n    | `state` |String|Acquisition file state filter|Optional. Multiple values allowed. Allowed values : IN_PROGRESS, VALID, INVALID, ACQUIRED, SUPERSEDED, SUPERSEDED_AFTER_ERROR, ERROR|\n    | `productId` |Number|Product acquisition file(s) identifier filter|Optional|\n    | `chainId` |Number|Acquisition chain identifier filter|Optional|\n    | `from` |String|ISO Date time filter|Optional. Required format : yyyy-MM-dd'T'HH:mm:ss.SSSZ|\n")))}p.isMDXComponent=!0},2699:function(e,r,t){"use strict";t.d(r,"a",(function(){return u})),t.d(r,"b",(function(){return m}));var n=t(0),i=t.n(n);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,i=function(e,r){if(null==e)return{};var t,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=i.a.createContext({}),p=function(e){var r=i.a.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},u=function(e){var r=p(e.components);return i.a.createElement(c.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return i.a.createElement(i.a.Fragment,{},r)}},f=i.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,a=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(t),f=n,m=u["".concat(o,".").concat(f)]||u[f]||d[f]||a;return t?i.a.createElement(m,s(s({ref:r},c),{},{components:t})):i.a.createElement(m,s({ref:r},c))}));function m(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var a=t.length,o=new Array(a);o[0]=f;var s={};for(var l in r)hasOwnProperty.call(r,l)&&(s[l]=r[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var c=2;c<a;c++)o[c]=t[c];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,t)}f.displayName="MDXCreateElement"}}]);