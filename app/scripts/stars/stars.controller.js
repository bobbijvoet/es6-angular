'use strict';


class StarsController {
  constructor(starsService) {
    this.starsService = starsService;
    this.init();
  }

  init() {
    this.starsService.getUsers().then(users => {

      this.stars = users;
    });
  }
}

StarsController.$inject = ['starsService'];

export default StarsController;