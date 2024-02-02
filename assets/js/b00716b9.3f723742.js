"use strict";(self.webpackChunkregardsoss_github_io=self.webpackChunkregardsoss_github_io||[]).push([[21508],{95788:(e,r,t)=>{t.d(r,{Iu:()=>u,yg:()=>m});var a=t(11504);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var i=a.createContext({}),l=function(e){var r=a.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},u=function(e){var r=l(e.components);return a.createElement(i.Provider,{value:r},e.children)},g="mdxType",p={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},d=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),g=l(t),d=n,m=g["".concat(i,".").concat(d)]||g[d]||p[d]||o;return t?a.createElement(m,s(s({ref:r},u),{},{components:t})):a.createElement(m,s({ref:r},u))}));function m(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=t.length,s=new Array(o);s[0]=d;var c={};for(var i in r)hasOwnProperty.call(r,i)&&(c[i]=r[i]);c.originalType=e,c[g]="string"==typeof e?e:n,s[1]=c;for(var l=2;l<o;l++)s[l]=t[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},58972:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>i,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var a=t(45072),n=(t(11504),t(95788));const o={id:"crawler-reset-catalog",title:"Reset catalog",slug:"/user-guide/crawler/reset-catalog/"},s=void 0,c={unversionedId:"user-documentation/crawler/crawler-reset-catalog",id:"version-1.12.0/user-documentation/crawler/crawler-reset-catalog",title:"Reset catalog",description:"A partir de l'\xe9cran Add data et la carte Crawling, vous pouvez d\xe9clencher la r\xe9indexation du catalogue en cliquant sur l'ic\xf4ne de suppression  Reset catalog depuis la carte Crawling.",source:"@site/versioned_docs/version-1.12.0/user-documentation/5-crawler/reset-catalog.md",sourceDirName:"user-documentation/5-crawler",slug:"/user-guide/crawler/reset-catalog/",permalink:"/docs/1.12.0/user-guide/crawler/reset-catalog/",draft:!1,editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/versioned_docs/version-1.12.0/user-documentation/5-crawler/reset-catalog.md",tags:[],version:"1.12.0",frontMatter:{id:"crawler-reset-catalog",title:"Reset catalog",slug:"/user-guide/crawler/reset-catalog/"},sidebar:"manual",previous:{title:"Monitor crawling",permalink:"/docs/1.12.0/user-guide/crawler/monitor-crawling/"},next:{title:"Configure ES Shard",permalink:"/docs/1.12.0/user-guide/crawler/crawler-elasticsearch-shard"}},i={},l=[],u={toc:l},g="wrapper";function p(e){let{components:r,...t}=e;return(0,n.yg)(g,(0,a.c)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,n.yg)("p",null,"A partir de l'\xe9cran ",(0,n.yg)("strong",{parentName:"p"},(0,n.yg)("em",{parentName:"strong"},"Add data"))," et la carte ",(0,n.yg)("strong",{parentName:"p"},(0,n.yg)("em",{parentName:"strong"},"Crawling")),", vous pouvez d\xe9clencher la r\xe9indexation du catalogue en cliquant sur l'ic\xf4ne de suppression ",(0,n.yg)("img",{src:"/images/user-documentation/regards-icons/admin/delete.png",alt:"reset",height:"25",width:"25"})," ",(0,n.yg)("strong",{parentName:"p"},(0,n.yg)("em",{parentName:"strong"},"Reset catalog"))," depuis la carte ",(0,n.yg)("strong",{parentName:"p"},(0,n.yg)("em",{parentName:"strong"},"Crawling")),"."),(0,n.yg)("hr",null),(0,n.yg)("p",null,"L'action ",(0,n.yg)("strong",{parentName:"p"},(0,n.yg)("em",{parentName:"strong"},"Reset catalog"))," aura pour effet de supprimer toutes les aspirations issues de vos sources de donn\xe9es. Les indexations vont ensuite \xeatre recr\xe9\xe9es en fonction des aspirations configur\xe9es dans ",(0,n.yg)("em",{parentName:"p"},(0,n.yg)("a",{parentName:"em",href:"/docs/1.12.0/user-guide/crawler/configure-datasources/"},"Configure datasources")),"."),(0,n.yg)("div",{align:"center"},(0,n.yg)("img",{src:"/images/user-documentation/v1.4/5-crawler/crawler-reset-catalog.png",alt:"reset catalog",width:"800"})))}p.isMDXComponent=!0}}]);