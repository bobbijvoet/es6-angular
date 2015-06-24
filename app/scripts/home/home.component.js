class Home {
  constructor() {
    this.restrict = 'E';

    this.template = `I'm home bitches!`;
  }

  static instance() {
    return new Home();
  }
}

angular.module('githubApp')
  .directive('homeComponent', Home.instance);

export default Home;