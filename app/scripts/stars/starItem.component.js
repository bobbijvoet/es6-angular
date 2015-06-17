import starItem from './starItem.html!text';

class StarItem {
  constructor() {
    this.restrict = 'E';
    this.template = starItem;
    this.bindToController = true;

    this.scope = {
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