(window.webpackJsonp=window.webpackJsonp||[]).push([[1695],{1767:function(e,n,r){"use strict";r.r(n),r.d(n,"frontMatter",(function(){return c})),r.d(n,"metadata",(function(){return a})),r.d(n,"toc",(function(){return i})),r.d(n,"default",(function(){return p}));var t=r(3),o=r(7),s=(r(0),r(2704)),c={},a={unversionedId:"development/backend/regards/admin/api/generated-snippets/RolesControllerIT/retrieveRoleResourcesAccessList/http-response",id:"version-1.4.0/development/backend/regards/admin/api/generated-snippets/RolesControllerIT/retrieveRoleResourcesAccessList/http-response",isDocsHomePage:!1,title:"http-response",description:"Request",source:"@site/versioned_docs/version-1.4.0/development/backend/regards/admin/api/generated-snippets/RolesControllerIT/retrieveRoleResourcesAccessList/http-response.md",slug:"/development/backend/regards/admin/api/generated-snippets/RolesControllerIT/retrieveRoleResourcesAccessList/http-response",permalink:"/docs/1.4.0/development/backend/regards/admin/api/generated-snippets/RolesControllerIT/retrieveRoleResourcesAccessList/http-response",editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/versioned_docs/version-1.4.0/development/backend/regards/admin/api/generated-snippets/RolesControllerIT/retrieveRoleResourcesAccessList/http-response.md",version:"1.4.0"},i=[],l={toc:i};function p(e){var n=e.components,r=Object(o.a)(e,["components"]);return Object(s.b)("wrapper",Object(t.a)({},l,r,{components:n,mdxType:"MDXLayout"}),Object(s.b)("h4",{id:"request"},"Request"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},Object(s.b)("strong",{parentName:"p"},"Code:")," 200 OK"),Object(s.b)("pre",{parentName:"li"},Object(s.b)("code",{parentName:"pre"},"  **Headers:**\n\n  `Pragma:no-cache`\n  `X-XSS-Protection:1; mode=block`\n  `Expires:0`\n  `X-Frame-Options:DENY`\n  `X-Content-Type-Options:nosniff`\n  `Access-Control-Allow-Headers:authorization, content-type, scope`\n  `Access-Control-Max-Age:3600`\n  `Content-Type:application/json;charset=UTF-8`\n  `Access-Control-Allow-Origin:*`\n  `Cache-Control:no-cache, no-store, max-age=0, must-revalidate`\n  `Access-Control-Allow-Methods:POST, PUT, GET, OPTIONS, DELETE`\n\n  **Content:**\n")))),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-json"},'    \n[ {\n  "content" : {\n    "id" : 475,\n    "description" : "",\n    "microservice" : "aMicroservice",\n    "controllerSimpleName" : "Controller",\n    "resource" : "the resource",\n    "verb" : "DELETE",\n    "defaultRole" : "ADMIN"\n  },\n  "links" : [ {\n    "rel" : "list",\n    "href" : "http://localhost:8080/roles/TEST_ROLE/resources"\n  } ]\n}, {\n  "content" : {\n    "id" : 474,\n    "description" : "",\n    "microservice" : "aMicroservice",\n    "controllerSimpleName" : "Controller",\n    "resource" : "the resource",\n    "verb" : "GET",\n    "defaultRole" : "ADMIN"\n  },\n  "links" : [ {\n    "rel" : "list",\n    "href" : "http://localhost:8080/roles/TEST_ROLE/resources"\n  } ]\n} ]\n')))}p.isMDXComponent=!0},2704:function(e,n,r){"use strict";r.d(n,"a",(function(){return u})),r.d(n,"b",(function(){return b}));var t=r(0),o=r.n(t);function s(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function c(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function a(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?c(Object(r),!0).forEach((function(n){s(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function i(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},s=Object.keys(e);for(t=0;t<s.length;t++)r=s[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(t=0;t<s.length;t++)r=s[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=o.a.createContext({}),p=function(e){var n=o.a.useContext(l),r=n;return e&&(r="function"==typeof e?e(n):a(a({},n),e)),r},u=function(e){var n=p(e.components);return o.a.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},m=o.a.forwardRef((function(e,n){var r=e.components,t=e.mdxType,s=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),u=p(r),m=t,b=u["".concat(c,".").concat(m)]||u[m]||d[m]||s;return r?o.a.createElement(b,a(a({ref:n},l),{},{components:r})):o.a.createElement(b,a({ref:n},l))}));function b(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var s=r.length,c=new Array(s);c[0]=m;var a={};for(var i in n)hasOwnProperty.call(n,i)&&(a[i]=n[i]);a.originalType=e,a.mdxType="string"==typeof e?e:t,c[1]=a;for(var l=2;l<s;l++)c[l]=r[l];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);