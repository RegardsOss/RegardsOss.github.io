"use strict";(self.webpackChunkregardsoss_github_io=self.webpackChunkregardsoss_github_io||[]).push([[14256],{95788:(e,n,t)=>{t.d(n,{Iu:()=>c,yg:()=>g});var o=t(11504);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i=o.createContext({}),p=function(e){var n=o.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=p(e.components);return o.createElement(i.Provider,{value:n},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},u=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(t),u=r,g=m["".concat(i,".").concat(u)]||m[u]||d[u]||a;return t?o.createElement(g,l(l({ref:n},c),{},{components:t})):o.createElement(g,l({ref:n},c))}));function g(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,l=new Array(a);l[0]=u;var s={};for(var i in n)hasOwnProperty.call(n,i)&&(s[i]=n[i]);s.originalType=e,s[m]="string"==typeof e?e:r,l[1]=s;for(var p=2;p<a;p++)l[p]=t[p];return o.createElement.apply(null,l)}return o.createElement.apply(null,t)}u.displayName="MDXCreateElement"},73960:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var o=t(45072),r=(t(11504),t(95788));const a={id:"frontend-packages-components",title:"REGARDS components",sidebar_label:"Re-usable components",slug:"/development/frontend/packages/components/"},l=void 0,s={unversionedId:"development/frontend/components/frontend-packages-components",id:"version-1.11.0/development/frontend/components/frontend-packages-components",title:"REGARDS components",description:"Description",source:"@site/versioned_docs/version-1.11.0/development/frontend/components/components.md",sourceDirName:"development/frontend/components",slug:"/development/frontend/packages/components/",permalink:"/docs/1.11.0/development/frontend/packages/components/",draft:!1,editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/versioned_docs/version-1.11.0/development/frontend/components/components.md",tags:[],version:"1.11.0",frontMatter:{id:"frontend-packages-components",title:"REGARDS components",sidebar_label:"Re-usable components",slug:"/development/frontend/packages/components/"},sidebar:"dev",previous:{title:"Forms",permalink:"/docs/1.11.0/development/frontend/view/forms/"},next:{title:"Overview - Business components",permalink:"/docs/1.11.0/development/frontend/packages/business-components/"}},i={},p=[{value:"Description",id:"description",level:2},{value:"Usage",id:"usage",level:2}],c={toc:p},m="wrapper";function d(e){let{components:n,...t}=e;return(0,r.yg)(m,(0,o.c)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"description"},"Description"),(0,r.yg)("p",null,"The module ",(0,r.yg)("inlineCode",{parentName:"p"},"@regardsoss/components")," provides a set of React components to display widgets, sorted in following categories:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"board : Components to render a board of items where each item is a section with a description and many iconActions."),(0,r.yg)("li",{parentName:"ul"},"buttons : A bunch of buttons"),(0,r.yg)("li",{parentName:"ul"},"cards : Material ui cards related components"),(0,r.yg)("li",{parentName:"ul"},"content : Components related with specific or loadable content (HTML,JSON, Markdown, ...)"),(0,r.yg)("li",{parentName:"ul"},"date : Components to display and pick dates"),(0,r.yg)("li",{parentName:"ul"},"dialogs: Components to display dialog windows"),(0,r.yg)("li",{parentName:"ul"},"error: Error related components"),(0,r.yg)("li",{parentName:"ul"},"feedback: Feedback related components"),(0,r.yg)("li",{parentName:"ul"},"gallery : Components to display images into a gallery allowing an infinite list (pageable system with backend)"),(0,r.yg)("li",{parentName:"ul"},"help: Help related component"),(0,r.yg)("li",{parentName:"ul"},"links : Links and breadcrumb related components"),(0,r.yg)("li",{parentName:"ul"},"list: List and autocomplete fields related components"),(0,r.yg)("li",{parentName:"ul"},"loading: Loading components"),(0,r.yg)("li",{parentName:"ul"},"module : Modules related components. It contains specifically the ",(0,r.yg)("strong",{parentName:"li"},"DynamicModulePane"),", used to display common dynamic modules main pane (provides collapse, title, icons, loading ...)"),(0,r.yg)("li",{parentName:"ul"},"picture : Picture and picture resolution related components"),(0,r.yg)("li",{parentName:"ul"},"plugin : Plugins related components"),(0,r.yg)("li",{parentName:"ul"},"table: Table related components, allowing for infinite list, column selection, sorting..."),(0,r.yg)("li",{parentName:"ul"},"titles: Title related components"),(0,r.yg)("li",{parentName:"ul"},"transitions: Transitions related components and helpers"),(0,r.yg)("li",{parentName:"ul"},"tree-table: Tree table component"),(0,r.yg)("li",{parentName:"ul"},"values : Renderer components by value type (boolean, date, number, range, url, ...)")),(0,r.yg)("h2",{id:"usage"},"Usage"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-jsx"},'import { ConfirmDialogComponent } from \'@regardsoss/components\'\n\nclass SampleComponent extends React.Component {\n   \n   render(){\n      return (\n        <ConfirmDialogComponent\n         title="Confirmation dialog"\n         dialogType={ConfirmDialogComponent.dialogTypes.CONFIRM}\n         message="Are you sure ?"\n         // Callback when confirm is selected\n         onConfirm={ () => {}}\n         // Callback when cancel or close\n         onClose={() => this.setState({opened:false})}\n        />\n       )\n   }\n   \n}\n\n')))}d.isMDXComponent=!0}}]);