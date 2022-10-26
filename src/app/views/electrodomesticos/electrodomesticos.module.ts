import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ElectrodomesticosRoutingModule } from './electrodomesticos-routing.module';
import { ElectrodomesticosComponent } from './electrodomesticos.component';


@NgModule({
  declarations: [ElectrodomesticosComponent],
  imports: [
    CommonModule,
    ElectrodomesticosRoutingModule
  ]
})
export class ElectrodomesticosModule { }
