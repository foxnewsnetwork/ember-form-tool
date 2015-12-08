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

### Available Features

`em-form-for`: takes a model and handles a lot of the overseer work
`em-checkbox-field`
`em-date-field`:
`em-datetime-field`
`em-email-field`
`em-file-field`: handles file upload
`em-file-preview`: use with the file-field to preview the uploaded file
`em-files-field`: handles multiple file uploads
`em-files-preview`: use with the files-field to preview uploaded files
`em-number-field`
`em-password-field`
`em-select-field`
`em-text-field`
`em-textarea-field`
`em-time-field`

### TODOs
1. support a/v stream input
2. support radio and switch input
3. add support for phone input
4. support captcha input
5. support url input
6. support timezone input
7. support geolocation input
8. support belongs-to input
9. support has-many input
10. support slider input
11. support dial input
12. support typeahead search
13. support color input
14. support tile select input
15. support canvas draw input
16. support math formula input

### Assumptions

v.0.2.x of this library is my second attempt at creating form tool that handles common form features across different front-end frameworks. As usual, this thing makes a lot of assumptions regarding where things are stored.


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
