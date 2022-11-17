import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { TarjetasProductoModule } from '../../components/tarjetas-producto/tarjetas-producto.module';
import { ProductoDetalleModule } from '../../components/producto-detalle/producto-detalle.module';
import { ModalModule } from '../../components/modal/modal.module';

import { ReposteriaRibbonModule } from './components/reposteria-ribbon/reposteria-ribbon.module';
import { ReposteriaServiciosModule } from './components/reposteria-servicios/reposteria-servicios.module';

import { ReposteriaComponent } from './reposteria.component';
import { ReposteriaService } from './reposteria.service';
import { ReposteriaRoutingModule } from './reposteria-routing.module';
import { ReposteriaListadoComponent } from './reposteria-listado/reposteria-listado.component';
import { ReposteriaDetalleComponent } from './reposteria-detalle/reposteria-detalle.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    
    ReposteriaRoutingModule,
    
    TarjetasProductoModule,
    ProductoDetalleModule,
    ModalModule,
    
    ReposteriaRibbonModule,
    ReposteriaServiciosModule,
  ],
  declarations: [
    ReposteriaComponent,
    ReposteriaListadoComponent,
    ReposteriaDetalleComponent
  ],
  exports: [
    ReposteriaComponent,
    ReposteriaListadoComponent,
    ReposteriaDetalleComponent
  ],
  providers: [
    ReposteriaService,
  ]
})
export class ReposteriaModule {}