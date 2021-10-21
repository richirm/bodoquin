import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductoDetalleComponent } from './producto-detalle.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    ProductoDetalleComponent,
  ],
  exports: [
    ProductoDetalleComponent,
  ]
})
export class ProductoDetalleModule {}