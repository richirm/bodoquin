import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TarjetasProductoModule } from '../../components/tarjetas-producto/tarjetas-producto.module';
import { ElectrodomesticosServiciosModule } from './components/electrodomesticos-servicios/electrodomesticos-servicios.module';
import { ProductoDetalleModule } from '../../components/producto-detalle/producto-detalle.module';

import { ElectrodomesticosComponent } from './electrodomesticos.component';
import { ElectrodomesticosListadoComponent } from './electrodomesticos-listado/electrodomesticos-listado.component';
import { ElectrodomesticosDetalleComponent } from './electrodomesticos-detalle/electrodomesticos-detalle.component';

import { ElectrodomesticosRoutingModule } from './electrodomesticos-routing.module';
import { ElectrodomesticosService } from './electrodomesticos.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    
    TarjetasProductoModule,
    ElectrodomesticosServiciosModule,
    ProductoDetalleModule,
    
    ElectrodomesticosRoutingModule,
  ],
  declarations: [
    ElectrodomesticosComponent, 
    ElectrodomesticosListadoComponent, 
    ElectrodomesticosDetalleComponent
  ],
    exports: [
    ElectrodomesticosComponent,
    ElectrodomesticosListadoComponent,
    ElectrodomesticosDetalleComponent
  ],
  providers: [
    ElectrodomesticosService,
  ]
})
export class ElectrodomesticosModule { }
