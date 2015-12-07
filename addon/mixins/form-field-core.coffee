`import Ember from 'ember'`

{guidFor, computed, isBlank, Mixin, get} = Ember
{mapBy, filter, alias, oneWay, notEmpty, match, or: ifAny} = computed

FormFieldCoreMixin = Mixin.create
  "attr-name": alias("name")
  attributeBindings: ['attr-name']
  classNameBindings: ["hasError"]
  shouldInputGroup: ifAny "prefix", "suffix"
  faPrefix: match "prefix", /^fa-[\w\-]{2,}$/
  faSuffix: match "suffix", /^fa-[\w\-]{2,}$/
  glyphPrefix: match "prefix", /^glyphicon-[\w\-]{2,}$/
  glyphSuffix: match "suffix", /^glyphicon-[\w\-]{2,}$/
  hasError: notEmpty "errorMessages"
  model: alias "formHeart.model"
  flavor: alias "formHeart.flavor"
  errors: filter "formHeart.errors", (error) ->
    @get("name")? and get(error, "attribute") is @get("name")
  name: oneWay "type"
  label: oneWay "name"
  errorMessages: mapBy "errors", "message"
  
  didInitAttrs: ->
    if isBlank( name = @get "name" )
      throw new Error("You need to specify a name attribute")
    @set "value", alias "model.#{name}"
    if isBlank @get "controlId"
      @set "controlId", "em-input-#{guidFor(@)}"
`export default FormFieldCoreMixin`
