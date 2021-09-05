import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PopupModule } from '../../../../popup/popup.module';
import { ModalModule } from '../../../../modal/modal.module';

import { HeaderUsuarioComponent } from './header-usuario.component';

@NgModule({
  imports: [
    CommonModule,
    
    PopupModule,
    ModalModule,
  ],
  declarations: [
    HeaderUsuarioComponent,    
  ],
  exports: [
    HeaderUsuarioComponent,
  ]
})
export class HeaderUsuarioModule {}