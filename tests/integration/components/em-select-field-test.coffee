`import { test, moduleForComponent } from 'ember-qunit'`
`import hbs from 'htmlbars-inline-precompile'`

moduleForComponent 'em-select-field', 'Integration | Component | em select field', {
  integration: true
}

test 'it renders', (assert) ->
  assert.expect 2

  # Set any properties with @set 'myProperty', 'value'
  # Handle any actions with @on 'myAction', (val) ->

  @render hbs """{{em-select-field}}"""

  assert.equal @$().text().trim(), ''

  # Template block usage:
  @render hbs """
    {{#em-select-field}}
      template block text
    {{/em-select-field}}
  """

  assert.equal @$().text().trim(), 'template block text'
