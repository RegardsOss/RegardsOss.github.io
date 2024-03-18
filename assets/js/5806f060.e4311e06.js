"use strict";(self.webpackChunkregardsoss_github_io=self.webpackChunkregardsoss_github_io||[]).push([[15982],{15680:(e,t,n)=>{n.d(t,{xA:()=>c,yg:()=>y});var a=n(96540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(n),d=r,y=u["".concat(p,".").concat(d)]||u[d]||g[d]||i;return n?a.createElement(y,o(o({ref:t},c),{},{components:n})):a.createElement(y,o({ref:t},c))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},62155:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>g,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var a=n(58168),r=(n(96540),n(15680));const i={id:"backend-authentication-token-curl",title:"Retrieve token REST",sidebar_label:"Retrieve token REST",slug:"/development/backend/services/authentication/api-guides/retrieve-token-rest/"},o=void 0,l={unversionedId:"development/backend/regards/authentication/api-guides/backend-authentication-token-curl",id:"development/backend/regards/authentication/api-guides/backend-authentication-token-curl",title:"Retrieve token REST",description:"Retrieve a token",source:"@site/docs/development/backend/regards/authentication/api-guides/get-token-curl.md",sourceDirName:"development/backend/regards/authentication/api-guides",slug:"/development/backend/services/authentication/api-guides/retrieve-token-rest/",permalink:"/docs/development/backend/services/authentication/api-guides/retrieve-token-rest/",draft:!1,editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/docs/development/backend/regards/authentication/api-guides/get-token-curl.md",tags:[],version:"current",frontMatter:{id:"backend-authentication-token-curl",title:"Retrieve token REST",sidebar_label:"Retrieve token REST",slug:"/development/backend/services/authentication/api-guides/retrieve-token-rest/"},sidebar:"dev",previous:{title:"Overview",permalink:"/docs/development/backend/services/authentication/overview/"},next:{title:"Authentication plugins",permalink:"/docs/development/backend/services/authentication/contributor-guides/plugins/"}},p={},s=[{value:"Retrieve a token",id:"retrieve-a-token",level:2},{value:"Request",id:"request",level:3},{value:"Query parameters",id:"query-parameters",level:3},{value:"Response",id:"response",level:3},{value:"cURL example",id:"curl-example",level:3},{value:"Token usage",id:"token-usage",level:2}],c={toc:s},u="wrapper";function g(e){let{components:t,...n}=e;return(0,r.yg)(u,(0,a.A)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"retrieve-a-token"},"Retrieve a token"),(0,r.yg)("h3",{id:"request"},"Request"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"description"),(0,r.yg)("th",{parentName:"tr",align:null},"url"),(0,r.yg)("th",{parentName:"tr",align:null},"verb"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Authentication endpoint (OAuth 2)"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"<HOST>"),"/api/v1/rs-authentication/oauth/token"),(0,r.yg)("td",{parentName:"tr",align:null},"POST")))),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"Request headers")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "Content-Type": "application/json;charset=UTF-8",\n  "Accept": "application/json",\n  "Authorization": "Basic Y2xpZW50OnNlY3JldA=="\n}\n')),(0,r.yg)("h3",{id:"query-parameters"},"Query parameters"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Parameter"),(0,r.yg)("th",{parentName:"tr",align:null},"Type"),(0,r.yg)("th",{parentName:"tr",align:"center"},"Optional"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"grant-type")),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:"center"},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"The authentication grant_type. REGARDS only allows ",(0,r.yg)("inlineCode",{parentName:"td"},"password")," value")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"scope")),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:"center"},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"The REGARDS project (aka tenant) to authenticate to")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"username")),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:"center"},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"User login")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"password")),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:"center"},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"User password")))),(0,r.yg)("h3",{id:"response"},"Response"),(0,r.yg)("p",null,"Hereunder is a response exemple. The ",(0,r.yg)("inlineCode",{parentName:"p"},"access_token")," is the token you will need to access every REGARDS API endpoints."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.ey...",\n  "email": "user@regards.fr",\n  "expires_in": 43199,\n  "role": "USER_ROLE",\n  "scope": "project1",\n  "sub": "user@regards.fr",\n  "tenant": "project1",\n  "token_type": "bearer"\n}\n')),(0,r.yg)("h3",{id:"curl-example"},"cURL example"),(0,r.yg)("p",null,"You can access authentication endpoint with a ",(0,r.yg)("inlineCode",{parentName:"p"},"cURL")," request to the RS-AUTHENTICATION microservice"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"curl -X POST `${HOST}`/api/v1/rs-authentication/oauth/token?grant_type=password&scope=<project>&username=<login>&password=<password> \\\n-H 'Authorization: Basic Y2xpZW50OnNlY3JldA==' \\\n-H 'Content-Type: application/json;charset=UTF-8' \\\n-H 'Accept: application/json'\n")),(0,r.yg)("h2",{id:"token-usage"},"Token usage"),(0,r.yg)("p",null,"To use the generated token, adds the header ",(0,r.yg)("inlineCode",{parentName:"p"},"Authorization")," to your request."),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"Request headers")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "Authorization": "Bearer <token>",\n  [...]\n}\n')),(0,r.yg)("p",null,"For example, to import notifier rules:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"curl -v -XPUT ${HOST}/api/v1/rs-notifier/rule \\\n-H 'Authorization:Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.ey...' \\\n-H 'Content-Type: application/json' \\\n-H 'Accept: application/json'\n--data [...]\n")))}g.isMDXComponent=!0}}]);