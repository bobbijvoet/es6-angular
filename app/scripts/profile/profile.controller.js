'use strict';

class ProfileController {
  constructor(profileService) {
    this.profileService = profileService;
    this.init();
  }

  init() {
    this.profileService.getProfile().then(profile => {

      this.profile = profile;
    });
  }
}

ProfileController.$inject = ['profileService'];

export default ProfileController;