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
<feed xmlns="http://www.w3.org/2005/Atom" xmlns:gml="http://www.opengis.net/gml" xmlns:opensearch="http://a9.com/-/spec/opensearch/1.1/" xmlns:regards="http://regards.com/-/spec/3.0/">
  <title>search</title>
  <link rel="alternate" type="application/opensearchdescription+xml" href="http://localhost:8080/engines/opensearch/dataobjects/search/opensearchdescription.xml?page=2&amp;maxRecords=3"/>
  <author>
    <name>Plop</name>
    <email>regards@c-s.fr</email>
  </author>
  <subtitle type="text">desc</subtitle>
  <id>2753b1c3-eb19-44c0-878e-ede10f6e477f</id>
  <updated>2021-09-16T00:00:00Z</updated>
  <opensearch:itemsPerPage>3</opensearch:itemsPerPage>
  <opensearch:totalResults>11</opensearch:totalResults>
  <opensearch:startIndex>4</opensearch:startIndex>
  <opensearch:Query role="results" startPage="2"/>
  <opensearch:link rel="search" type="application/opensearchdescription+xml" href="http://localhost:8080/engines/opensearch/dataobjects/search/opensearchdescription.xml?page=2&amp;maxRecords=3"/>
  <entry>
    <title>Venus</title>
    <link rel="alternate" type="application/atom+xml" href="http://localhost:8080/engines/opensearch/dataobjects/URN:AIP:DATA:opensearch:00000000-0000-0000-0000-001032810776:V1?token=eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJkZWZhdWx0X3VzZXJAcmVnYXJkcy5mciIsInJvbGUiOiJST0xFX0RFRkFVTFQiLCJ0ZW5hbnQiOiJvcGVuc2VhcmNoIiwiZW1haWwiOiJkZWZhdWx0X3VzZXJAcmVnYXJkcy5mciIsImV4cCI6MTYzMTgyNDkyOH0.LpX_560FZeiF3XxxwxyGl0uh9e6tFqRNjXEA5PWfbxT42LFgz0LMOjwYkq4tjaIyutAySkULXRh2_TgQWWdKiA" title="ATOM link for URN:AIP:DATA:opensearch:00000000-0000-0000-0000-001032810776:V1"/>
    <id>URN:AIP:DATA:opensearch:00000000-0000-0000-0000-001032810776:V1</id>
    <updated>1970-01-19T21:16:57Z</updated>
    <gml:ValidTime>
      <gml:TimePeriod>
        <gml:beginPosition>"2021-09-16T18:41:50.746Z"</gml:beginPosition>
        <gml:endPosition>"2021-09-16T18:41:50.746Z"</gml:endPosition>
      </gml:TimePeriod>
    </gml:ValidTime>
    <regards:label>"Venus"</regards:label>
    <regards:ipId>"URN:AIP:DATA:opensearch:00000000-0000-0000-0000-001032810776:V1"</regards:ipId>
    <regards:sipId>"Venus"</regards:sipId>
    <regards:tags>["URN:AIP:DATASET:opensearch:dedb7b3a-5adb-46ae-b76f-4849d2e3cd1b:V1"]</regards:tags>
    <regards:type>"Feature"</regards:type>
    <regards:planet_type>"Telluric"</regards:planet_type>
    <regards:diameter>12104</regards:diameter>
    <regards:TimePeriod>
      <regards:stopDate>"2024-09-16T18:41:50.747Z"</regards:stopDate>
      <regards:startDate>"2021-09-16T18:41:50.746Z"</regards:startDate>
    </regards:TimePeriod>
    <regards:planet>"Venus"</regards:planet>
    <regards:origine>{"name":"CNES","link":"http://cnes.fr","contacts":[{"name":"JeanPaul","locations":[{"institut":"CNES-001","code":1}]},{"name":"Bernadette","locations":[{"institut":"CNES-156","code":156}]}]}</regards:origine>
    <regards:sun_distance>108000000</regards:sun_distance>
    <regards:params>["near","sun"]</regards:params>
  </entry>
  <entry>
    <title>Neptune</title>
    <link rel="alternate" type="application/atom+xml" href="http://localhost:8080/engines/opensearch/dataobjects/URN:AIP:DATA:opensearch:00000000-0000-0000-0000-001889811706:V1?token=eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJkZWZhdWx0X3VzZXJAcmVnYXJkcy5mciIsInJvbGUiOiJST0xFX0RFRkFVTFQiLCJ0ZW5hbnQiOiJvcGVuc2VhcmNoIiwiZW1haWwiOiJkZWZhdWx0X3VzZXJAcmVnYXJkcy5mciIsImV4cCI6MTYzMTgyNDkyOH0.LpX_560FZeiF3XxxwxyGl0uh9e6tFqRNjXEA5PWfbxT42LFgz0LMOjwYkq4tjaIyutAySkULXRh2_TgQWWdKiA" title="ATOM link for URN:AIP:DATA:opensearch:00000000-0000-0000-0000-001889811706:V1"/>
    <id>URN:AIP:DATA:opensearch:00000000-0000-0000-0000-001889811706:V1</id>
    <updated>1970-01-19T21:16:57Z</updated>
    <gml:ValidTime>
      <gml:TimePeriod>
        <gml:beginPosition>"2021-09-16T18:41:50.746Z"</gml:beginPosition>
        <gml:endPosition>"2021-09-16T18:41:50.746Z"</gml:endPosition>
      </gml:TimePeriod>
    </gml:ValidTime>
    <regards:label>"Neptune"</regards:label>
    <regards:ipId>"URN:AIP:DATA:opensearch:00000000-0000-0000-0000-001889811706:V1"</regards:ipId>
    <regards:sipId>"Neptune"</regards:sipId>
    <regards:tags>["URN:AIP:DATASET:opensearch:dedb7b3a-5adb-46ae-b76f-4849d2e3cd1b:V1"]</regards:tags>
    <regards:type>"Feature"</regards:type>
    <regards:planet_type>"Ice giant"</regards:planet_type>
    <regards:diameter>49500</regards:diameter>
    <regards:TimePeriod>
      <regards:stopDate>"2024-09-16T18:41:50.747Z"</regards:stopDate>
      <regards:startDate>"2021-09-16T18:41:50.746Z"</regards:startDate>
    </regards:TimePeriod>
    <regards:planet>"Neptune"</regards:planet>
    <regards:origine>{"name":"CNES","link":"http://cnes.fr","contacts":[{"name":"JeanPaul","locations":[{"institut":"CNES-001","code":1}]},{"name":"Bernadette","locations":[{"institut":"CNES-156","code":156}]}]}</regards:origine>
    <regards:sun_distance>4489435980</regards:sun_distance>
  </entry>
  <entry>
    <title>Kepler 90b</title>
    <link rel="alternate" type="application/atom+xml" href="http://localhost:8080/engines/opensearch/dataobjects/URN:AIP:DATA:opensearch:00000000-0000-0000-0000-001937922094:V1?token=eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJkZWZhdWx0X3VzZXJAcmVnYXJkcy5mciIsInJvbGUiOiJST0xFX0RFRkFVTFQiLCJ0ZW5hbnQiOiJvcGVuc2VhcmNoIiwiZW1haWwiOiJkZWZhdWx0X3VzZXJAcmVnYXJkcy5mciIsImV4cCI6MTYzMTgyNDkyOH0.LpX_560FZeiF3XxxwxyGl0uh9e6tFqRNjXEA5PWfbxT42LFgz0LMOjwYkq4tjaIyutAySkULXRh2_TgQWWdKiA" title="ATOM link for URN:AIP:DATA:opensearch:00000000-0000-0000-0000-001937922094:V1"/>
    <id>URN:AIP:DATA:opensearch:00000000-0000-0000-0000-001937922094:V1</id>
    <updated>1970-01-19T21:16:57Z</updated>
    <gml:ValidTime>
      <gml:TimePeriod>
        <gml:beginPosition>"2021-09-16T18:41:50.746Z"</gml:beginPosition>
        <gml:endPosition>"2021-09-16T18:41:50.746Z"</gml:endPosition>
      </gml:TimePeriod>
    </gml:ValidTime>
    <regards:label>"Kepler 90b"</regards:label>
    <regards:ipId>"URN:AIP:DATA:opensearch:00000000-0000-0000-0000-001937922094:V1"</regards:ipId>
    <regards:sipId>"Kepler 90b"</regards:sipId>
    <regards:tags>[]</regards:tags>
    <regards:type>"Feature"</regards:type>
    <regards:planet_type>"Telluric"</regards:planet_type>
    <regards:diameter>1000</regards:diameter>
    <regards:TimePeriod>
      <regards:stopDate>"2024-09-16T18:41:50.747Z"</regards:stopDate>
      <regards:startDate>"2021-09-16T18:41:50.746Z"</regards:startDate>
    </regards:TimePeriod>
    <regards:planet>"Kepler 90b"</regards:planet>
    <regards:origine>{"name":"CNES","link":"http://cnes.fr","contacts":[{"name":"JeanPaul","locations":[{"institut":"CNES-001","code":1}]},{"name":"Bernadette","locations":[{"institut":"CNES-156","code":156}]}]}</regards:origine>
    <regards:sun_distance>50000000</regards:sun_distance>
  </entry>
</feed>

```
