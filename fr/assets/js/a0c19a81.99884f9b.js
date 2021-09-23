"use strict";(self.webpackChunkRegardsOss_github_io=self.webpackChunkRegardsOss_github_io||[]).push([[88312],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return m}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(a),m=r,h=u["".concat(l,".").concat(m)]||u[m]||d[m]||i;return a?n.createElement(h,o(o({ref:t},c),{},{components:a})):n.createElement(h,o({ref:t},c))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var p=2;p<i;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},23500:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return c},default:function(){return u}});var n=a(87462),r=a(63366),i=(a(67294),a(3905)),o=["components"],s={id:"backend-catalog-search-api",title:"REGARDS search API",sidebar_label:"Search",slug:"/development/backend/catalog/search-api/"},l=void 0,p={unversionedId:"development/backend/regards/catalog/api/backend-catalog-search-api",id:"version-1.4.0/development/backend/regards/catalog/api/backend-catalog-search-api",isDocsHomePage:!1,title:"REGARDS search API",description:"At the moment, REGARDS can expose two search API :",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-1.4.0/development/backend/regards/catalog/api/search-api.md",sourceDirName:"development/backend/regards/catalog/api",slug:"/development/backend/catalog/search-api/",permalink:"/fr/docs/1.4.0/development/backend/catalog/search-api/",editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/versioned_docs/version-1.4.0/development/backend/regards/catalog/api/search-api.md",tags:[],version:"1.4.0",frontMatter:{id:"backend-catalog-search-api",title:"REGARDS search API",sidebar_label:"Search",slug:"/development/backend/catalog/search-api/"},sidebar:"version-1.4.0/dev",previous:{title:"Overview",permalink:"/fr/docs/1.4.0/development/backend/catalog/overview/"},next:{title:"Catalog service",permalink:"/fr/docs/1.4.0/development/backend/catalog/service-plugins/"}},c=[{value:"How to access API endpoints",id:"how-to-access-api-endpoints",children:[]},{value:"Legacy API",id:"legacy-api",children:[{value:"Legacy URLs",id:"legacy-urls",children:[]},{value:"Legacy headers",id:"legacy-headers",children:[]},{value:"Query parameters",id:"query-parameters",children:[]},{value:"Using CURL to run search requests",id:"using-curl-to-run-search-requests",children:[]},{value:"Using Lucene standard query parser",id:"using-lucene-standard-query-parser",children:[]}]},{value:"Open Search API",id:"open-search-api",children:[{value:"General",id:"general",children:[]},{value:"Time extension configuration",id:"time-extension-configuration",children:[]},{value:"Configure possible values of attributes in opensearch descriptor",id:"configure-possible-values-of-attributes-in-opensearch-descriptor",children:[]},{value:"Request example",id:"request-example",children:[]},{value:"Open Search URLs",id:"open-search-urls",children:[]},{value:"Open search headers",id:"open-search-headers",children:[]},{value:"Open Search Query parameters",id:"open-search-query-parameters",children:[]}]}],d={toc:c};function u(e){var t=e.components,a=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"At the moment, REGARDS can expose two search API :"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Legacy Search API")," with a query mechanism based on Lucene standard query parser returning GeoJSON feature collection,"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Open Search")," API with parameter, time and geo extensions returning standard ATOM response or GeoJSON feature collection and exposing an Open Search description.")),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Search API can be added using plugin mechanism."))),(0,i.kt)("h2",{id:"how-to-access-api-endpoints"},"How to access API endpoints"),(0,i.kt)("p",null,"You can access each endpoint of this API thanks to a ",(0,i.kt)("inlineCode",{parentName:"p"},"Curl")," request."),(0,i.kt)("p",null,"You can request without auhentication by adding the REGARDS project in the request thanks to the parameter ",(0,i.kt)("inlineCode",{parentName:"p"},"scope")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"curl http://localhost:<{{ include.name }} port>/<endpoint>?scope=<project>\n")),(0,i.kt)("p",null,"Or you can authenticate to access admin endpoints. To do so, use the ",(0,i.kt)("a",{parentName:"p",href:"../../authentication/api/"},"authentication API")," to get a token and then add the token to the request headers."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"curl http://localhost:<{{ include.name }} port>/<endpoint> -H 'Authorization: bearer <token>'\n")),(0,i.kt)("p",null,"To access endpoints from ",(0,i.kt)("inlineCode",{parentName:"p"},"outside"),' the microservice installation server, you need to use the "gateway" microservice. To do so, use the here under access point instead of the previous one.'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"curl http://<gateway host>:<gateway port>/{{ include.name }}/api/v1/<endpoint>\n")),(0,i.kt)("h2",{id:"legacy-api"},"Legacy API"),(0,i.kt)("h3",{id:"legacy-urls"},"Legacy URLs"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"GET")," ",(0,i.kt)("inlineCode",{parentName:"li"},"/engines/legacy/entities/search")," : search entities"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"GET")," ",(0,i.kt)("inlineCode",{parentName:"li"},"/engines/legacy/entities/{urn}")," : get a single entity from its Unique Resource Name"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"GET")," ",(0,i.kt)("inlineCode",{parentName:"li"},"/engines/legacy/collections/search")," : search collections"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"GET")," ",(0,i.kt)("inlineCode",{parentName:"li"},"/engines/legacy/collections/{urn}")," : get a single entity from its Unique Resource Name"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"GET")," ",(0,i.kt)("inlineCode",{parentName:"li"},"/engines/legacy/documents/search")," : search documents"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"GET")," ",(0,i.kt)("inlineCode",{parentName:"li"},"/engines/legacy/documents/{urn}")," : get a single document from its Unique Resource Name"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"GET")," ",(0,i.kt)("inlineCode",{parentName:"li"},"/engines/legacy/datasets/search")," : search datasets"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"GET")," ",(0,i.kt)("inlineCode",{parentName:"li"},"/engines/legacy/datasets/{urn}")," : get a single dataset from its Unique Resource Name"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"GET")," ",(0,i.kt)("inlineCode",{parentName:"li"},"/engines/legacy/dataobjects/search")," : search data objets"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"GET")," ",(0,i.kt)("inlineCode",{parentName:"li"},"/engines/legacy/dataobjects/{urn}")," : get a single data object from its Unique Resource Name"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"GET")," ",(0,i.kt)("inlineCode",{parentName:"li"},"/engines/legacy/dataobjects/datasets/search")," : search data objects returning datasets"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"GET")," ",(0,i.kt)("inlineCode",{parentName:"li"},"/engines/legacy/datasets/{urn}/dataobjects/search")," : search data objects in the specified dataset")),(0,i.kt)("h3",{id:"legacy-headers"},"Legacy headers"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Authorization: Bearer {token}")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Content-Type: application/json;charset=UTF-8")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Accept: application/json"))),(0,i.kt)("h3",{id:"query-parameters"},"Query parameters"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"q")," : The search keywords, for example ",(0,i.kt)("inlineCode",{parentName:"li"},"altitude:[1000 TO 2000] OR name:sensor-*"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"facets")," : The array of attribute names."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"page")," : Page you want to retrieve, 0 indexed and defaults to 0."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"size")," : Size of the page you want to retrieve, defaults to 20."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"sort")," : Properties that should be sorted by in the format ",(0,i.kt)("inlineCode",{parentName:"li"},"property,property(,ASC/DESC)"),". Default sort direction is ascending. Use multiple ",(0,i.kt)("inlineCode",{parentName:"li"},"sort")," parameters if you want to switch directions, e.g. ",(0,i.kt)("inlineCode",{parentName:"li"},"?sort=firstname&sort=lastname,asc."))),(0,i.kt)("h3",{id:"using-curl-to-run-search-requests"},"Using CURL to run search requests"),(0,i.kt)("p",null,"To be able to run search request with cURL tool, you have to encode url parameters. To do so, you can use the here under cURL syntaxe to run GET request with encoded parameters :   "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"curl -G 'http://<host>/api/v1//rs-catalog/engines/legacy/dataobjects/search' \\\n--data-urlencode \"q=(param1:test OR param2:test)\" \\\n-H 'Authorization: Bearer <token>' -H 'Accept: application/json'\n")),(0,i.kt)("h3",{id:"using-lucene-standard-query-parser"},"Using Lucene standard query parser"),(0,i.kt)("p",null,"See ",(0,i.kt)("a",{parentName:"p",href:"../../../appendices/lucene-query/"},"Create a Lucene standard query parser"),"."),(0,i.kt)("h2",{id:"open-search-api"},"Open Search API"),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Open search engine is not available by default and has to be configured."))),(0,i.kt)("p",null,"Opensearch configuration is accessible form the Administration Interface."),(0,i.kt)("p",null,"This configration is divided in 3 parts"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"Link opensearch engine to catalog data"),". You can associate the opensearch engine to all the REGARDS catalog or associate it to one specific dataset."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"Configure opensearch responses headers"),"."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"Configure opensearch parameters"),". Here you can define specific opensearch parameters.")),(0,i.kt)("h3",{id:"general"},"General"),(0,i.kt)("p",null,"By default, all REGARDS parameters are defined by without any needed configuration. Configure one or many of the regards parameters allow to define the generation of possible values in opensearch descriptor file."),(0,i.kt)("h3",{id:"time-extension-configuration"},"Time extension configuration"),(0,i.kt)("p",null,'To be able to use the opensearch time extension you have to configure the opensearch engine to define the two stanadrd parameters "start" and "end".',(0,i.kt)("br",{parentName:"p"}),"\n","To do so, follow the here under example :  "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("b",null,"Define [time.start] parameter"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"  Alias : timeStart\n  Name : start\n  Namespace : time\n  full json path of associated REGARDS attribute : properties.date\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("b",null,"Define [time.end] parameter"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"  Alias : timeEnd\n  Name : end\n  Namespace : time\n  full json path of associated REGARDS attribute : properties.date\n")),(0,i.kt)("p",null,"NOTE : ",(0,i.kt)("inlineCode",{parentName:"p"},"properties.date")," must be replaced by the date attribute to use in the configured REGARDS catalog.  "),(0,i.kt)("h3",{id:"configure-possible-values-of-attributes-in-opensearch-descriptor"},"Configure possible values of attributes in opensearch descriptor"),(0,i.kt)("p",null,"  To do so, you have to configure the parameters to enable the ",(0,i.kt)("inlineCode",{parentName:"p"},"possible value generation")," and the ",(0,i.kt)("inlineCode",{parentName:"p"},"value number limit"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"  Name : parameter1\n  Namespace : regards\n  Enable generation of possible values : true\n  Limit number of possible values : 100\n  full json path of associated REGARDS attribute : properties.parameter1\n")),(0,i.kt)("h3",{id:"request-example"},"Request example"),(0,i.kt)("p",null,"  With the given below time extension configuration you can request the opensearch engine with the here under request :"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"curl 'http://<host>/api/v1/rs-catalog/engines/opensearch/entities/search?timeStart=2010-05-23T08:16:36.921Z&timeEnd=2022-05-23T08:16:36.921Z&properties.parameter1=value1\n")),(0,i.kt)("h3",{id:"open-search-urls"},"Open Search URLs"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"GET")," ",(0,i.kt)("inlineCode",{parentName:"p"},"/engines/opensearch/collections/search")," : search collections")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"GET")," ",(0,i.kt)("inlineCode",{parentName:"p"},"/engines/opensearch/collections/search/opensearchdescription.xml")," : Open Search description for collections")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"GET")," ",(0,i.kt)("inlineCode",{parentName:"p"},"/engines/opensearch/collections/{urn}")," : get a single entity from its Unique Resource Name")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"GET")," ",(0,i.kt)("inlineCode",{parentName:"p"},"/engines/opensearch/documents/search")," : search documents")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"GET")," ",(0,i.kt)("inlineCode",{parentName:"p"},"/engines/opensearch/documents/search/opensearchdescription.xml")," : Open Search description for documents")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"GET")," ",(0,i.kt)("inlineCode",{parentName:"p"},"/engines/opensearch/documents/{urn}")," : get a single document from its Unique Resource Name")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"GET")," ",(0,i.kt)("inlineCode",{parentName:"p"},"/engines/opensearch/datasets/search")," : search datasets")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"GET")," ",(0,i.kt)("inlineCode",{parentName:"p"},"/engines/opensearch/datasets/search/opensearchdescription.xml")," : Open Search description for datasets")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"GET")," ",(0,i.kt)("inlineCode",{parentName:"p"},"/engines/opensearch/datasets/{urn}")," : get a single dataset from its Unique Resource Name")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"GET")," ",(0,i.kt)("inlineCode",{parentName:"p"},"/engines/opensearch/dataobjects/search")," : search data objets")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"GET")," ",(0,i.kt)("inlineCode",{parentName:"p"},"/engines/opensearch/dataobjects/search/opensearchdescription.xml")," : Open Search description for dataobjects")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"GET")," ",(0,i.kt)("inlineCode",{parentName:"p"},"/engines/opensearch/dataobjects/{urn}")," : get a single data object from its Unique Resource Name")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"GET")," ",(0,i.kt)("inlineCode",{parentName:"p"},"/engines/opensearch/datasets/{urn}/dataobjects/search")," : search data objects in the specified dataset")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"GET")," ",(0,i.kt)("inlineCode",{parentName:"p"},"/engines/opensearch/datasets/{urn}/dataobjects/search/opensearchdescription.xml")," : Open Search description for all data objects in specified dataset"))),(0,i.kt)("h3",{id:"open-search-headers"},"Open search headers"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Authorization: Bearer {token}")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Content-Type: application/json;charset=UTF-8")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Accept: application/json")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"Accept: application/atom+xml"))),(0,i.kt)("h3",{id:"open-search-query-parameters"},"Open Search Query parameters"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Use open search description to discover search queries.")))}u.isMDXComponent=!0}}]);