import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JugueteriaComponent } from './jugueteria.component';
import { JugueteriaListadoComponent } from './jugueteria-listado/jugueteria-listado.component';

const routes: Routes = [
  {
    path: '',
    component: JugueteriaComponent,
    children: [
      {
        path: '',
        component: JugueteriaListadoComponent
      }, 
      // {

      // }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JugueteriaRoutingModule {}
