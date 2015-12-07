`import Ember from 'ember'`
`import xxx from '../utils/error-messages'`

chocolate =
  id: "chocolate"
  pic: "http://www.ember-power-select.com/flags/pt.svg"
  presentation: "98% Dark Chocolate"
poprock =
  id: "poprock"
  pic: "http://www.ember-power-select.com/flags/us.svg"
  presentation: "Rocks that Pop!"
taffy =
  id: "taffy"
  pic: "http://www.ember-power-select.com/flags/es.svg"
  presentation: "Sticks to your tooth!"
{A, set, Object, Controller, get} = Ember

genErr = (model) ->
  (field) ->
    attribute: field
    message: xxx(get model, field)

BasicsController = Controller.extend
  fields: ["email", "password", "username", "feelings", "expectedAt", "money"]
  frameworks: ["ember", "angular", "react"]
  candies: [chocolate, poprock, taffy]
  makeMistakes: (model) ->
    A(@get "fields").map genErr(model)
  actions:
    submit: (model) ->
      @set "model.errors", @makeMistakes(model)
      
`export default BasicsController`