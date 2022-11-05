import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductosNaturalesComponent } from './productos-naturales.component';

const routes: Routes = [
  {
    path: '',
    component: ProductosNaturalesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductosNaturalesRoutingModule { }
