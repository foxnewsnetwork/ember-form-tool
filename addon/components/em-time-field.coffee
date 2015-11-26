`import Ember from 'ember'`
`import layout from '../templates/components/em-date-field'`
`import Component from './em-date-field'`

EmTimeFieldComponent = Component.extend
  layout: layout
  format: 'LT'
  type: "time"

`export default EmTimeFieldComponent`
