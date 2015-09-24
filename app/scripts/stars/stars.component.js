import starsTpl from '../stars/stars.html!text';
import StarsCtrl from './stars.controller';
import starItem from './starItem.component'

class StarsComponent {
  constructor() {
    this.restrict = 'E';
    this.template = starsTpl;
    this.controller = StarsCtrl;
    this.controllerAs = 'starsCtrl'
  }

  static instance() {
    return new StarsComponent();

  }
}

angular.module('githubApp')
  .directive('starsComponent', StarsComponent.instance)
  .directive('starItem', starItem.instance)


export default StarsComponent;