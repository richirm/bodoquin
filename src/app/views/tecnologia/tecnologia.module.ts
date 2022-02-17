import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TarjetasProductoModule } from '../../components/tarjetas-producto/tarjetas-producto.module';
import { ProductoDetalleModule } from '../../components/producto-detalle/producto-detalle.module';
import { TecnologiaMascotasModule } from './components/tecnologia-mascotas/tecnologia-mascotas.module';
import { TecnologiaComidasModule } from './components/tecnologia-comidas/tecnologia-comidas.module';
import { TecnologiaMusicasModule } from './components/tecnologia-musicas/tecnologia-musicas.module';
import { TecnologiaAlumnosModule } from './components/tecnologia-alumnos/tecnologia-alumnos.module';

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
    ProductoDetalleModule,
    TecnologiaMascotasModule,
    TecnologiaComidasModule,
    TecnologiaMusicasModule,
    TecnologiaAlumnosModule
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