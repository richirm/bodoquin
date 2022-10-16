import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { JugueteriaServiciosSoporteComponent } from './jugueteria-servicios-soporte.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
  ],
  declarations: [
    JugueteriaServiciosSoporteComponent,
  ],
  exports: [
    JugueteriaServiciosSoporteComponent,
  ],
})
export class JugueteriaServiciosSoporteModule {}