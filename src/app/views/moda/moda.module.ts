import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TarjetasProductoModule } from '../../components/tarjetas-producto/tarjetas-producto.module';

import { ModaComponent } from './moda.component';
import { ModaRoutingModule } from './moda-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ModaRoutingModule,
    
    TarjetasProductoModule,
  ],
  declarations: [
    ModaComponent,    
  ],
  exports: [
    ModaComponent,
  ]
})
export class ModaModule {}