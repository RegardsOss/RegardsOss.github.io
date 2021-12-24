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
  <link rel="alternate" type="application/opensearchdescription+xml" href="http://localhost:8080/engines/opensearch/dataobjects/search/opensearchdescription.xml?page=1&amp;maxRecords=10&amp;properties.planet=Mercury"/>
  <author>
    <name>Plop</name>
    <email>regards@c-s.fr</email>
  </author>
  <subtitle type="text">desc</subtitle>
  <id>22800b8d-abda-4680-b9bf-a1ee853fb455</id>
  <updated>2021-09-16T00:00:00Z</updated>
  <opensearch:itemsPerPage>10</opensearch:itemsPerPage>
  <opensearch:totalResults>1</opensearch:totalResults>
  <opensearch:startIndex>1</opensearch:startIndex>
  <opensearch:Query role="results" startPage="1"/>
  <opensearch:link rel="search" type="application/opensearchdescription+xml" href="http://localhost:8080/engines/opensearch/dataobjects/search/opensearchdescription.xml?page=1&amp;maxRecords=10&amp;properties.planet=Mercury"/>
  <entry>
    <title>Mercury</title>
    <link rel="icon" href="http://regards/le_quicklook_hd.jpg?token=eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJkZWZhdWx0X3VzZXJAcmVnYXJkcy5mciIsInJvbGUiOiJST0xFX0RFRkFVTFQiLCJ0ZW5hbnQiOiJvcGVuc2VhcmNoIiwiZW1haWwiOiJkZWZhdWx0X3VzZXJAcmVnYXJkcy5mciIsImV4cCI6MTYzMTgyNDkzOH0.oxQagZZBU5kzgpapf7oAUoA13x7prDzB-trHbnbR1btLgJP-AoSBQAyqNxcQiilE3NioSQSY_tFz1vwBqm4bTQ"/>
    <link rel="icon" href="http://regards/le_quicklook_sd.jpg?token=eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJkZWZhdWx0X3VzZXJAcmVnYXJkcy5mciIsInJvbGUiOiJST0xFX0RFRkFVTFQiLCJ0ZW5hbnQiOiJvcGVuc2VhcmNoIiwiZW1haWwiOiJkZWZhdWx0X3VzZXJAcmVnYXJkcy5mciIsImV4cCI6MTYzMTgyNDkzOH0.oxQagZZBU5kzgpapf7oAUoA13x7prDzB-trHbnbR1btLgJP-AoSBQAyqNxcQiilE3NioSQSY_tFz1vwBqm4bTQ"/>
    <link rel="icon" href="http://regards/le_quicklook_md.jpg?token=eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJkZWZhdWx0X3VzZXJAcmVnYXJkcy5mciIsInJvbGUiOiJST0xFX0RFRkFVTFQiLCJ0ZW5hbnQiOiJvcGVuc2VhcmNoIiwiZW1haWwiOiJkZWZhdWx0X3VzZXJAcmVnYXJkcy5mciIsImV4cCI6MTYzMTgyNDkzOH0.oxQagZZBU5kzgpapf7oAUoA13x7prDzB-trHbnbR1btLgJP-AoSBQAyqNxcQiilE3NioSQSY_tFz1vwBqm4bTQ"/>
    <link rel="enclosure" href="http://regards/test.nc?token=eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJkZWZhdWx0X3VzZXJAcmVnYXJkcy5mciIsInJvbGUiOiJST0xFX0RFRkFVTFQiLCJ0ZW5hbnQiOiJvcGVuc2VhcmNoIiwiZW1haWwiOiJkZWZhdWx0X3VzZXJAcmVnYXJkcy5mciIsImV4cCI6MTYzMTgyNDkzOH0.oxQagZZBU5kzgpapf7oAUoA13x7prDzB-trHbnbR1btLgJP-AoSBQAyqNxcQiilE3NioSQSY_tFz1vwBqm4bTQ"/>
    <link rel="icon" href="http://regards/thumbnail.png?token=eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJkZWZhdWx0X3VzZXJAcmVnYXJkcy5mciIsInJvbGUiOiJST0xFX0RFRkFVTFQiLCJ0ZW5hbnQiOiJvcGVuc2VhcmNoIiwiZW1haWwiOiJkZWZhdWx0X3VzZXJAcmVnYXJkcy5mciIsImV4cCI6MTYzMTgyNDkzOH0.oxQagZZBU5kzgpapf7oAUoA13x7prDzB-trHbnbR1btLgJP-AoSBQAyqNxcQiilE3NioSQSY_tFz1vwBqm4bTQ"/>
    <link rel="alternate" type="application/atom+xml" href="http://localhost:8080/engines/opensearch/dataobjects/URN:AIP:DATA:opensearch:00000000-0000-0000-0000-000156901464:V1?token=eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJkZWZhdWx0X3VzZXJAcmVnYXJkcy5mciIsInJvbGUiOiJST0xFX0RFRkFVTFQiLCJ0ZW5hbnQiOiJvcGVuc2VhcmNoIiwiZW1haWwiOiJkZWZhdWx0X3VzZXJAcmVnYXJkcy5mciIsImV4cCI6MTYzMTgyNDkzOH0.oxQagZZBU5kzgpapf7oAUoA13x7prDzB-trHbnbR1btLgJP-AoSBQAyqNxcQiilE3NioSQSY_tFz1vwBqm4bTQ" title="ATOM link for URN:AIP:DATA:opensearch:00000000-0000-0000-0000-000156901464:V1"/>
    <id>URN:AIP:DATA:opensearch:00000000-0000-0000-0000-000156901464:V1</id>
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
      <media:content medium="image" height="100" type="application/jpg" width="100" url="http://regards/le_quicklook_sd.jpg?token=eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJkZWZhdWx0X3VzZXJAcmVnYXJkcy5mciIsInJvbGUiOiJST0xFX0RFRkFVTFQiLCJ0ZW5hbnQiOiJvcGVuc2VhcmNoIiwiZW1haWwiOiJkZWZhdWx0X3VzZXJAcmVnYXJkcy5mciIsImV4cCI6MTYzMTgyNDkzOH0.oxQagZZBU5kzgpapf7oAUoA13x7prDzB-trHbnbR1btLgJP-AoSBQAyqNxcQiilE3NioSQSY_tFz1vwBqm4bTQ">
        <media:category scheme="http://www.opengis.net/spec/EOMPOM/1.0">QUICKLOOK</media:category>
      </media:content>
      <media:content medium="image" height="250" type="application/png" width="250" url="http://regards/thumbnail.png?token=eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJkZWZhdWx0X3VzZXJAcmVnYXJkcy5mciIsInJvbGUiOiJST0xFX0RFRkFVTFQiLCJ0ZW5hbnQiOiJvcGVuc2VhcmNoIiwiZW1haWwiOiJkZWZhdWx0X3VzZXJAcmVnYXJkcy5mciIsImV4cCI6MTYzMTgyNDkzOH0.oxQagZZBU5kzgpapf7oAUoA13x7prDzB-trHbnbR1btLgJP-AoSBQAyqNxcQiilE3NioSQSY_tFz1vwBqm4bTQ">
        <media:category scheme="http://www.opengis.net/spec/EOMPOM/1.0">THUMBNAIL</media:category>
      </media:content>
    </media:group>
    <regards:label>"Mercury"</regards:label>
    <regards:ipId>"URN:AIP:DATA:opensearch:00000000-0000-0000-0000-000156901464:V1"</regards:ipId>
    <regards:sipId>"Mercury"</regards:sipId>
    <regards:tags>["URN:AIP:DATASET:opensearch:139dc1a9-1b4e-41c2-8be2-4033624f3531:V1"]</regards:tags>
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
</feed>

```
