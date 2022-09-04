import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReposteriaServiciosAsistenciaModule } from './components/reposteria-servicios-asistencia/reposteria-servicios-asistencia.module';
import { ReposteriaServiciosProductosModule } from './components/reposteria-servicios-productos/reposteria-servicios-productos.module';

import { ReposteriaServiciosComponent } from './reposteria-servicios.component';
import { ReposteriaServiciosService } from './reposteria-servicios.service';

import { CamelCasePipe } from './pipes/camel-case.pipe';
import { MayorEdadPipe } from './pipes/mayor-edad.pipe';

@NgModule({
  imports: [
    CommonModule,
    
    ReposteriaServiciosAsistenciaModule,
    ReposteriaServiciosProductosModule,
  ],
  declarations: [
    ReposteriaServiciosComponent,
    CamelCasePipe,
    MayorEdadPipe,
  ],
  exports: [
    ReposteriaServiciosComponent,
  ],
  providers: [
    ReposteriaServiciosService,
  ]
})
export class ReposteriaServiciosModule {}