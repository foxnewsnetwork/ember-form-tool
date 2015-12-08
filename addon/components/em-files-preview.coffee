`import Ember from 'ember'`
`import layout from '../templates/components/em-files-preview'`
`import FormFieldCore from '../mixins/form-field-core'`
{computed:{alias}} = Ember
EmFilesPreviewComponent = Ember.Component.extend FormFieldCore,
  layout: layout
  name: "files"
  files: alias "value"
  
  actions:
    kill: (file) ->
      @get "files"
      .removeObject file

EmFilesPreviewComponent.reopenClass
  positionalParams: ["formHeart"]

`export default EmFilesPreviewComponent`
