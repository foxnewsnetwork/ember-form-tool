`import { test, moduleForComponent } from 'ember-qunit'`
`import hbs from 'htmlbars-inline-precompile'`

moduleForComponent 'em-timezone-field', 'Integration | Component | em timezone field', {
  integration: true
}

test 'it renders', (assert) ->
  assert.expect 2

  # Set any properties with @set 'myProperty', 'value'
  # Handle any actions with @on 'myAction', (val) ->

  @render hbs """{{em-timezone-field}}"""

  assert.equal @$().text().trim(), ''

  # Template block usage:
  @render hbs """
    {{#em-timezone-field}}
      template block text
    {{/em-timezone-field}}
  """

  assert.equal @$().text().trim(), 'template block text'
