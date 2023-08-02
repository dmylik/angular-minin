import {Component, ElementRef, ViewChild} from '@angular/core';
import {DoubleComponent} from "./double/double.component";

@Component({
  selector: 'app-children',
  templateUrl: './children.component.html',
  styleUrls: ['./children.component.css']
})
export class ChildrenComponent {
  counter: number = 0;
  increment(){this.counter++};
  decrement(){this.counter--};

  @ViewChild(DoubleComponent, {static: false})
  private curentDoubleComponent: DoubleComponent | undefined;

  multiTwo(){this.curentDoubleComponent?.multiTwo()};
  deletelThree(){this.curentDoubleComponent?.deletelThree()}

  @ViewChild("doubleComponent", {static: false})
  testRefMetod: ElementRef | undefined;

  testAddTen(){console.log(this.testRefMetod)} //не могу выполнить метод дочернего по ссылку


}
