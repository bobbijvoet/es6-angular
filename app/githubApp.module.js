import angular from 'angular';

import mainController from './scripts/main/main.controller';
import mainComponent from './scripts/main/main.component';

angular.module('githubApp', [])

  .controller('mainController', mainController)
  .directive('mainComponent', mainComponent.instance)


;