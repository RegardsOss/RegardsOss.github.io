"use strict";(self.webpackChunkregardsoss_github_io=self.webpackChunkregardsoss_github_io||[]).push([[42200],{3905:function(e,t,a){a.d(t,{Zo:function(){return l},kt:function(){return u}});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function d(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},s=Object.keys(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=r.createContext({}),m=function(e){var t=r.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):d(d({},t),e)),a},l=function(e){var t=m(e.components);return r.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,s=e.originalType,i=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),p=m(a),u=n,g=p["".concat(i,".").concat(u)]||p[u]||c[u]||s;return a?r.createElement(g,d(d({ref:t},l),{},{components:a})):r.createElement(g,d({ref:t},l))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=a.length,d=new Array(s);d[0]=p;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:n,d[1]=o;for(var m=2;m<s;m++)d[m]=a[m];return r.createElement.apply(null,d)}return r.createElement.apply(null,a)}p.displayName="MDXCreateElement"},3451:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return o},contentTitle:function(){return i},metadata:function(){return m},toc:function(){return l},default:function(){return p}});var r=a(87462),n=a(63366),s=(a(67294),a(3905)),d=["components"],o={id:"backend-dam-events",title:"Bus message events",slug:"/development/backend/services/dam/events/"},i=void 0,m={unversionedId:"development/backend/regards/dam/events/backend-dam-events",id:"development/backend/regards/dam/events/backend-dam-events",title:"Bus message events",description:"To know more about bus message mechanism look at AMQP starter",source:"@site/docs/development/backend/regards/dam/events/events.md",sourceDirName:"development/backend/regards/dam/events",slug:"/development/backend/services/dam/events/",permalink:"/fr/docs/development/backend/services/dam/events/",editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/docs/development/backend/regards/dam/events/events.md",tags:[],version:"current",frontMatter:{id:"backend-dam-events",title:"Bus message events",slug:"/development/backend/services/dam/events/"},sidebar:"dev",previous:{title:"Datasource",permalink:"/fr/docs/development/backend/services/dam/plugins/datasource/"},next:{title:"Geospatial features management",permalink:"/fr/docs/development/backend/services/dam/geo/"}},l=[],c={toc:l};function p(e){var t=e.components,a=(0,n.Z)(e,d);return(0,s.kt)("wrapper",(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"To know more about bus message mechanism look at ",(0,s.kt)("a",{parentName:"p",href:"../../../framework/starters/amqp/"},"AMQP starter")))),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:"left"},"Event"),(0,s.kt)("th",{parentName:"tr",align:"left"},"Target"),(0,s.kt)("th",{parentName:"tr",align:"left"},"Mode"),(0,s.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("a",{parentName:"td",href:"https://github.com/RegardsOss/regards-backend/blob/master/rs-dam/dam/dam-domain/src/main/java/fr/cnes/regards/modules/dam/domain/entities/event/DatasetEvent.java"},"DatasetEvent")),(0,s.kt)("td",{parentName:"tr",align:"left"},"MICROSERVICE"),(0,s.kt)("td",{parentName:"tr",align:"left"},"Broadcast"),(0,s.kt)("td",{parentName:"tr",align:"left"},"Published For each event on a dataset entity (create, update, delete, index, error)")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("a",{parentName:"td",href:"https://github.com/RegardsOss/regards-backend/blob/master/rs-dam/dam/dam-domain/src/main/java/fr/cnes/regards/modules/dam/domain/entities/event/NotDatasetEntityEvent.java"},"NotDatasetEntityEvent")),(0,s.kt)("td",{parentName:"tr",align:"left"},"MICROSERVICE"),(0,s.kt)("td",{parentName:"tr",align:"left"},"Broadcast"),(0,s.kt)("td",{parentName:"tr",align:"left"},"Published For each event on object, collection and document entities (create, update, delete, index, error)")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("a",{parentName:"td",href:"https://github.com/RegardsOss/regards-backend/blob/master/rs-dam/dam/dam-domain/src/main/java/fr/cnes/regards/modules/dam/domain/dataaccess/accessgroup/event/AccessGroupEvent.java"},"AccessGroupEvent")),(0,s.kt)("td",{parentName:"tr",align:"left"},"ALL"),(0,s.kt)("td",{parentName:"tr",align:"left"},"Broadcast"),(0,s.kt)("td",{parentName:"tr",align:"left"},"Published for user group creation, modification or deletion")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("a",{parentName:"td",href:"https://github.com/RegardsOss/regards-backend/blob/master/rs-dam/dam/dam-domain/src/main/java/fr/cnes/regards/modules/dam/domain/dataaccess/accessgroup/event/AccessGroupPublicEvent.java"},"AccessGroupPublicEvent")),(0,s.kt)("td",{parentName:"tr",align:"left"},"ALL"),(0,s.kt)("td",{parentName:"tr",align:"left"},"Broadcast"),(0,s.kt)("td",{parentName:"tr",align:"left"},"Published when a public group is defined or removed")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("a",{parentName:"td",href:"https://github.com/RegardsOss/regards-backend/blob/master/rs-dam/dam/dam-domain/src/main/java/fr/cnes/regards/modules/dam/domain/dataaccess/accessgroup/event/AccessGroupAssociationEvent.java"},"AccessGroupAssociationEvent")),(0,s.kt)("td",{parentName:"tr",align:"left"},"ALL"),(0,s.kt)("td",{parentName:"tr",align:"left"},"Broadcast"),(0,s.kt)("td",{parentName:"tr",align:"left"},"Published when a group is associated to a user")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("a",{parentName:"td",href:"https://github.com/RegardsOss/regards-backend/blob/master/rs-dam/dam/dam-domain/src/main/java/fr/cnes/regards/modules/dam/domain/dataaccess/accessgroup/event/AccessGroupDissociationEvent.java"},"AccessGroupDissociationEvent")),(0,s.kt)("td",{parentName:"tr",align:"left"},"ALL"),(0,s.kt)("td",{parentName:"tr",align:"left"},"Broadcast"),(0,s.kt)("td",{parentName:"tr",align:"left"},"Published when a group is dissociated to a user")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("a",{parentName:"td",href:"https://github.com/RegardsOss/regards-backend/blob/master/rs-dam/dam/dam-domain/src/main/java/fr/cnes/regards/modules/dam/domain/dataaccess/accessright/event/AccessRightEvent.java"},"AccessRightEvent")),(0,s.kt)("td",{parentName:"tr",align:"left"},"ALL"),(0,s.kt)("td",{parentName:"tr",align:"left"},"Broadcast"),(0,s.kt)("td",{parentName:"tr",align:"left"},"Published when for access right creation, modification or deletion")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("a",{parentName:"td",href:"https://github.com/RegardsOss/regards-backend/blob/master/rs-dam/model/model-domain/src/main/java/fr/cnes/regards/modules/model/domain/event/AttributeModelCreated.java"},"AttributeModelCreated")),(0,s.kt)("td",{parentName:"tr",align:"left"},"ALL"),(0,s.kt)("td",{parentName:"tr",align:"left"},"Broadcast"),(0,s.kt)("td",{parentName:"tr",align:"left"},"Published when an attribute is created")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("a",{parentName:"td",href:"https://github.com/RegardsOss/regards-backend/blob/master/rs-dam/model/model-domain/src/main/java/fr/cnes/regards/modules/model/domain/event/AttributeModelDeleted.java"},"AttributeModelDeleted")),(0,s.kt)("td",{parentName:"tr",align:"left"},"ALL"),(0,s.kt)("td",{parentName:"tr",align:"left"},"Broadcast"),(0,s.kt)("td",{parentName:"tr",align:"left"},"Published when an attribute is deleted")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("a",{parentName:"td",href:"https://github.com/RegardsOss/regards-backend/blob/master/rs-dam/model/model-domain/src/main/java/fr/cnes/regards/modules/model/domain/event/FragmentDeletedEvent.java"},"FragmentDeletedEvent")),(0,s.kt)("td",{parentName:"tr",align:"left"},"ALL"),(0,s.kt)("td",{parentName:"tr",align:"left"},"Broadcast"),(0,s.kt)("td",{parentName:"tr",align:"left"},"Published when a fragment is deleted")))))}p.isMDXComponent=!0}}]);