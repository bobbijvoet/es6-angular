import selectUser from './selectUser.html!text';
import selectUserController from './selectUser.controller';

class SelectUser {
  constructor() {
    this.restrict = 'E';
    this.controller = selectUserController;
    this.controllerAs = 'selectUserCtrl';
    this.template = selectUser;
    this.bindToController = {
      onSubmit: '&'
    };
    this.scope = true
  }

  static instance() {
    return new SelectUser();
  }
}

angular.module('githubApp')
  .directive('selectUserComponent', SelectUser.instance);

export default SelectUser;