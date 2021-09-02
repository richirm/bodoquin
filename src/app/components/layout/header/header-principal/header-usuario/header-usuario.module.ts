import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PopupModule } from '../../../../popup/popup.module';

import { HeaderUsuarioComponent } from './header-usuario.component';

@NgModule({
  imports: [
    CommonModule,
    
    PopupModule,
  ],
  declarations: [
    HeaderUsuarioComponent,    
  ],
  exports: [
    HeaderUsuarioComponent,
  ]
})
export class HeaderUsuarioModule {}