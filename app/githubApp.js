import angular from 'angular';

import starsCtrl from './scripts/stars/stars.controller';
import mainController from './scripts/main/main.controller';
import starsService from './scripts/starService';
import starFactory from './scripts/starFactory';
import starsComponent from './scripts/stars/stars.component'
import starItem from './scripts/stars/starItem.component'

import myText from './templates/star.html!text';

import directiveCtrl from './scripts/directiveController';

angular.module('githubApp', [])
  .service('starsService', starsService)
//.factory('starsService', starFactory.instance)
  .controller('starsCtrl', starsCtrl)
  .directive('starsComponent', starsComponent.instance)
  .directive('starItem', starItem.instance)
  .controller('mainController', mainController);


angular.module('bla', ['githubApp']);
angular.module('bla', [
  //'ngMockE2E'
]).run(function(){

});





