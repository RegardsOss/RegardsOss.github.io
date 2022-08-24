### Response

* **Code:** 200 OK

**Headers:**

`X-Content-Type-Options:nosniff`  
`X-XSS-Protection:1; mode=block`  
`Cache-Control:no-cache, no-store, max-age=0, must-revalidate`  
`Pragma:no-cache`  
`Expires:0`  
`X-Frame-Options:DENY`  
`Access-Control-Allow-Origin:*`  
`Access-Control-Allow-Methods:POST, PUT, GET, OPTIONS, DELETE`  
`Access-Control-Allow-Headers:authorization, content-type, scope`  
`Access-Control-Max-Age:3600`  
`Content-Type:application/atom+xml;charset=UTF-8`  

**Content:**

```json
    
<?xml version="1.0" encoding="UTF-8"?>
<feed xmlns="http://www.w3.org/2005/Atom" xmlns:opensearch="http://a9.com/-/spec/opensearch/1.1/" xmlns:regards="http://regards.com/-/spec/3.0/">
  <title>search</title>
  <link rel="alternate" type="application/opensearchdescription+xml" href="http://localhost:8080/engines/opensearch/collections/search/opensearchdescription.xml?q=properties.star:Sun"/>
  <author>
    <name>Plop</name>
    <email>regards@c-s.fr</email>
  </author>
  <subtitle type="text">desc</subtitle>
  <id>c33039d9-6f23-4b50-8aac-c9d27fdcd962</id>
  <updated>2021-09-16T00:00:00Z</updated>
  <opensearch:itemsPerPage>20</opensearch:itemsPerPage>
  <opensearch:totalResults>1</opensearch:totalResults>
  <opensearch:startIndex>1</opensearch:startIndex>
  <opensearch:Query role="results" searchTerms="properties.star:Sun" startPage="1"/>
  <opensearch:link rel="search" type="application/opensearchdescription+xml" href="http://localhost:8080/engines/opensearch/collections/search/opensearchdescription.xml?q=properties.star:Sun"/>
  <entry>
    <title>Sun</title>
    <link rel="alternate" type="application/atom+xml" href="http://localhost:8080/engines/opensearch/collections/URN:AIP:COLLECTION:opensearch:4e37ac98-92e2-43ff-a7f7-0405c035e997:V1?token=eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJkZWZhdWx0X3VzZXJAcmVnYXJkcy5mciIsInJvbGUiOiJST0xFX0RFRkFVTFQiLCJ0ZW5hbnQiOiJvcGVuc2VhcmNoIiwiZW1haWwiOiJkZWZhdWx0X3VzZXJAcmVnYXJkcy5mciIsImV4cCI6MTYzMTgyNDkzMn0.qf8by7Em96t1jAtcxtkCFbNcvgMj9cy0POnJlgjo2rTqGZFSzRBo87QIghqSVINIhaOsRohNGUS-IPkj4Q59MQ" title="ATOM link for URN:AIP:COLLECTION:opensearch:4e37ac98-92e2-43ff-a7f7-0405c035e997:V1"/>
    <id>URN:AIP:COLLECTION:opensearch:4e37ac98-92e2-43ff-a7f7-0405c035e997:V1</id>
    <regards:label>"Sun"</regards:label>
    <regards:ipId>"URN:AIP:COLLECTION:opensearch:4e37ac98-92e2-43ff-a7f7-0405c035e997:V1"</regards:ipId>
    <regards:sipId>"Sun"</regards:sipId>
    <regards:tags>[]</regards:tags>
    <regards:type>"Feature"</regards:type>
    <regards:star>"Sun"</regards:star>
    <regards:abstract>"The Sun is the star at the center of the Solar System."</regards:abstract>
  </entry>
</feed>

```
