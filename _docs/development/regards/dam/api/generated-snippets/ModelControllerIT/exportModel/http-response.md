#### Request

* **Code:** 200 OK

        **Headers:**

        `Content-Disposition:attachment; filename="model-EXPORT_MODEL.xml"`
        `Content-Type:application/xml`
        `Pragma:no-cache`
        `X-XSS-Protection:1; mode=block`
        `X-Frame-Options:DENY`
        `Expires:0`
        `X-Content-Type-Options:nosniff`
        `Access-Control-Allow-Headers:authorization, content-type, scope`
        `Access-Control-Max-Age:3600`
        `Access-Control-Allow-Origin:*`
        `Cache-Control:no-cache, no-store, max-age=0, must-revalidate`
        `Access-Control-Allow-Methods:POST, PUT, GET, OPTIONS, DELETE`

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
