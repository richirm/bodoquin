import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './core/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    loadChildren: () => import('./views/inicio/inicio.module').then(m => m.InicioModule)
  },
  {
    path: 'reposteria',
    loadChildren: () => import('./views/reposteria/reposteria.module').then(m => m.ReposteriaModule),
    canActivate: [AuthGuard],
    canDeactivate: [AuthGuard]
  },
  {
    path: 'tecnologia',
    loadChildren: () => import('./views/tecnologia/tecnologia.module').then(m => m.TecnologiaModule),
    canActivate: [AuthGuard],
    canDeactivate: [AuthGuard],
  },
  {
    path: 'jugueteria',
    loadChildren: () => import('./views/jugueteria/jugueteria.module').then(m => m.JugueteriaModule),
    canActivate: [AuthGuard],
    canDeactivate: [AuthGuard]
  },
  {
    path: 'moda',
    loadChildren: () => import('./views/moda/moda.module').then(m => m.ModaModule)
  },
  {
    path: 'videojuegos',
    loadChildren: () => import('./views/videojuegos/videojuegos.module').then(m => m.VideojuegosModule),
    canActivate: [AuthGuard],
    canDeactivate: [AuthGuard]
  },
  {
    path: 'ferreteria',
    loadChildren: () => import('./views/ferreteria/ferreteria.module').then(m => m.FerreteriaModule),
    canActivate: [AuthGuard],
    canDeactivate: [AuthGuard]
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: true
    })
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
