import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TarjetaProductoModule } from '../../components/tarjeta-producto/tarjeta-producto.module';

import { ModaComponent } from './moda.component';
import { ModaRoutingModule } from './moda-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ModaRoutingModule,
    
    TarjetaProductoModule,
  ],
  declarations: [
    ModaComponent,    
  ],
  exports: [
    ModaComponent,
  ]
})
export class ModaModule {}