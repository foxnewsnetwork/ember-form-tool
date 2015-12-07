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
define('dummy/components/basic-dropdown', ['exports', 'ember-basic-dropdown/components/basic-dropdown'], function (exports, _emberBasicDropdownComponentsBasicDropdown) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBasicDropdownComponentsBasicDropdown['default'];
    }
  });
});
define('dummy/components/bs-datetimepicker', ['exports', 'ember', 'ember-bootstrap-datetimepicker/components/bs-datetimepicker'], function (exports, _ember, _emberBootstrapDatetimepickerComponentsBsDatetimepicker) {
  exports['default'] = _emberBootstrapDatetimepickerComponentsBsDatetimepicker['default'];
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
define('dummy/components/em-date-field', ['exports', 'ember-form-tool/components/em-date-field'], function (exports, _emberFormToolComponentsEmDateField) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFormToolComponentsEmDateField['default'];
    }
  });
});
define('dummy/components/em-datetime-field', ['exports', 'ember-form-tool/components/em-datetime-field'], function (exports, _emberFormToolComponentsEmDatetimeField) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFormToolComponentsEmDatetimeField['default'];
    }
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
define('dummy/components/em-select-field', ['exports', 'ember-form-tool/components/em-select-field'], function (exports, _emberFormToolComponentsEmSelectField) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFormToolComponentsEmSelectField['default'];
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
define('dummy/components/em-time-field', ['exports', 'ember-form-tool/components/em-time-field'], function (exports, _emberFormToolComponentsEmTimeField) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFormToolComponentsEmTimeField['default'];
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
define('dummy/components/ember-wormhole', ['exports', 'ember-wormhole/components/ember-wormhole'], function (exports, _emberWormholeComponentsEmberWormhole) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberWormholeComponentsEmberWormhole['default'];
    }
  });
});
define('dummy/components/power-select/multiple/selected', ['exports', 'ember-power-select/components/power-select/multiple/selected'], function (exports, _emberPowerSelectComponentsPowerSelectMultipleSelected) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberPowerSelectComponentsPowerSelectMultipleSelected['default'];
    }
  });
});
define('dummy/components/power-select/multiple', ['exports', 'ember-power-select/components/power-select/multiple'], function (exports, _emberPowerSelectComponentsPowerSelectMultiple) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberPowerSelectComponentsPowerSelectMultiple['default'];
    }
  });
});
define('dummy/components/power-select/options', ['exports', 'ember-power-select/components/power-select/options'], function (exports, _emberPowerSelectComponentsPowerSelectOptions) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberPowerSelectComponentsPowerSelectOptions['default'];
    }
  });
});
define('dummy/components/power-select/single/selected', ['exports', 'ember-power-select/components/power-select/single/selected'], function (exports, _emberPowerSelectComponentsPowerSelectSingleSelected) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberPowerSelectComponentsPowerSelectSingleSelected['default'];
    }
  });
});
define('dummy/components/power-select/single', ['exports', 'ember-power-select/components/power-select/single'], function (exports, _emberPowerSelectComponentsPowerSelectSingle) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberPowerSelectComponentsPowerSelectSingle['default'];
    }
  });
});
define('dummy/components/power-select', ['exports', 'ember-power-select/components/power-select'], function (exports, _emberPowerSelectComponentsPowerSelect) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberPowerSelectComponentsPowerSelect['default'];
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
define('dummy/controllers/basics', ['exports', 'ember', 'dummy/utils/error-messages'], function (exports, _ember, _dummyUtilsErrorMessages) {
  var A, BasicsController, Controller, Object, chocolate, genErr, get, poprock, set, taffy;

  chocolate = {
    id: "chocolate",
    pic: "http://www.ember-power-select.com/flags/pt.svg",
    presentation: "98% Dark Chocolate"
  };

  poprock = {
    id: "poprock",
    pic: "http://www.ember-power-select.com/flags/us.svg",
    presentation: "Rocks that Pop!"
  };

  taffy = {
    id: "taffy",
    pic: "http://www.ember-power-select.com/flags/es.svg",
    presentation: "Sticks to your tooth!"
  };

  A = _ember['default'].A, set = _ember['default'].set, Object = _ember['default'].Object, Controller = _ember['default'].Controller, get = _ember['default'].get;

  genErr = function (model) {
    return function (field) {
      return {
        attribute: field,
        message: (0, _dummyUtilsErrorMessages['default'])(get(model, field))
      };
    };
  };

  BasicsController = Controller.extend({
    fields: ["email", "password", "username", "feelings", "expectedAt"],
    frameworks: ["ember", "angular", "react"],
    candies: [chocolate, poprock, taffy],
    makeMistakes: function makeMistakes(model) {
      return A(this.get("fields")).map(genErr(model));
    },
    actions: {
      submit: function submit(model) {
        return this.set("model.errors", this.makeMistakes(model));
      }
    }
  });

  exports['default'] = BasicsController;
});
define('dummy/controllers/datetime', ['exports', 'ember', 'dummy/controllers/basics'], function (exports, _ember, _dummyControllersBasics) {
  var DatetimeController;

  DatetimeController = _dummyControllersBasics['default'].extend({
    fields: ["date", "datetime", "timezone", "time"]
  });

  exports['default'] = DatetimeController;
});
define('dummy/controllers/index', ['exports', 'ember'], function (exports, _ember) {
  var IndexController;

  IndexController = _ember['default'].Controller.extend();

  exports['default'] = IndexController;
});
define('dummy/controllers/object', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Controller;
});
define('dummy/controllers/selection', ['exports', 'ember', 'dummy/controllers/basics'], function (exports, _ember, _dummyControllersBasics) {
  var SelectController;

  SelectController = _dummyControllersBasics['default'].extend({
    fields: ["framework", "candy"]
  });

  exports['default'] = SelectController;
});
define('dummy/ember-form-tool/tests/modules/ember-form-tool/components/em-date-field', ['exports', 'ember', 'dummy/ember-form-tool/tests/modules/ember-form-tool/templates/components/em-date-field', 'dummy/ember-form-tool/tests/modules/ember-form-tool/mixins/form-field-core'], function (exports, _ember, _dummyEmberFormToolTestsModulesEmberFormToolTemplatesComponentsEmDateField, _dummyEmberFormToolTestsModulesEmberFormToolMixinsFormFieldCore) {
  var Component, EmDateFieldComponent, computed;

  Component = _ember['default'].Component, computed = _ember['default'].computed;

  EmDateFieldComponent = Component.extend(_dummyEmberFormToolTestsModulesEmberFormToolMixinsFormFieldCore['default'], {
    layout: _dummyEmberFormToolTestsModulesEmberFormToolTemplatesComponentsEmDateField['default'],
    classNames: ['input-field', 'form-input', 'input-section', 'form-group'],
    type: "date",
    format: 'YYYY-MM-DD',
    dateIcon: computed("suffix", {
      get: function get() {
        var suffix;
        suffix = this.get("suffix");
        switch (false) {
          case !this.get("faSuffix"):
            return "fa " + suffix;
          case !this.get("glyphSuffix"):
            return "glyph " + suffix;
          default:
            return suffix;
        }
      }
    })
  });

  EmDateFieldComponent.reopenClass({
    positionalParams: ["formHeart"]
  });

  exports['default'] = EmDateFieldComponent;
});
define('dummy/ember-form-tool/tests/modules/ember-form-tool/components/em-datetime-field', ['exports', 'ember', 'dummy/ember-form-tool/tests/modules/ember-form-tool/templates/components/em-date-field', 'dummy/ember-form-tool/tests/modules/ember-form-tool/components/em-date-field'], function (exports, _ember, _dummyEmberFormToolTestsModulesEmberFormToolTemplatesComponentsEmDateField, _dummyEmberFormToolTestsModulesEmberFormToolComponentsEmDateField) {
  var EmDatetimeFieldComponent;

  EmDatetimeFieldComponent = _dummyEmberFormToolTestsModulesEmberFormToolComponentsEmDateField['default'].extend({
    layout: _dummyEmberFormToolTestsModulesEmberFormToolTemplatesComponentsEmDateField['default'],
    format: "",
    type: "datetime"
  });

  exports['default'] = EmDatetimeFieldComponent;
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
define('dummy/ember-form-tool/tests/modules/ember-form-tool/components/em-select-field', ['exports', 'ember', 'dummy/ember-form-tool/tests/modules/ember-form-tool/templates/components/em-select-field', 'dummy/ember-form-tool/tests/modules/ember-form-tool/mixins/form-field-core'], function (exports, _ember, _dummyEmberFormToolTestsModulesEmberFormToolTemplatesComponentsEmSelectField, _dummyEmberFormToolTestsModulesEmberFormToolMixinsFormFieldCore) {
  var EmSelectFieldComponent;

  EmSelectFieldComponent = _ember['default'].Component.extend(_dummyEmberFormToolTestsModulesEmberFormToolMixinsFormFieldCore['default'], {
    layout: _dummyEmberFormToolTestsModulesEmberFormToolTemplatesComponentsEmSelectField['default'],
    classNames: ['input-field', 'form-input', 'input-section', 'form-group']
  });

  EmSelectFieldComponent.reopenClass({
    positionalParams: ["formHeart"]
  });

  exports['default'] = EmSelectFieldComponent;
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
define('dummy/ember-form-tool/tests/modules/ember-form-tool/components/em-time-field', ['exports', 'ember', 'dummy/ember-form-tool/tests/modules/ember-form-tool/templates/components/em-date-field', 'dummy/ember-form-tool/tests/modules/ember-form-tool/components/em-date-field'], function (exports, _ember, _dummyEmberFormToolTestsModulesEmberFormToolTemplatesComponentsEmDateField, _dummyEmberFormToolTestsModulesEmberFormToolComponentsEmDateField) {
  var EmTimeFieldComponent;

  EmTimeFieldComponent = _dummyEmberFormToolTestsModulesEmberFormToolComponentsEmDateField['default'].extend({
    layout: _dummyEmberFormToolTestsModulesEmberFormToolTemplatesComponentsEmDateField['default'],
    format: 'LT',
    type: "time"
  });

  exports['default'] = EmTimeFieldComponent;
});
define("dummy/ember-form-tool/tests/modules/ember-form-tool/mixins/form-field-core", ["exports", "ember"], function (exports, _ember) {
  var FormFieldCoreMixin, Mixin, alias, computed, filter, get, ifAny, isBlank, mapBy, match, notEmpty, oneWay;

  computed = _ember["default"].computed, isBlank = _ember["default"].isBlank, Mixin = _ember["default"].Mixin, get = _ember["default"].get;

  mapBy = computed.mapBy, filter = computed.filter, alias = computed.alias, oneWay = computed.oneWay, notEmpty = computed.notEmpty, match = computed.match, ifAny = computed.or;

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
    errors: filter("formHeart.errors", function (error) {
      return this.get("name") != null && get(error, "attribute") === this.get("name");
    }),
    name: oneWay("type"),
    label: oneWay("name"),
    errorMessages: mapBy("errors", "message"),
    didInitAttrs: function didInitAttrs() {
      var name;
      if (isBlank(name = this.get("name"))) {
        throw new Error("You need to specify a name attribute");
      }
      return this.set("value", alias("model." + name));
    }
  });

  exports["default"] = FormFieldCoreMixin;
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
define('dummy/helpers/ember-power-select-option-classes', ['exports', 'ember-power-select/helpers/ember-power-select-option-classes'], function (exports, _emberPowerSelectHelpersEmberPowerSelectOptionClasses) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberPowerSelectHelpersEmberPowerSelectOptionClasses['default'];
    }
  });
  Object.defineProperty(exports, 'emberPowerSelectOptionClasses', {
    enumerable: true,
    get: function get() {
      return _emberPowerSelectHelpersEmberPowerSelectOptionClasses.emberPowerSelectOptionClasses;
    }
  });
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
define('dummy/helpers/hash', ['exports', 'ember-hash-helper-polyfill/helpers/hash'], function (exports, _emberHashHelperPolyfillHelpersHash) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberHashHelperPolyfillHelpersHash['default'];
    }
  });
  Object.defineProperty(exports, 'hash', {
    enumerable: true,
    get: function get() {
      return _emberHashHelperPolyfillHelpersHash.hash;
    }
  });
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
define('dummy/helpers/moment-duration', ['exports', 'ember-moment/helpers/moment-duration'], function (exports, _emberMomentHelpersMomentDuration) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberMomentHelpersMomentDuration['default'];
    }
  });
});
define('dummy/helpers/moment-format', ['exports', 'ember', 'dummy/config/environment', 'ember-moment/helpers/moment-format'], function (exports, _ember, _dummyConfigEnvironment, _emberMomentHelpersMomentFormat) {
  exports['default'] = _emberMomentHelpersMomentFormat['default'].extend({
    globalOutputFormat: _ember['default'].get(_dummyConfigEnvironment['default'], 'moment.outputFormat'),
    globalAllowEmpty: !!_ember['default'].get(_dummyConfigEnvironment['default'], 'moment.allowEmpty')
  });
});
define('dummy/helpers/moment-from-now', ['exports', 'ember', 'dummy/config/environment', 'ember-moment/helpers/moment-from-now'], function (exports, _ember, _dummyConfigEnvironment, _emberMomentHelpersMomentFromNow) {
  exports['default'] = _emberMomentHelpersMomentFromNow['default'].extend({
    globalAllowEmpty: !!_ember['default'].get(_dummyConfigEnvironment['default'], 'moment.allowEmpty')
  });
});
define('dummy/helpers/moment-to-now', ['exports', 'ember', 'dummy/config/environment', 'ember-moment/helpers/moment-to-now'], function (exports, _ember, _dummyConfigEnvironment, _emberMomentHelpersMomentToNow) {
  exports['default'] = _emberMomentHelpersMomentToNow['default'].extend({
    globalAllowEmpty: !!_ember['default'].get(_dummyConfigEnvironment['default'], 'moment.allowEmpty')
  });
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
    this.route("selection");
    this.route("datetime");
    this.route("files");
    this.route("usermedia");
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
define('dummy/routes/datetime', ['exports', 'ember', 'moment'], function (exports, _ember, _moment) {
  var BasicsRoute, Object, Route;

  Object = _ember['default'].Object, Route = _ember['default'].Route;

  BasicsRoute = Route.extend({
    model: function model() {
      return Object.create({
        date: new Date(),
        moment: (0, _moment['default'])()
      });
    }
  });

  exports['default'] = BasicsRoute;
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
define("dummy/routes/selection", ["exports", "ember"], function (exports, _ember) {
  var Object, Route, SelectRoute;

  Object = _ember["default"].Object, Route = _ember["default"].Route;

  SelectRoute = Route.extend({
    model: function model() {
      return Object.create({
        framework: "ember"
      });
    }
  });

  exports["default"] = SelectRoute;
});
define('dummy/services/moment', ['exports', 'ember', 'moment'], function (exports, _ember, _moment2) {
  var computed = _ember['default'].computed;
  exports['default'] = _ember['default'].Service.extend({
    _locale: null,
    _timeZone: null,

    locale: computed({
      get: function get() {
        return this.get('_locale');
      },
      set: function set(propertyKey, locale) {
        this.set('_locale', locale);
        return locale;
      }
    }),

    timeZone: computed({
      get: function get() {
        return this.get('_timeZone');
      },
      set: function set(propertyKey, timeZone) {
        if (_moment2['default'].tz) {
          this.set('_timeZone', timeZone);
          return timeZone;
        } else {
          _ember['default'].Logger.warn('[ember-moment] attempted to set timezone, but moment-timezone unavailable.');
        }
      }
    }),

    changeLocale: function changeLocale(locale) {
      this.set('locale', locale);
    },

    changeTimeZone: function changeTimeZone(timeZone) {
      this.set('timeZone', timeZone);
    },

    moment: function moment() {
      var time = _moment2['default'].apply(undefined, arguments);
      var locale = this.get('locale');
      var timeZone = this.get('timeZone');

      if (locale) {
        time = time.locale(locale);
      }

      if (timeZone && time.tz) {
        time = time.tz(timeZone);
      }

      return time;
    }
  });
});
define("dummy/snippets", ["exports"], function (exports) {
  exports["default"] = {
    "-basics.hbs": "{{#em-form-for model action=\"submit\" as |f|}}\n  {{#em-email-field f prefix=\"fa-check\"}}\n    <span class=\"helper-text\">put your primary email</span>\n  {{/em-email-field}}\n  {{#em-password-field f prefix=\"fa-times\"}}\n    <span class=\"helper-text\">password fields also work</span>\n  {{/em-password-field}}\n  {{#em-text-field f name=\"username\" prefix=\"fa-user\"}}\n    <span class=\"helper-text\">text fields work as expected</span>\n  {{/em-text-field}}\n  {{#em-textarea-field f name=\"feelings\" prefix=\"fa-heart\"}}\n    <span class=\"helper-text\">Very similar to regular text fields</span>\n  {{/em-textarea-field}}\n  <button class=\"btn btn-success\" type=\"submit\">\n    <span>Click Me</span>\n  </button>\n{{/em-form-for}}",
    "-datetime.hbs": "{{#em-form-for model action=\"submit\" as |f|}}\n  {{#em-date-field f suffix=\"fa-calendar\"}}\n    <span class=\"helper-text\">select a date (note, prefix isn't available on date fields)</span>\n  {{/em-date-field}}\n  {{#em-time-field f suffix=\"glyphicon-time\"}}\n    <span class=\"helper-text\">select a time (note, prefix isn't available on date fields)</span>\n  {{/em-time-field}}\n  {{#em-datetime-field f suffix=\"fa-twitter\"}}\n    <span class=\"helper-text\">select a datetime</span>\n  {{/em-datetime-field}}\n  {{#em-datetime-field f name=\"moment\" suffix=\"fa-twitter\"}}\n    <span class=\"helper-text\">you can use moment objects as well</span>\n  {{/em-datetime-field}}\n  <button class=\"btn btn-success\" type=\"submit\">\n    <span>Click Me</span>\n  </button>\n{{/em-form-for}}",
    "-select.hbs": "{{#em-form-for model action=\"submit\" as |f|}}\n  {{#em-select-field f name=\"framework\" options=frameworks prefix=\"fa-cubes\"}}\n    <span class=\"helper-text\">select a framework (if you care to customize, the yield'd block will be the usual helper text)</span>\n  {{/em-select-field}}\n  {{#em-select-field f name=\"candy\" options=candies prefix=\"fa-cubes\" as |candy|}}\n    <img src=\"{{candy.pic}}\" class=\"icon-flag\"> <strong>{{candy.id}}</strong>\n    <small>{{candy.presentation}}</small>\n  {{/em-select-field}}\n  <div class=\"helper-text\">\n    If you do customize your options, the helper text goes away\n  </div>\n  <button class=\"btn btn-success\" type=\"submit\">\n    <span>Click Me</span>\n  </button>\n{{/em-form-for}}"
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
              "line": 8,
              "column": 10
            },
            "end": {
              "line": 8,
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
            "line": 23,
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
        var el1 = dom.createElement("a");
        dom.setAttribute(el1, "href", "https://github.com/foxnewsnetwork/ember-form-tool");
        var el2 = dom.createElement("img");
        dom.setAttribute(el2, "style", "position: absolute; top: 0; right: 0; border: 0;");
        dom.setAttribute(el2, "src", "https://camo.githubusercontent.com/365986a132ccd6a44c23a9169022c0b5c890c387/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f6769746875622f726962626f6e732f666f726b6d655f72696768745f7265645f6161303030302e706e67");
        dom.setAttribute(el2, "alt", "Fork me on GitHub");
        dom.setAttribute(el2, "data-canonical-src", "https://s3.amazonaws.com/github/ribbons/forkme_right_red_aa0000.png");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
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
        var el6 = dom.createTextNode("Welcome to\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createComment("");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n          (wip)\n        ");
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
        morphs[0] = dom.createMorphAt(dom.childAt(fragment, [2, 1, 1, 1, 1]), 1, 1);
        morphs[1] = dom.createMorphAt(dom.childAt(fragment, [4, 1, 1]), 1, 1);
        return morphs;
      },
      statements: [["block", "link-to", ["index"], [], 0, null, ["loc", [null, [8, 10], [8, 58]]]], ["content", "outlet", ["loc", [null, [19, 6], [19, 16]]]]],
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
define("dummy/templates/components/bs-datetimepicker", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
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
              "line": 3,
              "column": 0
            }
          },
          "moduleName": "dummy/templates/components/bs-datetimepicker.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [["content", "yield", ["loc", [null, [2, 2], [2, 11]]]]],
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
              "line": 3,
              "column": 0
            },
            "end": {
              "line": 5,
              "column": 0
            }
          },
          "moduleName": "dummy/templates/components/bs-datetimepicker.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [["inline", "input", [], ["type", "text", "class", "form-control", "disabled", ["subexpr", "@mut", [["get", "disabled", ["loc", [null, [4, 52], [4, 60]]]]], [], []], "name", ["subexpr", "@mut", [["get", "textFieldName", ["loc", [null, [4, 66], [4, 79]]]]], [], []]], ["loc", [null, [4, 2], [4, 81]]]]],
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
              "line": 6,
              "column": 0
            },
            "end": {
              "line": 10,
              "column": 0
            }
          },
          "moduleName": "dummy/templates/components/bs-datetimepicker.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createElement("span");
          dom.setAttribute(el1, "class", "input-group-addon");
          var el2 = dom.createTextNode("\n  ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("span");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [0, 1]);
          var morphs = new Array(1);
          morphs[0] = dom.createAttrMorph(element0, 'class');
          return morphs;
        },
        statements: [["attribute", "class", ["concat", [["get", "dateIcon", ["loc", [null, [8, 17], [8, 25]]]]]]]],
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
            "line": 11,
            "column": 0
          }
        },
        "moduleName": "dummy/templates/components/bs-datetimepicker.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(2);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        morphs[1] = dom.createMorphAt(fragment, 1, 1, contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["block", "if", [["get", "hasBlock", ["loc", [null, [1, 6], [1, 14]]]]], [], 0, 1, ["loc", [null, [1, 0], [5, 7]]]], ["block", "unless", [["get", "noIcon", ["loc", [null, [6, 10], [6, 16]]]]], [], 2, null, ["loc", [null, [6, 0], [10, 11]]]]],
      locals: [],
      templates: [child0, child1, child2]
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
define("dummy/templates/datetime", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
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
            "line": 13,
            "column": 0
          }
        },
        "moduleName": "dummy/templates/datetime.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "alert alert-warning");
        var el2 = dom.createTextNode("\n  You need to install \n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("a");
        dom.setAttribute(el2, "href", "https://github.com/plusacht/ember-bootstrap-datetimepicker");
        var el3 = dom.createTextNode("\n    ember-bootstrap-datetimepicker\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode(" yourself if you wish to use the bootstrap flavor of the datetime selection\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
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
        morphs[0] = dom.createMorphAt(fragment, 2, 2, contextualElement);
        morphs[1] = dom.createMorphAt(dom.childAt(fragment, [4]), 1, 1);
        return morphs;
      },
      statements: [["inline", "partial", ["snippets/datetime"], [], ["loc", [null, [8, 0], [8, 31]]]], ["inline", "code-snippet", [], ["name", "-datetime.hbs"], ["loc", [null, [11, 2], [11, 39]]]]],
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
              "line": 5,
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
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("h4");
          var el2 = dom.createTextNode("basic form");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          var el2 = dom.createTextNode("email, password, text, textarea fields");
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
              "line": 6,
              "column": 2
            },
            "end": {
              "line": 9,
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
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("h4");
          var el2 = dom.createTextNode("date time");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          var el2 = dom.createTextNode("date, time, datetime fields");
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
              "line": 10,
              "column": 2
            },
            "end": {
              "line": 13,
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
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("h4");
          var el2 = dom.createTextNode("select inputs");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          var el2 = dom.createTextNode("select, radios, and checkboxes");
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
              "line": 14,
              "column": 2
            },
            "end": {
              "line": 17,
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
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("h4");
          var el2 = dom.createTextNode("files");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          var el2 = dom.createTextNode("WIP");
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
    var child4 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.2.0",
          "loc": {
            "source": null,
            "start": {
              "line": 18,
              "column": 2
            },
            "end": {
              "line": 21,
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
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("h4");
          var el2 = dom.createTextNode("usermedia");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          var el2 = dom.createTextNode("WIP");
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
    var child5 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.2.0",
          "loc": {
            "source": null,
            "start": {
              "line": 22,
              "column": 2
            },
            "end": {
              "line": 25,
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
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("h4");
          var el2 = dom.createTextNode("material");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          var el2 = dom.createTextNode("WIP");
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
    var child6 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.2.0",
          "loc": {
            "source": null,
            "start": {
              "line": 26,
              "column": 2
            },
            "end": {
              "line": 29,
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
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("h4");
          var el2 = dom.createTextNode("creative");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          var el2 = dom.createTextNode("WIP");
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
            "line": 30,
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
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
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
        var morphs = new Array(7);
        morphs[0] = dom.createMorphAt(element0, 1, 1);
        morphs[1] = dom.createMorphAt(element0, 2, 2);
        morphs[2] = dom.createMorphAt(element0, 3, 3);
        morphs[3] = dom.createMorphAt(element0, 4, 4);
        morphs[4] = dom.createMorphAt(element0, 5, 5);
        morphs[5] = dom.createMorphAt(element0, 6, 6);
        morphs[6] = dom.createMorphAt(element0, 7, 7);
        return morphs;
      },
      statements: [["block", "link-to", ["basics"], ["class", "list-group-item"], 0, null, ["loc", [null, [2, 2], [5, 14]]]], ["block", "link-to", ["datetime"], ["class", "list-group-item"], 1, null, ["loc", [null, [6, 2], [9, 14]]]], ["block", "link-to", ["selection"], ["class", "list-group-item"], 2, null, ["loc", [null, [10, 2], [13, 14]]]], ["block", "link-to", ["files"], ["class", "list-group-item", "disabled", true], 3, null, ["loc", [null, [14, 2], [17, 14]]]], ["block", "link-to", ["usermedia"], ["class", "list-group-item", "disabled", true], 4, null, ["loc", [null, [18, 2], [21, 14]]]], ["block", "link-to", ["material"], ["class", "list-group-item", "disabled", true], 5, null, ["loc", [null, [22, 2], [25, 14]]]], ["block", "link-to", ["creative"], ["class", "list-group-item", "disabled", true], 6, null, ["loc", [null, [26, 2], [29, 14]]]]],
      locals: [],
      templates: [child0, child1, child2, child3, child4, child5, child6]
    };
  })());
});
define("dummy/templates/selection", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
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
            "line": 13,
            "column": 0
          }
        },
        "moduleName": "dummy/templates/selection.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "alert alert-warning");
        var el2 = dom.createTextNode("\n  You need to install \n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("a");
        dom.setAttribute(el2, "href", "https://github.com/cibernox/ember-power-select");
        var el3 = dom.createTextNode("\n    ember-power-select\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode(" yourself if you wish to use the bootstrap flavor of the select\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
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
        morphs[0] = dom.createMorphAt(fragment, 2, 2, contextualElement);
        morphs[1] = dom.createMorphAt(dom.childAt(fragment, [4]), 1, 1);
        return morphs;
      },
      statements: [["inline", "partial", ["snippets/select"], [], ["loc", [null, [8, 0], [8, 29]]]], ["inline", "code-snippet", [], ["name", "-select.hbs"], ["loc", [null, [11, 2], [11, 37]]]]],
      locals: [],
      templates: []
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
define("dummy/templates/snippets/-datetime", ["exports"], function (exports) {
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
            "moduleName": "dummy/templates/snippets/-datetime.hbs"
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
            var el2 = dom.createTextNode("select a date (note, prefix isn't available on date fields)");
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
            "moduleName": "dummy/templates/snippets/-datetime.hbs"
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
            var el2 = dom.createTextNode("select a time (note, prefix isn't available on date fields)");
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
            "moduleName": "dummy/templates/snippets/-datetime.hbs"
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
            var el2 = dom.createTextNode("select a datetime");
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
            "moduleName": "dummy/templates/snippets/-datetime.hbs"
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
            var el2 = dom.createTextNode("you can use moment objects as well");
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
          "moduleName": "dummy/templates/snippets/-datetime.hbs"
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
        statements: [["block", "em-date-field", [["get", "f", ["loc", [null, [2, 19], [2, 20]]]]], ["suffix", "fa-calendar"], 0, null, ["loc", [null, [2, 2], [4, 20]]]], ["block", "em-time-field", [["get", "f", ["loc", [null, [5, 19], [5, 20]]]]], ["suffix", "glyphicon-time"], 1, null, ["loc", [null, [5, 2], [7, 20]]]], ["block", "em-datetime-field", [["get", "f", ["loc", [null, [8, 23], [8, 24]]]]], ["suffix", "fa-twitter"], 2, null, ["loc", [null, [8, 2], [10, 24]]]], ["block", "em-datetime-field", [["get", "f", ["loc", [null, [11, 23], [11, 24]]]]], ["name", "moment", "suffix", "fa-twitter"], 3, null, ["loc", [null, [11, 2], [13, 24]]]]],
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
        "moduleName": "dummy/templates/snippets/-datetime.hbs"
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
define("dummy/templates/snippets/-select", ["exports"], function (exports) {
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
            "moduleName": "dummy/templates/snippets/-select.hbs"
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
            var el2 = dom.createTextNode("select a framework (if you care to customize, the yield'd block will be the usual helper text)");
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
                "line": 8,
                "column": 2
              }
            },
            "moduleName": "dummy/templates/snippets/-select.hbs"
          },
          isEmpty: false,
          arity: 1,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("    ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("img");
            dom.setAttribute(el1, "class", "icon-flag");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode(" ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("strong");
            var el2 = dom.createComment("");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n    ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("small");
            var el2 = dom.createComment("");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var element0 = dom.childAt(fragment, [1]);
            var morphs = new Array(3);
            morphs[0] = dom.createAttrMorph(element0, 'src');
            morphs[1] = dom.createMorphAt(dom.childAt(fragment, [3]), 0, 0);
            morphs[2] = dom.createMorphAt(dom.childAt(fragment, [5]), 0, 0);
            return morphs;
          },
          statements: [["attribute", "src", ["concat", [["get", "candy.pic", ["loc", [null, [6, 16], [6, 25]]]]]]], ["content", "candy.id", ["loc", [null, [6, 56], [6, 68]]]], ["content", "candy.presentation", ["loc", [null, [7, 11], [7, 33]]]]],
          locals: ["candy"],
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
              "line": 15,
              "column": 0
            }
          },
          "moduleName": "dummy/templates/snippets/-select.hbs"
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
          var el1 = dom.createTextNode("  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "helper-text");
          var el2 = dom.createTextNode("\n    If you do customize your options, the helper text goes away\n  ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n  ");
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
          var morphs = new Array(2);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          morphs[1] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          dom.insertBoundary(fragment, 0);
          return morphs;
        },
        statements: [["block", "em-select-field", [["get", "f", ["loc", [null, [2, 21], [2, 22]]]]], ["name", "framework", "options", ["subexpr", "@mut", [["get", "frameworks", ["loc", [null, [2, 48], [2, 58]]]]], [], []], "prefix", "fa-cubes"], 0, null, ["loc", [null, [2, 2], [4, 22]]]], ["block", "em-select-field", [["get", "f", ["loc", [null, [5, 21], [5, 22]]]]], ["name", "candy", "options", ["subexpr", "@mut", [["get", "candies", ["loc", [null, [5, 44], [5, 51]]]]], [], []], "prefix", "fa-cubes"], 1, null, ["loc", [null, [5, 2], [8, 22]]]]],
        locals: ["f"],
        templates: [child0, child1]
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
            "line": 15,
            "column": 16
          }
        },
        "moduleName": "dummy/templates/snippets/-select.hbs"
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
      statements: [["block", "em-form-for", [["get", "model", ["loc", [null, [1, 15], [1, 20]]]]], ["action", "submit"], 0, null, ["loc", [null, [1, 0], [15, 16]]]]],
      locals: [],
      templates: [child0]
    };
  })());
});
define("dummy/utils/error-messages", ["exports", "ember"], function (exports, _ember) {
  var ErrorMessages, xxx;

  ErrorMessages = _ember["default"].A(["cannot be written with malicious intent", "must include more chocolate sprinkles", "requires proper planetary alignment", "cannot be too phony", "must be more sincere", "missing a certain je ne sais quois", "should be more well-rounded", "more feelings must be put into it", "user is of the wrong ethnic group"]);

  xxx = function (value) {
    var k, msgs;
    k = Math.floor(Math.random() * ErrorMessages.get("length"));
    msgs = ErrorMessages.objectsAt([k]);
    return msgs.map(function (msg) {
      return msg + " - " + value;
    });
  };

  exports["default"] = xxx;
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
  require("dummy/app")["default"].create({"name":"ember-form-tool","version":"v0.2.5"});
}

/* jshint ignore:end */
//# sourceMappingURL=dummy.map