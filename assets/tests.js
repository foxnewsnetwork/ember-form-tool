define('dummy/tests/acceptance/em-form-for-test', ['exports', 'ember', 'qunit', 'dummy/tests/helpers/start-app'], function (exports, _ember, _qunit, _dummyTestsHelpersStartApp) {
  var application;

  application = null;

  (0, _qunit.module)('Acceptance: EmFormFor', {
    beforeEach: function beforeEach() {
      application = (0, _dummyTestsHelpersStartApp['default'])();

      /*
      Don't return as Ember.Application.then is deprecated.
      Newer version of QUnit uses the return value's .then
      function to wait for promises if it exists.
       */
    },
    afterEach: function afterEach() {
      return _ember['default'].run(application, 'destroy');
    }
  });

  (0, _qunit.test)('visiting /', function (assert) {
    visit('/');
    return andThen(function () {
      return assert.equal(currentURL(), '/');
    });
  });
});
define('dummy/tests/app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - .');
  QUnit.test('app.js should pass jshint', function (assert) {
    assert.ok(true, 'app.js should pass jshint.');
  });
});
define('dummy/tests/helpers/resolver', ['exports', 'ember/resolver', 'dummy/config/environment'], function (exports, _emberResolver, _dummyConfigEnvironment) {

  var resolver = _emberResolver['default'].create();

  resolver.namespace = {
    modulePrefix: _dummyConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _dummyConfigEnvironment['default'].podModulePrefix
  };

  exports['default'] = resolver;
});
define('dummy/tests/helpers/resolver.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - helpers');
  QUnit.test('helpers/resolver.js should pass jshint', function (assert) {
    assert.ok(true, 'helpers/resolver.js should pass jshint.');
  });
});
define('dummy/tests/helpers/start-app', ['exports', 'ember', 'dummy/app', 'dummy/router', 'dummy/config/environment'], function (exports, _ember, _dummyApp, _dummyRouter, _dummyConfigEnvironment) {
  exports['default'] = startApp;

  function startApp(attrs) {
    var application;

    var attributes = _ember['default'].merge({}, _dummyConfigEnvironment['default'].APP);
    attributes = _ember['default'].merge(attributes, attrs); // use defaults, but you can override;

    _ember['default'].run(function () {
      application = _dummyApp['default'].create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
    });

    return application;
  }
});
define('dummy/tests/helpers/start-app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - helpers');
  QUnit.test('helpers/start-app.js should pass jshint', function (assert) {
    assert.ok(true, 'helpers/start-app.js should pass jshint.');
  });
});
define('dummy/tests/integration/components/em-email-field-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {
  (0, _emberQunit.moduleForComponent)('em-email-field', 'Integration | Component | em email field', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {
    assert.expect(2);
    this.render(Ember.HTMLBars.template((function () {
      return {
        meta: {
          'fragmentReason': {
            'name': 'missing-wrapper',
            'problems': ['wrong-type']
          },
          'revision': 'Ember@2.2.0',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 1,
              'column': 18
            }
          }
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment('');
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
        statements: [['content', 'em-email-field', ['loc', [null, [1, 0], [1, 18]]]]],
        locals: [],
        templates: []
      };
    })()));
    assert.equal(this.$().text().trim(), '');
    this.render(Ember.HTMLBars.template((function () {
      var child0 = (function () {
        return {
          meta: {
            'fragmentReason': {
              'name': 'missing-wrapper',
              'problems': ['wrong-type']
            },
            'revision': 'Ember@2.2.0',
            'loc': {
              'source': null,
              'start': {
                'line': 1,
                'column': 0
              },
              'end': {
                'line': 3,
                'column': 0
              }
            }
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode('  template block text\n');
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
          'fragmentReason': {
            'name': 'missing-wrapper',
            'problems': ['wrong-type']
          },
          'revision': 'Ember@2.2.0',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 3,
              'column': 19
            }
          }
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment('');
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
        statements: [['block', 'em-email-field', [], [], 0, null, ['loc', [null, [1, 0], [3, 19]]]]],
        locals: [],
        templates: [child0]
      };
    })()));
    return assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('dummy/tests/integration/components/em-password-field-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {
  (0, _emberQunit.moduleForComponent)('em-password-field', 'Integration | Component | em password field', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {
    assert.expect(2);
    this.render(Ember.HTMLBars.template((function () {
      return {
        meta: {
          'fragmentReason': {
            'name': 'missing-wrapper',
            'problems': ['wrong-type']
          },
          'revision': 'Ember@2.2.0',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 1,
              'column': 21
            }
          }
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment('');
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
        statements: [['content', 'em-password-field', ['loc', [null, [1, 0], [1, 21]]]]],
        locals: [],
        templates: []
      };
    })()));
    assert.equal(this.$().text().trim(), '');
    this.render(Ember.HTMLBars.template((function () {
      var child0 = (function () {
        return {
          meta: {
            'fragmentReason': {
              'name': 'missing-wrapper',
              'problems': ['wrong-type']
            },
            'revision': 'Ember@2.2.0',
            'loc': {
              'source': null,
              'start': {
                'line': 1,
                'column': 0
              },
              'end': {
                'line': 3,
                'column': 0
              }
            }
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode('  template block text\n');
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
          'fragmentReason': {
            'name': 'missing-wrapper',
            'problems': ['wrong-type']
          },
          'revision': 'Ember@2.2.0',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 3,
              'column': 22
            }
          }
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment('');
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
        statements: [['block', 'em-password-field', [], [], 0, null, ['loc', [null, [1, 0], [3, 22]]]]],
        locals: [],
        templates: [child0]
      };
    })()));
    return assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('dummy/tests/integration/components/em-text-field-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {
  (0, _emberQunit.moduleForComponent)('em-text-field', 'Integration | Component | em text field', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {
    assert.expect(2);
    this.render(Ember.HTMLBars.template((function () {
      return {
        meta: {
          'fragmentReason': {
            'name': 'missing-wrapper',
            'problems': ['wrong-type']
          },
          'revision': 'Ember@2.2.0',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 1,
              'column': 17
            }
          }
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment('');
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
        statements: [['content', 'em-text-field', ['loc', [null, [1, 0], [1, 17]]]]],
        locals: [],
        templates: []
      };
    })()));
    assert.equal(this.$().text().trim(), '');
    this.render(Ember.HTMLBars.template((function () {
      var child0 = (function () {
        return {
          meta: {
            'fragmentReason': {
              'name': 'missing-wrapper',
              'problems': ['wrong-type']
            },
            'revision': 'Ember@2.2.0',
            'loc': {
              'source': null,
              'start': {
                'line': 1,
                'column': 0
              },
              'end': {
                'line': 3,
                'column': 0
              }
            }
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode('  template block text\n');
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
          'fragmentReason': {
            'name': 'missing-wrapper',
            'problems': ['wrong-type']
          },
          'revision': 'Ember@2.2.0',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 3,
              'column': 18
            }
          }
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment('');
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
        statements: [['block', 'em-text-field', [], [], 0, null, ['loc', [null, [1, 0], [3, 18]]]]],
        locals: [],
        templates: [child0]
      };
    })()));
    return assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('dummy/tests/integration/components/em-textarea-field-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {
  (0, _emberQunit.moduleForComponent)('em-textarea-field', 'Integration | Component | em textarea field', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {
    assert.expect(2);
    this.render(Ember.HTMLBars.template((function () {
      return {
        meta: {
          'fragmentReason': {
            'name': 'missing-wrapper',
            'problems': ['wrong-type']
          },
          'revision': 'Ember@2.2.0',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 1,
              'column': 21
            }
          }
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment('');
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
        statements: [['content', 'em-textarea-field', ['loc', [null, [1, 0], [1, 21]]]]],
        locals: [],
        templates: []
      };
    })()));
    assert.equal(this.$().text().trim(), '');
    this.render(Ember.HTMLBars.template((function () {
      var child0 = (function () {
        return {
          meta: {
            'fragmentReason': {
              'name': 'missing-wrapper',
              'problems': ['wrong-type']
            },
            'revision': 'Ember@2.2.0',
            'loc': {
              'source': null,
              'start': {
                'line': 1,
                'column': 0
              },
              'end': {
                'line': 3,
                'column': 0
              }
            }
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode('  template block text\n');
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
          'fragmentReason': {
            'name': 'missing-wrapper',
            'problems': ['wrong-type']
          },
          'revision': 'Ember@2.2.0',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 3,
              'column': 22
            }
          }
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment('');
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
        statements: [['block', 'em-textarea-field', [], [], 0, null, ['loc', [null, [1, 0], [3, 22]]]]],
        locals: [],
        templates: [child0]
      };
    })()));
    return assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('dummy/tests/router.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - .');
  QUnit.test('router.js should pass jshint', function (assert) {
    assert.ok(true, 'router.js should pass jshint.');
  });
});
define('dummy/tests/test-helper', ['exports', 'dummy/tests/helpers/resolver', 'ember-qunit'], function (exports, _dummyTestsHelpersResolver, _emberQunit) {

  (0, _emberQunit.setResolver)(_dummyTestsHelpersResolver['default']);
});
define('dummy/tests/test-helper.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - .');
  QUnit.test('test-helper.js should pass jshint', function (assert) {
    assert.ok(true, 'test-helper.js should pass jshint.');
  });
});
define('dummy/tests/unit/components/em-form-for-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {
  (0, _emberQunit.moduleForComponent)('em-form-for', 'FormForComponent', {
    needs: ["component:em-form-input", "template:components/em-form-input", "template:-fixture"]
  });

  (0, _emberQunit.test)('it renders', function (assert) {
    var component;
    assert.expect(2);
    component = this.subject();
    assert.equal(component._state, 'preRender');
    this.render();
    return assert.equal(component._state, 'inDOM');
  });

  (0, _emberQunit.test)('it should render the correct fixture', function (assert) {
    var component, input1;
    component = this.subject({
      model: Ember.Object.create({
        email: "some@somewhere.co"
      }),
      templateName: "-fixture"
    });
    this.render();
    assert.equal(component.$(".input-section").length, 2);
    input1 = Ember.View.views["charlie-401"];
    assert.ok(input1);
    return assert.equal(input1.get("value"), "some@somewhere.co");
  });

  (0, _emberQunit.test)('values on the input should be properly bound to the model on the form', function (assert) {
    var component, input1, model;
    model = Ember.Object.create({
      email: "some@somewhere.co"
    });
    component = this.subject({
      model: model,
      templateName: "-fixture"
    });
    this.render();
    input1 = Ember.View.views["charlie-401"];
    assert.equal(input1.get("value"), "some@somewhere.co");
    return Ember.run(function () {
      model.set("email", "ichibanno@takaramono.angel");
      return assert.equal(input1.get("value"), "ichibanno@takaramono.angel");
    });
  });

  (0, _emberQunit.test)('it should properly display errors given an error object on the form', function (assert) {
    var actual, component, input1, mistakes;
    mistakes = Ember.Object.create({
      email: Ember.A(["cannot be blank", "cannot be from China"])
    });
    component = this.subject({
      mistakes: mistakes,
      templateName: "-fixture"
    });
    this.render();
    input1 = Ember.View.views["charlie-401"];
    assert.equal(input1.$(".error-text").length, 2);
    actual = [];
    input1.$(".error-text").each(function (index, el) {
      return actual.push($(el).text());
    });
    return assert.deepEqual(actual, ["cannot be blank", "cannot be from China"]);
  });
});
define('dummy/tests/unit/mixins/form-field-core-test', ['exports', 'ember', 'dummy/mixins/form-field-core', 'qunit'], function (exports, _ember, _dummyMixinsFormFieldCore, _qunit) {
  (0, _qunit.module)('Unit | Mixin | form field core');

  (0, _qunit.test)('it works', function (assert) {
    var FormFieldCoreObject, subject;
    FormFieldCoreObject = _ember['default'].Object.extend(_dummyMixinsFormFieldCore['default']);
    subject = FormFieldCoreObject.create();
    return assert.ok(subject);
  });
});
define('dummy/tests/unit/mixins/form-input-core-test', ['exports', 'ember', 'dummy/mixins/form-input-core', 'qunit'], function (exports, _ember, _dummyMixinsFormInputCore, _qunit) {
  (0, _qunit.module)('Unit | Mixin | form input core');

  (0, _qunit.test)('it works', function (assert) {
    var FormInputCoreObject, subject;
    FormInputCoreObject = _ember['default'].Object.extend(_dummyMixinsFormInputCore['default']);
    subject = FormInputCoreObject.create();
    return assert.ok(subject);
  });
});
/* jshint ignore:start */

require('dummy/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;

/* jshint ignore:end */
//# sourceMappingURL=tests.map