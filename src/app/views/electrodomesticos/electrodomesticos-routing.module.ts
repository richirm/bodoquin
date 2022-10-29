import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ElectrodomesticosComponent } from './electrodomesticos.component';
import { ElectrodomesticosListadoComponent } from './electrodomesticos-listado/electrodomesticos-listado.component';
import { ElectrodomesticosDetalleComponent } from './electrodomesticos-detalle/electrodomesticos-detalle.component';

const routes: Routes = [
  {
    path: '',
    component: ElectrodomesticosComponent,
    children: [
      {
        path: '',
        component: ElectrodomesticosListadoComponent
      }, 
      {
        path: 'detalle/:idProducto',
        component: ElectrodomesticosDetalleComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ElectrodomesticosRoutingModule { }
