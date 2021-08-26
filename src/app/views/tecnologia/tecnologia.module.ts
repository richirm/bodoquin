import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TarjetaProductoModule } from '../../components/tarjeta-producto/tarjeta-producto.module';

import { TecnologiaComponent } from './tecnologia.component';
import { TecnologiaRoutingModule } from './tecnologia-routing.module';

@NgModule({
  imports: [
    CommonModule,
    TecnologiaRoutingModule,
    
    TarjetaProductoModule,
  ],
  declarations: [
    TecnologiaComponent,    
  ],
  exports: [
    TecnologiaComponent,
  ]
})
export class TecnologiaModule {}