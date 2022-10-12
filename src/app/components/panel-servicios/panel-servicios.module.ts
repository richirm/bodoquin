import { NgModule } from '@angular/core'; 
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PanelServiciosComponent } from './panel-servicios.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
  ],
  declarations: [
    PanelServiciosComponent,
  ],
  exports: [
    PanelServiciosComponent,
  ]
})
export class PanelServiciosModule {}