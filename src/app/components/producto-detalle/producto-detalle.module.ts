import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TabsModule } from '../tabs/tabs.module';

import { ProductoDetalleComponent } from './producto-detalle.component';

@NgModule({
  imports: [
    CommonModule,
    
    TabsModule,
  ],
  declarations: [
    ProductoDetalleComponent,
  ],
  exports: [
    ProductoDetalleComponent,
  ]
})
export class ProductoDetalleModule {}