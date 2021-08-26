import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TarjetaProductoModule } from '../../components/tarjeta-producto/tarjeta-producto.module';

import { JugueteriaComponent } from './jugueteria.component';
import { JugueteriaRoutingModule } from './jugueteria-routing.module';

@NgModule({
  imports: [
    CommonModule,
    JugueteriaRoutingModule,
    
    TarjetaProductoModule,
  ],
  declarations: [
    JugueteriaComponent,    
  ],
  exports: [
    JugueteriaComponent,
  ]
})
export class JugueteriaModule {}