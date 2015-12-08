`import Ember from 'ember'`
`import DragDropMixin from '../../../mixins/drag-drop'`
`import { module, test } from 'qunit'`

module 'Unit | Mixin | drag drop'

# Replace this with your real tests.
test 'it works', (assert) ->
  DragDropObject = Ember.Object.extend DragDropMixin
  subject = DragDropObject.create()
  assert.ok subject
