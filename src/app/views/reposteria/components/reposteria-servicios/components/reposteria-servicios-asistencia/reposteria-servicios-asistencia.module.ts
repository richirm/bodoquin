import { NgModule } from '@angular/core'; 
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ReposteriaServiciosAsistenciaComponent } from './reposteria-servicios-asistencia.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
  ],
  declarations: [
    ReposteriaServiciosAsistenciaComponent,
  ],
  exports: [
    ReposteriaServiciosAsistenciaComponent,
  ]
})
export class ReposteriaServiciosAsistenciaModule {}