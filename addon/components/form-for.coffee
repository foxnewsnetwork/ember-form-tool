`import Ember from 'ember'`
`import layout from '../templates/components/em-form-for'`

KnownFlavors = ["bootstrap", "materialize"]
FormForComponent = Ember.Component.extend
  layout: layout
  flavor: "bootstrap"
  isBootstrapFlavor: Ember.computed.equal "flavor", "bootstrap"
  isMaterializeFlavor: Ember.computed.equal "flavor", "materialize"
  inline: false
  tagName: 'form'
  classNames: ['form-for']
  classNameBindings: ["inline:form-inline:"]
  submit: (e) ->
    e.preventDefault()
    @sendAction "action", @get "model"
  
`export default FormForComponent`