(window.webpackJsonp=window.webpackJsonp||[]).push([[453],{2708:function(e,n,t){"use strict";t.d(n,"a",(function(){return m})),t.d(n,"b",(function(){return b}));var o=t(0),r=t.n(o);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=r.a.createContext({}),p=function(e){var n=r.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},m=function(e){var n=p(e.components);return r.a.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},u=r.a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),m=p(t),u=o,b=m["".concat(i,".").concat(u)]||m[u]||d[u]||a;return t?r.a.createElement(b,l(l({ref:n},s),{},{components:t})):r.a.createElement(b,l({ref:n},s))}));function b(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=u;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=t[s];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},528:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return l})),t.d(n,"toc",(function(){return c})),t.d(n,"default",(function(){return p}));var o=t(3),r=t(7),a=(t(0),t(2708)),i={id:"frontend-packages-components",title:"REGARDS components",sidebar_label:"Re-usable components",slug:"/development/frontend/packages/components/"},l={unversionedId:"development/frontend/components/frontend-packages-components",id:"version-1.4.0/development/frontend/components/frontend-packages-components",isDocsHomePage:!1,title:"REGARDS components",description:"Description",source:"@site/versioned_docs/version-1.4.0/development/frontend/components/components.md",slug:"/development/frontend/packages/components/",permalink:"/docs/1.4.0/development/frontend/packages/components/",editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/versioned_docs/version-1.4.0/development/frontend/components/components.md",version:"1.4.0",sidebar_label:"Re-usable components",sidebar:"version-1.4.0/dev",previous:{title:"Redux form",permalink:"/docs/1.4.0/development/frontend/view/forms/"},next:{title:"REGARDS business components",permalink:"/docs/1.4.0/development/frontend/packages/business-components/"}},c=[{value:"Description",id:"description",children:[]},{value:"Usage",id:"usage",children:[]}],s={toc:c};function p(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"description"},"Description"),Object(a.b)("p",null,"The module ",Object(a.b)("inlineCode",{parentName:"p"},"@regardsoss/components")," provides a set of React components to display widgets, sorted in following categories:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"board : Components to render a board of items where each item is a section with a description and many iconActions."),Object(a.b)("li",{parentName:"ul"},"buttons : A bunch of buttons"),Object(a.b)("li",{parentName:"ul"},"cards : Material ui cards related components"),Object(a.b)("li",{parentName:"ul"},"content : Components related with specific or loadable content (HTML,JSON, Markdown, ...)"),Object(a.b)("li",{parentName:"ul"},"date : Components to display and pick dates"),Object(a.b)("li",{parentName:"ul"},"dialogs: Components to display dialog windows"),Object(a.b)("li",{parentName:"ul"},"error: Error related components"),Object(a.b)("li",{parentName:"ul"},"feedback: Feedback related components"),Object(a.b)("li",{parentName:"ul"},"gallery : Components to display images into a gallery allowing an infinite list (pageable system with backend)"),Object(a.b)("li",{parentName:"ul"},"help: Help related component"),Object(a.b)("li",{parentName:"ul"},"links : Links and breadcrumb related components"),Object(a.b)("li",{parentName:"ul"},"list: List and autocomplete fields related components"),Object(a.b)("li",{parentName:"ul"},"loading: Loading components"),Object(a.b)("li",{parentName:"ul"},"module : Modules related components. It contains specifically the ",Object(a.b)("strong",{parentName:"li"},"DynamicModulePane"),", used to display common dynamic modules main pane (provides collapse, title, icons, loading ...)"),Object(a.b)("li",{parentName:"ul"},"picture : Picture and picture resolution related components"),Object(a.b)("li",{parentName:"ul"},"plugin : Plugins related components"),Object(a.b)("li",{parentName:"ul"},"table: Table related components, allowing for infinite list, column selection, sorting..."),Object(a.b)("li",{parentName:"ul"},"titles: Title related components"),Object(a.b)("li",{parentName:"ul"},"transitions: Transitions related components and helpers"),Object(a.b)("li",{parentName:"ul"},"tree-table: Tree table component"),Object(a.b)("li",{parentName:"ul"},"values : Renderer components by value type (boolean, date, number, range, url, ...)")),Object(a.b)("h2",{id:"usage"},"Usage"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-jsx"},'import { ConfirmDialogComponent } from \'@regardsoss/components\'\n\nclass SampleComponent extends React.Component {\n   \n   render(){\n      return (\n        <ConfirmDialogComponent\n         title="Confirmation dialog"\n         dialogType={ConfirmDialogComponent.dialogTypes.CONFIRM}\n         message="Are you sure ?"\n         // Callback when confirm is selected\n         onConfirm={ () => {}}\n         // Callback when cancel or close\n         onClose={() => this.setState({opened:false})}\n        />\n       )\n   }\n   \n}\n\n')))}p.isMDXComponent=!0}}]);