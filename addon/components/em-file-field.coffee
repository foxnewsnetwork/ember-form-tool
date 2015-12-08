`import Ember from 'ember'`
`import layout from '../templates/components/em-file-field'`
`import FormFieldCore from '../mixins/form-field-core'`
`import DragDrop from '../mixins/drag-drop'`

EmFileFieldComponent = Ember.Component.extend FormFieldCore, DragDrop,
  layout: layout
  classNames: ['input-field', 'form-input', 'input-section', 'form-group', 'well']
  type: "file"
  label: "Upload a file"
  count: 1
  handleFiles: ([file]) ->
    @set "value", file

  change: (e) ->
    {target:{files}} = e
    @handleFiles files

EmFileFieldComponent.reopenClass
  positionalParams: ["formHeart"]

`export default EmFileFieldComponent`
