`import Ember from 'ember'`
`import layout from '../templates/components/em-text-field'`
`import FormFieldCore from '../mixins/form-field-core'`

{Component} = Ember

EmEmailFieldComponent = Component.extend FormFieldCore,
  layout: layout
  classNames: ['input-field', 'form-input', 'input-section', 'form-group']
  type: "email"

EmEmailFieldComponent.reopenClass
  positionalParams: ["formHeart"]

`export default EmEmailFieldComponent`
