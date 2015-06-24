'use strict';

class StarsService {
  constructor($http) {
    this.$http = $http;
  }

  getStars() {
    return this.$http.get('https://api.github.com/users/bobbijvoet/starred').then(r => r.data);
  }
}

StarsService.$inject = ['$http'];

export default StarsService;