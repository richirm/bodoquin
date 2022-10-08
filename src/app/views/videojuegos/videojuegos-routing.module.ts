import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VideojuegosComponent } from './Videojuegos.component';
import { VideojuegosListadoComponent } from './videojuegos-listado/videojuegos-listado.component';
import { VideojuegosDetalleComponent } from './videojuegos-detalle/videojuegos-detalle.component';

const routes: Routes = [
  {
    path: '',
    component: VideojuegosComponent,
    children: [
      {
        path: '',
        component: VideojuegosListadoComponent
      }, 
      {
        path: 'detalle/:idProducto',
        component: VideojuegosDetalleComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VideojuegosRoutingModule {}
