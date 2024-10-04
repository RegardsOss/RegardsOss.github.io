"use strict";(self.webpackChunkregardsoss_github_io=self.webpackChunkregardsoss_github_io||[]).push([[88779],{33518:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>d,toc:()=>a});var r=t(74848),s=t(28453);const i={id:"backend-fem-rest-api",title:"Feature Manager REST API",sidebar_label:"Feature Manager REST",slug:"/development/backend/services/fem/api/rest/"},l=void 0,d={id:"development/backend/regards/fem/api/backend-fem-rest-api",title:"Feature Manager REST API",description:"Overview",source:"@site/versioned_docs/version-1.13.0/development/backend/regards/fem/api/feature-management-rest-api.md",sourceDirName:"development/backend/regards/fem/api",slug:"/development/backend/services/fem/api/rest/",permalink:"/docs/1.13.0/development/backend/services/fem/api/rest/",draft:!1,unlisted:!1,editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/versioned_docs/version-1.13.0/development/backend/regards/fem/api/feature-management-rest-api.md",tags:[],version:"1.13.0",frontMatter:{id:"backend-fem-rest-api",title:"Feature Manager REST API",sidebar_label:"Feature Manager REST",slug:"/development/backend/services/fem/api/rest/"},sidebar:"dev",previous:{title:"Feature Manager configuration",permalink:"/docs/1.13.0/development/backend/services/fem/api/configuration/"},next:{title:"Feature Manager AMQP",permalink:"/docs/1.13.0/development/backend/services/fem/api/amqp/"}},c={},a=[{value:"Overview",id:"overview",level:2},{value:"Request payload",id:"request-payload",level:2},{value:"Payload detailed properties",id:"payload-detailed-properties",level:3},{value:"Feature",id:"feature",level:4},{value:"Files",id:"files",level:4},{value:"Request metadata",id:"request-metadata",level:2},{value:"Metadata detailed properties",id:"metadata-detailed-properties",level:3},{value:"REST API",id:"rest-api",level:2},{value:"Feature Creation request example",id:"feature-creation-request-example",level:3},{value:"Request",id:"request",level:3},{value:"Response",id:"response",level:3},{value:"Feature Patch request example",id:"feature-patch-request-example",level:3},{value:"Request",id:"request-1",level:3},{value:"Response",id:"response-1",level:3}];function o(e){const n={a:"a",admonition:"admonition",br:"br",code:"code",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"Feature management"})," microservice is a data repository in ",(0,r.jsx)(n.a,{href:"https://geojson.org/",children:"GeoJSON format"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"Feature Management"})," reponsabilities:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Extract data references thanks to [IFeatureFactoryPlugins],"}),"\n",(0,r.jsx)(n.li,{children:"Create, patch or delete data references,"}),"\n",(0,r.jsx)(n.li,{children:"Re-notify stakeholders of existing data references,"}),"\n",(0,r.jsxs)(n.li,{children:["Delegate the storage of files (if any) to ",(0,r.jsx)(n.code,{children:"Storage Management"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["To edit this repository, a data producer has to send ",(0,r.jsx)(n.strong,{children:"requests"}),"."]}),"\n",(0,r.jsx)(n.p,{children:"At the moment, 2 API are available :"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Messaging API (",(0,r.jsx)(n.a,{href:"https://www.amqp.org/",children:"AMQP"}),") allows to publish creation, reference, patch, deletion and notification requests on specific exchanges."]}),"\n",(0,r.jsxs)(n.li,{children:["HTTP REST API allows to submit creation requests (as ",(0,r.jsx)(n.code,{children:"POST"})," HTTP requests), update requests (as ",(0,r.jsx)(n.code,{children:"PATCH"})," HTTP requests) or deletion requests (as ",(0,r.jsx)(n.code,{children:"DELETE"})," HTTP requests)."]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"Feature management architectural concepts",src:t(84709).A+"",width:"1301",height:"696"})}),"\n",(0,r.jsxs)(n.p,{children:["Under the hood, those reponsabilities are divided between two modules: ",(0,r.jsx)(n.code,{children:"featureprovider"})," and ",(0,r.jsx)(n.code,{children:"feature"}),". ",(0,r.jsx)(n.code,{children:"featureprovider"})," is only responsible for handling data references extraction requests, that is extraction of information needed from physical files to create a data reference that is then handled by the ",(0,r.jsx)(n.code,{children:"feature"})," module."]}),"\n",(0,r.jsx)(n.p,{children:"API are documented in detail below."}),"\n",(0,r.jsx)(n.h2,{id:"request-payload",children:"Request payload"}),"\n",(0,r.jsxs)(n.p,{children:["Regardless of the API used, payload of each API is expected in ",(0,r.jsx)(n.a,{href:"https://geojson.org/",children:"GeoJSON format"}),"."]}),"\n",(0,r.jsx)(n.p,{children:"The basic structure is as follows :"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["A required ",(0,r.jsx)(n.code,{children:"id"}),","]}),"\n",(0,r.jsxs)(n.li,{children:["A required ",(0,r.jsx)(n.code,{children:"type"})," with value ",(0,r.jsx)(n.code,{children:"Feature"}),","]}),"\n",(0,r.jsxs)(n.li,{children:["An optional ",(0,r.jsx)(n.a,{href:"https://tools.ietf.org/html/rfc7946#section-3.1",children:"geometry in GeoJSON format"}),","]}),"\n",(0,r.jsxs)(n.li,{children:["An optional set of ",(0,r.jsx)(n.code,{children:"properties"}),"."]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n    "id": "FeatureId",\n    "type": "Feature",\n    "geometry": {\n        "type": "Point",\n        "coordinates": [\n            125.6,\n            10.1\n        ]\n    },\n    "properties": {\n        "name": "Dinagat Islands"\n    }\n}\n'})}),"\n",(0,r.jsx)(n.p,{children:"For the purposes of this microservice, GeoJSON structure is extended  with following properties :"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["An ",(0,r.jsx)(n.code,{children:"urn"})," (uniform resource name as unique identifier) generated by the microservice when creating a new reference and ",(0,r.jsx)(n.strong,{children:"expected only"})," when updating a reference."]}),"\n",(0,r.jsxs)(n.li,{children:["A required ",(0,r.jsx)(n.code,{children:"model"})," representing the name of the model defining the expected ",(0,r.jsx)(n.code,{children:"properties"})," field structure (and previously configured)."]}),"\n",(0,r.jsxs)(n.li,{children:["A required ",(0,r.jsx)(n.code,{children:"entityType"})," defining the reference business type."]}),"\n",(0,r.jsxs)(n.li,{children:["An optional ",(0,r.jsx)(n.code,{children:"files"})," property with a fixed structure that allows to store or reference physical data (service delegated to another microservice called ",(0,r.jsx)(n.code,{children:"Storage Management"}),")."]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n    "id": "FeatureId",\n    "urn": "UniqueFeatureId",\n    "model": "RelatedModelName",\n    "entityType": "DATA",\n    "type": "Feature",\n    "geometry": {\n        "type": "Point",\n        "coordinates": [\n            125.6,\n            10.1\n        ]\n    },\n    "properties": {\n        "name": "Dinagat Islands"\n    },\n    "files": [\n        {\n            "locations": [\n                {\n                    "storage": "DISK",\n                    "url": "file://home/user/regards/file.zip"\n                }\n            ],\n            "attributes": {\n                "dataType": "RAWDATA",\n                "mimeType": "application/zip",\n                "filename": "file.zip",\n                "filesize": "8013",\n                "algorithm": "MD5",\n                "checksum": "4e188bd8a6288164c25c3728ce394927"\n            }\n        }\n    ]\n}\n'})}),"\n",(0,r.jsx)("a",{name:"payloadppt"}),"\n",(0,r.jsx)(n.h3,{id:"payload-detailed-properties",children:"Payload detailed properties"}),"\n",(0,r.jsx)(n.h4,{id:"feature",children:"Feature"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{style:{textAlign:"center"},children:"Path"}),(0,r.jsx)(n.th,{style:{textAlign:"center"},children:"Type"}),(0,r.jsx)(n.th,{style:{textAlign:"center"},children:"Description"}),(0,r.jsx)(n.th,{style:{textAlign:"center"},children:"Optional"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{style:{textAlign:"center"},children:"id"}),(0,r.jsx)(n.td,{style:{textAlign:"center"},children:(0,r.jsx)(n.code,{children:"String"})}),(0,r.jsx)(n.td,{style:{textAlign:"center"},children:"Id from provider"}),(0,r.jsx)(n.td,{style:{textAlign:"center"}})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{style:{textAlign:"center"},children:"urn"}),(0,r.jsx)(n.td,{style:{textAlign:"center"},children:(0,r.jsx)(n.code,{children:"String"})}),(0,r.jsx)(n.td,{style:{textAlign:"center"},children:"Unique feature identifer based on provider identifier with TEST:REQUEST:2342"}),(0,r.jsx)(n.td,{style:{textAlign:"center"}})]})]})]}),"\n",(0,r.jsx)(n.admonition,{type:"danger",children:(0,r.jsx)(n.p,{children:"Urn is only expected in update and deletion requests!"})}),"\n",(0,r.jsx)(n.h4,{id:"files",children:"Files"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{style:{textAlign:"center"},children:"Path"}),(0,r.jsx)(n.th,{style:{textAlign:"center"},children:"Type"}),(0,r.jsx)(n.th,{style:{textAlign:"center"},children:"Description"}),(0,r.jsx)(n.th,{style:{textAlign:"center"},children:"Optional"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{style:{textAlign:"center"},children:"locations[].storage"}),(0,r.jsx)(n.td,{style:{textAlign:"center"},children:(0,r.jsx)(n.code,{children:"String"})}),(0,r.jsx)(n.td,{style:{textAlign:"center"},children:"Storage"}),(0,r.jsx)(n.td,{style:{textAlign:"center"},children:"true"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{style:{textAlign:"center"},children:"locations[].url"}),(0,r.jsx)(n.td,{style:{textAlign:"center"},children:(0,r.jsx)(n.code,{children:"String"})}),(0,r.jsx)(n.td,{style:{textAlign:"center"},children:"Url location"}),(0,r.jsx)(n.td,{style:{textAlign:"center"}})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{style:{textAlign:"center"},children:"attributes.dataType"}),(0,r.jsx)(n.td,{style:{textAlign:"center"},children:(0,r.jsx)(n.code,{children:"String"})}),(0,r.jsx)(n.td,{style:{textAlign:"center"},children:"RAWDATA, QUICKLOOK_SD, QUICKLOOK_MD, QUICKLOOK_HD, DOCUMENT, THUMBNAIL, DESCRIPTION"}),(0,r.jsx)(n.td,{style:{textAlign:"center"}})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{style:{textAlign:"center"},children:"attributes.mimeType"}),(0,r.jsx)(n.td,{style:{textAlign:"center"},children:(0,r.jsx)(n.code,{children:"String"})}),(0,r.jsx)(n.td,{style:{textAlign:"center"},children:"MIME type"}),(0,r.jsx)(n.td,{style:{textAlign:"center"}})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{style:{textAlign:"center"},children:"attributes.filename"}),(0,r.jsx)(n.td,{style:{textAlign:"center"},children:(0,r.jsx)(n.code,{children:"String"})}),(0,r.jsx)(n.td,{style:{textAlign:"center"},children:"Filename"}),(0,r.jsx)(n.td,{style:{textAlign:"center"}})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{style:{textAlign:"center"},children:"attributes.filesize"}),(0,r.jsx)(n.td,{style:{textAlign:"center"},children:(0,r.jsx)(n.code,{children:"Number"})}),(0,r.jsx)(n.td,{style:{textAlign:"center"},children:"File size"}),(0,r.jsx)(n.td,{style:{textAlign:"center"},children:"true"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{style:{textAlign:"center"},children:"attributes.algorithm"}),(0,r.jsx)(n.td,{style:{textAlign:"center"},children:(0,r.jsx)(n.code,{children:"String"})}),(0,r.jsx)(n.td,{style:{textAlign:"center"},children:"Checksum algorithm"}),(0,r.jsx)(n.td,{style:{textAlign:"center"},children:"true"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{style:{textAlign:"center"},children:"attributes.checksum"}),(0,r.jsx)(n.td,{style:{textAlign:"center"},children:(0,r.jsx)(n.code,{children:"String"})}),(0,r.jsx)(n.td,{style:{textAlign:"center"},children:"Checksum"}),(0,r.jsx)(n.td,{style:{textAlign:"center"},children:"true"})]})]})]}),"\n",(0,r.jsx)(n.admonition,{type:"danger",children:(0,r.jsxs)(n.p,{children:["Algorithm & cheksum are required if data have to be stored by ",(0,r.jsx)(n.code,{children:"Storage Management"}),"."]})}),"\n",(0,r.jsx)("a",{name:"metadatappt"}),"\n",(0,r.jsx)(n.h2,{id:"request-metadata",children:"Request metadata"}),"\n",(0,r.jsx)(n.p,{children:"As the payload, regardless of the API used, metadata is often associated with a request."}),"\n",(0,r.jsx)(n.h3,{id:"metadata-detailed-properties",children:"Metadata detailed properties"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{style:{textAlign:"center"},children:"Path"}),(0,r.jsx)(n.th,{style:{textAlign:"center"},children:"Type"}),(0,r.jsx)(n.th,{style:{textAlign:"center"},children:"Description"}),(0,r.jsx)(n.th,{style:{textAlign:"center"},children:"Optional"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{style:{textAlign:"center"},children:"metadata.override"}),(0,r.jsx)(n.td,{style:{textAlign:"center"},children:(0,r.jsx)(n.code,{children:"Boolean"})}),(0,r.jsx)(n.td,{style:{textAlign:"center"},children:"Indicate wether the previous version should be deleted"}),(0,r.jsx)(n.td,{style:{textAlign:"center"},children:"true"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{style:{textAlign:"center"},children:"metadata.session"}),(0,r.jsx)(n.td,{style:{textAlign:"center"},children:(0,r.jsx)(n.code,{children:"String"})}),(0,r.jsx)(n.td,{style:{textAlign:"center"},children:"Arbitrary session name to classify data for human operators"}),(0,r.jsx)(n.td,{style:{textAlign:"center"}})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{style:{textAlign:"center"},children:"metadata.sessionOwner"}),(0,r.jsx)(n.td,{style:{textAlign:"center"},children:(0,r.jsx)(n.code,{children:"String"})}),(0,r.jsx)(n.td,{style:{textAlign:"center"},children:"Arbitrary session owner to classify data for human operators"}),(0,r.jsx)(n.td,{style:{textAlign:"center"}})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{style:{textAlign:"center"},children:"metadata.storages"}),(0,r.jsx)(n.td,{style:{textAlign:"center"},children:(0,r.jsx)(n.code,{children:"Array"})}),(0,r.jsx)(n.td,{style:{textAlign:"center"},children:"Target storages if there are files to store (may be empty!)"}),(0,r.jsx)(n.td,{style:{textAlign:"center"},children:"true"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{style:{textAlign:"center"},children:"metadata.storages[].pluginBusinessId"}),(0,r.jsx)(n.td,{style:{textAlign:"center"},children:(0,r.jsx)(n.code,{children:"String"})}),(0,r.jsxs)(n.td,{style:{textAlign:"center"},children:["Storage plugin identifier (previously configured in ",(0,r.jsx)(n.code,{children:"Storage Management"})]}),(0,r.jsx)(n.td,{style:{textAlign:"center"}})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{style:{textAlign:"center"},children:"metadata.storages[].targetTypes"}),(0,r.jsx)(n.td,{style:{textAlign:"center"},children:(0,r.jsx)(n.code,{children:"Array"})}),(0,r.jsx)(n.td,{style:{textAlign:"center"},children:"List of data object types accepted by this storage location"}),(0,r.jsx)(n.td,{style:{textAlign:"center"},children:"true"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{style:{textAlign:"center"},children:"metadata.storages[].storePath"}),(0,r.jsx)(n.td,{style:{textAlign:"center"},children:(0,r.jsx)(n.code,{children:"String"})}),(0,r.jsx)(n.td,{style:{textAlign:"center"},children:"Directory in which to store the file"}),(0,r.jsx)(n.td,{style:{textAlign:"center"},children:"true"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{style:{textAlign:"center"},children:"metadata.priority"}),(0,r.jsx)(n.td,{style:{textAlign:"center"},children:(0,r.jsx)(n.code,{children:"String"})}),(0,r.jsx)(n.td,{style:{textAlign:"center"},children:"HIGH, NORMAL, LOW"}),(0,r.jsx)(n.td,{style:{textAlign:"center"}})]})]})]}),"\n",(0,r.jsx)(n.admonition,{type:"danger",children:(0,r.jsx)(n.p,{children:"override should only be specified with Extraction or Creation requests."})}),"\n",(0,r.jsx)(n.h2,{id:"rest-api",children:"REST API"}),"\n",(0,r.jsx)(n.p,{children:"For creation and update requests, REST API is expected a GeoJSON collection extended with specific metadata."}),"\n",(0,r.jsx)(n.p,{children:"The structure is as follows :"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Required ",(0,r.jsx)(n.code,{children:"metadata"})," that apply to ",(0,r.jsx)(n.strong,{children:"all features"}),","]}),"\n",(0,r.jsxs)(n.li,{children:["A required ",(0,r.jsx)(n.code,{children:"type"})," with value ",(0,r.jsx)(n.code,{children:"FeatureCollection"}),","]}),"\n",(0,r.jsxs)(n.li,{children:["Required ",(0,r.jsx)(n.code,{children:"features"})," containing a set of ",(0,r.jsx)(n.a,{href:"#payloadppt",children:"GeoJson feature"}),"."]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Example of feature creation collection:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n    "metadata": {\n        "session": "session",\n        "sessionOwner": "owner",\n        "storages": [\n            {\n                "pluginBusinessId": "disk"\n            }\n        ],\n        "priority": "NORMAL"\n    },\n    "requestOwner": "owner",\n    "features": [{}, {}, {}],\n    "type": "FeatureCollection"\n}\n'})}),"\n",(0,r.jsx)(n.p,{children:"Example of feature update collection:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n    "metadata": {\n        "storages": [\n            {\n                "pluginBusinessId": "disk"\n            }\n        ],\n        "priority": "NORMAL"\n    },\n    "features": [{}, {}, {}],\n    "type": "FeatureCollection"\n}\n'})}),"\n",(0,r.jsx)(n.admonition,{type:"danger",children:(0,r.jsx)(n.p,{children:"Session & session owner are not supported in update metadata!"})}),"\n",(0,r.jsx)(n.h3,{id:"feature-creation-request-example",children:"Feature Creation request example"}),"\n",(0,r.jsx)(n.h3,{id:"request",children:"Request"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"URL"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"/features"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"URL template"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"/features"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Method"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"POST"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Headers"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"Authorization:Bearer{token}"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.code,{children:"Content-Type:application/geo+json;charset=UTF-8"})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Data params"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "requestOwner" : "test",\n  "metadata" : {\n    "sessionOwner" : "owner",\n    "session" : "session",\n    "storages" : [ {\n      "pluginBusinessId" : "disk"\n    } ],\n    "priority" : "NORMAL"\n  },\n  "features" : [ {\n    "urn" : null,\n    "entityType" : "DATA",\n    "model" : "FEATURE01",\n    "history" : {\n      "createdBy" : "owner",\n      "updatedBy" : null,\n      "deletedBy" : null\n    },\n    "files" : [ {\n      "locations" : [ {\n        "storage" : null,\n        "url" : "http://www.test.com/filename.xml"\n      } ],\n      "attributes" : {\n        "dataType" : "RAWDATA",\n        "mimeType" : "application/xml",\n        "filename" : "filename",\n        "filesize" : 100,\n        "algorithm" : "MD5",\n        "checksum" : "checksum"\n      }\n    } ],\n    "last" : false,\n    "id" : "MyId",\n    "geometry" : {\n      "coordinates" : [ 10.0, 20.0 ],\n      "type" : "Point",\n      "bbox" : null,\n      "crs" : null\n    },\n    "normalizedGeometry" : null,\n    "properties" : {\n      "data_type" : "TYPE01",\n      "file_characterization" : {\n        "valid" : true\n      }\n    },\n    "type" : "Feature"\n  } ],\n  "type" : "FeatureCollection"\n}\n'})}),"\n",(0,r.jsx)(n.h3,{id:"response",children:"Response"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Code:"})," 201 Created"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Headers:"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"X-Content-Type-Options:nosniff"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.code,{children:"X-XSS-Protection:1; mode=block"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.code,{children:"Cache-Control:no-cache, no-store, max-age=0, must-revalidate"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.code,{children:"Pragma:no-cache"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.code,{children:"Expires:0"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.code,{children:"X-Frame-Options:DENY"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.code,{children:"Access-Control-Allow-Origin:*"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.code,{children:"Access-Control-Allow-Methods:POST, PUT, GET, OPTIONS, DELETE"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.code,{children:"Access-Control-Allow-Headers:authorization, content-type, scope"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.code,{children:"Access-Control-Max-Age:3600"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.code,{children:"Content-Type:application/hal+json"})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Content:"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'    \n{\n  "granted" : {\n    "MyId" : "d1b873d8-caeb-4380-b822-8728ec97ee73"\n  },\n  "denied" : {\n    "empty" : true\n  },\n  "messages" : [ ]\n}\n'})}),"\n",(0,r.jsx)(n.p,{children:"API return maps of granted and denied requests :"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Granted property maps feature id to its related request id and allows the producer to optionnaly monitor request lifecycle listening to request event."}),"\n",(0,r.jsx)(n.li,{children:"Denied property maps feature id to a list of rejection causes."}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"feature-patch-request-example",children:"Feature Patch request example"}),"\n",(0,r.jsx)(n.h3,{id:"request-1",children:"Request"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"URL"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"/features"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"URL template"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"/features"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Method"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"PATCH"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Headers"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"Authorization:Bearer{token}"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.code,{children:"Content-Type:application/geo+json;charset=UTF-8"})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Data params"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "requestOwner" : "test",\n  "metadata" : {\n    "storages" : [ ],\n    "priority" : "NORMAL"\n  },\n  "features" : [ {\n    "urn" : "URN:FEATURE:DATA:tenant:ca4015e5-9c59-49ff-b35e-f30c6929f402:V1",\n    "entityType" : "DATA",\n    "model" : "FEATURE01",\n    "history" : {\n      "createdBy" : "owner",\n      "updatedBy" : null,\n      "deletedBy" : null\n    },\n    "files" : [ ],\n    "last" : false,\n    "id" : "MyId",\n    "geometry" : null,\n    "normalizedGeometry" : null,\n    "properties" : {\n      "file_characterization" : {\n        "invalidation_date" : "2021-09-16T20:06:25.906Z",\n        "valid" : false\n      }\n    },\n    "type" : "Feature"\n  } ],\n  "type" : "FeatureCollection"\n}\n'})}),"\n",(0,r.jsx)(n.h3,{id:"response-1",children:"Response"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Code:"})," 201 Created"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Headers:"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"X-Content-Type-Options:nosniff"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.code,{children:"X-XSS-Protection:1; mode=block"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.code,{children:"Cache-Control:no-cache, no-store, max-age=0, must-revalidate"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.code,{children:"Pragma:no-cache"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.code,{children:"Expires:0"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.code,{children:"X-Frame-Options:DENY"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.code,{children:"Access-Control-Allow-Origin:*"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.code,{children:"Access-Control-Allow-Methods:POST, PUT, GET, OPTIONS, DELETE"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.code,{children:"Access-Control-Allow-Headers:authorization, content-type, scope"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.code,{children:"Access-Control-Max-Age:3600"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.code,{children:"Content-Type:application/hal+json"})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Content:"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'    \n{\n  "granted" : {\n    "URN:FEATURE:DATA:tenant:ca4015e5-9c59-49ff-b35e-f30c6929f402:V1" : "65726bf9-a039-4f34-a6d2-620a601ace64"\n  },\n  "denied" : {\n    "empty" : true\n  },\n  "messages" : [ ]\n}\n'})}),"\n",(0,r.jsx)(n.p,{children:"API return maps of granted and denied requests :"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Granted property maps feature urn to its related request id and allows the producer to optionnaly monitor request lifecycle listening to request event."}),"\n",(0,r.jsx)(n.li,{children:"Denied property maps feature urn to a list of rejection causes."}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},84709:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/architectural_concepts_fem-43efa101a2a882b3944d168ebc32f897.png"},28453:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>d});var r=t(96540);const s={},i=r.createContext(s);function l(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);