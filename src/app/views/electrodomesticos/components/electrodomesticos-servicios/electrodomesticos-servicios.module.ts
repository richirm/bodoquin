import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ElectrodomesticosServiciosComponent } from './electrodomesticos-servicios.component';
import { ElectrodomesticosServiciosService } from './electrodomesticos-servicios.service';

import { PanelServiciosModule } from 'src/app/components/panel-servicios/panel-servicios.module';

@NgModule({
  declarations: [ElectrodomesticosServiciosComponent],
  exports: [ElectrodomesticosServiciosComponent],
  imports: [
    CommonModule,
    PanelServiciosModule
  ],
  providers: [
    ElectrodomesticosServiciosService,
  ]
})
export class ElectrodomesticosServiciosModule { }
