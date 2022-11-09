import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TarjetasProductoModule } from '../../components/tarjetas-producto/tarjetas-producto.module';
import { ProductosNaturalesServiciosModule } from './components/productos-naturales-servicios/productos-naturales-servicios.module';
import { ProductoDetalleModule } from '../../components/producto-detalle/producto-detalle.module';

import { ProductosNaturalesComponent } from './productos-naturales.component';
import { ProductosNaturalesListadoComponent } from './productos-naturales-listado/productos-naturales-listado.component';
import { ProductosNaturalesDetalleComponent } from './productos-naturales-detalle/productos-naturales-detalle.component';

import { ProductosNaturalesService } from './productos-naturales.service';
import { ProductosNaturalesRoutingModule } from './productos-naturales-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    
    TarjetasProductoModule,
    ProductosNaturalesServiciosModule,
    ProductoDetalleModule,
    
    ProductosNaturalesRoutingModule
  ],
  declarations: [
    ProductosNaturalesComponent, 
    ProductosNaturalesListadoComponent, 
    ProductosNaturalesDetalleComponent,
  ],
  exports: [
    ProductosNaturalesComponent,
    ProductosNaturalesListadoComponent,
    ProductosNaturalesDetalleComponent
  ],
  providers: [
    ProductosNaturalesService,
  ]
})
export class ProductosNaturalesModule { }
