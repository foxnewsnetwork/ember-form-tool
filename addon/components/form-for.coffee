`import Ember from 'ember'`

FormForComponent = Ember.Component.extend
  inline: false
  tagName: 'form'
  classNames: ['form-for']
  classNameBindings: ["inline:form-inline:"]
  submit: (e) ->
    e.preventDefault()
    @sendAction "action", @get "model"
  
`export default FormForComponent`