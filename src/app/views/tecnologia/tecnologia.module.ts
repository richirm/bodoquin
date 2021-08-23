import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TecnologiaComponent } from './tecnologia.component';
import { TecnologiaRoutingModule } from './tecnologia-routing.module';

@NgModule({
  imports: [
    CommonModule,
    TecnologiaRoutingModule,
  ],
  declarations: [
    TecnologiaComponent,    
  ],
  exports: [
    TecnologiaComponent,
  ]
})
export class TecnologiaModule {}