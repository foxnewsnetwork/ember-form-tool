`import Ember from 'ember'`
`import layout from '../templates/components/em-timezone-field'`
`import FormFieldCore from '../mixins/form-field-core'`

EmTimezoneFieldComponent = Ember.Component.extend FormFieldCore,
  layout: layout
  classNames: ['input-field', 'form-input', 'input-section', 'form-group']
  selectClass: ['ember-timezone-input', 'form-control'].join(" ")
  name: "timezone"

EmTimezoneFieldComponent.reopenClass
  positionalParams: ["formHeart"]

`export default EmTimezoneFieldComponent`
