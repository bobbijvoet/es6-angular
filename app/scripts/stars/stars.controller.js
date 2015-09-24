'use strict';

import starsService from './stars.service';

angular.module('githubApp').service('starsService', starsService);


class StarsController {
  constructor(starsService) {
    this.starsService = starsService;
    this.init();
  }

  init() {
    this.starsService.getStars().then(users => {

      this.stars = users;
    });
  }
}

StarsController.$inject = ['starsService'];

export default StarsController;