import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReposteriaCardComponent } from './reposteria-card.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    ReposteriaCardComponent,
  ],
  exports: [
    ReposteriaCardComponent
  ]
})
export class ReposteriaCardModule {}