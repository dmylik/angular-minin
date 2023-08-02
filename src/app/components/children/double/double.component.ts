import { Component } from '@angular/core';

@Component({
  selector: 'app-double',
  templateUrl: './double.component.html',
  styleUrls: ['./double.component.css']
})
export class DoubleComponent {
  num: number = 2;
  multiTwo(){this.num*=2};
  deletelThree(){this.num/=3};
  addTen(){this.num+=10}
}
