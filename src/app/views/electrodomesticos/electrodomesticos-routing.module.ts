import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ElectrodomesticosComponent } from './electrodomesticos.component';

const routes: Routes = [
  {
    path: '',
    component: ElectrodomesticosComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ElectrodomesticosRoutingModule { }
