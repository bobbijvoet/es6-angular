'use strict';

class ProfileService {
  constructor($http) {
    this.$http = $http;
  }

  getProfile() {
    return this.$http.get('https://api.github.com/users/bobbijvoet').then(r => r.data);
  }
}

ProfileService.$inject = ['$http'];

export default ProfileService;