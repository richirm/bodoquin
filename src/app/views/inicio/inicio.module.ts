import { NgModule } from '@angular/core';

import { InicioComponent } from './inicio.component';
import { InicioRoutingModule } from './inicio-routing.module';

@NgModule({
  imports: [
    InicioRoutingModule,
  ],
  declarations: [
    InicioComponent,    
  ],
  exports: [
    InicioComponent,
  ]
})
export class InicioModule {}