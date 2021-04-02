(window.webpackJsonp=window.webpackJsonp||[]).push([[1420],{1493:function(e,a,t){"use strict";t.r(a),t.d(a,"frontMatter",(function(){return c})),t.d(a,"metadata",(function(){return o})),t.d(a,"toc",(function(){return s})),t.d(a,"default",(function(){return p}));var n=t(3),r=t(7),i=(t(0),t(2708)),c={id:"backend-catalog-search-api",title:"REGARDS search API",sidebar_label:"Search",slug:"/development/backend/catalog/search-api/"},o={unversionedId:"development/backend/regards/catalog/api/backend-catalog-search-api",id:"version-1.4.0/development/backend/regards/catalog/api/backend-catalog-search-api",isDocsHomePage:!1,title:"REGARDS search API",description:"At the moment, REGARDS can expose two search API :",source:"@site/versioned_docs/version-1.4.0/development/backend/regards/catalog/api/search-api.md",slug:"/development/backend/catalog/search-api/",permalink:"/docs/1.4.0/development/backend/catalog/search-api/",editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/versioned_docs/version-1.4.0/development/backend/regards/catalog/api/search-api.md",version:"1.4.0",sidebar_label:"Search",sidebar:"version-1.4.0/dev",previous:{title:"REGARDS catalog microservice",permalink:"/docs/1.4.0/development/backend/catalog/overview/"},next:{title:"Catalog service plugins",permalink:"/docs/1.4.0/development/backend/catalog/service-plugins/"}},s=[{value:"How to access API endpoints",id:"how-to-access-api-endpoints",children:[]},{value:"Legacy API",id:"legacy-api",children:[{value:"Legacy URLs",id:"legacy-urls",children:[]},{value:"Legacy headers",id:"legacy-headers",children:[]},{value:"Query parameters",id:"query-parameters",children:[]},{value:"Using CURL to run search requests",id:"using-curl-to-run-search-requests",children:[]},{value:"Using Lucene standard query parser",id:"using-lucene-standard-query-parser",children:[]}]},{value:"Open Search API",id:"open-search-api",children:[{value:"General",id:"general",children:[]},{value:"Time extension configuration",id:"time-extension-configuration",children:[]},{value:"Configure possible values of attributes in opensearch descriptor",id:"configure-possible-values-of-attributes-in-opensearch-descriptor",children:[]},{value:"Request example",id:"request-example",children:[]},{value:"Open Search URLs",id:"open-search-urls",children:[]},{value:"Open search headers",id:"open-search-headers",children:[]},{value:"Open Search Query parameters",id:"open-search-query-parameters",children:[]}]}],l={toc:s};function p(e){var a=e.components,t=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},l,t,{components:a,mdxType:"MDXLayout"}),Object(i.b)("p",null,"At the moment, REGARDS can expose two search API :"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Legacy Search API")," with a query mechanism based on Lucene standard query parser returning GeoJSON feature collection,"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Open Search")," API with parameter, time and geo extensions returning standard ATOM response or GeoJSON feature collection and exposing an Open Search description.")),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"Search API can be added using plugin mechanism."))),Object(i.b)("h2",{id:"how-to-access-api-endpoints"},"How to access API endpoints"),Object(i.b)("p",null,"You can access each endpoint of this API thanks to a ",Object(i.b)("inlineCode",{parentName:"p"},"Curl")," request."),Object(i.b)("p",null,"You can request without auhentication by adding the REGARDS project in the request thanks to the parameter ",Object(i.b)("inlineCode",{parentName:"p"},"scope")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"curl http://localhost:<{{ include.name }} port>/<endpoint>?scope=<project>\n")),Object(i.b)("p",null,"Or you can authenticate to access admin endpoints. To do so, use the ",Object(i.b)("a",{parentName:"p",href:"../../authentication/api/"},"authentication API")," to get a token and then add the token to the request headers."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"curl http://localhost:<{{ include.name }} port>/<endpoint> -H 'Authorization: bearer <token>'\n")),Object(i.b)("p",null,"To access endpoints from ",Object(i.b)("inlineCode",{parentName:"p"},"outside"),' the microservice installation server, you need to use the "gateway" microservice. To do so, use the here under access point instead of the previous one.'),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"curl http://<gateway host>:<gateway port>/{{ include.name }}/api/v1/<endpoint>\n")),Object(i.b)("h2",{id:"legacy-api"},"Legacy API"),Object(i.b)("h3",{id:"legacy-urls"},"Legacy URLs"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"GET")," ",Object(i.b)("inlineCode",{parentName:"li"},"/engines/legacy/entities/search")," : search entities"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"GET")," ",Object(i.b)("inlineCode",{parentName:"li"},"/engines/legacy/entities/{urn}")," : get a single entity from its Unique Resource Name"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"GET")," ",Object(i.b)("inlineCode",{parentName:"li"},"/engines/legacy/collections/search")," : search collections"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"GET")," ",Object(i.b)("inlineCode",{parentName:"li"},"/engines/legacy/collections/{urn}")," : get a single entity from its Unique Resource Name"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"GET")," ",Object(i.b)("inlineCode",{parentName:"li"},"/engines/legacy/documents/search")," : search documents"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"GET")," ",Object(i.b)("inlineCode",{parentName:"li"},"/engines/legacy/documents/{urn}")," : get a single document from its Unique Resource Name"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"GET")," ",Object(i.b)("inlineCode",{parentName:"li"},"/engines/legacy/datasets/search")," : search datasets"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"GET")," ",Object(i.b)("inlineCode",{parentName:"li"},"/engines/legacy/datasets/{urn}")," : get a single dataset from its Unique Resource Name"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"GET")," ",Object(i.b)("inlineCode",{parentName:"li"},"/engines/legacy/dataobjects/search")," : search data objets"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"GET")," ",Object(i.b)("inlineCode",{parentName:"li"},"/engines/legacy/dataobjects/{urn}")," : get a single data object from its Unique Resource Name"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"GET")," ",Object(i.b)("inlineCode",{parentName:"li"},"/engines/legacy/dataobjects/datasets/search")," : search data objects returning datasets"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"GET")," ",Object(i.b)("inlineCode",{parentName:"li"},"/engines/legacy/datasets/{urn}/dataobjects/search")," : search data objects in the specified dataset")),Object(i.b)("h3",{id:"legacy-headers"},"Legacy headers"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"Authorization: Bearer {token}")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"Content-Type: application/json;charset=UTF-8")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"Accept: application/json"))),Object(i.b)("h3",{id:"query-parameters"},"Query parameters"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"q")," : The search keywords, for example ",Object(i.b)("inlineCode",{parentName:"li"},"altitude:[1000 TO 2000] OR name:sensor-*"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"facets")," : The array of attribute names."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"page")," : Page you want to retrieve, 0 indexed and defaults to 0."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"size")," : Size of the page you want to retrieve, defaults to 20."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"sort")," : Properties that should be sorted by in the format ",Object(i.b)("inlineCode",{parentName:"li"},"property,property(,ASC/DESC)"),". Default sort direction is ascending. Use multiple ",Object(i.b)("inlineCode",{parentName:"li"},"sort")," parameters if you want to switch directions, e.g. ",Object(i.b)("inlineCode",{parentName:"li"},"?sort=firstname&sort=lastname,asc."))),Object(i.b)("h3",{id:"using-curl-to-run-search-requests"},"Using CURL to run search requests"),Object(i.b)("p",null,"To be able to run search request with cURL tool, you have to encode url parameters. To do so, you can use the here under cURL syntaxe to run GET request with encoded parameters :   "),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"curl -G 'http://<host>/api/v1//rs-catalog/engines/legacy/dataobjects/search' \\\n--data-urlencode \"q=(param1:test OR param2:test)\" \\\n-H 'Authorization: Bearer <token>' -H 'Accept: application/json'\n")),Object(i.b)("h3",{id:"using-lucene-standard-query-parser"},"Using Lucene standard query parser"),Object(i.b)("p",null,"See ",Object(i.b)("a",{parentName:"p",href:"../../../appendices/lucene-query/"},"Create a Lucene standard query parser"),"."),Object(i.b)("h2",{id:"open-search-api"},"Open Search API"),Object(i.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"Open search engine is not available by default and has to be configured."))),Object(i.b)("p",null,"Opensearch configuration is accessible form the Administration Interface."),Object(i.b)("p",null,"This configration is divided in 3 parts"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("inlineCode",{parentName:"li"},"Link opensearch engine to catalog data"),". You can associate the opensearch engine to all the REGARDS catalog or associate it to one specific dataset."),Object(i.b)("li",{parentName:"ol"},Object(i.b)("inlineCode",{parentName:"li"},"Configure opensearch responses headers"),"."),Object(i.b)("li",{parentName:"ol"},Object(i.b)("inlineCode",{parentName:"li"},"Configure opensearch parameters"),". Here you can define specific opensearch parameters.")),Object(i.b)("h3",{id:"general"},"General"),Object(i.b)("p",null,"By default, all REGARDS parameters are defined by without any needed configuration. Configure one or many of the regards parameters allow to define the generation of possible values in opensearch descriptor file."),Object(i.b)("h3",{id:"time-extension-configuration"},"Time extension configuration"),Object(i.b)("p",null,'To be able to use the opensearch time extension you have to configure the opensearch engine to define the two stanadrd parameters "start" and "end".',Object(i.b)("br",{parentName:"p"}),"\n","To do so, follow the here under example :  "),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("b",null,"Define [time.start] parameter"))),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"  Alias : timeStart\n  Name : start\n  Namespace : time\n  full json path of associated REGARDS attribute : properties.date\n")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("b",null,"Define [time.end] parameter"))),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"  Alias : timeEnd\n  Name : end\n  Namespace : time\n  full json path of associated REGARDS attribute : properties.date\n")),Object(i.b)("p",null,"NOTE : ",Object(i.b)("inlineCode",{parentName:"p"},"properties.date")," must be replaced by the date attribute to use in the configured REGARDS catalog.  "),Object(i.b)("h3",{id:"configure-possible-values-of-attributes-in-opensearch-descriptor"},"Configure possible values of attributes in opensearch descriptor"),Object(i.b)("p",null,"  To do so, you have to configure the parameters to enable the ",Object(i.b)("inlineCode",{parentName:"p"},"possible value generation")," and the ",Object(i.b)("inlineCode",{parentName:"p"},"value number limit"),"."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"  Name : parameter1\n  Namespace : regards\n  Enable generation of possible values : true\n  Limit number of possible values : 100\n  full json path of associated REGARDS attribute : properties.parameter1\n")),Object(i.b)("h3",{id:"request-example"},"Request example"),Object(i.b)("p",null,"  With the given below time extension configuration you can request the opensearch engine with the here under request :"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-sh"},"curl 'http://<host>/api/v1/rs-catalog/engines/opensearch/entities/search?timeStart=2010-05-23T08:16:36.921Z&timeEnd=2022-05-23T08:16:36.921Z&properties.parameter1=value1\n")),Object(i.b)("h3",{id:"open-search-urls"},"Open Search URLs"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"GET")," ",Object(i.b)("inlineCode",{parentName:"p"},"/engines/opensearch/collections/search")," : search collections")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"GET")," ",Object(i.b)("inlineCode",{parentName:"p"},"/engines/opensearch/collections/search/opensearchdescription.xml")," : Open Search description for collections")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"GET")," ",Object(i.b)("inlineCode",{parentName:"p"},"/engines/opensearch/collections/{urn}")," : get a single entity from its Unique Resource Name")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"GET")," ",Object(i.b)("inlineCode",{parentName:"p"},"/engines/opensearch/documents/search")," : search documents")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"GET")," ",Object(i.b)("inlineCode",{parentName:"p"},"/engines/opensearch/documents/search/opensearchdescription.xml")," : Open Search description for documents")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"GET")," ",Object(i.b)("inlineCode",{parentName:"p"},"/engines/opensearch/documents/{urn}")," : get a single document from its Unique Resource Name")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"GET")," ",Object(i.b)("inlineCode",{parentName:"p"},"/engines/opensearch/datasets/search")," : search datasets")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"GET")," ",Object(i.b)("inlineCode",{parentName:"p"},"/engines/opensearch/datasets/search/opensearchdescription.xml")," : Open Search description for datasets")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"GET")," ",Object(i.b)("inlineCode",{parentName:"p"},"/engines/opensearch/datasets/{urn}")," : get a single dataset from its Unique Resource Name")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"GET")," ",Object(i.b)("inlineCode",{parentName:"p"},"/engines/opensearch/dataobjects/search")," : search data objets")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"GET")," ",Object(i.b)("inlineCode",{parentName:"p"},"/engines/opensearch/dataobjects/search/opensearchdescription.xml")," : Open Search description for dataobjects")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"GET")," ",Object(i.b)("inlineCode",{parentName:"p"},"/engines/opensearch/dataobjects/{urn}")," : get a single data object from its Unique Resource Name")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"GET")," ",Object(i.b)("inlineCode",{parentName:"p"},"/engines/opensearch/datasets/{urn}/dataobjects/search")," : search data objects in the specified dataset")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"GET")," ",Object(i.b)("inlineCode",{parentName:"p"},"/engines/opensearch/datasets/{urn}/dataobjects/search/opensearchdescription.xml")," : Open Search description for all data objects in specified dataset"))),Object(i.b)("h3",{id:"open-search-headers"},"Open search headers"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"Authorization: Bearer {token}")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"Content-Type: application/json;charset=UTF-8")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"Accept: application/json")," or ",Object(i.b)("inlineCode",{parentName:"li"},"Accept: application/atom+xml"))),Object(i.b)("h3",{id:"open-search-query-parameters"},"Open Search Query parameters"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Use open search description to discover search queries.")))}p.isMDXComponent=!0},2708:function(e,a,t){"use strict";t.d(a,"a",(function(){return b})),t.d(a,"b",(function(){return m}));var n=t(0),r=t.n(n);function i(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function c(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?c(Object(t),!0).forEach((function(a){i(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function s(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=r.a.createContext({}),p=function(e){var a=r.a.useContext(l),t=a;return e&&(t="function"==typeof e?e(a):o(o({},a),e)),t},b=function(e){var a=p(e.components);return r.a.createElement(l.Provider,{value:a},e.children)},d={inlineCode:"code",wrapper:function(e){var a=e.children;return r.a.createElement(r.a.Fragment,{},a)}},u=r.a.forwardRef((function(e,a){var t=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),b=p(t),u=n,m=b["".concat(c,".").concat(u)]||b[u]||d[u]||i;return t?r.a.createElement(m,o(o({ref:a},l),{},{components:t})):r.a.createElement(m,o({ref:a},l))}));function m(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var i=t.length,c=new Array(i);c[0]=u;var o={};for(var s in a)hasOwnProperty.call(a,s)&&(o[s]=a[s]);o.originalType=e,o.mdxType="string"==typeof e?e:n,c[1]=o;for(var l=2;l<i;l++)c[l]=t[l];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"}}]);