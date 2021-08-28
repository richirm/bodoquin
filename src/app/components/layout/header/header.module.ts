import { NgModule } from '@angular/core';

import { HeaderSecundarioModule } from './header-secundario/header-secundario.module';
import { HeaderPrincipalModule } from './header-principal/header-principal.module';

import { HeaderComponent } from './header.component';

@NgModule({
  imports: [ 
    HeaderSecundarioModule,
    HeaderPrincipalModule,    
  ],   
  declarations: [
    HeaderComponent,    
  ],
  exports: [
    HeaderComponent,
  ]
})
export class HeaderModule {}