import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InicioCarouselComponent } from './inicio-carousel.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    InicioCarouselComponent
  ],
  exports: [
    InicioCarouselComponent
  ]
})
export class InicioCarouselModule {}