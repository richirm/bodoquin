import { NgModule } from '@angular/core';

import { HeaderBuscadorModule } from './header-buscador/header-buscador.module';
import { HeaderUsuarioModule } from './header-usuario/header-usuario.module';

import { HeaderPrincipalComponent } from './header-principal.component';

@NgModule({
  imports: [
    HeaderBuscadorModule, 
    HeaderUsuarioModule,
  ],
  declarations: [
    HeaderPrincipalComponent,    
  ],
  exports: [
    HeaderPrincipalComponent,
  ]
})
export class HeaderPrincipalModule {}