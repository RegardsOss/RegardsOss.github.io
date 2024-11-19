"use strict";(self.webpackChunkregardsoss_github_io=self.webpackChunkregardsoss_github_io||[]).push([[62339],{93375:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var t=i(74848),o=i(28453);const r={id:"backend-framework-starters-oais",title:"OAIS starter",slug:"/development/backend/framework/starters/oais/"},a=void 0,s={id:"development/framework/starters/backend-framework-starters-oais",title:"OAIS starter",description:"Purpose",source:"@site/docs/development/framework/starters/oais-starter.md",sourceDirName:"development/framework/starters",slug:"/development/backend/framework/starters/oais/",permalink:"/docs/development/backend/framework/starters/oais/",draft:!1,unlisted:!1,editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/docs/development/framework/starters/oais-starter.md",tags:[],version:"current",frontMatter:{id:"backend-framework-starters-oais",title:"OAIS starter",slug:"/development/backend/framework/starters/oais/"},sidebar:"dev",previous:{title:"Multitenant starter",permalink:"/docs/development/backend/framework/starters/multitenant/"},next:{title:"Plugins starter",permalink:"/docs/development/backend/framework/starters/plugins/"}},d={},c=[{value:"Purpose",id:"purpose",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Autoconfiguration",id:"autoconfiguration",level:2},{value:"How to",id:"how-to",level:2},{value:"How to use the starter",id:"how-to-use-the-starter",level:3},{value:"How to build information packages",id:"how-to-build-information-packages",level:3},{value:"Structure",id:"structure",level:2},{value:"Information packages",id:"information-packages",level:3},{value:"Information package properties",id:"information-package-properties",level:3},{value:"Content informations",id:"content-informations",level:3},{value:"OAISDataObject",id:"oaisdataobject",level:4},{value:"RepresentationInformation",id:"representationinformation",level:4},{value:"Preservation and description informations",id:"preservation-and-description-informations",level:3},{value:"Provenance informations",id:"provenance-informations",level:4},{value:"Descriptive informations",id:"descriptive-informations",level:3}];function l(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"purpose",children:"Purpose"}),"\n",(0,t.jsxs)(n.p,{children:["This starter is a REGARDS representation of an information package described by the ",(0,t.jsx)(n.a,{href:"https://public.ccsds.org/pubs/650x0m2.pdf",children:"OAIS recommandation of the CCSDS"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"configuration",children:"Configuration"}),"\n",(0,t.jsx)(n.p,{children:"Add starter dependency to your POM (version depends on the REGARDS BOM)"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-xml",children:"<dependency>\n  <groupId>fr.cnes.regards.framework</groupId>\n  <artifactId>oais-starter</artifactId>\n</dependency>\n"})}),"\n",(0,t.jsx)(n.p,{children:"Business dependency :"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-xml",children:"<dependency>\n  <groupId>fr.cnes.regards.framework</groupId>\n  <artifactId>oais-regards</artifactId>\n</dependency>\n"})}),"\n",(0,t.jsx)(n.p,{children:"Dependency :"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/docs/development/backend/framework/starters/geojson/",children:"GeoJSON starter"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/docs/development/backend/framework/starters/gson/",children:"GSON starter"})}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"autoconfiguration",children:"Autoconfiguration"}),"\n",(0,t.jsx)(n.p,{children:"Starter autoconfigures Gson to (de)serialize base objects. At the moment, only Gson can do this properly."}),"\n",(0,t.jsx)(n.h2,{id:"how-to",children:"How to"}),"\n",(0,t.jsx)(n.h3,{id:"how-to-use-the-starter",children:"How to use the starter"}),"\n",(0,t.jsxs)(n.p,{children:["You can extend ",(0,t.jsx)(n.code,{children:"AbstractInformationPackage"})," to make your own information package. ",(0,t.jsx)(n.code,{children:"AbstractInformationPackage"})," is compliant with GeoJSON format by extending ",(0,t.jsx)(n.code,{children:"AbstractFeature"}),". As consequences, information packages contain a geometry attribute, an id attribute and a property attribute, the former being of type ",(0,t.jsx)(n.code,{children:"InformationPackageProperties"}),"."]}),"\n",(0,t.jsx)(n.h3,{id:"how-to-build-information-packages",children:"How to build information packages"}),"\n",(0,t.jsxs)(n.p,{children:["Information packages can be built thanks to extensions of abstract builder ",(0,t.jsx)(n.code,{children:"IPBuilder"}),". ",(0,t.jsx)(n.code,{children:"IPBuilder"})," allows to set the properties of the information package."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"InformationPackageProperties"})," can be built thanks to ",(0,t.jsx)(n.code,{children:"InformationPackagePropertiesBuilder"})," which gives access to ",(0,t.jsx)(n.code,{children:"ContentInformationBuilder"})," and ",(0,t.jsx)(n.code,{children:"PDIBuilder"})," that has to be used to build ",(0,t.jsx)(n.code,{children:"ContentInformation"})," and ",(0,t.jsx)(n.code,{children:"PreservationDescriptionInformation"}),". With a specific action to actually add ",(0,t.jsx)(n.code,{children:"ContentInformation"})," to your ",(0,t.jsx)(n.code,{children:"InformationPackageProperties"}),": once a ",(0,t.jsx)(n.code,{children:"ContentInformation"})," has been prepared, you have to use ",(0,t.jsx)(n.code,{children:"InformationPackagePropertiesBuilder.addContentInformation"})," method to actually build and add a ",(0,t.jsx)(n.code,{children:"ContentInformation"})," to your ",(0,t.jsx)(n.code,{children:"InformationPackageProperties"}),". In addition to ",(0,t.jsx)(n.code,{children:"ContentInformationBuilder"})," and ",(0,t.jsx)(n.code,{children:"PDIBuilder"}),", ",(0,t.jsx)(n.code,{children:"InformationPackagePropertiesBuilder"})," allows you to add descriptive informations."]}),"\n",(0,t.jsx)(n.h2,{id:"structure",children:"Structure"}),"\n",(0,t.jsx)(n.h3,{id:"information-packages",children:"Information packages"}),"\n",(0,t.jsxs)(n.p,{children:["Information packages into REGARDS follow GeoJSON structure, it has an id, a geometry and properties. Those properties has a specific structure: it is ",(0,t.jsx)(n.code,{children:"InformationPackageProperties"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["It also has an extension ",(0,t.jsx)(n.code,{children:"ipType"})," which represents the type of your information package (Collection, Dataset, Data, ...)"]}),"\n",(0,t.jsx)(n.h3,{id:"information-package-properties",children:"Information package properties"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"InformationPackageProperties"})," contains many sections:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"contentInformations: set of content informations (data references)"}),"\n",(0,t.jsx)(n.li,{children:"pdi: preservation and description information (minimal information to understand content informations for a long time)"}),"\n",(0,t.jsx)(n.li,{children:"descriptiveInformation (optional) : set of description information to ease data discovery and retrieval"}),"\n",(0,t.jsx)(n.li,{children:"miscInformation (optional) : miscellanous information"}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"content-informations",children:"Content informations"}),"\n",(0,t.jsx)(n.p,{children:"Content informations by their structure allow to give some informations on the files associated to an information package."}),"\n",(0,t.jsxs)(n.p,{children:["Each ",(0,t.jsx)(n.code,{children:"ContentInformation"})," contains 2 sections:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"OAISDataObject"}),": file reference"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"RepresentationInformation"}),": object describing how to handle, understand, etc. this data object."]}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"oaisdataobject",children:"OAISDataObject"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"OAISDataObject"})," contains minimal metadata to handle a file :"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"regardsDataType : the data type in term of REGARDS concept :"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["RAWDATA : the main data (at least one ",(0,t.jsx)(n.code,{children:"ContentInformation"})," qualified as RAWDATA is required in one AIP)"]}),"\n",(0,t.jsx)(n.li,{children:"QUICKLOOK_SD, QUICKLOOK_MD, QUICKLOOK_HD : optional RAWDATA quicklook with definition level (small, medium or high definition)"}),"\n",(0,t.jsx)(n.li,{children:"DOCUMENT : optional document related to the RAWDATA"}),"\n",(0,t.jsx)(n.li,{children:"THUMBNAIL : optional RAWDATA thumbnail"}),"\n",(0,t.jsx)(n.li,{children:"DESCRIPTION : optional description"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["AIP data type is also available for internal use in archival storage. Indeed, archival storage stores all referenced files described in all available ",(0,t.jsx)(n.code,{children:"ContentInformation"})," of the AIP ",(0,t.jsx)(n.strong,{children:"plus itself"}),"."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"reference : reference flag allows to just store reference to external data file, not store the physical file."}),"\n",(0,t.jsx)(n.li,{children:"urls : list of file URLs pointing to the same file"}),"\n",(0,t.jsx)(n.li,{children:"filename : the filename"}),"\n",(0,t.jsx)(n.li,{children:"algorithm : used to compute the checksum for data integrity control"}),"\n",(0,t.jsx)(n.li,{children:"checksum : data checksum"}),"\n",(0,t.jsx)(n.li,{children:"fileSize : optional file size"}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"representationinformation",children:"RepresentationInformation"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"RepresentationInformation"})," contains metadata related to ",(0,t.jsx)(n.code,{children:"OAISDataObject"}),":"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"semantic : optional semantic description,"}),"\n",(0,t.jsx)(n.li,{children:"syntax : required syntax with a least the data file MIME type plus eventually the MIME type name and description"}),"\n",(0,t.jsx)(n.li,{children:"environmentDescription : optional software and hardware environment to handle data file"}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"preservation-and-description-informations",children:"Preservation and description informations"}),"\n",(0,t.jsx)(n.p,{children:"Unlike ContentInformation, preservation and description informations provides informations to an entire information package and not only the files associated to an information package."}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"PreservationDescriptionInformation"})," contains 5 sections:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"contextInformation: contains the tags and any key/value couple. (optional)"}),"\n",(0,t.jsx)(n.li,{children:"referenceInformation: contains key/value couple which key should be a system identifier and its value should be the said identifier into this system."}),"\n",(0,t.jsx)(n.li,{children:"provenanceInformation: see new section."}),"\n",(0,t.jsx)(n.li,{children:"fixityInformation: it is empty for now and still there to be compliant with the OAIS recommandations."}),"\n",(0,t.jsx)(n.li,{children:"accessRightInformation: it contains the access level (public, secure, ...), an optional licence and an optional public release date."}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"provenance-informations",children:"Provenance informations"}),"\n",(0,t.jsx)(n.p,{children:"Provenance informations have an unorthodox structure, it contains informations on the life of your information package: the history."}),"\n",(0,t.jsxs)(n.p,{children:["In addition to the history, ",(0,t.jsx)(n.code,{children:"ProvenanceInformation"})," contains optional informations (related to spatial domain semantic, probably not useful for other domain):"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"facility"}),"\n",(0,t.jsx)(n.li,{children:"instrument"}),"\n",(0,t.jsx)(n.li,{children:"filter"}),"\n",(0,t.jsx)(n.li,{children:"detector"}),"\n",(0,t.jsx)(n.li,{children:"proposal"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:'and a field "additional" that allows to add any key/value couple on additional provenance information that are not already there.'}),"\n",(0,t.jsx)(n.h3,{id:"descriptive-informations",children:"Descriptive informations"}),"\n",(0,t.jsx)(n.p,{children:"Informations (key/value pairs) which are publish, they do not have technical meaning, they are business related."})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>a,x:()=>s});var t=i(96540);const o={},r=t.createContext(o);function a(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);