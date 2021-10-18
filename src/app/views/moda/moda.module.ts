import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TarjetasProductoModule } from '../../components/tarjetas-producto/tarjetas-producto.module';
import { TabsModule } from '../../components/tabs/tabs.module';

import { ModaComponent } from './moda.component';
import { ModaService } from './moda.service';
import { ModaRoutingModule } from './moda-routing.module';
import { ModaListadoComponent } from './moda-listado/moda-listado.component';
import { ModaDetalleComponent } from './moda-detalle/moda-detalle.component';

@NgModule({
  imports: [
    CommonModule,
    ModaRoutingModule,
    
    TarjetasProductoModule,
    TabsModule,
  ],
  declarations: [
    ModaComponent,   
    ModaListadoComponent,
    ModaDetalleComponent,
  ],
  exports: [
    ModaComponent,
    ModaListadoComponent,
    ModaDetalleComponent,
  ],
  providers: [
    ModaService,
  ]
})
export class ModaModule {}