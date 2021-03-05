(window.webpackJsonp=window.webpackJsonp||[]).push([[2249],{2319:function(e,n,r){"use strict";r.r(n),r.d(n,"frontMatter",(function(){return s})),r.d(n,"metadata",(function(){return c})),r.d(n,"toc",(function(){return p})),r.d(n,"default",(function(){return l}));var t=r(3),o=r(7),a=(r(0),r(2699)),s={},c={unversionedId:"development/backend/regards/admin/api/generated-snippets/RoleResourceControllerIT/addAndRestoreResource/http-response",id:"development/backend/regards/admin/api/generated-snippets/RoleResourceControllerIT/addAndRestoreResource/http-response",isDocsHomePage:!1,title:"http-response",description:"Request",source:"@site/docs/development/backend/regards/admin/api/generated-snippets/RoleResourceControllerIT/addAndRestoreResource/http-response.md",slug:"/development/backend/regards/admin/api/generated-snippets/RoleResourceControllerIT/addAndRestoreResource/http-response",permalink:"/docs/development/backend/regards/admin/api/generated-snippets/RoleResourceControllerIT/addAndRestoreResource/http-response",editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/docs/development/backend/regards/admin/api/generated-snippets/RoleResourceControllerIT/addAndRestoreResource/http-response.md",version:"current"},p=[],i={toc:p};function l(e){var n=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(t.a)({},i,r,{components:n,mdxType:"MDXLayout"}),Object(a.b)("h4",{id:"request"},"Request"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},Object(a.b)("strong",{parentName:"p"},"Code:")," 201 Created"),Object(a.b)("pre",{parentName:"li"},Object(a.b)("code",{parentName:"pre"},"  **Headers:**\n\n  `Pragma:no-cache`\n  `X-XSS-Protection:1; mode=block`\n  `Expires:0`\n  `X-Frame-Options:DENY`\n  `X-Content-Type-Options:nosniff`\n  `Access-Control-Allow-Headers:authorization, content-type, scope`\n  `Access-Control-Max-Age:3600`\n  `Content-Type:application/json;charset=UTF-8`\n  `Access-Control-Allow-Origin:*`\n  `Cache-Control:no-cache, no-store, max-age=0, must-revalidate`\n  `Access-Control-Allow-Methods:POST, PUT, GET, OPTIONS, DELETE`\n\n  **Content:**\n")))),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-json"},'    \n{\n  "content" : {\n    "id" : 15,\n    "description" : "Retrieve the list of project users (crawls through parents\' hierarchy) of the role with role_name",\n    "microservice" : "Test application",\n    "controllerSimpleName" : "ProjectUsersController",\n    "resource" : "/users/roles",\n    "verb" : "GET",\n    "defaultRole" : "ADMIN"\n  },\n  "links" : [ {\n    "rel" : "create",\n    "href" : "http://localhost:8080/roles/NEW_ROLE/resources"\n  } ]\n}\n')))}l.isMDXComponent=!0},2699:function(e,n,r){"use strict";r.d(n,"a",(function(){return d})),r.d(n,"b",(function(){return b}));var t=r(0),o=r.n(t);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function s(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function c(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?s(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function p(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=o.a.createContext({}),l=function(e){var n=o.a.useContext(i),r=n;return e&&(r="function"==typeof e?e(n):c(c({},n),e)),r},d=function(e){var n=l(e.components);return o.a.createElement(i.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},m=o.a.forwardRef((function(e,n){var r=e.components,t=e.mdxType,a=e.originalType,s=e.parentName,i=p(e,["components","mdxType","originalType","parentName"]),d=l(r),m=t,b=d["".concat(s,".").concat(m)]||d[m]||u[m]||a;return r?o.a.createElement(b,c(c({ref:n},i),{},{components:r})):o.a.createElement(b,c({ref:n},i))}));function b(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var a=r.length,s=new Array(a);s[0]=m;var c={};for(var p in n)hasOwnProperty.call(n,p)&&(c[p]=n[p]);c.originalType=e,c.mdxType="string"==typeof e?e:t,s[1]=c;for(var i=2;i<a;i++)s[i]=r[i];return o.a.createElement.apply(null,s)}return o.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);