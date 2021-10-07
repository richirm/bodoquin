import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TarjetasProductoModule } from '../../components/tarjetas-producto/tarjetas-producto.module';

import { JugueteriaComponent } from './jugueteria.component';
import { JugueteriaService } from './jugueteria.service';
import { JugueteriaRoutingModule } from './jugueteria-routing.module';
import { JugueteriaListadoComponent } from './jugueteria-listado/jugueteria-listado.component';

@NgModule({
  imports: [
    CommonModule,
    JugueteriaRoutingModule,
    
    TarjetasProductoModule,
  ],
  declarations: [
    JugueteriaComponent, 
    JugueteriaListadoComponent
  ],
  exports: [
    JugueteriaComponent,
    JugueteriaListadoComponent
  ],
  providers: [
    JugueteriaService,
  ]
})
export class JugueteriaModule {}