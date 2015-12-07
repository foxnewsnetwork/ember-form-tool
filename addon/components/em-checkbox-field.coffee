`import Ember from 'ember'`
`import layout from '../templates/components/em-checkbox-field'`
`import FormFieldCore from '../mixins/form-field-core'`

EmCheckboxFieldComponent = Ember.Component.extend FormFieldCore,
  layout: layout
  classNames: ['checkbox']
  
EmCheckboxFieldComponent.reopenClass
  positionalParams: ["formHeart"]

`export default EmCheckboxFieldComponent`
