"use strict";(self.webpackChunkregardsoss_github_io=self.webpackChunkregardsoss_github_io||[]).push([[56085],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(n),m=o,h=c["".concat(s,".").concat(m)]||c[m]||d[m]||r;return n?a.createElement(h,i(i({ref:t},u),{},{components:n})):a.createElement(h,i({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<r;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},98428:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var a=n(87462),o=(n(67294),n(3905));const r={id:"frontend-configuration-layout",title:"REGARDS layout configuration",sidebar_label:"Layout configuration",slug:"/development/frontend/configuration/layout/"},i=void 0,l={unversionedId:"development/frontend/frontend-configuration-layout",id:"version-1.5.0/development/frontend/frontend-configuration-layout",title:"REGARDS layout configuration",description:"1. How does layout work?",source:"@site/versioned_docs/version-1.5.0/development/frontend/layout-configuration.md",sourceDirName:"development/frontend",slug:"/development/frontend/configuration/layout/",permalink:"/docs/1.5.0/development/frontend/configuration/layout/",draft:!1,editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/versioned_docs/version-1.5.0/development/frontend/layout-configuration.md",tags:[],version:"1.5.0",frontMatter:{id:"frontend-configuration-layout",title:"REGARDS layout configuration",sidebar_label:"Layout configuration",slug:"/development/frontend/configuration/layout/"},sidebar:"version-1.5.0/dev",previous:{title:"Services",permalink:"/docs/1.5.0/development/frontend/plugins/service/"},next:{title:"Overview",permalink:"/docs/1.5.0/development/tutorials/overview/"}},s={},p=[{value:"1. How does layout work?",id:"1-how-does-layout-work",level:2},{value:"2. How to configure layout?",id:"2-how-to-configure-layout",level:2},{value:"2.1 Container name",id:"21-container-name",level:3},{value:"2.2 Container type",id:"22-container-type",level:3},{value:"2.3 Main container option",id:"23-main-container-option",level:3},{value:"2.4 Container advanced options",id:"24-container-advanced-options",level:3},{value:"2.4.1 Classes CSS",id:"241-classes-css",level:3},{value:"2.4.2 Styles CSS",id:"242-styles-css",level:3},{value:"3. Default layout",id:"3-default-layout",level:2},{value:"4. Example: a layout with a fixed (floating) header",id:"4-example-a-layout-with-a-fixed-floating-header",level:2},{value:"4.1 Set up the top header as floating",id:"41-set-up-the-top-header-as-floating",level:3},{value:"4.2 Space the page content",id:"42-space-the-page-content",level:3}],u={toc:p};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"1-how-does-layout-work"},"1. How does layout work?"),(0,o.kt)("p",null,"In REGARDS, the layout is configured on a per project basis. That means each new project - or tenant - comes with the default layout, see section below."),(0,o.kt)("p",null,"There are two types of container:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Static containers"),", they can be used to display ",(0,o.kt)("strong",{parentName:"li"},"sub containers")," or ",(0,o.kt)("strong",{parentName:"li"},"static content"),", ie REGARDS modules that are visible on all the project pages."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Dynamic container"),", or ",(0,o.kt)("strong",{parentName:"li"},"main container"),", that display thes page content. ",(0,o.kt)("em",{parentName:"li"},"Please note that dynamic container is unique in a project layout and must be defined."))),(0,o.kt)("p",null,"Let's take an example. We would like to have a page showing some HTML in header, some HTML in footer and the search catalog module as main content. To build such page, we would need:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"One static container for header. Let's name it my-header-container"),(0,o.kt)("li",{parentName:"ul"},"One static container for footer. Let's name it my-footer-container"),(0,o.kt)("li",{parentName:"ul"},"The main container for search-catalog module. Let's name it my-content-container")),(0,o.kt)("p",null,"Then in modules configuration, we could configure three new modules:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"One Embedded HTML module for header, linked with my-header-container"),(0,o.kt)("li",{parentName:"ul"},"One Embedded HTML module for footer, linked with my-footer-container"),(0,o.kt)("li",{parentName:"ul"},"One Search results module for page content, linked with my-content-container")),(0,o.kt)("p",null,"It is important to understand here that, ",(0,o.kt)("em",{parentName:"p"},"when defining a module linked with the single main container, we declare indeed a dynamic module"),". In REGARDS, ",(0,o.kt)("strong",{parentName:"p"},"each dynamic module will have its own page in project website"),". On the other hand, ",(0,o.kt)("em",{parentName:"p"},"when defining a module linked with a static container"),", it will be available ",(0,o.kt)("strong",{parentName:"p"},"on every page of the project website, but will have no corresponding page"),"."),(0,o.kt)("h2",{id:"2-how-to-configure-layout"},"2. How to configure layout?"),(0,o.kt)("p",null,"User application layout can be accessed through REGARDS project administration interface, in ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"User Interface / Layout"))," - or at URL ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"(server)/admin/(project)/ui/layout/user"))),(0,o.kt)("p",null,"The form shows every container currently defined. Three dotted menu on right offers the options ",(0,o.kt)("strong",{parentName:"p"},"'edit'"),", ",(0,o.kt)("strong",{parentName:"p"},"'delete'")," and ",(0,o.kt)("strong",{parentName:"p"},"'add a sub-section'")," - except for root container that cannot be deleted. The containers are displayed in a 'preview-like' way - the container name will not be displayed on user application."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Note: default layout will be discussed in a later section.")),(0,o.kt)("p",null,"When editing a container, ",(0,o.kt)("strong",{parentName:"p"},"name"),", ",(0,o.kt)("strong",{parentName:"p"},"type"),", ",(0,o.kt)("strong",{parentName:"p"},"'main container")," and ",(0,o.kt)("strong",{parentName:"p"},"advanced options")," are available - except once again for root container that is fixed by configuration. We will detail those elements in next sub sections"),(0,o.kt)("h3",{id:"21-container-name"},"2.1 Container name"),(0,o.kt)("p",null,"The container name is defined when creating a new container - using parent container menu option ",(0,o.kt)("em",{parentName:"p"},"add a sub-section"),". It ",(0,o.kt)("em",{parentName:"p"},"cannot be modified after creation"),"."),(0,o.kt)("h3",{id:"22-container-type"},"2.2 Container type"),(0,o.kt)("p",null,"The container type defines the layout for container and sub elements. ",(0,o.kt)("em",{parentName:"p"},"It corresponds only to CSS presets for the container and can be overriden or completed at any moment in HTML styles"),":"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Row"),": A simple row container that spans all the available horizontal width. Best used in a parent flex box (can be used in root container)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Growing row"),": Similar to row but also attempts to span vertically. Best used in a parent flex box (can be used in root container)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"100% width column"),": Renders similar to a simple row, but uses the bootstrap reactive columns layout. Can be placed in any parent container type"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"75% width column"),": Same but uses only 75% width"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"50% width column"),": Same but uses only 50% width"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"25% width column"),": Same but uses only 25% width")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Note about columns using the percent width: The bootstrap layout is able to place mutiple columns on one line, like, for instance two columns 25% wide and one 50% wide. It will automatically create a new line when 100% is exceeded.")),(0,o.kt)("p",null,"Some static containers can be created only as a layout for sub containers using that specificity (like it is the case for user-app-root)."),(0,o.kt)("h3",{id:"23-main-container-option"},"2.3 Main container option"),(0,o.kt)("p",null,"This option allow defining the layout main container - also called dynamic modules container. Keep in mind that there must be one and only one main container. Therefore when ticking the box, the previous main container will be converted into a static container - that operation is not destructive however and can be easily reversed."),(0,o.kt)("h3",{id:"24-container-advanced-options"},"2.4 Container advanced options"),(0,o.kt)("h3",{id:"241-classes-css"},"2.4.1 Classes CSS"),(0,o.kt)("p",null,"That field should contain the CSS classes - none by default - that applies to the container as strings separated by a blank space."),(0,o.kt)("p",null,"*For instance, a valid field value could be ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"my-class1 my-title"),"*")),(0,o.kt)("h3",{id:"242-styles-css"},"2.4.2 Styles CSS"),(0,o.kt)("p",null,"That field contains the styles that should apply to the container. Please note that ",(0,o.kt)("strong",{parentName:"p"},"those styles are entered in JSON notation, using React fields"),", that's to say:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The object is a JSon object and not a CSS notation object"),(0,o.kt)("li",{parentName:"ul"},"The dash symbols ",(0,o.kt)("strong",{parentName:"li"},"-")," should be removed and the next word first letter should be capitalized"),(0,o.kt)("li",{parentName:"ul"},"Values like colors and number with size - like 3% or 22px -  should be placed in quotes symbols ",(0,o.kt)("strong",{parentName:"li"},'"'),". Note that it is not required for single numbers")),(0,o.kt)("p",null,"For instance, next value would be valid:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{ \n  "lineHeight": 1.5, \n  "height": "25px", \n  "background": "red", \n  "color": "#F0F0FFO" \n}\n')),(0,o.kt)("h2",{id:"3-default-layout"},"3. Default layout"),(0,o.kt)("p",null,"The default project layout comes with the following containers:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("em",{parentName:"li"},"user-app-root"),": The root container of user application, previously named ",(0,o.kt)("em",{parentName:"li"},"user")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("em",{parentName:"li"},"page-top-header"),": A static container to lay out header content (top), might be used to show a floating header - see later section, previously named ",(0,o.kt)("em",{parentName:"li"},"header"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("em",{parentName:"li"},"page-sub-header"),": A static container to lay out sub header or page scrollable header when top header is floating, previously named ",(0,o.kt)("em",{parentName:"li"},"static-content"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("em",{parentName:"li"},"page-content-module"),": The default main container to show page dynamic module, previously named ",(0,o.kt)("em",{parentName:"li"},"dynamic-content")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("em",{parentName:"li"},"page-footer"),": A static container to lay out page footer, previously named ",(0,o.kt)("em",{parentName:"li"},"footer"))),(0,o.kt)("p",null,"Within the root container, subcontainers are layed out vertically (they use the row layout type by default)"),(0,o.kt)("h2",{id:"4-example-a-layout-with-a-fixed-floating-header"},"4. Example: a layout with a fixed (floating) header"),(0,o.kt)("p",null,"We will demonstrate here how to fix the top header in a REGARDS project."),(0,o.kt)("h3",{id:"41-set-up-the-top-header-as-floating"},"4.1 Set up the top header as floating"),(0,o.kt)("p",null,"In layout configuration (default one), edit the top header (called header in v1 version and page-top-header in v1.1+ version)."),(0,o.kt)("p",null,"Open advanced options and paste the following styles, that indicates the header should remain above page when it scrolls (and span horizontally)."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "width": "100%",\n  "position": "fixed",\n  "zIndex": 100\n}\n')),(0,o.kt)("p",null,"Click the update button. As you can see, the layout is updated (and the root container may be hidden below the edited component)."),(0,o.kt)("h3",{id:"42-space-the-page-content"},"4.2 Space the page content"),(0,o.kt)("p",null,"In current state, the first container after top header would be hidden in user app - static-content (v1) / page-top-header (v1.1+). To correct that, click edit on that container and paste the following styles. Note that the margin to apply depends on your project styles, as ",(0,o.kt)("em",{parentName:"p"},"it must be greater or equal to the header height")," to avoid hiding page content pixels:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "marginTop": "49px"\n}\n')),(0,o.kt)("p",null,"Click update then click save on layout page bottom. Open the user app - or refresh it - and check everything is fine."))}d.isMDXComponent=!0}}]);