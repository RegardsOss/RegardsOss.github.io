"use strict";(self.webpackChunkregardsoss_github_io=self.webpackChunkregardsoss_github_io||[]).push([[83011],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var a=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,i=function(e,t){if(null==e)return{};var r,a,i={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=a.createContext({}),d=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var r=e.components,i=e.mdxType,n=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=d(r),f=i,m=p["".concat(s,".").concat(f)]||p[f]||u[f]||n;return r?a.createElement(m,o(o({ref:t},c),{},{components:r})):a.createElement(m,o({ref:t},c))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=r.length,o=new Array(n);o[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:i,o[1]=l;for(var d=2;d<n;d++)o[d]=r[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},7427:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>n,metadata:()=>l,toc:()=>d});var a=r(87462),i=(r(67294),r(3905));const n={id:"fill-basket-from-file",title:"Fill basket from file",sidebar_label:"Fill basket from file",slug:"/development/backend/services/order/guides/fill-basket-from-file"},o=void 0,l={unversionedId:"development/backend/regards/order/api-guides/fill-basket-from-file",id:"development/backend/regards/order/api-guides/fill-basket-from-file",title:"Fill basket from file",description:"_This page assumes you know how to authenticate your REST API",source:"@site/docs/development/backend/regards/order/api-guides/fill-basket-from-file.md",sourceDirName:"development/backend/regards/order/api-guides",slug:"/development/backend/services/order/guides/fill-basket-from-file",permalink:"/docs/next/development/backend/services/order/guides/fill-basket-from-file",draft:!1,editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/docs/development/backend/regards/order/api-guides/fill-basket-from-file.md",tags:[],version:"current",frontMatter:{id:"fill-basket-from-file",title:"Fill basket from file",sidebar_label:"Fill basket from file",slug:"/development/backend/services/order/guides/fill-basket-from-file"},sidebar:"dev",previous:{title:"Download ordered files inside archive",permalink:"/docs/next/development/backend/services/order/guides/download-ordered-files"},next:{title:"REST API",permalink:"/docs/next/development/backend/services/order/api-swagger"}},s={},d=[{value:"Concept",id:"concept",level:2},{value:"File format",id:"file-format",level:2},{value:"Catalog search",id:"catalog-search",level:2},{value:"Add product returned to Basket",id:"add-product-returned-to-basket",level:2}],c={toc:d},p="wrapper";function u(e){let{components:t,...r}=e;return(0,i.kt)(p,(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"This page assumes you know how ",(0,i.kt)("a",{parentName:"em",href:"/docs/next/development/backend/services/authentication/api-guides/retrieve-token-rest/"},"to authenticate")," your REST API\nrequests.")),(0,i.kt)("p",null,"This guide describes how add some products inside a basket, from a file submitted by REST API."),(0,i.kt)("admonition",{title:"Authentication required",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"This feature is accessible at user-registered level, or any role with more privileges.")),(0,i.kt)("p",null,"You can see ",(0,i.kt)("a",{parentName:"p",href:"/docs/next/development/backend/services/order/api-swagger#tag/basket-controller/operation/addSelectionFromFile"},"API documentation here")),(0,i.kt)("h2",{id:"concept"},"Concept"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"A file containing ",(0,i.kt)("strong",{parentName:"li"},"one provider id per line")," is transmitted to service order by REST API"),(0,i.kt)("li",{parentName:"ol"},"Order service extract products identifiers from input file"),(0,i.kt)("li",{parentName:"ol"},"Order service search using catalog service the products matching provider ids"),(0,i.kt)("li",{parentName:"ol"},"Order service add resulting products to the current basket of the current user"),(0,i.kt)("li",{parentName:"ol"},"The endpoint returns updated or created basket of the current user")),(0,i.kt)("h2",{id:"file-format"},"File format"),(0,i.kt)("p",null,"The file is quite simple: one product identifier (provider id) per line.  "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text",metastring:'title="Input file example"',title:'"Input',file:!0,'example"':!0},"ProviderId00 \nSMM_CRR_AXFCNE20230903_065543_20230903_150000_20230903_150000.grb \nProviderId02 \nSGM_CRR_AXFCNE20230813_065544_20230813_170000_20230813_170000.grb \nProviderId05 \n")),(0,i.kt)("admonition",{title:"Note that",type:"info"},(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},"The product version must not be indicated in this file. The ",(0,i.kt)("strong",{parentName:"li"},"last")," version of the product is always used."),(0,i.kt)("li",{parentName:"ul"},"Spaces after or before the identifier are automatically removed by order service."))),(0,i.kt)("admonition",{title:"Number max of product identifier",type:"note"},(0,i.kt)("p",{parentName:"admonition"},"  A ",(0,i.kt)("strong",{parentName:"p"},"maximum of provider id per file is configurable")," at service level : ",(0,i.kt)("em",{parentName:"p"},"property regards.order.basket.upload.\nfile.max")," lines, with default value at 1000 ids.")),(0,i.kt)("h2",{id:"catalog-search"},"Catalog search"),(0,i.kt)("p",null,"Order service sends a search request to Catalog service, to find all products that match exactly one of the\nidentifier extracted from ",(0,i.kt)("a",{parentName:"p",href:"#file-format"},"input file"),". Several requests can be done because list of ids is\npartitioned to many list of 100 elements (not configurable), to avoid huge requests to elastic search."),(0,i.kt)("admonition",{title:"Reminder ",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Order service retrieves from catalog the ",(0,i.kt)("strong",{parentName:"p"},"last version")," of the requested products.")),(0,i.kt)("h2",{id:"add-product-returned-to-basket"},"Add product returned to Basket"),(0,i.kt)("p",null,"The result of the ",(0,i.kt)("a",{parentName:"p",href:"#catalog-search"},"catalog search")," is added to the basket of the current user. If basket does not\nexist, it will be created."),(0,i.kt)("admonition",{title:"Note that",type:"info"},(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},"Product ids not found, not accessible, or not visible are ignored and are not added to basket."),(0,i.kt)("li",{parentName:"ul"},"If no product are returned, the endpoint return http code 204 (No Content), and nothing is added to basket."),(0,i.kt)("li",{parentName:"ul"},"Potential errors are specified in ",(0,i.kt)("a",{parentName:"li",href:"/docs/next/development/backend/services/order/api-swagger#tag/basket-controller/operation/addSelectionFromFile"},"API documentation")))))}u.isMDXComponent=!0}}]);