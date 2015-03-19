'use strict';

class DirectiveController {
  constructor() {
    console.log('directive!');
    this.init();
  }

  init() {
    //this.starsService.getUsers().then(users => {
    //  this.users = users;
    //  console.log(users);
    //});
  }

  static factory() {
    return new DirectiveController();
  }
}

//DirectiveController.$inject = ['starsService'];

export default DirectiveController;