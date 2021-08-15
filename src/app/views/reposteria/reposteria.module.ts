import { NgModule } from '@angular/core';

import { ReposteriaComponent } from './reposteria.component';
import { ReposteriaRoutingModule } from './reposteria-routing.module';

@NgModule({
  imports: [
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