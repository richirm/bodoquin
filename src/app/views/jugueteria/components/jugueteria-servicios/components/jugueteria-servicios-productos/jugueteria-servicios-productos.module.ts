import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { JugueteriaServiciosProductosComponent } from './jugueteria-servicios-productos.component';

@NgModule({
  imports: [ 
    CommonModule,
    FormsModule,
  ],
  declarations: [
    JugueteriaServiciosProductosComponent,
  ],
  exports: [
    JugueteriaServiciosProductosComponent,
  ],
})
export class JugueteriaServiciosProductosModule {
}