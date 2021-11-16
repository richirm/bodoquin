import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderSecundarioModule } from './header-secundario/header-secundario.module';
import { HeaderPrincipalModule } from './header-principal/header-principal.module';

import { HeaderComponent } from './header.component';

@NgModule({
  imports: [ 
    CommonModule,
    
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