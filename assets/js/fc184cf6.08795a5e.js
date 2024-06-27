"use strict";(self.webpackChunkregardsoss_github_io=self.webpackChunkregardsoss_github_io||[]).push([[39831],{3905:(e,a,t)=>{t.d(a,{Zo:()=>c,kt:()=>h});var n=t(67294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function i(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?i(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function o(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=n.createContext({}),p=function(e){var a=n.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):l(l({},a),e)),t},c=function(e){var a=p(e.components);return n.createElement(s.Provider,{value:a},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},m=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=p(t),m=r,h=d["".concat(s,".").concat(m)]||d[m]||u[m]||i;return t?n.createElement(h,l(l({ref:a},c),{},{components:t})):n.createElement(h,l({ref:a},c))}));function h(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var i=t.length,l=new Array(i);l[0]=m;var o={};for(var s in a)hasOwnProperty.call(a,s)&&(o[s]=a[s]);o.originalType=e,o[d]="string"==typeof e?e:r,l[1]=o;for(var p=2;p<i;p++)l[p]=t[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},44993:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var n=t(87462),r=(t(67294),t(3905));const i={id:"backend-catalog-search-api",title:"REGARDS search API",sidebar_label:"Search",slug:"/development/backend/services/catalog/search-api/"},l=void 0,o={unversionedId:"development/backend/regards/catalog/api/backend-catalog-search-api",id:"version-1.13.0/development/backend/regards/catalog/api/backend-catalog-search-api",title:"REGARDS search API",description:"At the moment, REGARDS can expose two search API :",source:"@site/versioned_docs/version-1.13.0/development/backend/regards/catalog/api/search-api.md",sourceDirName:"development/backend/regards/catalog/api",slug:"/development/backend/services/catalog/search-api/",permalink:"/docs/1.13.0/development/backend/services/catalog/search-api/",draft:!1,editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/versioned_docs/version-1.13.0/development/backend/regards/catalog/api/search-api.md",tags:[],version:"1.13.0",frontMatter:{id:"backend-catalog-search-api",title:"REGARDS search API",sidebar_label:"Search",slug:"/development/backend/services/catalog/search-api/"},sidebar:"dev",previous:{title:"API",permalink:"/docs/1.13.0/development/backend/services/catalog/api-swagger"},next:{title:"Catalog service",permalink:"/docs/1.13.0/development/backend/services/catalog/service-plugins/"}},s={},p=[{value:"Legacy API",id:"legacy-api",level:2},{value:"Legacy URLs",id:"legacy-urls",level:3},{value:"Legacy headers",id:"legacy-headers",level:3},{value:"Query parameters",id:"query-parameters",level:3},{value:"Using CURL to run search requests",id:"using-curl-to-run-search-requests",level:3},{value:"Using Lucene standard query parser",id:"using-lucene-standard-query-parser",level:3},{value:"Open Search API",id:"open-search-api",level:2},{value:"General",id:"general",level:3},{value:"Time extension configuration",id:"time-extension-configuration",level:3},{value:"Configure possible values of attributes in opensearch descriptor",id:"configure-possible-values-of-attributes-in-opensearch-descriptor",level:3},{value:"Request example",id:"request-example",level:3},{value:"Open Search URLs",id:"open-search-urls",level:3},{value:"Open search headers",id:"open-search-headers",level:3},{value:"Open Search Query parameters",id:"open-search-query-parameters",level:3}],c={toc:p},d="wrapper";function u(e){let{components:a,...t}=e;return(0,r.kt)(d,(0,n.Z)({},c,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"At the moment, REGARDS can expose two search API :"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Legacy Search API")," with a query mechanism based on Lucene standard query parser returning GeoJSON feature collection,"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Open Search")," API with parameter, time and geo extensions returning standard ATOM response or GeoJSON feature collection and exposing an Open Search description.")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Search API can be added using plugin mechanism.")),(0,r.kt)("h2",{id:"legacy-api"},"Legacy API"),(0,r.kt)("h3",{id:"legacy-urls"},"Legacy URLs"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"GET")," ",(0,r.kt)("inlineCode",{parentName:"li"},"/engines/legacy/entities/search")," : search entities"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"GET")," ",(0,r.kt)("inlineCode",{parentName:"li"},"/engines/legacy/entities/{urn}")," : get a single entity from its Unique Resource Name"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"GET")," ",(0,r.kt)("inlineCode",{parentName:"li"},"/engines/legacy/collections/search")," : search collections"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"GET")," ",(0,r.kt)("inlineCode",{parentName:"li"},"/engines/legacy/collections/{urn}")," : get a single entity from its Unique Resource Name"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"GET")," ",(0,r.kt)("inlineCode",{parentName:"li"},"/engines/legacy/documents/search")," : search documents"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"GET")," ",(0,r.kt)("inlineCode",{parentName:"li"},"/engines/legacy/documents/{urn}")," : get a single document from its Unique Resource Name"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"GET")," ",(0,r.kt)("inlineCode",{parentName:"li"},"/engines/legacy/datasets/search")," : search datasets"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"GET")," ",(0,r.kt)("inlineCode",{parentName:"li"},"/engines/legacy/datasets/{urn}")," : get a single dataset from its Unique Resource Name"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"GET")," ",(0,r.kt)("inlineCode",{parentName:"li"},"/engines/legacy/dataobjects/search")," : search data objets"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"GET")," ",(0,r.kt)("inlineCode",{parentName:"li"},"/engines/legacy/dataobjects/{urn}")," : get a single data object from its Unique Resource Name"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"GET")," ",(0,r.kt)("inlineCode",{parentName:"li"},"/engines/legacy/dataobjects/datasets/search")," : search data objects returning datasets"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"GET")," ",(0,r.kt)("inlineCode",{parentName:"li"},"/engines/legacy/datasets/{urn}/dataobjects/search")," : search data objects in the specified dataset")),(0,r.kt)("h3",{id:"legacy-headers"},"Legacy headers"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Authorization: Bearer {token}")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Content-Type: application/json;charset=UTF-8")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Accept: application/json"))),(0,r.kt)("h3",{id:"query-parameters"},"Query parameters"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"q")," : The search keywords, for example ",(0,r.kt)("inlineCode",{parentName:"li"},"altitude:[1000 TO 2000] OR name:sensor-*"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"facets")," : The array of attribute names."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"page")," : Page you want to retrieve, 0 indexed and defaults to 0."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"size")," : Size of the page you want to retrieve, defaults to 20."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"sort")," : Properties that should be sorted by in the format ",(0,r.kt)("inlineCode",{parentName:"li"},"property,property(,ASC/DESC)"),". Default sort direction is ascending. Use multiple ",(0,r.kt)("inlineCode",{parentName:"li"},"sort")," parameters if you want to switch directions, e.g. ",(0,r.kt)("inlineCode",{parentName:"li"},"?sort=firstname&sort=lastname,asc."))),(0,r.kt)("h3",{id:"using-curl-to-run-search-requests"},"Using CURL to run search requests"),(0,r.kt)("p",null,"To be able to run search request with cURL tool, you have to encode url parameters. To do so, you can use the here under cURL syntaxe to run GET request with encoded parameters :   "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl -G 'http://<host>/api/v1//rs-catalog/engines/legacy/dataobjects/search' \\\n--data-urlencode \"q=(param1:test OR param2:test)\" \\\n-H 'Authorization: Bearer <token>' -H 'Accept: application/json'\n")),(0,r.kt)("h3",{id:"using-lucene-standard-query-parser"},"Using Lucene standard query parser"),(0,r.kt)("p",null,"See ",(0,r.kt)("a",{parentName:"p",href:"/docs/1.13.0/development/appendices/lucene-query/"},"Create a Lucene standard query parser"),"."),(0,r.kt)("h2",{id:"open-search-api"},"Open Search API"),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Open search engine is not available by default and has to be configured.")),(0,r.kt)("p",null,"Opensearch configuration is accessible form the Administration Interface."),(0,r.kt)("p",null,"This configration is divided in 3 parts"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"Link opensearch engine to catalog data"),". You can associate the opensearch engine to all the REGARDS catalog or associate it to one specific dataset."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"Configure opensearch responses headers"),"."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"Configure opensearch parameters"),". Here you can define specific opensearch parameters.")),(0,r.kt)("h3",{id:"general"},"General"),(0,r.kt)("p",null,"By default, all REGARDS parameters are defined by without any needed configuration. Configure one or many of the regards parameters allow to define the generation of possible values in opensearch descriptor file."),(0,r.kt)("h3",{id:"time-extension-configuration"},"Time extension configuration"),(0,r.kt)("p",null,'To be able to use the opensearch time extension you have to configure the opensearch engine to define the two stanadrd parameters "start" and "end".',(0,r.kt)("br",{parentName:"p"}),"\n","To do so, follow the here under example :  "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("b",null,"Define [time.start] parameter"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"  Alias : timeStart\n  Name : start\n  Namespace : time\n  full json path of associated REGARDS attribute : properties.date\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("b",null,"Define [time.end] parameter"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"  Alias : timeEnd\n  Name : end\n  Namespace : time\n  full json path of associated REGARDS attribute : properties.date\n")),(0,r.kt)("p",null,"NOTE : ",(0,r.kt)("inlineCode",{parentName:"p"},"properties.date")," must be replaced by the date attribute to use in the configured REGARDS catalog.  "),(0,r.kt)("h3",{id:"configure-possible-values-of-attributes-in-opensearch-descriptor"},"Configure possible values of attributes in opensearch descriptor"),(0,r.kt)("p",null,"  To do so, you have to configure the parameters to enable the ",(0,r.kt)("inlineCode",{parentName:"p"},"possible value generation")," and the ",(0,r.kt)("inlineCode",{parentName:"p"},"value number limit"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"  Name : parameter1\n  Namespace : regards\n  Enable generation of possible values : true\n  Limit number of possible values : 100\n  full json path of associated REGARDS attribute : properties.parameter1\n")),(0,r.kt)("h3",{id:"request-example"},"Request example"),(0,r.kt)("p",null,"  With the given below time extension configuration you can request the opensearch engine with the here under request :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"curl 'http://<host>/api/v1/rs-catalog/engines/opensearch/entities/search?timeStart=2010-05-23T08:16:36.921Z&timeEnd=2022-05-23T08:16:36.921Z&properties.parameter1=value1\n")),(0,r.kt)("h3",{id:"open-search-urls"},"Open Search URLs"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"GET")," ",(0,r.kt)("inlineCode",{parentName:"p"},"/engines/opensearch/collections/search")," : search collections")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"GET")," ",(0,r.kt)("inlineCode",{parentName:"p"},"/engines/opensearch/collections/search/opensearchdescription.xml")," : Open Search description for collections")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"GET")," ",(0,r.kt)("inlineCode",{parentName:"p"},"/engines/opensearch/collections/{urn}")," : get a single entity from its Unique Resource Name")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"GET")," ",(0,r.kt)("inlineCode",{parentName:"p"},"/engines/opensearch/documents/search")," : search documents")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"GET")," ",(0,r.kt)("inlineCode",{parentName:"p"},"/engines/opensearch/documents/search/opensearchdescription.xml")," : Open Search description for documents")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"GET")," ",(0,r.kt)("inlineCode",{parentName:"p"},"/engines/opensearch/documents/{urn}")," : get a single document from its Unique Resource Name")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"GET")," ",(0,r.kt)("inlineCode",{parentName:"p"},"/engines/opensearch/datasets/search")," : search datasets")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"GET")," ",(0,r.kt)("inlineCode",{parentName:"p"},"/engines/opensearch/datasets/search/opensearchdescription.xml")," : Open Search description for datasets")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"GET")," ",(0,r.kt)("inlineCode",{parentName:"p"},"/engines/opensearch/datasets/{urn}")," : get a single dataset from its Unique Resource Name")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"GET")," ",(0,r.kt)("inlineCode",{parentName:"p"},"/engines/opensearch/dataobjects/search")," : search data objets")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"GET")," ",(0,r.kt)("inlineCode",{parentName:"p"},"/engines/opensearch/dataobjects/search/opensearchdescription.xml")," : Open Search description for dataobjects")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"GET")," ",(0,r.kt)("inlineCode",{parentName:"p"},"/engines/opensearch/dataobjects/{urn}")," : get a single data object from its Unique Resource Name")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"GET")," ",(0,r.kt)("inlineCode",{parentName:"p"},"/engines/opensearch/datasets/{urn}/dataobjects/search")," : search data objects in the specified dataset")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"GET")," ",(0,r.kt)("inlineCode",{parentName:"p"},"/engines/opensearch/datasets/{urn}/dataobjects/search/opensearchdescription.xml")," : Open Search description for all data objects in specified dataset"))),(0,r.kt)("h3",{id:"open-search-headers"},"Open search headers"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Authorization: Bearer {token}")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Content-Type: application/json;charset=UTF-8")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Accept: application/json")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"Accept: application/atom+xml"))),(0,r.kt)("h3",{id:"open-search-query-parameters"},"Open Search Query parameters"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Use open search description to discover search queries.")))}u.isMDXComponent=!0}}]);