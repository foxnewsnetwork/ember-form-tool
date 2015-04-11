# Ember-form-tool

Two components for building forms in your ember app

Use like the following:

```handlebars
{{#em-form-for model=myModel mistakes=myErrors action="submittedForm"}}
  <legend class="whatever">stuff</legend>
  ...
  {{#em-form-input type="email" name="email" label="email"}}
    <span class="helper-text">put your primary email</span>
  {{/em-form-input}}

  {{em-form-input type="datetime" name="expectedAt"}}
{{/em-form-for}}
```
Yes, every conceiveable type of input goes under the form-input component, you, as the user, only vary the type.

### Known Types ###
1. text
2. textarea
3. email (html5)
4. password
5. date, day, week, month, year (html5)
6. time (html5)
7. radio
8. checkbox
9. select
10. multiselect
11. color (html5)
12. datetime-local (html5)
13. search (html5)
14. telephone (fancy emberjs junk)
15. url (html5)
16. range (html5)
17. switch (material)
18. files (fancy emberjs)
19. audio stream (usermedia)
20. video stream (usermedia)

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
