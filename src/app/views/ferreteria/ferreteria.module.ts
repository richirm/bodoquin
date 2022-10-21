import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TarjetasProductoModule } from '../../components/tarjetas-producto/tarjetas-producto.module';
import { FerreteriaServiciosModule } from './components/ferreteria-servicios/ferreteria-servicios.module';

import { FerreteriaComponent } from './ferreteria.component';
import { FerreteriaListadoComponent } from './ferreteria-listado/ferreteria-listado.component';
import { FerreteriaDetalleComponent } from './ferreteria-detalle/ferreteria-detalle.component';

import { FerreteriaRoutingModule } from './ferreteria-routing.module';
import { FerreteriaService } from './ferreteria.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
        
    FerreteriaRoutingModule,
    TarjetasProductoModule,
    FerreteriaServiciosModule,
  ],
  declarations: [
    FerreteriaComponent, 
    FerreteriaListadoComponent, 
    FerreteriaDetalleComponent
  ],


  providers: [
    FerreteriaService,
  ]
})
export class FerreteriaModule { }
