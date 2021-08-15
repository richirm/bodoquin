import { NgModule } from '@angular/core';

import { ModaComponent } from './moda.component';
import { ModaRoutingModule } from './moda-routing.module';

@NgModule({
  imports: [
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