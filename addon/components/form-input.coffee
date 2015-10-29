`import Ember from 'ember'`
`import layout from '../templates/components/em-form-input'`

bootstrapClasses = ['input-field', 'form-input', 'input-section', 'form-group']

{computed, A, isBlank} = Ember
{alias, equal, notEmpty, match, or: ifAny} = computed

FormInputComponent = Ember.Component.extend
  layout: layout
  flavor: alias "parentView.flavor"
  isBootstrapFlavor: equal "flavor", "bootstrap"
  isMaterializeFlavor: equal "flavor", "materialize"
  classNames: bootstrapClasses
  attributeBindings: ['attr-name']
  classNameBindings: ["hasError"]
  "attr-name": alias("name")

  model: alias "parentView.model"
  mistakes: alias "parentView.mistakes"
  hasError: notEmpty "errorMessages"
  shouldInputGroup: ifAny "prefix", "suffix"
  picUrls: A()

  materialErrorClass: computed "hasError",
    get: ->
      if @get "hasError"
        "invalidate"
      else
        "validate"

  materialInputClass: computed "materialErrorClass", "type",
    get: ->
      c = switch
        when @get "isTextareaType" then "materialize-textarea"
        when @get "isFile" then "file-path"
        when @get "areFiles" then "file-path"
        when @get "isDatetimeType" then "datepicker"
        else ""
      [@get("materialErrorClass"), c].join(" ")

  init: ->
    if isBlank @get "parentView"
      throw new Error("You need to nest this form-input inside a form-for")
    if isBlank( name = @get "name" )
      throw new Error("You need to specify a name attribute")
    @set "value", alias "model.#{name}"
    @set "errorMessages", alias "mistakes.#{name}"
    @_super arguments...

  faPrefix: match "prefix", /^fa-[\w\-]{2,}$/
  faSuffix: match "suffix", /^fa-[\w\-]{2,}$/
  glyphPrefix: match "prefix", /^glyphicon-[\w\-]{2,}$/
  glyphSuffix: match "suffix", /^glyphicon-[\w\-]{2,}$/
  materialPrefix: computed "isMaterializeFlavor", "faPrefix", "glyphPrefix",
    get: ->
      @get("isMaterializeFlavor") and not (@get("faPrefix") or @get("glyphPrefix"))
  
  isDatetimeType: match("type", /datetime/)
  isSelectType: equal("type", "select")
  isTextareaType: equal("type", "textarea")
  isWebcamType: equal("type", "webcam")
  isTelephone: match "type", /tel(ephone)?/
  isFile: equal("type", "file")
  areFiles: equal("type", "files")

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