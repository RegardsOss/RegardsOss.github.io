"use strict";(self.webpackChunkregardsoss_github_io=self.webpackChunkregardsoss_github_io||[]).push([[79245],{2994:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>h,frontMatter:()=>c,metadata:()=>t,toc:()=>o});var r=s(74848),i=s(28453);const c={id:"backend-catalog-search-api",title:"REGARDS search API",sidebar_label:"Search Engine API",slug:"/development/backend/services/catalog/search-api/"},a=void 0,t={id:"development/backend/regards/catalog/api-guides/backend-catalog-search-api",title:"REGARDS search API",description:"At the moment, REGARDS can expose two search API :",source:"@site/versioned_docs/version-1.15/development/backend/regards/catalog/api-guides/search-api.md",sourceDirName:"development/backend/regards/catalog/api-guides",slug:"/development/backend/services/catalog/search-api/",permalink:"/docs/1.15/development/backend/services/catalog/search-api/",draft:!1,unlisted:!1,editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/versioned_docs/version-1.15/development/backend/regards/catalog/api-guides/search-api.md",tags:[],version:"1.15",frontMatter:{id:"backend-catalog-search-api",title:"REGARDS search API",sidebar_label:"Search Engine API",slug:"/development/backend/services/catalog/search-api/"},sidebar:"dev",previous:{title:"Overview",permalink:"/docs/1.15/development/backend/services/catalog/overview/"},next:{title:"Download product file API",permalink:"/docs/1.15/development/backend/services/catalog/download-product-file-api/"}},d={},o=[{value:"Legacy API",id:"legacy-api",level:2},{value:"Legacy URLs",id:"legacy-urls",level:3},{value:"Legacy headers",id:"legacy-headers",level:3},{value:"Query parameters",id:"query-parameters",level:3},{value:"Using CURL to run search requests",id:"using-curl-to-run-search-requests",level:3},{value:"Using Lucene standard query parser",id:"using-lucene-standard-query-parser",level:3},{value:"Open Search API",id:"open-search-api",level:2},{value:"General",id:"general",level:3},{value:"Time extension configuration",id:"time-extension-configuration",level:3},{value:"Configure possible values of attributes in opensearch descriptor",id:"configure-possible-values-of-attributes-in-opensearch-descriptor",level:3},{value:"Request example",id:"request-example",level:3},{value:"Open Search URLs",id:"open-search-urls",level:3},{value:"Open search headers",id:"open-search-headers",level:3},{value:"Open Search Query parameters",id:"open-search-query-parameters",level:3}];function l(e){const n={a:"a",admonition:"admonition",br:"br",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"At the moment, REGARDS can expose two search API :"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Legacy Search API"})," with a query mechanism based on Lucene standard query parser returning GeoJSON feature\ncollection,"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Open Search"})," API with parameter, time and geo extensions returning standard ATOM response or GeoJSON feature\ncollection and exposing an Open Search description."]}),"\n"]}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsx)(n.p,{children:"Search API can be added using plugin mechanism."})}),"\n",(0,r.jsx)(n.h2,{id:"legacy-api",children:"Legacy API"}),"\n",(0,r.jsx)(n.h3,{id:"legacy-urls",children:"Legacy URLs"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"GET"})," ",(0,r.jsx)(n.code,{children:"/engines/legacy/entities/search"})," : search entities"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"GET"})," ",(0,r.jsx)(n.code,{children:"/engines/legacy/entities/{urn}"})," : get a single entity from its Unique Resource Name"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"GET"})," ",(0,r.jsx)(n.code,{children:"/engines/legacy/collections/search"})," : search collections"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"GET"})," ",(0,r.jsx)(n.code,{children:"/engines/legacy/collections/{urn}"})," : get a single entity from its Unique Resource Name"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"GET"})," ",(0,r.jsx)(n.code,{children:"/engines/legacy/documents/search"})," : search documents"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"GET"})," ",(0,r.jsx)(n.code,{children:"/engines/legacy/documents/{urn}"})," : get a single document from its Unique Resource Name"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"GET"})," ",(0,r.jsx)(n.code,{children:"/engines/legacy/datasets/search"})," : search datasets"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"GET"})," ",(0,r.jsx)(n.code,{children:"/engines/legacy/datasets/{urn}"})," : get a single dataset from its Unique Resource Name"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"GET"})," ",(0,r.jsx)(n.code,{children:"/engines/legacy/dataobjects/search"})," : search data objets"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"GET"})," ",(0,r.jsx)(n.code,{children:"/engines/legacy/dataobjects/{urn}"})," : get a single data object from its Unique Resource Name"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"GET"})," ",(0,r.jsx)(n.code,{children:"/engines/legacy/dataobjects/datasets/search"})," : search data objects returning datasets"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"GET"})," ",(0,r.jsx)(n.code,{children:"/engines/legacy/datasets/{urn}/dataobjects/search"})," : search data objects in the specified dataset"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"legacy-headers",children:"Legacy headers"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"Authorization: Bearer {token}"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"Content-Type: application/json;charset=UTF-8"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"Accept: application/json"})}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"query-parameters",children:"Query parameters"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"q"})," : The search keywords, for example ",(0,r.jsx)(n.code,{children:"altitude:[1000 TO 2000] OR name:sensor-*"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"facets"})," : The array of attribute names."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"page"})," : Page you want to retrieve, 0 indexed and defaults to 0."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"size"})," : Size of the page you want to retrieve, defaults to 20."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"sort"})," : Properties that should be sorted by in the format ",(0,r.jsx)(n.code,{children:"property,property(,ASC/DESC)"}),". Default sort direction is\nascending. Use multiple ",(0,r.jsx)(n.code,{children:"sort"})," parameters if you want to switch directions, e.g. ",(0,r.jsx)(n.code,{children:"?sort=firstname&sort=lastname,asc."})]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"using-curl-to-run-search-requests",children:"Using CURL to run search requests"}),"\n",(0,r.jsx)(n.p,{children:"To be able to run search request with cURL tool, you have to encode url parameters. To do so, you can use the here under\ncURL syntaxe to run GET request with encoded parameters :"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"curl -G 'http://<host>/api/v1//rs-catalog/engines/legacy/dataobjects/search' \\\n--data-urlencode \"q=(param1:test OR param2:test)\" \\\n-H 'Authorization: Bearer <token>' -H 'Accept: application/json'\n"})}),"\n",(0,r.jsx)(n.h3,{id:"using-lucene-standard-query-parser",children:"Using Lucene standard query parser"}),"\n",(0,r.jsxs)(n.p,{children:["See ",(0,r.jsx)(n.a,{href:"/docs/1.15/development/appendices/lucene-query/",children:"Create a Lucene standard query parser"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"open-search-api",children:"Open Search API"}),"\n",(0,r.jsx)(n.admonition,{type:"caution",children:(0,r.jsx)(n.p,{children:"Open search engine is not available by default and has to be configured."})}),"\n",(0,r.jsx)(n.p,{children:"Opensearch configuration is accessible form the Administration Interface."}),"\n",(0,r.jsx)(n.p,{children:"This configration is divided in 3 parts"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"Link opensearch engine to catalog data"}),". You can associate the opensearch engine to all the REGARDS catalog or\nassociate it to one specific dataset."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"Configure opensearch responses headers"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"Configure opensearch parameters"}),". Here you can define specific opensearch parameters."]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"general",children:"General"}),"\n",(0,r.jsx)(n.p,{children:"By default, all REGARDS parameters are defined by without any needed configuration. Configure one or many of the regards\nparameters allow to define the generation of possible values in opensearch descriptor file."}),"\n",(0,r.jsx)(n.h3,{id:"time-extension-configuration",children:"Time extension configuration"}),"\n",(0,r.jsxs)(n.p,{children:['To be able to use the opensearch time extension you have to configure the opensearch engine to define the two standard\nparameters "start" and "end".',(0,r.jsx)(n.br,{}),"\n","To do so, follow the here under example :"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)("b",{children:"Define [time.start] parameter"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"  Alias : timeStart\n  Name : start\n  Namespace : time\n  full json path of associated REGARDS attribute : properties.date\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)("b",{children:"Define [time.end] parameter"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"  Alias : timeEnd\n  Name : end\n  Namespace : time\n  full json path of associated REGARDS attribute : properties.date\n"})}),"\n",(0,r.jsxs)(n.p,{children:["NOTE : ",(0,r.jsx)(n.code,{children:"properties.date"})," must be replaced by the date attribute to use in the configured REGARDS catalog."]}),"\n",(0,r.jsx)(n.h3,{id:"configure-possible-values-of-attributes-in-opensearch-descriptor",children:"Configure possible values of attributes in opensearch descriptor"}),"\n",(0,r.jsxs)(n.p,{children:["To do so, you have to configure the parameters to enable the ",(0,r.jsx)(n.code,{children:"possible value generation"})," and the ",(0,r.jsx)(n.code,{children:"value number limit"}),"."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"  Name : parameter1\n  Namespace : regards\n  Enable generation of possible values : true\n  Limit number of possible values : 100\n  full json path of associated REGARDS attribute : properties.parameter1\n"})}),"\n",(0,r.jsx)(n.h3,{id:"request-example",children:"Request example"}),"\n",(0,r.jsx)(n.p,{children:"With the given below time extension configuration you can request the opensearch engine with the here under request :"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh",children:"curl 'http://<host>/api/v1/rs-catalog/engines/opensearch/entities/search?timeStart=2010-05-23T08:16:36.921Z&timeEnd=2022-05-23T08:16:36.921Z&properties.parameter1=value1\n"})}),"\n",(0,r.jsx)(n.h3,{id:"open-search-urls",children:"Open Search URLs"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"GET"})," ",(0,r.jsx)(n.code,{children:"/engines/opensearch/collections/search"})," : search collections"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"GET"})," ",(0,r.jsx)(n.code,{children:"/engines/opensearch/collections/search/opensearchdescription.xml"})," : Open Search description for collections"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"GET"})," ",(0,r.jsx)(n.code,{children:"/engines/opensearch/collections/{urn}"})," : get a single entity from its Unique Resource Name"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"GET"})," ",(0,r.jsx)(n.code,{children:"/engines/opensearch/documents/search"})," : search documents"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"GET"})," ",(0,r.jsx)(n.code,{children:"/engines/opensearch/documents/search/opensearchdescription.xml"})," : Open Search description for documents"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"GET"})," ",(0,r.jsx)(n.code,{children:"/engines/opensearch/documents/{urn}"})," : get a single document from its Unique Resource Name"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"GET"})," ",(0,r.jsx)(n.code,{children:"/engines/opensearch/datasets/search"})," : search datasets"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"GET"})," ",(0,r.jsx)(n.code,{children:"/engines/opensearch/datasets/search/opensearchdescription.xml"})," : Open Search description for datasets"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"GET"})," ",(0,r.jsx)(n.code,{children:"/engines/opensearch/datasets/{urn}"})," : get a single dataset from its Unique Resource Name"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"GET"})," ",(0,r.jsx)(n.code,{children:"/engines/opensearch/dataobjects/search"})," : search data objets"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"GET"})," ",(0,r.jsx)(n.code,{children:"/engines/opensearch/dataobjects/search/opensearchdescription.xml"})," : Open Search description for dataobjects"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"GET"})," ",(0,r.jsx)(n.code,{children:"/engines/opensearch/dataobjects/{urn}"})," : get a single data object from its Unique Resource Name"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"GET"})," ",(0,r.jsx)(n.code,{children:"/engines/opensearch/datasets/{urn}/dataobjects/search"})," : search data objects in the specified dataset"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"GET"})," ",(0,r.jsx)(n.code,{children:"/engines/opensearch/datasets/{urn}/dataobjects/search/opensearchdescription.xml"})," : Open Search description for\nall data objects in specified dataset"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"open-search-headers",children:"Open search headers"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"Authorization: Bearer {token}"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"Content-Type: application/json;charset=UTF-8"})}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"Accept: application/json"})," or ",(0,r.jsx)(n.code,{children:"Accept: application/atom+xml"})]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"open-search-query-parameters",children:"Open Search Query parameters"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Use open search description to discover search queries."}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>a,x:()=>t});var r=s(96540);const i={},c=r.createContext(i);function a(e){const n=r.useContext(c);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),r.createElement(c.Provider,{value:n},e.children)}}}]);