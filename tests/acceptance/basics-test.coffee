`import { test } from 'qunit'`
`import moduleForAcceptance from '../../tests/helpers/module-for-acceptance'`

moduleForAcceptance('Acceptance | basics')

test 'visiting /basics', (assert) ->
  visit '/basics'

  andThen ->
    assert.equal currentURL(), '/basics'
    click "button[type=submit]"