import profile from './profile.html!text';
import profileController from './profile.controller';
import profileService from './profile.service';

class Profile {
  constructor() {
    this.restrict = 'E';
    this.bindToController = true;
    this.controller = profileController;
    this.controllerAs = 'vm';
    this.template = profile;
  }

  static instance() {
    return new Profile();
  }
}

angular.module('githubApp')
  .directive('profileComponent', Profile.instance)
  .service('profileService', profileService)
  .controller('profileCtrl', profileController);

export default Profile;