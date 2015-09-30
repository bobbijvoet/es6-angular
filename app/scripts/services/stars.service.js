'use strict';

class StarsService {
  constructor($http) {
    this.$http = $http;
  }

  getStars(username) {
    return this.$http.get(`https://api.github.com/users/${username}/starred`).then(response => response.data);
  }
}

StarsService.$inject = ['$http'];

export default StarsService;