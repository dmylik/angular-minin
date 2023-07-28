import {Component, OnInit} from '@angular/core';
import {FormGroup, FormControl, Validators} from "@angular/forms";
import {ProductsService} from "../../services/products.service";
import {ModalService} from "../../services/modal.service";

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit{
  constructor(
    private modalService: ModalService,
    private productsService: ProductsService) {
  }

  form = new FormGroup({
    title: new FormControl<string>('', [
      Validators.required,
      Validators.minLength(6)
    ]),
    price: new FormControl<number>(0)
  })

  submit(){
    console.log(this.form.value);
    this.productsService.create({
      title: this.form.value.title as string ,
        price: this.form.value.price as number,
      description: 'lorem ipsum set',
      image: 'https://i.pravatar.cc',
      category: 'electronic',
      rating: {
        rate: 32,
        count: 1
      }
    }).subscribe(()=>{
      this.modalService.close()
    })
  }

  get titleErr(){
    return this.form.controls.title as FormControl
  }


  ngOnInit(): void {
  }
}
