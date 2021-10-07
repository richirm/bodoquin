import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReposteriaComponent } from './reposteria.component';
import { ReposteriaListadoComponent } from './reposteria-listado/reposteria-listado.component';

const routes: Routes = [
  {
    path: '',
    component: ReposteriaComponent,
    children: [
      {
        path: '',
        component: ReposteriaListadoComponent
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
export class ReposteriaRoutingModule {}
