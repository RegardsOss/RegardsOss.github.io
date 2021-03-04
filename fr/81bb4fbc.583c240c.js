(window.webpackJsonp=window.webpackJsonp||[]).push([[1366],{1436:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return p}));var a=n(3),o=n(7),r=(n(0),n(2701)),i={id:"backend-framework-starters-oais",title:"OAIS starter",slug:"/development/backend/framework/starters/oais"},c={unversionedId:"development/backend/framework/starters/backend-framework-starters-oais",id:"development/backend/framework/starters/backend-framework-starters-oais",isDocsHomePage:!1,title:"OAIS starter",description:"Purpose",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/development/backend/framework/starters/oais-starter.md",slug:"/development/backend/framework/starters/oais",permalink:"/fr/docs/next/development/backend/framework/starters/oais",editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/i18n/fr/docusaurus-plugin-content-docs/current/development/backend/framework/starters/oais-starter.md",version:"current",sidebar:"dev",previous:{title:"Multitenant starter",permalink:"/fr/docs/next/development/backend/framework/starters/multitenant"},next:{title:"Plugins starter",permalink:"/fr/docs/next/development/backend/framework/starters/plugins"}},l=[{value:"Purpose",id:"purpose",children:[]},{value:"Configuration",id:"configuration",children:[]},{value:"Autoconfiguration",id:"autoconfiguration",children:[]},{value:"How to",id:"how-to",children:[{value:"How to use the starter",id:"how-to-use-the-starter",children:[]},{value:"How to build information packages",id:"how-to-build-information-packages",children:[]}]},{value:"Structure",id:"structure",children:[{value:"Information packages",id:"information-packages",children:[]},{value:"Information package properties",id:"information-package-properties",children:[]},{value:"Content informations",id:"content-informations",children:[]},{value:"Preservation and description informations",id:"preservation-and-description-informations",children:[]},{value:"Descriptive informations",id:"descriptive-informations",children:[]}]}],s={toc:l};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"purpose"},"Purpose"),Object(r.b)("p",null,"This starter is a REGARDS representation of an information package described by the ",Object(r.b)("a",{parentName:"p",href:"https://public.ccsds.org/pubs/650x0m2.pdf"},"OAIS recommandation of the CCSDS"),"."),Object(r.b)("h2",{id:"configuration"},"Configuration"),Object(r.b)("p",null,"Add starter dependency to your POM (version depends on the REGARDS BOM)"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n  <groupId>fr.cnes.regards.framework</groupId>\n  <artifactId>oais-starter</artifactId>\n</dependency>\n")),Object(r.b)("p",null,"Business dependency :"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n  <groupId>fr.cnes.regards.framework</groupId>\n  <artifactId>oais-regards</artifactId>\n</dependency>\n")),Object(r.b)("p",null,"Dependency :"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"geojson"},"GeoJSON starter")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"gson"},"GSON starter"))),Object(r.b)("h2",{id:"autoconfiguration"},"Autoconfiguration"),Object(r.b)("p",null,"Starter autoconfigures Gson to (de)serialize base objects. At the moment, only Gson can do this properly."),Object(r.b)("h2",{id:"how-to"},"How to"),Object(r.b)("h3",{id:"how-to-use-the-starter"},"How to use the starter"),Object(r.b)("p",null,"You can extend ",Object(r.b)("inlineCode",{parentName:"p"},"AbstractInformationPackage")," to make your own information package. ",Object(r.b)("inlineCode",{parentName:"p"},"AbstractInformationPackage")," is compliant with GeoJSON format by extending ",Object(r.b)("inlineCode",{parentName:"p"},"AbstractFeature"),". As consequences, information packages contain a geometry attribute, an id attribute and a property attribute, the former being of type ",Object(r.b)("inlineCode",{parentName:"p"},"InformationPackageProperties"),"."),Object(r.b)("h3",{id:"how-to-build-information-packages"},"How to build information packages"),Object(r.b)("p",null,"Information packages can be built thanks to extensions of abstract builder ",Object(r.b)("inlineCode",{parentName:"p"},"IPBuilder"),". ",Object(r.b)("inlineCode",{parentName:"p"},"IPBuilder")," allows to set the properties of the information package."),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"InformationPackageProperties")," can be built thanks to ",Object(r.b)("inlineCode",{parentName:"p"},"InformationPackagePropertiesBuilder")," which gives access to ",Object(r.b)("inlineCode",{parentName:"p"},"ContentInformationBuilder")," and ",Object(r.b)("inlineCode",{parentName:"p"},"PDIBuilder")," that has to be used to build ",Object(r.b)("inlineCode",{parentName:"p"},"ContentInformation")," and ",Object(r.b)("inlineCode",{parentName:"p"},"PreservationDescriptionInformation"),". With a specific action to actually add ",Object(r.b)("inlineCode",{parentName:"p"},"ContentInformation")," to your ",Object(r.b)("inlineCode",{parentName:"p"},"InformationPackageProperties"),": once a ",Object(r.b)("inlineCode",{parentName:"p"},"ContentInformation")," has been prepared, you have to use ",Object(r.b)("inlineCode",{parentName:"p"},"InformationPackagePropertiesBuilder.addContentInformation")," method to actually build and add a ",Object(r.b)("inlineCode",{parentName:"p"},"ContentInformation")," to your ",Object(r.b)("inlineCode",{parentName:"p"},"InformationPackageProperties"),". In addition to ",Object(r.b)("inlineCode",{parentName:"p"},"ContentInformationBuilder")," and ",Object(r.b)("inlineCode",{parentName:"p"},"PDIBuilder"),", ",Object(r.b)("inlineCode",{parentName:"p"},"InformationPackagePropertiesBuilder")," allows you to add descriptive informations."),Object(r.b)("h2",{id:"structure"},"Structure"),Object(r.b)("h3",{id:"information-packages"},"Information packages"),Object(r.b)("p",null,"Information packages into REGARDS follow GeoJSON structure, it has an id, a geometry and properties. Those properties has a specific structure: it is ",Object(r.b)("inlineCode",{parentName:"p"},"InformationPackageProperties"),"."),Object(r.b)("p",null,"It also has an extension ",Object(r.b)("inlineCode",{parentName:"p"},"ipType")," which represents the type of your information package (Collection, Dataset, Data, ...)"),Object(r.b)("h3",{id:"information-package-properties"},"Information package properties"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"InformationPackageProperties")," contains many sections:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"contentInformations: set of content informations (data references)"),Object(r.b)("li",{parentName:"ul"},"pdi: preservation and description information (minimal information to understand content informations for a long time)"),Object(r.b)("li",{parentName:"ul"},"descriptiveInformation (optional) : set of description information to ease data discovery and retrieval"),Object(r.b)("li",{parentName:"ul"},"miscInformation (optional) : miscellanous information")),Object(r.b)("h3",{id:"content-informations"},"Content informations"),Object(r.b)("p",null,"Content informations by their structure allow to give some informations on the files associated to an information package."),Object(r.b)("p",null,"Each ",Object(r.b)("inlineCode",{parentName:"p"},"ContentInformation")," contains 2 sections:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"OAISDataObject"),": file reference"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"RepresentationInformation"),": object describing how to handle, understand, etc. this data object.")),Object(r.b)("h4",{id:"oaisdataobject"},"OAISDataObject"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"OAISDataObject")," contains minimal metadata to handle a file :"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"regardsDataType : the data type in term of REGARDS concept :"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"RAWDATA : the main data (at least one ",Object(r.b)("inlineCode",{parentName:"li"},"ContentInformation")," qualified as RAWDATA is required in one AIP)"),Object(r.b)("li",{parentName:"ul"},"QUICKLOOK_SD, QUICKLOOK_MD, QUICKLOOK_HD : optional RAWDATA quicklook with definition level (small, medium or high definition)"),Object(r.b)("li",{parentName:"ul"},"DOCUMENT : optional document related to the RAWDATA"),Object(r.b)("li",{parentName:"ul"},"THUMBNAIL : optional RAWDATA thumbnail"),Object(r.b)("li",{parentName:"ul"},"DESCRIPTION : optional description")))),Object(r.b)("p",null,"AIP data type is also available for internal use in archival storage. Indeed, archival storage stores all referenced files described in all available ",Object(r.b)("inlineCode",{parentName:"p"},"ContentInformation")," of the AIP ",Object(r.b)("strong",{parentName:"p"},"plus itself"),"."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"reference : reference flag allows to just store reference to external data file, not store the physical file."),Object(r.b)("li",{parentName:"ul"},"urls : list of file URLs pointing to the same file"),Object(r.b)("li",{parentName:"ul"},"filename : the filename"),Object(r.b)("li",{parentName:"ul"},"algorithm : used to compute the checksum for data integrity control"),Object(r.b)("li",{parentName:"ul"},"checksum : data checksum"),Object(r.b)("li",{parentName:"ul"},"fileSize : optional file size")),Object(r.b)("h4",{id:"representationinformation"},"RepresentationInformation"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"RepresentationInformation")," contains metadata related to ",Object(r.b)("inlineCode",{parentName:"p"},"OAISDataObject"),":"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"semantic : optional semantic description,"),Object(r.b)("li",{parentName:"ul"},"syntax : required syntax with a least the data file MIME type plus eventually the MIME type name and description"),Object(r.b)("li",{parentName:"ul"},"environmentDescription : optional software and hardware environment to handle data file")),Object(r.b)("h3",{id:"preservation-and-description-informations"},"Preservation and description informations"),Object(r.b)("p",null,"Unlike ContentInformation, preservation and description informations provides informations to an entire information package and not only the files associated to an information package."),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"PreservationDescriptionInformation")," contains 5 sections:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"contextInformation: contains the tags and any key/value couple. (optional)"),Object(r.b)("li",{parentName:"ul"},"referenceInformation: contains key/value couple which key should be a system identifier and its value should be the said identifier into this system."),Object(r.b)("li",{parentName:"ul"},"provenanceInformation: see new section."),Object(r.b)("li",{parentName:"ul"},"fixityInformation: it is empty for now and still there to be compliant with the OAIS recommandations."),Object(r.b)("li",{parentName:"ul"},"accessRightInformation: it contains the access level (public, secure, ...), an optional licence and an optional public release date.")),Object(r.b)("h4",{id:"provenance-informations"},"Provenance informations"),Object(r.b)("p",null,"Provenance informations have an unorthodox structure, it contains informations on the life of your information package: the history."),Object(r.b)("p",null,"In addition to the history, ",Object(r.b)("inlineCode",{parentName:"p"},"ProvenanceInformation")," contains optional informations (related to spatial domain semantic, probably not useful for other domain):"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"facility"),Object(r.b)("li",{parentName:"ul"},"instrument"),Object(r.b)("li",{parentName:"ul"},"filter"),Object(r.b)("li",{parentName:"ul"},"detector"),Object(r.b)("li",{parentName:"ul"},"proposal")),Object(r.b)("p",null,'and a field "additional" that allows to add any key/value couple on additional provenance information that are not already there.'),Object(r.b)("h3",{id:"descriptive-informations"},"Descriptive informations"),Object(r.b)("p",null,"Informations (key/value pairs) which are publish, they do not have technical meaning, they are business related."))}p.isMDXComponent=!0},2701:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var a=n(0),o=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),p=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=p(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},u=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),b=p(n),u=a,m=b["".concat(i,".").concat(u)]||b[u]||d[u]||r;return n?o.a.createElement(m,c(c({ref:t},s),{},{components:n})):o.a.createElement(m,c({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var s=2;s<r;s++)i[s]=n[s];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);