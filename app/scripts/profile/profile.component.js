import profile from './profile.html!text';
import profileController from './profile.controller';
//import profileService from './profile.service';

class Profile {
  constructor() {
    this.restrict = 'EA';
    this.template = profile;
    this.bindToController = true;
    this.controller = profileController;
    this.controllerAs = 'vm';
  }

  link() {
    console.log('yeah im there');
  }

  static instance() {
    return new Profile();

  }

}

export default Profile;