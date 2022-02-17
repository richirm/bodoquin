import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TecnologiaMascotasComponent } from './tecnologia-mascotas.component';
import { TecnologiaMascotasService } from './tecnologia-mascotas.service';
import { TecnologiaCardModule } from '../tecnologia-card/tecnologia-card.module';

@NgModule({
  imports: [CommonModule, FormsModule, TecnologiaCardModule],
  declarations: [TecnologiaMascotasComponent],
  exports: [TecnologiaMascotasComponent],
  providers: [TecnologiaMascotasService]
}) 
export class TecnologiaMascotasModule {}
