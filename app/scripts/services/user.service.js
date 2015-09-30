'use strict';

class UserService {
  constructor($http) {
    this.$http = $http;
  }

  getUser(id) {
    return this.$http.get('https://api.github.com/users/' + id).then((response) => {

      const {avatar_url:photo, login:username} = response.data;

      return {photo, username};
    });
  }
}

UserService.$inject = ['$http'];

export default UserService;