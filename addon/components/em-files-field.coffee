`import Ember from 'ember'`
`import layout from '../templates/components/em-file-field'`
`import Component from './em-file-field'`
{A, computed: {alias}} = Ember
EmFilesFieldComponent = Component.extend
  layout: layout
  type: "files"
  label: "Upload files"
  multiple: true
  count: alias "value.length"
  handleFiles: (files) ->
    @set "value", @arrayify files

  arrayify: (filelist) ->
    output = A()
    output.pushObject(file) for file in filelist
    output


`export default EmFilesFieldComponent`
