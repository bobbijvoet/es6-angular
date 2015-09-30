import starsTpl from '../stars/stars.html!text';
import starsCtrl from './stars.controller';
import starItem from './starItem.component';
import starsService from './../services/stars.service.js';


class StarsComponent {
  constructor() {
    this.restrict = 'E';
    this.template = starsTpl;
    this.controller = starsCtrl;
    this.controllerAs = 'starsCtrl';
    this.scope = true;
    this.bindToController = {
      username: '='
    }
  }

  static instance() {
    return new StarsComponent();
  }
}

angular.module('githubApp')
  .directive('starsComponent', StarsComponent.instance)
  .directive('starItem', starItem.instance)
  .service('starsService', starsService);


export default StarsComponent;