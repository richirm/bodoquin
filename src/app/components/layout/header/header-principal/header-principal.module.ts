import { NgModule } from '@angular/core';

import { HeaderBuscadorModule } from './header-buscador/header-buscador.module';
import { HeaderUsuarioModule } from './header-usuario/header-usuario.module';
import { HeaderCarritoModule } from './header-carrito/header-carrito.module';

import { HeaderPrincipalComponent } from './header-principal.component';

@NgModule({
  imports: [
    HeaderBuscadorModule, 
    HeaderUsuarioModule,
    HeaderCarritoModule,
  ],
  declarations: [
    HeaderPrincipalComponent,    
  ],
  exports: [
    HeaderPrincipalComponent,
  ]
})
export class HeaderPrincipalModule {}