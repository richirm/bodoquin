import { NgModule } from '@angular/core';
import { CommonModule }from '@angular/common';

import { JugueteriaCardComponent } from './jugueteria-card.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    JugueteriaCardComponent,
  ],
  exports: [
    JugueteriaCardComponent
  ]
})
export class JugueteriaCardModule {}

