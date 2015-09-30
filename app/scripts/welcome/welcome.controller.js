'use strict';

class WelcomeController {
  constructor($http) {
    this.name = 'Bob';
  }
}

WelcomeController.$inject = ['$http'];

export default WelcomeController;