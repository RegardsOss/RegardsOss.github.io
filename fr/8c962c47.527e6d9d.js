(window.webpackJsonp=window.webpackJsonp||[]).push([[1447],{1517:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return a})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return i})),r.d(t,"default",(function(){return u}));var n=r(3),s=r(7),o=(r(0),r(2701)),a={},c={unversionedId:"development/backend/regards/dam/api/generated-snippets/AccessRightControllerIT/testIsUserAutorisedToAccessDataset/http-request",id:"version-1.4.0/development/backend/regards/dam/api/generated-snippets/AccessRightControllerIT/testIsUserAutorisedToAccessDataset/http-request",isDocsHomePage:!1,title:"http-request",description:"Request",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-1.4.0/development/backend/regards/dam/api/generated-snippets/AccessRightControllerIT/testIsUserAutorisedToAccessDataset/http-request.md",slug:"/development/backend/regards/dam/api/generated-snippets/AccessRightControllerIT/testIsUserAutorisedToAccessDataset/http-request",permalink:"/fr/docs/1.4.0/development/backend/regards/dam/api/generated-snippets/AccessRightControllerIT/testIsUserAutorisedToAccessDataset/http-request",editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/i18n/fr/docusaurus-plugin-content-docs/version-1.4.0/development/backend/regards/dam/api/generated-snippets/AccessRightControllerIT/testIsUserAutorisedToAccessDataset/http-request.md",version:"1.4.0"},i=[],p={toc:i};function u(e){var t=e.components,r=Object(s.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"#### Request\n\n    ***URL**\n\n    `/accessrights/isAccessible?dataset=URN%3AAIP%3ADATASET%3APROJECT%3Af94d5890-b895-4e9b-892f-b2576c5b11ec%3AV1&user=not.existingtest%40email.com`\n\n    ***URL template**\n\n    `/accessrights/isAccessible`\n\n    ***Method**\n\n    `GET`\n\n    ***Headers**\n\n    `Authorization:Bearer{token}`\n    `Accept:application/json`\n    `Content-Type:application/json;charset=UTF-8`\n")))}u.isMDXComponent=!0},2701:function(e,t,r){"use strict";r.d(t,"a",(function(){return d})),r.d(t,"b",(function(){return m}));var n=r(0),s=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,s=function(e,t){if(null==e)return{};var r,n,s={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(s[r]=e[r]);return s}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}var p=s.a.createContext({}),u=function(e){var t=s.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},d=function(e){var t=u(e.components);return s.a.createElement(p.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return s.a.createElement(s.a.Fragment,{},t)}},f=s.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,a=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=u(r),f=n,m=d["".concat(a,".").concat(f)]||d[f]||l[f]||o;return r?s.a.createElement(m,c(c({ref:t},p),{},{components:r})):s.a.createElement(m,c({ref:t},p))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,a=new Array(o);a[0]=f;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:n,a[1]=c;for(var p=2;p<o;p++)a[p]=r[p];return s.a.createElement.apply(null,a)}return s.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"}}]);