`import Ember from 'ember'`
`import FormFieldCoreMixin from '../../../mixins/form-field-core'`
`import { module, test } from 'qunit'`

module 'Unit | Mixin | form field core'

# Replace this with your real tests.
test 'it works', (assert) ->
  FormFieldCoreObject = Ember.Object.extend FormFieldCoreMixin
  subject = FormFieldCoreObject.create()
  assert.ok subject
