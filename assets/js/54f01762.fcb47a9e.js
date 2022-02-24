"use strict";(self.webpackChunkregardsoss_github_io=self.webpackChunkregardsoss_github_io||[]).push([[10238],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(n),h=r,m=d["".concat(c,".").concat(h)]||d[h]||p[h]||i;return n?a.createElement(m,o(o({ref:t},u),{},{components:n})):a.createElement(m,o({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},69730:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return u},default:function(){return d}});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),o=["components"],l={id:"backend-authentication-api",title:"REGARDS authentication API",sidebar_label:"Authentication API",slug:"/development/backend/services/authentication/api/"},c=void 0,s={unversionedId:"development/backend/regards/authentication/api/backend-authentication-api",id:"version-1.6.0/development/backend/regards/authentication/api/backend-authentication-api",title:"REGARDS authentication API",description:"Authentication URL",source:"@site/versioned_docs/version-1.6.0/development/backend/regards/authentication/api/authentication-api.md",sourceDirName:"development/backend/regards/authentication/api",slug:"/development/backend/services/authentication/api/",permalink:"/docs/1.6.0/development/backend/services/authentication/api/",editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/versioned_docs/version-1.6.0/development/backend/regards/authentication/api/authentication-api.md",tags:[],version:"1.6.0",frontMatter:{id:"backend-authentication-api",title:"REGARDS authentication API",sidebar_label:"Authentication API",slug:"/development/backend/services/authentication/api/"},sidebar:"version-1.6.0/dev",previous:{title:"Overview",permalink:"/docs/1.6.0/development/backend/services/authentication/overview/"},next:{title:"Authentication plugins",permalink:"/docs/1.6.0/development/backend/services/authentication/plugins/"}},u=[{value:"Authentication URL",id:"authentication-url",children:[{value:"Authentication headers",id:"authentication-headers",children:[],level:3},{value:"Query parameters",id:"query-parameters",children:[],level:3},{value:"Response",id:"response",children:[],level:3},{value:"Use token",id:"use-token",children:[],level:3}],level:2}],p={toc:u};function d(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"authentication-url"},"Authentication URL"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"POST")," ",(0,i.kt)("inlineCode",{parentName:"li"},"/oauth/token"))),(0,i.kt)("p",null,"You can access authentication endpoint with a ",(0,i.kt)("inlineCode",{parentName:"p"},"Curl")," request to the authentication microservice"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"curl -X POST http://<microservice_host>:<microservice_port>/oauth/token?grant_type=password&scope=<project>&username=<login>&password=<password> \\ \n-H 'Authorization: Basic Y2xpZW50OnNlY3JldA==' \\ \n-H 'Content-Type: application/json;charset=UTF-8' \\ \n-H 'Accept: application/json'\n")),(0,i.kt)("h3",{id:"authentication-headers"},"Authentication headers"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Authorization: Basic Y2xpZW50OnNlY3JldA==")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Content-Type: application/json;charset=UTF-8")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Accept: application/json"))),(0,i.kt)("h3",{id:"query-parameters"},"Query parameters"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"grant-type")," : The authentication grant_type. Regards only allows 'password' value."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"scope")," : The regards project to authenticate to."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"username")," : User login."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"password")," : User password.")),(0,i.kt)("h3",{id:"response"},"Response"),(0,i.kt)("p",null,"Here under is a response exemple. The ",(0,i.kt)("inlineCode",{parentName:"p"},"access_token")," is the token you will need to access every REGARDS API endpoints."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n"access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.ey...",\n"email": "user@regards.fr",\n"expires_in": 43199,\n"role": "USER_ROLE",\n"scope": "project1",\n"sub": "user@regards.fr",\n"tenant": "project1",\n"token_type": "bearer"\n}\n')),(0,i.kt)("h3",{id:"use-token"},"Use token"),(0,i.kt)("p",null,"To use the generated token in all REGARDS endpoint add the header here under to all requests."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Authorization: Bearer <token>"))))}d.isMDXComponent=!0}}]);