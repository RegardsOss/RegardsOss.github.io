(window.webpackJsonp=window.webpackJsonp||[]).push([[253],{2701:function(e,t,r){"use strict";r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return m}));var n=r(0),s=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,s=function(e,t){if(null==e)return{};var r,n,s={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(s[r]=e[r]);return s}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}var i=s.a.createContext({}),u=function(e){var t=s.a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},l=function(e){var t=u(e.components);return s.a.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return s.a.createElement(s.a.Fragment,{},t)}},f=s.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,a=e.parentName,i=p(e,["components","mdxType","originalType","parentName"]),l=u(r),f=n,m=l["".concat(a,".").concat(f)]||l[f]||d[f]||o;return r?s.a.createElement(m,c(c({ref:t},i),{},{components:r})):s.a.createElement(m,c({ref:t},i))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,a=new Array(o);a[0]=f;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:n,a[1]=c;for(var i=2;i<o;i++)a[i]=r[i];return s.a.createElement.apply(null,a)}return s.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},318:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return a})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return p})),r.d(t,"default",(function(){return u}));var n=r(3),s=r(7),o=(r(0),r(2701)),a={},c={unversionedId:"development/backend/regards/dam/api/generated-snippets/UserControllerIT/testRetrieveAccessGroupsListOfUser/http-request",id:"development/backend/regards/dam/api/generated-snippets/UserControllerIT/testRetrieveAccessGroupsListOfUser/http-request",isDocsHomePage:!1,title:"http-request",description:"Request",source:"@site/docs/development/backend/regards/dam/api/generated-snippets/UserControllerIT/testRetrieveAccessGroupsListOfUser/http-request.md",slug:"/development/backend/regards/dam/api/generated-snippets/UserControllerIT/testRetrieveAccessGroupsListOfUser/http-request",permalink:"/fr/docs/development/backend/regards/dam/api/generated-snippets/UserControllerIT/testRetrieveAccessGroupsListOfUser/http-request",editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/docs/development/backend/regards/dam/api/generated-snippets/UserControllerIT/testRetrieveAccessGroupsListOfUser/http-request.md",version:"current"},p=[],i={toc:p};function u(e){var t=e.components,r=Object(s.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},i,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"#### Request\n\n    ***URL**\n\n    `/users/user1@user1.user1/accessgroups`\n\n    ***URL template**\n\n    `/users/{email}/accessgroups`\n\n    ***Method**\n\n    `GET`\n\n    ***Headers**\n\n    `Authorization:Bearer{token}`\n    `Accept:application/json`\n    `Content-Type:application/json;charset=UTF-8`\n")))}u.isMDXComponent=!0}}]);