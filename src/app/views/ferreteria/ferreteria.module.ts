import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TarjetasProductoModule } from '../../components/tarjetas-producto/tarjetas-producto.module';

import { FerreteriaComponent } from './ferreteria.component';
import { FerreteriaListadoComponent } from './ferreteria-listado/ferreteria-listado.component';
import { FerreteriaDetalleComponent } from './ferreteria-detalle/ferreteria-detalle.component';
import { FerreteriaRoutingModule } from './ferreteria-routing.module';

import { FerreteriaService } from './ferreteria.service';

@NgModule({
  declarations: [
    FerreteriaComponent, 
    FerreteriaListadoComponent, 
    FerreteriaDetalleComponent
  ],
  imports: [
    CommonModule,
    FerreteriaRoutingModule,
    TarjetasProductoModule,
  ],
  providers: [
    FerreteriaService,
  ]
})
export class FerreteriaModule { }
