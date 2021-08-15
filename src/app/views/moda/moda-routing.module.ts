import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModaComponent } from './moda.component';

const routes: Routes = [
  {
    path: '',
    component: ModaComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModaRoutingModule {}
