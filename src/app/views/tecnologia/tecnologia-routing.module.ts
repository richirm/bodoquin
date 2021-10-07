import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TecnologiaComponent } from './tecnologia.component';
import { TecnologiaListadoComponent } from './tecnologia-listado/tecnologia-listado.component';
import { TecnologiaDetalleComponent } from './tecnologia-detalle/tecnologia-detalle.component';

const routes: Routes = [
  {
    path: '',
    component: TecnologiaComponent,
    children: [
      {
        path: '',
        component: TecnologiaListadoComponent
      }, 
      {
        path: 'detalle',
        component: TecnologiaDetalleComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TecnologiaRoutingModule {}
