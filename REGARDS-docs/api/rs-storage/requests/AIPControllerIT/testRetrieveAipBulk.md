* **URL**:

  `/aips/bulk`

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
  
[ "URN:AIP:DATA:PROJECT:2a69a327-2da9-4339-86b1-06fe58954b42:V1" ]
```