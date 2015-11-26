`import Ember from 'ember'`

{Object, Route} = Ember

BasicsRoute = Route.extend
  model: ->
    Object.create 
      date: new Date()

`export default BasicsRoute`