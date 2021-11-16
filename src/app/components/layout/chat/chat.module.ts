import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PopupModule } from '../../popup/popup.module';

import { ChatComponent } from './chat.component';

@NgModule({
  imports: [
    CommonModule,
    
    PopupModule,
  ],
  declarations: [
    ChatComponent,
  ],
  exports: [
    ChatComponent,
  ]
})
export class ChatModule {}