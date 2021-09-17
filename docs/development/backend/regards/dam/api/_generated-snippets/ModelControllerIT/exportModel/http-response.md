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
`Content-Disposition:attachment; filename="model-EXPORT_MODEL.xml"`  

**Content:**

```json
    
<?xml version="1.0" encoding="UTF-8"?>
<model>
    <name>EXPORT_MODEL</name>
    <description>Exported model</description>
    <type>COLLECTION</type>
    <attribute alterable="false" optional="false">
        <label>ForTests</label>
        <name>att_string</name>
        <type>STRING</type>
    </attribute>
    <attribute alterable="true" optional="false">
        <label>ForTests</label>
        <name>att_boolean</name>
        <type>BOOLEAN</type>
    </attribute>
    <fragment>
        <name>GEO</name>
        <description>Geographic information</description>
        <attribute alterable="false" optional="false">
            <label>ForTests</label>
            <name>CRS</name>
            <type>STRING</type>
            <restriction>
                <enumeration>
                    <value>Earth</value>
                    <value>Mars</value>
                    <value>Venus</value>
                </enumeration>
            </restriction>
        </attribute>
    </fragment>
    <fragment>
        <name>Contact</name>
        <description>Contact information</description>
        <attribute alterable="false" optional="false">
            <label>ForTests</label>
            <name>Phone</name>
            <type>STRING</type>
            <restriction>
                <pattern>[0-9 ]{10}</pattern>
            </restriction>
        </attribute>
    </fragment>
</model>

```
