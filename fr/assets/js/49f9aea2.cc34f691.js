(window.webpackJsonp=window.webpackJsonp||[]).push([[761],{2704:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var r=n(0),o=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),p=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=p(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},u=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=p(n),u=r,m=d["".concat(a,".").concat(u)]||d[u]||f[u]||i;return n?o.a.createElement(m,s(s({ref:t},l),{},{components:n})):o.a.createElement(m,s({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var l=2;l<i;l++)a[l]=n[l];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},835:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return p}));var r=n(3),o=n(7),i=(n(0),n(2704)),a={},s={unversionedId:"development/backend/regards/admin/api/generated-snippets/NotificationControllerIT/testListNotif/http-response",id:"development/backend/regards/admin/api/generated-snippets/NotificationControllerIT/testListNotif/http-response",isDocsHomePage:!1,title:"http-response",description:"Request",source:"@site/docs/development/backend/regards/admin/api/generated-snippets/NotificationControllerIT/testListNotif/http-response.md",slug:"/development/backend/regards/admin/api/generated-snippets/NotificationControllerIT/testListNotif/http-response",permalink:"/fr/docs/development/backend/regards/admin/api/generated-snippets/NotificationControllerIT/testListNotif/http-response",editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/docs/development/backend/regards/admin/api/generated-snippets/NotificationControllerIT/testListNotif/http-response.md",version:"current"},c=[],l={toc:c};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h4",{id:"request"},"Request"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"Code:")," 200 OK"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre"},"  **Headers:**\n\n  `Pragma:no-cache`\n  `X-XSS-Protection:1; mode=block`\n  `Expires:0`\n  `X-Frame-Options:DENY`\n  `X-Content-Type-Options:nosniff`\n  `Access-Control-Allow-Headers:authorization, content-type, scope`\n  `Access-Control-Max-Age:3600`\n  `Content-Type:application/json;charset=UTF-8`\n  `Access-Control-Allow-Origin:*`\n  `Cache-Control:no-cache, no-store, max-age=0, must-revalidate`\n  `Access-Control-Allow-Methods:POST, PUT, GET, OPTIONS, DELETE`\n\n  **Content:**\n")))),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-json"},'    \n{\n  "metadata" : {\n    "size" : 2,\n    "totalElements" : 4,\n    "totalPages" : 2,\n    "number" : 0\n  },\n  "content" : [ {\n    "content" : {\n      "date" : "2020-05-11T14:54:45.267Z",\n      "id" : 5,\n      "rolerecipients" : "[PROJECT_ADMIN]",\n      "projectuserreciptients" : "[]",\n      "sender" : "microservice",\n      "status" : "UNREAD",\n      "level" : "INFO",\n      "title" : "test",\n      "mimetype" : "text/plain"\n    },\n    "links" : [ {\n      "rel" : "self",\n      "href" : "http://localhost:8080/notifications/5"\n    }, {\n      "rel" : "delete",\n      "href" : "http://localhost:8080/notifications/5"\n    }, {\n      "rel" : "read",\n      "href" : "http://localhost:8080/notifications/5/read"\n    } ]\n  }, {\n    "content" : {\n      "date" : "2020-05-11T14:54:45.058Z",\n      "id" : 4,\n      "rolerecipients" : "[PROJECT_ADMIN]",\n      "projectuserreciptients" : "[]",\n      "sender" : "microservice",\n      "status" : "UNREAD",\n      "level" : "INFO",\n      "title" : "test",\n      "mimetype" : "text/plain"\n    },\n    "links" : [ {\n      "rel" : "self",\n      "href" : "http://localhost:8080/notifications/4"\n    }, {\n      "rel" : "delete",\n      "href" : "http://localhost:8080/notifications/4"\n    }, {\n      "rel" : "read",\n      "href" : "http://localhost:8080/notifications/4/read"\n    } ]\n  } ],\n  "links" : [ {\n    "rel" : "first",\n    "href" : "http://localhost:8080/notifications?page=0&size=2&sort=id,asc"\n  }, {\n    "rel" : "self",\n    "href" : "http://localhost:8080/notifications?page=0&size=2&sort=id,asc"\n  }, {\n    "rel" : "next",\n    "href" : "http://localhost:8080/notifications?page=1&size=2&sort=id,asc"\n  }, {\n    "rel" : "last",\n    "href" : "http://localhost:8080/notifications?page=1&size=2&sort=id,asc"\n  } ]\n}\n')))}p.isMDXComponent=!0}}]);