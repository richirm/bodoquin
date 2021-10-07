import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TarjetasProductoModule } from '../../components/tarjetas-producto/tarjetas-producto.module';

import { ReposteriaComponent } from './reposteria.component';
import { ReposteriaService } from './reposteria.service';
import { ReposteriaRoutingModule } from './reposteria-routing.module';
import { ReposteriaListadoComponent } from './reposteria-listado/reposteria-listado.component';

@NgModule({
  imports: [
    CommonModule,
    ReposteriaRoutingModule,
    
    TarjetasProductoModule,
  ],
  declarations: [
    ReposteriaComponent,
    ReposteriaListadoComponent
  ],
  exports: [
    ReposteriaComponent,
    ReposteriaListadoComponent
  ],
  providers: [
    ReposteriaService,
  ]
})
export class ReposteriaModule {}