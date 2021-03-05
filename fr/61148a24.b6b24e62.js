(window.webpackJsonp=window.webpackJsonp||[]).push([[1008],{1078:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(7),o=(n(0),n(2699)),i={id:"frontend-introduction-index",title:"How to develop new features",sidebar_label:"Index",slug:"/development/frontend/introduction/index"},l={unversionedId:"development/frontend/frontend-introduction-index",id:"development/frontend/frontend-introduction-index",isDocsHomePage:!1,title:"How to develop new features",description:"Below stands an ordered list of pages to be read by new REGARDS developers to get started and acquire basic knowledge about REGARDS frontend design principles.",source:"@site/docs/development/frontend/developers-index.md",slug:"/development/frontend/introduction/index",permalink:"/fr/docs/development/frontend/introduction/index",editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/docs/development/frontend/developers-index.md",version:"current",sidebar_label:"Index",sidebar:"dev",previous:{title:"REGARDS ESLint rules",permalink:"/fr/docs/development/frontend/introduction/eslint"},next:{title:"REGARDS UI data",permalink:"/fr/docs/development/frontend/data/ui-data"}},c=[],d={toc:c};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Below stands an ordered list of pages to be read by new REGARDS developers to get started and acquire basic knowledge about REGARDS frontend design principles."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"setup"},"Getting started")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"ide"},"Setting up an IDE")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"architecture"},"Read about general principles")," "),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"../packages/components"},"Read about REGARDS re-usable components")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"../packages/business-components"},"Read about REGARDS business components")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"../data/ui-data"},"Understand data and requests management")," "),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"../data/clients"},"Request backend data")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"../view/international"},"Internationalize messages")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"../view/theme"},"Use and manage theme")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"../view/forms"},"Create forms")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"../packages/lazy-modules"},"Develop dynamic modules")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"../plugins"},"Develop plugins")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"eslint"},"Understand code lint"))))}p.isMDXComponent=!0},2699:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=a.a.createContext({}),p=function(e){var t=a.a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=p(e.components);return a.a.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),s=p(n),b=r,m=s["".concat(i,".").concat(b)]||s[b]||u[b]||o;return n?a.a.createElement(m,l(l({ref:t},d),{},{components:n})):a.a.createElement(m,l({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=b;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var d=2;d<o;d++)i[d]=n[d];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);