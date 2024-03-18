"use strict";(self.webpackChunkregardsoss_github_io=self.webpackChunkregardsoss_github_io||[]).push([[55798],{15680:(e,n,t)=>{t.d(n,{xA:()=>d,yg:()=>f});var a=t(96540);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=a.createContext({}),p=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=p(e.components);return a.createElement(s.Provider,{value:n},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=p(t),u=o,f=c["".concat(s,".").concat(u)]||c[u]||m[u]||r;return t?a.createElement(f,i(i({ref:n},d),{},{components:t})):a.createElement(f,i({ref:n},d))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,i=new Array(r);i[0]=u;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[c]="string"==typeof e?e:o,i[1]=l;for(var p=2;p<r;p++)i[p]=t[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},90500:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var a=t(58168),o=(t(96540),t(15680));const r={id:"backend-framework-starters-oais",title:"OAIS starter",slug:"/development/backend/framework/starters/oais/"},i=void 0,l={unversionedId:"development/backend/framework/starters/backend-framework-starters-oais",id:"version-1.11.0/development/backend/framework/starters/backend-framework-starters-oais",title:"OAIS starter",description:"Purpose",source:"@site/versioned_docs/version-1.11.0/development/backend/framework/starters/oais-starter.md",sourceDirName:"development/backend/framework/starters",slug:"/development/backend/framework/starters/oais/",permalink:"/docs/1.11.0/development/backend/framework/starters/oais/",draft:!1,editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/versioned_docs/version-1.11.0/development/backend/framework/starters/oais-starter.md",tags:[],version:"1.11.0",frontMatter:{id:"backend-framework-starters-oais",title:"OAIS starter",slug:"/development/backend/framework/starters/oais/"},sidebar:"dev",previous:{title:"Multitenant starter",permalink:"/docs/1.11.0/development/backend/framework/starters/multitenant/"},next:{title:"Plugins starter",permalink:"/docs/1.11.0/development/backend/framework/starters/plugins/"}},s={},p=[{value:"Purpose",id:"purpose",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Autoconfiguration",id:"autoconfiguration",level:2},{value:"How to",id:"how-to",level:2},{value:"How to use the starter",id:"how-to-use-the-starter",level:3},{value:"How to build information packages",id:"how-to-build-information-packages",level:3},{value:"Structure",id:"structure",level:2},{value:"Information packages",id:"information-packages",level:3},{value:"Information package properties",id:"information-package-properties",level:3},{value:"Content informations",id:"content-informations",level:3},{value:"OAISDataObject",id:"oaisdataobject",level:4},{value:"RepresentationInformation",id:"representationinformation",level:4},{value:"Preservation and description informations",id:"preservation-and-description-informations",level:3},{value:"Provenance informations",id:"provenance-informations",level:4},{value:"Descriptive informations",id:"descriptive-informations",level:3}],d={toc:p},c="wrapper";function m(e){let{components:n,...t}=e;return(0,o.yg)(c,(0,a.A)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.yg)("h2",{id:"purpose"},"Purpose"),(0,o.yg)("p",null,"This starter is a REGARDS representation of an information package described by the ",(0,o.yg)("a",{parentName:"p",href:"https://public.ccsds.org/pubs/650x0m2.pdf"},"OAIS recommandation of the CCSDS"),"."),(0,o.yg)("h2",{id:"configuration"},"Configuration"),(0,o.yg)("p",null,"Add starter dependency to your POM (version depends on the REGARDS BOM)"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n  <groupId>fr.cnes.regards.framework</groupId>\n  <artifactId>oais-starter</artifactId>\n</dependency>\n")),(0,o.yg)("p",null,"Business dependency :"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n  <groupId>fr.cnes.regards.framework</groupId>\n  <artifactId>oais-regards</artifactId>\n</dependency>\n")),(0,o.yg)("p",null,"Dependency :"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"/docs/1.11.0/development/backend/framework/starters/geojson/"},"GeoJSON starter")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"/docs/1.11.0/development/backend/framework/starters/gson/"},"GSON starter"))),(0,o.yg)("h2",{id:"autoconfiguration"},"Autoconfiguration"),(0,o.yg)("p",null,"Starter autoconfigures Gson to (de)serialize base objects. At the moment, only Gson can do this properly."),(0,o.yg)("h2",{id:"how-to"},"How to"),(0,o.yg)("h3",{id:"how-to-use-the-starter"},"How to use the starter"),(0,o.yg)("p",null,"You can extend ",(0,o.yg)("inlineCode",{parentName:"p"},"AbstractInformationPackage")," to make your own information package. ",(0,o.yg)("inlineCode",{parentName:"p"},"AbstractInformationPackage")," is compliant with GeoJSON format by extending ",(0,o.yg)("inlineCode",{parentName:"p"},"AbstractFeature"),". As consequences, information packages contain a geometry attribute, an id attribute and a property attribute, the former being of type ",(0,o.yg)("inlineCode",{parentName:"p"},"InformationPackageProperties"),"."),(0,o.yg)("h3",{id:"how-to-build-information-packages"},"How to build information packages"),(0,o.yg)("p",null,"Information packages can be built thanks to extensions of abstract builder ",(0,o.yg)("inlineCode",{parentName:"p"},"IPBuilder"),". ",(0,o.yg)("inlineCode",{parentName:"p"},"IPBuilder")," allows to set the properties of the information package."),(0,o.yg)("p",null,(0,o.yg)("inlineCode",{parentName:"p"},"InformationPackageProperties")," can be built thanks to ",(0,o.yg)("inlineCode",{parentName:"p"},"InformationPackagePropertiesBuilder")," which gives access to ",(0,o.yg)("inlineCode",{parentName:"p"},"ContentInformationBuilder")," and ",(0,o.yg)("inlineCode",{parentName:"p"},"PDIBuilder")," that has to be used to build ",(0,o.yg)("inlineCode",{parentName:"p"},"ContentInformation")," and ",(0,o.yg)("inlineCode",{parentName:"p"},"PreservationDescriptionInformation"),". With a specific action to actually add ",(0,o.yg)("inlineCode",{parentName:"p"},"ContentInformation")," to your ",(0,o.yg)("inlineCode",{parentName:"p"},"InformationPackageProperties"),": once a ",(0,o.yg)("inlineCode",{parentName:"p"},"ContentInformation")," has been prepared, you have to use ",(0,o.yg)("inlineCode",{parentName:"p"},"InformationPackagePropertiesBuilder.addContentInformation")," method to actually build and add a ",(0,o.yg)("inlineCode",{parentName:"p"},"ContentInformation")," to your ",(0,o.yg)("inlineCode",{parentName:"p"},"InformationPackageProperties"),". In addition to ",(0,o.yg)("inlineCode",{parentName:"p"},"ContentInformationBuilder")," and ",(0,o.yg)("inlineCode",{parentName:"p"},"PDIBuilder"),", ",(0,o.yg)("inlineCode",{parentName:"p"},"InformationPackagePropertiesBuilder")," allows you to add descriptive informations."),(0,o.yg)("h2",{id:"structure"},"Structure"),(0,o.yg)("h3",{id:"information-packages"},"Information packages"),(0,o.yg)("p",null,"Information packages into REGARDS follow GeoJSON structure, it has an id, a geometry and properties. Those properties has a specific structure: it is ",(0,o.yg)("inlineCode",{parentName:"p"},"InformationPackageProperties"),"."),(0,o.yg)("p",null,"It also has an extension ",(0,o.yg)("inlineCode",{parentName:"p"},"ipType")," which represents the type of your information package (Collection, Dataset, Data, ...)"),(0,o.yg)("h3",{id:"information-package-properties"},"Information package properties"),(0,o.yg)("p",null,(0,o.yg)("inlineCode",{parentName:"p"},"InformationPackageProperties")," contains many sections:"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"contentInformations: set of content informations (data references)"),(0,o.yg)("li",{parentName:"ul"},"pdi: preservation and description information (minimal information to understand content informations for a long time)"),(0,o.yg)("li",{parentName:"ul"},"descriptiveInformation (optional) : set of description information to ease data discovery and retrieval"),(0,o.yg)("li",{parentName:"ul"},"miscInformation (optional) : miscellanous information")),(0,o.yg)("h3",{id:"content-informations"},"Content informations"),(0,o.yg)("p",null,"Content informations by their structure allow to give some informations on the files associated to an information package."),(0,o.yg)("p",null,"Each ",(0,o.yg)("inlineCode",{parentName:"p"},"ContentInformation")," contains 2 sections:"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"OAISDataObject"),": file reference"),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"RepresentationInformation"),": object describing how to handle, understand, etc. this data object.")),(0,o.yg)("h4",{id:"oaisdataobject"},"OAISDataObject"),(0,o.yg)("p",null,(0,o.yg)("inlineCode",{parentName:"p"},"OAISDataObject")," contains minimal metadata to handle a file :"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},"regardsDataType : the data type in term of REGARDS concept :"),(0,o.yg)("ul",{parentName:"li"},(0,o.yg)("li",{parentName:"ul"},"RAWDATA : the main data (at least one ",(0,o.yg)("inlineCode",{parentName:"li"},"ContentInformation")," qualified as RAWDATA is required in one AIP)"),(0,o.yg)("li",{parentName:"ul"},"QUICKLOOK_SD, QUICKLOOK_MD, QUICKLOOK_HD : optional RAWDATA quicklook with definition level (small, medium or high definition)"),(0,o.yg)("li",{parentName:"ul"},"DOCUMENT : optional document related to the RAWDATA"),(0,o.yg)("li",{parentName:"ul"},"THUMBNAIL : optional RAWDATA thumbnail"),(0,o.yg)("li",{parentName:"ul"},"DESCRIPTION : optional description")))),(0,o.yg)("p",null,"AIP data type is also available for internal use in archival storage. Indeed, archival storage stores all referenced files described in all available ",(0,o.yg)("inlineCode",{parentName:"p"},"ContentInformation")," of the AIP ",(0,o.yg)("strong",{parentName:"p"},"plus itself"),"."),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"reference : reference flag allows to just store reference to external data file, not store the physical file."),(0,o.yg)("li",{parentName:"ul"},"urls : list of file URLs pointing to the same file"),(0,o.yg)("li",{parentName:"ul"},"filename : the filename"),(0,o.yg)("li",{parentName:"ul"},"algorithm : used to compute the checksum for data integrity control"),(0,o.yg)("li",{parentName:"ul"},"checksum : data checksum"),(0,o.yg)("li",{parentName:"ul"},"fileSize : optional file size")),(0,o.yg)("h4",{id:"representationinformation"},"RepresentationInformation"),(0,o.yg)("p",null,(0,o.yg)("inlineCode",{parentName:"p"},"RepresentationInformation")," contains metadata related to ",(0,o.yg)("inlineCode",{parentName:"p"},"OAISDataObject"),":"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"semantic : optional semantic description,"),(0,o.yg)("li",{parentName:"ul"},"syntax : required syntax with a least the data file MIME type plus eventually the MIME type name and description"),(0,o.yg)("li",{parentName:"ul"},"environmentDescription : optional software and hardware environment to handle data file")),(0,o.yg)("h3",{id:"preservation-and-description-informations"},"Preservation and description informations"),(0,o.yg)("p",null,"Unlike ContentInformation, preservation and description informations provides informations to an entire information package and not only the files associated to an information package."),(0,o.yg)("p",null,(0,o.yg)("inlineCode",{parentName:"p"},"PreservationDescriptionInformation")," contains 5 sections:"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"contextInformation: contains the tags and any key/value couple. (optional)"),(0,o.yg)("li",{parentName:"ul"},"referenceInformation: contains key/value couple which key should be a system identifier and its value should be the said identifier into this system."),(0,o.yg)("li",{parentName:"ul"},"provenanceInformation: see new section."),(0,o.yg)("li",{parentName:"ul"},"fixityInformation: it is empty for now and still there to be compliant with the OAIS recommandations."),(0,o.yg)("li",{parentName:"ul"},"accessRightInformation: it contains the access level (public, secure, ...), an optional licence and an optional public release date.")),(0,o.yg)("h4",{id:"provenance-informations"},"Provenance informations"),(0,o.yg)("p",null,"Provenance informations have an unorthodox structure, it contains informations on the life of your information package: the history."),(0,o.yg)("p",null,"In addition to the history, ",(0,o.yg)("inlineCode",{parentName:"p"},"ProvenanceInformation")," contains optional informations (related to spatial domain semantic, probably not useful for other domain):"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"facility"),(0,o.yg)("li",{parentName:"ul"},"instrument"),(0,o.yg)("li",{parentName:"ul"},"filter"),(0,o.yg)("li",{parentName:"ul"},"detector"),(0,o.yg)("li",{parentName:"ul"},"proposal")),(0,o.yg)("p",null,'and a field "additional" that allows to add any key/value couple on additional provenance information that are not already there.'),(0,o.yg)("h3",{id:"descriptive-informations"},"Descriptive informations"),(0,o.yg)("p",null,"Informations (key/value pairs) which are publish, they do not have technical meaning, they are business related."))}m.isMDXComponent=!0}}]);