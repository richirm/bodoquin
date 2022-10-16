import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FerreteriaComponent } from './ferreteria/ferreteria.component';
import { FerreteriaListadoComponent } from './ferreteria-listado/ferreteria-listado.component';
import { FerreteriaDetalleComponent } from './ferreteria-detalle/ferreteria-detalle.component';

@NgModule({
  declarations: [FerreteriaComponent, FerreteriaListadoComponent, FerreteriaDetalleComponent],
  imports: [
    CommonModule
  ]
})
export class FerreteriaModule { }
