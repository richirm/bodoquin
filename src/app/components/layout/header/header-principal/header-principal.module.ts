import { NgModule } from '@angular/core';

import { HeaderPrincipalComponent } from './header-principal.component';

@NgModule({
  declarations: [
    HeaderPrincipalComponent,    
  ],
  exports: [
    HeaderPrincipalComponent,
  ]
})
export class HeaderPrincipalModule {}