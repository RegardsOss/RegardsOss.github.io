(window.webpackJsonp=window.webpackJsonp||[]).push([[1668],{1738:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return a})),t.d(n,"metadata",(function(){return c})),t.d(n,"toc",(function(){return l})),t.d(n,"default",(function(){return p}));var r=t(3),o=t(7),s=(t(0),t(2701)),a={},c={unversionedId:"development/backend/regards/admin/api/generated-snippets/ProjectUsersControllerIT/getAllUsers/http-response",id:"version-1.4.0/development/backend/regards/admin/api/generated-snippets/ProjectUsersControllerIT/getAllUsers/http-response",isDocsHomePage:!1,title:"http-response",description:"Request",source:"@site/versioned_docs/version-1.4.0/development/backend/regards/admin/api/generated-snippets/ProjectUsersControllerIT/getAllUsers/http-response.md",slug:"/development/backend/regards/admin/api/generated-snippets/ProjectUsersControllerIT/getAllUsers/http-response",permalink:"/docs/development/backend/regards/admin/api/generated-snippets/ProjectUsersControllerIT/getAllUsers/http-response",editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/versioned_docs/version-1.4.0/development/backend/regards/admin/api/generated-snippets/ProjectUsersControllerIT/getAllUsers/http-response.md",version:"1.4.0"},l=[],i={toc:l};function p(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(s.b)("wrapper",Object(r.a)({},i,t,{components:n,mdxType:"MDXLayout"}),Object(s.b)("h4",{id:"request"},"Request"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},Object(s.b)("strong",{parentName:"p"},"Code:")," 200 OK"),Object(s.b)("pre",{parentName:"li"},Object(s.b)("code",{parentName:"pre"},"  **Headers:**\n\n  `Pragma:no-cache`\n  `X-XSS-Protection:1; mode=block`\n  `Expires:0`\n  `X-Frame-Options:DENY`\n  `X-Content-Type-Options:nosniff`\n  `Access-Control-Allow-Headers:authorization, content-type, scope`\n  `Access-Control-Max-Age:3600`\n  `Content-Type:application/json;charset=UTF-8`\n  `Access-Control-Allow-Origin:*`\n  `Cache-Control:no-cache, no-store, max-age=0, must-revalidate`\n  `Access-Control-Allow-Methods:POST, PUT, GET, OPTIONS, DELETE`\n\n  **Content:**\n")))),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-json"},'    \n{\n  "metadata" : {\n    "size" : 10,\n    "totalElements" : 1,\n    "totalPages" : 1,\n    "number" : 0\n  },\n  "content" : [ {\n    "content" : {\n      "id" : 355,\n      "email" : "email@test.com",\n      "lastUpdate" : "2020-05-11T14:12:05.57Z",\n      "status" : "WAITING_ACCOUNT_ACTIVE",\n      "metadata" : [ ],\n      "role" : {\n        "id" : 1,\n        "name" : "PUBLIC",\n        "authorizedAddresses" : [ ],\n        "isDefault" : false,\n        "isNative" : true\n      },\n      "licenseAccepted" : false\n    },\n    "links" : [ {\n      "rel" : "self",\n      "href" : "http://localhost:8080/users/355"\n    }, {\n      "rel" : "update",\n      "href" : "http://localhost:8080/users/355"\n    }, {\n      "rel" : "delete",\n      "href" : "http://localhost:8080/users/355"\n    }, {\n      "rel" : "list",\n      "href" : "http://localhost:8080/users"\n    } ]\n  } ],\n  "links" : [ {\n    "rel" : "self",\n    "href" : "http://localhost:8080/users?page=0&size=10&sort=id,asc"\n  } ]\n}\n')))}p.isMDXComponent=!0},2701:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return f}));var r=t(0),o=t.n(r);function s(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){s(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i=o.a.createContext({}),p=function(e){var n=o.a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},d=function(e){var n=p(e.components);return o.a.createElement(i.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},m=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,s=e.originalType,a=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),d=p(t),m=r,f=d["".concat(a,".").concat(m)]||d[m]||u[m]||s;return t?o.a.createElement(f,c(c({ref:n},i),{},{components:t})):o.a.createElement(f,c({ref:n},i))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var s=t.length,a=new Array(s);a[0]=m;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var i=2;i<s;i++)a[i]=t[i];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);