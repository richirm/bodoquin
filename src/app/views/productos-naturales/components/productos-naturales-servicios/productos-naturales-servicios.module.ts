import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductosNaturalesServiciosComponent } from './productos-naturales-servicios.component';
import { ProductosNaturalesServiciosService } from './productos-naturales-servicios.service';

import { PanelServiciosModule } from 'src/app/components/panel-servicios/panel-servicios.module';

@NgModule({
  declarations: [ProductosNaturalesServiciosComponent],
  exports: [ProductosNaturalesServiciosComponent],
  imports: [
    CommonModule,
    PanelServiciosModule
  ],
  providers: [
    ProductosNaturalesServiciosService,
  ]
})
export class ProductosNaturalesServiciosModule { }
