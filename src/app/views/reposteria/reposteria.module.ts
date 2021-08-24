import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TarjetaProductoModule } from '../../components/tarjeta-producto/tarjeta-producto.module';

import { ReposteriaComponent } from './reposteria.component';
import { ReposteriaRoutingModule } from './reposteria-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ReposteriaRoutingModule,
    
    TarjetaProductoModule,
  ],
  declarations: [
    ReposteriaComponent,    
  ],
  exports: [
    ReposteriaComponent,
  ]
})
export class ReposteriaModule {}