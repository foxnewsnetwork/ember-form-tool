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
  picUrls: Ember.A()

  init: ->
    if Ember.isBlank @get "parentView"
      throw new Error("You need to nest this form-input inside a form-for")
    if Ember.isBlank( name = @get "name" )
      throw new Error("You need to specify a name attribute")
    @set "value", Ember.computed.alias "model.#{name}"
    @set "errorMessages", Ember.computed.alias "mistakes.#{name}"
    @_super arguments...

  faPrefix: Ember.computed.match "prefix", /^fa-[\w\-]{2,}$/
  faSuffix: Ember.computed.match "suffix", /^fa-[\w\-]{2,}$/
  glyphPrefix: Ember.computed.match "prefix", /^glyphicon-[\w\-]{2,}$/
  glyphSuffix: Ember.computed.match "suffix", /^glyphicon-[\w\-]{2,}$/
  # this is here because datetime is actually datetime-local
  # html5 isn't intuitive, go figure
  isDatetimeType: Ember.computed.match("type", /datetime/)
  isSelectType: Ember.computed.equal("type", "select")
  isTextareaType: Ember.computed.equal("type", "textarea")
  isWebcamType: Ember.computed.equal("type", "webcam")
  isTelephone: Ember.computed.match "type", /tel(ephone)?/
  isFile: Ember.computed.equal("type", "file")
  areFiles: Ember.computed.equal("type", "files")

  actions:
    change: ->
      name = @get "name"
      i = @$("select")[0].selectedIndex
      content = Ember.A @get "content"
      if @get("prompt")?
        value = content.objectAt(i - 1)
      else
        value = content.objectAt i
      @set "model.#{name}", value


    snapped: ->
      name = @get "name"
      @set "model.#{name}", @get("picUrls")

`export default FormInputComponent`