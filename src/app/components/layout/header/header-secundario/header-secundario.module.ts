import { NgModule } from '@angular/core';

import { HeaderSecundarioComponent } from './header-secundario.component';

@NgModule({
  declarations: [
    HeaderSecundarioComponent,    
  ],
  exports: [
    HeaderSecundarioComponent,
  ]
})
export class HeaderSecundarioModule {}