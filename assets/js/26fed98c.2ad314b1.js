"use strict";(self.webpackChunkregardsoss_github_io=self.webpackChunkregardsoss_github_io||[]).push([[61914],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||o;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},74585:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return p}});var r=n(83117),a=n(80102),o=(n(67294),n(3905)),i=["components"],l={id:"backend-framework-starters-multitenant",title:"Multitenant starter",slug:"/development/backend/framework/starters/multitenant/"},s=void 0,u={unversionedId:"development/backend/framework/starters/backend-framework-starters-multitenant",id:"version-1.6.0/development/backend/framework/starters/backend-framework-starters-multitenant",title:"Multitenant starter",description:"Purpose",source:"@site/versioned_docs/version-1.6.0/development/backend/framework/starters/multitenant-starter.md",sourceDirName:"development/backend/framework/starters",slug:"/development/backend/framework/starters/multitenant/",permalink:"/docs/1.6.0/development/backend/framework/starters/multitenant/",draft:!1,editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/versioned_docs/version-1.6.0/development/backend/framework/starters/multitenant-starter.md",tags:[],version:"1.6.0",frontMatter:{id:"backend-framework-starters-multitenant",title:"Multitenant starter",slug:"/development/backend/framework/starters/multitenant/"},sidebar:"version-1.6.0/dev",previous:{title:"Module starter",permalink:"/docs/1.6.0/development/backend/framework/starters/module/"},next:{title:"OAIS starter",permalink:"/docs/1.6.0/development/backend/framework/starters/oais/"}},c={},p=[{value:"Purpose",id:"purpose",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Autoconfiguration",id:"autoconfiguration",level:2},{value:"How to",id:"how-to",level:2},{value:"How to use",id:"how-to-use",level:3},{value:"How to override default behaviour",id:"how-to-override-default-behaviour",level:3},{value:"How to handle bootstrap tenants",id:"how-to-handle-bootstrap-tenants",level:3}],d={toc:p};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"purpose"},"Purpose"),(0,o.kt)("p",null,"This starter is used to manage multitenancy context."),(0,o.kt)("h2",{id:"configuration"},"Configuration"),(0,o.kt)("p",null,"For default behaviour, only available for test purpose :"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-properties"},"# Static list of tenants\nregards.tenants=tenant1,tenant2\n# Static request tenant\nregards.tenant=tenant1\n")),(0,o.kt)("p",null,"To manage a list of tenant at bootstrap from static configuration :"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-properties"},"# Static bootstrap tenants (comma separated)\nregards.bootstrap-tenants=\n")),(0,o.kt)("h2",{id:"autoconfiguration"},"Autoconfiguration"),(0,o.kt)("p",null,"Starter autoconfigures beans :"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"ITenantResolver")," to retrieve list of tenants,")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"@FunctionalInterface\npublic interface ITenantResolver {\n\n    /**\n     * @return all tenants regardless its configuration\n     */\n    Set<String> getAllTenants();\n\n    /**\n     * @return all tenants fully configured\n     */\n    Set<String> getAllActiveTenants();\n}\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"IRuntimeTenantResolver")," to retrieve request tenant at runtime.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"public interface IRuntimeTenantResolver {\n\n    /**\n     * @return runtime tenant\n     */\n    String getTenant();\n\n    /**\n     * Does the current tenant is instance\n     * @return true|false\n     */\n    boolean isInstance();\n\n    /**\n     * Force runtime tenant to a specific value on current thread.<br/>\n     * We recommend to use {@link IRuntimeTenantResolver#clearTenant()} to clean the thread in a finally clause.<br/>\n     * It is mostly recommended for server threads as they are reused.\n     * @param tenant tenant\n     */\n    void forceTenant(String tenant);\n\n    /**\n     * Clear forced tenant on current thread\n     */\n    void clearTenant();\n}\n")),(0,o.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"danger")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"In production, the implementation of ",(0,o.kt)("inlineCode",{parentName:"p"},"IRuntimeTenantResolver")," must be ",(0,o.kt)("strong",{parentName:"p"},"thread safe"),"."))),(0,o.kt)("h2",{id:"how-to"},"How to"),(0,o.kt)("h3",{id:"how-to-use"},"How to use"),(0,o.kt)("p",null,"Just inject beans in your component."),(0,o.kt)("h3",{id:"how-to-override-default-behaviour"},"How to override default behaviour"),(0,o.kt)("p",null,"Create your own ",(0,o.kt)("inlineCode",{parentName:"p"},"ITenantResolver")," bean to implement your own tenant retrieval.\nCreate your own ",(0,o.kt)("inlineCode",{parentName:"p"},"IRuntimeTenantResolver")," bean to implement your own ",(0,o.kt)("strong",{parentName:"p"},"runtime")," tenant retrieval."),(0,o.kt)("h3",{id:"how-to-handle-bootstrap-tenants"},"How to handle bootstrap tenants"),(0,o.kt)("p",null,"Just autowired following property class to access bootstrap tenants."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"@Autowired\nprivate MultitenantBootstrapProperties bootstrapProperties;\n")))}m.isMDXComponent=!0}}]);