'use strict';

class StarsService {
  constructor($http) {
    this.$http = $http;
    this.username = 'bobbijvoet';
  }

  getStars() {
    return this.$http.get(`https://api.github.com/users/${this.username}/starred`).then(response => response.data);
  }
}

StarsService.$inject = ['$http'];

export default StarsService;