`import Ember from 'ember'`

IndexRoute = Ember.Route.extend
  model: ->
    Ember.Object.create email: "some@somewhere.co", framework: "ember"
`export default IndexRoute`