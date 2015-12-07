`import Ember from 'ember'`
`import layout from '../templates/components/em-select-field'`
`import FormFieldCore from '../mixins/form-field-core'`

EmSelectFieldComponent = Ember.Component.extend FormFieldCore,
  layout: layout
  classNames: ['input-field', 'form-input', 'input-section', 'form-group']

EmSelectFieldComponent.reopenClass
  positionalParams: ["formHeart"]

`export default EmSelectFieldComponent`
