import Ember from 'ember';
import config from './config/environment';
window.Error.stackTraceLimit = Infinity;
var Router = Ember.Router.extend({
  location: config.locationType
});

export default Router.map(function() {
});
