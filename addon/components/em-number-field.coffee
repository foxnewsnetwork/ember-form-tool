`import Ember from 'ember'`
`import layout from '../templates/components/em-text-field'`
`import FormFieldCore from '../mixins/form-field-core'`

{Component} = Ember

EmNumberFieldComponent = Ember.Component.extend FormFieldCore,
  layout: layout
  classNames: ['input-field', 'form-input', 'input-section', 'form-group']
  type: "number"

EmNumberFieldComponent.reopenClass
  positionalParams: ["formHeart"]

`export default EmNumberFieldComponent`
