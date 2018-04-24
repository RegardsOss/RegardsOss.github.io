* **URL**:

  `/aips/dataFiles`

* **Method:**

  `POST`

* **Headers**:

  `Authorization: Bearer {token}`
  `Content-Type: application/json;charset=UTF-8`
  `Accept: application/json`

* **URL Params**

  {% for urlParam in test.urlParams %}
  `{{urlParam.name}}: {{urlParam.description}}`  
  {% else %}
  None.  
  {% endfor %}

* **Query Params**

  {% for queryParam in test.queryParams %}
  `{{queryParam.name}}: {{queryParam.description}}`  
  {% else %}
  None.  
  {% endfor %}

* **Data Params**

  **Required:**

```json
  
{
  "checksums" : [ "de89a907d33a9716d11765582102b2e0", "93af1ce6b38ad1431b85ff024bb337a0" ],
  "expirationDate" : "2018-04-25T16:35:35.192Z"
}
```