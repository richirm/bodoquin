import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PopupModule } from '../../../../popup/popup.module';
import { ChipModule } from '../../../../chip/chip.module';

import { HeaderCarritoComponent } from './header-carrito.component';

@NgModule({
  imports: [
    CommonModule,
    
    PopupModule,
    ChipModule,
  ],
  declarations: [
    HeaderCarritoComponent,    
  ],
  exports: [
    HeaderCarritoComponent,
  ]
})
export class HeaderCarritoModule {}