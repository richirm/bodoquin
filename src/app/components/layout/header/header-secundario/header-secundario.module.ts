import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HeaderSecundarioComponent } from './header-secundario.component';

@NgModule({
  imports: [
    RouterModule
  ],
  declarations: [
    HeaderSecundarioComponent,    
  ],
  exports: [
    HeaderSecundarioComponent,
  ]
})
export class HeaderSecundarioModule {}