import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TarjetaProductoComponent } from './tarjeta-producto.component';

@NgModule({
  imports: [CommonModule],
  declarations: [TarjetaProductoComponent],
  exports: [TarjetaProductoComponent]
})
export class TarjetaProductoModule {}