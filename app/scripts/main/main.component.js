import main from './main.html!text';
import mainController from './main.controller';

class Main {
  constructor() {
    this.restrict = 'E';
    this.template = main;
    this.bindToController = true;
    this.controller = mainController;
    this.controllerAs = 'mainCtrl';
  }

  static instance() {
    return new Main();

  }

}

export default Main;