"use strict";
/* jshint ignore:start */

/* jshint ignore:end */

define('dummy/app', ['exports', 'ember', 'ember/resolver', 'ember/load-initializers', 'dummy/config/environment'], function (exports, _ember, _emberResolver, _emberLoadInitializers, _dummyConfigEnvironment) {

  var App;

  _ember['default'].MODEL_FACTORY_INJECTIONS = true;

  App = _ember['default'].Application.extend({
    modulePrefix: _dummyConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _dummyConfigEnvironment['default'].podModulePrefix,
    Resolver: _emberResolver['default']
  });

  (0, _emberLoadInitializers['default'])(App, _dummyConfigEnvironment['default'].modulePrefix);

  exports['default'] = App;
});
define('dummy/components/app-version', ['exports', 'ember-cli-app-version/components/app-version', 'dummy/config/environment'], function (exports, _emberCliAppVersionComponentsAppVersion, _dummyConfigEnvironment) {

  var name = _dummyConfigEnvironment['default'].APP.name;
  var version = _dummyConfigEnvironment['default'].APP.version;

  exports['default'] = _emberCliAppVersionComponentsAppVersion['default'].extend({
    version: version,
    name: name
  });
});
define("dummy/components/code-snippet", ["exports", "ember", "dummy/snippets"], function (exports, _ember, _dummySnippets) {

  /* global require */
  var Highlight = require('highlight.js');

  exports["default"] = _ember["default"].Component.extend({
    tagName: 'pre',
    classNameBindings: ['language'],
    unindent: true,

    _unindent: function _unindent(src) {
      if (!this.get('unindent')) {
        return src;
      }
      var match,
          min,
          lines = src.split("\n");
      for (var i = 0; i < lines.length; i++) {
        match = /^\s*/.exec(lines[i]);
        if (match && (typeof min === 'undefined' || min > match[0].length)) {
          min = match[0].length;
        }
      }
      if (typeof min !== 'undefined' && min > 0) {
        src = src.replace(new RegExp("(\\n|^)\\s{" + min + "}", 'g'), "$1");
      }
      return src;
    },

    source: _ember["default"].computed('name', function () {
      return this._unindent((_dummySnippets["default"][this.get('name')] || "").replace(/^(\s*\n)*/, '').replace(/\s*$/, ''));
    }),

    didInsertElement: function didInsertElement() {
      Highlight.highlightBlock(this.get('element'));
    },

    language: _ember["default"].computed('name', function () {
      var m = /\.(\w+)$/i.exec(this.get('name'));
      if (m) {
        switch (m[1].toLowerCase()) {
          case 'js':
            return 'javascript';
          case 'hbs':
            return 'handlebars';
          case 'css':
            return 'css';
          case 'scss':
            return 'scss';
        }
      }
    })
  });
});
define('dummy/components/em-email-field', ['exports', 'ember-form-tool/components/em-email-field'], function (exports, _emberFormToolComponentsEmEmailField) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFormToolComponentsEmEmailField['default'];
    }
  });
});
define('dummy/components/em-form-for', ['exports', 'ember-form-tool/components/em-form-for', 'dummy/config/environment'], function (exports, _emberFormToolComponentsEmFormFor, _dummyConfigEnvironment) {
  exports['default'] = _emberFormToolComponentsEmFormFor['default'].extend({
    flavor: _dummyConfigEnvironment['default'].FormFrameworkFlavor
  });
});
define('dummy/components/em-password-field', ['exports', 'ember-form-tool/components/em-password-field'], function (exports, _emberFormToolComponentsEmPasswordField) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFormToolComponentsEmPasswordField['default'];
    }
  });
});
define('dummy/components/em-text-field', ['exports', 'ember-form-tool/components/em-text-field'], function (exports, _emberFormToolComponentsEmTextField) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFormToolComponentsEmTextField['default'];
    }
  });
});
define('dummy/components/em-textarea-field', ['exports', 'ember-form-tool/components/em-textarea-field'], function (exports, _emberFormToolComponentsEmTextareaField) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFormToolComponentsEmTextareaField['default'];
    }
  });
});
define('dummy/components/ember-webcam-input', ['exports', 'ember-webcam-input/components/ember-webcam-input'], function (exports, _emberWebcamInputComponentsEmberWebcamInput) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberWebcamInputComponentsEmberWebcamInput['default'];
    }
  });
});
define('dummy/controllers/application', ['exports', 'ember'], function (exports, _ember) {
  var ApplicationController;

  ApplicationController = _ember['default'].Controller.extend();

  exports['default'] = ApplicationController;
});
define('dummy/controllers/array', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Controller;
});
define("dummy/controllers/basics", ["exports", "ember"], function (exports, _ember) {
  var A, BasicsController, Controller, ErrorMessages, Object, chocolate, poprock, taffy, xxx;

  chocolate = {
    id: "chocolate",
    presentation: "98% Dark Chocolate"
  };

  poprock = {
    id: "poprock",
    presentation: "Rocks that Pop!"
  };

  taffy = {
    id: "taffy",
    presentation: "Sticks to your tooth!"
  };

  A = _ember["default"].A, Object = _ember["default"].Object, Controller = _ember["default"].Controller;

  ErrorMessages = A(["cannot be written with malicious intent", "must include more chocolate sprinkles", "requires proper planetary alignment", "cannot be too phony", "must be more sincere", "missing a certain je ne sais quois", "should be more well-rounded", "more feelings must be put into it", "user is of the wrong ethnic group"]);

  xxx = function () {
    var k;
    k = Math.floor(Math.random() * ErrorMessages.get("length"));
    return ErrorMessages.objectsAt([k]);
  };

  BasicsController = Controller.extend({
    frameworks: ["ember", "angular", "react"],
    candies: [chocolate, poprock, taffy],
    actions: {
      submit: function submit(model) {
        var mistakes;
        mistakes = Object.create({
          email: xxx(),
          password: xxx(),
          username: xxx(),
          feelings: xxx(),
          expectedAt: xxx()
        });
        return this.set("model.errors", mistakes);
      }
    }
  });

  exports["default"] = BasicsController;
});
define('dummy/controllers/index', ['exports', 'ember'], function (exports, _ember) {
  var IndexController;

  IndexController = _ember['default'].Controller.extend();

  exports['default'] = IndexController;
});
define('dummy/controllers/object', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Controller;
});
define('dummy/ember-form-tool/tests/modules/ember-form-tool/components/em-email-field', ['exports', 'ember', 'dummy/ember-form-tool/tests/modules/ember-form-tool/templates/components/em-text-field', 'dummy/ember-form-tool/tests/modules/ember-form-tool/mixins/form-field-core'], function (exports, _ember, _dummyEmberFormToolTestsModulesEmberFormToolTemplatesComponentsEmTextField, _dummyEmberFormToolTestsModulesEmberFormToolMixinsFormFieldCore) {
  var Component, EmEmailFieldComponent;

  Component = _ember['default'].Component;

  EmEmailFieldComponent = Component.extend(_dummyEmberFormToolTestsModulesEmberFormToolMixinsFormFieldCore['default'], {
    layout: _dummyEmberFormToolTestsModulesEmberFormToolTemplatesComponentsEmTextField['default'],
    classNames: ['input-field', 'form-input', 'input-section', 'form-group'],
    type: "email"
  });

  EmEmailFieldComponent.reopenClass({
    positionalParams: ["formHeart"]
  });

  exports['default'] = EmEmailFieldComponent;
});
define('dummy/ember-form-tool/tests/modules/ember-form-tool/components/em-form-for', ['exports', 'ember', 'dummy/ember-form-tool/tests/modules/ember-form-tool/templates/components/em-form-for'], function (exports, _ember, _dummyEmberFormToolTestsModulesEmberFormToolTemplatesComponentsEmFormFor) {
  var Component, EmFormForComponent, KnownFlavors, computed, oneWay;

  Component = _ember['default'].Component, computed = _ember['default'].computed;

  oneWay = computed.oneWay;

  KnownFlavors = ["bootstrap", "materialize"];

  EmFormForComponent = Component.extend({
    layout: _dummyEmberFormToolTestsModulesEmberFormToolTemplatesComponentsEmFormFor['default'],
    tagName: 'form',
    classNames: ['form-for'],
    errors: oneWay("model.errors"),
    formHeart: computed("flavor", "model", "errors", {
      get: function get() {
        return {
          flavor: this.get("flavor"),
          model: this.get("model"),
          errors: this.get("errors")
        };
      }
    }),
    submit: function submit(e) {
      e.preventDefault();
      return this.sendAction("action", this.get("model"));
    }
  });

  EmFormForComponent.reopenClass({
    positionalParams: ["model"]
  });

  exports['default'] = EmFormForComponent;
});
define('dummy/ember-form-tool/tests/modules/ember-form-tool/components/em-password-field', ['exports', 'ember', 'dummy/ember-form-tool/tests/modules/ember-form-tool/templates/components/em-text-field', 'dummy/ember-form-tool/tests/modules/ember-form-tool/mixins/form-field-core'], function (exports, _ember, _dummyEmberFormToolTestsModulesEmberFormToolTemplatesComponentsEmTextField, _dummyEmberFormToolTestsModulesEmberFormToolMixinsFormFieldCore) {
  var EmPasswordFieldComponent;

  EmPasswordFieldComponent = _ember['default'].Component.extend(_dummyEmberFormToolTestsModulesEmberFormToolMixinsFormFieldCore['default'], {
    layout: _dummyEmberFormToolTestsModulesEmberFormToolTemplatesComponentsEmTextField['default'],
    classNames: ['input-field', 'form-input', 'input-section', 'form-group'],
    type: "password"
  });

  EmPasswordFieldComponent.reopenClass({
    positionalParams: ["formHeart"]
  });

  exports['default'] = EmPasswordFieldComponent;
});
define('dummy/ember-form-tool/tests/modules/ember-form-tool/components/em-text-field', ['exports', 'ember', 'dummy/ember-form-tool/tests/modules/ember-form-tool/templates/components/em-text-field', 'dummy/ember-form-tool/tests/modules/ember-form-tool/mixins/form-field-core'], function (exports, _ember, _dummyEmberFormToolTestsModulesEmberFormToolTemplatesComponentsEmTextField, _dummyEmberFormToolTestsModulesEmberFormToolMixinsFormFieldCore) {
  var EmTextFieldComponent;

  EmTextFieldComponent = _ember['default'].Component.extend(_dummyEmberFormToolTestsModulesEmberFormToolMixinsFormFieldCore['default'], {
    layout: _dummyEmberFormToolTestsModulesEmberFormToolTemplatesComponentsEmTextField['default'],
    classNames: ['input-field', 'form-input', 'input-section', 'form-group'],
    type: "text"
  });

  EmTextFieldComponent.reopenClass({
    positionalParams: ["formHeart"]
  });

  exports['default'] = EmTextFieldComponent;
});
define('dummy/ember-form-tool/tests/modules/ember-form-tool/components/em-textarea-field', ['exports', 'ember', 'dummy/ember-form-tool/tests/modules/ember-form-tool/templates/components/em-textarea-field', 'dummy/ember-form-tool/tests/modules/ember-form-tool/mixins/form-field-core'], function (exports, _ember, _dummyEmberFormToolTestsModulesEmberFormToolTemplatesComponentsEmTextareaField, _dummyEmberFormToolTestsModulesEmberFormToolMixinsFormFieldCore) {
  var EmTextareaFieldComponent;

  EmTextareaFieldComponent = _ember['default'].Component.extend(_dummyEmberFormToolTestsModulesEmberFormToolMixinsFormFieldCore['default'], {
    layout: _dummyEmberFormToolTestsModulesEmberFormToolTemplatesComponentsEmTextareaField['default'],
    classNames: ['input-field', 'form-input', 'input-section', 'form-group'],
    type: "text"
  });

  EmTextareaFieldComponent.reopenClass({
    positionalParams: ["formHeart"]
  });

  exports['default'] = EmTextareaFieldComponent;
});
define("dummy/ember-form-tool/tests/modules/ember-form-tool/mixins/form-field-core", ["exports", "ember"], function (exports, _ember) {
  var A, FormFieldCoreMixin, Mixin, alias, computed, equal, ifAny, isBlank, match, notEmpty, oneWay;

  computed = _ember["default"].computed, A = _ember["default"].A, isBlank = _ember["default"].isBlank, Mixin = _ember["default"].Mixin;

  alias = computed.alias, equal = computed.equal, oneWay = computed.oneWay, notEmpty = computed.notEmpty, match = computed.match, ifAny = computed.or;

  FormFieldCoreMixin = Mixin.create({
    "attr-name": alias("name"),
    attributeBindings: ['attr-name'],
    classNameBindings: ["hasError"],
    shouldInputGroup: ifAny("prefix", "suffix"),
    faPrefix: match("prefix", /^fa-[\w\-]{2,}$/),
    faSuffix: match("suffix", /^fa-[\w\-]{2,}$/),
    glyphPrefix: match("prefix", /^glyphicon-[\w\-]{2,}$/),
    glyphSuffix: match("suffix", /^glyphicon-[\w\-]{2,}$/),
    hasError: notEmpty("errorMessages"),
    model: alias("formHeart.model"),
    flavor: alias("formHeart.flavor"),
    errors: alias("formHeart.errors"),
    name: oneWay("type"),
    label: oneWay("name"),
    didInitAttrs: function didInitAttrs() {
      var name;
      if (isBlank(name = this.get("name"))) {
        throw new Error("You need to specify a name attribute");
      }
      this.set("value", alias("model." + name));
      return this.set("errorMessages", alias("errors." + name));
    }
  });

  exports["default"] = FormFieldCoreMixin;
});
define("dummy/ember-form-tool/tests/modules/ember-form-tool/mixins/form-input-core", ["exports", "ember"], function (exports, _ember) {
  var A, FormInputCoreMixin, alias, computed, equal, ifAny, isBlank, match, notEmpty;

  computed = _ember["default"].computed, A = _ember["default"].A, isBlank = _ember["default"].isBlank;

  alias = computed.alias, equal = computed.equal, notEmpty = computed.notEmpty, match = computed.match, ifAny = computed.or;

  FormInputCoreMixin = _ember["default"].Mixin.create({
    "attr-name": alias("name"),
    attributeBindings: ['attr-name'],
    classNameBindings: ["hasError"],
    faPrefix: match("prefix", /^fa-[\w\-]{2,}$/),
    faSuffix: match("suffix", /^fa-[\w\-]{2,}$/),
    glyphPrefix: match("prefix", /^glyphicon-[\w\-]{2,}$/),
    glyphSuffix: match("suffix", /^glyphicon-[\w\-]{2,}$/),
    isDatetimeType: match("type", /datetime/),
    isSelectType: equal("type", "select"),
    isTextareaType: equal("type", "textarea"),
    isWebcamType: equal("type", "webcam"),
    isTelephone: match("type", /tel(ephone)?/),
    isFile: equal("type", "file"),
    areFiles: equal("type", "files"),
    model: alias("parentView.model"),
    mistakes: alias("parentView.mistakes"),
    hasError: notEmpty("errorMessages"),
    shouldInputGroup: ifAny("prefix", "suffix"),
    picUrls: A(),
    willInsertElement: function willInsertElement() {
      var name;
      if (isBlank(this.get("parentView"))) {
        throw new Error("You need to nest this form-input inside a form-for");
      }
      if (isBlank(name = this.get("name"))) {
        throw new Error("You need to specify a name attribute");
      }
      this.set("value", alias("model." + name));
      return this.set("errorMessages", alias("mistakes." + name));
    },
    actions: {
      change: function change() {
        var content, i, name, value;
        name = this.get("name");
        i = this.$("select")[0].selectedIndex;
        content = _ember["default"].A(this.get("content"));
        if (this.get("prompt") != null) {
          value = content.objectAt(i - 1);
        } else {
          value = content.objectAt(i);
        }
        return this.set("model." + name, value);
      },
      snapped: function snapped() {
        var name;
        name = this.get("name");
        return this.set("model." + name, this.get("picUrls"));
      }
    }
  });

  exports["default"] = FormInputCoreMixin;
});
define('dummy/helpers/and', ['exports', 'ember', 'ember-truth-helpers/helpers/and'], function (exports, _ember, _emberTruthHelpersHelpersAnd) {

  var forExport = null;

  if (_ember['default'].Helper) {
    forExport = _ember['default'].Helper.helper(_emberTruthHelpersHelpersAnd.andHelper);
  } else if (_ember['default'].HTMLBars.makeBoundHelper) {
    forExport = _ember['default'].HTMLBars.makeBoundHelper(_emberTruthHelpersHelpersAnd.andHelper);
  }

  exports['default'] = forExport;
});
define('dummy/helpers/eq', ['exports', 'ember', 'ember-truth-helpers/helpers/equal'], function (exports, _ember, _emberTruthHelpersHelpersEqual) {

  var forExport = null;

  if (_ember['default'].Helper) {
    forExport = _ember['default'].Helper.helper(_emberTruthHelpersHelpersEqual.equalHelper);
  } else if (_ember['default'].HTMLBars.makeBoundHelper) {
    forExport = _ember['default'].HTMLBars.makeBoundHelper(_emberTruthHelpersHelpersEqual.equalHelper);
  }

  exports['default'] = forExport;
});
define('dummy/helpers/gt', ['exports', 'ember', 'ember-truth-helpers/helpers/gt'], function (exports, _ember, _emberTruthHelpersHelpersGt) {

  var forExport = null;

  if (_ember['default'].Helper) {
    forExport = _ember['default'].Helper.helper(_emberTruthHelpersHelpersGt.gtHelper);
  } else if (_ember['default'].HTMLBars.makeBoundHelper) {
    forExport = _ember['default'].HTMLBars.makeBoundHelper(_emberTruthHelpersHelpersGt.gtHelper);
  }

  exports['default'] = forExport;
});
define('dummy/helpers/gte', ['exports', 'ember', 'ember-truth-helpers/helpers/gte'], function (exports, _ember, _emberTruthHelpersHelpersGte) {

  var forExport = null;

  if (_ember['default'].Helper) {
    forExport = _ember['default'].Helper.helper(_emberTruthHelpersHelpersGte.gteHelper);
  } else if (_ember['default'].HTMLBars.makeBoundHelper) {
    forExport = _ember['default'].HTMLBars.makeBoundHelper(_emberTruthHelpersHelpersGte.gteHelper);
  }

  exports['default'] = forExport;
});
define('dummy/helpers/is-array', ['exports', 'ember', 'ember-truth-helpers/helpers/is-array'], function (exports, _ember, _emberTruthHelpersHelpersIsArray) {

  var forExport = null;

  if (_ember['default'].Helper) {
    forExport = _ember['default'].Helper.helper(_emberTruthHelpersHelpersIsArray.isArrayHelper);
  } else if (_ember['default'].HTMLBars.makeBoundHelper) {
    forExport = _ember['default'].HTMLBars.makeBoundHelper(_emberTruthHelpersHelpersIsArray.isArrayHelper);
  }

  exports['default'] = forExport;
});
define('dummy/helpers/lt', ['exports', 'ember', 'ember-truth-helpers/helpers/lt'], function (exports, _ember, _emberTruthHelpersHelpersLt) {

  var forExport = null;

  if (_ember['default'].Helper) {
    forExport = _ember['default'].Helper.helper(_emberTruthHelpersHelpersLt.ltHelper);
  } else if (_ember['default'].HTMLBars.makeBoundHelper) {
    forExport = _ember['default'].HTMLBars.makeBoundHelper(_emberTruthHelpersHelpersLt.ltHelper);
  }

  exports['default'] = forExport;
});
define('dummy/helpers/lte', ['exports', 'ember', 'ember-truth-helpers/helpers/lte'], function (exports, _ember, _emberTruthHelpersHelpersLte) {

  var forExport = null;

  if (_ember['default'].Helper) {
    forExport = _ember['default'].Helper.helper(_emberTruthHelpersHelpersLte.lteHelper);
  } else if (_ember['default'].HTMLBars.makeBoundHelper) {
    forExport = _ember['default'].HTMLBars.makeBoundHelper(_emberTruthHelpersHelpersLte.lteHelper);
  }

  exports['default'] = forExport;
});
define('dummy/helpers/not-eq', ['exports', 'ember', 'ember-truth-helpers/helpers/not-equal'], function (exports, _ember, _emberTruthHelpersHelpersNotEqual) {

  var forExport = null;

  if (_ember['default'].Helper) {
    forExport = _ember['default'].Helper.helper(_emberTruthHelpersHelpersNotEqual.notEqualHelper);
  } else if (_ember['default'].HTMLBars.makeBoundHelper) {
    forExport = _ember['default'].HTMLBars.makeBoundHelper(_emberTruthHelpersHelpersNotEqual.notEqualHelper);
  }

  exports['default'] = forExport;
});
define('dummy/helpers/not', ['exports', 'ember', 'ember-truth-helpers/helpers/not'], function (exports, _ember, _emberTruthHelpersHelpersNot) {

  var forExport = null;

  if (_ember['default'].Helper) {
    forExport = _ember['default'].Helper.helper(_emberTruthHelpersHelpersNot.notHelper);
  } else if (_ember['default'].HTMLBars.makeBoundHelper) {
    forExport = _ember['default'].HTMLBars.makeBoundHelper(_emberTruthHelpersHelpersNot.notHelper);
  }

  exports['default'] = forExport;
});
define('dummy/helpers/or', ['exports', 'ember', 'ember-truth-helpers/helpers/or'], function (exports, _ember, _emberTruthHelpersHelpersOr) {

  var forExport = null;

  if (_ember['default'].Helper) {
    forExport = _ember['default'].Helper.helper(_emberTruthHelpersHelpersOr.orHelper);
  } else if (_ember['default'].HTMLBars.makeBoundHelper) {
    forExport = _ember['default'].HTMLBars.makeBoundHelper(_emberTruthHelpersHelpersOr.orHelper);
  }

  exports['default'] = forExport;
});
define('dummy/helpers/xor', ['exports', 'ember', 'ember-truth-helpers/helpers/xor'], function (exports, _ember, _emberTruthHelpersHelpersXor) {

  var forExport = null;

  if (_ember['default'].Helper) {
    forExport = _ember['default'].Helper.helper(_emberTruthHelpersHelpersXor.xorHelper);
  } else if (_ember['default'].HTMLBars.makeBoundHelper) {
    forExport = _ember['default'].HTMLBars.makeBoundHelper(_emberTruthHelpersHelpersXor.xorHelper);
  }

  exports['default'] = forExport;
});
define('dummy/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'dummy/config/environment'], function (exports, _emberCliAppVersionInitializerFactory, _dummyConfigEnvironment) {
  exports['default'] = {
    name: 'App Version',
    initialize: (0, _emberCliAppVersionInitializerFactory['default'])(_dummyConfigEnvironment['default'].APP.name, _dummyConfigEnvironment['default'].APP.version)
  };
});
define('dummy/initializers/export-application-global', ['exports', 'ember', 'dummy/config/environment'], function (exports, _ember, _dummyConfigEnvironment) {
  exports.initialize = initialize;

  function initialize() {
    var application = arguments[1] || arguments[0];
    if (_dummyConfigEnvironment['default'].exportApplicationGlobal !== false) {
      var value = _dummyConfigEnvironment['default'].exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = _ember['default'].String.classify(_dummyConfigEnvironment['default'].modulePrefix);
      }

      if (!window[globalName]) {
        window[globalName] = application;

        application.reopen({
          willDestroy: function willDestroy() {
            this._super.apply(this, arguments);
            delete window[globalName];
          }
        });
      }
    }
  }

  exports['default'] = {
    name: 'export-application-global',

    initialize: initialize
  };
});
define('dummy/initializers/truth-helpers', ['exports', 'ember', 'ember-truth-helpers/utils/register-helper', 'ember-truth-helpers/helpers/and', 'ember-truth-helpers/helpers/or', 'ember-truth-helpers/helpers/equal', 'ember-truth-helpers/helpers/not', 'ember-truth-helpers/helpers/is-array', 'ember-truth-helpers/helpers/not-equal', 'ember-truth-helpers/helpers/gt', 'ember-truth-helpers/helpers/gte', 'ember-truth-helpers/helpers/lt', 'ember-truth-helpers/helpers/lte'], function (exports, _ember, _emberTruthHelpersUtilsRegisterHelper, _emberTruthHelpersHelpersAnd, _emberTruthHelpersHelpersOr, _emberTruthHelpersHelpersEqual, _emberTruthHelpersHelpersNot, _emberTruthHelpersHelpersIsArray, _emberTruthHelpersHelpersNotEqual, _emberTruthHelpersHelpersGt, _emberTruthHelpersHelpersGte, _emberTruthHelpersHelpersLt, _emberTruthHelpersHelpersLte) {
  exports.initialize = initialize;

  function initialize() /* container, application */{

    // Do not register helpers from Ember 1.13 onwards, starting from 1.13 they
    // will be auto-discovered.
    if (_ember['default'].Helper) {
      return;
    }

    (0, _emberTruthHelpersUtilsRegisterHelper.registerHelper)('and', _emberTruthHelpersHelpersAnd.andHelper);
    (0, _emberTruthHelpersUtilsRegisterHelper.registerHelper)('or', _emberTruthHelpersHelpersOr.orHelper);
    (0, _emberTruthHelpersUtilsRegisterHelper.registerHelper)('eq', _emberTruthHelpersHelpersEqual.equalHelper);
    (0, _emberTruthHelpersUtilsRegisterHelper.registerHelper)('not', _emberTruthHelpersHelpersNot.notHelper);
    (0, _emberTruthHelpersUtilsRegisterHelper.registerHelper)('is-array', _emberTruthHelpersHelpersIsArray.isArrayHelper);
    (0, _emberTruthHelpersUtilsRegisterHelper.registerHelper)('not-eq', _emberTruthHelpersHelpersNotEqual.notEqualHelper);
    (0, _emberTruthHelpersUtilsRegisterHelper.registerHelper)('gt', _emberTruthHelpersHelpersGt.gtHelper);
    (0, _emberTruthHelpersUtilsRegisterHelper.registerHelper)('gte', _emberTruthHelpersHelpersGte.gteHelper);
    (0, _emberTruthHelpersUtilsRegisterHelper.registerHelper)('lt', _emberTruthHelpersHelpersLt.ltHelper);
    (0, _emberTruthHelpersUtilsRegisterHelper.registerHelper)('lte', _emberTruthHelpersHelpersLte.lteHelper);
  }

  exports['default'] = {
    name: 'truth-helpers',
    initialize: initialize
  };
});
define('dummy/router', ['exports', 'ember', 'dummy/config/environment'], function (exports, _ember, _dummyConfigEnvironment) {
  window.Error.stackTraceLimit = Infinity;
  var Router = _ember['default'].Router.extend({
    location: _dummyConfigEnvironment['default'].locationType
  });

  exports['default'] = Router.map(function () {
    this.route("basics");
    this.route("errors");
    this.route("icons");
    this.route("files");
    this.route("usermedia");
    this.route("datetime");
    this.route("material");
    this.route("creative");
  });
});
define('dummy/routes/application', ['exports', 'ember'], function (exports, _ember) {
  var ApplicationRoute;

  ApplicationRoute = _ember['default'].Route.extend({
    model: function model() {}
  });

  exports['default'] = ApplicationRoute;
});
define("dummy/routes/basics", ["exports", "ember"], function (exports, _ember) {
  var BasicsRoute, Object, Route;

  Object = _ember["default"].Object, Route = _ember["default"].Route;

  BasicsRoute = Route.extend({
    model: function model() {
      return Object.create({
        email: "some@somewhere.co",
        framework: "ember"
      });
    }
  });

  exports["default"] = BasicsRoute;
});
define("dummy/routes/index", ["exports", "ember"], function (exports, _ember) {
  var IndexRoute;

  IndexRoute = _ember["default"].Route.extend({
    model: function model() {
      return _ember["default"].Object.create({
        email: "some@somewhere.co",
        framework: "ember"
      });
    }
  });

  exports["default"] = IndexRoute;
});
define("dummy/snippets", ["exports"], function (exports) {
  exports["default"] = {
    "-basics.hbs": "{{#em-form-for model action=\"submit\" as |f|}}\n  {{#em-email-field f prefix=\"fa-check\"}}\n    <span class=\"helper-text\">put your primary email</span>\n  {{/em-email-field}}\n  {{#em-password-field f prefix=\"fa-times\"}}\n    <span class=\"helper-text\">password fields also work</span>\n  {{/em-password-field}}\n  {{#em-text-field f name=\"username\" prefix=\"fa-user\"}}\n    <span class=\"helper-text\">text fields work as expected</span>\n  {{/em-text-field}}\n  {{#em-textarea-field f name=\"feelings\" prefix=\"fa-heart\"}}\n    <span class=\"helper-text\">Very similar to regular text fields</span>\n  {{/em-textarea-field}}\n  <button class=\"btn btn-success\" type=\"submit\">\n    <span>Click Me</span>\n  </button>\n{{/em-form-for}}"
  };
});
define("dummy/templates/-fixture", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.2.0",
          "loc": {
            "source": null,
            "start": {
              "line": 2,
              "column": 0
            },
            "end": {
              "line": 4,
              "column": 0
            }
          },
          "moduleName": "dummy/templates/-fixture.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("span");
          dom.setAttribute(el1, "class", "helper-text");
          var el2 = dom.createTextNode("put your primary email");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() {
          return [];
        },
        statements: [],
        locals: [],
        templates: []
      };
    })();
    var child1 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.2.0",
          "loc": {
            "source": null,
            "start": {
              "line": 7,
              "column": 0
            },
            "end": {
              "line": 9,
              "column": 0
            }
          },
          "moduleName": "dummy/templates/-fixture.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("span");
          dom.setAttribute(el1, "class", "helper-text");
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]), 0, 0);
          return morphs;
        },
        statements: [["content", "model.framework", ["loc", [null, [8, 28], [8, 47]]]]],
        locals: [],
        templates: []
      };
    })();
    var child2 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.2.0",
          "loc": {
            "source": null,
            "start": {
              "line": 10,
              "column": 0
            },
            "end": {
              "line": 12,
              "column": 0
            }
          },
          "moduleName": "dummy/templates/-fixture.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("span");
          dom.setAttribute(el1, "class", "helper-text");
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("--");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [1]);
          var morphs = new Array(2);
          morphs[0] = dom.createMorphAt(element0, 0, 0);
          morphs[1] = dom.createMorphAt(element0, 2, 2);
          return morphs;
        },
        statements: [["content", "model.candy.id", ["loc", [null, [11, 28], [11, 46]]]], ["content", "model.candy.presentation", ["loc", [null, [11, 48], [11, 76]]]]],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["multiple-nodes", "wrong-type"]
        },
        "revision": "Ember@2.2.0",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 20,
            "column": 0
          }
        },
        "moduleName": "dummy/templates/-fixture.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("legend");
        dom.setAttribute(el1, "class", "whatever");
        var el2 = dom.createTextNode("stuff");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("button");
        dom.setAttribute(el1, "type", "submit");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("span");
        var el3 = dom.createTextNode("submit");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(8);
        morphs[0] = dom.createMorphAt(fragment, 2, 2, contextualElement);
        morphs[1] = dom.createMorphAt(fragment, 4, 4, contextualElement);
        morphs[2] = dom.createMorphAt(fragment, 6, 6, contextualElement);
        morphs[3] = dom.createMorphAt(fragment, 7, 7, contextualElement);
        morphs[4] = dom.createMorphAt(fragment, 8, 8, contextualElement);
        morphs[5] = dom.createMorphAt(fragment, 10, 10, contextualElement);
        morphs[6] = dom.createMorphAt(fragment, 12, 12, contextualElement);
        morphs[7] = dom.createMorphAt(fragment, 14, 14, contextualElement);
        return morphs;
      },
      statements: [["block", "em-form-input", [], ["id", "charlie-401", "type", "email", "name", "email", "label", "email", "prefix", "fa-check"], 0, null, ["loc", [null, [2, 0], [4, 18]]]], ["inline", "em-form-input", [], ["type", "datetime-local", "name", "expectedAt"], ["loc", [null, [6, 0], [6, 57]]]], ["block", "em-form-input", [], ["type", "select", "name", "framework", "label", "worst framework ever", "content", ["subexpr", "@mut", [["get", "frameworks", ["loc", [null, [7, 85], [7, 95]]]]], [], []]], 1, null, ["loc", [null, [7, 0], [9, 18]]]], ["block", "em-form-input", [], ["type", "select", "name", "candy", "label", "worst framework ever", "content", ["subexpr", "@mut", [["get", "candies", ["loc", [null, [10, 81], [10, 88]]]]], [], []], "optionLabelPath", "presentation", "optionLabelValue", "id"], 2, null, ["loc", [null, [10, 0], [12, 18]]]], ["inline", "em-form-input", [], ["type", "webcam", "name", "mugshots"], ["loc", [null, [13, 0], [13, 47]]]], ["inline", "em-form-input", [], ["type", "file", "name", "file", "label", "vanilla file"], ["loc", [null, [14, 0], [14, 62]]]], ["inline", "em-form-input", [], ["type", "file", "name", "file", "label", "capture", "accept", "image/*;capture=camera"], ["loc", [null, [15, 0], [15, 89]]]], ["inline", "em-form-input", [], ["type", "files", "name", "files", "label", "all files"], ["loc", [null, [16, 0], [16, 61]]]]],
      locals: [],
      templates: [child0, child1, child2]
    };
  })());
});
define("dummy/templates/application", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.2.0",
          "loc": {
            "source": null,
            "start": {
              "line": 6,
              "column": 10
            },
            "end": {
              "line": 6,
              "column": 46
            }
          },
          "moduleName": "dummy/templates/application.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("Ember Form Tools");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() {
          return [];
        },
        statements: [],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["multiple-nodes"]
        },
        "revision": "Ember@2.2.0",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 20,
            "column": 0
          }
        },
        "moduleName": "dummy/templates/application.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "jumbotron");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "container");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "row");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "col-xs-12");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("h2");
        dom.setAttribute(el5, "id", "title");
        var el6 = dom.createTextNode("Welcome to my \n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createComment("");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("p");
        var el6 = dom.createTextNode("An ember DSL for building forms across the major front-end frameworks");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "container");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "row");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "col-xs-12");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(2);
        morphs[0] = dom.createMorphAt(dom.childAt(fragment, [0, 1, 1, 1, 1]), 1, 1);
        morphs[1] = dom.createMorphAt(dom.childAt(fragment, [2, 1, 1]), 1, 1);
        return morphs;
      },
      statements: [["block", "link-to", ["index"], [], 0, null, ["loc", [null, [6, 10], [6, 58]]]], ["content", "outlet", ["loc", [null, [16, 6], [16, 16]]]]],
      locals: [],
      templates: [child0]
    };
  })());
});
define("dummy/templates/basics", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type", "multiple-nodes"]
        },
        "revision": "Ember@2.2.0",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 6,
            "column": 0
          }
        },
        "moduleName": "dummy/templates/basics.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(2);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        morphs[1] = dom.createMorphAt(dom.childAt(fragment, [2]), 1, 1);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [["inline", "partial", ["snippets/basics"], [], ["loc", [null, [1, 0], [1, 29]]]], ["inline", "code-snippet", [], ["name", "-basics.hbs"], ["loc", [null, [4, 2], [4, 37]]]]],
      locals: [],
      templates: []
    };
  })());
});
define("dummy/templates/components/code-snippet", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type"]
        },
        "revision": "Ember@2.2.0",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 2,
            "column": 0
          }
        },
        "moduleName": "dummy/templates/components/code-snippet.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [["content", "source", ["loc", [null, [1, 0], [1, 10]]]]],
      locals: [],
      templates: []
    };
  })());
});
define("dummy/templates/components/ember-webcam-input", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type"]
        },
        "revision": "Ember@2.2.0",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 2,
            "column": 0
          }
        },
        "moduleName": "dummy/templates/components/ember-webcam-input.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [["content", "yield", ["loc", [null, [1, 0], [1, 9]]]]],
      locals: [],
      templates: []
    };
  })());
});
define("dummy/templates/index", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.2.0",
          "loc": {
            "source": null,
            "start": {
              "line": 2,
              "column": 2
            },
            "end": {
              "line": 4,
              "column": 2
            }
          },
          "moduleName": "dummy/templates/index.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    basic form\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() {
          return [];
        },
        statements: [],
        locals: [],
        templates: []
      };
    })();
    var child1 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.2.0",
          "loc": {
            "source": null,
            "start": {
              "line": 5,
              "column": 2
            },
            "end": {
              "line": 7,
              "column": 2
            }
          },
          "moduleName": "dummy/templates/index.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    form errors\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() {
          return [];
        },
        statements: [],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "triple-curlies"
        },
        "revision": "Ember@2.2.0",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 8,
            "column": 6
          }
        },
        "moduleName": "dummy/templates/index.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "list-group");
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [0]);
        var morphs = new Array(2);
        morphs[0] = dom.createMorphAt(element0, 1, 1);
        morphs[1] = dom.createMorphAt(element0, 2, 2);
        return morphs;
      },
      statements: [["block", "link-to", ["basics"], ["class", "list-group-item"], 0, null, ["loc", [null, [2, 2], [4, 14]]]], ["block", "link-to", ["errors"], ["class", "list-group-item"], 1, null, ["loc", [null, [5, 2], [7, 14]]]]],
      locals: [],
      templates: [child0, child1]
    };
  })());
});
define("dummy/templates/snippets/-basics", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      var child0 = (function () {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.2.0",
            "loc": {
              "source": null,
              "start": {
                "line": 2,
                "column": 2
              },
              "end": {
                "line": 4,
                "column": 2
              }
            },
            "moduleName": "dummy/templates/snippets/-basics.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("    ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("span");
            dom.setAttribute(el1, "class", "helper-text");
            var el2 = dom.createTextNode("put your primary email");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes() {
            return [];
          },
          statements: [],
          locals: [],
          templates: []
        };
      })();
      var child1 = (function () {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.2.0",
            "loc": {
              "source": null,
              "start": {
                "line": 5,
                "column": 2
              },
              "end": {
                "line": 7,
                "column": 2
              }
            },
            "moduleName": "dummy/templates/snippets/-basics.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("    ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("span");
            dom.setAttribute(el1, "class", "helper-text");
            var el2 = dom.createTextNode("password fields also work");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes() {
            return [];
          },
          statements: [],
          locals: [],
          templates: []
        };
      })();
      var child2 = (function () {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.2.0",
            "loc": {
              "source": null,
              "start": {
                "line": 8,
                "column": 2
              },
              "end": {
                "line": 10,
                "column": 2
              }
            },
            "moduleName": "dummy/templates/snippets/-basics.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("    ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("span");
            dom.setAttribute(el1, "class", "helper-text");
            var el2 = dom.createTextNode("text fields work as expected");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes() {
            return [];
          },
          statements: [],
          locals: [],
          templates: []
        };
      })();
      var child3 = (function () {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.2.0",
            "loc": {
              "source": null,
              "start": {
                "line": 11,
                "column": 2
              },
              "end": {
                "line": 13,
                "column": 2
              }
            },
            "moduleName": "dummy/templates/snippets/-basics.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("    ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("span");
            dom.setAttribute(el1, "class", "helper-text");
            var el2 = dom.createTextNode("Very similar to regular text fields");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes() {
            return [];
          },
          statements: [],
          locals: [],
          templates: []
        };
      })();
      return {
        meta: {
          "fragmentReason": {
            "name": "missing-wrapper",
            "problems": ["wrong-type", "multiple-nodes"]
          },
          "revision": "Ember@2.2.0",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 17,
              "column": 0
            }
          },
          "moduleName": "dummy/templates/snippets/-basics.hbs"
        },
        isEmpty: false,
        arity: 1,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("button");
          dom.setAttribute(el1, "class", "btn btn-success");
          dom.setAttribute(el1, "type", "submit");
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("span");
          var el3 = dom.createTextNode("Click Me");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n  ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(4);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          morphs[1] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          morphs[2] = dom.createMorphAt(fragment, 2, 2, contextualElement);
          morphs[3] = dom.createMorphAt(fragment, 3, 3, contextualElement);
          dom.insertBoundary(fragment, 0);
          return morphs;
        },
        statements: [["block", "em-email-field", [["get", "f", ["loc", [null, [2, 20], [2, 21]]]]], ["prefix", "fa-check"], 0, null, ["loc", [null, [2, 2], [4, 21]]]], ["block", "em-password-field", [["get", "f", ["loc", [null, [5, 23], [5, 24]]]]], ["prefix", "fa-times"], 1, null, ["loc", [null, [5, 2], [7, 24]]]], ["block", "em-text-field", [["get", "f", ["loc", [null, [8, 19], [8, 20]]]]], ["name", "username", "prefix", "fa-user"], 2, null, ["loc", [null, [8, 2], [10, 20]]]], ["block", "em-textarea-field", [["get", "f", ["loc", [null, [11, 23], [11, 24]]]]], ["name", "feelings", "prefix", "fa-heart"], 3, null, ["loc", [null, [11, 2], [13, 24]]]]],
        locals: ["f"],
        templates: [child0, child1, child2, child3]
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type"]
        },
        "revision": "Ember@2.2.0",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 17,
            "column": 16
          }
        },
        "moduleName": "dummy/templates/snippets/-basics.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["block", "em-form-for", [["get", "model", ["loc", [null, [1, 15], [1, 20]]]]], ["action", "submit"], 0, null, ["loc", [null, [1, 0], [17, 16]]]]],
      locals: [],
      templates: [child0]
    };
  })());
});
/* jshint ignore:start */

/* jshint ignore:end */

/* jshint ignore:start */

define('dummy/config/environment', ['ember'], function(Ember) {
  var prefix = 'dummy';
/* jshint ignore:start */

try {
  var metaName = prefix + '/config/environment';
  var rawConfig = Ember['default'].$('meta[name="' + metaName + '"]').attr('content');
  var config = JSON.parse(unescape(rawConfig));

  return { 'default': config };
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

/* jshint ignore:end */

});

if (!runningTests) {
  require("dummy/app")["default"].create({"name":"ember-form-tool","version":"0.2.0+1834908c"});
}

/* jshint ignore:end */
//# sourceMappingURL=dummy.map