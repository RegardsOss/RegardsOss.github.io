(window.webpackJsonp=window.webpackJsonp||[]).push([[282],{2704:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var a=n(0),o=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),p=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},b=function(e){var t=p(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),b=p(n),d=a,m=b["".concat(i,".").concat(d)]||b[d]||u[d]||r;return n?o.a.createElement(m,l(l({ref:t},s),{},{components:n})):o.a.createElement(m,l({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<r;s++)i[s]=n[s];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},352:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return p}));var a=n(3),o=n(7),r=(n(0),n(2704)),i={id:"frontend-configuration-layout",title:"REGARDS layout configuration",sidebar_label:"Layout configuration",slug:"/development/frontend/configuration/layout/"},l={unversionedId:"development/frontend/frontend-configuration-layout",id:"development/frontend/frontend-configuration-layout",isDocsHomePage:!1,title:"REGARDS layout configuration",description:"1. How does layout work?",source:"@site/docs/development/frontend/layout-configuration.md",slug:"/development/frontend/configuration/layout/",permalink:"/fr/docs/development/frontend/configuration/layout/",editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/docs/development/frontend/layout-configuration.md",version:"current",sidebar_label:"Layout configuration",sidebar:"dev",previous:{title:"Plugin service",permalink:"/fr/docs/development/frontend/plugins/service/"},next:{title:"Tutorials",permalink:"/fr/docs/development/tutorials/overview/"}},c=[{value:"1. How does layout work?",id:"1-how-does-layout-work",children:[]},{value:"2. How to configure layout?",id:"2-how-to-configure-layout",children:[{value:"2.1 Container name",id:"21-container-name",children:[]},{value:"2.2 Container type",id:"22-container-type",children:[]},{value:"2.3 Main container option",id:"23-main-container-option",children:[]},{value:"2.4 Container advanced options",id:"24-container-advanced-options",children:[]},{value:"2.4.1 Classes CSS",id:"241-classes-css",children:[]},{value:"2.4.2 Styles CSS",id:"242-styles-css",children:[]}]},{value:"3. Default layout",id:"3-default-layout",children:[]},{value:"4. Example: a layout with a fixed (floating) header",id:"4-example-a-layout-with-a-fixed-floating-header",children:[{value:"4.1 Set up the top header as floating",id:"41-set-up-the-top-header-as-floating",children:[]},{value:"4.2 Space the page content",id:"42-space-the-page-content",children:[]}]}],s={toc:c};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"1-how-does-layout-work"},"1. How does layout work?"),Object(r.b)("p",null,"In REGARDS, the layout is configured on a per project basis. That means each new project - or tenant - comes with the default layout, see section below."),Object(r.b)("p",null,"There are two types of container:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Static containers"),", they can be used to display ",Object(r.b)("strong",{parentName:"li"},"sub containers")," or ",Object(r.b)("strong",{parentName:"li"},"static content"),", ie REGARDS modules that are visible on all the project pages."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Dynamic container"),", or ",Object(r.b)("strong",{parentName:"li"},"main container"),", that display thes page content. ",Object(r.b)("em",{parentName:"li"},"Please note that dynamic container is unique in a project layout and must be defined."))),Object(r.b)("p",null,"Let's take an example. We would like to have a page showing some HTML in header, some HTML in footer and the search catalog module as main content. To build such page, we would need:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"One static container for header. Let's name it my-header-container"),Object(r.b)("li",{parentName:"ul"},"One static container for footer. Let's name it my-footer-container"),Object(r.b)("li",{parentName:"ul"},"The main container for search-catalog module. Let's name it my-content-container")),Object(r.b)("p",null,"Then in modules configuration, we could configure three new modules:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"One Embedded HTML module for header, linked with my-header-container"),Object(r.b)("li",{parentName:"ul"},"One Embedded HTML module for footer, linked with my-footer-container"),Object(r.b)("li",{parentName:"ul"},"One Search results module for page content, linked with my-content-container")),Object(r.b)("p",null,"It is important to understand here that, ",Object(r.b)("em",{parentName:"p"},"when defining a module linked with the single main container, we declare indeed a dynamic module"),". In REGARDS, ",Object(r.b)("strong",{parentName:"p"},"each dynamic module will have its own page in project website"),". On the other hand, ",Object(r.b)("em",{parentName:"p"},"when defining a module linked with a static container"),", it will be available ",Object(r.b)("strong",{parentName:"p"},"on every page of the project website, but will have no corresponding page"),"."),Object(r.b)("h2",{id:"2-how-to-configure-layout"},"2. How to configure layout?"),Object(r.b)("p",null,"User application layout can be accessed through REGARDS project administration interface, in ",Object(r.b)("strong",{parentName:"p"},Object(r.b)("inlineCode",{parentName:"strong"},"User Interface / Layout"))," - or at URL ",Object(r.b)("strong",{parentName:"p"},Object(r.b)("inlineCode",{parentName:"strong"},"(server)/admin/(project)/ui/layout/user"))),Object(r.b)("p",null,"The form shows every container currently defined. Three dotted menu on right offers the options ",Object(r.b)("strong",{parentName:"p"},"'edit'"),", ",Object(r.b)("strong",{parentName:"p"},"'delete'")," and ",Object(r.b)("strong",{parentName:"p"},"'add a sub-section'")," - except for root container that cannot be deleted. The containers are displayed in a 'preview-like' way - the container name will not be displayed on user application."),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Note: default layout will be discussed in a later section.")),Object(r.b)("p",null,"When editing a container, ",Object(r.b)("strong",{parentName:"p"},"name"),", ",Object(r.b)("strong",{parentName:"p"},"type"),", ",Object(r.b)("strong",{parentName:"p"},"'main container")," and ",Object(r.b)("strong",{parentName:"p"},"advanced options")," are available - except once again for root container that is fixed by configuration. We will detail those elements in next sub sections"),Object(r.b)("h3",{id:"21-container-name"},"2.1 Container name"),Object(r.b)("p",null,"The container name is defined when creating a new container - using parent container menu option ",Object(r.b)("em",{parentName:"p"},"add a sub-section"),". It ",Object(r.b)("em",{parentName:"p"},"cannot be modified after creation"),"."),Object(r.b)("h3",{id:"22-container-type"},"2.2 Container type"),Object(r.b)("p",null,"The container type defines the layout for container and sub elements. ",Object(r.b)("em",{parentName:"p"},"It corresponds only to CSS presets for the container and can be overriden or completed at any moment in HTML styles"),":"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Row"),": A simple row container that spans all the available horizontal width. Best used in a parent flex box (can be used in root container)"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Growing row"),": Similar to row but also attempts to span vertically. Best used in a parent flex box (can be used in root container)"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"100% width column"),": Renders similar to a simple row, but uses the bootstrap reactive columns layout. Can be placed in any parent container type"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"75% width column"),": Same but uses only 75% width"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"50% width column"),": Same but uses only 50% width"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"25% width column"),": Same but uses only 25% width")),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Note about columns using the percent width: The bootstrap layout is able to place mutiple columns on one line, like, for instance two columns 25% wide and one 50% wide. It will automatically create a new line when 100% is exceeded.")),Object(r.b)("p",null,"Some static containers can be created only as a layout for sub containers using that specificity (like it is the case for user-app-root)."),Object(r.b)("h3",{id:"23-main-container-option"},"2.3 Main container option"),Object(r.b)("p",null,"This option allow defining the layout main container - also called dynamic modules container. Keep in mind that there must be one and only one main container. Therefore when ticking the box, the previous main container will be converted into a static container - that operation is not destructive however and can be easily reversed."),Object(r.b)("h3",{id:"24-container-advanced-options"},"2.4 Container advanced options"),Object(r.b)("h3",{id:"241-classes-css"},"2.4.1 Classes CSS"),Object(r.b)("p",null,"That field should contain the CSS classes - none by default - that applies to the container as strings separated by a blank space."),Object(r.b)("p",null,"*For instance, a valid field value could be ",Object(r.b)("strong",{parentName:"p"},Object(r.b)("inlineCode",{parentName:"strong"},"my-class1 my-title"),"*")),Object(r.b)("h3",{id:"242-styles-css"},"2.4.2 Styles CSS"),Object(r.b)("p",null,"That field contains the styles that should apply to the container. Please note that ",Object(r.b)("strong",{parentName:"p"},"those styles are entered in JSON notation, using React fields"),", that's to say:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"The object is a JSon object and not a CSS notation object"),Object(r.b)("li",{parentName:"ul"},"The dash symbols ",Object(r.b)("strong",{parentName:"li"},"-")," should be removed and the next word first letter should be capitalized"),Object(r.b)("li",{parentName:"ul"},"Values like colors and number with size - like 3% or 22px -  should be placed in quotes symbols ",Object(r.b)("strong",{parentName:"li"},'"'),". Note that it is not required for single numbers")),Object(r.b)("p",null,"For instance, next value would be valid:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-json"},'{ \n  "lineHeight": 1.5, \n  "height": "25px", \n  "background": "red", \n  "color": "#F0F0FFO" \n}\n')),Object(r.b)("h2",{id:"3-default-layout"},"3. Default layout"),Object(r.b)("p",null,"The default project layout comes with the following containers:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("em",{parentName:"li"},"user-app-root"),": The root container of user application, previously named ",Object(r.b)("em",{parentName:"li"},"user")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("em",{parentName:"li"},"page-top-header"),": A static container to lay out header content (top), might be used to show a floating header - see later section, previously named ",Object(r.b)("em",{parentName:"li"},"header"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("em",{parentName:"li"},"page-sub-header"),": A static container to lay out sub header or page scrollable header when top header is floating, previously named ",Object(r.b)("em",{parentName:"li"},"static-content"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("em",{parentName:"li"},"page-content-module"),": The default main container to show page dynamic module, previously named ",Object(r.b)("em",{parentName:"li"},"dynamic-content")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("em",{parentName:"li"},"page-footer"),": A static container to lay out page footer, previously named ",Object(r.b)("em",{parentName:"li"},"footer"))),Object(r.b)("p",null,"Within the root container, subcontainers are layed out vertically (they use the row layout type by default)"),Object(r.b)("h2",{id:"4-example-a-layout-with-a-fixed-floating-header"},"4. Example: a layout with a fixed (floating) header"),Object(r.b)("p",null,"We will demonstrate here how to fix the top header in a REGARDS project."),Object(r.b)("h3",{id:"41-set-up-the-top-header-as-floating"},"4.1 Set up the top header as floating"),Object(r.b)("p",null,"In layout configuration (default one), edit the top header (called header in v1 version and page-top-header in v1.1+ version)."),Object(r.b)("p",null,"Open advanced options and paste the following styles, that indicates the header should remain above page when it scrolls (and span horizontally)."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-json"},'{\n  "width": "100%",\n  "position": "fixed",\n  "zIndex": 100\n}\n')),Object(r.b)("p",null,"Click the update button. As you can see, the layout is updated (and the root container may be hidden below the edited component)."),Object(r.b)("h3",{id:"42-space-the-page-content"},"4.2 Space the page content"),Object(r.b)("p",null,"In current state, the first container after top header would be hidden in user app - static-content (v1) / page-top-header (v1.1+). To correct that, click edit on that container and paste the following styles. Note that the margin to apply depends on your project styles, as ",Object(r.b)("em",{parentName:"p"},"it must be greater or equal to the header height")," to avoid hiding page content pixels:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-json"},'{\n  "marginTop": "49px"\n}\n')),Object(r.b)("p",null,"Click update then click save on layout page bottom. Open the user app - or refresh it - and check everything is fine."))}p.isMDXComponent=!0}}]);