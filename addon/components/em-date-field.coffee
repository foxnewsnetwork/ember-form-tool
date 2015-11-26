`import Ember from 'ember'`
`import layout from '../templates/components/em-date-field'`
`import FormFieldCore from '../mixins/form-field-core'`

{Component, computed} = Ember

EmDateFieldComponent = Component.extend FormFieldCore,
  layout: layout
  classNames: ['input-field', 'form-input', 'input-section', 'form-group']
  type: "date"
  format: 'YYYY-MM-DD'
  dateIcon: computed "suffix", 
    get: ->
      suffix = @get "suffix"
      switch
        when @get "faSuffix" then "fa #{suffix}"
        when @get "glyphSuffix" then "glyph #{suffix}"
        else suffix

EmDateFieldComponent.reopenClass
  positionalParams: ["formHeart"]

`export default EmDateFieldComponent`
