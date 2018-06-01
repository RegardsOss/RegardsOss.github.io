* **Code:** 200 OK

  **Headers:**

  `X-Content-Type-Options: nosniff`
  `X-XSS-Protection: 1; mode=block`
  `Cache-Control: no-cache, no-store, max-age=0, must-revalidate`
  `Pragma: no-cache`
  `Expires: 0`
  `X-Frame-Options: DENY`
  `Access-Control-Allow-Origin: *`
  `Access-Control-Allow-Methods: POST, PUT, GET, OPTIONS, DELETE`
  `Access-Control-Allow-Headers: authorization, content-type, scope`
  `Access-Control-Max-Age: 3600`
  `X-Application-Context: Test application:default,test:-1`
  `Content-Type: application/octet-stream`
  `Content-Disposition: attachment; filename="fragment-default.xml"`

  **Content:**

```json

<?xml version="1.0" encoding="UTF-8"?>
<fragment>
    <name>default</name>
    <description>Default fragment</description>
    <attribute alterable="false" optional="false">
        <label>ForTests</label>
        <name>FIRST</name>
        <type>BOOLEAN</type>
    </attribute>
</fragment>

```
