import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TarjetasProductoModule } from '../../components/tarjetas-producto/tarjetas-producto.module';

import { TecnologiaComponent } from './tecnologia.component';
import { TecnologiaService } from './tecnologia.service';
import { TecnologiaRoutingModule } from './tecnologia-routing.module';
import { TecnologiaListadoComponent } from './tecnologia-listado/tecnologia-listado.component';
import { TecnologiaDetalleComponent } from './tecnologia-detalle/tecnologia-detalle.component';

@NgModule({
  imports: [
    CommonModule,
    TecnologiaRoutingModule,
    
    TarjetasProductoModule,
  ],
  declarations: [
    TecnologiaComponent,    
    TecnologiaListadoComponent,
    TecnologiaDetalleComponent,
  ],
  exports: [
    TecnologiaComponent,
    TecnologiaListadoComponent,
    TecnologiaDetalleComponent,
  ],
  providers: [
    TecnologiaService,
  ]
})
export class TecnologiaModule {}