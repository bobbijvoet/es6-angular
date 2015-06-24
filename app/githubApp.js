import angular from 'angular';

import mainController from './scripts/main/main.controller';
import mainComponent from './scripts/main/main.component';

import profileController from './scripts/profile/profile.controller';
import profileComponent from './scripts/profile/profile.component';

import starsCtrl from './scripts/stars/stars.controller';
import starsService from './scripts/stars/stars.service';
import starsComponent from './scripts/stars/stars.component'
import starItem from './scripts/stars/starItem.component';

import profileService from './scripts/profile/profile.service';

angular.module('githubApp', [])
  .directive('profileComponent', profileComponent.instance)
  .service('profileService', profileService)
  .controller('pr0fileCtrl', profileController)

  .controller('mainController', mainController)
  .directive('mainComponent', mainComponent.instance)

  .directive('starsComponent', starsComponent.instance)
  .service('starsService', starsService)
  .controller('starsCtrl', starsCtrl)
  .directive('starItem', starItem.instance)
;


angular.module('mockedGithubApp', ['githubApp']);
angular.module('mockedGithubApp', [
  //'ngMockE2E'
]).run(function () {

});





