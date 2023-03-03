"use strict";(self.webpackChunkregardsoss_github_io=self.webpackChunkregardsoss_github_io||[]).push([[41854],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},g="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),g=c(r),d=a,m=g["".concat(l,".").concat(d)]||g[d]||p[d]||i;return r?n.createElement(m,o(o({ref:t},u),{},{components:r})):n.createElement(m,o({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[g]="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},11199:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var n=r(87462),a=(r(67294),r(3905));const i={id:"backend-storage-security-delegation-plugins",title:"Security delegation plugins",sidebar_label:"Security delegation",slug:"/development/backend/services/storage/plugins/security-delegation/"},o=void 0,s={unversionedId:"development/backend/regards/storage/plugins/backend-storage-security-delegation-plugins",id:"development/backend/regards/storage/plugins/backend-storage-security-delegation-plugins",title:"Security delegation plugins",description:"Overview",source:"@site/docs/development/backend/regards/storage/plugins/security-delegation-plugins.md",sourceDirName:"development/backend/regards/storage/plugins",slug:"/development/backend/services/storage/plugins/security-delegation/",permalink:"/docs/development/backend/services/storage/plugins/security-delegation/",draft:!1,editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/docs/development/backend/regards/storage/plugins/security-delegation-plugins.md",tags:[],version:"current",frontMatter:{id:"backend-storage-security-delegation-plugins",title:"Security delegation plugins",sidebar_label:"Security delegation",slug:"/development/backend/services/storage/plugins/security-delegation/"},sidebar:"dev",previous:{title:"Data storage",permalink:"/docs/development/backend/services/storage/plugins/data-storage/"},next:{title:"Bus message events",permalink:"/docs/development/backend/services/storage/events/"}},l={},c=[{value:"Overview",id:"overview",level:2},{value:"Interface",id:"interface",level:2},{value:"Implementation",id:"implementation",level:2}],u={toc:c},g="wrapper";function p(e){let{components:t,...r}=e;return(0,a.kt)(g,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"This extension point allows to define if a user has access to a given AIP and its files. By default the security is delegated to the catalog microservice with the CatalogSecurityDelegation plugin")),(0,a.kt)("p",null,"REGARDS provides many implementation of this extension point :"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/RegardsOss/regards-plugins/blob/master/storage-plugins/catalog-security-delegation/src/main/java/fr/cnes/regards/modules/storage/plugins/security/CatalogSecurityDelegation.java"},"CatalogSecurityDelegation")," : Delegate access rights to catalog microservice"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/RegardsOss/regards-storage/blob/master/storage/storage-plugin/src/main/java/fr/cnes/regards/modules/storage/plugin/security/NoCatalogSecurityDelegationPlugin.java"},"NoCatalogSecurityDelegationPlugin")," : Allow access to all stored AIPs without any security check to all users.")),(0,a.kt)("h2",{id:"interface"},"Interface"),(0,a.kt)("p",null,"   ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/RegardsOss/regards-storage/blob/master/storage/storage-domain/src/main/java/fr/cnes/regards/modules/storage/domain/plugin/ISecurityDelegation.java"},"ISecurityDelegation")),(0,a.kt)("h2",{id:"implementation"},"Implementation"),(0,a.kt)("p",null,"To learn more about how to create your own plugin see ",(0,a.kt)("a",{parentName:"p",href:"../../../../framework/modules/plugins/"},"Plugins")),(0,a.kt)("p",null,"Here under is an exemple of how to implements this extension point to create your own business logic."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'@Plugin(id = "exemple", version = "1.0.0", description = "exemple plugin",\n        author = "REGARDS Team", contact = "regards@c-s.fr", licence = "LGPLv3.0", owner = "CSSI",\n        url = "https://github.com/RegardsOss")\npublic class Plugin implements ISecurityDelegation {\n\n    /**\n     * Return URNs of which access is granted from given ones\n     */\n    @Override\n    public Set<UniformResourceName> hasAccess(Collection<UniformResourceName> urns){\n\n    }\n\n    /**\n     * Allow to know if the current user has access to a given AIP, through its ipId\n     * @param ipId identifier of aip that we are wondeering if we have access to.\n     * @return weither we have access to the aip or not\n     */\n    @Override\n    public boolean hasAccess(String ipId) {\n\n    }\n\n    /**\n     * @return weither the current user has access to features returning collections of AIP\n     */\n    @Override\n    public boolean hasAccessToListFeature() {\n\n    }\n   \n}\n')))}p.isMDXComponent=!0}}]);