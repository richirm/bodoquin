import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TarjetasProductoModule } from '../../components/tarjetas-producto/tarjetas-producto.module';

import { ModaComponent } from './moda.component';
import { ModaService } from './moda.service';
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
  ],
  providers: [
    ModaService,
  ]
})
export class ModaModule {}