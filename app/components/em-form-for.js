import EmFormForComponent from 'ember-form-tool/components/em-form-for';
import ENV from '../config/environment';

export default EmFormForComponent.extend({
  flavor: ENV.FormFrameworkFlavor
});