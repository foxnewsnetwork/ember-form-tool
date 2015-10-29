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

ApplicationController = Ember.Controller.extend
  frameworks: ["ember", "angular", "react"]
  candies: [chocolate, poprock, taffy]
  actions:
    submit: (model) ->
      mistakes = Ember.Object.create
        email: Ember.A ["cannot be blank"]
        expectedAt: Ember.A ["cannot be blank"]
      @set "mistakes", mistakes
      
`export default ApplicationController`