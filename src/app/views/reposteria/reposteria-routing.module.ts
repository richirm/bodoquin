import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReposteriaComponent } from './reposteria.component';
import { ReposteriaListadoComponent } from './reposteria-listado/reposteria-listado.component';
import { ReposteriaDetalleComponent } from './reposteria-detalle/reposteria-detalle.component';

const routes: Routes = [
  {
    path: '',
    component: ReposteriaComponent,
    children: [
      {
        path: '',
        component: ReposteriaListadoComponent
      }, 
      {
        path: 'detalle/:idProducto',
        component: ReposteriaDetalleComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReposteriaRoutingModule {}
