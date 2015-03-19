'use strict';

class StarFactory {
  constructor($http) {
    this.$http = $http;
  }

  getUsers() {
    return this.$http.get('https://api.github.com/users/bobbijvoet/starred').then(r => r.data);
  }

  static factory($http) {
    return new StarFactory($http);
  }
}

StarFactory.factory.$inject = ['$http'];

export default StarFactory;