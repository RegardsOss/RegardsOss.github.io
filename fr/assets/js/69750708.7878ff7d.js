"use strict";(self.webpackChunkRegardsOss_github_io=self.webpackChunkRegardsOss_github_io||[]).push([[28992],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return u}});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),c=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return i.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),m=c(n),u=a,h=m["".concat(s,".").concat(u)]||m[u]||d[u]||o;return n?i.createElement(h,l(l({ref:t},p),{},{components:n})):i.createElement(h,l({ref:t},p))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r.mdxType="string"==typeof e?e:a,l[1]=r;for(var c=2;c<o;c++)l[c]=n[c];return i.createElement.apply(null,l)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},79042:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return r},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return p},default:function(){return m}});var i=n(87462),a=n(63366),o=(n(67294),n(3905)),l=["components"],r={id:"backend-catalog-stac-plugin",title:"STAC plugin",sidebar_label:"STAC",slug:"/development/backend/services/catalog/stac-plugin/"},s="Overview",c={unversionedId:"development/backend/regards/catalog/plugins/backend-catalog-stac-plugin",id:"version-1.6.0/development/backend/regards/catalog/plugins/backend-catalog-stac-plugin",isDocsHomePage:!1,title:"STAC plugin",description:"The STAC plugin provides a STAC spec interface for any REGARDS project.",source:"@site/versioned_docs/version-1.6.0/development/backend/regards/catalog/plugins/stac-plugin.md",sourceDirName:"development/backend/regards/catalog/plugins",slug:"/development/backend/services/catalog/stac-plugin/",permalink:"/fr/docs/1.6.0/development/backend/services/catalog/stac-plugin/",editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/versioned_docs/version-1.6.0/development/backend/regards/catalog/plugins/stac-plugin.md",tags:[],version:"1.6.0",frontMatter:{id:"backend-catalog-stac-plugin",title:"STAC plugin",sidebar_label:"STAC",slug:"/development/backend/services/catalog/stac-plugin/"}},p=[{value:"Programming style",id:"programming-style",children:[{value:"Immutability",id:"immutability",children:[]},{value:"Purity",id:"purity",children:[]},{value:"Dependency injection",id:"dependency-injection",children:[]},{value:"Programming to an interface",id:"programming-to-an-interface",children:[]},{value:"Single-responsibility principle",id:"single-responsibility-principle",children:[]}]},{value:"Logging",id:"logging",children:[]},{value:"Error management",id:"error-management",children:[]},{value:"<code>stac-domain</code> module",id:"stac-domain-module",children:[]},{value:"<code>stac-plugin</code> module",id:"stac-plugin-module",children:[]},{value:"<code>stac-rest</code> module",id:"stac-rest-module",children:[]},{value:"<code>stac-service</code> module",id:"stac-service-module",children:[]},{value:"Static collections",id:"static-collections",children:[]},{value:"Dynamic collections",id:"dynamic-collections",children:[]},{value:"STAC browser modifications",id:"stac-browser-modifications",children:[]}],d={toc:p};function m(e){var t=e.components,n=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"overview"},"Overview"),(0,o.kt)("p",null,"The STAC plugin provides a STAC spec interface for any REGARDS project.\nSee ",(0,o.kt)("a",{parentName:"p",href:"https://stacspec.org/"},"the STAC spec base page")," for more information\non this standard."),(0,o.kt)("p",null,"The STAC plugin consists of four layers:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"the domain layer, in the maven module ",(0,o.kt)("inlineCode",{parentName:"li"},"stac-domain"),","),(0,o.kt)("li",{parentName:"ul"},"the service layer, in the maven module ",(0,o.kt)("inlineCode",{parentName:"li"},"stac-service"),", depending on ",(0,o.kt)("inlineCode",{parentName:"li"},"stac-domain"),","),(0,o.kt)("li",{parentName:"ul"},"the REST layer, in the maven module ",(0,o.kt)("inlineCode",{parentName:"li"},"stac-rest"),", depending on ",(0,o.kt)("inlineCode",{parentName:"li"},"stac-service"),","),(0,o.kt)("li",{parentName:"ul"},"the plugin layer, in the maven module ",(0,o.kt)("inlineCode",{parentName:"li"},"stac-plugin"),", depending on ",(0,o.kt)("inlineCode",{parentName:"li"},"stac-rest"),",\nproviding the actual plugin and which can generate the shaded jar to be deployed\nusing the ",(0,o.kt)("inlineCode",{parentName:"li"},"maven-shade")," plugin.")),(0,o.kt)("p",null,"There also is a ",(0,o.kt)("inlineCode",{parentName:"p"},"stac-test")," module providing utilities for the tests in all the other\nmodules."),(0,o.kt)("p",null,'From a "domain driven" perspective:'),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"stac-domain")," provides the domain entities,"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"stac-rest")," provides the STAC API REST adapter, allowing clients to interact with the plugin,"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"stac-plugin")," provides the plugin adapter, allowing to interact with the REGARDS system,\nloading the plugin configuration and mappers from configuration to domain entities.")),(0,o.kt)("h1",{id:"general-notes"},"General notes"),(0,o.kt)("h2",{id:"programming-style"},"Programming style"),(0,o.kt)("h3",{id:"immutability"},"Immutability"),(0,o.kt)("p",null,"As much as possible, the code relies on immutable entities and collections\nand pure functions. The domain entities make heavy use of the ",(0,o.kt)("inlineCode",{parentName:"p"},"vavr")," collections."),(0,o.kt)("p",null,"Entities are generally ",(0,o.kt)("inlineCode",{parentName:"p"},"lombok.Value"),", making them immutable with minimal\namount of code."),(0,o.kt)("h3",{id:"purity"},"Purity"),(0,o.kt)("p",null,"Service methods are as pure as possible, except for logging and\ncalls to catalog search. Most other side effects are pushed to the\nREST and plugin adapters."),(0,o.kt)("h3",{id:"dependency-injection"},"Dependency injection"),(0,o.kt)("p",null,"Where it is needed, in all classes (services especially), use constructor\ndependency injection. All service dependencies are declared as final\nand an explicit constructor is ",(0,o.kt)("inlineCode",{parentName:"p"},"@Autowired"),". This allows to ensure that\nall the tests are forced to instanciate (or mock) all the dependencies\nfor any given service."),(0,o.kt)("h3",{id:"programming-to-an-interface"},"Programming to an interface"),(0,o.kt)("p",null,"All services have a corresponding interface. Only the interfaces are\nreferenced in other services/components/REST controllers."),(0,o.kt)("h3",{id:"single-responsibility-principle"},"Single-responsibility principle"),(0,o.kt)("p",null,"Most services tend to have only one purpose: even if it not always achieved\nto prevent a too big number of classes, the goal is to have one method per\nservice interface. Small service make them require less dependencies,\nless autowired components, which makes them generally easier to set up for tests."),(0,o.kt)("h2",{id:"logging"},"Logging"),(0,o.kt)("p",null,"Each request to the STAC REST layer sets a UUID for the request.\n(See the ",(0,o.kt)("inlineCode",{parentName:"p"},"StacRequestCorrelationId")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"LogAndCorrelationIdInterceptor")," classes.)"),(0,o.kt)("p",null,"In order to have log messages display this UUID, one should not use the ",(0,o.kt)("inlineCode",{parentName:"p"},"LOGGER.info()"),",\n",(0,o.kt)("inlineCode",{parentName:"p"},"LOGGER.error()"),", etc. methods directly. "),(0,o.kt)("p",null,"Instead, the class ",(0,o.kt)("inlineCode",{parentName:"p"},"StacRequestCorrelationId")," provides static methods allowing\nto log ",(0,o.kt)("inlineCode",{parentName:"p"},"trace"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"debug"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"info"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"warn")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"error")," messages. These methods\nshould be used everywhere (except for tests, and during the plugin loading phase)."),(0,o.kt)("h2",{id:"error-management"},"Error management"),(0,o.kt)("p",null,"Throwing exceptions is avoided at all costs. Instead, if a method may fail,\nwe wrap the result in a ",(0,o.kt)("inlineCode",{parentName:"p"},"io.vavr.Try"),". In order to do this, and to ensure\nthat the user provides logging or a meaningful error exception, creating\n",(0,o.kt)("inlineCode",{parentName:"p"},"Try")," instances is avoided, and the ",(0,o.kt)("inlineCode",{parentName:"p"},"TryDSL")," methods are used instead.\nSee the ",(0,o.kt)("inlineCode",{parentName:"p"},"TryDSL")," class in the ",(0,o.kt)("inlineCode",{parentName:"p"},"stac-domain")," module for more information."),(0,o.kt)("h1",{id:"modules"},"Modules"),(0,o.kt)("h2",{id:"stac-domain-module"},(0,o.kt)("inlineCode",{parentName:"h2"},"stac-domain")," module"),(0,o.kt)("p",null,"The domain provides:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"useful constants in the ",(0,o.kt)("inlineCode",{parentName:"p"},"StacSpecConstants")," class (version numbers,\ncommon property names, etc.),")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"the package ",(0,o.kt)("inlineCode",{parentName:"p"},"spec.v1_0_0_beta2"),", which contains the STAC spec entities\n(",(0,o.kt)("inlineCode",{parentName:"p"},"Item"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"Collection"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"Catalog"),") at the latest version of the STAC spec\nat the time of implementation (version 1.0.0-beta.2),")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"the package ",(0,o.kt)("inlineCode",{parentName:"p"},"api.v1_0_0_beta1"),", which contains the STAC REST API entities\nfor REST input and output, for instance the ",(0,o.kt)("inlineCode",{parentName:"p"},"ItemSearchBody")," object which\nrepresents search query bodies, or ",(0,o.kt)("inlineCode",{parentName:"p"},"ItemCollectionResponse")," which represent\nlist of items (",(0,o.kt)("inlineCode",{parentName:"p"},"/search")," results, or result for a ",(0,o.kt)("inlineCode",{parentName:"p"},"/collections/items")," query),")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"the ",(0,o.kt)("inlineCode",{parentName:"p"},"properties")," package, which contains the ",(0,o.kt)("inlineCode",{parentName:"p"},"StacProperty")," class.\nThis class is central to the plugin, in that the configuration provides a\nlist of ",(0,o.kt)("inlineCode",{parentName:"p"},"StacProperty")," values, and these properties are used almost\neverywhere. They allow to convert the REGARDS documents into STAC Items,\nand convert the document properties in their STAC spec counterparts.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"the ",(0,o.kt)("inlineCode",{parentName:"p"},"properties.dyncoll")," package, containing all the domain entities related\nto dynamic collections, dynamic collection level definitions and values.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"the ",(0,o.kt)("inlineCode",{parentName:"p"},"error")," package provides error management within the plugin. ")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"the ",(0,o.kt)("inlineCode",{parentName:"p"},"util")," package, which strictly speaking should not be part of the domain,\nbut does not justify a whole new package all by itself. It contains some\nutilities and helpers, as well as a small DSL to work with ",(0,o.kt)("inlineCode",{parentName:"p"},"io.vavr.Try")," values."))),(0,o.kt)("h2",{id:"stac-plugin-module"},(0,o.kt)("inlineCode",{parentName:"h2"},"stac-plugin")," module"),(0,o.kt)("p",null,"This module declares the main plugin class: ",(0,o.kt)("inlineCode",{parentName:"p"},"StacSearchPlugin"),".\nThis class implements ",(0,o.kt)("inlineCode",{parentName:"p"},"ISearchEngine"),", but this is only to be able to\nreuse the UI for plugin configuration. The implementation of this interface\nis never actually used anywhere, since the plugin declares that it is\nnot applicable to any type of search."),(0,o.kt)("p",null,"The module also declares several plugin parameter classes, which conform\nto the conventions for REGARDS plugins."),(0,o.kt)("p",null,"It also provides an implementation for the ",(0,o.kt)("inlineCode",{parentName:"p"},"ConfigurationAccessorFactory"),"\ninterface named ",(0,o.kt)("inlineCode",{parentName:"p"},"StacConfigurationDomainAccessor"),", which allows to access\nthe plugin configuration as it is defined in the ",(0,o.kt)("inlineCode",{parentName:"p"},"stac-domain")," module\n",(0,o.kt)("inlineCode",{parentName:"p"},"properties")," package."),(0,o.kt)("p",null,"This mechanism allows to define precisely in domain terms the configuration,\nand have a REGARDS specific plugin adapter, while all the rest of the code\nknows nothing about REGARDS plugins."),(0,o.kt)("h2",{id:"stac-rest-module"},(0,o.kt)("inlineCode",{parentName:"h2"},"stac-rest")," module"),(0,o.kt)("p",null,"This module provides four controllers, corresponding to each sub-section\nof the STAC REST API:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"the ",(0,o.kt)("inlineCode",{parentName:"li"},"CoreController"),", providing the ",(0,o.kt)("inlineCode",{parentName:"li"},"GET /")," query,"),(0,o.kt)("li",{parentName:"ul"},"the ",(0,o.kt)("inlineCode",{parentName:"li"},"ConformanceCOntroller"),", providing the ",(0,o.kt)("inlineCode",{parentName:"li"},"GET /conformance/")," query,"),(0,o.kt)("li",{parentName:"ul"},"more interestingly, the ",(0,o.kt)("inlineCode",{parentName:"li"},"OGCFeatureController"),", providing the four ",(0,o.kt)("inlineCode",{parentName:"li"},"GET"),"\nqueries to access collections and items,"),(0,o.kt)("li",{parentName:"ul"},"and finally, the ",(0,o.kt)("inlineCode",{parentName:"li"},"ItemSearchCOntroller"),", providing three endpoints:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"GET /search"),", part of the standard,"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"POST /search"),", part of the standard,"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"GET /otherPage"),", which is a custom endpoint of this plugin, allowing\nto paginate item search results.")))),(0,o.kt)("h2",{id:"stac-service-module"},(0,o.kt)("inlineCode",{parentName:"h2"},"stac-service")," module"),(0,o.kt)("p",null,"This module is central, using domain entities from ",(0,o.kt)("inlineCode",{parentName:"p"},"stac-domain"),", and allowing\nadapters ",(0,o.kt)("inlineCode",{parentName:"p"},"stac-rest")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"stac-plugin")," to do their work."),(0,o.kt)("h1",{id:"search"},"Search"),(0,o.kt)("p",null,"The mechanism for searching is to create an ",(0,o.kt)("inlineCode",{parentName:"p"},"ItemSearchBody")," instance\n(from the ",(0,o.kt)("inlineCode",{parentName:"p"},"GET /search")," query parameters, from the ",(0,o.kt)("inlineCode",{parentName:"p"},"POST /search")," body\nor from the ",(0,o.kt)("inlineCode",{parentName:"p"},"GET /otherPage")," query parameter), and to use this ",(0,o.kt)("inlineCode",{parentName:"p"},"ItemSearchBody"),"\nto build an ",(0,o.kt)("inlineCode",{parentName:"p"},"ICriterion"),"."),(0,o.kt)("p",null,"Once we have an ",(0,o.kt)("inlineCode",{parentName:"p"},"ICriterion"),", we can use the catalog search service\nand query Elasticsearch. The results are then transformed into\nSTAC ",(0,o.kt)("inlineCode",{parentName:"p"},"Item"),"s, and collected into an ",(0,o.kt)("inlineCode",{parentName:"p"},"ItemSearchResponse"),"."),(0,o.kt)("h1",{id:"collection-management"},"Collection management"),(0,o.kt)("h2",{id:"static-collections"},"Static collections"),(0,o.kt)("p",null,"In the STAC standard, STAC collections are meant to hold a rather small number\nof items, in the hundreds at most. This is why, if the catalog contains a lot\nof items, it is a good idea to split them in many different collections. "),(0,o.kt)("p",null,"However, REGARDS already has the notion of collection/datasets, so we recreate\na tree of STAC collections from them."),(0,o.kt)("p",null,"REGARDS Collections can reference other collections, allowing to build a tree\nof collections. Similarly, datasets can reference collections. This is used\nby the STAC static collection mechanism to build a tree of STAC collections."),(0,o.kt)("p",null,"At the root level, static collections display links to the collections or datasets\nwith no parent collection (referencing no other REGARDS collection)."),(0,o.kt)("p",null,"A user navigating to a STAC collection made from a REGARDS collection will see:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"if this collection is referenced by other collections/datasets: links to these collections/datasets,"),(0,o.kt)("li",{parentName:"ul"},"if this collection has only items, the link to the list of items.")),(0,o.kt)("p",null,"A user navigating to a STAC collection made from a REGARDS dataset will see:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"the link to the list of items in this dataset.")),(0,o.kt)("h2",{id:"dynamic-collections"},"Dynamic collections"),(0,o.kt)("p",null,"The user may choose to select some of the configured STAC properties\n(even the mandatory datetime property) as levels in a dynamic tree."),(0,o.kt)("p",null,"Each level has at least one sublevel, but may have more.\nFor instance, datetime properties may have several sublevel consisting of\nselecting the year, then the month, then the day."),(0,o.kt)("p",null,'The dynamic collection is entirely configured in the plugin configuration,\nthanks to the "dynamic collection level" and "dynamic collection format"\nparameters of the STAC properties. The documentation for these parameters\nexplains in details how to set their values correctly.'),(0,o.kt)("p",null,"Dynamic collections domain classes are separated in two aspects:\ndefinitions and values."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Definitions are parsed from the ",(0,o.kt)("inlineCode",{parentName:"p"},"StacPropertyConfiguration"),"s.\nThey define the structure of the dynamic collections.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Values are what is provided by the user navigating in collections.\nValues are represented as base64 encoding of the JSON representation\nof key/values. The keys are the names of STAC properties. The values\nare partial or complete values for the properties."))),(0,o.kt)("p",null,"A dynamic collection value allows to provide all possible sub-values,\ncorresponding to child collections. For instance, a dynamic collection\nvalue finishing with a datetime property for which the year is given,\ncan lead to all sub-collections for the months of the chosen year."),(0,o.kt)("p",null,"Once a dynamic collection value is fully completed for the corresponding\ndynamic collection definition, when all the level definitions are\nfully valued. At that point, the STAC plugin can transform the dynamic\ncollection value to an ",(0,o.kt)("inlineCode",{parentName:"p"},"ItemSearchBody"),". Then we reuse the search\nmechanism with this ",(0,o.kt)("inlineCode",{parentName:"p"},"ItemSearchBody"),"."),(0,o.kt)("h1",{id:"link-management"},"Link management"),(0,o.kt)("p",null,"STAC is based extensively on links between entities. Items link\nto collections, collections link to their inner items, to parent\nor child collections."),(0,o.kt)("p",null,"However, links provided by our plugin must authenticate the current user.\nIn STAC, links are only defined by their URL, and it is not pssible\nto provide authentication headers to be used by the STAC client.\nFortunately, REGARDS allows to pass the authentication token as\na query parameter named ",(0,o.kt)("inlineCode",{parentName:"p"},"token"),". The plugin leverages this mechanism\nand generates links with this parameter."),(0,o.kt)("p",null,"The class ",(0,o.kt)("inlineCode",{parentName:"p"},"LinkCreatorServiceImpl")," in the ",(0,o.kt)("inlineCode",{parentName:"p"},"stac-service")," module\nis responsible for taking a ",(0,o.kt)("inlineCode",{parentName:"p"},"JWTAuthentication")," as input, and\nprovide links with links with a valid token."),(0,o.kt)("p",null,"However, these links will be valid only as long as the token is,\nand tokens have by default a 2 hour expiration. This means that\nthe user can not bookmark links provided by our plugin, as they\nwill expire in a short time."),(0,o.kt)("h2",{id:"stac-browser-modifications"},"STAC browser modifications"),(0,o.kt)("p",null,"Since the official STAC browser implementation (",(0,o.kt)("a",{parentName:"p",href:"https://github.com/radiantearth/stac-browser"},"here")," on github)\ndoes not work with links having the ",(0,o.kt)("inlineCode",{parentName:"p"},"token")," query parameter,\na modified version of the STAC browser can be found ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/glmxndr/stac-browser"},"here"),".\nThis patched version allows to work with the REGARDS ",(0,o.kt)("inlineCode",{parentName:"p"},"token")," query parameters,\nat least until the pull request is merged."))}m.isMDXComponent=!0}}]);