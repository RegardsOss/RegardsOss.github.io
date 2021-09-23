"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[24186],{3905:function(e,r,t){t.d(r,{Zo:function(){return p},kt:function(){return m}});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=n.createContext({}),c=function(e){var r=n.useContext(u),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},p=function(e){var r=c(e.components);return n.createElement(u.Provider,{value:r},e.children)},l={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(t),m=a,f=d["".concat(u,".").concat(m)]||d[m]||l[m]||i;return t?n.createElement(f,o(o({ref:r},p),{},{components:t})):n.createElement(f,o({ref:r},p))}));function m(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=d;var s={};for(var u in r)hasOwnProperty.call(r,u)&&(s[u]=r[u]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=t[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},67076:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return s},contentTitle:function(){return u},metadata:function(){return c},toc:function(){return p},default:function(){return d}});var n=t(87462),a=t(63366),i=(t(67294),t(3905)),o=["components"],s={},u="V1.3.0 to V1.4.0 migration",c={unversionedId:"development/backend/regards/fem/api/amqp/migrations/migration-1.3.0-1.4.0",id:"version-1.4.0/development/backend/regards/fem/api/amqp/migrations/migration-1.3.0-1.4.0",isDocsHomePage:!1,title:"V1.3.0 to V1.4.0 migration",description:"AMQP Feature requests",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-1.4.0/development/backend/regards/fem/api/amqp/migrations/migration-1.3.0-1.4.0.md",sourceDirName:"development/backend/regards/fem/api/amqp/migrations",slug:"/development/backend/regards/fem/api/amqp/migrations/migration-1.3.0-1.4.0",permalink:"/fr/docs/1.4.0/development/backend/regards/fem/api/amqp/migrations/migration-1.3.0-1.4.0",editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/versioned_docs/version-1.4.0/development/backend/regards/fem/api/amqp/migrations/migration-1.3.0-1.4.0.md",version:"1.4.0",frontMatter:{}},p=[{value:"AMQP Feature requests",id:"amqp-feature-requests",children:[{value:"Feature creation request",id:"feature-creation-request",children:[]},{value:"Feature creation request by file reference",id:"feature-creation-request-by-file-reference",children:[]},{value:"Feature patch request",id:"feature-patch-request",children:[]},{value:"Feature deletion request",id:"feature-deletion-request",children:[]}]},{value:"AMQP monitoring API",id:"amqp-monitoring-api",children:[{value:"Requests response",id:"requests-response",children:[]}]}],l={toc:p};function d(e){var r=e.components,t=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},l,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"v130-to-v140-migration"},"V1.3.0 to V1.4.0 migration"),(0,i.kt)("h2",{id:"amqp-feature-requests"},"AMQP Feature requests"),(0,i.kt)("h3",{id:"feature-creation-request"},"Feature creation request"),(0,i.kt)("p",null,"No changes in amqp interfaces."),(0,i.kt)("h3",{id:"feature-creation-request-by-file-reference"},"Feature creation request by file reference"),(0,i.kt)("p",null,'Reference requests in previous version are renamed to "Extraction requests" in V1.4.0.'),(0,i.kt)("p",null,"New extraction requests has to be published on this exchange : ",(0,i.kt)("inlineCode",{parentName:"p"},"regards.broadcast.fr.cnes.regards.modules.featureprovider.domain.FeatureExtractionRequestEvent"),"\nIn previous version reference requests were sent to : ",(0,i.kt)("inlineCode",{parentName:"p"},"regards.broadcast.fr.cnes.regards.modules.feature.dto.event.in.FeatureReferenceRequestEvent")),(0,i.kt)("p",null,"The requests body and header has not changed."),(0,i.kt)("h3",{id:"feature-patch-request"},"Feature patch request"),(0,i.kt)("p",null,"No changes in amqp interfaces."),(0,i.kt)("h3",{id:"feature-deletion-request"},"Feature deletion request"),(0,i.kt)("p",null,"No changes in amqp interfaces."),(0,i.kt)("h2",{id:"amqp-monitoring-api"},"AMQP monitoring API"),(0,i.kt)("h3",{id:"requests-response"},"Requests response"),(0,i.kt)("p",null,"In previuous version requests responses were all sent to : ",(0,i.kt)("inlineCode",{parentName:"p"},"regards.broadcast.fr.cnes.regards.modules.feature.dto.event.out.FeatureRequestEvent")),(0,i.kt)("p",null,"In new version :"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"All Creation/Notification/Deletion/Update requests responses are sent to : ",(0,i.kt)("inlineCode",{parentName:"li"},"regards.broadcast.fr.cnes.regards.modules.feature.dto.event.out.FeatureRequestEvent")),(0,i.kt)("li",{parentName:"ul"},"Extraction requests responses are sent to : ",(0,i.kt)("inlineCode",{parentName:"li"},"regards.broadcast.fr.cnes.regards.modules.featureprovider.domain.FeatureExtractionResponseEvent"))))}d.isMDXComponent=!0}}]);