(window.webpackJsonp=window.webpackJsonp||[]).push([[284],{2708:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=a.a.createContext({}),l=function(e){var t=a.a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=l(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},f=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),p=l(r),f=n,m=p["".concat(s,".").concat(f)]||p[f]||d[f]||i;return r?a.a.createElement(m,o(o({ref:t},c),{},{components:r})):a.a.createElement(m,o({ref:t},c))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,s=new Array(i);s[0]=f;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:n,s[1]=o;for(var c=2;c<i;c++)s[c]=r[c];return a.a.createElement.apply(null,s)}return a.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},355:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return s})),r.d(t,"metadata",(function(){return o})),r.d(t,"toc",(function(){return u})),r.d(t,"default",(function(){return l}));var n=r(3),a=r(7),i=(r(0),r(2708)),s={},o={unversionedId:"development/backend/regards/fem/api/generated-snippets/FeatureControllerIT/testCreateValidFeatureCreationRequest/request-fields",id:"version-1.4.0/development/backend/regards/fem/api/generated-snippets/FeatureControllerIT/testCreateValidFeatureCreationRequest/request-fields",isDocsHomePage:!1,title:"request-fields",description:"|Path|Type|Description|Constraints| |||||",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-1.4.0/development/backend/regards/fem/api/generated-snippets/FeatureControllerIT/testCreateValidFeatureCreationRequest/request-fields.md",slug:"/development/backend/regards/fem/api/generated-snippets/FeatureControllerIT/testCreateValidFeatureCreationRequest/request-fields",permalink:"/fr/docs/1.4.0/development/backend/regards/fem/api/generated-snippets/FeatureControllerIT/testCreateValidFeatureCreationRequest/request-fields",editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/versioned_docs/version-1.4.0/development/backend/regards/fem/api/generated-snippets/FeatureControllerIT/testCreateValidFeatureCreationRequest/request-fields.md",version:"1.4.0"},u=[],c={toc:u};function l(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},c,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"|Path|Type|Description|Constraints| |:--:|:--:|:---------:|:---------:|\n    |metadata.storages| `Array` |Target storages||\n    |metadata.storages[].pluginBusinessId| `String` |Storage identifier||\n    |features[].entityType| `String` |Entity Type||\n    |metadata.session| `String` |The session name||\n    |metadata.sessionOwner| `String` |The session owner||\n    |features[].model| `String` |Model||\n    |features[].id| `String` |Technical id||\n    |features[].geometry| `Object` |GeoJson Coordinates||\n    |features[].properties| `Object` |Properties||\n    |features[].files[].locations[].storage| `Null` |Storage||\n    |features[].files[].locations[].url| `String` |Url location||\n    |features[].files[].attributes.dataType| `String` |Data type||\n    |features[].files[].attributes.mimeType| `String` |Media type||\n    |features[].files[].attributes.filename| `String` |File name||\n    |features[].files[].attributes.filesize| `Number` |File size||\n    |features[].files[].attributes.algorithm| `String` |Algorith for checksum computation||\n    |features[].files[].attributes.checksum| `String` |Checksum||\n")))}l.isMDXComponent=!0}}]);