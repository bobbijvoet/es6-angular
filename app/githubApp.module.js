import angular from 'angular';

import mainController from './scripts/main/main.controller';
import mainComponent from './scripts/main/main.component';

import starsCtrl from './scripts/stars/stars.controller';
import starsService from './scripts/stars/stars.service';
import starsComponent from './scripts/stars/stars.component'
import starItem from './scripts/stars/starItem.component';

angular.module('githubApp', [])

  .controller('mainController', mainController)
  .directive('mainComponent', mainComponent.instance)

  .directive('starsComponent', starsComponent.instance)
  .service('starsService', starsService)
  .controller('starsCtrl', starsCtrl)
  .directive('starItem', starItem.instance)
;