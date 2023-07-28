import {Component, OnInit} from '@angular/core';
import {IProduct} from "../../models/product";
import {ProductsService} from "../../services/products.service";
import {ModalService} from "../../services/modal.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.css']
})
export class ProductsPageComponent implements OnInit{
  products: IProduct[] = [];
  loading:boolean =  false;
  products$: Observable<IProduct[]>
  term = ''

  constructor(public productsService: ProductsService,
              public modalService: ModalService) {

  }
  ngOnInit(): void {
    this.loading = true;

    // this.products$ = this.productsService.getAll()
    //   .pipe(
    //     // tap(() => {this.loading = false})
    // )
    // this.loading = false

    this.productsService.getAll().subscribe((response)=>{
      // console.log(response)
      // this.products = response;
      this.loading = false;
    })
  }

  // ngOnInit(): void {
  //   fetch(this.url)
  //     .then(data => console.log(data));
  // }

  // products: IProduct[] = product;
  //

}
