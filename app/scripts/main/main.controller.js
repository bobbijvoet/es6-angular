'use strict';

class MainController {
  constructor(userService) {
    this.userService = userService;
  }

  findUser(id) {
    this.userService.getUser(id).then((user)=> {
      this.user = user;
    });
  }
}

MainController.$inject = ['userService'];

export default MainController;