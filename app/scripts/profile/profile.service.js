'use strict';

class ProfileService {
  constructor($http) {
    this.$http = $http;
    this.coolObject = {really:'cool'};
  }

  getProfile() {
    return this.$http.get('https://api.github.com/users/bobbijvoet').then(function (response) {
      //Do someting with the data provide
      console.log(this.coolObject);
      console.log(response.data);
      return response.data
    });
  }
}

ProfileService.$inject = ['$http'];

export default ProfileService;