(window.webpackJsonp=window.webpackJsonp||[]).push([[327],{2704:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=a.a.createContext({}),u=function(e){var t=a.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},d=function(e){var t=u(e.components);return a.a.createElement(i.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},f=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,i=c(e,["components","mdxType","originalType","parentName"]),d=u(n),f=r,m=d["".concat(s,".").concat(f)]||d[f]||l[f]||o;return n?a.a.createElement(m,p(p({ref:t},i),{},{components:n})):a.a.createElement(m,p({ref:t},i))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=f;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:r,s[1]=p;for(var i=2;i<o;i++)s[i]=n[i];return a.a.createElement.apply(null,s)}return a.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},401:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return p})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return u}));var r=n(3),a=n(7),o=(n(0),n(2704)),s={},p={unversionedId:"development/backend/regards/dam/api/generated-snippets/DatasetControllerIT/testPostDataset/http-request",id:"development/backend/regards/dam/api/generated-snippets/DatasetControllerIT/testPostDataset/http-request",isDocsHomePage:!1,title:"http-request",description:"Request",source:"@site/docs/development/backend/regards/dam/api/generated-snippets/DatasetControllerIT/testPostDataset/http-request.md",slug:"/development/backend/regards/dam/api/generated-snippets/DatasetControllerIT/testPostDataset/http-request",permalink:"/fr/docs/development/backend/regards/dam/api/generated-snippets/DatasetControllerIT/testPostDataset/http-request",editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/docs/development/backend/regards/dam/api/generated-snippets/DatasetControllerIT/testPostDataset/http-request.md",version:"current"},c=[],i={toc:c};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},i,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"#### Request\n\n    ***URL**\n\n    `/datasets`\n\n    ***URL template**\n\n    `/datasets`\n\n    ***Method**\n\n    `POST`\n\n    ***Headers**\n\n    `Authorization:Bearer{token}`\n    `Accept:application/json`\n    `Content-Type:application/json;charset=UTF-8`\n")))}u.isMDXComponent=!0}}]);