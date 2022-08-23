import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TarjetasProductoModule } from '../../components/tarjetas-producto/tarjetas-producto.module';
import { ProductoDetalleModule } from '../../components/producto-detalle/producto-detalle.module';

import { TecnologiaRibbonModule } from './components/tecnologia-ribbon/tecnologia-ribbon.module';
import { TecnologiaServiciosModule } from './components/tecnologia-servicios/tecnologia-servicios.module';

import { TecnologiaComponent } from './tecnologia.component';
import { TecnologiaService } from './tecnologia.service';
import { TecnologiaRoutingModule } from './tecnologia-routing.module';
import { TecnologiaListadoComponent } from './tecnologia-listado/tecnologia-listado.component';
import { TecnologiaDetalleComponent } from './tecnologia-detalle/tecnologia-detalle.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TecnologiaRoutingModule,
    
    TarjetasProductoModule,
    ProductoDetalleModule,
    
    TecnologiaRibbonModule,
    TecnologiaServiciosModule,
  ],
  declarations: [
    TecnologiaComponent,
    TecnologiaListadoComponent,
    TecnologiaDetalleComponent
  ],
  exports: [
    TecnologiaComponent,
    TecnologiaListadoComponent,
    TecnologiaDetalleComponent
  ],
  providers: [
    TecnologiaService,
  ]
})
export class TecnologiaModule {}