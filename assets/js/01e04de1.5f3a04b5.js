"use strict";(self.webpackChunkregardsoss_github_io=self.webpackChunkregardsoss_github_io||[]).push([[73839],{89272:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>a,contentTitle:()=>i,default:()=>h,frontMatter:()=>d,metadata:()=>l,toc:()=>c});var n=r(74848),s=r(28453);const d={id:"backend-fem-amqp-api",title:"Feature Manager AMQP API",sidebar_label:"Feature Manager AMQP",slug:"/development/backend/services/fem/api/amqp/"},i=void 0,l={id:"development/backend/regards/fem/api/backend-fem-amqp-api",title:"Feature Manager AMQP API",description:"Overview",source:"@site/versioned_docs/version-1.14/development/backend/regards/fem/api/feature-management-amqp-api.md",sourceDirName:"development/backend/regards/fem/api",slug:"/development/backend/services/fem/api/amqp/",permalink:"/docs/1.14/development/backend/services/fem/api/amqp/",draft:!1,unlisted:!1,editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/versioned_docs/version-1.14/development/backend/regards/fem/api/feature-management-amqp-api.md",tags:[],version:"1.14",frontMatter:{id:"backend-fem-amqp-api",title:"Feature Manager AMQP API",sidebar_label:"Feature Manager AMQP",slug:"/development/backend/services/fem/api/amqp/"},sidebar:"dev",previous:{title:"Feature Manager REST",permalink:"/docs/1.14/development/backend/services/fem/api/rest/"},next:{title:"Feature Factory",permalink:"/docs/1.14/development/backend/services/fem/plugins/feature-factory/"}},a={},c=[{value:"Overview",id:"overview",level:2},{value:"Request payload",id:"request-payload",level:2},{value:"Payload detailed properties",id:"payload-detailed-properties",level:3},{value:"Feature",id:"feature",level:4},{value:"Files",id:"files",level:4},{value:"Request metadata",id:"request-metadata",level:2},{value:"Metadata detailed properties",id:"metadata-detailed-properties",level:3},{value:"AMQP API",id:"amqp-api",level:2},{value:"Feature creation request",id:"feature-creation-request",level:3},{value:"Example",id:"example",level:4},{value:"Feature creation request by file reference",id:"feature-creation-request-by-file-reference",level:3},{value:"Example",id:"example-1",level:4},{value:"Feature patch request",id:"feature-patch-request",level:3},{value:"Example",id:"example-2",level:4},{value:"Feature deletion request",id:"feature-deletion-request",level:3},{value:"Example",id:"example-3",level:4},{value:"AMQP monitoring API...",id:"amqp-monitoring-api",level:2},{value:"Example of DENIED request",id:"example-of-denied-request",level:4},{value:"Example of GRANTED request",id:"example-of-granted-request",level:4},{value:"Example of SUCCESS request",id:"example-of-success-request",level:4},{value:"Example of ERROR request",id:"example-of-error-request",level:4},{value:"...For feature module",id:"for-feature-module",level:3},{value:"...For featureprovider module",id:"for-featureprovider-module",level:3}];function o(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:"overview",children:"Overview"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"Feature management"})," microservice is a data repository in ",(0,n.jsx)(t.a,{href:"https://geojson.org/",children:"GeoJSON format"}),"."]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"Feature Management"})," reponsabilities:"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Extract data references thanks to [IFeatureFactoryPlugins],"}),"\n",(0,n.jsx)(t.li,{children:"Create, patch or delete data references,"}),"\n",(0,n.jsx)(t.li,{children:"Re-notify stakeholders of existing data references,"}),"\n",(0,n.jsxs)(t.li,{children:["Delegate the storage of files (if any) to ",(0,n.jsx)(t.code,{children:"Storage Management"}),"."]}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["To edit this repository, a data producer has to send ",(0,n.jsx)(t.strong,{children:"requests"}),"."]}),"\n",(0,n.jsx)(t.p,{children:"At the moment, 2 API are available :"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["Messaging API (",(0,n.jsx)(t.a,{href:"https://www.amqp.org/",children:"AMQP"}),") allows to publish creation, reference, patch, deletion and notification requests on specific exchanges."]}),"\n",(0,n.jsxs)(t.li,{children:["HTTP REST API allows to submit creation requests (as ",(0,n.jsx)(t.code,{children:"POST"})," HTTP requests), update requests (as ",(0,n.jsx)(t.code,{children:"PATCH"})," HTTP requests) or deletion requests (as ",(0,n.jsx)(t.code,{children:"DELETE"})," HTTP requests)."]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Feature management architectural concepts",src:r(84709).A+"",width:"1301",height:"696"})}),"\n",(0,n.jsxs)(t.p,{children:["Under the hood, those reponsabilities are divided between two modules: ",(0,n.jsx)(t.code,{children:"featureprovider"})," and ",(0,n.jsx)(t.code,{children:"feature"}),". ",(0,n.jsx)(t.code,{children:"featureprovider"})," is only responsible for handling data references extraction requests, that is extraction of information needed from physical files to create a data reference that is then handled by the ",(0,n.jsx)(t.code,{children:"feature"})," module."]}),"\n",(0,n.jsx)(t.p,{children:"API are documented in detail below."}),"\n",(0,n.jsx)(t.h2,{id:"request-payload",children:"Request payload"}),"\n",(0,n.jsxs)(t.p,{children:["Regardless of the API used, payload of each API is expected in ",(0,n.jsx)(t.a,{href:"https://geojson.org/",children:"GeoJSON format"}),"."]}),"\n",(0,n.jsx)(t.p,{children:"The basic structure is as follows :"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["A required ",(0,n.jsx)(t.code,{children:"id"}),","]}),"\n",(0,n.jsxs)(t.li,{children:["A required ",(0,n.jsx)(t.code,{children:"type"})," with value ",(0,n.jsx)(t.code,{children:"Feature"}),","]}),"\n",(0,n.jsxs)(t.li,{children:["An optional ",(0,n.jsx)(t.a,{href:"https://tools.ietf.org/html/rfc7946#section-3.1",children:"geometry in GeoJSON format"}),","]}),"\n",(0,n.jsxs)(t.li,{children:["An optional set of ",(0,n.jsx)(t.code,{children:"properties"}),"."]}),"\n"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-json",children:'{\n    "id": "FeatureId",\n    "type": "Feature",\n    "geometry": {\n        "type": "Point",\n        "coordinates": [\n            125.6,\n            10.1\n        ]\n    },\n    "properties": {\n        "name": "Dinagat Islands"\n    }\n}\n'})}),"\n",(0,n.jsx)(t.p,{children:"For the purposes of this microservice, GeoJSON structure is extended  with following properties :"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["An ",(0,n.jsx)(t.code,{children:"urn"})," (uniform resource name as unique identifier) generated by the microservice when creating a new reference and ",(0,n.jsx)(t.strong,{children:"expected only"})," when updating a reference."]}),"\n",(0,n.jsxs)(t.li,{children:["A required ",(0,n.jsx)(t.code,{children:"model"})," representing the name of the model defining the expected ",(0,n.jsx)(t.code,{children:"properties"})," field structure (and previously configured)."]}),"\n",(0,n.jsxs)(t.li,{children:["A required ",(0,n.jsx)(t.code,{children:"entityType"})," defining the reference business type."]}),"\n",(0,n.jsxs)(t.li,{children:["An optional ",(0,n.jsx)(t.code,{children:"files"})," property with a fixed structure that allows to store or reference physical data (service delegated to another microservice called ",(0,n.jsx)(t.code,{children:"Storage Management"}),")."]}),"\n"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-json",children:'{\n    "id": "FeatureId",\n    "urn": "UniqueFeatureId",\n    "model": "RelatedModelName",\n    "entityType": "DATA",\n    "type": "Feature",\n    "geometry": {\n        "type": "Point",\n        "coordinates": [\n            125.6,\n            10.1\n        ]\n    },\n    "properties": {\n        "name": "Dinagat Islands"\n    },\n    "files": [\n        {\n            "locations": [\n                {\n                    "storage": "DISK",\n                    "url": "file://home/user/regards/file.zip"\n                }\n            ],\n            "attributes": {\n                "dataType": "RAWDATA",\n                "mimeType": "application/zip",\n                "filename": "file.zip",\n                "filesize": "8013",\n                "algorithm": "MD5",\n                "checksum": "4e188bd8a6288164c25c3728ce394927"\n            }\n        }\n    ]\n}\n'})}),"\n",(0,n.jsx)("a",{name:"payloadppt"}),"\n",(0,n.jsx)(t.h3,{id:"payload-detailed-properties",children:"Payload detailed properties"}),"\n",(0,n.jsx)(t.h4,{id:"feature",children:"Feature"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{style:{textAlign:"center"},children:"Path"}),(0,n.jsx)(t.th,{style:{textAlign:"center"},children:"Type"}),(0,n.jsx)(t.th,{style:{textAlign:"center"},children:"Description"}),(0,n.jsx)(t.th,{style:{textAlign:"center"},children:"Optional"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"id"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:(0,n.jsx)(t.code,{children:"String"})}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"Id from provider"}),(0,n.jsx)(t.td,{style:{textAlign:"center"}})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"urn"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:(0,n.jsx)(t.code,{children:"String"})}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"Unique feature identifer based on provider identifier with TEST:REQUEST:2342"}),(0,n.jsx)(t.td,{style:{textAlign:"center"}})]})]})]}),"\n",(0,n.jsx)(t.admonition,{type:"danger",children:(0,n.jsx)(t.p,{children:"Urn is only expected in update and deletion requests!"})}),"\n",(0,n.jsx)(t.h4,{id:"files",children:"Files"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{style:{textAlign:"center"},children:"Path"}),(0,n.jsx)(t.th,{style:{textAlign:"center"},children:"Type"}),(0,n.jsx)(t.th,{style:{textAlign:"center"},children:"Description"}),(0,n.jsx)(t.th,{style:{textAlign:"center"},children:"Optional"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"locations[].storage"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:(0,n.jsx)(t.code,{children:"String"})}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"Storage"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"true"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"locations[].url"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:(0,n.jsx)(t.code,{children:"String"})}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"Url location"}),(0,n.jsx)(t.td,{style:{textAlign:"center"}})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"attributes.dataType"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:(0,n.jsx)(t.code,{children:"String"})}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"RAWDATA, QUICKLOOK_SD, QUICKLOOK_MD, QUICKLOOK_HD, DOCUMENT, THUMBNAIL, DESCRIPTION"}),(0,n.jsx)(t.td,{style:{textAlign:"center"}})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"attributes.mimeType"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:(0,n.jsx)(t.code,{children:"String"})}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"MIME type"}),(0,n.jsx)(t.td,{style:{textAlign:"center"}})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"attributes.filename"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:(0,n.jsx)(t.code,{children:"String"})}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"Filename"}),(0,n.jsx)(t.td,{style:{textAlign:"center"}})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"attributes.filesize"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:(0,n.jsx)(t.code,{children:"Number"})}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"File size"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"true"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"attributes.algorithm"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:(0,n.jsx)(t.code,{children:"String"})}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"Checksum algorithm"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"true"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"attributes.checksum"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:(0,n.jsx)(t.code,{children:"String"})}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"Checksum"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"true"})]})]})]}),"\n",(0,n.jsx)(t.admonition,{type:"danger",children:(0,n.jsxs)(t.p,{children:["Algorithm & cheksum are required if data have to be stored by ",(0,n.jsx)(t.code,{children:"Storage Management"}),"."]})}),"\n",(0,n.jsx)("a",{name:"metadatappt"}),"\n",(0,n.jsx)(t.h2,{id:"request-metadata",children:"Request metadata"}),"\n",(0,n.jsx)(t.p,{children:"As the payload, regardless of the API used, metadata is often associated with a request."}),"\n",(0,n.jsx)(t.h3,{id:"metadata-detailed-properties",children:"Metadata detailed properties"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{style:{textAlign:"center"},children:"Path"}),(0,n.jsx)(t.th,{style:{textAlign:"center"},children:"Type"}),(0,n.jsx)(t.th,{style:{textAlign:"center"},children:"Description"}),(0,n.jsx)(t.th,{style:{textAlign:"center"},children:"Optional"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"metadata.override"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:(0,n.jsx)(t.code,{children:"Boolean"})}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"Indicate wether the previous version should be deleted"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"true"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"metadata.session"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:(0,n.jsx)(t.code,{children:"String"})}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"Arbitrary session name to classify data for human operators"}),(0,n.jsx)(t.td,{style:{textAlign:"center"}})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"metadata.sessionOwner"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:(0,n.jsx)(t.code,{children:"String"})}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"Arbitrary session owner to classify data for human operators"}),(0,n.jsx)(t.td,{style:{textAlign:"center"}})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"metadata.storages"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:(0,n.jsx)(t.code,{children:"Array"})}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"Target storages if there are files to store (may be empty!)"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"true"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"metadata.storages[].pluginBusinessId"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:(0,n.jsx)(t.code,{children:"String"})}),(0,n.jsxs)(t.td,{style:{textAlign:"center"},children:["Storage plugin identifier (previously configured in ",(0,n.jsx)(t.code,{children:"Storage Management"})]}),(0,n.jsx)(t.td,{style:{textAlign:"center"}})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"metadata.storages[].targetTypes"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:(0,n.jsx)(t.code,{children:"Array"})}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"List of data object types accepted by this storage location"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"true"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"metadata.storages[].storePath"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:(0,n.jsx)(t.code,{children:"String"})}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"Directory in which to store the file"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"true"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"metadata.priority"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:(0,n.jsx)(t.code,{children:"String"})}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"HIGH, NORMAL, LOW"}),(0,n.jsx)(t.td,{style:{textAlign:"center"}})]})]})]}),"\n",(0,n.jsx)(t.admonition,{type:"danger",children:(0,n.jsx)(t.p,{children:"override should only be specified with Extraction or Creation requests."})}),"\n",(0,n.jsx)(t.h2,{id:"amqp-api",children:"AMQP API"}),"\n",(0,n.jsx)(t.h3,{id:"feature-creation-request",children:"Feature creation request"}),"\n",(0,n.jsxs)(t.p,{children:["Request has to be published on this exchange : ",(0,n.jsx)(t.code,{children:"regards.broadcast.fr.cnes.regards.modules.feature.dto.event.in.FeatureCreationRequestEvent"})]}),"\n",(0,n.jsx)(t.p,{children:"With following properties:"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Property"}),(0,n.jsx)(t.th,{children:"Type"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"metadata"}),(0,n.jsxs)(t.td,{children:["(look at ",(0,n.jsx)(t.a,{href:"#metadatappt",children:"description above"}),")"]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"feature"}),(0,n.jsxs)(t.td,{children:["(look at ",(0,n.jsx)(t.a,{href:"#payloadppt",children:"description above"}),")"]})]})]})]}),"\n",(0,n.jsx)(t.p,{children:"And following headers:"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Header"}),(0,n.jsx)(t.th,{children:"Value"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"regards.tenant"}),(0,n.jsx)(t.td,{children:"The tenant"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"regards.request.id"}),(0,n.jsx)(t.td,{children:"String of max 36 characters long"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"regards.request.date"}),(0,n.jsx)(t.td,{children:"ISO 8601 date"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"regards.request.owner"}),(0,n.jsx)(t.td,{children:"String of max 128 characters long"})]})]})]}),"\n",(0,n.jsx)(t.h4,{id:"example",children:"Example"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-properties",children:"# Headers\nregards.tenant=project1\nregards.request.id=12345463-0f6b-4488-b58c-52af3f7e9563\nregards.request.owner=owner\nregards.request.date=2019-07-04T01:03:00\n"})}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-json",children:'{\n    "metadata": {\n        "sessionOwner": "owner",\n        "session": "session",\n        "storages": [\n            {\n                "pluginBusinessId": "disk"\n            }\n        ],\n        "priority": "NORMAL"\n    },\n    "feature": {\n        "entityType": "DATA",\n        "model": "FEATURE01",\n        "files": [\n            {\n                "locations": [\n                    {\n                        "storage": null,\n                        "url": "http://www.test.com/filename.xml"\n                    }\n                ],\n                "attributes": {\n                    "dataType": "RAWDATA",\n                    "mimeType": "application/xml",\n                    "filename": "filename",\n                    "filesize": 100,\n                    "algorithm": "MD5",\n                    "checksum": "checksum"\n                }\n            }\n        ],\n        "id": "MyId",\n        "geometry": {\n            "coordinates": [\n                10.0,\n                20.0\n            ],\n            "type": "Point",\n            "bbox": null,\n            "crs": null\n        },\n        "normalizedGeometry": null,\n        "properties": {\n            "data_type": "TYPE01",\n            "file_characterization": {\n                "valid": true\n            }\n        },\n        "type": "Feature"\n    }\n}\n'})}),"\n",(0,n.jsx)(t.h3,{id:"feature-creation-request-by-file-reference",children:"Feature creation request by file reference"}),"\n",(0,n.jsx)(t.p,{children:"This API allows to generate feature by extracting metadata from the passed location."}),"\n",(0,n.jsxs)(t.p,{children:["Request has to be published on this exchange : ",(0,n.jsx)(t.code,{children:"regards.broadcast.fr.cnes.regards.modules.featureprovider.domain.FeatureExtractionRequestEvent"})]}),"\n",(0,n.jsx)(t.p,{children:"With following properties:"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Property"}),(0,n.jsx)(t.th,{children:"Type"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"metadata"}),(0,n.jsxs)(t.td,{children:["(look at ",(0,n.jsx)(t.a,{href:"#metadatappt",children:"description above"}),")"]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"parameters"}),(0,n.jsx)(t.td,{children:"Free JSON parameters to be used by related factory"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"factory"}),(0,n.jsx)(t.td,{children:"Plugin business identifier representing the feature factory to use"})]})]})]}),"\n",(0,n.jsx)(t.admonition,{type:"info",children:(0,n.jsx)(t.p,{children:"Factory must have been configured beforehand."})}),"\n",(0,n.jsx)(t.p,{children:"And following headers:"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Header"}),(0,n.jsx)(t.th,{children:"Value"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"regards.tenant"}),(0,n.jsx)(t.td,{children:"The tenant"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"regards.request.id"}),(0,n.jsx)(t.td,{children:"String of max 36 characters long"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"regards.request.date"}),(0,n.jsx)(t.td,{children:"ISO 8601 date"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"regards.request.owner"}),(0,n.jsx)(t.td,{children:"String of max 128 characters long"})]})]})]}),"\n",(0,n.jsx)(t.h4,{id:"example-1",children:"Example"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-properties",children:"# Headers\nregards.tenant=project1\nregards.request.id=12345463-0f6b-4488-b58c-52af3f7e9563\nregards.request.owner=owner\nregards.request.date=2019-07-04T01:03:00\n"})}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-json",children:'{\n    "metadata": {\n        "sessionOwner": "owner",\n        "session": "session",\n        "storages": [\n            {\n                "pluginBusinessId": "disk"\n            }\n        ],\n        "priority": "NORMAL"\n    },\n    "factory": "{factory identifier}",\n    "parameters": {\n        "location":"my/file/location"\n    }\n}\n'})}),"\n",(0,n.jsx)(t.h3,{id:"feature-patch-request",children:"Feature patch request"}),"\n",(0,n.jsxs)(t.p,{children:["Request has to be published on this exchange : ",(0,n.jsx)(t.code,{children:"regards.broadcast.fr.cnes.regards.modules.feature.dto.event.in.FeatureUpdateRequestEvent"})]}),"\n",(0,n.jsx)(t.p,{children:"With following properties:"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Property"}),(0,n.jsx)(t.th,{children:"Type"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"metadata.priority"}),(0,n.jsxs)(t.td,{children:["(look at ",(0,n.jsx)(t.a,{href:"#metadatappt",children:"description above"}),")"]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"metadata.storages"}),(0,n.jsxs)(t.td,{children:["(look at ",(0,n.jsx)(t.a,{href:"#metadatappt",children:"description above"}),")"]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"feature"}),(0,n.jsxs)(t.td,{children:["(look at ",(0,n.jsx)(t.a,{href:"#payloadppt",children:"description above"}),")"]})]})]})]}),"\n",(0,n.jsx)(t.admonition,{type:"info",children:(0,n.jsx)(t.p,{children:"Only properties to be updated can be passed on ... they will be merged with existing ones."})}),"\n",(0,n.jsx)(t.p,{children:"And following headers:"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Header"}),(0,n.jsx)(t.th,{children:"Value"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"regards.tenant"}),(0,n.jsx)(t.td,{children:"The tenant"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"regards.request.id"}),(0,n.jsx)(t.td,{children:"String of max 36 characters long"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"regards.request.date"}),(0,n.jsx)(t.td,{children:"ISO 8601 date"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"regards.request.owner"}),(0,n.jsx)(t.td,{children:"String of max 128 characters long"})]})]})]}),"\n",(0,n.jsx)(t.h4,{id:"example-2",children:"Example"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-properties",children:"# Headers\nregards.tenant=project1\nregards.request.id=12345463-0f6b-4488-b58c-52af3f7e9563\nregards.request.owner=owner\nregards.request.date=2019-07-04T01:03:00\n"})}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-json",children:'{\n    "metadata": {\n        "storages": [],\n        "priority": "NORMAL"\n    },\n    "feature": {\n        "urn": "URN:FEATURE:DATA:tenant:87fdda0e-27d1-494f-a1c0-c57f2f0810f7:V1",\n        "entityType": "DATA",\n        "model": "FEATURE01",\n        "files": [],\n        "id": "MyId",\n        "geometry": null,\n        "normalizedGeometry": null,\n        "properties": {\n            "file_characterization": {\n                "invalidation_date": "2019-12-03T12:31:42.466Z",\n                "valid": false\n            }\n        },\n        "type": "Feature"\n    }\n}\n'})}),"\n",(0,n.jsx)(t.h3,{id:"feature-deletion-request",children:"Feature deletion request"}),"\n",(0,n.jsxs)(t.p,{children:["Request has to be published on this exchange : ",(0,n.jsx)(t.code,{children:"regards.broadcast.fr.cnes.regards.modules.feature.dto.event.in.FeatureDeletionRequestEvent"})]}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Property"}),(0,n.jsx)(t.th,{children:"Type"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"priority"}),(0,n.jsxs)(t.td,{children:["(look at ",(0,n.jsx)(t.a,{href:"#metadatappt",children:"description above"}),")"]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"urn"}),(0,n.jsx)(t.td,{children:"Unique identifier of the feature"})]})]})]}),"\n",(0,n.jsx)(t.p,{children:"With following headers:"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Header"}),(0,n.jsx)(t.th,{children:"Value"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"regards.tenant"}),(0,n.jsx)(t.td,{children:"The tenant"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"regards.request.id"}),(0,n.jsx)(t.td,{children:"String of max 36 characters long"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"regards.request.date"}),(0,n.jsx)(t.td,{children:"ISO 8601 date"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"regards.request.owner"}),(0,n.jsx)(t.td,{children:"String of max 128 characters long"})]})]})]}),"\n",(0,n.jsx)(t.h4,{id:"example-3",children:"Example"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-properties",children:"# Headers\nregards.tenant=project1\nregards.request.id=78938463-023a-4488-b58c-52af3f7e9446\nregards.request.owner=owner\nregards.request.date=2020-03-17T12:24:05.995Z\n"})}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-json",children:'{\n    "priority": "NORMAL",\n    "urn": "URN:FEATURE:DATA:tenant:87fdda0e-27d1-494f-a1c0-c57f2f0810f7:V1"\n}\n'})}),"\n",(0,n.jsx)(t.h2,{id:"amqp-monitoring-api",children:"AMQP monitoring API..."}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"Feature manager"})," microservice publishes AMQP messages to monitor request lifecycle."]}),"\n",(0,n.jsxs)(t.p,{children:["Messages are published to two different exchanges because under the hood ",(0,n.jsx)(t.code,{children:"Feature manager"})," is in reality composed of two modules: ",(0,n.jsx)(t.code,{children:"feature"})," and ",(0,n.jsx)(t.code,{children:"featureprovider"}),". Whatever the exchange to which those monitoring messages are comming from, they have the same structure, that is:"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["The ",(0,n.jsx)(t.code,{children:"requestId"})," (corresponds to ",(0,n.jsx)(t.code,{children:"regards.request.id"})," header),"]}),"\n",(0,n.jsxs)(t.li,{children:["The ",(0,n.jsx)(t.code,{children:"requestOwner"})," (corresponds to ",(0,n.jsx)(t.code,{children:"regards.request.owner"})," header),"]}),"\n",(0,n.jsxs)(t.li,{children:["The related feature ",(0,n.jsx)(t.code,{children:"id"})," (not specified for ",(0,n.jsx)(t.code,{children:"EXTRACTION"})," requests because feature is not yet created),"]}),"\n",(0,n.jsxs)(t.li,{children:["The related feature ",(0,n.jsx)(t.code,{children:"urn"})," (not specified for ",(0,n.jsx)(t.code,{children:"EXTRACTION"})," requests because feature is not yet created),"]}),"\n",(0,n.jsxs)(t.li,{children:["The request type (",(0,n.jsx)(t.code,{children:"EXTRACTION"}),",",(0,n.jsx)(t.code,{children:"CREATION"}),",",(0,n.jsx)(t.code,{children:"PATCH"}),",",(0,n.jsx)(t.code,{children:"DELETION"}),",",(0,n.jsx)(t.code,{children:"NOTIFICATION"}),",",(0,n.jsx)(t.code,{children:"FILE_COPY"}),",",(0,n.jsx)(t.code,{children:"SAVE_METADATA"}),")"]}),"\n",(0,n.jsxs)(t.li,{children:["The state of the request (",(0,n.jsx)(t.code,{children:"GRANTED"}),",",(0,n.jsx)(t.code,{children:"DENIED"}),",",(0,n.jsx)(t.code,{children:"ERROR"})," or ",(0,n.jsx)(t.code,{children:"SUCCESS"}),"),"]}),"\n",(0,n.jsxs)(t.li,{children:["A list of ",(0,n.jsx)(t.code,{children:"errors"})," if any."]}),"\n"]}),"\n",(0,n.jsx)(t.admonition,{type:"info",children:(0,n.jsx)(t.p,{children:"To receive these messages, your have to subscribe to this exchange."})}),"\n",(0,n.jsx)(t.admonition,{type:"info",children:(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"EXTRACTION"})," process does not create features. So if you want to know the created feature id or urn, you have to listen to responses from the ",(0,n.jsx)(t.code,{children:"CREATION"})," process which has the same ",(0,n.jsx)(t.code,{children:"requestId"})," than the corresponding ",(0,n.jsx)(t.code,{children:"EXTRACTION"})," request."]})}),"\n",(0,n.jsx)(t.admonition,{type:"caution",children:(0,n.jsxs)(t.p,{children:["If AMQP virtual host mode is set to ",(0,n.jsx)(t.code,{children:"SINGLE"}),", this exchange will receive all messages of all tenants! So the receiver may have to filter them according to the tenant he wishes to manage."]})}),"\n",(0,n.jsx)(t.admonition,{type:"caution",children:(0,n.jsxs)(t.p,{children:["Requests without ",(0,n.jsx)(t.code,{children:"requestId"})," can be routed to AMQP Dead Letter Queue (DLQ) so no response will be published. However, a notification is sent to the administrators of the project in order to tell them to inspect DLQ."]})}),"\n",(0,n.jsx)(t.h4,{id:"example-of-denied-request",children:"Example of DENIED request"}),"\n",(0,n.jsx)(t.p,{children:"|:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-json",children:'{\n    "requestId": "{requestId}",\n    "requestOwner": "{requestOwner}",\n    "id": "{featureId}",\n    "type": "{requestType}",\n    "state": "DENIED",\n    "errors": ["error1", "error2"]\n}\n'})}),"\n",(0,n.jsx)(t.h4,{id:"example-of-granted-request",children:"Example of GRANTED request"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-json",children:'{\n    "requestId": "{requestId}",\n    "requestOwner": "{requestOwner}",\n    "id": "{featureId}",\n    "type": "{requestType}",\n    "state": "GRANTED"\n}\n'})}),"\n",(0,n.jsx)(t.h4,{id:"example-of-success-request",children:"Example of SUCCESS request"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-json",children:'{\n    "requestId": "{requestId}",\n    "requestOwner": "{requestOwner}",\n    "id": "{featureId}",\n    "urn": "{featureGeneratedUrn}",\n    "type": "{requestType}",\n    "state": "SUCCESS"\n}\n'})}),"\n",(0,n.jsx)(t.h4,{id:"example-of-error-request",children:"Example of ERROR request"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-json",children:'{\n    "requestId": "{requestId}",\n    "requestOwner": "{requestOwner}",\n    "id": "{featureId}",\n    "urn": "{featureGeneratedUrn}",\n    "type": "{requestType}",\n    "state": "ERROR",\n    "errors": ["error1", "error2"]\n}\n'})}),"\n",(0,n.jsx)(t.h3,{id:"for-feature-module",children:"...For feature module"}),"\n",(0,n.jsxs)(t.p,{children:["Messages are published on this exchange : ",(0,n.jsx)(t.code,{children:"regards.broadcast.fr.cnes.regards.modules.feature.dto.event.out.FeatureRequestEvent"})]}),"\n",(0,n.jsx)(t.h3,{id:"for-featureprovider-module",children:"...For featureprovider module"}),"\n",(0,n.jsxs)(t.p,{children:["Messages are published on this exchange : ",(0,n.jsx)(t.code,{children:"regards.broadcast.fr.cnes.regards.modules.featureprovider.domain.FeatureExtractionResponseEvent"})]}),"\n",(0,n.jsxs)(t.p,{children:["In other words, it means that to migrate from ",(0,n.jsx)(t.strong,{children:"V1.3.x"})," to ",(0,n.jsx)(t.strong,{children:"V1.4.0"}),", you need to change the exchange to which you subscribe to receive extraction monitoring messages. Or you might be able to configure your AMQP broker to automatically redirect messages from this exchange to the old one (",(0,n.jsx)(t.code,{children:"regards.broadcast.fr.cnes.regards.modules.feature.dto.event.out.FeatureRequestEvent"}),")."]})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(o,{...e})}):o(e)}},84709:(e,t,r)=>{r.d(t,{A:()=>n});const n=r.p+"assets/images/architectural_concepts_fem-43efa101a2a882b3944d168ebc32f897.png"},28453:(e,t,r)=>{r.d(t,{R:()=>i,x:()=>l});var n=r(96540);const s={},d=n.createContext(s);function i(e){const t=n.useContext(d);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),n.createElement(d.Provider,{value:t},e.children)}}}]);