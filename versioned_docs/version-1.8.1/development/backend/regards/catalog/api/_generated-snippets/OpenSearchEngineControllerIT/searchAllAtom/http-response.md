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
  <link rel="alternate" type="application/opensearchdescription+xml" href="http://localhost:8080/engines/opensearch/entities/search/opensearchdescription.xml?page=1&amp;maxRecords=100"/>
  <author>
    <name>Plop</name>
    <email>regards@c-s.fr</email>
  </author>
  <subtitle type="text">desc</subtitle>
  <id>8c94ba17-7d40-44c0-85aa-ee03e33978a4</id>
  <updated>2021-09-16T00:00:00Z</updated>
  <opensearch:itemsPerPage>100</opensearch:itemsPerPage>
  <opensearch:totalResults>15</opensearch:totalResults>
  <opensearch:startIndex>1</opensearch:startIndex>
  <opensearch:Query role="results" startPage="1"/>
  <opensearch:link rel="search" type="application/opensearchdescription+xml" href="http://localhost:8080/engines/opensearch/entities/search/opensearchdescription.xml?page=1&amp;maxRecords=100"/>
  <entry>
    <title>Saturn</title>
    <link rel="alternate" type="application/atom+xml" href="http://localhost:8080/engines/opensearch/dataobjects/URN:AIP:DATA:opensearch:00000000-0000-0000-0000-001920570946:V1?token=eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJkZWZhdWx0X3VzZXJAcmVnYXJkcy5mciIsInJvbGUiOiJST0xFX0RFRkFVTFQiLCJ0ZW5hbnQiOiJvcGVuc2VhcmNoIiwiZW1haWwiOiJkZWZhdWx0X3VzZXJAcmVnYXJkcy5mciIsImV4cCI6MTYzMTgyNDkzNn0.mG96mzwhvImSgpzCUyw3n8ELTeB3SuZF6e-L1rPQCf95d9CEngg_vg2g8AgMbkRDqupJgbjW4_OwXInIY_0Hrw" title="ATOM link for URN:AIP:DATA:opensearch:00000000-0000-0000-0000-001920570946:V1"/>
    <id>URN:AIP:DATA:opensearch:00000000-0000-0000-0000-001920570946:V1</id>
    <updated>1970-01-19T21:16:57Z</updated>
    <gml:ValidTime>
      <gml:TimePeriod>
        <gml:beginPosition>"2021-09-16T18:41:50.746Z"</gml:beginPosition>
        <gml:endPosition>"2021-09-16T18:41:50.746Z"</gml:endPosition>
      </gml:TimePeriod>
    </gml:ValidTime>
    <regards:label>"Saturn"</regards:label>
    <regards:ipId>"URN:AIP:DATA:opensearch:00000000-0000-0000-0000-001920570946:V1"</regards:ipId>
    <regards:sipId>"Saturn"</regards:sipId>
    <regards:tags>["URN:AIP:DATASET:opensearch:025c2529-275e-4b6c-a30f-800c868d64ff:V1"]</regards:tags>
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
    <title>data_two</title>
    <link rel="alternate" type="application/atom+xml" href="http://localhost:8080/engines/opensearch/dataobjects/URN:AIP:DATA:opensearch:00000000-0000-0000-0000-000411912320:V1?token=eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJkZWZhdWx0X3VzZXJAcmVnYXJkcy5mciIsInJvbGUiOiJST0xFX0RFRkFVTFQiLCJ0ZW5hbnQiOiJvcGVuc2VhcmNoIiwiZW1haWwiOiJkZWZhdWx0X3VzZXJAcmVnYXJkcy5mciIsImV4cCI6MTYzMTgyNDkzNn0.mG96mzwhvImSgpzCUyw3n8ELTeB3SuZF6e-L1rPQCf95d9CEngg_vg2g8AgMbkRDqupJgbjW4_OwXInIY_0Hrw" title="ATOM link for URN:AIP:DATA:opensearch:00000000-0000-0000-0000-000411912320:V1"/>
    <id>URN:AIP:DATA:opensearch:00000000-0000-0000-0000-000411912320:V1</id>
    <regards:label>"data_two"</regards:label>
    <regards:ipId>"URN:AIP:DATA:opensearch:00000000-0000-0000-0000-000411912320:V1"</regards:ipId>
    <regards:sipId>"data_two"</regards:sipId>
    <regards:tags>[]</regards:tags>
    <regards:type>"Feature"</regards:type>
    <regards:name_test>"data_two_test"</regards:name_test>
  </entry>
  <entry>
    <title>Sun</title>
    <link rel="alternate" type="application/atom+xml" href="http://localhost:8080/engines/opensearch/collections/URN:AIP:COLLECTION:opensearch:6a84629c-128c-44a3-8944-0c597e204fa5:V1?token=eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJkZWZhdWx0X3VzZXJAcmVnYXJkcy5mciIsInJvbGUiOiJST0xFX0RFRkFVTFQiLCJ0ZW5hbnQiOiJvcGVuc2VhcmNoIiwiZW1haWwiOiJkZWZhdWx0X3VzZXJAcmVnYXJkcy5mciIsImV4cCI6MTYzMTgyNDkzNn0.mG96mzwhvImSgpzCUyw3n8ELTeB3SuZF6e-L1rPQCf95d9CEngg_vg2g8AgMbkRDqupJgbjW4_OwXInIY_0Hrw" title="ATOM link for URN:AIP:COLLECTION:opensearch:6a84629c-128c-44a3-8944-0c597e204fa5:V1"/>
    <id>URN:AIP:COLLECTION:opensearch:6a84629c-128c-44a3-8944-0c597e204fa5:V1</id>
    <regards:label>"Sun"</regards:label>
    <regards:ipId>"URN:AIP:COLLECTION:opensearch:6a84629c-128c-44a3-8944-0c597e204fa5:V1"</regards:ipId>
    <regards:sipId>"Sun"</regards:sipId>
    <regards:tags>[]</regards:tags>
    <regards:type>"Feature"</regards:type>
    <regards:star>"Sun"</regards:star>
    <regards:abstract>"The Sun is the star at the center of the Solar System."</regards:abstract>
  </entry>
  <entry>
    <title>Venus</title>
    <link rel="alternate" type="application/atom+xml" href="http://localhost:8080/engines/opensearch/dataobjects/URN:AIP:DATA:opensearch:00000000-0000-0000-0000-000873077992:V1?token=eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJkZWZhdWx0X3VzZXJAcmVnYXJkcy5mciIsInJvbGUiOiJST0xFX0RFRkFVTFQiLCJ0ZW5hbnQiOiJvcGVuc2VhcmNoIiwiZW1haWwiOiJkZWZhdWx0X3VzZXJAcmVnYXJkcy5mciIsImV4cCI6MTYzMTgyNDkzNn0.mG96mzwhvImSgpzCUyw3n8ELTeB3SuZF6e-L1rPQCf95d9CEngg_vg2g8AgMbkRDqupJgbjW4_OwXInIY_0Hrw" title="ATOM link for URN:AIP:DATA:opensearch:00000000-0000-0000-0000-000873077992:V1"/>
    <id>URN:AIP:DATA:opensearch:00000000-0000-0000-0000-000873077992:V1</id>
    <updated>1970-01-19T21:16:57Z</updated>
    <gml:ValidTime>
      <gml:TimePeriod>
        <gml:beginPosition>"2021-09-16T18:41:50.746Z"</gml:beginPosition>
        <gml:endPosition>"2021-09-16T18:41:50.746Z"</gml:endPosition>
      </gml:TimePeriod>
    </gml:ValidTime>
    <regards:label>"Venus"</regards:label>
    <regards:ipId>"URN:AIP:DATA:opensearch:00000000-0000-0000-0000-000873077992:V1"</regards:ipId>
    <regards:sipId>"Venus"</regards:sipId>
    <regards:tags>["URN:AIP:DATASET:opensearch:025c2529-275e-4b6c-a30f-800c868d64ff:V1"]</regards:tags>
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
    <link rel="alternate" type="application/atom+xml" href="http://localhost:8080/engines/opensearch/dataobjects/URN:AIP:DATA:opensearch:00000000-0000-0000-0000-001503329415:V1?token=eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJkZWZhdWx0X3VzZXJAcmVnYXJkcy5mciIsInJvbGUiOiJST0xFX0RFRkFVTFQiLCJ0ZW5hbnQiOiJvcGVuc2VhcmNoIiwiZW1haWwiOiJkZWZhdWx0X3VzZXJAcmVnYXJkcy5mciIsImV4cCI6MTYzMTgyNDkzNn0.mG96mzwhvImSgpzCUyw3n8ELTeB3SuZF6e-L1rPQCf95d9CEngg_vg2g8AgMbkRDqupJgbjW4_OwXInIY_0Hrw" title="ATOM link for URN:AIP:DATA:opensearch:00000000-0000-0000-0000-001503329415:V1"/>
    <id>URN:AIP:DATA:opensearch:00000000-0000-0000-0000-001503329415:V1</id>
    <updated>1970-01-19T21:16:57Z</updated>
    <gml:ValidTime>
      <gml:TimePeriod>
        <gml:beginPosition>"2021-09-16T18:41:50.746Z"</gml:beginPosition>
        <gml:endPosition>"2021-09-16T18:41:50.746Z"</gml:endPosition>
      </gml:TimePeriod>
    </gml:ValidTime>
    <regards:label>"Mars"</regards:label>
    <regards:ipId>"URN:AIP:DATA:opensearch:00000000-0000-0000-0000-001503329415:V1"</regards:ipId>
    <regards:sipId>"Mars"</regards:sipId>
    <regards:tags>["URN:AIP:DATASET:opensearch:025c2529-275e-4b6c-a30f-800c868d64ff:V1"]</regards:tags>
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
  <entry>
    <title>Mercury</title>
    <link rel="icon" href="http://regards/le_quicklook_hd.jpg?token=eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJkZWZhdWx0X3VzZXJAcmVnYXJkcy5mciIsInJvbGUiOiJST0xFX0RFRkFVTFQiLCJ0ZW5hbnQiOiJvcGVuc2VhcmNoIiwiZW1haWwiOiJkZWZhdWx0X3VzZXJAcmVnYXJkcy5mciIsImV4cCI6MTYzMTgyNDkzNn0.mG96mzwhvImSgpzCUyw3n8ELTeB3SuZF6e-L1rPQCf95d9CEngg_vg2g8AgMbkRDqupJgbjW4_OwXInIY_0Hrw"/>
    <link rel="icon" href="http://regards/le_quicklook_sd.jpg?token=eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJkZWZhdWx0X3VzZXJAcmVnYXJkcy5mciIsInJvbGUiOiJST0xFX0RFRkFVTFQiLCJ0ZW5hbnQiOiJvcGVuc2VhcmNoIiwiZW1haWwiOiJkZWZhdWx0X3VzZXJAcmVnYXJkcy5mciIsImV4cCI6MTYzMTgyNDkzNn0.mG96mzwhvImSgpzCUyw3n8ELTeB3SuZF6e-L1rPQCf95d9CEngg_vg2g8AgMbkRDqupJgbjW4_OwXInIY_0Hrw"/>
    <link rel="icon" href="http://regards/le_quicklook_md.jpg?token=eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJkZWZhdWx0X3VzZXJAcmVnYXJkcy5mciIsInJvbGUiOiJST0xFX0RFRkFVTFQiLCJ0ZW5hbnQiOiJvcGVuc2VhcmNoIiwiZW1haWwiOiJkZWZhdWx0X3VzZXJAcmVnYXJkcy5mciIsImV4cCI6MTYzMTgyNDkzNn0.mG96mzwhvImSgpzCUyw3n8ELTeB3SuZF6e-L1rPQCf95d9CEngg_vg2g8AgMbkRDqupJgbjW4_OwXInIY_0Hrw"/>
    <link rel="enclosure" href="http://regards/test.nc?token=eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJkZWZhdWx0X3VzZXJAcmVnYXJkcy5mciIsInJvbGUiOiJST0xFX0RFRkFVTFQiLCJ0ZW5hbnQiOiJvcGVuc2VhcmNoIiwiZW1haWwiOiJkZWZhdWx0X3VzZXJAcmVnYXJkcy5mciIsImV4cCI6MTYzMTgyNDkzNn0.mG96mzwhvImSgpzCUyw3n8ELTeB3SuZF6e-L1rPQCf95d9CEngg_vg2g8AgMbkRDqupJgbjW4_OwXInIY_0Hrw"/>
    <link rel="icon" href="http://regards/thumbnail.png?token=eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJkZWZhdWx0X3VzZXJAcmVnYXJkcy5mciIsInJvbGUiOiJST0xFX0RFRkFVTFQiLCJ0ZW5hbnQiOiJvcGVuc2VhcmNoIiwiZW1haWwiOiJkZWZhdWx0X3VzZXJAcmVnYXJkcy5mciIsImV4cCI6MTYzMTgyNDkzNn0.mG96mzwhvImSgpzCUyw3n8ELTeB3SuZF6e-L1rPQCf95d9CEngg_vg2g8AgMbkRDqupJgbjW4_OwXInIY_0Hrw"/>
    <link rel="alternate" type="application/atom+xml" href="http://localhost:8080/engines/opensearch/dataobjects/URN:AIP:DATA:opensearch:00000000-0000-0000-0000-000816043354:V1?token=eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJkZWZhdWx0X3VzZXJAcmVnYXJkcy5mciIsInJvbGUiOiJST0xFX0RFRkFVTFQiLCJ0ZW5hbnQiOiJvcGVuc2VhcmNoIiwiZW1haWwiOiJkZWZhdWx0X3VzZXJAcmVnYXJkcy5mciIsImV4cCI6MTYzMTgyNDkzNn0.mG96mzwhvImSgpzCUyw3n8ELTeB3SuZF6e-L1rPQCf95d9CEngg_vg2g8AgMbkRDqupJgbjW4_OwXInIY_0Hrw" title="ATOM link for URN:AIP:DATA:opensearch:00000000-0000-0000-0000-000816043354:V1"/>
    <id>URN:AIP:DATA:opensearch:00000000-0000-0000-0000-000816043354:V1</id>
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
      <media:content medium="image" height="100" type="application/jpg" width="100" url="http://regards/le_quicklook_sd.jpg?token=eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJkZWZhdWx0X3VzZXJAcmVnYXJkcy5mciIsInJvbGUiOiJST0xFX0RFRkFVTFQiLCJ0ZW5hbnQiOiJvcGVuc2VhcmNoIiwiZW1haWwiOiJkZWZhdWx0X3VzZXJAcmVnYXJkcy5mciIsImV4cCI6MTYzMTgyNDkzNn0.mG96mzwhvImSgpzCUyw3n8ELTeB3SuZF6e-L1rPQCf95d9CEngg_vg2g8AgMbkRDqupJgbjW4_OwXInIY_0Hrw">
        <media:category scheme="http://www.opengis.net/spec/EOMPOM/1.0">QUICKLOOK</media:category>
      </media:content>
      <media:content medium="image" height="250" type="application/png" width="250" url="http://regards/thumbnail.png?token=eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJkZWZhdWx0X3VzZXJAcmVnYXJkcy5mciIsInJvbGUiOiJST0xFX0RFRkFVTFQiLCJ0ZW5hbnQiOiJvcGVuc2VhcmNoIiwiZW1haWwiOiJkZWZhdWx0X3VzZXJAcmVnYXJkcy5mciIsImV4cCI6MTYzMTgyNDkzNn0.mG96mzwhvImSgpzCUyw3n8ELTeB3SuZF6e-L1rPQCf95d9CEngg_vg2g8AgMbkRDqupJgbjW4_OwXInIY_0Hrw">
        <media:category scheme="http://www.opengis.net/spec/EOMPOM/1.0">THUMBNAIL</media:category>
      </media:content>
    </media:group>
    <regards:label>"Mercury"</regards:label>
    <regards:ipId>"URN:AIP:DATA:opensearch:00000000-0000-0000-0000-000816043354:V1"</regards:ipId>
    <regards:sipId>"Mercury"</regards:sipId>
    <regards:tags>["URN:AIP:DATASET:opensearch:025c2529-275e-4b6c-a30f-800c868d64ff:V1"]</regards:tags>
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
    <link rel="alternate" type="application/atom+xml" href="http://localhost:8080/engines/opensearch/dataobjects/URN:AIP:DATA:opensearch:00000000-0000-0000-0000-001490545600:V1?token=eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJkZWZhdWx0X3VzZXJAcmVnYXJkcy5mciIsInJvbGUiOiJST0xFX0RFRkFVTFQiLCJ0ZW5hbnQiOiJvcGVuc2VhcmNoIiwiZW1haWwiOiJkZWZhdWx0X3VzZXJAcmVnYXJkcy5mciIsImV4cCI6MTYzMTgyNDkzNn0.mG96mzwhvImSgpzCUyw3n8ELTeB3SuZF6e-L1rPQCf95d9CEngg_vg2g8AgMbkRDqupJgbjW4_OwXInIY_0Hrw" title="ATOM link for URN:AIP:DATA:opensearch:00000000-0000-0000-0000-001490545600:V1"/>
    <id>URN:AIP:DATA:opensearch:00000000-0000-0000-0000-001490545600:V1</id>
    <updated>1970-01-19T21:16:57Z</updated>
    <gml:ValidTime>
      <gml:TimePeriod>
        <gml:beginPosition>"2021-09-16T18:41:50.746Z"</gml:beginPosition>
        <gml:endPosition>"2021-09-16T18:41:50.746Z"</gml:endPosition>
      </gml:TimePeriod>
    </gml:ValidTime>
    <regards:label>"Earth"</regards:label>
    <regards:ipId>"URN:AIP:DATA:opensearch:00000000-0000-0000-0000-001490545600:V1"</regards:ipId>
    <regards:sipId>"Earth"</regards:sipId>
    <regards:tags>["URN:AIP:DATASET:opensearch:025c2529-275e-4b6c-a30f-800c868d64ff:V1"]</regards:tags>
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
    <title>Uranus</title>
    <link rel="alternate" type="application/atom+xml" href="http://localhost:8080/engines/opensearch/dataobjects/URN:AIP:DATA:opensearch:00000000-0000-0000-0000-002105616305:V1?token=eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJkZWZhdWx0X3VzZXJAcmVnYXJkcy5mciIsInJvbGUiOiJST0xFX0RFRkFVTFQiLCJ0ZW5hbnQiOiJvcGVuc2VhcmNoIiwiZW1haWwiOiJkZWZhdWx0X3VzZXJAcmVnYXJkcy5mciIsImV4cCI6MTYzMTgyNDkzNn0.mG96mzwhvImSgpzCUyw3n8ELTeB3SuZF6e-L1rPQCf95d9CEngg_vg2g8AgMbkRDqupJgbjW4_OwXInIY_0Hrw" title="ATOM link for URN:AIP:DATA:opensearch:00000000-0000-0000-0000-002105616305:V1"/>
    <id>URN:AIP:DATA:opensearch:00000000-0000-0000-0000-002105616305:V1</id>
    <updated>1970-01-19T21:16:57Z</updated>
    <gml:ValidTime>
      <gml:TimePeriod>
        <gml:beginPosition>"2021-09-16T18:41:50.746Z"</gml:beginPosition>
        <gml:endPosition>"2021-09-16T18:41:50.746Z"</gml:endPosition>
      </gml:TimePeriod>
    </gml:ValidTime>
    <regards:label>"Uranus"</regards:label>
    <regards:ipId>"URN:AIP:DATA:opensearch:00000000-0000-0000-0000-002105616305:V1"</regards:ipId>
    <regards:sipId>"Uranus"</regards:sipId>
    <regards:tags>["URN:AIP:DATASET:opensearch:025c2529-275e-4b6c-a30f-800c868d64ff:V1"]</regards:tags>
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
    <title>Solar system</title>
    <link rel="alternate" type="application/atom+xml" href="http://localhost:8080/engines/opensearch/datasets/URN:AIP:DATASET:opensearch:025c2529-275e-4b6c-a30f-800c868d64ff:V1?token=eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJkZWZhdWx0X3VzZXJAcmVnYXJkcy5mciIsInJvbGUiOiJST0xFX0RFRkFVTFQiLCJ0ZW5hbnQiOiJvcGVuc2VhcmNoIiwiZW1haWwiOiJkZWZhdWx0X3VzZXJAcmVnYXJkcy5mciIsImV4cCI6MTYzMTgyNDkzNn0.mG96mzwhvImSgpzCUyw3n8ELTeB3SuZF6e-L1rPQCf95d9CEngg_vg2g8AgMbkRDqupJgbjW4_OwXInIY_0Hrw" title="ATOM link for URN:AIP:DATASET:opensearch:025c2529-275e-4b6c-a30f-800c868d64ff:V1"/>
    <link rel="alternate" type="application/atom+xml" href="http://localhost:8080/engines/opensearch/datasets/URN:AIP:DATASET:opensearch:025c2529-275e-4b6c-a30f-800c868d64ff:V1/dataobjects/search?token=eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJkZWZhdWx0X3VzZXJAcmVnYXJkcy5mciIsInJvbGUiOiJST0xFX0RFRkFVTFQiLCJ0ZW5hbnQiOiJvcGVuc2VhcmNoIiwiZW1haWwiOiJkZWZhdWx0X3VzZXJAcmVnYXJkcy5mciIsImV4cCI6MTYzMTgyNDkzNn0.mG96mzwhvImSgpzCUyw3n8ELTeB3SuZF6e-L1rPQCf95d9CEngg_vg2g8AgMbkRDqupJgbjW4_OwXInIY_0Hrw"/>
    <id>URN:AIP:DATASET:opensearch:025c2529-275e-4b6c-a30f-800c868d64ff:V1</id>
    <regards:label>"Solar system"</regards:label>
    <regards:ipId>"URN:AIP:DATASET:opensearch:025c2529-275e-4b6c-a30f-800c868d64ff:V1"</regards:ipId>
    <regards:sipId>"Solar system"</regards:sipId>
    <regards:tags>["REGARDS","CS-SI","CNES"]</regards:tags>
    <regards:type>"Feature"</regards:type>
    <regards:startSystem>"Solar system"</regards:startSystem>
  </entry>
  <entry>
    <title>Jupiter</title>
    <link rel="alternate" type="application/atom+xml" href="http://localhost:8080/engines/opensearch/dataobjects/URN:AIP:DATA:opensearch:00000000-0000-0000-0000-001751277952:V1?token=eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJkZWZhdWx0X3VzZXJAcmVnYXJkcy5mciIsInJvbGUiOiJST0xFX0RFRkFVTFQiLCJ0ZW5hbnQiOiJvcGVuc2VhcmNoIiwiZW1haWwiOiJkZWZhdWx0X3VzZXJAcmVnYXJkcy5mciIsImV4cCI6MTYzMTgyNDkzNn0.mG96mzwhvImSgpzCUyw3n8ELTeB3SuZF6e-L1rPQCf95d9CEngg_vg2g8AgMbkRDqupJgbjW4_OwXInIY_0Hrw" title="ATOM link for URN:AIP:DATA:opensearch:00000000-0000-0000-0000-001751277952:V1"/>
    <id>URN:AIP:DATA:opensearch:00000000-0000-0000-0000-001751277952:V1</id>
    <updated>1970-01-19T21:16:57Z</updated>
    <gml:ValidTime>
      <gml:TimePeriod>
        <gml:beginPosition>"2021-09-16T18:41:50.746Z"</gml:beginPosition>
        <gml:endPosition>"2021-09-16T18:41:50.746Z"</gml:endPosition>
      </gml:TimePeriod>
    </gml:ValidTime>
    <regards:label>"Jupiter"</regards:label>
    <regards:ipId>"URN:AIP:DATA:opensearch:00000000-0000-0000-0000-001751277952:V1"</regards:ipId>
    <regards:sipId>"Jupiter"</regards:sipId>
    <regards:tags>["URN:AIP:DATASET:opensearch:025c2529-275e-4b6c-a30f-800c868d64ff:V1"]</regards:tags>
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
    <title>Milky way</title>
    <link rel="alternate" type="application/atom+xml" href="http://localhost:8080/engines/opensearch/collections/URN:AIP:COLLECTION:opensearch:1c6951e7-808d-4d65-a571-2356bb948046:V1?token=eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJkZWZhdWx0X3VzZXJAcmVnYXJkcy5mciIsInJvbGUiOiJST0xFX0RFRkFVTFQiLCJ0ZW5hbnQiOiJvcGVuc2VhcmNoIiwiZW1haWwiOiJkZWZhdWx0X3VzZXJAcmVnYXJkcy5mciIsImV4cCI6MTYzMTgyNDkzNn0.mG96mzwhvImSgpzCUyw3n8ELTeB3SuZF6e-L1rPQCf95d9CEngg_vg2g8AgMbkRDqupJgbjW4_OwXInIY_0Hrw" title="ATOM link for URN:AIP:COLLECTION:opensearch:1c6951e7-808d-4d65-a571-2356bb948046:V1"/>
    <id>URN:AIP:COLLECTION:opensearch:1c6951e7-808d-4d65-a571-2356bb948046:V1</id>
    <regards:label>"Milky way"</regards:label>
    <regards:ipId>"URN:AIP:COLLECTION:opensearch:1c6951e7-808d-4d65-a571-2356bb948046:V1"</regards:ipId>
    <regards:sipId>"Milky way"</regards:sipId>
    <regards:tags>[]</regards:tags>
    <regards:type>"Feature"</regards:type>
    <regards:galaxy>"Milky way"</regards:galaxy>
    <regards:abstract>"The Milky Way is the galaxy that contains our Solar System."</regards:abstract>
  </entry>
  <entry>
    <title>Neptune</title>
    <link rel="alternate" type="application/atom+xml" href="http://localhost:8080/engines/opensearch/dataobjects/URN:AIP:DATA:opensearch:00000000-0000-0000-0000-001127131628:V1?token=eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJkZWZhdWx0X3VzZXJAcmVnYXJkcy5mciIsInJvbGUiOiJST0xFX0RFRkFVTFQiLCJ0ZW5hbnQiOiJvcGVuc2VhcmNoIiwiZW1haWwiOiJkZWZhdWx0X3VzZXJAcmVnYXJkcy5mciIsImV4cCI6MTYzMTgyNDkzNn0.mG96mzwhvImSgpzCUyw3n8ELTeB3SuZF6e-L1rPQCf95d9CEngg_vg2g8AgMbkRDqupJgbjW4_OwXInIY_0Hrw" title="ATOM link for URN:AIP:DATA:opensearch:00000000-0000-0000-0000-001127131628:V1"/>
    <id>URN:AIP:DATA:opensearch:00000000-0000-0000-0000-001127131628:V1</id>
    <updated>1970-01-19T21:16:57Z</updated>
    <gml:ValidTime>
      <gml:TimePeriod>
        <gml:beginPosition>"2021-09-16T18:41:50.746Z"</gml:beginPosition>
        <gml:endPosition>"2021-09-16T18:41:50.746Z"</gml:endPosition>
      </gml:TimePeriod>
    </gml:ValidTime>
    <regards:label>"Neptune"</regards:label>
    <regards:ipId>"URN:AIP:DATA:opensearch:00000000-0000-0000-0000-001127131628:V1"</regards:ipId>
    <regards:sipId>"Neptune"</regards:sipId>
    <regards:tags>["URN:AIP:DATASET:opensearch:025c2529-275e-4b6c-a30f-800c868d64ff:V1"]</regards:tags>
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
    <title>Kepler 90 planetary system</title>
    <link rel="alternate" type="application/atom+xml" href="http://localhost:8080/engines/opensearch/datasets/URN:AIP:DATASET:opensearch:c746cdfa-4ab1-4834-8858-e998896a713a:V1?token=eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJkZWZhdWx0X3VzZXJAcmVnYXJkcy5mciIsInJvbGUiOiJST0xFX0RFRkFVTFQiLCJ0ZW5hbnQiOiJvcGVuc2VhcmNoIiwiZW1haWwiOiJkZWZhdWx0X3VzZXJAcmVnYXJkcy5mciIsImV4cCI6MTYzMTgyNDkzNn0.mG96mzwhvImSgpzCUyw3n8ELTeB3SuZF6e-L1rPQCf95d9CEngg_vg2g8AgMbkRDqupJgbjW4_OwXInIY_0Hrw" title="ATOM link for URN:AIP:DATASET:opensearch:c746cdfa-4ab1-4834-8858-e998896a713a:V1"/>
    <link rel="alternate" type="application/atom+xml" href="http://localhost:8080/engines/opensearch/datasets/URN:AIP:DATASET:opensearch:c746cdfa-4ab1-4834-8858-e998896a713a:V1/dataobjects/search?token=eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJkZWZhdWx0X3VzZXJAcmVnYXJkcy5mciIsInJvbGUiOiJST0xFX0RFRkFVTFQiLCJ0ZW5hbnQiOiJvcGVuc2VhcmNoIiwiZW1haWwiOiJkZWZhdWx0X3VzZXJAcmVnYXJkcy5mciIsImV4cCI6MTYzMTgyNDkzNn0.mG96mzwhvImSgpzCUyw3n8ELTeB3SuZF6e-L1rPQCf95d9CEngg_vg2g8AgMbkRDqupJgbjW4_OwXInIY_0Hrw"/>
    <id>URN:AIP:DATASET:opensearch:c746cdfa-4ab1-4834-8858-e998896a713a:V1</id>
    <regards:label>"Kepler 90 planetary system"</regards:label>
    <regards:ipId>"URN:AIP:DATASET:opensearch:c746cdfa-4ab1-4834-8858-e998896a713a:V1"</regards:ipId>
    <regards:sipId>"Kepler 90 planetary system"</regards:sipId>
    <regards:tags>["REGARDS","CS-SI","CNES"]</regards:tags>
    <regards:type>"Feature"</regards:type>
    <regards:startSystem>"Kepler 90 planetary system"</regards:startSystem>
  </entry>
  <entry>
    <title>Kepler 90b</title>
    <link rel="alternate" type="application/atom+xml" href="http://localhost:8080/engines/opensearch/dataobjects/URN:AIP:DATA:opensearch:00000000-0000-0000-0000-001571404338:V1?token=eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJkZWZhdWx0X3VzZXJAcmVnYXJkcy5mciIsInJvbGUiOiJST0xFX0RFRkFVTFQiLCJ0ZW5hbnQiOiJvcGVuc2VhcmNoIiwiZW1haWwiOiJkZWZhdWx0X3VzZXJAcmVnYXJkcy5mciIsImV4cCI6MTYzMTgyNDkzNn0.mG96mzwhvImSgpzCUyw3n8ELTeB3SuZF6e-L1rPQCf95d9CEngg_vg2g8AgMbkRDqupJgbjW4_OwXInIY_0Hrw" title="ATOM link for URN:AIP:DATA:opensearch:00000000-0000-0000-0000-001571404338:V1"/>
    <id>URN:AIP:DATA:opensearch:00000000-0000-0000-0000-001571404338:V1</id>
    <updated>1970-01-19T21:16:57Z</updated>
    <gml:ValidTime>
      <gml:TimePeriod>
        <gml:beginPosition>"2021-09-16T18:41:50.746Z"</gml:beginPosition>
        <gml:endPosition>"2021-09-16T18:41:50.746Z"</gml:endPosition>
      </gml:TimePeriod>
    </gml:ValidTime>
    <regards:label>"Kepler 90b"</regards:label>
    <regards:ipId>"URN:AIP:DATA:opensearch:00000000-0000-0000-0000-001571404338:V1"</regards:ipId>
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
  <entry>
    <title>data_one</title>
    <link rel="alternate" type="application/atom+xml" href="http://localhost:8080/engines/opensearch/dataobjects/URN:AIP:DATA:opensearch:00000000-0000-0000-0000-000490204874:V1?token=eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJkZWZhdWx0X3VzZXJAcmVnYXJkcy5mciIsInJvbGUiOiJST0xFX0RFRkFVTFQiLCJ0ZW5hbnQiOiJvcGVuc2VhcmNoIiwiZW1haWwiOiJkZWZhdWx0X3VzZXJAcmVnYXJkcy5mciIsImV4cCI6MTYzMTgyNDkzNn0.mG96mzwhvImSgpzCUyw3n8ELTeB3SuZF6e-L1rPQCf95d9CEngg_vg2g8AgMbkRDqupJgbjW4_OwXInIY_0Hrw" title="ATOM link for URN:AIP:DATA:opensearch:00000000-0000-0000-0000-000490204874:V1"/>
    <id>URN:AIP:DATA:opensearch:00000000-0000-0000-0000-000490204874:V1</id>
    <regards:label>"data_one"</regards:label>
    <regards:ipId>"URN:AIP:DATA:opensearch:00000000-0000-0000-0000-000490204874:V1"</regards:ipId>
    <regards:sipId>"data_one"</regards:sipId>
    <regards:tags>[]</regards:tags>
    <regards:type>"Feature"</regards:type>
    <regards:name_test>"data_one_test"</regards:name_test>
  </entry>
</feed>

```
