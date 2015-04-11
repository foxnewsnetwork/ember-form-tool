`import { test, moduleForComponent } from 'ember-qunit'`

moduleForComponent 'form-for', 'FormForComponent',
  needs: [
    "component:form-input",
    "template:components/form-input",
    "template:-fixture"
  ]
 

test 'it renders', (assert) ->
  assert.expect 2

  # creates the component instance
  component = @subject()
    
  assert.equal component._state, 'preRender'

  # renders the component to the page
  @render()
  assert.equal component._state, 'inDOM'

test 'it should render the correct fixture', (assert) ->
  component = @subject
    model: Ember.Object.create email: "some@somewhere.co"
    templateName: "-fixture"
  @render()
  assert.equal component.$(".input-section").length, 2
  input1 = Ember.View.views["charlie-401"]
  assert.ok input1
  assert.equal input1.get("value"), "some@somewhere.co"

test 'values on the input should be properly bound to the model on the form', (assert) ->
  model = Ember.Object.create email: "some@somewhere.co"
  component = @subject
    model: model
    templateName: "-fixture"
  @render()
  input1 = Ember.View.views["charlie-401"]
  assert.equal input1.get("value"), "some@somewhere.co"
  Ember.run ->
    model.set "email", "ichibanno@takaramono.angel"
    assert.equal input1.get("value"), "ichibanno@takaramono.angel"

test 'it should properly display errors given an error object on the form', (assert) ->
  mistakes = Ember.Object.create email: Ember.A ["cannot be blank", "cannot be from China"]
  component = @subject
    mistakes: mistakes
    templateName: "-fixture"
  @render()
  input1 = Ember.View.views["charlie-401"]
  assert.equal input1.$(".error-text").length, 2
  actual = []
  input1.$(".error-text").each (index, el) -> 
    actual.push $(el).text()
  assert.deepEqual actual, ["cannot be blank", "cannot be from China"]