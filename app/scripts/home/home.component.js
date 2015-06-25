class Home {
  constructor() {
    this.restrict = 'E';
    this.name = 'Bob';
    this.template = `Dear ${this.name} This is the homepage`;
  }

  static instance() {
    return new Home();
  }
}

angular.module('githubApp')
  .directive('homeComponent', Home.instance);

export default Home;