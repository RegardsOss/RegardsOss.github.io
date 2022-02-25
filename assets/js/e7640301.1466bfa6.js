"use strict";(self.webpackChunkregardsoss_github_io=self.webpackChunkregardsoss_github_io||[]).push([[26212],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=l(n),m=a,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||o;return n?r.createElement(f,c(c({ref:t},p),{},{components:n})):r.createElement(f,c({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var l=2;l<o;l++)c[l]=n[l];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},28761:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return p},default:function(){return u}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),c=["components"],i={id:"backend-architecture-concepts",title:"REGARDS architecture concepts",sidebar_label:"Concepts",slug:"/development/backend/architecture/concepts/"},s=void 0,l={unversionedId:"development/backend/architecture/backend-architecture-concepts",id:"version-1.7.1/development/backend/architecture/backend-architecture-concepts",title:"REGARDS architecture concepts",description:"OAIS recommandation",source:"@site/versioned_docs/version-1.7.1/development/backend/architecture/concepts.md",sourceDirName:"development/backend/architecture",slug:"/development/backend/architecture/concepts/",permalink:"/docs/1.7.1/development/backend/architecture/concepts/",editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/versioned_docs/version-1.7.1/development/backend/architecture/concepts.md",tags:[],version:"1.7.1",frontMatter:{id:"backend-architecture-concepts",title:"REGARDS architecture concepts",sidebar_label:"Concepts",slug:"/development/backend/architecture/concepts/"},sidebar:"dev",previous:{title:"Development manual",permalink:"/docs/1.7.1/development/"},next:{title:"Overview",permalink:"/docs/1.7.1/development/backend/architecture/overview/"}},p=[{value:"OAIS recommandation",id:"oais-recommandation",children:[],level:2},{value:"OAIS REGARDS implementation",id:"oais-regards-implementation",children:[],level:2}],d={toc:p};function u(e){var t=e.components,i=(0,a.Z)(e,c);return(0,o.kt)("wrapper",(0,r.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"oais-recommandation"},"OAIS recommandation"),(0,o.kt)("p",null,"The System design leans on the OAIS (Open Archival Information System) recommendation of the ",(0,o.kt)("a",{parentName:"p",href:"https://public.ccsds.org"},"CCSDS"),"."),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(99933).Z,width:"886",height:"378"})),(0,o.kt)("p",null,"Thus the system allows high-performance ingestion of data package called ",(0,o.kt)("strong",{parentName:"p"},"SIP")," (Submission Information Package), either in standard or non-standard formats."),(0,o.kt)("p",null,"Afterwards, these SIP are processed into ",(0,o.kt)("strong",{parentName:"p"},"AIP")," (Archival Information Package) and stored in archival storage. Both metadata and data files are stored."),(0,o.kt)("p",null,"All or part of the AIP metadata are harvested to offer smart search and access to the data."),(0,o.kt)("p",null,"Finally, requested data are retrieve under ",(0,o.kt)("strong",{parentName:"p"},"DIP")," (Dissemination Information Package)."),(0,o.kt)("h2",{id:"oais-regards-implementation"},"OAIS REGARDS implementation"),(0,o.kt)("p",null,"The schema below shows the correspondence between the OAIS recommandation and the REGARDS implementation. Note we're just displaying here a subset of all REGARDS features, as REGARDS can do a lot more."),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(78079).Z,width:"1054",height:"402"})),(0,o.kt)("p",null,"REGARDS processes SIP, transforms them into AIP, stores them, extracts metadata from AIP (i.e. harvesting) to populate a catalog to provide fast access to metadata."),(0,o.kt)("p",null,"Then users can discover through our rich web application, order and download data in an efficient and simple way."))}u.isMDXComponent=!0},99933:function(e,t,n){t.Z=n.p+"assets/images/oais-a00464848023171ceff0bcacf7278f79.png"},78079:function(e,t,n){t.Z=n.p+"assets/images/overview_regards_oais-0f7d9ad75bec249be9d403a71f49b2b8.png"}}]);