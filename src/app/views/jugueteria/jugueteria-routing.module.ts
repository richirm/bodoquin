import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JugueteriaComponent } from './jugueteria.component';

const routes: Routes = [
  {
    path: '',
    component: JugueteriaComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JugueteriaRoutingModule {}
