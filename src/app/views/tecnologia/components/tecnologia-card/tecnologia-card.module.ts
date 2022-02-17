import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TecnologiaCardComponent } from './tecnologia-card.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    TecnologiaCardComponent,
  ],
  exports: [
    TecnologiaCardComponent,
  ]
})
export class TecnologiaCardModule {}