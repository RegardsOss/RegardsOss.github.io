(window.webpackJsonp=window.webpackJsonp||[]).push([[1248],{1320:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return u}));var r=n(3),a=n(7),o=(n(0),n(2708)),i={id:"backend-framework-starters-multitenant",title:"Multitenant starter",slug:"/development/backend/framework/starters/multitenant/"},l={unversionedId:"development/backend/framework/starters/backend-framework-starters-multitenant",id:"version-1.4.0/development/backend/framework/starters/backend-framework-starters-multitenant",isDocsHomePage:!1,title:"Multitenant starter",description:"Purpose",source:"@site/versioned_docs/version-1.4.0/development/backend/framework/starters/multitenant-starter.md",slug:"/development/backend/framework/starters/multitenant/",permalink:"/docs/1.4.0/development/backend/framework/starters/multitenant/",editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/versioned_docs/version-1.4.0/development/backend/framework/starters/multitenant-starter.md",version:"1.4.0",sidebar:"version-1.4.0/dev",previous:{title:"Module starter",permalink:"/docs/1.4.0/development/backend/framework/starters/module/"},next:{title:"OAIS starter",permalink:"/docs/1.4.0/development/backend/framework/starters/oais/"}},c=[{value:"Purpose",id:"purpose",children:[]},{value:"Configuration",id:"configuration",children:[]},{value:"Autoconfiguration",id:"autoconfiguration",children:[]},{value:"How to",id:"how-to",children:[{value:"How to use",id:"how-to-use",children:[]},{value:"How to override default behaviour",id:"how-to-override-default-behaviour",children:[]},{value:"How to handle bootstrap tenants",id:"how-to-handle-bootstrap-tenants",children:[]}]}],s={toc:c};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"purpose"},"Purpose"),Object(o.b)("p",null,"This starter is used to manage multitenancy context."),Object(o.b)("h2",{id:"configuration"},"Configuration"),Object(o.b)("p",null,"For default behaviour, only available for test purpose :"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-properties"},"# Static list of tenants\nregards.tenants=tenant1,tenant2\n# Static request tenant\nregards.tenant=tenant1\n")),Object(o.b)("p",null,"To manage a list of tenant at bootstrap from static configuration :"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-properties"},"# Static bootstrap tenants (comma separated)\nregards.bootstrap-tenants=\n")),Object(o.b)("h2",{id:"autoconfiguration"},"Autoconfiguration"),Object(o.b)("p",null,"Starter autoconfigures beans :"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"ITenantResolver")," to retrieve list of tenants,")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-java"},"@FunctionalInterface\npublic interface ITenantResolver {\n\n    /**\n     * @return all tenants regardless its configuration\n     */\n    Set<String> getAllTenants();\n\n    /**\n     * @return all tenants fully configured\n     */\n    Set<String> getAllActiveTenants();\n}\n")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"IRuntimeTenantResolver")," to retrieve request tenant at runtime.")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-java"},"public interface IRuntimeTenantResolver {\n\n    /**\n     * @return runtime tenant\n     */\n    String getTenant();\n\n    /**\n     * Does the current tenant is instance\n     * @return true|false\n     */\n    boolean isInstance();\n\n    /**\n     * Force runtime tenant to a specific value on current thread.<br/>\n     * We recommend to use {@link IRuntimeTenantResolver#clearTenant()} to clean the thread in a finally clause.<br/>\n     * It is mostly recommended for server threads as they are reused.\n     * @param tenant tenant\n     */\n    void forceTenant(String tenant);\n\n    /**\n     * Clear forced tenant on current thread\n     */\n    void clearTenant();\n}\n")),Object(o.b)("div",{className:"admonition admonition-danger alert alert--danger"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"danger")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"In production, the implementation of ",Object(o.b)("inlineCode",{parentName:"p"},"IRuntimeTenantResolver")," must be ",Object(o.b)("strong",{parentName:"p"},"thread safe"),"."))),Object(o.b)("h2",{id:"how-to"},"How to"),Object(o.b)("h3",{id:"how-to-use"},"How to use"),Object(o.b)("p",null,"Just inject beans in your component."),Object(o.b)("h3",{id:"how-to-override-default-behaviour"},"How to override default behaviour"),Object(o.b)("p",null,"Create your own ",Object(o.b)("inlineCode",{parentName:"p"},"ITenantResolver")," bean to implement your own tenant retrieval.\nCreate your own ",Object(o.b)("inlineCode",{parentName:"p"},"IRuntimeTenantResolver")," bean to implement your own ",Object(o.b)("strong",{parentName:"p"},"runtime")," tenant retrieval."),Object(o.b)("h3",{id:"how-to-handle-bootstrap-tenants"},"How to handle bootstrap tenants"),Object(o.b)("p",null,"Just autowired following property class to access bootstrap tenants."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-java"},"@Autowired\nprivate MultitenantBootstrapProperties bootstrapProperties;\n")))}u.isMDXComponent=!0},2708:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),u=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=u(n),d=r,m=p["".concat(i,".").concat(d)]||p[d]||b[d]||o;return n?a.a.createElement(m,l(l({ref:t},s),{},{components:n})):a.a.createElement(m,l({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);