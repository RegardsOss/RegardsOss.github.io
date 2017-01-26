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
class ${NAME} extends React.Component{

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

- **Name**: React - Component test 
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
import sinon from 'sinon'
import ${NAME} from '../../src/components/${NAME}'

import styles from '../../src/styles/styles'

describe('[${MODULE_NAME}] Testing ${NAME}', () => {
  // Since react will console.error propType warnings, that which we'd rather have
  // as errors, we use sinon.js to stub it into throwing these warning as errors
  // instead.
  before(() => {
    sinon.stub(console, 'error', (warning) => { throw new Error(warning) })
  })
  after(() => {
    console.error.restore()
  })
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

### React messages test template

#### Definition

- **Name**: React messages test 
- **extension**: test.js
- **Reformat according to style**: yes
- **Enabled live templates**: yes

#### Variables at creation

- Name: file name (enter 'messages' here by default)
- MODULE_NAME: Name of the parent module (for test console output)

#### Template

```javascript

/**
 * LICENSE_PLACEHOLDER
 */
import { assert } from 'chai'
import { keys } from 'lodash'
import MessagesEN from '../../src/i18n/messages.en.i18n'
import MessagesFR from '../../src/i18n/messages.fr.i18n'

describe('[${MODULE_NAME}] Testing i18n', () => {
  it('should exist', () => {
    assert.isDefined(MessagesEN)
    assert.isDefined(MessagesFR)
  })
  it('should define same sentences', () => {
    assert.deepEqual(keys(MessagesFR), keys(MessagesEN))
  })
})

```
### Redux entity test template

#### Definition

- **Name**: Redux entity test 
- **extension**: test.js
- **Reformat according to style**: yes
- **Enabled live templates**: yes

#### Variables at creation

- Name: file name, enter here the model name to test (like 'Collection' for CollectionActions / CollectionReducers / CollectionSelectors)
- MODULE_NAME: Name of the parent module (for test console output)

#### Template

```javascript

/**
 * LICENSE_PLACEHOLDER
 */
import { ReduxEntityTester } from '@regardsoss/tests-helpers'
import { ${NAME} } from '@regardsoss/model'
import ${NAME}Actions from '../../src/model/${NAME}Actions'
import ${NAME}Reducers from '../../src/model/${NAME}Reducers'
import ${NAME}Selectors from '../../src/model/${NAME}Selectors'

const backendServerResultList = {
  content: [{
    content: {
      id: 1,
    },
    links: [],
  }],
  metadata: {
    number: '0',
    size: '100',
    totalElements: 1,
  },
  links: [],
}
// URL options and parameters
const options = {}

const entityTester = new ReduxEntityTester(${NAME}Actions, ${NAME}Reducers, ${NAME}Selectors, React.PropTypes.objectOf(${NAME}).isRequired, backendServerResultList, options)

describe('[${MODULE_NAME}] Testing model ${NAME}', () => {
  before(() => {
    entityTester.beforeAll()
  })
  after(() => {
    entityTester.afterAll()
  })
  it('should retrieve the list of items, reduce it, and store it within the store.', (done) => {
    entityTester.runTests(done)
  })
})

```
