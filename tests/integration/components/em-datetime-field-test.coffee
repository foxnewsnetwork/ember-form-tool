`import { test, moduleForComponent } from 'ember-qunit'`
`import hbs from 'htmlbars-inline-precompile'`

moduleForComponent 'em-datetime-field', 'Integration | Component | em datetime field', {
  integration: true
}

test 'it renders', (assert) ->
  assert.expect 2

  # Set any properties with @set 'myProperty', 'value'
  # Handle any actions with @on 'myAction', (val) ->

  @render hbs """{{em-datetime-field}}"""

  assert.equal @$().text().trim(), ''

  # Template block usage:
  @render hbs """
    {{#em-datetime-field}}
      template block text
    {{/em-datetime-field}}
  """

  assert.equal @$().text().trim(), 'template block text'
