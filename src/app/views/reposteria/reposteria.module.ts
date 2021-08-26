import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TarjetasProductoModule } from '../../components/tarjetas-producto/tarjetas-producto.module';

import { ReposteriaComponent } from './reposteria.component';
import { ReposteriaRoutingModule } from './reposteria-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ReposteriaRoutingModule,
    
    TarjetasProductoModule,
  ],
  declarations: [
    ReposteriaComponent,    
  ],
  exports: [
    ReposteriaComponent,
  ]
})
export class ReposteriaModule {}