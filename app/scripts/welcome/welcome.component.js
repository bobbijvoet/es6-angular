
class Welcome {
  constructor() {
    this.restrict = 'E';
    this.templateUrl = 'scripts/welcome/welcome.html';
  }

  static instance() {
    return new Welcome();
  }
}

angular.module('githubApp')
  .directive('welcomeComponent', Welcome.instance);

export default Welcome;