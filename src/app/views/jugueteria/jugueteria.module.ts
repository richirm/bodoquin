import { NgModule } from '@angular/core';

import { JugueteriaComponent } from './jugueteria.component';
import { JugueteriaRoutingModule } from './jugueteria-routing.module';

@NgModule({
  imports: [
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