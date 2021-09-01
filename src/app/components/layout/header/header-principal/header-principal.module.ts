import { NgModule } from '@angular/core';

import { HeaderBuscadorModule } from './header-buscador/header-buscador.module';

import { HeaderPrincipalComponent } from './header-principal.component';

@NgModule({
  imports: [
    HeaderBuscadorModule,
  ],
  declarations: [
    HeaderPrincipalComponent,    
  ],
  exports: [
    HeaderPrincipalComponent,
  ]
})
export class HeaderPrincipalModule {}