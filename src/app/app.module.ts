import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import {HttpClientModule} from "@angular/common/http";
import { GlobalErrorComponent } from './components/global-error/global-error.component';
import {FormsModule, ReactiveFormsModule } from "@angular/forms";
import { FilterProductsPipe } from './pipes/filter-products.pipe';
import { ModalComponent } from './components/modal/modal.component';
import { CreateProductComponent } from './components/create-product/create-product.component';
import { FocusDirective } from './directives/focus.directive';
import { AngularPageComponent } from './pages/angular-page/angular-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { AppRoutingModule } from './app-routing.module';
import { ProductsPageComponent } from './pages/products-page/products-page.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { ChildrenComponent } from './components/children/children.component';
import { DoubleComponent } from './components/children/double/double.component';
import { BoldTextDirective } from './directives/bold-text.directive';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    GlobalErrorComponent,
    FilterProductsPipe,
    ModalComponent,
    CreateProductComponent,
    FocusDirective,
    AngularPageComponent,
    AboutPageComponent,
    ProductsPageComponent,
    NavigationComponent,
    ChildrenComponent,
    DoubleComponent,
    BoldTextDirective
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
