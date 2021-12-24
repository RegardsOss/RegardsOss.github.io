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
    <Description>desc</Description>
    <Contact>regards@c-s.fr</Contact>
    <Image>http://plop/image.png</Image>
    <Url template="http://localhost:8080/engines/opensearch/dataobjects/search?q={searchTerms}&amp;params={regards:params}&amp;debut={time:start}&amp;diameter={regards:diameter}&amp;name_test={regards:name_test}&amp;planet={regards:planet}&amp;fin={time:end}&amp;sun_distance={regards:sun_distance}&amp;planet_type={regards:planet_type}&amp;feature.properties.origine.name={regards:feature.properties.origine.name}&amp;feature.properties.origine.link={regards:feature.properties.origine.link}&amp;feature.properties.origine.contacts.name={regards:feature.properties.origine.contacts.name}&amp;feature.properties.origine.contacts.locations.institut={regards:feature.properties.origine.contacts.locations.institut}&amp;feature.properties.origine.contacts.locations.code={regards:feature.properties.origine.contacts.locations.code}&amp;geometry={geo:geometry}&amp;box={geo:box}&amp;lon={geo:lon}&amp;lat={geo:lat}&amp;radius={geo:radius}&amp;maxRecords={count}&amp;page={startPage}&amp;scope=opensearch" type="application/atom+xml" rel="results">
        <parameters:Parameter name="q" value="{searchTerms}" title="Free text search"/>
        <parameters:Parameter name="params" value="{regards:params}" minimum="0" maximum="1" title="List of planet parameters"/>
        <parameters:Parameter name="debut" value="{time:start}" minimum="0" maximum="1" title="Date et temps début" minInclusive="2021-09-16T18:41:50.746Z" maxInclusive="2021-09-16T18:41:50.746Z"/>
        <parameters:Parameter name="diameter" value="{regards:diameter}" minimum="0" maximum="1" minInclusive="1000.0" maxInclusive="143000.0"/>
        <parameters:Parameter name="name_test" value="{regards:name_test}" minimum="0" maximum="1"/>
        <parameters:Parameter name="planet" value="{regards:planet}" minimum="0" maximum="1">
            <parameters:Option value="Earth"/>
            <parameters:Option value="Jupiter"/>
            <parameters:Option value="Kepler 90b"/>
            <parameters:Option value="Mars"/>
            <parameters:Option value="Mercury"/>
            <parameters:Option value="Neptune"/>
            <parameters:Option value="Saturn"/>
            <parameters:Option value="Uranus"/>
            <parameters:Option value="Venus"/>
        </parameters:Parameter>
        <parameters:Parameter name="fin" value="{time:end}" minimum="0" maximum="1" title="Date et temps fin" minInclusive="2024-09-16T18:41:50.747Z" maxInclusive="2024-09-16T18:41:50.747Z"/>
        <parameters:Parameter name="sun_distance" value="{regards:sun_distance}" minimum="0" maximum="1" minInclusive="5.0E7" maxInclusive="4.48943598E9"/>
        <parameters:Parameter name="planet_type" value="{regards:planet_type}" minimum="0" maximum="1"/>
        <parameters:Parameter name="feature.properties.origine.name" value="{regards:feature.properties.origine.name}" minimum="0" maximum="1"/>
        <parameters:Parameter name="feature.properties.origine.link" value="{regards:feature.properties.origine.link}" minimum="0" maximum="1"/>
        <parameters:Parameter name="feature.properties.origine.contacts.name" value="{regards:feature.properties.origine.contacts.name}" minimum="0" maximum="1"/>
        <parameters:Parameter name="feature.properties.origine.contacts.locations.institut" value="{regards:feature.properties.origine.contacts.locations.institut}" minimum="0" maximum="1"/>
        <parameters:Parameter name="feature.properties.origine.contacts.locations.code" value="{regards:feature.properties.origine.contacts.locations.code}" minimum="0" maximum="1" minInclusive="1.0" maxInclusive="156.0"/>
        <parameters:Parameter name="geometry" value="{geo:geometry}" title="Defined in Well Known Text standard (WKT) with coordinates in decimal degrees (EPSG:4326)"/>
        <parameters:Parameter name="box" value="{geo:box}" pattern="^[0-9\.\,\-]*$" title="Defined by 'west, south, east, north' coordinates of longitude, latitude, in decimal degrees (EPSG:4326)"/>
        <parameters:Parameter name="lon" value="{geo:lon}" title="Longitude expressed in decimal degrees (EPSG:4326) - should be used with geo:lat" minInclusive="-180" maxInclusive="180"/>
        <parameters:Parameter name="lat" value="{geo:lat}" title="Latitude expressed in decimal degrees (EPSG:4326) - should be used with geo:lon" minInclusive="-90" maxInclusive="90"/>
        <parameters:Parameter name="radius" value="{geo:radius}" title="Latitude expressed in decimal degrees (EPSG:4326) - should be used with geo:lon" minInclusive="1"/>
        <parameters:Parameter name="maxRecords" value="{count}" title="Number of results returned per page (default 20, max 1000)" minInclusive="1" maxInclusive="1000"/>
        <parameters:Parameter name="page" value="{startPage}" title="Results page to return" minInclusive="0"/>
    </Url>
    <Url template="http://localhost:8080/engines/opensearch/dataobjects/search?q={searchTerms}&amp;params={regards:params}&amp;debut={time:start}&amp;diameter={regards:diameter}&amp;name_test={regards:name_test}&amp;planet={regards:planet}&amp;fin={time:end}&amp;sun_distance={regards:sun_distance}&amp;planet_type={regards:planet_type}&amp;feature.properties.origine.name={regards:feature.properties.origine.name}&amp;feature.properties.origine.link={regards:feature.properties.origine.link}&amp;feature.properties.origine.contacts.name={regards:feature.properties.origine.contacts.name}&amp;feature.properties.origine.contacts.locations.institut={regards:feature.properties.origine.contacts.locations.institut}&amp;feature.properties.origine.contacts.locations.code={regards:feature.properties.origine.contacts.locations.code}&amp;geometry={geo:geometry}&amp;box={geo:box}&amp;lon={geo:lon}&amp;lat={geo:lat}&amp;radius={geo:radius}&amp;maxRecords={count}&amp;page={startPage}&amp;scope=opensearch" type="application/geo+json" rel="results">
        <parameters:Parameter name="q" value="{searchTerms}" title="Free text search"/>
        <parameters:Parameter name="params" value="{regards:params}" minimum="0" maximum="1" title="List of planet parameters"/>
        <parameters:Parameter name="debut" value="{time:start}" minimum="0" maximum="1" title="Date et temps début" minInclusive="2021-09-16T18:41:50.746Z" maxInclusive="2021-09-16T18:41:50.746Z"/>
        <parameters:Parameter name="diameter" value="{regards:diameter}" minimum="0" maximum="1" minInclusive="1000.0" maxInclusive="143000.0"/>
        <parameters:Parameter name="name_test" value="{regards:name_test}" minimum="0" maximum="1"/>
        <parameters:Parameter name="planet" value="{regards:planet}" minimum="0" maximum="1">
            <parameters:Option value="Earth"/>
            <parameters:Option value="Jupiter"/>
            <parameters:Option value="Kepler 90b"/>
            <parameters:Option value="Mars"/>
            <parameters:Option value="Mercury"/>
            <parameters:Option value="Neptune"/>
            <parameters:Option value="Saturn"/>
            <parameters:Option value="Uranus"/>
            <parameters:Option value="Venus"/>
        </parameters:Parameter>
        <parameters:Parameter name="fin" value="{time:end}" minimum="0" maximum="1" title="Date et temps fin" minInclusive="2024-09-16T18:41:50.747Z" maxInclusive="2024-09-16T18:41:50.747Z"/>
        <parameters:Parameter name="sun_distance" value="{regards:sun_distance}" minimum="0" maximum="1" minInclusive="5.0E7" maxInclusive="4.48943598E9"/>
        <parameters:Parameter name="planet_type" value="{regards:planet_type}" minimum="0" maximum="1"/>
        <parameters:Parameter name="feature.properties.origine.name" value="{regards:feature.properties.origine.name}" minimum="0" maximum="1"/>
        <parameters:Parameter name="feature.properties.origine.link" value="{regards:feature.properties.origine.link}" minimum="0" maximum="1"/>
        <parameters:Parameter name="feature.properties.origine.contacts.name" value="{regards:feature.properties.origine.contacts.name}" minimum="0" maximum="1"/>
        <parameters:Parameter name="feature.properties.origine.contacts.locations.institut" value="{regards:feature.properties.origine.contacts.locations.institut}" minimum="0" maximum="1"/>
        <parameters:Parameter name="feature.properties.origine.contacts.locations.code" value="{regards:feature.properties.origine.contacts.locations.code}" minimum="0" maximum="1" minInclusive="1.0" maxInclusive="156.0"/>
        <parameters:Parameter name="geometry" value="{geo:geometry}" title="Defined in Well Known Text standard (WKT) with coordinates in decimal degrees (EPSG:4326)"/>
        <parameters:Parameter name="box" value="{geo:box}" pattern="^[0-9\.\,\-]*$" title="Defined by 'west, south, east, north' coordinates of longitude, latitude, in decimal degrees (EPSG:4326)"/>
        <parameters:Parameter name="lon" value="{geo:lon}" title="Longitude expressed in decimal degrees (EPSG:4326) - should be used with geo:lat" minInclusive="-180" maxInclusive="180"/>
        <parameters:Parameter name="lat" value="{geo:lat}" title="Latitude expressed in decimal degrees (EPSG:4326) - should be used with geo:lon" minInclusive="-90" maxInclusive="90"/>
        <parameters:Parameter name="radius" value="{geo:radius}" title="Latitude expressed in decimal degrees (EPSG:4326) - should be used with geo:lon" minInclusive="1"/>
        <parameters:Parameter name="maxRecords" value="{count}" title="Number of results returned per page (default 20, max 1000)" minInclusive="1" maxInclusive="1000"/>
        <parameters:Parameter name="page" value="{startPage}" title="Results page to return" minInclusive="0"/>
    </Url>
    <Url template="http://localhost:8080/engines/opensearch/dataobjects/search?q={searchTerms}&amp;params={regards:params}&amp;debut={time:start}&amp;diameter={regards:diameter}&amp;name_test={regards:name_test}&amp;planet={regards:planet}&amp;fin={time:end}&amp;sun_distance={regards:sun_distance}&amp;planet_type={regards:planet_type}&amp;feature.properties.origine.name={regards:feature.properties.origine.name}&amp;feature.properties.origine.link={regards:feature.properties.origine.link}&amp;feature.properties.origine.contacts.name={regards:feature.properties.origine.contacts.name}&amp;feature.properties.origine.contacts.locations.institut={regards:feature.properties.origine.contacts.locations.institut}&amp;feature.properties.origine.contacts.locations.code={regards:feature.properties.origine.contacts.locations.code}&amp;geometry={geo:geometry}&amp;box={geo:box}&amp;lon={geo:lon}&amp;lat={geo:lat}&amp;radius={geo:radius}&amp;maxRecords={count}&amp;page={startPage}&amp;scope=opensearch" type="application/json" rel="results">
        <parameters:Parameter name="q" value="{searchTerms}" title="Free text search"/>
        <parameters:Parameter name="params" value="{regards:params}" minimum="0" maximum="1" title="List of planet parameters"/>
        <parameters:Parameter name="debut" value="{time:start}" minimum="0" maximum="1" title="Date et temps début" minInclusive="2021-09-16T18:41:50.746Z" maxInclusive="2021-09-16T18:41:50.746Z"/>
        <parameters:Parameter name="diameter" value="{regards:diameter}" minimum="0" maximum="1" minInclusive="1000.0" maxInclusive="143000.0"/>
        <parameters:Parameter name="name_test" value="{regards:name_test}" minimum="0" maximum="1"/>
        <parameters:Parameter name="planet" value="{regards:planet}" minimum="0" maximum="1">
            <parameters:Option value="Earth"/>
            <parameters:Option value="Jupiter"/>
            <parameters:Option value="Kepler 90b"/>
            <parameters:Option value="Mars"/>
            <parameters:Option value="Mercury"/>
            <parameters:Option value="Neptune"/>
            <parameters:Option value="Saturn"/>
            <parameters:Option value="Uranus"/>
            <parameters:Option value="Venus"/>
        </parameters:Parameter>
        <parameters:Parameter name="fin" value="{time:end}" minimum="0" maximum="1" title="Date et temps fin" minInclusive="2024-09-16T18:41:50.747Z" maxInclusive="2024-09-16T18:41:50.747Z"/>
        <parameters:Parameter name="sun_distance" value="{regards:sun_distance}" minimum="0" maximum="1" minInclusive="5.0E7" maxInclusive="4.48943598E9"/>
        <parameters:Parameter name="planet_type" value="{regards:planet_type}" minimum="0" maximum="1"/>
        <parameters:Parameter name="feature.properties.origine.name" value="{regards:feature.properties.origine.name}" minimum="0" maximum="1"/>
        <parameters:Parameter name="feature.properties.origine.link" value="{regards:feature.properties.origine.link}" minimum="0" maximum="1"/>
        <parameters:Parameter name="feature.properties.origine.contacts.name" value="{regards:feature.properties.origine.contacts.name}" minimum="0" maximum="1"/>
        <parameters:Parameter name="feature.properties.origine.contacts.locations.institut" value="{regards:feature.properties.origine.contacts.locations.institut}" minimum="0" maximum="1"/>
        <parameters:Parameter name="feature.properties.origine.contacts.locations.code" value="{regards:feature.properties.origine.contacts.locations.code}" minimum="0" maximum="1" minInclusive="1.0" maxInclusive="156.0"/>
        <parameters:Parameter name="geometry" value="{geo:geometry}" title="Defined in Well Known Text standard (WKT) with coordinates in decimal degrees (EPSG:4326)"/>
        <parameters:Parameter name="box" value="{geo:box}" pattern="^[0-9\.\,\-]*$" title="Defined by 'west, south, east, north' coordinates of longitude, latitude, in decimal degrees (EPSG:4326)"/>
        <parameters:Parameter name="lon" value="{geo:lon}" title="Longitude expressed in decimal degrees (EPSG:4326) - should be used with geo:lat" minInclusive="-180" maxInclusive="180"/>
        <parameters:Parameter name="lat" value="{geo:lat}" title="Latitude expressed in decimal degrees (EPSG:4326) - should be used with geo:lon" minInclusive="-90" maxInclusive="90"/>
        <parameters:Parameter name="radius" value="{geo:radius}" title="Latitude expressed in decimal degrees (EPSG:4326) - should be used with geo:lon" minInclusive="1"/>
        <parameters:Parameter name="maxRecords" value="{count}" title="Number of results returned per page (default 20, max 1000)" minInclusive="1" maxInclusive="1000"/>
        <parameters:Parameter name="page" value="{startPage}" title="Results page to return" minInclusive="0"/>
    </Url>
    <Query role="example" searchTerms="feature.properties.params:{string} OR properties.params:{string} AND feature.properties.TimePeriod.startDate:{ISO-8601 date} AND feature.properties.diameter:{integer value} AND feature.properties.name_test:{string} AND feature.properties.planet:{string} AND feature.properties.TimePeriod.stopDate:{ISO-8601 date} AND feature.properties.sun_distance:{long value} AND feature.properties.planet_type:{string} AND feature.properties.origine.name:{string} AND feature.properties.origine.link:{url} AND feature.properties.origine.contacts.name:{string} AND feature.properties.origine.contacts.locations.institut:{string} AND feature.properties.origine.contacts.locations.code:{integer value}"/>
    <Developer>http://www.c-s.fr CS-SI Team</Developer>
    <Attribution>Plop</Attribution>
    <AdultContent>false</AdultContent>
    <Language>en</Language>
    <InputEncoding>UTF-8</InputEncoding>
    <OutputEncoding>UTF-8</OutputEncoding>
</OpenSearchDescription>

```
