import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { JugueteriaServiciosAsistenciaComponent } from './jugueteria-servicios-asistencia.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
  ],
  declarations: [
    JugueteriaServiciosAsistenciaComponent,
  ],
  exports: [
    JugueteriaServiciosAsistenciaComponent,
  ],
})
export class JugueteriaServiciosAsistenciaModule {}