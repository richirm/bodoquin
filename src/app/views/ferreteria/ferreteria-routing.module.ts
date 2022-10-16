import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FerreteriaComponent } from './ferreteria.component';
import { FerreteriaListadoComponent } from './ferreteria-listado/ferreteria-listado.component';

const routes: Routes = [
  {
    path: '',
    component: FerreteriaComponent,
    children: [
      {
        path: '',
        component: FerreteriaListadoComponent
      }, 
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FerreteriaRoutingModule {}
