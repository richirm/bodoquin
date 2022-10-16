import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TecnologiaRibbonComponent } from './tecnologia-ribbon.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    TecnologiaRibbonComponent
  ],
  exports: [
    TecnologiaRibbonComponent
  ]
})
export class TecnologiaRibbonModule {}