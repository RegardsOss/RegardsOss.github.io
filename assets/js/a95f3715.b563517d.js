"use strict";(self.webpackChunkregardsoss_github_io=self.webpackChunkregardsoss_github_io||[]).push([[6780],{95788:(e,t,a)=>{a.d(t,{Iu:()=>l,yg:()=>u});var r=a(11504);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function d(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},s=Object.keys(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var m=r.createContext({}),i=function(e){var t=r.useContext(m),a=t;return e&&(a="function"==typeof e?e(t):d(d({},t),e)),a},l=function(e){var t=i(e.components);return r.createElement(m.Provider,{value:t},e.children)},c="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,s=e.originalType,m=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),c=i(a),p=n,u=c["".concat(m,".").concat(p)]||c[p]||g[p]||s;return a?r.createElement(u,d(d({ref:t},l),{},{components:a})):r.createElement(u,d({ref:t},l))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=a.length,d=new Array(s);d[0]=p;var o={};for(var m in t)hasOwnProperty.call(t,m)&&(o[m]=t[m]);o.originalType=e,o[c]="string"==typeof e?e:n,d[1]=o;for(var i=2;i<s;i++)d[i]=a[i];return r.createElement.apply(null,d)}return r.createElement.apply(null,a)}p.displayName="MDXCreateElement"},96500:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>d,default:()=>g,frontMatter:()=>s,metadata:()=>o,toc:()=>i});var r=a(45072),n=(a(11504),a(95788));const s={id:"backend-dam-events",title:"Bus message events",slug:"/development/backend/services/dam/events/"},d=void 0,o={unversionedId:"development/backend/regards/dam/events/backend-dam-events",id:"version-1.13.0/development/backend/regards/dam/events/backend-dam-events",title:"Bus message events",description:"To know more about bus message mechanism look at AMQP starter",source:"@site/versioned_docs/version-1.13.0/development/backend/regards/dam/events/events.md",sourceDirName:"development/backend/regards/dam/events",slug:"/development/backend/services/dam/events/",permalink:"/docs/1.13.0/development/backend/services/dam/events/",draft:!1,editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/versioned_docs/version-1.13.0/development/backend/regards/dam/events/events.md",tags:[],version:"1.13.0",frontMatter:{id:"backend-dam-events",title:"Bus message events",slug:"/development/backend/services/dam/events/"},sidebar:"dev",previous:{title:"Datasource",permalink:"/docs/1.13.0/development/backend/services/dam/plugins/datasource/"},next:{title:"Geospatial features management",permalink:"/docs/1.13.0/development/backend/services/dam/geo/"}},m={},i=[],l={toc:i},c="wrapper";function g(e){let{components:t,...a}=e;return(0,n.yg)(c,(0,r.c)({},l,a,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("admonition",{type:"info"},(0,n.yg)("p",{parentName:"admonition"},"To know more about bus message mechanism look at ",(0,n.yg)("a",{parentName:"p",href:"/docs/1.13.0/development/backend/framework/starters/amqp/"},"AMQP starter"))),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:"left"},"Event"),(0,n.yg)("th",{parentName:"tr",align:"left"},"Target"),(0,n.yg)("th",{parentName:"tr",align:"left"},"Mode"),(0,n.yg)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("a",{parentName:"td",href:"https://github.com/RegardsOss/regards-backend/blob/master/rs-dam/dam/dam-domain/src/main/java/fr/cnes/regards/modules/dam/domain/entities/event/DatasetEvent.java"},"DatasetEvent")),(0,n.yg)("td",{parentName:"tr",align:"left"},"MICROSERVICE"),(0,n.yg)("td",{parentName:"tr",align:"left"},"Broadcast"),(0,n.yg)("td",{parentName:"tr",align:"left"},"Published For each event on a dataset entity (create, update, delete, index, error)")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("a",{parentName:"td",href:"https://github.com/RegardsOss/regards-backend/blob/master/rs-dam/dam/dam-domain/src/main/java/fr/cnes/regards/modules/dam/domain/entities/event/NotDatasetEntityEvent.java"},"NotDatasetEntityEvent")),(0,n.yg)("td",{parentName:"tr",align:"left"},"MICROSERVICE"),(0,n.yg)("td",{parentName:"tr",align:"left"},"Broadcast"),(0,n.yg)("td",{parentName:"tr",align:"left"},"Published For each event on object, collection and document entities (create, update, delete, index, error)")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("a",{parentName:"td",href:"https://github.com/RegardsOss/regards-backend/blob/master/rs-dam/dam/dam-domain/src/main/java/fr/cnes/regards/modules/dam/domain/dataaccess/accessgroup/event/AccessGroupEvent.java"},"AccessGroupEvent")),(0,n.yg)("td",{parentName:"tr",align:"left"},"ALL"),(0,n.yg)("td",{parentName:"tr",align:"left"},"Broadcast"),(0,n.yg)("td",{parentName:"tr",align:"left"},"Published for user group creation, modification or deletion")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("a",{parentName:"td",href:"https://github.com/RegardsOss/regards-backend/blob/master/rs-dam/dam/dam-domain/src/main/java/fr/cnes/regards/modules/dam/domain/dataaccess/accessgroup/event/AccessGroupPublicEvent.java"},"AccessGroupPublicEvent")),(0,n.yg)("td",{parentName:"tr",align:"left"},"ALL"),(0,n.yg)("td",{parentName:"tr",align:"left"},"Broadcast"),(0,n.yg)("td",{parentName:"tr",align:"left"},"Published when a public group is defined or removed")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("a",{parentName:"td",href:"https://github.com/RegardsOss/regards-backend/blob/master/rs-dam/dam/dam-domain/src/main/java/fr/cnes/regards/modules/dam/domain/dataaccess/accessgroup/event/AccessGroupAssociationEvent.java"},"AccessGroupAssociationEvent")),(0,n.yg)("td",{parentName:"tr",align:"left"},"ALL"),(0,n.yg)("td",{parentName:"tr",align:"left"},"Broadcast"),(0,n.yg)("td",{parentName:"tr",align:"left"},"Published when a group is associated to a user")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("a",{parentName:"td",href:"https://github.com/RegardsOss/regards-backend/blob/master/rs-dam/dam/dam-domain/src/main/java/fr/cnes/regards/modules/dam/domain/dataaccess/accessgroup/event/AccessGroupDissociationEvent.java"},"AccessGroupDissociationEvent")),(0,n.yg)("td",{parentName:"tr",align:"left"},"ALL"),(0,n.yg)("td",{parentName:"tr",align:"left"},"Broadcast"),(0,n.yg)("td",{parentName:"tr",align:"left"},"Published when a group is dissociated to a user")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("a",{parentName:"td",href:"https://github.com/RegardsOss/regards-backend/blob/master/rs-dam/dam/dam-domain/src/main/java/fr/cnes/regards/modules/dam/domain/dataaccess/accessright/event/AccessRightEvent.java"},"AccessRightEvent")),(0,n.yg)("td",{parentName:"tr",align:"left"},"ALL"),(0,n.yg)("td",{parentName:"tr",align:"left"},"Broadcast"),(0,n.yg)("td",{parentName:"tr",align:"left"},"Published when for access right creation, modification or deletion")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("a",{parentName:"td",href:"https://github.com/RegardsOss/regards-backend/blob/master/rs-dam/model/model-domain/src/main/java/fr/cnes/regards/modules/model/domain/event/AttributeModelCreated.java"},"AttributeModelCreated")),(0,n.yg)("td",{parentName:"tr",align:"left"},"ALL"),(0,n.yg)("td",{parentName:"tr",align:"left"},"Broadcast"),(0,n.yg)("td",{parentName:"tr",align:"left"},"Published when an attribute is created")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("a",{parentName:"td",href:"https://github.com/RegardsOss/regards-backend/blob/master/rs-dam/model/model-domain/src/main/java/fr/cnes/regards/modules/model/domain/event/AttributeModelDeleted.java"},"AttributeModelDeleted")),(0,n.yg)("td",{parentName:"tr",align:"left"},"ALL"),(0,n.yg)("td",{parentName:"tr",align:"left"},"Broadcast"),(0,n.yg)("td",{parentName:"tr",align:"left"},"Published when an attribute is deleted")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("a",{parentName:"td",href:"https://github.com/RegardsOss/regards-backend/blob/master/rs-dam/model/model-domain/src/main/java/fr/cnes/regards/modules/model/domain/event/FragmentDeletedEvent.java"},"FragmentDeletedEvent")),(0,n.yg)("td",{parentName:"tr",align:"left"},"ALL"),(0,n.yg)("td",{parentName:"tr",align:"left"},"Broadcast"),(0,n.yg)("td",{parentName:"tr",align:"left"},"Published when a fragment is deleted")))))}g.isMDXComponent=!0}}]);