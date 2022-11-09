import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductosNaturalesComponent } from './productos-naturales.component';
import { ProductosNaturalesListadoComponent } from './productos-naturales-listado/productos-naturales-listado.component';
import { ProductosNaturalesDetalleComponent } from './productos-naturales-detalle/productos-naturales-detalle.component';

const routes: Routes = [
  {
    path: '',
    component: ProductosNaturalesComponent,
    children: [
      {
        path: '',
        component: ProductosNaturalesListadoComponent
      }, 
      {
        path: 'detalle/:idProducto',
        component: ProductosNaturalesDetalleComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductosNaturalesRoutingModule { }
