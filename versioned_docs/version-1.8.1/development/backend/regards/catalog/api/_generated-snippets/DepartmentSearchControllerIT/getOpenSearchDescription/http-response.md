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
`Content-Type:application/xml`  

**Content:**

```json
    
<?xml version="1.0" encoding="UTF-8"?>
<OpenSearchDescription xmlns:parameters="http://a9.com/-/spec/opensearch/extensions/parameters/1.0/" xmlns="http://a9.com/-/spec/opensearch/1.1/">
    <ShortName>France</ShortName>
    <Description>France</Description>
    <Tags/>
    <Contact>regards@c-s.fr</Contact>
    <LongName>France</LongName>
    <Url template="http://localhost:8080/engines/opensearch/datasets/URN:AIP:DATASET:departments:5992ba74-a149-4c16-a299-522335c31c43:V1/dataobjects/search?q={searchTerms}&amp;Name={regards:Name}&amp;Code={regards:Code}&amp;FileSize={regards:FileSize}&amp;geometry={geo:geometry}&amp;box={geo:box}&amp;lon={geo:lon}&amp;lat={geo:lat}&amp;radius={geo:radius}&amp;maxRecords={count}&amp;page={startPage}&amp;scope=departments" type="application/atom+xml" rel="results">
        <parameters:Parameter name="q" value="{searchTerms}" title="Free text search"/>
        <parameters:Parameter name="Name" value="{regards:Name}" minimum="0" maximum="1" title="Name"/>
        <parameters:Parameter name="Code" value="{regards:Code}" minimum="0" maximum="1" title="Code"/>
        <parameters:Parameter name="FileSize" value="{regards:FileSize}" minimum="0" maximum="1" title="File size" minInclusive="-8.8891893484332943E18" maxInclusive="8.920779807651371E18"/>
        <parameters:Parameter name="geometry" value="{geo:geometry}" title="Defined in Well Known Text standard (WKT) with coordinates in decimal degrees (EPSG:4326)"/>
        <parameters:Parameter name="box" value="{geo:box}" pattern="^[0-9\.\,\-]*$" title="Defined by 'west, south, east, north' coordinates of longitude, latitude, in decimal degrees (EPSG:4326)"/>
        <parameters:Parameter name="lon" value="{geo:lon}" title="Longitude expressed in decimal degrees (EPSG:4326) - should be used with geo:lat" minInclusive="-180" maxInclusive="180"/>
        <parameters:Parameter name="lat" value="{geo:lat}" title="Latitude expressed in decimal degrees (EPSG:4326) - should be used with geo:lon" minInclusive="-90" maxInclusive="90"/>
        <parameters:Parameter name="radius" value="{geo:radius}" title="Latitude expressed in decimal degrees (EPSG:4326) - should be used with geo:lon" minInclusive="1"/>
        <parameters:Parameter name="maxRecords" value="{count}" title="Number of results returned per page (default 20, max 1000)" minInclusive="1" maxInclusive="1000"/>
        <parameters:Parameter name="page" value="{startPage}" title="Results page to return" minInclusive="0"/>
    </Url>
    <Url template="http://localhost:8080/engines/opensearch/datasets/URN:AIP:DATASET:departments:5992ba74-a149-4c16-a299-522335c31c43:V1/dataobjects/search?q={searchTerms}&amp;Name={regards:Name}&amp;Code={regards:Code}&amp;FileSize={regards:FileSize}&amp;geometry={geo:geometry}&amp;box={geo:box}&amp;lon={geo:lon}&amp;lat={geo:lat}&amp;radius={geo:radius}&amp;maxRecords={count}&amp;page={startPage}&amp;scope=departments" type="application/geo+json" rel="results">
        <parameters:Parameter name="q" value="{searchTerms}" title="Free text search"/>
        <parameters:Parameter name="Name" value="{regards:Name}" minimum="0" maximum="1" title="Name"/>
        <parameters:Parameter name="Code" value="{regards:Code}" minimum="0" maximum="1" title="Code"/>
        <parameters:Parameter name="FileSize" value="{regards:FileSize}" minimum="0" maximum="1" title="File size" minInclusive="-8.8891893484332943E18" maxInclusive="8.920779807651371E18"/>
        <parameters:Parameter name="geometry" value="{geo:geometry}" title="Defined in Well Known Text standard (WKT) with coordinates in decimal degrees (EPSG:4326)"/>
        <parameters:Parameter name="box" value="{geo:box}" pattern="^[0-9\.\,\-]*$" title="Defined by 'west, south, east, north' coordinates of longitude, latitude, in decimal degrees (EPSG:4326)"/>
        <parameters:Parameter name="lon" value="{geo:lon}" title="Longitude expressed in decimal degrees (EPSG:4326) - should be used with geo:lat" minInclusive="-180" maxInclusive="180"/>
        <parameters:Parameter name="lat" value="{geo:lat}" title="Latitude expressed in decimal degrees (EPSG:4326) - should be used with geo:lon" minInclusive="-90" maxInclusive="90"/>
        <parameters:Parameter name="radius" value="{geo:radius}" title="Latitude expressed in decimal degrees (EPSG:4326) - should be used with geo:lon" minInclusive="1"/>
        <parameters:Parameter name="maxRecords" value="{count}" title="Number of results returned per page (default 20, max 1000)" minInclusive="1" maxInclusive="1000"/>
        <parameters:Parameter name="page" value="{startPage}" title="Results page to return" minInclusive="0"/>
    </Url>
    <Url template="http://localhost:8080/engines/opensearch/datasets/URN:AIP:DATASET:departments:5992ba74-a149-4c16-a299-522335c31c43:V1/dataobjects/search?q={searchTerms}&amp;Name={regards:Name}&amp;Code={regards:Code}&amp;FileSize={regards:FileSize}&amp;geometry={geo:geometry}&amp;box={geo:box}&amp;lon={geo:lon}&amp;lat={geo:lat}&amp;radius={geo:radius}&amp;maxRecords={count}&amp;page={startPage}&amp;scope=departments" type="application/json" rel="results">
        <parameters:Parameter name="q" value="{searchTerms}" title="Free text search"/>
        <parameters:Parameter name="Name" value="{regards:Name}" minimum="0" maximum="1" title="Name"/>
        <parameters:Parameter name="Code" value="{regards:Code}" minimum="0" maximum="1" title="Code"/>
        <parameters:Parameter name="FileSize" value="{regards:FileSize}" minimum="0" maximum="1" title="File size" minInclusive="-8.8891893484332943E18" maxInclusive="8.920779807651371E18"/>
        <parameters:Parameter name="geometry" value="{geo:geometry}" title="Defined in Well Known Text standard (WKT) with coordinates in decimal degrees (EPSG:4326)"/>
        <parameters:Parameter name="box" value="{geo:box}" pattern="^[0-9\.\,\-]*$" title="Defined by 'west, south, east, north' coordinates of longitude, latitude, in decimal degrees (EPSG:4326)"/>
        <parameters:Parameter name="lon" value="{geo:lon}" title="Longitude expressed in decimal degrees (EPSG:4326) - should be used with geo:lat" minInclusive="-180" maxInclusive="180"/>
        <parameters:Parameter name="lat" value="{geo:lat}" title="Latitude expressed in decimal degrees (EPSG:4326) - should be used with geo:lon" minInclusive="-90" maxInclusive="90"/>
        <parameters:Parameter name="radius" value="{geo:radius}" title="Latitude expressed in decimal degrees (EPSG:4326) - should be used with geo:lon" minInclusive="1"/>
        <parameters:Parameter name="maxRecords" value="{count}" title="Number of results returned per page (default 20, max 1000)" minInclusive="1" maxInclusive="1000"/>
        <parameters:Parameter name="page" value="{startPage}" title="Results page to return" minInclusive="0"/>
    </Url>
    <Query role="example" searchTerms="feature.properties.Name:{string} AND feature.properties.Code:{string} AND feature.properties.FileSize:{long value}"/>
    <Developer>http://www.c-s.fr CS-SI Team</Developer>
    <AdultContent>false</AdultContent>
    <Language>en</Language>
    <InputEncoding>UTF-8</InputEncoding>
    <OutputEncoding>UTF-8</OutputEncoding>
</OpenSearchDescription>

```
