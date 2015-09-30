import welcomeCtrl from './welcome.controller';
import welcomeTpl from './welcome.html!text';


class Welcome {
  constructor() {
    this.restrict = 'E';
    this.template = welcomeTpl;
    this.scope = true;
    this.controller = welcomeCtrl;
    this.controllerAs = 'welcomeCtrl';
    this.bindToController = true;
  }

  static instance() {
    return new Welcome();
  }
}

angular.module('githubApp')
  .directive('welcomeComponent', Welcome.instance);

export default Welcome;