import angular from 'angular';

import starsCtrl from './scripts/starsController';
import starsService from './scripts/starService';
import starFactory from './scripts/starFactory';

import myText from './templates/star.html!text';

import directiveCtrl from './scripts/directiveController';

angular.module('myApp', [])
  .service('starsService', starsService)
//.factory('starsService', starFactory.instance)
  .controller('starsCtrl', starsCtrl);


angular.module('myApp').directive('starDirective', () => {
  return {
    restrict: 'A',
    controller: directiveCtrl.instance,
    controllerAs: 'starItemCtrl',
    bindToController: true,
    scope: {star: '='},
    template: myText,
    link: ($scope) => {
      //console.log($scope.starItemCtrl.star.stargazers_count, 'eee');
    }
  }
});