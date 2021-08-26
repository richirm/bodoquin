import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TarjetasProductoModule } from '../../components/tarjetas-producto/tarjetas-producto.module';

import { JugueteriaComponent } from './jugueteria.component';
import { JugueteriaRoutingModule } from './jugueteria-routing.module';

@NgModule({
  imports: [
    CommonModule,
    JugueteriaRoutingModule,
    
    TarjetasProductoModule,
  ],
  declarations: [
    JugueteriaComponent,    
  ],
  exports: [
    JugueteriaComponent,
  ]
})
export class JugueteriaModule {}