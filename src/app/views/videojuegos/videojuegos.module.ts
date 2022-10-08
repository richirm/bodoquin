import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { VideojuegosComponent } from './Videojuegos.component';
import { VideojuegosListadoComponent } from './videojuegos-listado/videojuegos-listado.component';
import { VideojuegosDetalleComponent } from './videojuegos-detalle/videojuegos-detalle.component';

import { VideojuegosRoutingModule } from './videojuegos-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    
    VideojuegosRoutingModule,
  ], 
  declarations: [
    VideojuegosComponent,
    VideojuegosListadoComponent,
    VideojuegosDetalleComponent
  ], 
  exports: [
    VideojuegosComponent,
    VideojuegosListadoComponent,
    VideojuegosDetalleComponent
  ],
})
export class VideojuegosModule {}
