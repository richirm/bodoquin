import { NgModule } from '@angular/core';

import { HeaderUsuarioComponent } from './header-usuario.component';

@NgModule({
  declarations: [
    HeaderUsuarioComponent,    
  ],
  exports: [
    HeaderUsuarioComponent,
  ]
})
export class HeaderUsuarioModule {}