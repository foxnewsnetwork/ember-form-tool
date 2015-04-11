`import Ember from 'ember'`

FormForComponent = Ember.Component.extend
  tagName: 'form'
  classNames: ['form-for']
  submit: (e) ->
    e.preventDefault()
    @sendAction "action", @get "model"
  
`export default FormForComponent`