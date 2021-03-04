(window.webpackJsonp=window.webpackJsonp||[]).push([[830],{2701:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=r.a.createContext({}),u=function(e){var t=r.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=u(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=u(n),d=a,m=s["".concat(o,".").concat(d)]||s[d]||b[d]||i;return n?r.a.createElement(m,c(c({ref:t},p),{},{components:n})):r.a.createElement(m,c({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var p=2;p<i;p++)o[p]=n[p];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},902:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return u}));var a=n(3),r=n(7),i=(n(0),n(2701)),o={id:"backend-authentication-api",title:"REGARDS authentication API",sidebar_label:"Authentication API",slug:"/development/backend/authentication/api"},c={unversionedId:"development/backend/regards/authentication/api/backend-authentication-api",id:"development/backend/regards/authentication/api/backend-authentication-api",isDocsHomePage:!1,title:"REGARDS authentication API",description:"Authentication URL",source:"@site/docs/development/backend/regards/authentication/api/authentication-api.md",slug:"/development/backend/authentication/api",permalink:"/docs/next/development/backend/authentication/api",editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/docs/development/backend/regards/authentication/api/authentication-api.md",version:"current",sidebar_label:"Authentication API",sidebar:"dev",previous:{title:"REGARDS authentication microservice",permalink:"/docs/next/development/backend/authentication/overview"},next:{title:"Authentication plugins",permalink:"/docs/next/development/backend/authentication/plugins"}},l=[{value:"Authentication URL",id:"authentication-url",children:[{value:"Authentication headers",id:"authentication-headers",children:[]},{value:"Query parameters",id:"query-parameters",children:[]},{value:"Response",id:"response",children:[]},{value:"Use token",id:"use-token",children:[]}]}],p={toc:l};function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"authentication-url"},"Authentication URL"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"POST")," ",Object(i.b)("inlineCode",{parentName:"li"},"/oauth/token"))),Object(i.b)("p",null,"You can access authentication endpoint with a ",Object(i.b)("inlineCode",{parentName:"p"},"Curl")," request to the authentication microservice"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"curl -X POST http://<microservice_host>:<microservice_port>/oauth/token?grant_type=password&scope=<project>&username=<login>&password=<password> \\ \n-H 'Authorization: Basic Y2xpZW50OnNlY3JldA==' \\ \n-H 'Content-Type: application/json;charset=UTF-8' \\ \n-H 'Accept: application/json'\n")),Object(i.b)("h3",{id:"authentication-headers"},"Authentication headers"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"Authorization: Basic Y2xpZW50OnNlY3JldA==")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"Content-Type: application/json;charset=UTF-8")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"Accept: application/json"))),Object(i.b)("h3",{id:"query-parameters"},"Query parameters"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"grant-type")," : The authentication grant_type. Regards only allows 'password' value."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"scope")," : The regards project to authenticate to."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"username")," : User login."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"password")," : User password.")),Object(i.b)("h3",{id:"response"},"Response"),Object(i.b)("p",null,"Here under is a response exemple. The ",Object(i.b)("inlineCode",{parentName:"p"},"access_token")," is the token you will need to access every REGARDS API endpoints."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-json"},'{\n"access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.ey...",\n"email": "user@regards.fr",\n"expires_in": 43199,\n"role": "USER_ROLE",\n"scope": "project1",\n"sub": "user@regards.fr",\n"tenant": "project1",\n"token_type": "bearer"\n}\n')),Object(i.b)("h3",{id:"use-token"},"Use token"),Object(i.b)("p",null,"To use the generated token in all REGARDS endpoint add the header here under to all requests."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"Authorization: Bearer <token>"))))}u.isMDXComponent=!0}}]);