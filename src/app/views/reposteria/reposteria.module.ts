import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReposteriaComponent } from './reposteria.component';
import { ReposteriaRoutingModule } from './reposteria-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ReposteriaRoutingModule,
  ],
  declarations: [
    ReposteriaComponent,    
  ],
  exports: [
    ReposteriaComponent,
  ]
})
export class ReposteriaModule {}