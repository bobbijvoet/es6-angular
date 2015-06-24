import starItem from './starItem.html!text';

class StarItem {
  constructor() {
    this.restrict = 'E';
    this.template = starItem;
    this.controller = function(){}
    this.controllerAs = 'ctrl';
    this.bindToController = {
      'data':'='
    }
  }

  link(scope, elem, attrs, ngModelController) {
    console.log('yeah it got logged');

  }

  static instance() {
    return new StarItem();

  }
}


export default StarItem;