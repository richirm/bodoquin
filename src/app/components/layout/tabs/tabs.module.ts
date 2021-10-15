import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TabsComponent } from './tabs.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    PopupComponent,
  ],
  exports: [
    PopupComponent,
  ]
})
export class PopupModule {}