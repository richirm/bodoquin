import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReposteriaComponent } from './reposteria.component';

const routes: Routes = [
  {
    path: '',
    component: ReposteriaComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReposteriaRoutingModule {}
