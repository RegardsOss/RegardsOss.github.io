"use strict";(self.webpackChunkregardsoss_github_io=self.webpackChunkregardsoss_github_io||[]).push([[20064],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=u(n),m=a,f=c["".concat(s,".").concat(m)]||c[m]||d[m]||o;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},37967:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var r=n(87462),a=(n(67294),n(3905));const o={id:"backend-framework-starters-multitenant",title:"Multitenant starter",slug:"/development/backend/framework/starters/multitenant/"},i=void 0,l={unversionedId:"development/backend/framework/starters/backend-framework-starters-multitenant",id:"version-1.14/development/backend/framework/starters/backend-framework-starters-multitenant",title:"Multitenant starter",description:"Purpose",source:"@site/versioned_docs/version-1.14/development/backend/framework/starters/multitenant-starter.md",sourceDirName:"development/backend/framework/starters",slug:"/development/backend/framework/starters/multitenant/",permalink:"/docs/1.14/development/backend/framework/starters/multitenant/",draft:!1,editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/versioned_docs/version-1.14/development/backend/framework/starters/multitenant-starter.md",tags:[],version:"1.14",frontMatter:{id:"backend-framework-starters-multitenant",title:"Multitenant starter",slug:"/development/backend/framework/starters/multitenant/"},sidebar:"dev",previous:{title:"Module starter",permalink:"/docs/1.14/development/backend/framework/starters/module/"},next:{title:"OAIS starter",permalink:"/docs/1.14/development/backend/framework/starters/oais/"}},s={},u=[{value:"Purpose",id:"purpose",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Autoconfiguration",id:"autoconfiguration",level:2},{value:"How to",id:"how-to",level:2},{value:"How to use",id:"how-to-use",level:3},{value:"How to override default behaviour",id:"how-to-override-default-behaviour",level:3},{value:"How to handle bootstrap tenants",id:"how-to-handle-bootstrap-tenants",level:3}],p={toc:u},c="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"purpose"},"Purpose"),(0,a.kt)("p",null,"This starter is used to manage multitenancy context."),(0,a.kt)("h2",{id:"configuration"},"Configuration"),(0,a.kt)("p",null,"For default behaviour, only available for test purpose :"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-properties"},"# Static list of tenants\nregards.tenants=tenant1,tenant2\n# Static request tenant\nregards.tenant=tenant1\n")),(0,a.kt)("p",null,"To manage a list of tenant at bootstrap from static configuration :"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-properties"},"# Static bootstrap tenants (comma separated)\nregards.bootstrap-tenants=\n")),(0,a.kt)("h2",{id:"autoconfiguration"},"Autoconfiguration"),(0,a.kt)("p",null,"Starter autoconfigures beans :"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"ITenantResolver")," to retrieve list of tenants,")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"@FunctionalInterface\npublic interface ITenantResolver {\n\n    /**\n     * @return all tenants regardless its configuration\n     */\n    Set<String> getAllTenants();\n\n    /**\n     * @return all tenants fully configured\n     */\n    Set<String> getAllActiveTenants();\n}\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"IRuntimeTenantResolver")," to retrieve request tenant at runtime.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"public interface IRuntimeTenantResolver {\n\n    /**\n     * @return runtime tenant\n     */\n    String getTenant();\n\n    /**\n     * Does the current tenant is instance\n     * @return true|false\n     */\n    boolean isInstance();\n\n    /**\n     * Force runtime tenant to a specific value on current thread.<br/>\n     * We recommend to use {@link IRuntimeTenantResolver#clearTenant()} to clean the thread in a finally clause.<br/>\n     * It is mostly recommended for server threads as they are reused.\n     * @param tenant tenant\n     */\n    void forceTenant(String tenant);\n\n    /**\n     * Clear forced tenant on current thread\n     */\n    void clearTenant();\n}\n")),(0,a.kt)("admonition",{type:"danger"},(0,a.kt)("p",{parentName:"admonition"},"In production, the implementation of ",(0,a.kt)("inlineCode",{parentName:"p"},"IRuntimeTenantResolver")," must be ",(0,a.kt)("strong",{parentName:"p"},"thread safe"),".")),(0,a.kt)("h2",{id:"how-to"},"How to"),(0,a.kt)("h3",{id:"how-to-use"},"How to use"),(0,a.kt)("p",null,"Just inject beans in your component."),(0,a.kt)("h3",{id:"how-to-override-default-behaviour"},"How to override default behaviour"),(0,a.kt)("p",null,"Create your own ",(0,a.kt)("inlineCode",{parentName:"p"},"ITenantResolver")," bean to implement your own tenant retrieval.\nCreate your own ",(0,a.kt)("inlineCode",{parentName:"p"},"IRuntimeTenantResolver")," bean to implement your own ",(0,a.kt)("strong",{parentName:"p"},"runtime")," tenant retrieval."),(0,a.kt)("h3",{id:"how-to-handle-bootstrap-tenants"},"How to handle bootstrap tenants"),(0,a.kt)("p",null,"Just autowired following property class to access bootstrap tenants."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"@Autowired\nprivate MultitenantBootstrapProperties bootstrapProperties;\n")))}d.isMDXComponent=!0}}]);