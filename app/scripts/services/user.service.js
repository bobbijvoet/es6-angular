'use strict';

class UserService {
  constructor($http) {
    this.$http = $http;
  }

  getUser(id) {
    return this.$http.get('https://api.github.com/users/' + id).then((response) => {
      return response.data
    });
  }
}

UserService.$inject = ['$http'];

export default UserService;