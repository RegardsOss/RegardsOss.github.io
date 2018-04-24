* **URL**:

  `/aips/{ip_id}/files/{checksum}`

* **Method:**

  `GET`

* **Headers**:

  `Authorization: Bearer {token}`
  `Content-Type: application/geo+json;charset=UTF-8`
  `Accept: text/plain`

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

  None.
