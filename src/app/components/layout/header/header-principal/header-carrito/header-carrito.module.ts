import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PopupModule } from '../../../../popup/popup.module';

import { HeaderCarritoComponent } from './header-carrito.component';

@NgModule({
  imports: [
    CommonModule,
    
    PopupModule,
  ],
  declarations: [
    HeaderCarritoComponent,    
  ],
  exports: [
    HeaderCarritoComponent,
  ]
})
export class HeaderCarritoModule {}