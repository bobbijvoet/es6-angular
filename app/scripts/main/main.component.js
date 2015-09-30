import './scripts/selectUser/selectUser.component.js';
import './scripts/profile/profile.component';
import './scripts/stars/stars.component';

import mainTemplate from './main.html!text';
import mainController from './main.controller';
import UserService from './../services/user.service';


class Main {
  constructor() {
    this.restrict = 'E';
    this.template = mainTemplate;
    this.bindToController = true;
    this.controller = mainController;
    this.controllerAs = 'mainCtrl';
  }

  static instance() {
    return new Main();
  }

}

angular.module('githubApp')
  .directive('mainComponent', Main.instance)
  .service('userService', UserService);

export default Main;