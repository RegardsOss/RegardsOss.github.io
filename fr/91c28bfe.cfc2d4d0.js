(window.webpackJsonp=window.webpackJsonp||[]).push([[1499],{1569:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return s})),t.d(n,"metadata",(function(){return c})),t.d(n,"toc",(function(){return l})),t.d(n,"default",(function(){return p}));var r=t(3),o=t(7),a=(t(0),t(2699)),s={},c={unversionedId:"development/backend/regards/access/api/generated-snippets/ModuleControllerIT/saveNewModule/http-response",id:"version-1.4.0/development/backend/regards/access/api/generated-snippets/ModuleControllerIT/saveNewModule/http-response",isDocsHomePage:!1,title:"http-response",description:"Request",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-1.4.0/development/backend/regards/access/api/generated-snippets/ModuleControllerIT/saveNewModule/http-response.md",slug:"/development/backend/regards/access/api/generated-snippets/ModuleControllerIT/saveNewModule/http-response",permalink:"/fr/docs/1.4.0/development/backend/regards/access/api/generated-snippets/ModuleControllerIT/saveNewModule/http-response",editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/i18n/fr/docusaurus-plugin-content-docs/version-1.4.0/development/backend/regards/access/api/generated-snippets/ModuleControllerIT/saveNewModule/http-response.md",version:"1.4.0"},l=[],i={toc:l};function p(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},i,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("h4",{id:"request"},"Request"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},Object(a.b)("strong",{parentName:"p"},"Code:")," 200 OK"),Object(a.b)("pre",{parentName:"li"},Object(a.b)("code",{parentName:"pre"},"  **Headers:**\n\n  `Pragma:no-cache`\n  `X-XSS-Protection:1; mode=block`\n  `Expires:0`\n  `X-Frame-Options:DENY`\n  `X-Content-Type-Options:nosniff`\n  `Access-Control-Allow-Headers:authorization, content-type, scope`\n  `Access-Control-Max-Age:3600`\n  `Content-Type:application/json;charset=UTF-8`\n  `Access-Control-Allow-Origin:*`\n  `Cache-Control:no-cache, no-store, max-age=0, must-revalidate`\n  `Access-Control-Allow-Methods:POST, PUT, GET, OPTIONS, DELETE`\n\n  **Content:**\n")))),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-json"},'    \n{\n  "metadata" : {\n    "size" : 20,\n    "totalElements" : 3,\n    "totalPages" : 1,\n    "number" : 0\n  },\n  "content" : [ {\n    "content" : {\n      "id" : 59,\n      "type" : "Module",\n      "description" : "Description",\n      "applicationId" : "TEST",\n      "container" : "TestContainer",\n      "conf" : "{\\"test\\":\\"test\\"}",\n      "active" : true,\n      "page" : {\n        "home" : false\n      }\n    },\n    "links" : [ {\n      "rel" : "self",\n      "href" : "http://localhost:8080/applications/TEST/modules/59"\n    }, {\n      "rel" : "delete",\n      "href" : "http://localhost:8080/applications/TEST/modules/59"\n    } ]\n  }, {\n    "content" : {\n      "id" : 60,\n      "type" : "Module",\n      "description" : "Description",\n      "applicationId" : "TEST",\n      "container" : "TestContainer",\n      "conf" : "{\\"test\\":\\"test\\"}",\n      "active" : false,\n      "page" : {\n        "home" : false\n      }\n    },\n    "links" : [ {\n      "rel" : "self",\n      "href" : "http://localhost:8080/applications/TEST/modules/60"\n    }, {\n      "rel" : "delete",\n      "href" : "http://localhost:8080/applications/TEST/modules/60"\n    } ]\n  }, {\n    "content" : {\n      "id" : 61,\n      "type" : "Module",\n      "description" : "Description",\n      "applicationId" : "TEST",\n      "container" : "TestContainer",\n      "conf" : "{\\"test\\":\\"test\\"}",\n      "active" : true,\n      "page" : {\n        "home" : true\n      }\n    },\n    "links" : [ {\n      "rel" : "self",\n      "href" : "http://localhost:8080/applications/TEST/modules/61"\n    }, {\n      "rel" : "delete",\n      "href" : "http://localhost:8080/applications/TEST/modules/61"\n    } ]\n  } ],\n  "links" : [ {\n    "rel" : "self",\n    "href" : "http://localhost:8080/applications/TEST/modules?page=0&size=20&sort=id,asc"\n  } ]\n}\n')))}p.isMDXComponent=!0},2699:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return m}));var r=t(0),o=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i=o.a.createContext({}),p=function(e){var n=o.a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},d=function(e){var n=p(e.components);return o.a.createElement(i.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},f=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),d=p(t),f=r,m=d["".concat(s,".").concat(f)]||d[f]||u[f]||a;return t?o.a.createElement(m,c(c({ref:n},i),{},{components:t})):o.a.createElement(m,c({ref:n},i))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,s=new Array(a);s[0]=f;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,s[1]=c;for(var i=2;i<a;i++)s[i]=t[i];return o.a.createElement.apply(null,s)}return o.a.createElement.apply(null,t)}f.displayName="MDXCreateElement"}}]);