import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FerreteriaServiciosComponent } from './ferreteria-servicios.component';
import { FerreteriaServiciosService } from './ferreteria-servicios.service';

import { PanelServiciosModule } from 'src/app/components/panel-servicios/panel-servicios.module';

@NgModule({
  declarations: [FerreteriaServiciosComponent],
  exports: [FerreteriaServiciosComponent],
  imports: [
    CommonModule,
    PanelServiciosModule
  ],
  providers: [
    FerreteriaServiciosService,
  ]
})
export class FerreteriaServiciosModule { }
