"use strict";(self.webpackChunkregardsoss_github_io=self.webpackChunkregardsoss_github_io||[]).push([[2952],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return u}});var o=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=o.createContext({}),p=function(e){var n=o.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=p(e.components);return o.createElement(s.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},d=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(t),u=r,f=d["".concat(s,".").concat(u)]||d[u]||m[u]||a;return t?o.createElement(f,i(i({ref:n},c),{},{components:t})):o.createElement(f,i({ref:n},c))}));function u(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=d;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<a;p++)i[p]=t[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}d.displayName="MDXCreateElement"},54097:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return c},default:function(){return d}});var o=t(87462),r=t(63366),a=(t(67294),t(3905)),i=["components"],l={id:"frontend-packages-components",title:"REGARDS components",sidebar_label:"Re-usable components",slug:"/development/frontend/packages/components/"},s=void 0,p={unversionedId:"development/frontend/components/frontend-packages-components",id:"version-1.4.0/development/frontend/components/frontend-packages-components",title:"REGARDS components",description:"Description",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-1.4.0/development/frontend/components/components.md",sourceDirName:"development/frontend/components",slug:"/development/frontend/packages/components/",permalink:"/fr/docs/1.4.0/development/frontend/packages/components/",editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/versioned_docs/version-1.4.0/development/frontend/components/components.md",tags:[],version:"1.4.0",frontMatter:{id:"frontend-packages-components",title:"REGARDS components",sidebar_label:"Re-usable components",slug:"/development/frontend/packages/components/"},sidebar:"version-1.4.0/dev",previous:{title:"Forms",permalink:"/fr/docs/1.4.0/development/frontend/view/forms/"},next:{title:"Overview - Business components",permalink:"/fr/docs/1.4.0/development/frontend/packages/business-components/"}},c=[{value:"Description",id:"description",children:[],level:2},{value:"Usage",id:"usage",children:[],level:2}],m={toc:c};function d(e){var n=e.components,t=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"description"},"Description"),(0,a.kt)("p",null,"The module ",(0,a.kt)("inlineCode",{parentName:"p"},"@regardsoss/components")," provides a set of React components to display widgets, sorted in following categories:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"board : Components to render a board of items where each item is a section with a description and many iconActions."),(0,a.kt)("li",{parentName:"ul"},"buttons : A bunch of buttons"),(0,a.kt)("li",{parentName:"ul"},"cards : Material ui cards related components"),(0,a.kt)("li",{parentName:"ul"},"content : Components related with specific or loadable content (HTML,JSON, Markdown, ...)"),(0,a.kt)("li",{parentName:"ul"},"date : Components to display and pick dates"),(0,a.kt)("li",{parentName:"ul"},"dialogs: Components to display dialog windows"),(0,a.kt)("li",{parentName:"ul"},"error: Error related components"),(0,a.kt)("li",{parentName:"ul"},"feedback: Feedback related components"),(0,a.kt)("li",{parentName:"ul"},"gallery : Components to display images into a gallery allowing an infinite list (pageable system with backend)"),(0,a.kt)("li",{parentName:"ul"},"help: Help related component"),(0,a.kt)("li",{parentName:"ul"},"links : Links and breadcrumb related components"),(0,a.kt)("li",{parentName:"ul"},"list: List and autocomplete fields related components"),(0,a.kt)("li",{parentName:"ul"},"loading: Loading components"),(0,a.kt)("li",{parentName:"ul"},"module : Modules related components. It contains specifically the ",(0,a.kt)("strong",{parentName:"li"},"DynamicModulePane"),", used to display common dynamic modules main pane (provides collapse, title, icons, loading ...)"),(0,a.kt)("li",{parentName:"ul"},"picture : Picture and picture resolution related components"),(0,a.kt)("li",{parentName:"ul"},"plugin : Plugins related components"),(0,a.kt)("li",{parentName:"ul"},"table: Table related components, allowing for infinite list, column selection, sorting..."),(0,a.kt)("li",{parentName:"ul"},"titles: Title related components"),(0,a.kt)("li",{parentName:"ul"},"transitions: Transitions related components and helpers"),(0,a.kt)("li",{parentName:"ul"},"tree-table: Tree table component"),(0,a.kt)("li",{parentName:"ul"},"values : Renderer components by value type (boolean, date, number, range, url, ...)")),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},'import { ConfirmDialogComponent } from \'@regardsoss/components\'\n\nclass SampleComponent extends React.Component {\n   \n   render(){\n      return (\n        <ConfirmDialogComponent\n         title="Confirmation dialog"\n         dialogType={ConfirmDialogComponent.dialogTypes.CONFIRM}\n         message="Are you sure ?"\n         // Callback when confirm is selected\n         onConfirm={ () => {}}\n         // Callback when cancel or close\n         onClose={() => this.setState({opened:false})}\n        />\n       )\n   }\n   \n}\n\n')))}d.isMDXComponent=!0}}]);