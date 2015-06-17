'use strict';

class MainController {
  constructor() {
    this.state = '';
    this.selectState('home');
  }

  selectState(newState) {
    this.state = newState;
  }
}

export default MainController;