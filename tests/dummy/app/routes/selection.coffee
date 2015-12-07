`import Ember from 'ember'`

{Object, Route} = Ember

SelectRoute = Route.extend
  model: ->
    Object.create
      framework: "ember"
`export default SelectRoute`