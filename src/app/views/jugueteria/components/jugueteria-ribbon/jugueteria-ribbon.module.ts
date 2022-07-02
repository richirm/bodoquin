import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JugueteriaRibbonComponent } from './jugueteria-ribbon.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    JugueteriaRibbonComponent
  ],
  exports: [
    JugueteriaRibbonComponent
  ]
})
export class JugueteriaRibbonModule {}