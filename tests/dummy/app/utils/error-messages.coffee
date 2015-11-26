`import Ember from 'ember'`
ErrorMessages = Ember.A [
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

xxx = (value) ->
  k = Math.floor( Math.random() * ErrorMessages.get("length"))
  msgs = ErrorMessages.objectsAt [k]
  msgs.map (msg) -> "#{msg} - #{value}"

`export default xxx`