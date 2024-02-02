"use strict";(self.webpackChunkregardsoss_github_io=self.webpackChunkregardsoss_github_io||[]).push([[90824],{95788:(e,t,n)=>{n.d(t,{Iu:()=>g,yg:()=>m});var r=n(11504);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},g=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,g=s(e,["components","mdxType","originalType","parentName"]),u=c(n),d=a,m=u["".concat(l,".").concat(d)]||u[d]||p[d]||i;return n?r.createElement(m,o(o({ref:t},g),{},{components:n})):r.createElement(m,o({ref:t},g))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},61664:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=n(45072),a=(n(11504),n(95788));const i={id:"backend-storage-security-delegation-plugins",title:"Security delegation plugins",sidebar_label:"Security delegation",slug:"/development/backend/services/storage/plugins/security-delegation/"},o=void 0,s={unversionedId:"development/backend/regards/storage/plugins/backend-storage-security-delegation-plugins",id:"version-1.12.0/development/backend/regards/storage/plugins/backend-storage-security-delegation-plugins",title:"Security delegation plugins",description:"Overview",source:"@site/versioned_docs/version-1.12.0/development/backend/regards/storage/plugins/security-delegation-plugins.md",sourceDirName:"development/backend/regards/storage/plugins",slug:"/development/backend/services/storage/plugins/security-delegation/",permalink:"/docs/1.12.0/development/backend/services/storage/plugins/security-delegation/",draft:!1,editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/versioned_docs/version-1.12.0/development/backend/regards/storage/plugins/security-delegation-plugins.md",tags:[],version:"1.12.0",frontMatter:{id:"backend-storage-security-delegation-plugins",title:"Security delegation plugins",sidebar_label:"Security delegation",slug:"/development/backend/services/storage/plugins/security-delegation/"},sidebar:"dev",previous:{title:"Data storage",permalink:"/docs/1.12.0/development/backend/services/storage/plugins/data-storage/"},next:{title:"Bus message events",permalink:"/docs/1.12.0/development/backend/services/storage/events/"}},l={},c=[{value:"Overview",id:"overview",level:2},{value:"Interface",id:"interface",level:2},{value:"Implementation",id:"implementation",level:2}],g={toc:c},u="wrapper";function p(e){let{components:t,...n}=e;return(0,a.yg)(u,(0,r.c)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"overview"},"Overview"),(0,a.yg)("admonition",{type:"note"},(0,a.yg)("p",{parentName:"admonition"},"This extension point allows to define if a user has access to a given AIP and its files. By default the security is delegated to the catalog microservice with the CatalogSecurityDelegation plugin")),(0,a.yg)("p",null,"REGARDS provides many implementation of this extension point :"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"https://github.com/RegardsOss/regards-plugins/blob/master/storage-plugins/catalog-security-delegation/src/main/java/fr/cnes/regards/modules/storage/plugins/security/CatalogSecurityDelegation.java"},"CatalogSecurityDelegation")," : Delegate access rights to catalog microservice"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"https://github.com/RegardsOss/regards-storage/blob/master/storage/storage-plugin/src/main/java/fr/cnes/regards/modules/storage/plugin/security/NoCatalogSecurityDelegationPlugin.java"},"NoCatalogSecurityDelegationPlugin")," : Allow access to all stored AIPs without any security check to all users.")),(0,a.yg)("h2",{id:"interface"},"Interface"),(0,a.yg)("p",null,"   ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/RegardsOss/regards-storage/blob/master/storage/storage-domain/src/main/java/fr/cnes/regards/modules/storage/domain/plugin/ISecurityDelegation.java"},"ISecurityDelegation")),(0,a.yg)("h2",{id:"implementation"},"Implementation"),(0,a.yg)("p",null,"To learn more about how to create your own plugin see ",(0,a.yg)("a",{parentName:"p",href:"/docs/1.12.0/development/backend/framework/modules/plugins/"},"Plugins")),(0,a.yg)("p",null,"Here under is an exemple of how to implements this extension point to create your own business logic."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-java"},'@Plugin(id = "exemple", version = "1.0.0", description = "exemple plugin",\n        author = "REGARDS Team", contact = "regards@c-s.fr", licence = "LGPLv3.0", owner = "CSSI",\n        url = "https://github.com/RegardsOss")\npublic class Plugin implements ISecurityDelegation {\n\n    /**\n     * Return URNs of which access is granted from given ones\n     */\n    @Override\n    public Set<UniformResourceName> hasAccess(Collection<UniformResourceName> urns){\n\n    }\n\n    /**\n     * Allow to know if the current user has access to a given AIP, through its ipId\n     * @param ipId identifier of aip that we are wondeering if we have access to.\n     * @return weither we have access to the aip or not\n     */\n    @Override\n    public boolean hasAccess(String ipId) {\n\n    }\n\n    /**\n     * @return weither the current user has access to features returning collections of AIP\n     */\n    @Override\n    public boolean hasAccessToListFeature() {\n\n    }\n   \n}\n')))}p.isMDXComponent=!0}}]);