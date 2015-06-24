'use strict';

class ProfileService {
  constructor($http) {
    this.$http = $http;
  }

  getProfile() {
    return this.$http.get('https://api.github.com/users/bobbijvoet').then(function (response) {

      //Do someting with the data provide
      console.log(response.data);
      console.log(this);
      //Calc how long i'm member
      return response.data
    });
  }
}

ProfileService.$inject = ['$http'];

export default ProfileService;