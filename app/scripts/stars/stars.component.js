import starsTpl from '../stars/stars.html!text';
import StarsCtrl from './stars.controller';
import starItem from './starItem.component'

class StarsComponent {
  constructor() {
    this.restrict = 'E';
    this.template = starsTpl;
    this.controller  = StarsCtrl;
    this.controllerAs = 'starsCtrl'
  }

  static instance() {
    return new StarsComponent();

  }
}


export default StarsComponent;


