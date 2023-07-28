import {Component, OnInit} from '@angular/core';
import {IProduct} from "./models/product";
import {product} from '../api/product'
import {ProductsService} from "./services/products.service";
import {Observable} from "rxjs";
import {tap} from "rxjs/operators";
import {ModalService} from "./services/modal.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-first';
  hello = " Hello new Framework";



}
