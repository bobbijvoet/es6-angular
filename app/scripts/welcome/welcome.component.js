class Welcome {
  constructor() {
    this.restrict = 'E';
    this.name = 'Bob';
    this.template = `Welcome ${this.name}`;
  }

  static instance() {
    return new Welcome();
  }
}

angular.module('githubApp')
  .directive('homeComponent', Welcome.instance);

export default Welcome;