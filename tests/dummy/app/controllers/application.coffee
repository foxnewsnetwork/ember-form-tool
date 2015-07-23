`import Ember from 'ember'`

ApplicationController = Ember.Controller.extend
  frameworks: ["ember", "angular", "react"]
  actions:
    submit: (model) ->
      mistakes = Ember.Object.create
        email: Ember.A ["cannot be blank"]
        expectedAt: Ember.A ["cannot be blank"]
      @set "mistakes", mistakes
      
`export default ApplicationController`