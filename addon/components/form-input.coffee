`import Ember from 'ember'`

bootstrapClasses = ['form-input', 'input-section', 'form-group']

FormInputComponent = Ember.Component.extend
  classNames: bootstrapClasses
  attributeBindings: ['attr-name']
  classNameBindings: ["hasError"]
  "attr-name": Ember.computed.alias("name")

  model: Ember.computed.alias "parentView.model"
  mistakes: Ember.computed.alias "parentView.mistakes"
  hasError: Ember.computed.notEmpty "errorMessages"
  shouldInputGroup: Ember.computed.or "prefix", "suffix"

  init: ->
    if Ember.isBlank @get "parentView"
      throw new Error("You need to nest this form-input inside a form-for")
    if Ember.isBlank( name = @get "name" )
      throw new Error("You need to specify a name attribute")
    @set "value", Ember.computed.alias "model.#{name}"
    @set "errorMessages", Ember.computed.alias "mistakes.#{name}"
    @_super arguments...

  # this is here because datetime is actually datetime-local
  # html5 isn't intuitive, go figure
  isDatetimeType: Ember.computed.match("type", /datetime/)
  isSelectType: Ember.computed.equal("type", "select")
  isTextareaType: Ember.computed.equal("type", "textarea")

`export default FormInputComponent`