{% for controller in include.controllers %}
## {{ controller.controllerName }}
---
  {% for test in controller.tests %}
  - [{{ test.sectionName }}](#{{ test.sectionName | downcase | replace:' ','-' }})
  {% endfor %}
  {% for test in controller.tests%}
### {{ test.sectionName }}
---  
_{{ test.description }}_  
Request:  
{% include_relative requests/{{ controller.controllerTestName }}/{{ test.testName }}.md %}
Response:  
{% include_relative responses/{{ controller.controllerTestName }}/{{ test.testName }}.md %}
  {% endfor %}
{% endfor %}