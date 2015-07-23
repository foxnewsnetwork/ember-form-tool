import Ember from "ember";

export default Ember.Helper.helper(function([object, path]){
  if (typeof path !== "undefined" && path !== null) {
    return Ember.get(object, path);
  }
  return object;
});