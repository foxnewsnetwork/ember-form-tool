`import Ember from 'ember'`
`import layout from '../templates/components/em-date-field'`
`import Component from './em-date-field'`

EmDatetimeFieldComponent = Component.extend
  layout: layout
  format: ""
  type: "datetime"

`export default EmDatetimeFieldComponent`
