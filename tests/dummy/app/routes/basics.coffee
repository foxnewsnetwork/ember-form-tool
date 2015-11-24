`import Ember from 'ember'`

{Object, Route} = Ember

BasicsRoute = Route.extend
  model: ->
    Object.create 
      email: "some@somewhere.co"
      framework: "ember"
`export default BasicsRoute`