"use strict";(self.webpackChunkregardsoss_github_io=self.webpackChunkregardsoss_github_io||[]).push([[82201],{3905:function(t,e,n){n.d(e,{Zo:function(){return m},kt:function(){return k}});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function d(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var p=a.createContext({}),o=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},m=function(t){var e=o(t.components);return a.createElement(p.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},s=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,m=d(t,["components","mdxType","originalType","parentName"]),s=o(n),k=r,N=s["".concat(p,".").concat(k)]||s[k]||u[k]||l;return n?a.createElement(N,i(i({ref:e},m),{},{components:n})):a.createElement(N,i({ref:e},m))}));function k(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=s;var d={};for(var p in e)hasOwnProperty.call(e,p)&&(d[p]=e[p]);d.originalType=t,d.mdxType="string"==typeof t?t:r,i[1]=d;for(var o=2;o<l;o++)i[o]=n[o];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},95598:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return d},contentTitle:function(){return p},metadata:function(){return o},toc:function(){return m},default:function(){return s}});var a=n(87462),r=n(63366),l=(n(67294),n(3905)),i=["components"],d={id:"frontend-introduction-eslint",title:"REGARDS ESLint rules",sidebar_label:"Lint",slug:"/development/frontend/introduction/eslint/"},p=void 0,o={unversionedId:"development/frontend/frontend-introduction-eslint",id:"version-1.6.0/development/frontend/frontend-introduction-eslint",title:"REGARDS ESLint rules",description:"Presentation",source:"@site/versioned_docs/version-1.6.0/development/frontend/eslint-config-es6-rules.md",sourceDirName:"development/frontend",slug:"/development/frontend/introduction/eslint/",permalink:"/docs/1.6.0/development/frontend/introduction/eslint/",editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/versioned_docs/version-1.6.0/development/frontend/eslint-config-es6-rules.md",tags:[],version:"1.6.0",frontMatter:{id:"frontend-introduction-eslint",title:"REGARDS ESLint rules",sidebar_label:"Lint",slug:"/development/frontend/introduction/eslint/"},sidebar:"version-1.6.0/dev",previous:{title:"Architecture",permalink:"/docs/1.6.0/development/frontend/introduction/architecture/"},next:{title:"Index",permalink:"/docs/1.6.0/development/frontend/introduction/index/"}},m=[{value:"Presentation",id:"presentation",children:[],level:2},{value:"Usage",id:"usage",children:[],level:2},{value:"Imported rules",id:"imported-rules",children:[{value:"eslint rules",id:"eslint-rules",children:[],level:3},{value:"eslint-config-airbnb",id:"eslint-config-airbnb",children:[],level:3},{value:"plugin:react",id:"pluginreact",children:[],level:3},{value:"plugin:react-perf",id:"pluginreact-perf",children:[],level:3},{value:"plugin:lodash",id:"pluginlodash",children:[],level:3},{value:"plugin:promise",id:"pluginpromise",children:[],level:3}],level:2}],u={toc:m};function s(t){var e=t.components,n=(0,r.Z)(t,i);return(0,l.kt)("wrapper",(0,a.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"presentation"},"Presentation"),(0,l.kt)("p",null,"The module ",(0,l.kt)("inlineCode",{parentName:"p"},"@regardsoss/eslint-config-es6-rules")," (webapp/eslint-config-es6-rules/) provides REGARDS' ESLint configuration. It is referenced by root ",(0,l.kt)("inlineCode",{parentName:"p"},"webapp/.eslintrc")," file, which is the root ESLint configuration file for REGARDS front-end project."),(0,l.kt)("h2",{id:"usage"},"Usage"),(0,l.kt)("p",null,"We export here under ESLint configurations for your usage."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"rules package"),(0,l.kt)("th",{parentName:"tr",align:null},"import mode"),(0,l.kt)("th",{parentName:"tr",align:null},"comment"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"eslint"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"recommended")),(0,l.kt)("td",{parentName:"tr",align:null},"Standard Javascript rules provided by eslint")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"eslint-config-airbnb"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"all")),(0,l.kt)("td",{parentName:"tr",align:null},"Additional standard and ES6 Javascript rules")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"plugin:react"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"recommended")),(0,l.kt)("td",{parentName:"tr",align:null},"Specific rules for react library")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"plugin:react-perf"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"recommended")),(0,l.kt)("td",{parentName:"tr",align:null},"Specific good practices rules for react library")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"plugin:lodash"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"recommended")),(0,l.kt)("td",{parentName:"tr",align:null},"Specific rules for lodash library")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"plugin:promise"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"recommended")),(0,l.kt)("td",{parentName:"tr",align:null},"Enforce best practices for JavaScript promises")))),(0,l.kt)("p",null,"To use our configuration package add the code here under to your ",(0,l.kt)("inlineCode",{parentName:"p"},".eslintrc")," configuration file"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "parser": "babel-eslint",\n  "extends": [\n    "@regardsoss/eslint-config-es6-rules"\n  ]\n}\n')),(0,l.kt)("p",null,"You need to add the following dependencies to your package.json : "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "eslint": "^5.9.0",\n  "eslint-config-airbnb": "~17.1.0",\n  "eslint-plugin-import": "~2.14.0",\n  "eslint-plugin-jsx-a11y": "~6.1.2",\n  "eslint-plugin-lodash": "^3.1.0",\n  "eslint-plugin-mocha": "^5.2.0",\n  "eslint-plugin-promise": "^4.0.1",\n  "eslint-plugin-react": "~7.11.1",\n  "eslint-plugin-react-perf": "^2.0.9"\n}\n')),(0,l.kt)("h2",{id:"imported-rules"},"Imported rules"),(0,l.kt)("p",null,"In the next sections you can find for each rules package the custom configuration made for REGARDS project.\nBy default, all rules are imported without modification from each package the references rules here are disabled or modified."),(0,l.kt)("h3",{id:"eslint-rules"},"eslint rules"),(0,l.kt)("p",null,"To see all javascript rules set by eslint : ",(0,l.kt)("a",{parentName:"p",href:"http://eslint.org/docs/rules/"},"http://eslint.org/docs/rules/")),(0,l.kt)("p",null,"Special configuration for eslint rules :"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"rule"),(0,l.kt)("th",{parentName:"tr",align:null},"Configuration"),(0,l.kt)("th",{parentName:"tr",align:null},"comment"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"func-names"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Disabled")),(0,l.kt)("td",{parentName:"tr",align:null},"Allow anonymous functions")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"global-require"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Disabled")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"max-len"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Disabled")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"no-console"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Disabled")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"spaced-comment"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Disabled")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"no-unused-vars"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Activated")),(0,l.kt)("td",{parentName:"tr",align:null},"Do not check arguments. Ignore unused variable on functions arguments")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"no-confusing-arrow"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Disabled")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"no-warning-comments"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Activated")),(0,l.kt)("td",{parentName:"tr",align:null},"Raise a warning if a TODO or FIXME is find in comments")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"semi"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Activated")),(0,l.kt)("td",{parentName:"tr",align:null},"Disallows semicolons as the end of statements (except to disambiguate statements beginning with [, (, /, +, or -)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"no-mixed-operators"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Activated")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"prefer-destructuring"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Activated")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"function-paren-newline"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Disabled")),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("h3",{id:"eslint-config-airbnb"},"eslint-config-airbnb"),(0,l.kt)("p",null,"To see all javascript rules set by eslint-config-airbnb : ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/airbnb/javascript"},"https://github.com/airbnb/javascript")),(0,l.kt)("p",null,"Special configuration for eslint-config-airbnb rules :"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"rule"),(0,l.kt)("th",{parentName:"tr",align:null},"Configuration"),(0,l.kt)("th",{parentName:"tr",align:null},"comment"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"import/no-extraneous-dependencies"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Disabled")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"import/no-named-as-default"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Disabled")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"import/no-named-as-default-member"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Disabled")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"import/prefer-default-export"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Disabled")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"import/named"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Disabled")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"import/no-commonjs"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Activated")),(0,l.kt)("td",{parentName:"tr",align:null},"Prevent the usage of CommonJS, ignore for node")))),(0,l.kt)("h3",{id:"pluginreact"},"plugin:react"),(0,l.kt)("p",null,"To see all javascript rules set by plugin:react : ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/yannickcr/eslint-plugin-react"},"https://github.com/yannickcr/eslint-plugin-react")),(0,l.kt)("p",null,"Special configuration for plugin:react rules :"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"rule"),(0,l.kt)("th",{parentName:"tr",align:null},"Configuration"),(0,l.kt)("th",{parentName:"tr",align:null},"comment"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"prefer-es6-class"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Disabled")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"require-extension"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Disabled")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"require-default-props"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Disabled")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"prefer-stateless-function"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Disabled")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"react/display-name"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Disabled")),(0,l.kt)("td",{parentName:"tr",align:null},"Only detect sipaly names of components during debug")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"jsx-uses-react"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Activated")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"jsx-uses-vars"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Activated")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"react-in-jsx-scope"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Activated")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"jsx-no-undef"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Activated")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"destructuring-assignment"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Disabled")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"jsx-wrap-multilines"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Disabled")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"no-access-state-in-setstate"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Disabled")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"jsx-closing-tag-location"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Disabled")),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("h3",{id:"pluginreact-perf"},"plugin:react-perf"),(0,l.kt)("p",null,"To see all javascript rules set by plugin:react-perf : ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/cvazac/eslint-plugin-react-perf"},"https://github.com/cvazac/eslint-plugin-react-perf")),(0,l.kt)("p",null,"Special configuration for plugin:react-perf rules : None"),(0,l.kt)("h3",{id:"pluginlodash"},"plugin:lodash"),(0,l.kt)("p",null,"To see all javascript rules set by plugin:lodash : ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/wix/eslint-plugin-lodash"},"https://github.com/wix/eslint-plugin-lodash")),(0,l.kt)("p",null,"Special configuration for plugin:lodash rules : "),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"rule"),(0,l.kt)("th",{parentName:"tr",align:null},"Configuration"),(0,l.kt)("th",{parentName:"tr",align:null},"comment"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"import-scope"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Activated")),(0,l.kt)("td",{parentName:"tr",align:null},"For single method imports")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"prefer-noop"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Disabled")),(0,l.kt)("td",{parentName:"tr",align:null},"Disable useless rule (_.noop instead of empty annonnymous function)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"prefer-lodash-method"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Disabled")),(0,l.kt)("td",{parentName:"tr",align:null},"This rule is not satisfying")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"prefer-constant"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Disabled")),(0,l.kt)("td",{parentName:"tr",align:null},"We do not use lodash constants factory")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"prop-shorthand"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Disabled")),(0,l.kt)("td",{parentName:"tr",align:null},"Not so readable")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"matches-prop-shorthand"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Disabled")),(0,l.kt)("td",{parentName:"tr",align:null},"We prefer the explicit declaration")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"no-exclusive-tests"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Activated")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"max-top-level-suites"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Activated")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"handle-done-callback"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Activated")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"no-top-level-hooks"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Activated")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"no-return-and-callback"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Activated")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"no-sibling-hooks"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Activated")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"no-global-tests"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Activated")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"no-hooks-for-single-case"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Disabled")),(0,l.kt)("td",{parentName:"tr",align:null},"All React tests contains before and after whether having 1 or more tests")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"no-mocha-arrows"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Disabled")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"mocha/no-nested-tests"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Activated")),(0,l.kt)("td",{parentName:"tr",align:null},"We do not use mocha context so we can use lambdas")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"mocha/no-skipped-tests"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Activated")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"mocha/no-nested-tests"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Activated")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"mocha/no-identical-title"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Activated")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"mocha/no-synchronous-tests"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Disabled")),(0,l.kt)("td",{parentName:"tr",align:null},"We wrote sync tests")))),(0,l.kt)("h3",{id:"pluginpromise"},"plugin:promise"),(0,l.kt)("p",null,"To see all javascript rules set by plugin:promise : ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/xjamundx/eslint-plugin-promise"},"https://github.com/xjamundx/eslint-plugin-promise")),(0,l.kt)("p",null,"Special configuration for plugin:promise rules : "),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"rule"),(0,l.kt)("th",{parentName:"tr",align:null},"Configuration"),(0,l.kt)("th",{parentName:"tr",align:null},"comment"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"no-callback-in-promise"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Disabled")),(0,l.kt)("td",{parentName:"tr",align:null},"We call done from Mocha inside async tests")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"no-nesting"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Disabled")),(0,l.kt)("td",{parentName:"tr",align:null},"Rule is not adequate without async / await")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"avoid-new"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Disabled")),(0,l.kt)("td",{parentName:"tr",align:null},"This is handy to create custom promises!")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"catch-or-return"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Disabled")),(0,l.kt)("td",{parentName:"tr",align:null},"We do not always return a promise on react component since most of the time nobody consumes them")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"always-return"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Disabled")),(0,l.kt)("td",{parentName:"tr",align:null})))))}s.isMDXComponent=!0}}]);