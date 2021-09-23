"use strict";(self.webpackChunkRegardsOss_github_io=self.webpackChunkRegardsOss_github_io||[]).push([[41854],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),d=a,m=p["".concat(l,".").concat(d)]||p[d]||g[d]||i;return n?r.createElement(m,o(o({ref:t},u),{},{components:n})):r.createElement(m,o({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},11199:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return u},default:function(){return p}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),o=["components"],s={id:"backend-storage-security-delegation-plugins",title:"Security delegation plugins",sidebar_label:"Security delegation",slug:"/development/backend/services/storage/plugins/security-delegation/"},l=void 0,c={unversionedId:"development/backend/regards/storage/plugins/backend-storage-security-delegation-plugins",id:"development/backend/regards/storage/plugins/backend-storage-security-delegation-plugins",isDocsHomePage:!1,title:"Security delegation plugins",description:"Overview",source:"@site/docs/development/backend/regards/storage/plugins/security-delegation-plugins.md",sourceDirName:"development/backend/regards/storage/plugins",slug:"/development/backend/services/storage/plugins/security-delegation/",permalink:"/fr/docs/development/backend/services/storage/plugins/security-delegation/",editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/docs/development/backend/regards/storage/plugins/security-delegation-plugins.md",tags:[],version:"current",frontMatter:{id:"backend-storage-security-delegation-plugins",title:"Security delegation plugins",sidebar_label:"Security delegation",slug:"/development/backend/services/storage/plugins/security-delegation/"},sidebar:"dev",previous:{title:"Data storage",permalink:"/fr/docs/development/backend/services/storage/plugins/data-storage/"},next:{title:"Bus message events",permalink:"/fr/docs/development/backend/services/storage/events/"}},u=[{value:"Overview",id:"overview",children:[]},{value:"Interface",id:"interface",children:[]},{value:"Implementation",id:"implementation",children:[]}],g={toc:u};function p(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"overview"},"Overview"),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"This extension point allows to define if a user has access to a given AIP and its files. By default the security is delegated to the catalog microservice with the CatalogSecurityDelegation plugin"))),(0,i.kt)("p",null,"REGARDS provides many implementation of this extension point :"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/RegardsOss/regards-plugins/blob/master/storage-plugins/catalog-security-delegation/src/main/java/fr/cnes/regards/modules/storage/plugins/security/CatalogSecurityDelegation.java"},"CatalogSecurityDelegation")," : Delegate access rights to catalog microservice"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/RegardsOss/regards-storage/blob/master/storage/storage-plugin/src/main/java/fr/cnes/regards/modules/storage/plugin/security/NoCatalogSecurityDelegationPlugin.java"},"NoCatalogSecurityDelegationPlugin")," : Allow access to all stored AIPs without any security check to all users.")),(0,i.kt)("h2",{id:"interface"},"Interface"),(0,i.kt)("p",null,"   ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/RegardsOss/regards-storage/blob/master/storage/storage-domain/src/main/java/fr/cnes/regards/modules/storage/domain/plugin/ISecurityDelegation.java"},"ISecurityDelegation")),(0,i.kt)("h2",{id:"implementation"},"Implementation"),(0,i.kt)("p",null,"To learn more about how to create your own plugin see ",(0,i.kt)("a",{parentName:"p",href:"../../../../framework/modules/plugins/"},"Plugins")),(0,i.kt)("p",null,"Here under is an exemple of how to implements this extension point to create your own business logic."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'@Plugin(id = "exemple", version = "1.0.0", description = "exemple plugin",\n        author = "REGARDS Team", contact = "regards@c-s.fr", licence = "LGPLv3.0", owner = "CSSI",\n        url = "https://github.com/RegardsOss")\npublic class Plugin implements ISecurityDelegation {\n\n    /**\n     * Return URNs of which access is granted from given ones\n     */\n    @Override\n    public Set<UniformResourceName> hasAccess(Collection<UniformResourceName> urns){\n\n    }\n\n    /**\n     * Allow to know if the current user has access to a given AIP, through its ipId\n     * @param ipId identifier of aip that we are wondeering if we have access to.\n     * @return weither we have access to the aip or not\n     */\n    @Override\n    public boolean hasAccess(String ipId) {\n\n    }\n\n    /**\n     * @return weither the current user has access to features returning collections of AIP\n     */\n    @Override\n    public boolean hasAccessToListFeature() {\n\n    }\n   \n}\n')))}p.isMDXComponent=!0}}]);