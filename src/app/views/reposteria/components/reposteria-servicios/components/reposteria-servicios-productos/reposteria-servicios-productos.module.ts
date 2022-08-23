import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReposteriaServiciosProductosComponent } from './reposteria-servicios-productos.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    ReposteriaServiciosProductosComponent,
  ],
  exports: [
    ReposteriaServiciosProductosComponent,
  ]
})
export class ReposteriaServiciosProductosModule {}