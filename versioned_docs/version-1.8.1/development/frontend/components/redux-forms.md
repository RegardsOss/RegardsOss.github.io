---
id: frontend-view-forms
title: Redux form
sidebar_label: Forms
slug: /development/frontend/view/forms/
---


## Description

The REGARDS frontend uses the [redux-form](https://redux-form.com/6.8.0/) library to create forms.
This library stores in the common `redux store` all informations about the current state of the form.

## How to use

### Simple example

```javascript

import { reduxForm } from 'redux-form'
import { RenderTextField, Field, ErrorTypes, ValidationHelpers } from '@regardsoss/form-utils'

export class ExampleComponent extends React.Component {

  componentDidMount() {
    const initialValues = {
      // initialize the form field named 'label'
      label: 'default label',
    }
    this.props.initialize(initialValues)
  }

  handleSubmit(formValues) {
    ...
  }

  render() {
    return (
      { /* 
       Form with onSubmitMethod: onSubmit is first delegated to redux handleSubmit method that calls this.handleSubmit after execution. That mechanism allows Redux forms to compute mulitple state variable (pristine, invalid, submitting...)
       */ }
      <form onSubmit={this.props.handleSubmit(this.handleSubmit)}> 
        <Field
          name="label" // field name
          component={RenderTextField} // field render component
          type="text" // field type
          label="Label" // field label to display at user
          validate={ValidationHelpers.validRequiredString} // validator: computes if the field value is valid
          fullWidth // field consumes parent full width, quite standard in REGARDS frontend
        />
      </form>
    )
  }
}

/* export the field as connected: reduxForm method will decorate ExampleComponent to add many properties like:
 * pristine: has the form changed?
 * submitting: is the form currently submitting?
 * invalid: is there an invalid field in form?
 * handleSubmit: submit method wrapper
 * ...
 */ 
export default reduxForm({
  form: 'example-form' // form name in redux store
})(ExampleComponent)

```

### REGARDS form-utils

In the upper example you can see that each `Field` component use a `component` parameter to define the field render. The REGARDS
library  `@regardsoss/form-utils` provides the following render components types :

- RenderArrayObjectField : Render a field to configure an array of objects
- RenderArrayTextField : Render a field to configure an array of strings
- RenderAutoCompleteField: Render a field to configure a single value with auto completion
- RenderCheckbox: Render a boolean checkbox field
- RenderDateTimeField: Render a date time field
- RenderDoubleLabelToggle: Render a boolean toggle field with double labels field
- RenderFileFieldWithMui : Render a field to upload a file from the local user system
- RenderJsonCodeEditorField : Render a  field to configure a complex json object within a JSON editor
- RenderMapField : Render a field to configure a Map of objects
- RenderPageableAutoCompleteField : Render a field to configure a single value with auto completion by fetching pageable server endpoint
- RenderRadio: Render a choice field as radio
- RenderSelectField: Render a choice field as list input
- RenderSlider: Render a number field as slider
- RenderTextField: Render a string field as input
- RenderToggle: Render a boolean field as simple label toggle


Those components can be imported from `@regardsoss/form-utils`, like shown below: 

```javascript
import { RenderTextField, RenderToggle, RenderDoubleLabelToggle } from `@regardsoss/form-utils`
```

### More

To understand more about using [redux-form](https://redux-form.com/6.8.0/) library see the [API](https://redux-form.com/6.8.0/docs/api/) official documentation 
