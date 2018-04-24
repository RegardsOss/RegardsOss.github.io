* **URL**:

  `/aips/{ip_id}/history`

* **Method:**

  `GET`

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

  None.
