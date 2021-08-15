import { NgModule } from '@angular/core';

import { TecnologiaComponent } from './tecnologia.component';
import { TecnologiaRoutingModule } from './tecnologia-routing.module';

@NgModule({
  imports: [
    TecnologiaRoutingModule,
  ],
  declarations: [
    TecnologiaComponent,    
  ],
  exports: [
    TecnologiaComponent,
  ]
})
export class TecnologiaModule {}