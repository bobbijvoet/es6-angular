import starsTpl from '../stars/stars.html!text';
import starsCtrl from './stars.controller';
import starItem from './starItem.component'

class StarsComponent {
  constructor() {
    //this.require = 'ngModel';  //Properties of DDO have to be attached to the instance through this reference
    this.restrict = 'E';
    this.template = starsTpl;
    this.controller  = starsCtrl;
    this.controllerAs = 'vm'
  }

  link(scope, elem, attrs, ngModelController) {
    console.log('yeah it got logged');

  }

  static instance() {
    return new StarsComponent();

  }
}


export default StarsComponent;


