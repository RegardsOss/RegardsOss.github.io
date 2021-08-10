#### Request

* **Code:** 200 OK

        **Headers:**

        `Pragma:no-cache`
        `X-XSS-Protection:1; mode=block`
        `X-Frame-Options:DENY`
        `Expires:0`
        `X-Content-Type-Options:nosniff`
        `Access-Control-Allow-Headers:authorization, content-type, scope`
        `Content-Disposition:attachment; filename="fragment-default.xml"`
        `Access-Control-Max-Age:3600`
        `Access-Control-Allow-Origin:*`
        `Cache-Control:no-cache, no-store, max-age=0, must-revalidate`
        `Access-Control-Allow-Methods:POST, PUT, GET, OPTIONS, DELETE`
        `Content-Type:application/octet-stream`

        **Content:**

```json
    
<?xml version="1.0" encoding="UTF-8"?>
<fragment>
    <name>default</name>
    <description>Default fragment</description>
    <attribute alterable="false" optional="false">
        <label>ForTests</label>
        <name>VFIRST</name>
        <type>BOOLEAN</type>
    </attribute>
</fragment>

```
