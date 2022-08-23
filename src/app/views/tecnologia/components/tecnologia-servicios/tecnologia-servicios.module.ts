import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TecnologiaServiciosAsistenciaModule } from './components/tecnologia-servicios-asistencia/tecnologia-servicios-asistencia.module';
import { TecnologiaServiciosProductosModule } from './components/tecnologia-servicios-productos/tecnologia-servicios-productos.module';
import { TecnologiaServiciosReclamosModule } from './components/tecnologia-servicios-reclamos/tecnologia-servicios-reclamos.module';

import { TecnologiaServiciosComponent } from './tecnologia-servicios.component';
import { TecnologiaServiciosService } from './tecnologia-servicios.service';

@NgModule({
  imports: [
    CommonModule,
    
    TecnologiaServiciosProductosModule,
    TecnologiaServiciosAsistenciaModule,
    TecnologiaServiciosReclamosModule,
  ],
  declarations: [
    TecnologiaServiciosComponent
  ],
  exports: [
    TecnologiaServiciosComponent
  ],
  providers: [
    TecnologiaServiciosService
  ]
})
export class TecnologiaServiciosModule {}