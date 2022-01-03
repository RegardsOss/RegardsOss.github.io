"use strict";(self.webpackChunkRegardsOss_github_io=self.webpackChunkRegardsOss_github_io||[]).push([[64306],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return h}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),h=a,m=d["".concat(s,".").concat(h)]||d[h]||u[h]||i;return n?r.createElement(m,o(o({ref:t},p),{},{components:n})):r.createElement(m,o({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},62358:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return p},default:function(){return d}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),o=["components"],l={id:"appendices-lucene-query",title:"Lucene query format",sidebar_label:"Lucene query format",slug:"/development/appendices/lucene-query/"},s=void 0,c={unversionedId:"development/appendices/appendices-lucene-query",id:"version-1.6.0/development/appendices/appendices-lucene-query",isDocsHomePage:!1,title:"Lucene query format",description:"In order to search into REGARDS catalog the standard API allows you to use a lucene query parser.",source:"@site/versioned_docs/version-1.6.0/development/appendices/create-lucene-query.md",sourceDirName:"development/appendices",slug:"/development/appendices/lucene-query/",permalink:"/docs/1.6.0/development/appendices/lucene-query/",editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/versioned_docs/version-1.6.0/development/appendices/create-lucene-query.md",tags:[],version:"1.6.0",frontMatter:{id:"appendices-lucene-query",title:"Lucene query format",sidebar_label:"Lucene query format",slug:"/development/appendices/lucene-query/"},sidebar:"version-1.6.0/dev",previous:{title:"REGARDS OAIS",permalink:"/docs/1.6.0/development/appendices/oais/"},next:{title:"REGARDS XML Models format",permalink:"/docs/1.6.0/development/appendices/create-model/"}},p=[{value:"String searches",id:"string-searches",children:[]},{value:"Fields",id:"fields",children:[]},{value:"Exclude Searches",id:"exclude-searches",children:[]},{value:"Range Searches",id:"range-searches",children:[]},{value:"Boolean operators",id:"boolean-operators",children:[]},{value:"Escaping special characters",id:"escaping-special-characters",children:[]}],u={toc:p};function d(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"In order to search into REGARDS catalog the standard API allows you to use a lucene query parser.\nTo do so, the ",(0,i.kt)("inlineCode",{parentName:"p"},"q")," query parameter value is parsed with Lucene standard query parser as describe here under."),(0,i.kt)("h3",{id:"string-searches"},"String searches"),(0,i.kt)("p",null,'Lucene is only used for syntax. Value semantic is interpreted thanks to wildcard expressions except for " character. To do exact searches, you have to put " around your value otherwise it will be considered a regular expression.'),(0,i.kt)("p",null,"To use regular expressions you need to wrap your search between '/' caracters as the exemple query here under"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"name:/Jhon [a-zA-Z]/")),(0,i.kt)("h3",{id:"fields"},"Fields"),(0,i.kt)("p",null,"When performing a search you must specify a field (See section parameters above for available fields)."),(0,i.kt)("p",null,'You search to a field by typing the field name followed by a colon ":" and then the term you are looking for.'),(0,i.kt)("p",null,'For example, if you want to find the document entitled "The Right Way" which contains the text "don\'t go this way", you should enter:'),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},'title:"The Right Way" AND text:go')),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Available fields correspond to :"),(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"data model attributes")," (possibly prefixed with ",(0,i.kt)("inlineCode",{parentName:"li"},"properties.")," to avoid potential conflicts)"),(0,i.kt)("li",{parentName:"ul"},"common attributes ",(0,i.kt)("inlineCode",{parentName:"li"},"id"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"label"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"providerId"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"model"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"tags")),(0,i.kt)("li",{parentName:"ul"},"geospatial parameters : ",(0,i.kt)("inlineCode",{parentName:"li"},"g")," for WKT search or ",(0,i.kt)("inlineCode",{parentName:"li"},"lon"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"lat"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"r")," for circle search")))),(0,i.kt)("h3",{id:"exclude-searches"},"Exclude Searches"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},'NOT "Test"')," or ",(0,i.kt)("inlineCode",{parentName:"p"},'label:(NOT "test")')),(0,i.kt)("h3",{id:"range-searches"},"Range Searches"),(0,i.kt)("p",null,"Range Queries allow one to match items whose field(s) values are between the lower and upper bound specified by the Range Query."),(0,i.kt)("p",null,'Range Queries can be inclusive or exclusive of the upper and lower bounds. Inclusive range queries are denoted by square brackets ("','[" and "]','"). Exclusive range queries are denoted by curly brackets ("{" and "}").'),(0,i.kt)("h4",{id:"number"},"Number"),(0,i.kt)("p",null,"The API support range searches on numbers. According to the expected model's attribute type, the value will be parsed as an integer, a double, a long or a float."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"altitude:{0 TO 2000}")),(0,i.kt)("p",null,"This will find all items whose altitude attribute are between 0 and 2000, but not including 0 and 2000."),(0,i.kt)("h4",{id:"date"},"Date"),(0,i.kt)("p",null,"The API supports range searches on dates. The expected date format is a date-time without a time-zone in the ISO-8601 calendar system, such as 2007-12-03T10:15:30."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"date:[2007-12-03T10:15:30 TO 2007-12-03T11:15:30]")),(0,i.kt)("p",null,"This will find items whose date fields have values between 03/12/2007 at 10:15:30 and 03/12/2007 at 11:15:30, inclusive."),(0,i.kt)("h3",{id:"boolean-operators"},"Boolean operators"),(0,i.kt)("p",null,"Boolean operators allow terms to be combined through logic operators."),(0,i.kt)("h4",{id:"or"},"OR"),(0,i.kt)("p",null,"The OR operator is the default conjunction operator. This means that if there is no Boolean operator between two terms, the OR operator is used. The OR operator links two terms and finds a matching document if either of the terms exist in a document. This is equivalent to a union using sets. The symbol ",(0,i.kt)("inlineCode",{parentName:"p"},"||")," can be used in place of the word OR."),(0,i.kt)("p",null,'To search for items which title contain either "uranus" or "neptune" use the query:'),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"title:uranus OR title:neptune")),(0,i.kt)("p",null,"or"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"title:(uranus OR neptune)")),(0,i.kt)("h4",{id:"and"},"AND"),(0,i.kt)("p",null,"The AND operator matches items where both terms exist anywhere in the text of a single document. This is equivalent to an intersection using sets. The symbol ",(0,i.kt)("inlineCode",{parentName:"p"},"&&")," can be used in place of the word AND."),(0,i.kt)("p",null,'To search for items which title contain "uranus" and which author is "neptune" use the query:'),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},'title:"uranus" AND author:"neptune"')),(0,i.kt)("h3",{id:"escaping-special-characters"},"Escaping special characters"),(0,i.kt)("p",null,"The API supports escaping special characters that are part of the query syntax. The current list special characters are :"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},'+ - && || ! ( ) { } [ ] ^ " ~ * ? : \\ /')),(0,i.kt)("p",null,"To escape these character use the \\ before the character. For example to search for (1+1):2 use the query:"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"\\(1\\+1\\)\\:2")))}d.isMDXComponent=!0}}]);