import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TarjetaProductoModule } from './tarjeta-producto/tarjeta-producto.module';

import { TarjetasProductoComponent } from './tarjetas-producto.component';

@NgModule({
  imports: [CommonModule,TarjetaProductoModule],
  declarations: [TarjetasProductoComponent],
  exports: [TarjetasProductoComponent]
})
export class TarjetasProductoModule {}