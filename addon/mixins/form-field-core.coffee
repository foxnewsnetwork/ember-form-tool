`import Ember from 'ember'`

{computed, A, isBlank, Mixin} = Ember
{alias, equal, oneWay, notEmpty, match, or: ifAny} = computed

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
  errors: alias "formHeart.errors"
  name: oneWay "type"
  label: oneWay "name"

  didInitAttrs: ->
    if isBlank( name = @get "name" )
      throw new Error("You need to specify a name attribute")
    @set "value", alias "model.#{name}"
    @set "errorMessages", alias "errors.#{name}"

`export default FormFieldCoreMixin`
