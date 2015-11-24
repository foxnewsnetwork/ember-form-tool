`import Ember from 'ember'`
`import layout from '../templates/components/em-form-for'`

{Component, computed} = Ember
{oneWay} = computed

KnownFlavors = ["bootstrap", "materialize"]
EmFormForComponent = Component.extend
  layout: layout
  tagName: 'form'
  classNames: ['form-for']
  errors: oneWay "model.errors"
  formHeart: computed "flavor", "model", "errors",
    get: ->
      flavor: @get "flavor"
      model: @get "model"
      errors: @get "errors"
  submit: (e) ->
    e.preventDefault()
    @sendAction "action", @get "model"

EmFormForComponent.reopenClass
  positionalParams: ["model"]

`export default EmFormForComponent`