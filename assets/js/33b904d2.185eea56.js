"use strict";(self.webpackChunkregardsoss_github_io=self.webpackChunkregardsoss_github_io||[]).push([[96617],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(n),h=a,m=c["".concat(s,".").concat(h)]||c[h]||d[h]||i;return n?r.createElement(m,o(o({ref:t},u),{},{components:n})):r.createElement(m,o({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},36775:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const i={id:"appendices-lucene-query",title:"Lucene query format",sidebar_label:"Lucene query format",slug:"/development/appendices/lucene-query/"},o=void 0,l={unversionedId:"development/appendices/appendices-lucene-query",id:"version-1.14/development/appendices/appendices-lucene-query",title:"Lucene query format",description:"In order to search into REGARDS catalog the standard API allows you to use a lucene query parser.",source:"@site/versioned_docs/version-1.14/development/appendices/create-lucene-query.md",sourceDirName:"development/appendices",slug:"/development/appendices/lucene-query/",permalink:"/docs/1.14/development/appendices/lucene-query/",draft:!1,editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/versioned_docs/version-1.14/development/appendices/create-lucene-query.md",tags:[],version:"1.14",frontMatter:{id:"appendices-lucene-query",title:"Lucene query format",sidebar_label:"Lucene query format",slug:"/development/appendices/lucene-query/"},sidebar:"dev",previous:{title:"REGARDS OAIS",permalink:"/docs/1.14/development/appendices/oais/"},next:{title:"REGARDS XML Models format",permalink:"/docs/1.14/development/appendices/create-model/"}},s={},p=[{value:"String searches",id:"string-searches",level:3},{value:"Fields",id:"fields",level:3},{value:"Exclude Searches",id:"exclude-searches",level:3},{value:"Range Searches",id:"range-searches",level:3},{value:"Number",id:"number",level:4},{value:"Date",id:"date",level:4},{value:"Boolean operators",id:"boolean-operators",level:3},{value:"OR",id:"or",level:4},{value:"AND",id:"and",level:4},{value:"Escaping special characters",id:"escaping-special-characters",level:3},{value:"Testing existence",id:"testing-existence",level:3}],u={toc:p},c="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"In order to search into REGARDS catalog the standard API allows you to use a lucene query parser.\nTo do so, the ",(0,a.kt)("inlineCode",{parentName:"p"},"q")," query parameter value is parsed with Lucene standard query parser as describe here under."),(0,a.kt)("h3",{id:"string-searches"},"String searches"),(0,a.kt)("p",null,'Lucene is only used for syntax. Value semantic is interpreted thanks to wildcard expressions except for " character. To do exact searches, you have to put " around your value otherwise it will be considered a regular expression.'),(0,a.kt)("p",null,"To use regular expressions you need to wrap your search between '/' caracters as the exemple query here under"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"name:/Jhon [a-zA-Z]/")),(0,a.kt)("h3",{id:"fields"},"Fields"),(0,a.kt)("p",null,"When performing a search you must specify a field (See section parameters above for available fields)."),(0,a.kt)("p",null,'You search to a field by typing the field name followed by a colon ":" and then the term you are looking for.'),(0,a.kt)("p",null,'For example, if you want to find the document entitled "The Right Way" which contains the text "don\'t go this way", you should enter:'),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},'title:"The Right Way" AND text:go')),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Available fields correspond to :"),(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"data model attributes")," (possibly prefixed with ",(0,a.kt)("inlineCode",{parentName:"li"},"properties.")," to avoid potential conflicts)"),(0,a.kt)("li",{parentName:"ul"},"common attributes ",(0,a.kt)("inlineCode",{parentName:"li"},"id"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"label"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"providerId"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"model"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"tags")),(0,a.kt)("li",{parentName:"ul"},"geospatial parameters : ",(0,a.kt)("inlineCode",{parentName:"li"},"g")," for WKT search or ",(0,a.kt)("inlineCode",{parentName:"li"},"lon"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"lat"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"r")," for circle search"))),(0,a.kt)("h3",{id:"exclude-searches"},"Exclude Searches"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},'NOT "Test"')," or ",(0,a.kt)("inlineCode",{parentName:"p"},'label:(NOT "test")')),(0,a.kt)("h3",{id:"range-searches"},"Range Searches"),(0,a.kt)("p",null,"Range Queries allow one to match items whose field(s) values are between the lower and upper bound specified by the Range Query."),(0,a.kt)("p",null,'Range Queries can be inclusive or exclusive of the upper and lower bounds. Inclusive range queries are denoted by square brackets ("','[" and "]','"). Exclusive range queries are denoted by curly brackets ("{" and "}").'),(0,a.kt)("h4",{id:"number"},"Number"),(0,a.kt)("p",null,"The API support range searches on numbers. According to the expected model's attribute type, the value will be parsed as an integer, a double, a long or a float."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"altitude:{0 TO 2000}")),(0,a.kt)("p",null,"This will find all items whose altitude attribute are between 0 and 2000, but not including 0 and 2000."),(0,a.kt)("h4",{id:"date"},"Date"),(0,a.kt)("p",null,"The API supports range searches on dates. The expected date format is a date-time without a time-zone in the ISO-8601 calendar system, such as 2007-12-03T10:15:30."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"date:[2007-12-03T10:15:30 TO 2007-12-03T11:15:30]")),(0,a.kt)("p",null,"This will find items whose date fields have values between 03/12/2007 at 10:15:30 and 03/12/2007 at 11:15:30, inclusive."),(0,a.kt)("h3",{id:"boolean-operators"},"Boolean operators"),(0,a.kt)("p",null,"Boolean operators allow terms to be combined through logic operators."),(0,a.kt)("h4",{id:"or"},"OR"),(0,a.kt)("p",null,"The OR operator is the default conjunction operator. This means that if there is no Boolean operator between two terms, the OR operator is used. The OR operator links two terms and finds a matching document if either of the terms exist in a document. This is equivalent to a union using sets. The symbol ",(0,a.kt)("inlineCode",{parentName:"p"},"||")," can be used in place of the word OR."),(0,a.kt)("p",null,'To search for items which title contain either "uranus" or "neptune" use the query:'),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"title:uranus OR title:neptune")),(0,a.kt)("p",null,"or"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"title:(uranus OR neptune)")),(0,a.kt)("h4",{id:"and"},"AND"),(0,a.kt)("p",null,"The AND operator matches items where both terms exist anywhere in the text of a single document. This is equivalent to an intersection using sets. The symbol ",(0,a.kt)("inlineCode",{parentName:"p"},"&&")," can be used in place of the word AND."),(0,a.kt)("p",null,'To search for items which title contain "uranus" and which author is "neptune" use the query:'),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},'title:"uranus" AND author:"neptune"')),(0,a.kt)("h3",{id:"escaping-special-characters"},"Escaping special characters"),(0,a.kt)("p",null,"The API supports escaping special characters that are part of the query syntax. The current list special characters are :"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},'+ - && || ! ( ) { } [ ] ^ " ~ * ? : \\ /')),(0,a.kt)("p",null,"To escape these character use the \\ before the character. For example to search for (1+1):2 use the query:"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"\\(1\\+1\\)\\:2")),(0,a.kt)("h3",{id:"testing-existence"},"Testing existence"),(0,a.kt)("p",null,"In order to test if a field exists, you can use ",(0,a.kt)("inlineCode",{parentName:"p"},"/.*/"),". For exemple:",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("inlineCode",{parentName:"p"},"title:/.*/")))}d.isMDXComponent=!0}}]);