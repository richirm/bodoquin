import { NgModule } from '@angular/core';

import { HeaderBuscadorComponent } from './header-buscador.component';

@NgModule({
  declarations: [
    HeaderBuscadorComponent,    
  ],
  exports: [
    HeaderBuscadorComponent,
  ]
})
export class HeaderBuscadorModule {}