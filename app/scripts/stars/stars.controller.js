'use strict';



class StarsController {
  constructor(starsService, $scope) {
    this.starsService = starsService;

    $scope.$watch('this.starsCtrl.username', (newValue)=> {
      if(newValue) {
        this.getStars();
      }
    })
  }

  getStars() {
    this.starsService.getStars(this.username).then(users => {
      this.stars = users;
    });
  }
}

StarsController.$inject = ['starsService', '$scope'];

export default StarsController;