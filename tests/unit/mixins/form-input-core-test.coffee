`import Ember from 'ember'`
`import FormInputCoreMixin from '../../../mixins/form-input-core'`
`import { module, test } from 'qunit'`

module 'Unit | Mixin | form input core'

# Replace this with your real tests.
test 'it works', (assert) ->
  FormInputCoreObject = Ember.Object.extend FormInputCoreMixin
  subject = FormInputCoreObject.create()
  assert.ok subject
