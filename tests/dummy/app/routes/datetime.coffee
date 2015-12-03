`import Ember from 'ember'`
`import moment from 'moment'`

{Object, Route} = Ember

BasicsRoute = Route.extend
  model: ->
    Object.create 
      date: new Date()
      moment: moment()

`export default BasicsRoute`