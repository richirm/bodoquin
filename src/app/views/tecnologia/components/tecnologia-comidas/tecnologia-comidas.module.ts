import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TecnologiaComidasComponent } from './tecnologia-comidas.component';
import { TecnologiaComidasService } from './tecnologia-comidas.service';
import { TecnologiaCardModule } from '../tecnologia-card/tecnologia-card.module';

@NgModule({
  imports: [CommonModule, FormsModule, TecnologiaCardModule],
  declarations: [TecnologiaComidasComponent],
  exports: [TecnologiaComidasComponent],
  providers: [TecnologiaComidasService]
})
export class TecnologiaComidasModule {}