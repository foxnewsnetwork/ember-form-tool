`import Ember from 'ember'`

{computed, A, isBlank} = Ember
{alias, equal, notEmpty, match, or: ifAny} = computed

FormInputCoreMixin = Ember.Mixin.create
  "attr-name": alias("name")
  attributeBindings: ['attr-name']
  classNameBindings: ["hasError"]

  faPrefix: match "prefix", /^fa-[\w\-]{2,}$/
  faSuffix: match "suffix", /^fa-[\w\-]{2,}$/
  glyphPrefix: match "prefix", /^glyphicon-[\w\-]{2,}$/
  glyphSuffix: match "suffix", /^glyphicon-[\w\-]{2,}$/
  isDatetimeType: match("type", /datetime/)
  isSelectType: equal("type", "select")
  isTextareaType: equal("type", "textarea")
  isWebcamType: equal("type", "webcam")
  isTelephone: match "type", /tel(ephone)?/
  isFile: equal("type", "file")
  areFiles: equal("type", "files")
  model: alias "parentView.model"
  mistakes: alias "parentView.mistakes"
  hasError: notEmpty "errorMessages"
  shouldInputGroup: ifAny "prefix", "suffix"
  picUrls: A()

  willInsertElement: ->
    if isBlank @get "parentView"
      throw new Error("You need to nest this form-input inside a form-for")
    if isBlank( name = @get "name" )
      throw new Error("You need to specify a name attribute")
    @set "value", alias "model.#{name}"
    @set "errorMessages", alias "mistakes.#{name}"

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

`export default FormInputCoreMixin`
