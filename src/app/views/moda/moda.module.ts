import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModaComponent } from './moda.component';
import { ModaRoutingModule } from './moda-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ModaRoutingModule,
  ],
  declarations: [
    ModaComponent,    
  ],
  exports: [
    ModaComponent,
  ]
})
export class ModaModule {}