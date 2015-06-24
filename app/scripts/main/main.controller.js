'use strict';

class MainController {
  constructor() {
    this.state = 'home';
  }

  selectState(newState) {
    this.state = newState;
  }
}

export default MainController;