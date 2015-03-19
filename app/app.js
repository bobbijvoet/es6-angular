import angular from 'angular';
//import * as UserModule from './user/user.module';
import starsCtrl from './scripts/starsController';

import starsService from './scripts/starService';
import starFactory from './scripts/starFactory';

import directiveCtrl from './scripts/directiveController';

angular.module('myApp', [])
  .service('starsService', starsService)
//.factory('starsService', starFactory.factory)
  .controller('userCtrl', starsCtrl);


angular.module('myApp').directive('starDirective', () => {
  return {
    restrict: 'A',
    controller: directiveCtrl.factory,
    controllerAs: 'starItemCtrl',
    bindToController: true,
    scope:{star:'='},
    template: '<li>{{starItemCtrl.star.id}}. {{starItemCtrl.star.name}}</li>'
  }
});