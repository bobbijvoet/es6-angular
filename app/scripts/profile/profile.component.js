import profile from './profile.html!text';
import profileController from './profile.controller';

class Profile {
  constructor() {
    this.restrict = 'E';
    this.scope = true;
    this.bindToController = {
      photo: '=',
      username:'='
    };
    this.controller = profileController;
    this.controllerAs = 'profileCtrl';
    this.template = profile;
  }

  static instance() {
    return new Profile();
  }
}

angular.module('githubApp')
  .directive('profileComponent', Profile.instance);

export default Profile;