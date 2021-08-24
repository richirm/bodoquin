import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JugueteriaComponent } from './jugueteria.component';
import { JugueteriaRoutingModule } from './jugueteria-routing.module';

@NgModule({
  imports: [
    CommonModule,
    JugueteriaRoutingModule,
  ],
  declarations: [
    JugueteriaComponent,    
  ],
  exports: [
    JugueteriaComponent,
  ]
})
export class JugueteriaModule {}