import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VideojuegosServiciosComponent } from './videojuegos-servicios.component';
import { VideojuegosServiciosService } from './videojuegos-servicios.service';

import { PanelServiciosModule } from 'src/app/components/panel-servicios/panel-servicios.module';

@NgModule({
  declarations: [VideojuegosServiciosComponent],
  exports: [VideojuegosServiciosComponent],
  imports: [
    CommonModule,
    PanelServiciosModule
  ],
  providers: [
    VideojuegosServiciosService,
  ]
})
export class VideojuegosServiciosModule { }
