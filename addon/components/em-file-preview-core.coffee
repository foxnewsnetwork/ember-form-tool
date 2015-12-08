`import Ember from 'ember'`
`import layout from '../templates/components/em-file-preview-core'`

imageType = /^image\//

EmFilePreviewCoreComponent = Ember.Component.extend
  tagName: "figure"
  classNames: ["img-thumbnail", "em-file-preview-core"]
  classNameBindings: ["state"]
  layout: layout

  didInitAttrs: ->
    @set "state", "busy"
    if (file = @get "file")?
      @prepareDataURI(file)
    else
      throw new Error "You must pass a file to the file preview"
      
  prepareDataURI: (file) ->
    if imageType.test(file.type)
      reader = new FileReader()
      reader.onloadend = =>
        @set "isPic", true
        @set "state", "ready"
        @set "dataURI", reader.result
      reader.readAsDataURL(file)
    else
      @set "isPic", false
      @set "state", "ready"

  actions:
    kill: ->
      @sendAction "action", @get("file")

`export default EmFilePreviewCoreComponent`
