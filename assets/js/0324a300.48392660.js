"use strict";(self.webpackChunkregardsoss_github_io=self.webpackChunkregardsoss_github_io||[]).push([[66570],{20290:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>l,frontMatter:()=>s,metadata:()=>o,toc:()=>d});var i=t(74848),a=t(28453);const s={id:"backend-authentication-plugins",title:"Authentication plugins",sidebar_label:"Authentication plugins",slug:"/development/backend/services/authentication/contributor-guides/plugins/"},r=void 0,o={id:"development/backend/regards/authentication/contributor-guides/backend-authentication-plugins",title:"Authentication plugins",description:"This extension point allows to define an authentication protocol.",source:"@site/versioned_docs/version-1.15/development/backend/regards/authentication/contributor-guides/authentication-plugins.md",sourceDirName:"development/backend/regards/authentication/contributor-guides",slug:"/development/backend/services/authentication/contributor-guides/plugins/",permalink:"/docs/1.15/development/backend/services/authentication/contributor-guides/plugins/",draft:!1,unlisted:!1,editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/versioned_docs/version-1.15/development/backend/regards/authentication/contributor-guides/authentication-plugins.md",tags:[],version:"1.15",frontMatter:{id:"backend-authentication-plugins",title:"Authentication plugins",sidebar_label:"Authentication plugins",slug:"/development/backend/services/authentication/contributor-guides/plugins/"},sidebar:"dev",previous:{title:"Retrieve token REST",permalink:"/docs/1.15/development/backend/regards/authentication/api-guides/get-token-curl.md"},next:{title:"REST API",permalink:"/docs/1.15/development/backend/services/authentication/api-swagger"}},c={},d=[{value:"Identity provider",id:"identity-provider",level:2},{value:"Interface",id:"interface",level:3},{value:"Service Provider",id:"service-provider",level:2},{value:"Interface",id:"interface-1",level:3}];function u(e){const n={a:"a",admonition:"admonition",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...(0,a.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.admonition,{type:"note",children:[(0,i.jsx)(n.p,{children:"This extension point allows to define an authentication protocol."}),(0,i.jsx)(n.p,{children:"By default, if no authentication system is defined, REGARDS handles its own authentication system based on JWT tokens. However, it is possible to externalize user management with IDP and/or SP."})]}),"\n",(0,i.jsx)(n.h2,{id:"identity-provider",children:"Identity provider"}),"\n",(0,i.jsx)(n.p,{children:"Authentication system managed by REGARDS which user base is deported on an external base. This operation allows to connect to an LDAP base for example."}),"\n",(0,i.jsx)(n.h3,{id:"interface",children:"Interface"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://github.com/RegardsOss/regards-backend/blob/master/rs-cloud/rs-authentication/authentication/authentication-domain/src/main/java/fr/cnes/regards/modules/authentication/domain/plugin/IAuthenticationPlugin.java",children:"IAuthenticationPlugin"})}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"REGARDS provides many implementations of this extension point :"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://github.com/RegardsOss/regards-backend/blob/master/rs-cloud/rs-authentication/authentication/authentication-plugins/src/main/java/fr/cnes/regards/modules/authentication/plugins/identityprovider/regards/RegardsInternalAuthenticationPlugin.java",children:"RegardsInternalAuthenticationPlugin"})," : Authenticate users with internal managed accounts."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://github.com/RegardsOss/regards-backend/blob/master/rs-cloud/rs-authentication/authentication/authentication-plugins/src/main/java/fr/cnes/regards/modules/authentication/plugins/identityprovider/ldap/LdapAuthenticationPlugin.java",children:"LdapAuthenticationPlugin"})," : Authenticate users through a configured LDAP server"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"service-provider",children:"Service Provider"}),"\n",(0,i.jsx)(n.p,{children:"Authentication system fully externalized. This operation allows to connect through external SSO like github for example."}),"\n",(0,i.jsx)(n.h3,{id:"interface-1",children:"Interface"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://github.com/RegardsOss/regards-backend/blob/master/rs-cloud/rs-authentication/authentication/authentication-domain/src/main/java/fr/cnes/regards/modules/authentication/domain/plugin/IServiceProviderPlugin.java",children:"IServiceProviderPlugin"})}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"REGARDS provides one implementation of this extension point :"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://github.com/RegardsOss/regards-backend/blob/master/rs-cloud/rs-authentication/authentication/authentication-plugins/src/main/java/fr/cnes/regards/modules/authentication/plugins/serviceprovider/openid/OpenIdConnectPlugin.java",children:"OpenIdConnectPlugin"})," : Authenticate users through a configured OpenID Connect server"]}),"\n"]})]})}function l(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>o});var i=t(96540);const a={},s=i.createContext(a);function r(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);