`import Ember from 'ember'`

{K, Mixin, computed: {equal}} = Ember

DragDropMixin = Mixin.create
  handleFiles: K
  classNameBindings: ["dragDropState", "isDragEntered:well-lg:"]
  isDragEntered: equal "dragDropState", "drag-entered"
  dragDropState: "drag-left"
  dragOver: (e) ->
    e.stopPropagation()
    e.preventDefault()
    @set "dragDropState", "drag-entered"
  dragLeave: (e) ->
    e.stopPropagation()
    e.preventDefault()
    @set "dragDropState", "drag-left"
  drop: (e) ->
    e.stopPropagation()
    e.preventDefault()
    {dataTransfer: {files}} = e
    @set "dragDropState", "drag-left"
    @handleFiles files

  didInsertElement: ->
    @$().on "dragover", @dragOver.bind(@)
    @$().on "dragleave", @dragLeave.bind(@)
    @$().on "drop", @drop.bind(@)

  willDestroyElement: ->
    @$().off "dragover"
    @$().off "dragleave"
    @$().off "drop"


`export default DragDropMixin`
