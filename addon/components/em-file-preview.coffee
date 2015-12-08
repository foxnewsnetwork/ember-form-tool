`import Ember from 'ember'`
`import layout from '../templates/components/em-file-preview'`
`import FormFieldCore from '../mixins/form-field-core'`
{computed:{alias}} = Ember
EmFilePreviewComponent = Ember.Component.extend FormFieldCore,
  layout: layout
  name: "file"
  file: alias "value"
  
  actions:
    kill: ->
      @set "file", null

EmFilePreviewComponent.reopenClass
  positionalParams: ["formHeart"]
  

`export default EmFilePreviewComponent`
