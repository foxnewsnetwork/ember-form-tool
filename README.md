# Ember-form-tool

Three components for building forms in your ember app, for now, assumes you're using twitter bootstrap and tries to get really smart based on that assumption.

Use like the following:

```handlebars
{{#em-form-for model=myModel mistakes=myErrors action="submittedForm"}}
  <legend class="whatever">stuff</legend>
  ...
  {{#em-form-input type="email" name="email" label="email"}}
    <span class="helper-text">put your primary email</span>
  {{/em-form-input}}

  {{em-form-input type="datetime" name="expectedAt"}}

  <button type="submit">go</button>
{{/em-form-for}}
```
### Assumptions

This library exists because I personally want a super-clean syntax for constructing standard forms, and in order to achieve that, I make a ton of assumptions regarding what you will and will not do in the construction of your forms.

- If you give a prefix or suffix like "fa-phone", you want to use a "i" element for font-awesome (or glyphicon)
- If you put "fa-whatever" in your submitText, you want it as an icon

Yes, every conceiveable type of input goes under the form-input component, you, as the user, only vary the type.

### Existing Types ###
1. text
2. textarea
3. email (html5)
4. password
5. date, day, week, month, year (html5)
6. time (html5)
7. radio
8. checkbox
9. select
10. Webcam
11. multiselect
12. datetime-local (html5)
13. telephone (fancy emberjs junk)
14. files (fancy emberjs)

### Types to implement in the future
- autocomplete
- dials
- visual password
- color (html5)
- search (html5)
- url (html5)
- range (html5)
- switch (material)
- audio stream (usermedia)
- video stream (usermedia)


## Installation

* `git clone` this repository
* `npm install`
* `bower install`

## Running

* `ember server`
* Visit your app at http://localhost:4200.

## Running Tests

* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [http://www.ember-cli.com/](http://www.ember-cli.com/).
