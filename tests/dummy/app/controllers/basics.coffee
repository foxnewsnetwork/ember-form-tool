`import Ember from 'ember'`

chocolate =
  id: "chocolate"
  presentation: "98% Dark Chocolate"
poprock =
  id: "poprock"
  presentation: "Rocks that Pop!"
taffy =
  id:"taffy"
  presentation: "Sticks to your tooth!"
{A, Object, Controller} = Ember

ErrorMessages = A [
  "cannot be written with malicious intent"
  "must include more chocolate sprinkles"
  "requires proper planetary alignment"
  "cannot be too phony"
  "must be more sincere"
  "missing a certain je ne sais quois"
  "should be more well-rounded"
  "more feelings must be put into it"
  "user is of the wrong ethnic group"
]

xxx = ->
  k = Math.floor( Math.random() * ErrorMessages.get("length"))
  ErrorMessages.objectsAt [k]

BasicsController = Controller.extend
  frameworks: ["ember", "angular", "react"]
  candies: [chocolate, poprock, taffy]
  actions:
    submit: (model) ->
      mistakes = Object.create
        email: xxx()
        password: xxx()
        username: xxx()
        feelings: xxx()
        expectedAt: xxx()
      @set "model.errors", mistakes
      
`export default BasicsController`