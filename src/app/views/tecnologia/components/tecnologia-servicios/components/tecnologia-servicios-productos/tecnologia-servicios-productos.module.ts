import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TecnologiaServiciosProductosComponent } from './tecnologia-servicios-productos.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
  ],
  declarations: [
    TecnologiaServiciosProductosComponent
  ],
  exports: [
    TecnologiaServiciosProductosComponent
  ],
})
export class TecnologiaServiciosProductosModule {}