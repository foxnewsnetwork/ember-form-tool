var RSVP = require('rsvp');

module.exports = {
  description: 'pulls in truth helpers which we dependent on',

  normalizeEntityName: function() {},

  afterInstall: function(options) {
    return RSVP.all([
      this.addPackageToProject("ember-power-select", "0.6.4"),
      this.addPackageToProject("ember-bootstrap-datetimepicker", "*"),
      this.addPackageToProject("ember-truth-helpers", "1.2.0"),
      this.addPackageToProject("ember-webcam-input", "0.0.2")
    ]);
  }
};
