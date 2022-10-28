import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ElectrodomesticosComponent } from './electrodomesticos.component';
import { ElectrodomesticosListadoComponent } from './electrodomesticos-listado/electrodomesticos-listado.component';


const routes: Routes = [
  {
    path: '',
    component: ElectrodomesticosComponent,
    children: [
      {
        path: '',
        component: ElectrodomesticosListadoComponent
      }, 
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ElectrodomesticosRoutingModule { }
