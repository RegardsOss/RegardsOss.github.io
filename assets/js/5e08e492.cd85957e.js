"use strict";(self.webpackChunkregardsoss_github_io=self.webpackChunkregardsoss_github_io||[]).push([[59064],{95788:(e,n,t)=>{t.d(n,{Iu:()=>p,yg:()=>u});var i=t(11504);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function r(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=i.createContext({}),c=function(e){var n=i.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=c(e.components);return i.createElement(s.Provider,{value:n},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},g=i.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),d=c(t),g=a,u=d["".concat(s,".").concat(g)]||d[g]||m[g]||o;return t?i.createElement(u,l(l({ref:n},p),{},{components:t})):i.createElement(u,l({ref:n},p))}));function u(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=g;var r={};for(var s in n)hasOwnProperty.call(n,s)&&(r[s]=n[s]);r.originalType=e,r[d]="string"==typeof e?e:a,l[1]=r;for(var c=2;c<o;c++)l[c]=t[c];return i.createElement.apply(null,l)}return i.createElement.apply(null,t)}g.displayName="MDXCreateElement"},92324:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>r,toc:()=>c});var i=t(45072),a=(t(11504),t(95788));const o={id:"backend-catalog-stac-plugin",title:"STAC plugin",sidebar_label:"STAC",slug:"/development/backend/services/catalog/stac-plugin/"},l="Overview",r={unversionedId:"development/backend/regards/catalog/plugins/backend-catalog-stac-plugin",id:"version-1.11.0/development/backend/regards/catalog/plugins/backend-catalog-stac-plugin",title:"STAC plugin",description:"The STAC plugin provides a STAC spec interface for any REGARDS project.",source:"@site/versioned_docs/version-1.11.0/development/backend/regards/catalog/plugins/stac-plugin.md",sourceDirName:"development/backend/regards/catalog/plugins",slug:"/development/backend/services/catalog/stac-plugin/",permalink:"/docs/1.11.0/development/backend/services/catalog/stac-plugin/",draft:!1,editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/versioned_docs/version-1.11.0/development/backend/regards/catalog/plugins/stac-plugin.md",tags:[],version:"1.11.0",frontMatter:{id:"backend-catalog-stac-plugin",title:"STAC plugin",sidebar_label:"STAC",slug:"/development/backend/services/catalog/stac-plugin/"}},s={},c=[{value:"Programming style",id:"programming-style",level:2},{value:"Immutability",id:"immutability",level:3},{value:"Purity",id:"purity",level:3},{value:"Dependency injection",id:"dependency-injection",level:3},{value:"Programming to an interface",id:"programming-to-an-interface",level:3},{value:"Single-responsibility principle",id:"single-responsibility-principle",level:3},{value:"Logging",id:"logging",level:2},{value:"Error management",id:"error-management",level:2},{value:"<code>stac-domain</code> module",id:"stac-domain-module",level:2},{value:"<code>stac-plugin</code> module",id:"stac-plugin-module",level:2},{value:"<code>stac-rest</code> module",id:"stac-rest-module",level:2},{value:"<code>stac-service</code> module",id:"stac-service-module",level:2},{value:"Static collections",id:"static-collections",level:2},{value:"Dynamic collections",id:"dynamic-collections",level:2},{value:"STAC browser modifications",id:"stac-browser-modifications",level:2}],p={toc:c},d="wrapper";function m(e){let{components:n,...t}=e;return(0,a.yg)(d,(0,i.c)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"overview"},"Overview"),(0,a.yg)("p",null,"The STAC plugin provides a STAC spec interface for any REGARDS project.\nSee ",(0,a.yg)("a",{parentName:"p",href:"https://stacspec.org/"},"the STAC spec base page")," for more information\non this standard."),(0,a.yg)("p",null,"The STAC plugin consists of four layers:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"the domain layer, in the maven module ",(0,a.yg)("inlineCode",{parentName:"li"},"stac-domain"),","),(0,a.yg)("li",{parentName:"ul"},"the service layer, in the maven module ",(0,a.yg)("inlineCode",{parentName:"li"},"stac-service"),", depending on ",(0,a.yg)("inlineCode",{parentName:"li"},"stac-domain"),","),(0,a.yg)("li",{parentName:"ul"},"the REST layer, in the maven module ",(0,a.yg)("inlineCode",{parentName:"li"},"stac-rest"),", depending on ",(0,a.yg)("inlineCode",{parentName:"li"},"stac-service"),","),(0,a.yg)("li",{parentName:"ul"},"the plugin layer, in the maven module ",(0,a.yg)("inlineCode",{parentName:"li"},"stac-plugin"),", depending on ",(0,a.yg)("inlineCode",{parentName:"li"},"stac-rest"),",\nproviding the actual plugin and which can generate the shaded jar to be deployed\nusing the ",(0,a.yg)("inlineCode",{parentName:"li"},"maven-shade")," plugin.")),(0,a.yg)("p",null,"There also is a ",(0,a.yg)("inlineCode",{parentName:"p"},"stac-test")," module providing utilities for the tests in all the other\nmodules."),(0,a.yg)("p",null,'From a "domain driven" perspective:'),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"stac-domain")," provides the domain entities,"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"stac-rest")," provides the STAC API REST adapter, allowing clients to interact with the plugin,"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"stac-plugin")," provides the plugin adapter, allowing to interact with the REGARDS system,\nloading the plugin configuration and mappers from configuration to domain entities.")),(0,a.yg)("h1",{id:"general-notes"},"General notes"),(0,a.yg)("h2",{id:"programming-style"},"Programming style"),(0,a.yg)("h3",{id:"immutability"},"Immutability"),(0,a.yg)("p",null,"As much as possible, the code relies on immutable entities and collections\nand pure functions. The domain entities make heavy use of the ",(0,a.yg)("inlineCode",{parentName:"p"},"vavr")," collections."),(0,a.yg)("p",null,"Entities are generally ",(0,a.yg)("inlineCode",{parentName:"p"},"lombok.Value"),", making them immutable with minimal\namount of code."),(0,a.yg)("h3",{id:"purity"},"Purity"),(0,a.yg)("p",null,"Service methods are as pure as possible, except for logging and\ncalls to catalog search. Most other side effects are pushed to the\nREST and plugin adapters."),(0,a.yg)("h3",{id:"dependency-injection"},"Dependency injection"),(0,a.yg)("p",null,"Where it is needed, in all classes (services especially), use constructor\ndependency injection. All service dependencies are declared as final\nand an explicit constructor is ",(0,a.yg)("inlineCode",{parentName:"p"},"@Autowired"),". This allows to ensure that\nall the tests are forced to instanciate (or mock) all the dependencies\nfor any given service."),(0,a.yg)("h3",{id:"programming-to-an-interface"},"Programming to an interface"),(0,a.yg)("p",null,"All services have a corresponding interface. Only the interfaces are\nreferenced in other services/components/REST controllers."),(0,a.yg)("h3",{id:"single-responsibility-principle"},"Single-responsibility principle"),(0,a.yg)("p",null,"Most services tend to have only one purpose: even if it not always achieved\nto prevent a too big number of classes, the goal is to have one method per\nservice interface. Small service make them require less dependencies,\nless autowired components, which makes them generally easier to set up for tests."),(0,a.yg)("h2",{id:"logging"},"Logging"),(0,a.yg)("p",null,"Each request to the STAC REST layer sets a UUID for the request.\n(See the ",(0,a.yg)("inlineCode",{parentName:"p"},"StacRequestCorrelationId")," and ",(0,a.yg)("inlineCode",{parentName:"p"},"LogAndCorrelationIdInterceptor")," classes.)"),(0,a.yg)("p",null,"In order to have log messages display this UUID, one should not use the ",(0,a.yg)("inlineCode",{parentName:"p"},"LOGGER.info()"),",\n",(0,a.yg)("inlineCode",{parentName:"p"},"LOGGER.error()"),", etc. methods directly. "),(0,a.yg)("p",null,"Instead, the class ",(0,a.yg)("inlineCode",{parentName:"p"},"StacRequestCorrelationId")," provides static methods allowing\nto log ",(0,a.yg)("inlineCode",{parentName:"p"},"trace"),", ",(0,a.yg)("inlineCode",{parentName:"p"},"debug"),", ",(0,a.yg)("inlineCode",{parentName:"p"},"info"),", ",(0,a.yg)("inlineCode",{parentName:"p"},"warn")," and ",(0,a.yg)("inlineCode",{parentName:"p"},"error")," messages. These methods\nshould be used everywhere (except for tests, and during the plugin loading phase)."),(0,a.yg)("h2",{id:"error-management"},"Error management"),(0,a.yg)("p",null,"Throwing exceptions is avoided at all costs. Instead, if a method may fail,\nwe wrap the result in a ",(0,a.yg)("inlineCode",{parentName:"p"},"io.vavr.Try"),". In order to do this, and to ensure\nthat the user provides logging or a meaningful error exception, creating\n",(0,a.yg)("inlineCode",{parentName:"p"},"Try")," instances is avoided, and the ",(0,a.yg)("inlineCode",{parentName:"p"},"TryDSL")," methods are used instead.\nSee the ",(0,a.yg)("inlineCode",{parentName:"p"},"TryDSL")," class in the ",(0,a.yg)("inlineCode",{parentName:"p"},"stac-domain")," module for more information."),(0,a.yg)("h1",{id:"modules"},"Modules"),(0,a.yg)("h2",{id:"stac-domain-module"},(0,a.yg)("inlineCode",{parentName:"h2"},"stac-domain")," module"),(0,a.yg)("p",null,"The domain provides:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"useful constants in the ",(0,a.yg)("inlineCode",{parentName:"p"},"StacSpecConstants")," class (version numbers,\ncommon property names, etc.),")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"the package ",(0,a.yg)("inlineCode",{parentName:"p"},"spec.v1_0_0_beta2"),", which contains the STAC spec entities\n(",(0,a.yg)("inlineCode",{parentName:"p"},"Item"),", ",(0,a.yg)("inlineCode",{parentName:"p"},"Collection"),", ",(0,a.yg)("inlineCode",{parentName:"p"},"Catalog"),") at the latest version of the STAC spec\nat the time of implementation (version 1.0.0-beta.2),")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"the package ",(0,a.yg)("inlineCode",{parentName:"p"},"api.v1_0_0_beta1"),", which contains the STAC REST API entities\nfor REST input and output, for instance the ",(0,a.yg)("inlineCode",{parentName:"p"},"ItemSearchBody")," object which\nrepresents search query bodies, or ",(0,a.yg)("inlineCode",{parentName:"p"},"ItemCollectionResponse")," which represent\nlist of items (",(0,a.yg)("inlineCode",{parentName:"p"},"/search")," results, or result for a ",(0,a.yg)("inlineCode",{parentName:"p"},"/collections/items")," query),")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"the ",(0,a.yg)("inlineCode",{parentName:"p"},"properties")," package, which contains the ",(0,a.yg)("inlineCode",{parentName:"p"},"StacProperty")," class.\nThis class is central to the plugin, in that the configuration provides a\nlist of ",(0,a.yg)("inlineCode",{parentName:"p"},"StacProperty")," values, and these properties are used almost\neverywhere. They allow to convert the REGARDS documents into STAC Items,\nand convert the document properties in their STAC spec counterparts.")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"the ",(0,a.yg)("inlineCode",{parentName:"p"},"properties.dyncoll")," package, containing all the domain entities related\nto dynamic collections, dynamic collection level definitions and values.")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"the ",(0,a.yg)("inlineCode",{parentName:"p"},"error")," package provides error management within the plugin. ")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"the ",(0,a.yg)("inlineCode",{parentName:"p"},"util")," package, which strictly speaking should not be part of the domain,\nbut does not justify a whole new package all by itself. It contains some\nutilities and helpers, as well as a small DSL to work with ",(0,a.yg)("inlineCode",{parentName:"p"},"io.vavr.Try")," values."))),(0,a.yg)("h2",{id:"stac-plugin-module"},(0,a.yg)("inlineCode",{parentName:"h2"},"stac-plugin")," module"),(0,a.yg)("p",null,"This module declares the main plugin class: ",(0,a.yg)("inlineCode",{parentName:"p"},"StacSearchPlugin"),".\nThis class implements ",(0,a.yg)("inlineCode",{parentName:"p"},"ISearchEngine"),", but this is only to be able to\nreuse the UI for plugin configuration. The implementation of this interface\nis never actually used anywhere, since the plugin declares that it is\nnot applicable to any type of search."),(0,a.yg)("p",null,"The module also declares several plugin parameter classes, which conform\nto the conventions for REGARDS plugins."),(0,a.yg)("p",null,"It also provides an implementation for the ",(0,a.yg)("inlineCode",{parentName:"p"},"ConfigurationAccessorFactory"),"\ninterface named ",(0,a.yg)("inlineCode",{parentName:"p"},"StacConfigurationDomainAccessor"),", which allows to access\nthe plugin configuration as it is defined in the ",(0,a.yg)("inlineCode",{parentName:"p"},"stac-domain")," module\n",(0,a.yg)("inlineCode",{parentName:"p"},"properties")," package."),(0,a.yg)("p",null,"This mechanism allows to define precisely in domain terms the configuration,\nand have a REGARDS specific plugin adapter, while all the rest of the code\nknows nothing about REGARDS plugins."),(0,a.yg)("h2",{id:"stac-rest-module"},(0,a.yg)("inlineCode",{parentName:"h2"},"stac-rest")," module"),(0,a.yg)("p",null,"This module provides four controllers, corresponding to each sub-section\nof the STAC REST API:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"the ",(0,a.yg)("inlineCode",{parentName:"li"},"CoreController"),", providing the ",(0,a.yg)("inlineCode",{parentName:"li"},"GET /")," query,"),(0,a.yg)("li",{parentName:"ul"},"the ",(0,a.yg)("inlineCode",{parentName:"li"},"ConformanceCOntroller"),", providing the ",(0,a.yg)("inlineCode",{parentName:"li"},"GET /conformance/")," query,"),(0,a.yg)("li",{parentName:"ul"},"more interestingly, the ",(0,a.yg)("inlineCode",{parentName:"li"},"OGCFeatureController"),", providing the four ",(0,a.yg)("inlineCode",{parentName:"li"},"GET"),"\nqueries to access collections and items,"),(0,a.yg)("li",{parentName:"ul"},"and finally, the ",(0,a.yg)("inlineCode",{parentName:"li"},"ItemSearchCOntroller"),", providing three endpoints:",(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"GET /search"),", part of the standard,"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"POST /search"),", part of the standard,"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"GET /otherPage"),", which is a custom endpoint of this plugin, allowing\nto paginate item search results.")))),(0,a.yg)("h2",{id:"stac-service-module"},(0,a.yg)("inlineCode",{parentName:"h2"},"stac-service")," module"),(0,a.yg)("p",null,"This module is central, using domain entities from ",(0,a.yg)("inlineCode",{parentName:"p"},"stac-domain"),", and allowing\nadapters ",(0,a.yg)("inlineCode",{parentName:"p"},"stac-rest")," and ",(0,a.yg)("inlineCode",{parentName:"p"},"stac-plugin")," to do their work."),(0,a.yg)("h1",{id:"search"},"Search"),(0,a.yg)("p",null,"The mechanism for searching is to create an ",(0,a.yg)("inlineCode",{parentName:"p"},"ItemSearchBody")," instance\n(from the ",(0,a.yg)("inlineCode",{parentName:"p"},"GET /search")," query parameters, from the ",(0,a.yg)("inlineCode",{parentName:"p"},"POST /search")," body\nor from the ",(0,a.yg)("inlineCode",{parentName:"p"},"GET /otherPage")," query parameter), and to use this ",(0,a.yg)("inlineCode",{parentName:"p"},"ItemSearchBody"),"\nto build an ",(0,a.yg)("inlineCode",{parentName:"p"},"ICriterion"),"."),(0,a.yg)("p",null,"Once we have an ",(0,a.yg)("inlineCode",{parentName:"p"},"ICriterion"),", we can use the catalog search service\nand query Elasticsearch. The results are then transformed into\nSTAC ",(0,a.yg)("inlineCode",{parentName:"p"},"Item"),"s, and collected into an ",(0,a.yg)("inlineCode",{parentName:"p"},"ItemSearchResponse"),"."),(0,a.yg)("h1",{id:"collection-management"},"Collection management"),(0,a.yg)("h2",{id:"static-collections"},"Static collections"),(0,a.yg)("p",null,"In the STAC standard, STAC collections are meant to hold a rather small number\nof items, in the hundreds at most. This is why, if the catalog contains a lot\nof items, it is a good idea to split them in many different collections. "),(0,a.yg)("p",null,"However, REGARDS already has the notion of collection/datasets, so we recreate\na tree of STAC collections from them."),(0,a.yg)("p",null,"REGARDS Collections can reference other collections, allowing to build a tree\nof collections. Similarly, datasets can reference collections. This is used\nby the STAC static collection mechanism to build a tree of STAC collections."),(0,a.yg)("p",null,"At the root level, static collections display links to the collections or datasets\nwith no parent collection (referencing no other REGARDS collection)."),(0,a.yg)("p",null,"A user navigating to a STAC collection made from a REGARDS collection will see:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"if this collection is referenced by other collections/datasets: links to these collections/datasets,"),(0,a.yg)("li",{parentName:"ul"},"if this collection has only items, the link to the list of items.")),(0,a.yg)("p",null,"A user navigating to a STAC collection made from a REGARDS dataset will see:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"the link to the list of items in this dataset.")),(0,a.yg)("h2",{id:"dynamic-collections"},"Dynamic collections"),(0,a.yg)("p",null,"The user may choose to select some of the configured STAC properties\n(even the mandatory datetime property) as levels in a dynamic tree."),(0,a.yg)("p",null,"Each level has at least one sublevel, but may have more.\nFor instance, datetime properties may have several sublevel consisting of\nselecting the year, then the month, then the day."),(0,a.yg)("p",null,'The dynamic collection is entirely configured in the plugin configuration,\nthanks to the "dynamic collection level" and "dynamic collection format"\nparameters of the STAC properties. The documentation for these parameters\nexplains in details how to set their values correctly.'),(0,a.yg)("p",null,"Dynamic collections domain classes are separated in two aspects:\ndefinitions and values."),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"Definitions are parsed from the ",(0,a.yg)("inlineCode",{parentName:"p"},"StacPropertyConfiguration"),"s.\nThey define the structure of the dynamic collections.")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"Values are what is provided by the user navigating in collections.\nValues are represented as base64 encoding of the JSON representation\nof key/values. The keys are the names of STAC properties. The values\nare partial or complete values for the properties."))),(0,a.yg)("p",null,"A dynamic collection value allows to provide all possible sub-values,\ncorresponding to child collections. For instance, a dynamic collection\nvalue finishing with a datetime property for which the year is given,\ncan lead to all sub-collections for the months of the chosen year."),(0,a.yg)("p",null,"Once a dynamic collection value is fully completed for the corresponding\ndynamic collection definition, when all the level definitions are\nfully valued. At that point, the STAC plugin can transform the dynamic\ncollection value to an ",(0,a.yg)("inlineCode",{parentName:"p"},"ItemSearchBody"),". Then we reuse the search\nmechanism with this ",(0,a.yg)("inlineCode",{parentName:"p"},"ItemSearchBody"),"."),(0,a.yg)("h1",{id:"link-management"},"Link management"),(0,a.yg)("p",null,"STAC is based extensively on links between entities. Items link\nto collections, collections link to their inner items, to parent\nor child collections."),(0,a.yg)("p",null,"However, links provided by our plugin must authenticate the current user.\nIn STAC, links are only defined by their URL, and it is not pssible\nto provide authentication headers to be used by the STAC client.\nFortunately, REGARDS allows to pass the authentication token as\na query parameter named ",(0,a.yg)("inlineCode",{parentName:"p"},"token"),". The plugin leverages this mechanism\nand generates links with this parameter."),(0,a.yg)("p",null,"The class ",(0,a.yg)("inlineCode",{parentName:"p"},"LinkCreatorServiceImpl")," in the ",(0,a.yg)("inlineCode",{parentName:"p"},"stac-service")," module\nis responsible for taking a ",(0,a.yg)("inlineCode",{parentName:"p"},"JWTAuthentication")," as input, and\nprovide links with links with a valid token."),(0,a.yg)("p",null,"However, these links will be valid only as long as the token is,\nand tokens have by default a 2 hour expiration. This means that\nthe user can not bookmark links provided by our plugin, as they\nwill expire in a short time."),(0,a.yg)("h2",{id:"stac-browser-modifications"},"STAC browser modifications"),(0,a.yg)("p",null,"Since the official STAC browser implementation (",(0,a.yg)("a",{parentName:"p",href:"https://github.com/radiantearth/stac-browser"},"here")," on github)\ndoes not work with links having the ",(0,a.yg)("inlineCode",{parentName:"p"},"token")," query parameter,\na modified version of the STAC browser can be found ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/glmxndr/stac-browser"},"here"),".\nThis patched version allows to work with the REGARDS ",(0,a.yg)("inlineCode",{parentName:"p"},"token")," query parameters,\nat least until the pull request is merged."))}m.isMDXComponent=!0}}]);