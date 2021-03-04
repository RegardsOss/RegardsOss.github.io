(window.webpackJsonp=window.webpackJsonp||[]).push([[1812],{1882:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return a})),t.d(n,"metadata",(function(){return s})),t.d(n,"toc",(function(){return c})),t.d(n,"default",(function(){return u}));var r=t(3),o=t(7),i=(t(0),t(2701)),a={},s={unversionedId:"development/backend/regards/dataprovider/api/generated-snippets/AcquisitionProcessingChainControllerIT/exportConfiguration/request-fields",id:"development/backend/regards/dataprovider/api/generated-snippets/AcquisitionProcessingChainControllerIT/exportConfiguration/request-fields",isDocsHomePage:!1,title:"request-fields",description:"|Path|Type|Description|Constraints| |||||",source:"@site/docs/development/backend/regards/dataprovider/api/generated-snippets/AcquisitionProcessingChainControllerIT/exportConfiguration/request-fields.md",slug:"/development/backend/regards/dataprovider/api/generated-snippets/AcquisitionProcessingChainControllerIT/exportConfiguration/request-fields",permalink:"/docs/next/development/backend/regards/dataprovider/api/generated-snippets/AcquisitionProcessingChainControllerIT/exportConfiguration/request-fields",editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/docs/development/backend/regards/dataprovider/api/generated-snippets/AcquisitionProcessingChainControllerIT/exportConfiguration/request-fields.md",version:"current"},c=[],l={toc:c};function u(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"|Path|Type|Description|Constraints| |:--:|:--:|:---------:|:---------:|\n    |label| `String` |Label|Must not be blank|\n    |active| `Boolean` |Activation status|Must not be null|\n    |mode| `String` |Mode|Must not be null. Allowed values : MANUAL, AUTO|\n    |session| `String` |Ingest session name for SIP submission||\n    |categories| `interface java.util.List` |Ingest categories|Must not be null|\n    |ingestChain| `String` |Ingest chain name for SIP submission|Must not be blank|\n    |locked| `Boolean` |Internal chain processing lock|NA|\n    |periodicity| `Long` |Automatic chain activation periodicity in second|Must match the regular expression `0 .*`|\n    |fileInfos[]| `Array` |Arrays of file information / TODO||\n    |fileInfos[].mandatory| `Boolean` |True if the product must contain this file|Must not be null|\n    |fileInfos[].scanPlugin| `Object` |Scan plugin configuration / TODO|Must not be null|\n    |fileInfos[].lastModificationDate| `String` |Most recent last modification ISO 8601 date of all scanned files||\n    |fileInfos[].mimeType| `String` |File MIME type|Must not be null|\n    |fileInfos[].dataType| `String` |REGARDS data type|Must not be null. Allowed values : RAWDATA, QUICKLOOK_SD, QUICKLOOK_MD, QUICKLOOK_HD, DOCUMENT, THUMBNAIL, OTHER, AIP, DESCRIPTION|\n    |fileInfos[].comment| `String` |REGARDS data type||\n    |validationPluginConf| `Object` |Validation plugin configuration / TODO|Must not be null|\n    |productPluginConf| `Object` |Product plugin configuration / TODO|Must not be null|\n    |generateSipPluginConf| `Object` |Generate SIP plugin configuration / TODO|Must not be null|\n    |postProcessSipPluginConf| `Object` |Optional SIP post processing plugin configuration / TODO||\n")))}u.isMDXComponent=!0},2701:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return g}));var r=t(0),o=t.n(r);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=o.a.createContext({}),u=function(e){var n=o.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},p=function(e){var n=u(e.components);return o.a.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},f=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=u(t),f=r,g=p["".concat(a,".").concat(f)]||p[f]||d[f]||i;return t?o.a.createElement(g,s(s({ref:n},l),{},{components:t})):o.a.createElement(g,s({ref:n},l))}));function g(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,a=new Array(i);a[0]=f;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var l=2;l<i;l++)a[l]=t[l];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,t)}f.displayName="MDXCreateElement"}}]);