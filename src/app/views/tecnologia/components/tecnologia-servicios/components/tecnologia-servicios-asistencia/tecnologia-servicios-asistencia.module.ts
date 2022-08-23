import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TecnologiaServiciosAsistenciaComponent } from './tecnologia-servicios-asistencia.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
  ],
  declarations: [
    TecnologiaServiciosAsistenciaComponent
  ],
  exports: [
    TecnologiaServiciosAsistenciaComponent
  ],
})
export class TecnologiaServiciosAsistenciaModule {}