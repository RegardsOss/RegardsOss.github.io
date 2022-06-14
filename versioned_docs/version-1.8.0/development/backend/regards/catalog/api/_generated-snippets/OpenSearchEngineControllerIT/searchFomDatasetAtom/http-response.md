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
<feed xmlns="http://www.w3.org/2005/Atom" xmlns:georss="http://www.georss.org/georss" xmlns:gml="http://www.opengis.net/gml" xmlns:media="http://search.yahoo.com/mrss/" xmlns:opensearch="http://a9.com/-/spec/opensearch/1.1/" xmlns:regards="http://regards.com/-/spec/3.0/">
  <title>search</title>
  <link rel="alternate" type="application/opensearchdescription+xml" href="http://localhost:8080/engines/opensearch/datasets/URN:AIP:DATASET:opensearch:33a93923-041a-4cb7-8b6e-0e8adb1d7797:V1/dataobjects/search/opensearchdescription.xml?page=1&amp;maxRecords=100"/>
  <author>
    <name>Plop</name>
    <email>regards@c-s.fr</email>
  </author>
  <subtitle type="text">desc</subtitle>
  <id>e1ad302e-1761-40ab-816e-2c4ab69e260f</id>
  <updated>2021-09-16T00:00:00Z</updated>
  <opensearch:itemsPerPage>100</opensearch:itemsPerPage>
  <opensearch:totalResults>8</opensearch:totalResults>
  <opensearch:startIndex>1</opensearch:startIndex>
  <opensearch:Query role="results" startPage="1"/>
  <opensearch:link rel="search" type="application/opensearchdescription+xml" href="http://localhost:8080/engines/opensearch/datasets/URN:AIP:DATASET:opensearch:33a93923-041a-4cb7-8b6e-0e8adb1d7797:V1/dataobjects/search/opensearchdescription.xml?page=1&amp;maxRecords=100"/>
  <entry>
    <title>Mercury</title>
    <link rel="icon" href="http://regards/le_quicklook_hd.jpg?token=eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJkZWZhdWx0X3VzZXJAcmVnYXJkcy5mciIsInJvbGUiOiJST0xFX0RFRkFVTFQiLCJ0ZW5hbnQiOiJvcGVuc2VhcmNoIiwiZW1haWwiOiJkZWZhdWx0X3VzZXJAcmVnYXJkcy5mciIsImV4cCI6MTYzMTgyNDkyNX0.LOE9v8C7iULsfGR8cm4z1lCHVsO5IytSmOPVkteuC0p8yHyAocP4hMJWL_M23FaSdCJJLpGX3j5nJckT9YWn_g"/>
    <link rel="icon" href="http://regards/le_quicklook_sd.jpg?token=eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJkZWZhdWx0X3VzZXJAcmVnYXJkcy5mciIsInJvbGUiOiJST0xFX0RFRkFVTFQiLCJ0ZW5hbnQiOiJvcGVuc2VhcmNoIiwiZW1haWwiOiJkZWZhdWx0X3VzZXJAcmVnYXJkcy5mciIsImV4cCI6MTYzMTgyNDkyNX0.LOE9v8C7iULsfGR8cm4z1lCHVsO5IytSmOPVkteuC0p8yHyAocP4hMJWL_M23FaSdCJJLpGX3j5nJckT9YWn_g"/>
    <link rel="icon" href="http://regards/le_quicklook_md.jpg?token=eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJkZWZhdWx0X3VzZXJAcmVnYXJkcy5mciIsInJvbGUiOiJST0xFX0RFRkFVTFQiLCJ0ZW5hbnQiOiJvcGVuc2VhcmNoIiwiZW1haWwiOiJkZWZhdWx0X3VzZXJAcmVnYXJkcy5mciIsImV4cCI6MTYzMTgyNDkyNX0.LOE9v8C7iULsfGR8cm4z1lCHVsO5IytSmOPVkteuC0p8yHyAocP4hMJWL_M23FaSdCJJLpGX3j5nJckT9YWn_g"/>
    <link rel="enclosure" href="http://regards/test.nc?token=eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJkZWZhdWx0X3VzZXJAcmVnYXJkcy5mciIsInJvbGUiOiJST0xFX0RFRkFVTFQiLCJ0ZW5hbnQiOiJvcGVuc2VhcmNoIiwiZW1haWwiOiJkZWZhdWx0X3VzZXJAcmVnYXJkcy5mciIsImV4cCI6MTYzMTgyNDkyNX0.LOE9v8C7iULsfGR8cm4z1lCHVsO5IytSmOPVkteuC0p8yHyAocP4hMJWL_M23FaSdCJJLpGX3j5nJckT9YWn_g"/>
    <link rel="icon" href="http://regards/thumbnail.png?token=eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJkZWZhdWx0X3VzZXJAcmVnYXJkcy5mciIsInJvbGUiOiJST0xFX0RFRkFVTFQiLCJ0ZW5hbnQiOiJvcGVuc2VhcmNoIiwiZW1haWwiOiJkZWZhdWx0X3VzZXJAcmVnYXJkcy5mciIsImV4cCI6MTYzMTgyNDkyNX0.LOE9v8C7iULsfGR8cm4z1lCHVsO5IytSmOPVkteuC0p8yHyAocP4hMJWL_M23FaSdCJJLpGX3j5nJckT9YWn_g"/>
    <link rel="alternate" type="application/atom+xml" href="http://localhost:8080/engines/opensearch/dataobjects/URN:AIP:DATA:opensearch:00000000-0000-0000-0000-000770507057:V1?token=eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJkZWZhdWx0X3VzZXJAcmVnYXJkcy5mciIsInJvbGUiOiJST0xFX0RFRkFVTFQiLCJ0ZW5hbnQiOiJvcGVuc2VhcmNoIiwiZW1haWwiOiJkZWZhdWx0X3VzZXJAcmVnYXJkcy5mciIsImV4cCI6MTYzMTgyNDkyNX0.LOE9v8C7iULsfGR8cm4z1lCHVsO5IytSmOPVkteuC0p8yHyAocP4hMJWL_M23FaSdCJJLpGX3j5nJckT9YWn_g" title="ATOM link for URN:AIP:DATA:opensearch:00000000-0000-0000-0000-000770507057:V1"/>
    <id>URN:AIP:DATA:opensearch:00000000-0000-0000-0000-000770507057:V1</id>
    <updated>1970-01-19T21:16:57Z</updated>
    <gml:ValidTime>
      <gml:TimePeriod>
        <gml:beginPosition>"2021-09-16T18:41:50.746Z"</gml:beginPosition>
        <gml:endPosition>"2021-09-16T18:41:50.746Z"</gml:endPosition>
      </gml:TimePeriod>
    </gml:ValidTime>
    <georss:where>
      <gml:Polygon>
        <gml:exterior>
          <gml:LinearRing>
            <gml:posList>10.0 10.0 30.0 10.0 30.0 30.0 10.0 30.0 10.0 10.0</gml:posList>
          </gml:LinearRing>
        </gml:exterior>
      </gml:Polygon>
    </georss:where>
    <media:group>
      <media:content medium="image" height="100" type="application/jpg" width="100" url="http://regards/le_quicklook_sd.jpg?token=eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJkZWZhdWx0X3VzZXJAcmVnYXJkcy5mciIsInJvbGUiOiJST0xFX0RFRkFVTFQiLCJ0ZW5hbnQiOiJvcGVuc2VhcmNoIiwiZW1haWwiOiJkZWZhdWx0X3VzZXJAcmVnYXJkcy5mciIsImV4cCI6MTYzMTgyNDkyNX0.LOE9v8C7iULsfGR8cm4z1lCHVsO5IytSmOPVkteuC0p8yHyAocP4hMJWL_M23FaSdCJJLpGX3j5nJckT9YWn_g">
        <media:category scheme="http://www.opengis.net/spec/EOMPOM/1.0">QUICKLOOK</media:category>
      </media:content>
      <media:content medium="image" height="250" type="application/png" width="250" url="http://regards/thumbnail.png?token=eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJkZWZhdWx0X3VzZXJAcmVnYXJkcy5mciIsInJvbGUiOiJST0xFX0RFRkFVTFQiLCJ0ZW5hbnQiOiJvcGVuc2VhcmNoIiwiZW1haWwiOiJkZWZhdWx0X3VzZXJAcmVnYXJkcy5mciIsImV4cCI6MTYzMTgyNDkyNX0.LOE9v8C7iULsfGR8cm4z1lCHVsO5IytSmOPVkteuC0p8yHyAocP4hMJWL_M23FaSdCJJLpGX3j5nJckT9YWn_g">
        <media:category scheme="http://www.opengis.net/spec/EOMPOM/1.0">THUMBNAIL</media:category>
      </media:content>
    </media:group>
    <regards:label>"Mercury"</regards:label>
    <regards:ipId>"URN:AIP:DATA:opensearch:00000000-0000-0000-0000-000770507057:V1"</regards:ipId>
    <regards:sipId>"Mercury"</regards:sipId>
    <regards:tags>["URN:AIP:DATASET:opensearch:33a93923-041a-4cb7-8b6e-0e8adb1d7797:V1"]</regards:tags>
    <regards:type>"Feature"</regards:type>
    <regards:planet_type>"Telluric"</regards:planet_type>
    <regards:diameter>4878</regards:diameter>
    <regards:TimePeriod>
      <regards:stopDate>"2024-09-16T18:41:50.747Z"</regards:stopDate>
      <regards:startDate>"2021-09-16T18:41:50.746Z"</regards:startDate>
    </regards:TimePeriod>
    <regards:planet>"Mercury"</regards:planet>
    <regards:origine>{"name":"CNES","link":"http://cnes.fr","contacts":[{"name":"JeanPaul","locations":[{"institut":"CNES-001","code":1}]},{"name":"Bernadette","locations":[{"institut":"CNES-156","code":156}]}]}</regards:origine>
    <regards:sun_distance>58000000</regards:sun_distance>
  </entry>
  <entry>
    <title>Earth</title>
    <link rel="alternate" type="application/atom+xml" href="http://localhost:8080/engines/opensearch/dataobjects/URN:AIP:DATA:opensearch:00000000-0000-0000-0000-000827922584:V1?token=eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJkZWZhdWx0X3VzZXJAcmVnYXJkcy5mciIsInJvbGUiOiJST0xFX0RFRkFVTFQiLCJ0ZW5hbnQiOiJvcGVuc2VhcmNoIiwiZW1haWwiOiJkZWZhdWx0X3VzZXJAcmVnYXJkcy5mciIsImV4cCI6MTYzMTgyNDkyNX0.LOE9v8C7iULsfGR8cm4z1lCHVsO5IytSmOPVkteuC0p8yHyAocP4hMJWL_M23FaSdCJJLpGX3j5nJckT9YWn_g" title="ATOM link for URN:AIP:DATA:opensearch:00000000-0000-0000-0000-000827922584:V1"/>
    <id>URN:AIP:DATA:opensearch:00000000-0000-0000-0000-000827922584:V1</id>
    <updated>1970-01-19T21:16:57Z</updated>
    <gml:ValidTime>
      <gml:TimePeriod>
        <gml:beginPosition>"2021-09-16T18:41:50.746Z"</gml:beginPosition>
        <gml:endPosition>"2021-09-16T18:41:50.746Z"</gml:endPosition>
      </gml:TimePeriod>
    </gml:ValidTime>
    <regards:label>"Earth"</regards:label>
    <regards:ipId>"URN:AIP:DATA:opensearch:00000000-0000-0000-0000-000827922584:V1"</regards:ipId>
    <regards:sipId>"Earth"</regards:sipId>
    <regards:tags>["URN:AIP:DATASET:opensearch:33a93923-041a-4cb7-8b6e-0e8adb1d7797:V1"]</regards:tags>
    <regards:type>"Feature"</regards:type>
    <regards:planet_type>"Telluric"</regards:planet_type>
    <regards:diameter>12756</regards:diameter>
    <regards:TimePeriod>
      <regards:stopDate>"2024-09-16T18:41:50.747Z"</regards:stopDate>
      <regards:startDate>"2021-09-16T18:41:50.746Z"</regards:startDate>
    </regards:TimePeriod>
    <regards:planet>"Earth"</regards:planet>
    <regards:origine>{"name":"CNES","link":"http://cnes.fr","contacts":[{"name":"JeanPaul","locations":[{"institut":"CNES-001","code":1}]},{"name":"Bernadette","locations":[{"institut":"CNES-156","code":156}]}]}</regards:origine>
    <regards:sun_distance>150000000</regards:sun_distance>
  </entry>
  <entry>
    <title>Jupiter</title>
    <link rel="alternate" type="application/atom+xml" href="http://localhost:8080/engines/opensearch/dataobjects/URN:AIP:DATA:opensearch:00000000-0000-0000-0000-001136596190:V1?token=eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJkZWZhdWx0X3VzZXJAcmVnYXJkcy5mciIsInJvbGUiOiJST0xFX0RFRkFVTFQiLCJ0ZW5hbnQiOiJvcGVuc2VhcmNoIiwiZW1haWwiOiJkZWZhdWx0X3VzZXJAcmVnYXJkcy5mciIsImV4cCI6MTYzMTgyNDkyNX0.LOE9v8C7iULsfGR8cm4z1lCHVsO5IytSmOPVkteuC0p8yHyAocP4hMJWL_M23FaSdCJJLpGX3j5nJckT9YWn_g" title="ATOM link for URN:AIP:DATA:opensearch:00000000-0000-0000-0000-001136596190:V1"/>
    <id>URN:AIP:DATA:opensearch:00000000-0000-0000-0000-001136596190:V1</id>
    <updated>1970-01-19T21:16:57Z</updated>
    <gml:ValidTime>
      <gml:TimePeriod>
        <gml:beginPosition>"2021-09-16T18:41:50.746Z"</gml:beginPosition>
        <gml:endPosition>"2021-09-16T18:41:50.746Z"</gml:endPosition>
      </gml:TimePeriod>
    </gml:ValidTime>
    <regards:label>"Jupiter"</regards:label>
    <regards:ipId>"URN:AIP:DATA:opensearch:00000000-0000-0000-0000-001136596190:V1"</regards:ipId>
    <regards:sipId>"Jupiter"</regards:sipId>
    <regards:tags>["URN:AIP:DATASET:opensearch:33a93923-041a-4cb7-8b6e-0e8adb1d7797:V1"]</regards:tags>
    <regards:type>"Feature"</regards:type>
    <regards:planet_type>"Gas giant"</regards:planet_type>
    <regards:diameter>143000</regards:diameter>
    <regards:TimePeriod>
      <regards:stopDate>"2024-09-16T18:41:50.747Z"</regards:stopDate>
      <regards:startDate>"2021-09-16T18:41:50.746Z"</regards:startDate>
    </regards:TimePeriod>
    <regards:planet>"Jupiter"</regards:planet>
    <regards:origine>{"name":"CNES","link":"http://cnes.fr","contacts":[{"name":"JeanPaul","locations":[{"institut":"CNES-001","code":1}]},{"name":"Bernadette","locations":[{"institut":"CNES-156","code":156}]}]}</regards:origine>
    <regards:sun_distance>778000000</regards:sun_distance>
    <regards:params>["alpha","beta","gamma"]</regards:params>
  </entry>
  <entry>
    <title>Saturn</title>
    <link rel="alternate" type="application/atom+xml" href="http://localhost:8080/engines/opensearch/dataobjects/URN:AIP:DATA:opensearch:00000000-0000-0000-0000-001362134087:V1?token=eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJkZWZhdWx0X3VzZXJAcmVnYXJkcy5mciIsInJvbGUiOiJST0xFX0RFRkFVTFQiLCJ0ZW5hbnQiOiJvcGVuc2VhcmNoIiwiZW1haWwiOiJkZWZhdWx0X3VzZXJAcmVnYXJkcy5mciIsImV4cCI6MTYzMTgyNDkyNX0.LOE9v8C7iULsfGR8cm4z1lCHVsO5IytSmOPVkteuC0p8yHyAocP4hMJWL_M23FaSdCJJLpGX3j5nJckT9YWn_g" title="ATOM link for URN:AIP:DATA:opensearch:00000000-0000-0000-0000-001362134087:V1"/>
    <id>URN:AIP:DATA:opensearch:00000000-0000-0000-0000-001362134087:V1</id>
    <updated>1970-01-19T21:16:57Z</updated>
    <gml:ValidTime>
      <gml:TimePeriod>
        <gml:beginPosition>"2021-09-16T18:41:50.746Z"</gml:beginPosition>
        <gml:endPosition>"2021-09-16T18:41:50.746Z"</gml:endPosition>
      </gml:TimePeriod>
    </gml:ValidTime>
    <regards:label>"Saturn"</regards:label>
    <regards:ipId>"URN:AIP:DATA:opensearch:00000000-0000-0000-0000-001362134087:V1"</regards:ipId>
    <regards:sipId>"Saturn"</regards:sipId>
    <regards:tags>["URN:AIP:DATASET:opensearch:33a93923-041a-4cb7-8b6e-0e8adb1d7797:V1"]</regards:tags>
    <regards:type>"Feature"</regards:type>
    <regards:planet_type>"Gas giant"</regards:planet_type>
    <regards:diameter>120536</regards:diameter>
    <regards:TimePeriod>
      <regards:stopDate>"2024-09-16T18:41:50.747Z"</regards:stopDate>
      <regards:startDate>"2021-09-16T18:41:50.746Z"</regards:startDate>
    </regards:TimePeriod>
    <regards:planet>"Saturn"</regards:planet>
    <regards:origine>{"name":"CNES","link":"http://cnes.fr","contacts":[{"name":"JeanPaul","locations":[{"institut":"CNES-001","code":1}]},{"name":"Bernadette","locations":[{"institut":"CNES-156","code":156}]}]}</regards:origine>
    <regards:sun_distance>1427000000</regards:sun_distance>
  </entry>
  <entry>
    <title>Neptune</title>
    <link rel="alternate" type="application/atom+xml" href="http://localhost:8080/engines/opensearch/dataobjects/URN:AIP:DATA:opensearch:00000000-0000-0000-0000-001641415029:V1?token=eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJkZWZhdWx0X3VzZXJAcmVnYXJkcy5mciIsInJvbGUiOiJST0xFX0RFRkFVTFQiLCJ0ZW5hbnQiOiJvcGVuc2VhcmNoIiwiZW1haWwiOiJkZWZhdWx0X3VzZXJAcmVnYXJkcy5mciIsImV4cCI6MTYzMTgyNDkyNX0.LOE9v8C7iULsfGR8cm4z1lCHVsO5IytSmOPVkteuC0p8yHyAocP4hMJWL_M23FaSdCJJLpGX3j5nJckT9YWn_g" title="ATOM link for URN:AIP:DATA:opensearch:00000000-0000-0000-0000-001641415029:V1"/>
    <id>URN:AIP:DATA:opensearch:00000000-0000-0000-0000-001641415029:V1</id>
    <updated>1970-01-19T21:16:57Z</updated>
    <gml:ValidTime>
      <gml:TimePeriod>
        <gml:beginPosition>"2021-09-16T18:41:50.746Z"</gml:beginPosition>
        <gml:endPosition>"2021-09-16T18:41:50.746Z"</gml:endPosition>
      </gml:TimePeriod>
    </gml:ValidTime>
    <regards:label>"Neptune"</regards:label>
    <regards:ipId>"URN:AIP:DATA:opensearch:00000000-0000-0000-0000-001641415029:V1"</regards:ipId>
    <regards:sipId>"Neptune"</regards:sipId>
    <regards:tags>["URN:AIP:DATASET:opensearch:33a93923-041a-4cb7-8b6e-0e8adb1d7797:V1"]</regards:tags>
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
    <title>Uranus</title>
    <link rel="alternate" type="application/atom+xml" href="http://localhost:8080/engines/opensearch/dataobjects/URN:AIP:DATA:opensearch:00000000-0000-0000-0000-001015569054:V1?token=eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJkZWZhdWx0X3VzZXJAcmVnYXJkcy5mciIsInJvbGUiOiJST0xFX0RFRkFVTFQiLCJ0ZW5hbnQiOiJvcGVuc2VhcmNoIiwiZW1haWwiOiJkZWZhdWx0X3VzZXJAcmVnYXJkcy5mciIsImV4cCI6MTYzMTgyNDkyNX0.LOE9v8C7iULsfGR8cm4z1lCHVsO5IytSmOPVkteuC0p8yHyAocP4hMJWL_M23FaSdCJJLpGX3j5nJckT9YWn_g" title="ATOM link for URN:AIP:DATA:opensearch:00000000-0000-0000-0000-001015569054:V1"/>
    <id>URN:AIP:DATA:opensearch:00000000-0000-0000-0000-001015569054:V1</id>
    <updated>1970-01-19T21:16:57Z</updated>
    <gml:ValidTime>
      <gml:TimePeriod>
        <gml:beginPosition>"2021-09-16T18:41:50.746Z"</gml:beginPosition>
        <gml:endPosition>"2021-09-16T18:41:50.746Z"</gml:endPosition>
      </gml:TimePeriod>
    </gml:ValidTime>
    <regards:label>"Uranus"</regards:label>
    <regards:ipId>"URN:AIP:DATA:opensearch:00000000-0000-0000-0000-001015569054:V1"</regards:ipId>
    <regards:sipId>"Uranus"</regards:sipId>
    <regards:tags>["URN:AIP:DATASET:opensearch:33a93923-041a-4cb7-8b6e-0e8adb1d7797:V1"]</regards:tags>
    <regards:type>"Feature"</regards:type>
    <regards:planet_type>"Ice giant"</regards:planet_type>
    <regards:diameter>51800</regards:diameter>
    <regards:TimePeriod>
      <regards:stopDate>"2024-09-16T18:41:50.747Z"</regards:stopDate>
      <regards:startDate>"2021-09-16T18:41:50.746Z"</regards:startDate>
    </regards:TimePeriod>
    <regards:planet>"Uranus"</regards:planet>
    <regards:origine>{"name":"CNES","link":"http://cnes.fr","contacts":[{"name":"JeanPaul","locations":[{"institut":"CNES-001","code":1}]},{"name":"Bernadette","locations":[{"institut":"CNES-156","code":156}]}]}</regards:origine>
    <regards:sun_distance>2800000000</regards:sun_distance>
  </entry>
  <entry>
    <title>Venus</title>
    <link rel="alternate" type="application/atom+xml" href="http://localhost:8080/engines/opensearch/dataobjects/URN:AIP:DATA:opensearch:00000000-0000-0000-0000-000663582511:V1?token=eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJkZWZhdWx0X3VzZXJAcmVnYXJkcy5mciIsInJvbGUiOiJST0xFX0RFRkFVTFQiLCJ0ZW5hbnQiOiJvcGVuc2VhcmNoIiwiZW1haWwiOiJkZWZhdWx0X3VzZXJAcmVnYXJkcy5mciIsImV4cCI6MTYzMTgyNDkyNX0.LOE9v8C7iULsfGR8cm4z1lCHVsO5IytSmOPVkteuC0p8yHyAocP4hMJWL_M23FaSdCJJLpGX3j5nJckT9YWn_g" title="ATOM link for URN:AIP:DATA:opensearch:00000000-0000-0000-0000-000663582511:V1"/>
    <id>URN:AIP:DATA:opensearch:00000000-0000-0000-0000-000663582511:V1</id>
    <updated>1970-01-19T21:16:57Z</updated>
    <gml:ValidTime>
      <gml:TimePeriod>
        <gml:beginPosition>"2021-09-16T18:41:50.746Z"</gml:beginPosition>
        <gml:endPosition>"2021-09-16T18:41:50.746Z"</gml:endPosition>
      </gml:TimePeriod>
    </gml:ValidTime>
    <regards:label>"Venus"</regards:label>
    <regards:ipId>"URN:AIP:DATA:opensearch:00000000-0000-0000-0000-000663582511:V1"</regards:ipId>
    <regards:sipId>"Venus"</regards:sipId>
    <regards:tags>["URN:AIP:DATASET:opensearch:33a93923-041a-4cb7-8b6e-0e8adb1d7797:V1"]</regards:tags>
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
    <title>Mars</title>
    <link rel="alternate" type="application/atom+xml" href="http://localhost:8080/engines/opensearch/dataobjects/URN:AIP:DATA:opensearch:00000000-0000-0000-0000-000006148093:V1?token=eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJkZWZhdWx0X3VzZXJAcmVnYXJkcy5mciIsInJvbGUiOiJST0xFX0RFRkFVTFQiLCJ0ZW5hbnQiOiJvcGVuc2VhcmNoIiwiZW1haWwiOiJkZWZhdWx0X3VzZXJAcmVnYXJkcy5mciIsImV4cCI6MTYzMTgyNDkyNX0.LOE9v8C7iULsfGR8cm4z1lCHVsO5IytSmOPVkteuC0p8yHyAocP4hMJWL_M23FaSdCJJLpGX3j5nJckT9YWn_g" title="ATOM link for URN:AIP:DATA:opensearch:00000000-0000-0000-0000-000006148093:V1"/>
    <id>URN:AIP:DATA:opensearch:00000000-0000-0000-0000-000006148093:V1</id>
    <updated>1970-01-19T21:16:57Z</updated>
    <gml:ValidTime>
      <gml:TimePeriod>
        <gml:beginPosition>"2021-09-16T18:41:50.746Z"</gml:beginPosition>
        <gml:endPosition>"2021-09-16T18:41:50.746Z"</gml:endPosition>
      </gml:TimePeriod>
    </gml:ValidTime>
    <regards:label>"Mars"</regards:label>
    <regards:ipId>"URN:AIP:DATA:opensearch:00000000-0000-0000-0000-000006148093:V1"</regards:ipId>
    <regards:sipId>"Mars"</regards:sipId>
    <regards:tags>["URN:AIP:DATASET:opensearch:33a93923-041a-4cb7-8b6e-0e8adb1d7797:V1"]</regards:tags>
    <regards:type>"Feature"</regards:type>
    <regards:planet_type>"Telluric"</regards:planet_type>
    <regards:diameter>6800</regards:diameter>
    <regards:TimePeriod>
      <regards:stopDate>"2024-09-16T18:41:50.747Z"</regards:stopDate>
      <regards:startDate>"2021-09-16T18:41:50.746Z"</regards:startDate>
    </regards:TimePeriod>
    <regards:planet>"Mars"</regards:planet>
    <regards:origine>{"name":"CNES","link":"http://cnes.fr","contacts":[{"name":"JeanPaul","locations":[{"institut":"CNES-001","code":1}]},{"name":"Bernadette","locations":[{"institut":"CNES-156","code":156}]}]}</regards:origine>
    <regards:sun_distance>228000000</regards:sun_distance>
  </entry>
</feed>

```
