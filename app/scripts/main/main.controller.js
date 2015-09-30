'use strict';

class MainController {
  constructor(userService) {
    this.userService = userService;
    this.user = {};
  }

  findUser(id) {
    this.userService.getUser(id).then((user)=> {
      this.user = user;
    });
  }
}

MainController.$inject = ['userService'];

export default MainController;