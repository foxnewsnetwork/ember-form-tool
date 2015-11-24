`import Ember from 'ember'`
`import layout from '../templates/components/em-textarea-field'`
`import FormFieldCore from '../mixins/form-field-core'`

EmTextareaFieldComponent = Ember.Component.extend FormFieldCore,
  layout: layout
  classNames: ['input-field', 'form-input', 'input-section', 'form-group']
  type: "text"

EmTextareaFieldComponent.reopenClass
  positionalParams: ["formHeart"]

`export default EmTextareaFieldComponent`
