# Ember-form-tool

>warning: currently alpha software!
Opinionated form tool that assumes you're using one of the 4 popular css front-end frameworks (bootstrap, foundation, materialize, or material-lite), and then gets smart based on that assumption

https://foxnewsnetwork.github.io/ember-form-tool

Specify framework flavor in your config file
Use like the following:

```handlebars
{{#em-form-for myModel action=(action "submit") as |f|}}
  <legend class="whatever">stuff</legend>
  ...
  {{#em-email-field f }}
    <span class="helper-text">put your primary email</span>
  {{/em-email-field}}

  {{em-password-field f name="password" label="password"}}
  {{em-datetime-field f name="expectedAt"}}

  <button type="submit">go</button>
{{/em-form-for}}
```

### TODOs

1. add support for files input
2. add support for datetime input
3. add support for phone input
4. add support for select

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
