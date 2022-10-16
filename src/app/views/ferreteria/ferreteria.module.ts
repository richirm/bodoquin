import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FerreteriaComponent } from './ferreteria.component';
import { FerreteriaListadoComponent } from './ferreteria-listado/ferreteria-listado.component';
import { FerreteriaDetalleComponent } from './ferreteria-detalle/ferreteria-detalle.component';
import { FerreteriaRoutingModule } from './ferreteria-routing.module';

@NgModule({
  declarations: [
    FerreteriaComponent, 
    FerreteriaListadoComponent, 
    FerreteriaDetalleComponent
  ],
  imports: [
    CommonModule,
    FerreteriaRoutingModule,
  ]
})
export class FerreteriaModule { }
