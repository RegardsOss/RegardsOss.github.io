"use strict";(self.webpackChunkregardsoss_github_io=self.webpackChunkregardsoss_github_io||[]).push([[97867],{49933:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>a});var s=i(74848),t=i(28453);const o={id:"backend-catalog-stac-plugin",title:"STAC plugin",sidebar_label:"STAC",slug:"/development/backend/services/catalog/stac-plugin/"},l="Overview",r={id:"development/backend/regards/catalog/plugins/backend-catalog-stac-plugin",title:"STAC plugin",description:"The STAC plugin provides a STAC spec interface for any REGARDS project.",source:"@site/versioned_docs/version-1.14/development/backend/regards/catalog/plugins/stac-plugin.md",sourceDirName:"development/backend/regards/catalog/plugins",slug:"/development/backend/services/catalog/stac-plugin/",permalink:"/docs/1.14/development/backend/services/catalog/stac-plugin/",draft:!1,unlisted:!1,editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/versioned_docs/version-1.14/development/backend/regards/catalog/plugins/stac-plugin.md",tags:[],version:"1.14",frontMatter:{id:"backend-catalog-stac-plugin",title:"STAC plugin",sidebar_label:"STAC",slug:"/development/backend/services/catalog/stac-plugin/"}},c={},a=[{value:"Programming style",id:"programming-style",level:2},{value:"Immutability",id:"immutability",level:3},{value:"Purity",id:"purity",level:3},{value:"Dependency injection",id:"dependency-injection",level:3},{value:"Programming to an interface",id:"programming-to-an-interface",level:3},{value:"Single-responsibility principle",id:"single-responsibility-principle",level:3},{value:"Logging",id:"logging",level:2},{value:"Error management",id:"error-management",level:2},{value:"<code>stac-domain</code> module",id:"stac-domain-module",level:2},{value:"<code>stac-plugin</code> module",id:"stac-plugin-module",level:2},{value:"<code>stac-rest</code> module",id:"stac-rest-module",level:2},{value:"<code>stac-service</code> module",id:"stac-service-module",level:2},{value:"Static collections",id:"static-collections",level:2},{value:"Dynamic collections",id:"dynamic-collections",level:2},{value:"STAC browser modifications",id:"stac-browser-modifications",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"overview",children:"Overview"})}),"\n",(0,s.jsxs)(n.p,{children:["The STAC plugin provides a STAC spec interface for any REGARDS project.\nSee ",(0,s.jsx)(n.a,{href:"https://stacspec.org/",children:"the STAC spec base page"})," for more information\non this standard."]}),"\n",(0,s.jsx)(n.p,{children:"The STAC plugin consists of four layers:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["the domain layer, in the maven module ",(0,s.jsx)(n.code,{children:"stac-domain"}),","]}),"\n",(0,s.jsxs)(n.li,{children:["the service layer, in the maven module ",(0,s.jsx)(n.code,{children:"stac-service"}),", depending on ",(0,s.jsx)(n.code,{children:"stac-domain"}),","]}),"\n",(0,s.jsxs)(n.li,{children:["the REST layer, in the maven module ",(0,s.jsx)(n.code,{children:"stac-rest"}),", depending on ",(0,s.jsx)(n.code,{children:"stac-service"}),","]}),"\n",(0,s.jsxs)(n.li,{children:["the plugin layer, in the maven module ",(0,s.jsx)(n.code,{children:"stac-plugin"}),", depending on ",(0,s.jsx)(n.code,{children:"stac-rest"}),",\nproviding the actual plugin and which can generate the shaded jar to be deployed\nusing the ",(0,s.jsx)(n.code,{children:"maven-shade"})," plugin."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["There also is a ",(0,s.jsx)(n.code,{children:"stac-test"})," module providing utilities for the tests in all the other\nmodules."]}),"\n",(0,s.jsx)(n.p,{children:'From a "domain driven" perspective:'}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"stac-domain"})," provides the domain entities,"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"stac-rest"})," provides the STAC API REST adapter, allowing clients to interact with the plugin,"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"stac-plugin"})," provides the plugin adapter, allowing to interact with the REGARDS system,\nloading the plugin configuration and mappers from configuration to domain entities."]}),"\n"]}),"\n",(0,s.jsx)(n.h1,{id:"general-notes",children:"General notes"}),"\n",(0,s.jsx)(n.h2,{id:"programming-style",children:"Programming style"}),"\n",(0,s.jsx)(n.h3,{id:"immutability",children:"Immutability"}),"\n",(0,s.jsxs)(n.p,{children:["As much as possible, the code relies on immutable entities and collections\nand pure functions. The domain entities make heavy use of the ",(0,s.jsx)(n.code,{children:"vavr"})," collections."]}),"\n",(0,s.jsxs)(n.p,{children:["Entities are generally ",(0,s.jsx)(n.code,{children:"lombok.Value"}),", making them immutable with minimal\namount of code."]}),"\n",(0,s.jsx)(n.h3,{id:"purity",children:"Purity"}),"\n",(0,s.jsx)(n.p,{children:"Service methods are as pure as possible, except for logging and\ncalls to catalog search. Most other side effects are pushed to the\nREST and plugin adapters."}),"\n",(0,s.jsx)(n.h3,{id:"dependency-injection",children:"Dependency injection"}),"\n",(0,s.jsxs)(n.p,{children:["Where it is needed, in all classes (services especially), use constructor\ndependency injection. All service dependencies are declared as final\nand an explicit constructor is ",(0,s.jsx)(n.code,{children:"@Autowired"}),". This allows to ensure that\nall the tests are forced to instanciate (or mock) all the dependencies\nfor any given service."]}),"\n",(0,s.jsx)(n.h3,{id:"programming-to-an-interface",children:"Programming to an interface"}),"\n",(0,s.jsx)(n.p,{children:"All services have a corresponding interface. Only the interfaces are\nreferenced in other services/components/REST controllers."}),"\n",(0,s.jsx)(n.h3,{id:"single-responsibility-principle",children:"Single-responsibility principle"}),"\n",(0,s.jsx)(n.p,{children:"Most services tend to have only one purpose: even if it not always achieved\nto prevent a too big number of classes, the goal is to have one method per\nservice interface. Small service make them require less dependencies,\nless autowired components, which makes them generally easier to set up for tests."}),"\n",(0,s.jsx)(n.h2,{id:"logging",children:"Logging"}),"\n",(0,s.jsxs)(n.p,{children:["Each request to the STAC REST layer sets a UUID for the request.\n(See the ",(0,s.jsx)(n.code,{children:"StacRequestCorrelationId"})," and ",(0,s.jsx)(n.code,{children:"LogAndCorrelationIdInterceptor"})," classes.)"]}),"\n",(0,s.jsxs)(n.p,{children:["In order to have log messages display this UUID, one should not use the ",(0,s.jsx)(n.code,{children:"LOGGER.info()"}),",\n",(0,s.jsx)(n.code,{children:"LOGGER.error()"}),", etc. methods directly."]}),"\n",(0,s.jsxs)(n.p,{children:["Instead, the class ",(0,s.jsx)(n.code,{children:"StacRequestCorrelationId"})," provides static methods allowing\nto log ",(0,s.jsx)(n.code,{children:"trace"}),", ",(0,s.jsx)(n.code,{children:"debug"}),", ",(0,s.jsx)(n.code,{children:"info"}),", ",(0,s.jsx)(n.code,{children:"warn"})," and ",(0,s.jsx)(n.code,{children:"error"})," messages. These methods\nshould be used everywhere (except for tests, and during the plugin loading phase)."]}),"\n",(0,s.jsx)(n.h2,{id:"error-management",children:"Error management"}),"\n",(0,s.jsxs)(n.p,{children:["Throwing exceptions is avoided at all costs. Instead, if a method may fail,\nwe wrap the result in a ",(0,s.jsx)(n.code,{children:"io.vavr.Try"}),". In order to do this, and to ensure\nthat the user provides logging or a meaningful error exception, creating\n",(0,s.jsx)(n.code,{children:"Try"})," instances is avoided, and the ",(0,s.jsx)(n.code,{children:"TryDSL"})," methods are used instead.\nSee the ",(0,s.jsx)(n.code,{children:"TryDSL"})," class in the ",(0,s.jsx)(n.code,{children:"stac-domain"})," module for more information."]}),"\n",(0,s.jsx)(n.h1,{id:"modules",children:"Modules"}),"\n",(0,s.jsxs)(n.h2,{id:"stac-domain-module",children:[(0,s.jsx)(n.code,{children:"stac-domain"})," module"]}),"\n",(0,s.jsx)(n.p,{children:"The domain provides:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["useful constants in the ",(0,s.jsx)(n.code,{children:"StacSpecConstants"})," class (version numbers,\ncommon property names, etc.),"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["the package ",(0,s.jsx)(n.code,{children:"spec.v1_0_0_beta2"}),", which contains the STAC spec entities\n(",(0,s.jsx)(n.code,{children:"Item"}),", ",(0,s.jsx)(n.code,{children:"Collection"}),", ",(0,s.jsx)(n.code,{children:"Catalog"}),") at the latest version of the STAC spec\nat the time of implementation (version 1.0.0-beta.2),"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["the package ",(0,s.jsx)(n.code,{children:"api.v1_0_0_beta1"}),", which contains the STAC REST API entities\nfor REST input and output, for instance the ",(0,s.jsx)(n.code,{children:"ItemSearchBody"})," object which\nrepresents search query bodies, or ",(0,s.jsx)(n.code,{children:"ItemCollectionResponse"})," which represent\nlist of items (",(0,s.jsx)(n.code,{children:"/search"})," results, or result for a ",(0,s.jsx)(n.code,{children:"/collections/items"})," query),"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["the ",(0,s.jsx)(n.code,{children:"properties"})," package, which contains the ",(0,s.jsx)(n.code,{children:"StacProperty"})," class.\nThis class is central to the plugin, in that the configuration provides a\nlist of ",(0,s.jsx)(n.code,{children:"StacProperty"})," values, and these properties are used almost\neverywhere. They allow to convert the REGARDS documents into STAC Items,\nand convert the document properties in their STAC spec counterparts."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["the ",(0,s.jsx)(n.code,{children:"properties.dyncoll"})," package, containing all the domain entities related\nto dynamic collections, dynamic collection level definitions and values."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["the ",(0,s.jsx)(n.code,{children:"error"})," package provides error management within the plugin."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["the ",(0,s.jsx)(n.code,{children:"util"})," package, which strictly speaking should not be part of the domain,\nbut does not justify a whole new package all by itself. It contains some\nutilities and helpers, as well as a small DSL to work with ",(0,s.jsx)(n.code,{children:"io.vavr.Try"})," values."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.h2,{id:"stac-plugin-module",children:[(0,s.jsx)(n.code,{children:"stac-plugin"})," module"]}),"\n",(0,s.jsxs)(n.p,{children:["This module declares the main plugin class: ",(0,s.jsx)(n.code,{children:"StacSearchPlugin"}),".\nThis class implements ",(0,s.jsx)(n.code,{children:"ISearchEngine"}),", but this is only to be able to\nreuse the UI for plugin configuration. The implementation of this interface\nis never actually used anywhere, since the plugin declares that it is\nnot applicable to any type of search."]}),"\n",(0,s.jsx)(n.p,{children:"The module also declares several plugin parameter classes, which conform\nto the conventions for REGARDS plugins."}),"\n",(0,s.jsxs)(n.p,{children:["It also provides an implementation for the ",(0,s.jsx)(n.code,{children:"ConfigurationAccessorFactory"}),"\ninterface named ",(0,s.jsx)(n.code,{children:"StacConfigurationDomainAccessor"}),", which allows to access\nthe plugin configuration as it is defined in the ",(0,s.jsx)(n.code,{children:"stac-domain"})," module\n",(0,s.jsx)(n.code,{children:"properties"})," package."]}),"\n",(0,s.jsx)(n.p,{children:"This mechanism allows to define precisely in domain terms the configuration,\nand have a REGARDS specific plugin adapter, while all the rest of the code\nknows nothing about REGARDS plugins."}),"\n",(0,s.jsxs)(n.h2,{id:"stac-rest-module",children:[(0,s.jsx)(n.code,{children:"stac-rest"})," module"]}),"\n",(0,s.jsx)(n.p,{children:"This module provides four controllers, corresponding to each sub-section\nof the STAC REST API:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["the ",(0,s.jsx)(n.code,{children:"CoreController"}),", providing the ",(0,s.jsx)(n.code,{children:"GET /"})," query,"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["the ",(0,s.jsx)(n.code,{children:"ConformanceCOntroller"}),", providing the ",(0,s.jsx)(n.code,{children:"GET /conformance/"})," query,"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["more interestingly, the ",(0,s.jsx)(n.code,{children:"OGCFeatureController"}),", providing the four ",(0,s.jsx)(n.code,{children:"GET"}),"\nqueries to access collections and items,"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["and finally, the ",(0,s.jsx)(n.code,{children:"ItemSearchCOntroller"}),", providing three endpoints:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"GET /search"}),", part of the standard,"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"POST /search"}),", part of the standard,"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"GET /otherPage"}),", which is a custom endpoint of this plugin, allowing\nto paginate item search results."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.h2,{id:"stac-service-module",children:[(0,s.jsx)(n.code,{children:"stac-service"})," module"]}),"\n",(0,s.jsxs)(n.p,{children:["This module is central, using domain entities from ",(0,s.jsx)(n.code,{children:"stac-domain"}),", and allowing\nadapters ",(0,s.jsx)(n.code,{children:"stac-rest"})," and ",(0,s.jsx)(n.code,{children:"stac-plugin"})," to do their work."]}),"\n",(0,s.jsx)(n.h1,{id:"search",children:"Search"}),"\n",(0,s.jsxs)(n.p,{children:["The mechanism for searching is to create an ",(0,s.jsx)(n.code,{children:"ItemSearchBody"})," instance\n(from the ",(0,s.jsx)(n.code,{children:"GET /search"})," query parameters, from the ",(0,s.jsx)(n.code,{children:"POST /search"})," body\nor from the ",(0,s.jsx)(n.code,{children:"GET /otherPage"})," query parameter), and to use this ",(0,s.jsx)(n.code,{children:"ItemSearchBody"}),"\nto build an ",(0,s.jsx)(n.code,{children:"ICriterion"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["Once we have an ",(0,s.jsx)(n.code,{children:"ICriterion"}),", we can use the catalog search service\nand query Elasticsearch. The results are then transformed into\nSTAC ",(0,s.jsx)(n.code,{children:"Item"}),"s, and collected into an ",(0,s.jsx)(n.code,{children:"ItemSearchResponse"}),"."]}),"\n",(0,s.jsx)(n.h1,{id:"collection-management",children:"Collection management"}),"\n",(0,s.jsx)(n.h2,{id:"static-collections",children:"Static collections"}),"\n",(0,s.jsx)(n.p,{children:"In the STAC standard, STAC collections are meant to hold a rather small number\nof items, in the hundreds at most. This is why, if the catalog contains a lot\nof items, it is a good idea to split them in many different collections."}),"\n",(0,s.jsx)(n.p,{children:"However, REGARDS already has the notion of collection/datasets, so we recreate\na tree of STAC collections from them."}),"\n",(0,s.jsx)(n.p,{children:"REGARDS Collections can reference other collections, allowing to build a tree\nof collections. Similarly, datasets can reference collections. This is used\nby the STAC static collection mechanism to build a tree of STAC collections."}),"\n",(0,s.jsx)(n.p,{children:"At the root level, static collections display links to the collections or datasets\nwith no parent collection (referencing no other REGARDS collection)."}),"\n",(0,s.jsx)(n.p,{children:"A user navigating to a STAC collection made from a REGARDS collection will see:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"if this collection is referenced by other collections/datasets: links to these collections/datasets,"}),"\n",(0,s.jsx)(n.li,{children:"if this collection has only items, the link to the list of items."}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"A user navigating to a STAC collection made from a REGARDS dataset will see:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"the link to the list of items in this dataset."}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"dynamic-collections",children:"Dynamic collections"}),"\n",(0,s.jsx)(n.p,{children:"The user may choose to select some of the configured STAC properties\n(even the mandatory datetime property) as levels in a dynamic tree."}),"\n",(0,s.jsx)(n.p,{children:"Each level has at least one sublevel, but may have more.\nFor instance, datetime properties may have several sublevel consisting of\nselecting the year, then the month, then the day."}),"\n",(0,s.jsx)(n.p,{children:'The dynamic collection is entirely configured in the plugin configuration,\nthanks to the "dynamic collection level" and "dynamic collection format"\nparameters of the STAC properties. The documentation for these parameters\nexplains in details how to set their values correctly.'}),"\n",(0,s.jsx)(n.p,{children:"Dynamic collections domain classes are separated in two aspects:\ndefinitions and values."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Definitions are parsed from the ",(0,s.jsx)(n.code,{children:"StacPropertyConfiguration"}),"s.\nThey define the structure of the dynamic collections."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Values are what is provided by the user navigating in collections.\nValues are represented as base64 encoding of the JSON representation\nof key/values. The keys are the names of STAC properties. The values\nare partial or complete values for the properties."}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"A dynamic collection value allows to provide all possible sub-values,\ncorresponding to child collections. For instance, a dynamic collection\nvalue finishing with a datetime property for which the year is given,\ncan lead to all sub-collections for the months of the chosen year."}),"\n",(0,s.jsxs)(n.p,{children:["Once a dynamic collection value is fully completed for the corresponding\ndynamic collection definition, when all the level definitions are\nfully valued. At that point, the STAC plugin can transform the dynamic\ncollection value to an ",(0,s.jsx)(n.code,{children:"ItemSearchBody"}),". Then we reuse the search\nmechanism with this ",(0,s.jsx)(n.code,{children:"ItemSearchBody"}),"."]}),"\n",(0,s.jsx)(n.h1,{id:"link-management",children:"Link management"}),"\n",(0,s.jsx)(n.p,{children:"STAC is based extensively on links between entities. Items link\nto collections, collections link to their inner items, to parent\nor child collections."}),"\n",(0,s.jsxs)(n.p,{children:["However, links provided by our plugin must authenticate the current user.\nIn STAC, links are only defined by their URL, and it is not pssible\nto provide authentication headers to be used by the STAC client.\nFortunately, REGARDS allows to pass the authentication token as\na query parameter named ",(0,s.jsx)(n.code,{children:"token"}),". The plugin leverages this mechanism\nand generates links with this parameter."]}),"\n",(0,s.jsxs)(n.p,{children:["The class ",(0,s.jsx)(n.code,{children:"LinkCreatorServiceImpl"})," in the ",(0,s.jsx)(n.code,{children:"stac-service"})," module\nis responsible for taking a ",(0,s.jsx)(n.code,{children:"JWTAuthentication"})," as input, and\nprovide links with links with a valid token."]}),"\n",(0,s.jsx)(n.p,{children:"However, these links will be valid only as long as the token is,\nand tokens have by default a 2 hour expiration. This means that\nthe user can not bookmark links provided by our plugin, as they\nwill expire in a short time."}),"\n",(0,s.jsx)(n.h2,{id:"stac-browser-modifications",children:"STAC browser modifications"}),"\n",(0,s.jsxs)(n.p,{children:["Since the official STAC browser implementation (",(0,s.jsx)(n.a,{href:"https://github.com/radiantearth/stac-browser",children:"here"})," on github)\ndoes not work with links having the ",(0,s.jsx)(n.code,{children:"token"})," query parameter,\na modified version of the STAC browser can be found ",(0,s.jsx)(n.a,{href:"https://github.com/glmxndr/stac-browser",children:"here"}),".\nThis patched version allows to work with the REGARDS ",(0,s.jsx)(n.code,{children:"token"})," query parameters,\nat least until the pull request is merged."]})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>l,x:()=>r});var s=i(96540);const t={},o=s.createContext(t);function l(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);