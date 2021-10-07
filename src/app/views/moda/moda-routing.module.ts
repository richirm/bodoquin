import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModaComponent } from './moda.component';
import { ModaListadoComponent } from './moda-listado/moda-listado.component';


const routes: Routes = [
  {
    path: '',
    component: ModaComponent,
    children: [
      {
        path: '',
        component: ModaListadoComponent
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
export class ModaRoutingModule {}
