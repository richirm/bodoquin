import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TecnologiaServiciosReclamosComponent } from './tecnologia-servicios-reclamos.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
  ],
  declarations: [
    TecnologiaServiciosReclamosComponent
  ],
  exports: [
    TecnologiaServiciosReclamosComponent
  ],
})
export class TecnologiaServiciosReclamosModule {}