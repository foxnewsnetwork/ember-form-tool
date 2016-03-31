`import Ember from 'ember'`
`import Controller from './basics'`
`import Apples from '../utils/apples'`
{isBlank, A} = Ember
contains = (haystack, needle) ->
  return true if isBlank(needle)
  return false if isBlank haystack
  h = haystack.substr(0,1)
  aystack = haystack.substr(1)
  n = needle.substr(0,1)
  eedle = needle.substr(1)
  if h is n
    contains(aystack, eedle)
  else
    contains(aystack, needle)

SelectController = Controller.extend
  fields: ["framework", "candy"]

  search: (term) ->
    Ember.A Apples
    .filter ({name}) -> contains name, term

      
`export default SelectController`