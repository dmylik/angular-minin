import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {AboutPageComponent} from "./pages/about-page/about-page.component";
import {AngularPageComponent} from "./pages/angular-page/angular-page.component";
import {ProductsPageComponent} from "./pages/products-page/products-page.component";

const routes: Routes =[
  {path: 'about', component: AboutPageComponent},
  {path: 'angular', component: AngularPageComponent},
  {path: '', component: ProductsPageComponent},
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
