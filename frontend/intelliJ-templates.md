---
layout: classic-docs
title: IntelliJ templates
short-title: IntelliJ templates
categories:
  - frontend
---

This page propose intelliJ templates to create new files in IntelliJ with some boilerplate already defined - time win!

### Set up a template

Right click anywhere in project tree to open the context menu. Select 'New > Edit file templates'.  
Use the templates provided below or create new ones in templates view - see picture below.  

![](/assets/images/frontend/intelliJ-templates/create.png)

### React component test template

#### Definition

- **Name**: React
- **extension**: jsx
- **Reformat according to style**: yes
- **Enabled live templates**: yes

#### Variables at creation

- Name: container / component name
- Comment: container / component description

#### Template

```javascript

/**
 * LICENSE_PLACEHOLDER
 */
  
/**
 * ${comment}
 */
class ${NAME} extends Component{

  static propTypes = {
  
  }

  static defaultProps = {

  }

  render(){
    return (
     <div>Component</div>
    )
  }
}
 
export default ${NAME}

```

### React component test template

#### Definition

- **Name**: React Test 
- **extension**: test.jsx
- **Reformat according to style**: yes
- **Enabled live templates**: yes

#### Variables at creation

- Name: name of the container / component to test
- MODULE_NAME: Name of the parent module (for test console output)

#### Template

```javascript

/**
 * LICENSE_PLACEHOLDER
 */
import { shallow } from 'enzyme'
import { expect, assert } from 'chai'
import ${NAME} from '../../src/components/${NAME}'

import styles from '../../src/styles/styles'

describe('[${MODULE_NAME}] Testing ${NAME}', () => {
  it('should exists', () => {
    assert.isDefined(${NAME})
  })
  const context = {
    intl: {
      formatMessage: (message) => message,
    },
    muiTheme: {
      palette: {
      },
    },
    moduleTheme: styles({}),
  }
  // TODO test some rendering
  it('Render properly', () => {
    const props = {
    }
    const enzymeWrapper = shallow(<${NAME} {...props} />, { context })
    // TODO something like that
    expect(enzymeWrapper.find(AComponent)).to.have.length(ALENGTH)
    // TODO or something like that
    assert.isFalse(enzymeWrapper.find(AComponent).props().isLoading, 'Loading should be false')
  })

})


```

