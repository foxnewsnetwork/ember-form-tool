`import Ember from 'ember'`

ApplicationRoute = Ember.Route.extend
  model: ->
    Ember.Object.create email: "some@somewhere.co", framework: "ember"
`export default ApplicationRoute`