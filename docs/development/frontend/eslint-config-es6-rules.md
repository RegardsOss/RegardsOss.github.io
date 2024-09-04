---
id: frontend-introduction-eslint
title: REGARDS ESLint rules
sidebar_label: Lint
slug: /development/frontend/introduction/eslint/
---


## Presentation

The module `@regardsoss/eslint-config-es6-rules` (webapp/eslint-config-es6-rules/) provides REGARDS' ESLint configuration. It is referenced by root `webapp/.eslintrc` file, which is the root ESLint configuration file for REGARDS front-end project.

## Usage

We export here under ESLint configurations for your usage.

| rules package            | import mode   | comment                                                        |
| ------------------------ | ------------- | -------------------------------------------------------------- |
| eslint                   | `recommended` | Standard Javascript rules provided by eslint                   | 
| eslint-config-airbnb     |     `all`     | Additional standard and ES6 Javascript rules                   |
| eslint-plugin-import     |     `all`     | Prevent issues with misspelling of file paths and import names |
| eslint-plugin-jsx-ally   |     `all`     | Static AST checker for accessibility rules on JSX elements     |
| eslint-plugin-lodash     | `recommended` | Specific rules for lodash library                              |
| eslint-plugin-mocha      |     `all`     | ESLint rules for mocha                                         |
| eslint-plugin-promise    | `recommended` | Enforce best practices for JavaScript promises                 |
| eslint-plugin-react      | `recommended` | Specific rules for react library                               |
| eslint-plugin-react-perf | `recommended` | Specific good practices rules for react library                |

To use our configuration package add the code here under to your `.eslintrc` configuration file

```json
{
  "parser": "babel-eslint",
  "extends": [
    "@regardsoss/eslint-config-es6-rules"
  ]
}
```

You need to add the following dependencies to your package.json : 
```json
{
  "eslint": "~8.57.0",
  "eslint-config-airbnb": "~19.0.4",
  "eslint-plugin-import": "~2.29.1",
  "eslint-plugin-jsx-a11y": "~6.8.0",
  "eslint-plugin-lodash": "~7.4.0",
  "eslint-plugin-mocha": "~10.3.0",
  "eslint-plugin-promise": "~6.1.1",
  "eslint-plugin-react": "~7.34.0",
  "eslint-plugin-react-perf": "~3.3.2",
}
```

## Imported rules

In the next sections you can find for each rules package the custom configuration made for REGARDS project.
By default, all rules are imported without modification from each package the references rules here are disabled or modified.

### eslint rules

To see all javascript rules set by eslint : http://eslint.org/docs/rules/

Special configuration for eslint rules :

| rule                                            | Configuration | comment                         |
| ----------------------------------------------- | ------------- | ------------------------------- |
| func-names                                      | `Disabled`    | Allow anonymous functions      |
| global-require                                  | `Disabled`    | |
| camelcase                                       | `Activated`   | |
| max-len                                         | `Disabled`    | |
| no-console                                      | `Disabled`    | |
| spaced-comment                                  | `Disabled`    | |
| no-unused-vars                                  | `Activated`   | Do not check arguments. Ignore unused variable on functions arguments |
| no-confusing-arrow                              | `Disabled`    | |
| no-warning-comments                             | `Activated`   | Raise a warning if a TODO or FIXME is find in comments |
| no-mixed-operators                              | `Activated`   | |
| prefer-destructuring                            | `Activated`   | |
| function-paren-newline                          | `Disabled`    | |
| jsx-a11y/control-has-associated-label           | `Disabled`    | Allow that a control (an unteractive element) has no text label |
| function-call-argument-newline'                 | `Disabled`    | Allow to line break whenever we want  |
| operator-linebreak                              | `Disabled`    | Allow to place operator (like ternary operator) wherever we want |
| default-param-last                              | `Disabled`    | Allow to set default param at any place we want in method parameter list |
| no-promise-executor-return                      | `Disabled`    | Allow returning values from promise executor functions |
| react/no-unstable-nested-components             | `Disabled`    | Allow to create components during render |
| react/function-component-definition             | `Disabled`    | don't enforce consistent function types for function components |
| prefer-regex-literals                           | `Disabled`    | Allow the use of RegExp constructor |
| no-use-before-define                            | `Disabled`    | Allow usage of static attributes inside the class |
| react/no-unused-class-component-methods         | `Activated`   | |
| semi                                            | `Activated`   | Disallows semicolons as the end of statements (except to disambiguate statements beginning with [, (, /, +, or -) |
| import/named                                    | `Disabled`    | |
| import/no-commonjs                              | `Activated`   | |
| import/no-self-import                           | `Activated`   | |
| import/no-cycle                                 | `Activated`   | |
| react/state-in-constructor                      | `Activated`   | |
| react/static-property-placement                 | `Activated`   | |
| react/jsx-props-no-spreading                    | `Disabled`    | |
| react/jsx-indent                                | `Disabled`    | |
| react/jsx-no-target-blank'                      | `Disabled`    | |
| react-perf/jsx-no-new-function-as-prop          | `Disabled`    | |
| react-perf/jsx-no-new-object-as-prop            | `Disabled`    | |
| react-perf/jsx-no-new-array-as-prop             | `Disabled`    | |
| jsx-a11y/anchor-is-valid                        | `Disabled`    | |
| jsx-a11y/no-noninteractive-element-interactions | `Disabled`    | |
| jsx-a11y/mouse-events-have-key-events           | `Disabled`    | |
| jsx-a11y/click-events-have-key-events           | `Disabled`    | |
| jsx-a11y/no-static-element-interactions         | `Disabled`    | |
| jsx-a11y/label-has-for                          | `Disabled`    | |

### eslint-config-airbnb

To see all javascript rules set by eslint-config-airbnb : https://github.com/airbnb/javascript

Special configuration for eslint-config-airbnb rules :

| rule                                            | Configuration | comment                         |
| ----------------------------------------------- | ------------- | ------------------------------- |
| import/no-extraneous-dependencies               | `Disabled`    | |
| import/no-named-as-default                      | `Disabled`    | |
| import/no-named-as-default-member               | `Disabled`    | |
| import/prefer-default-export                    | `Disabled`    | |


### plugin:react

To see all javascript rules set by plugin:react : https://github.com/yannickcr/eslint-plugin-react

Special configuration for plugin:react rules :

| rule                                            | Configuration | comment                         |
| ----------------------------------------------- | ------------- | ------------------------------- |
| prefer-es6-class                                | `Disabled`    | |
| require-extension                               | `Disabled`    | |
| require-default-props                           | `Disabled`    | |
| prefer-stateless-function                       | `Disabled`    | |
| react/display-name                              | `Disabled`    | Only detect sipaly names of components during debug  |
| jsx-uses-react                                  | `Activated`   | |
| jsx-uses-vars                                   | `Activated`   | |
| react-in-jsx-scope                              | `Activated`   | |
| jsx-no-undef                                    | `Activated`   | |
| destructuring-assignment                        | `Disabled`    | |
| jsx-wrap-multilines                             | `Disabled`    | |
| no-access-state-in-setstate                     | `Disabled`    | |
| jsx-closing-tag-location                        | `Disabled`    | |


### plugin:react-perf

To see all javascript rules set by plugin:react-perf : https://github.com/cvazac/eslint-plugin-react-perf

Special configuration for plugin:react-perf rules : None

### plugin:lodash

To see all javascript rules set by plugin:lodash : https://github.com/wix/eslint-plugin-lodash

Special configuration for plugin:lodash rules : 

| rule                                            | Configuration | comment                         |
| ----------------------------------------------- | ------------- | ------------------------------- |
| import-scope                                    | `Activated`   | For single method imports |
| prefer-noop                                     | `Disabled`    | Disable useless rule (_.noop instead of empty annonnymous function) |
| prefer-lodash-method                            | `Disabled`    | This rule is not satisfying |
| prefer-constant                                 | `Disabled`    | We do not use lodash constants factory |
| prop-shorthand                                  | `Disabled`    | Not so readable |
| matches-prop-shorthand                          | `Disabled`    | We prefer the explicit declaration |
| no-exclusive-tests                              | `Activated`   | |
| max-top-level-suites                            | `Activated`   | |
| handle-done-callback                            | `Activated`   | |
| no-top-level-hooks                              | `Activated`   | |
| no-return-and-callback                          | `Activated`   | |
| no-sibling-hooks                                | `Activated`   | |
| no-global-tests                                 | `Activated`   | |
| no-hooks-for-single-case                        | `Disabled`    | All React tests contains before and after whether having 1 or more tests |
| no-mocha-arrows                                 | `Disabled`    | |
| mocha/no-skipped-tests                          | `Activated`   | |
| mocha/no-identical-title                        | `Activated`   | |
| mocha/no-synchronous-tests                      | `Disabled`    | We wrote sync tests |


### plugin:promise

To see all javascript rules set by plugin:promise : https://github.com/xjamundx/eslint-plugin-promise

Special configuration for plugin:promise rules : 

| rule                                            | Configuration | comment                         |
| ----------------------------------------------- | ------------- | ------------------------------- |
| no-callback-in-promise                          | `Disabled`    | We call done from Mocha inside async tests |
| no-nesting                                      | `Disabled`    | Rule is not adequate without async / await |
| avoid-new                                       | `Disabled`    | This is handy to create custom promises! |
| catch-or-return                                 | `Disabled`    | We do not always return a promise on react component since most of the time nobody consumes them |
| always-return                                   | `Disabled`    | |

