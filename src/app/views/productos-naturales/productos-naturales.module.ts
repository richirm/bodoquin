import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductosNaturalesRoutingModule } from './productos-naturales-routing.module';
import { ProductosNaturalesComponent } from './productos-naturales.component';


@NgModule({
  declarations: [ProductosNaturalesComponent],
  imports: [
    CommonModule,
    ProductosNaturalesRoutingModule
  ]
})
export class ProductosNaturalesModule { }
