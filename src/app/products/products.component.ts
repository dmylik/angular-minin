import {Component, Input} from '@angular/core';
// @ts-ignore
import {IProduct} from "../models/product";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  @Input() products: IProduct

  details: boolean = false
}
