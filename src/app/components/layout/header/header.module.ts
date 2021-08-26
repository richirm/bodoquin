import { NgModule } from '@angular/core';

import { HeaderSecundarioModule } from './header-secundario/header-secundario.module';

import { HeaderComponent } from './header.component';

@NgModule({
  imports: [ 
    HeaderSecundarioModule,
  ],   
  declarations: [
    HeaderComponent,    
  ],
  exports: [
    HeaderComponent,
  ]
})
export class HeaderModule {}