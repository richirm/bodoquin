import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TarjetasProductoModule } from '../../components/tarjetas-producto/tarjetas-producto.module';

import { TecnologiaComponent } from './tecnologia.component';
import { TecnologiaService } from './tecnologia.service';
import { TecnologiaRoutingModule } from './tecnologia-routing.module';

@NgModule({
  imports: [
    CommonModule,
    TecnologiaRoutingModule,
    
    TarjetasProductoModule,
  ],
  declarations: [
    TecnologiaComponent,    
  ],
  exports: [
    TecnologiaComponent,
  ],
  providers: [
    TecnologiaService,
  ]
})
export class TecnologiaModule {}