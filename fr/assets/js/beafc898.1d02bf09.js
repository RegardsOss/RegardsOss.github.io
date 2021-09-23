"use strict";(self.webpackChunkRegardsOss_github_io=self.webpackChunkRegardsOss_github_io||[]).push([[20871],{3905:function(e,n,t){t.d(n,{Zo:function(){return m},kt:function(){return p}});var a=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=a.createContext({}),d=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},m=function(e){var n=d(e.components);return a.createElement(l.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),u=d(t),p=o,h=u["".concat(l,".").concat(p)]||u[p]||c[p]||r;return t?a.createElement(h,i(i({ref:n},m),{},{components:t})):a.createElement(h,i({ref:n},m))}));function p(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,i=new Array(r);i[0]=u;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var d=2;d<r;d++)i[d]=t[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},34403:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return d},toc:function(){return m},default:function(){return u}});var a=t(87462),o=t(63366),r=(t(67294),t(3905)),i=["components"],s={id:"frontend-introduction-architecture",title:"Architecture overview",sidebar_label:"Architecture",slug:"/development/frontend/introduction/architecture/"},l=void 0,d={unversionedId:"development/frontend/frontend-introduction-architecture",id:"development/frontend/frontend-introduction-architecture",isDocsHomePage:!1,title:"Architecture overview",description:"Presentation",source:"@site/docs/development/frontend/arch.md",sourceDirName:"development/frontend",slug:"/development/frontend/introduction/architecture/",permalink:"/fr/docs/development/frontend/introduction/architecture/",editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/docs/development/frontend/arch.md",tags:[],version:"current",frontMatter:{id:"frontend-introduction-architecture",title:"Architecture overview",sidebar_label:"Architecture",slug:"/development/frontend/introduction/architecture/"},sidebar:"dev",previous:{title:"Setting up an IDE",permalink:"/fr/docs/development/frontend/introduction/ide/"},next:{title:"Lint",permalink:"/fr/docs/development/frontend/introduction/eslint/"}},m=[{value:"Presentation",id:"presentation",children:[]},{value:"Structure",id:"structure",children:[]},{value:"Common businness modules (business-common)",id:"common-businness-modules-business-common",children:[]},{value:"Business modules",id:"business-modules",children:[]},{value:"Eslint configuration module",id:"eslint-configuration-module",children:[]},{value:"Mocks",id:"mocks",children:[]},{value:"Plugins",id:"plugins",children:[]},{value:"Components modules",id:"components-modules",children:[]},{value:"Data",id:"data",children:[]},{value:"Modules",id:"modules",children:[]},{value:"Utils modules",id:"utils-modules",children:[]}],c={toc:m};function u(e){var n=e.components,t=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"presentation"},"Presentation"),(0,r.kt)("p",null,"The REGARDS frontend contains three differents interfaces:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},"Portal interface"),", fully configurable (layout, theme and modules displayed), that lists projects. "),(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},"User interface"),", fully configurable (layout, theme and modules displayed), that lets users browse project content. "),(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},"Administrator interface"),", that allows ",(0,r.kt)("strong",{parentName:"li"},"Instance admin")," creating Projects and ",(0,r.kt)("strong",{parentName:"li"},"Project Admin")," configuring them. ")),(0,r.kt)("p",null,"For the ",(0,r.kt)("inlineCode",{parentName:"p"},"Portal")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"User")," interfaces, REGARDS UI defines ",(0,r.kt)("a",{parentName:"p",href:"../../packages/lazy-modules/"},"Dynamic modules")," to bring UI features that the administrator can control (options, layout, menus.../)."),(0,r.kt)("h2",{id:"structure"},"Structure"),(0,r.kt)("p",null,"The REGARDS frontend is divided in several NPM modules. Each one has a ",(0,r.kt)("inlineCode",{parentName:"p"},"package.json")," file defining the name of the module. It allows us to import a module using that name instead of module relative path."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"import { configureStore } from '@regardsoss/store' // Good\nimport { configureStore } from '../web_modules/data/store/src/main.js' // Bad practice\n")),(0,r.kt)("p",null,"Before further explanation about the role of each module and folders, let's have a look on the global rs-frontend/webapp folder structure."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'\u251c\u2500\u2500 webapp                                    # REGARDS Frontend webapp folder\n    \u251c\u2500\u2500 dist                                  # transpiled code for dev and prod \n    \u251c\u2500\u2500 eslint-config-es6-rules               # Eslint configuration for project (as a module)\n    \u251c\u2500\u2500 mocks                                 # Holds mock servers for features development\n    \u251c\u2500\u2500 plugins                               # REGARDS plugins\n    \u251c\u2500\u2500 reports                               # Local reports\n    |  \u251c\u2500\u2500 coverage                           # Coverage report\n    |  \u251c\u2500\u2500 mocha                              # Test report\n    \u251c\u2500\u2500 resources                             # Some demo resources\n    \u251c\u2500\u2500 scripts                               # Some helper scripts for installing, building... Mainly for plugins usage\n    \u251c\u2500\u2500 src                                   # frontend starter source code, common to user, portal and admin applications\n    |  \u251c\u2500\u2500 main.jsx                           # Starter React file\n    |  \u251c\u2500\u2500 rootReducer.js                     # Loads the Redux tree\n    |  \u2514\u2500\u2500 rootRouter.js                      # Loads the react-router logic\n    \u251c\u2500\u2500 tests                                 # Tests corresponding to src folder\n    \u251c\u2500\u2500 web_modules                           # Contains all @regardsoss modules, except builder and lint ones\n    |  \u251c\u2500\u2500 business-common                    # Reusable business logic, often shared between admin and user app\n    |  \u251c\u2500\u2500 business-modules                   # Application static modules and specific applications starters `admin`, `portal` and `user`\n    |  \u251c\u2500\u2500 components                         # Reusable React components\n    |  \u251c\u2500\u2500 data                               # data related reusable elements\n    |  |  \u251c\u2500\u2500 api                             # module holding normalizer configurations for backend API\n    |  |  \u251c\u2500\u2500 client                          # module holding redux client to fetch data from backend\n    |  |  \u251c\u2500\u2500 domain                          # module holding business domain enumerations and constants\n    |  |  \u251c\u2500\u2500 shape                           # React PropTypes related with backend data and normalized data\n    |  |  \u2514\u2500\u2500 store                           # Redux store helpers and configurators\n    |  \u251c\u2500\u2500 modules                            # Dynamic modules \n    |  \u251c\u2500\u2500 utils                              # REGARDS "generic" toolkit\n    |  \u2514\u2500\u2500 vendors                            # External libraries forks\n    \u251c\u2500\u2500 webpack-config-front                  # Module holding plugins and modules webpack transpiler and defining dev and prod build constants\n    \u251c\u2500\u2500 yeoman                                # Yeoman templates (cli to generate frontend modules and plugins)\n    \u251c\u2500\u2500 package.json                          # Define npm scripts and list all dependencies\n    \u251c\u2500\u2500 webpack.*.config.js                   # Various webpack configuration files, corresponding to similar NPM task\n')),(0,r.kt)("h2",{id:"common-businness-modules-business-common"},"Common businness modules (business-common)"),(0,r.kt)("p",null,"This folder contains business related modules, shared accross many REGARDS modules and/or applications"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"admin-data-entities-attributes-management"),":\nShared React component to handle entities attributes configuration"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"attributes-common"),": Shared React components to configure and display attributes values"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"endpoints-common"),": Shared data fetcher and storage for endpoint access rights"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"entities-common"),": Shared React components for entities related UI services (like displaying entity detail)"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"global-system-error"),": Shared React components to display errors in REGARDS interfaces"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"project-handler"),": Shared react High Order Component to fetch and publish in Redux store (see later sections) the current project"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"user-metadata-common"),": Shared project user metadata definition and edition React components")),(0,r.kt)("h2",{id:"business-modules"},"Business modules"),(0,r.kt)("p",null,"This folder contains all applications modules that are not ",(0,r.kt)("em",{parentName:"p"},"dynamic")," - ie that cannot be configured and set up in user nor in portal applications. Therefore it contains application starters (admin, user, portal) plus all administration interface modules."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Note: The administration application is structured in a thematic tree, like seen in the tree below. Each module at a given tree level imports and setupq the modules below (reducers, routers,...)")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"\u251c\u2500\u2500 portal                                              # Portal app starter\n\u251c\u2500\u2500 user                                                # User app starter\n\u2514\u2500\u2500 admin                                               # Admin app starter\n    \u251c\u2500\u2500 admin-board-collections                         # Data (rs-dam tenant)\n        \u251c\u2500\u2500 admin-data-collection-management            # Collection \n        \u2514\u2500\u2500 admin-data-dataset-management               # Dataset \n    \u251c\u2500\u2500 admin-board-models                              # Modelisation (rs-dam tenant)\n        \u251c\u2500\u2500 admin-data-attributemodel-management        # Attribute model\n        \u251c\u2500\u2500 admin-data-fragment-management              # Fragment \n        \u251c\u2500\u2500 admin-data-model-management                 # Model \n        \u251c\u2500\u2500 admin-data-attribute-plugins-management\n        \u2514\u2500\u2500 admin-data-modelattribute-management        # Model attribute association\n    \u251c\u2500\u2500 admin-board-acquisition                         # Acquisition\n        \u251c\u2500\u2500 admin-data-datasource-management            # Datasource \n        \u251c\u2500\u2500 admin-ingest-processing-chain-management\n        \u251c\u2500\u2500 admin-ingest-sip-management\n        \u251c\u2500\u2500 admin-document-management\n        \u251c\u2500\u2500 admin-data-provider-management\n        \u251c\u2500\u2500 admin-data-connection-management            # Connection \n        \u2514\u2500\u2500 admin-storage-management\n    \u251c\u2500\u2500 admin-microservice-management                   # Java Plugins and microservice lifecycle\n    \u251c\u2500\u2500 admin-project-management                        # Project (rs-admin instance)\n    \u251c\u2500\u2500 admin-board-account                             # Account (rs-admin instance)\n        \u2514\u2500\u2500 admin-account-management                   \n    \u251c\u2500\u2500 admin-ui-management                             # User interface (rs-access-*)\n        \u251c\u2500\u2500 admin-ui-module-management                  # UI Modules configuration\n        \u251c\u2500\u2500 admin-ui-plugin-management                  # UI Plugin\n        \u251c\u2500\u2500 admin-ui-layout-management                  # UI Layout\n        \u251c\u2500\u2500 admin-ui-service-management                 # UI Plugin services\n        \u2514\u2500\u2500 admin-ui-theme-management                   # UI Theme\n    \u251c\u2500\u2500 admin-user-management                           # User configuration (rs-admin tenant)\n        \u251c\u2500\u2500 admin-user-projectuser-management           # Project User \n        \u251c\u2500\u2500 admin-user-role-management                  # Role\n        \u251c\u2500\u2500 admin-user-authentication-plugins-management \n        \u251c\u2500\u2500 admin-order-management \n        \u2514\u2500\u2500 admin-user-role-resource-access-management  # REST resource authorisation per role\n    \u2514\u2500\u2500 admin-board-dataaccess                    # Data access rights (rs-dam tenant)\n        \u251c\u2500\u2500 admin-accessright-accessgroup-management    # Data access groups\n        \u251c\u2500\u2500 admin-dataaccess-searchengines-management\n        \u251c\u2500\u2500 admin-dataaccess-services-management\n        \u2514\u2500\u2500 admin-accessright-dataaccess-management     # Data access rights per group \n\n\n\n\n")),(0,r.kt)("h2",{id:"eslint-configuration-module"},"Eslint configuration module"),(0,r.kt)("p",null,"The folder ",(0,r.kt)("inlineCode",{parentName:"p"},"eslint-config-es6-rules")," holds the lint configuration module for REGARDS frontend. Lint corresponds to the set of style rules that are applied to project code."),(0,r.kt)("h2",{id:"mocks"},"Mocks"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"mocks")," folder contains runnable mock servers:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"front")," folder contains a standalone server that answers all front end calls based on a node JS server"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"json")," folder contains a standalone server that answers all front end calls using JSONServer"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"proxy")," folder contains a standalone server that answers known front end calls based on a local node JS server and is able to report unknown URL onto configured backend server, acting as a proxy")),(0,r.kt)("p",null,"Those servers are used to develop and test new functionnalities. The team recently uses ",(0,r.kt)("strong",{parentName:"p"},"proxy")," server for most new features development."),(0,r.kt)("h2",{id:"plugins"},"Plugins"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"plugins")," folder contains REGARDS front end plugins code. Those plugins are separed of front end core code. However, it is convenient for development to keep the folder within webapp to address compilation, version and references issues. For more detail about plugins, see ",(0,r.kt)("a",{parentName:"p",href:"../../plugins/"},"plugins page")),(0,r.kt)("h2",{id:"components-modules"},"Components modules"),(0,r.kt)("p",null,"This package provides ",(0,r.kt)("strong",{parentName:"p"},"React")," generic components to handle forms, buttons, cards and so on. More details are available in ",(0,r.kt)("a",{parentName:"p",href:"../../packages/components/"},"components detail page")),(0,r.kt)("h2",{id:"data"},"Data"),(0,r.kt)("p",null,"This folder holds API data related modules (server fetching, shapes, redux store, middlewares...). See ",(0,r.kt)("a",{parentName:"p",href:"../../data/ui-data/"},"data presentation page")),(0,r.kt)("h2",{id:"modules"},"Modules"),(0,r.kt)("p",null,"This folder contains all ",(0,r.kt)("em",{parentName:"p"},"dynamic")," modules, ie all modules that can be configured to be displayed in user and portal application. For more details, see ",(0,r.kt)("a",{parentName:"p",href:"../../packages/lazy-modules/"},"dynamic modules sections"),"  "),(0,r.kt)("h2",{id:"utils-modules"},"Utils modules"),(0,r.kt)("p",null,"This folder holds modules, one by folder, providing high level tools and components shared by all application interfaces (administration, user application and portal application)."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"adapters"),": Provides enriched components from external librairies - adds headless render or default styles to a component for instance"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"authentication-utils"),": Interact with the API to authenticate users. Provides some helpers to authenticate the user, get authentication state, and so on. Also manages 'external authentication parameters' used, for instance, by the mail link sent when creating a new account email"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"display-control"),": Provides ready to use React components to show/hide a component depending on a logic - show loading when fetching, hide a button when user has not sufficient rights, and so on..."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"file-utils"),": Provides ready to use React components to manage files."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"form-utils"),": Provides ready to use internationalized React components and various tools to manage and update ",(0,r.kt)("a",{parentName:"li",href:"http://redux-form.com"},"Redux forms")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"i18n"),": Provides tools and components to manage internationalization. Note: REGARDS i18n system relies on ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/yahoo/react-intl"},"React intl")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"i18n-ui"),": Provides i18n graphic interactors to select / display current i18n state in application"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"layout"),": Provides components and tools to handle REGARDS user interface layout customizing and render"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"mime-types"),": Provides tools and enumerationrs related with MIME type management in REGARDS"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"modules"),": Provides components and tools to show dynamic modules in REGARDS interfaces"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"modules-api"),": Provides tools to implement new modules configuration and user interfaces"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"plugins"),': Provides components and tools to show plugins in REGARDS interfaces. Note that this modules is only related with "UI plugins"; "Backend plugins" are not handled here'),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"plugins-api"),": Provides tools to implement new UI plugins in REGARDS."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"redux"),": Provides tools to connect with application Redux store"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"store-utils"),": Provides redux generic actions, reducers and selectors to make ",(0,r.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/redux-api-middleware"},"Redux API middleware")," use easier with REGARDS backend. Also provides some other standard redux models for REGARDS, like partitions storage model"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"test-helpers"),": Provides test  tools for react components headless tests.\n",(0,r.kt)("em",{parentName:"li"},"Note: this modules is only provided for test, it should never be bundled with the core application. Therefore the developer must not use it outside test code")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"theme"),": Provide tools and components to manage REGARDS components theme. Note: it relies on ",(0,r.kt)("a",{parentName:"li",href:"http://www.material-ui.com/#/customization/themes"},"Material UI theme")," system"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"theme-ui"),": Provides theme graphic interactors to select / display current theme state in application")))}u.isMDXComponent=!0}}]);