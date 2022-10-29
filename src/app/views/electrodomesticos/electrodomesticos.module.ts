import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TarjetasProductoModule } from '../../components/tarjetas-producto/tarjetas-producto.module';
import { ElectrodomesticosServiciosModule } from './components/electrodomesticos-servicios/electrodomesticos-servicios.module';

import { ElectrodomesticosComponent } from './electrodomesticos.component';
import { ElectrodomesticosListadoComponent } from './electrodomesticos-listado/electrodomesticos-listado.component';

import { ElectrodomesticosRoutingModule } from './electrodomesticos-routing.module';
import { ElectrodomesticosService } from './electrodomesticos.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    
    TarjetasProductoModule,
    ElectrodomesticosServiciosModule,
    
    ElectrodomesticosRoutingModule,
  ],
  declarations: [
    ElectrodomesticosComponent, 
    ElectrodomesticosListadoComponent
  ],
    exports: [
    ElectrodomesticosComponent,
    ElectrodomesticosListadoComponent,
  ],
  providers: [
    ElectrodomesticosService,
  ]
})
export class ElectrodomesticosModule { }
