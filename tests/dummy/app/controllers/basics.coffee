`import Ember from 'ember'`
`import xxx from '../utils/error-messages'`

chocolate =
  id: "chocolate"
  presentation: "98% Dark Chocolate"
poprock =
  id: "poprock"
  presentation: "Rocks that Pop!"
taffy =
  id:"taffy"
  presentation: "Sticks to your tooth!"
{A, set, Object, Controller, get} = Ember

genErr = (model) ->
  (obj, field) ->
    set obj, field, xxx(get model, field)
    obj

BasicsController = Controller.extend
  fields: ["email", "password", "username", "feelings", "expectedAt"]
  frameworks: ["ember", "angular", "react"]
  candies: [chocolate, poprock, taffy]
  makeMistakes: (model) ->
    A(@get "fields").reduce genErr(model), Object.create()
  actions:
    submit: (model) ->
      @set "model.errors", @makeMistakes(model)
      
`export default BasicsController`