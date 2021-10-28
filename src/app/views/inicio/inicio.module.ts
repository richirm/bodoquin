import { NgModule } from '@angular/core';

import { InicioCarouselModule } from './components/inicio-carousel/inicio-carousel.module';

import { InicioComponent } from './inicio.component';
import { InicioRoutingModule } from './inicio-routing.module';

@NgModule({
  imports: [
    InicioRoutingModule,
    
    InicioCarouselModule
  ],
  declarations: [
    InicioComponent,    
  ],
  exports: [
    InicioComponent,
  ]
})
export class InicioModule {}