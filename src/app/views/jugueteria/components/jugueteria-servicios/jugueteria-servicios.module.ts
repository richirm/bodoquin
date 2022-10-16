import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JugueteriaServiciosProductosModule } from './components/jugueteria-servicios-productos/jugueteria-servicios-productos.module';
import { JugueteriaServiciosAsistenciaModule } from './components/jugueteria-servicios-asistencia/jugueteria-servicios-asistencia.module';
import { JugueteriaServiciosSoporteModule } from './components/jugueteria-servicios-soporte/jugueteria-servicios-soporte.module';

import { JugueteriaServiciosComponent } from './jugueteria-servicios.component';
import { JugueteriaServiciosService } from './jugueteria-servicios.service';

import { CamelCasePipe } from './pipes/camel-case.pipe';
import { MayorEdadPipe } from './pipes/mayor-edad.pipe';
import { CantidadCaracteresPipe } from './pipes/cantidad-caracteres.pipe';

@NgModule({
  imports: [
    CommonModule,
    
    JugueteriaServiciosProductosModule,
    JugueteriaServiciosAsistenciaModule,
    JugueteriaServiciosSoporteModule,
  ],
  declarations: [
    JugueteriaServiciosComponent,
    CamelCasePipe,
    MayorEdadPipe,
    CantidadCaracteresPipe,
  ],
  exports: [
    JugueteriaServiciosComponent,
  ],
  providers: [
    JugueteriaServiciosService,
  ]
})
export class JugueteriaServiciosModule {}