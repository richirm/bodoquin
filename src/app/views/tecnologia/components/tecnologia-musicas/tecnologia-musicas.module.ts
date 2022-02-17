import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TecnologiaMusicasComponent } from './tecnologia-musicas.component';
import { TecnologiaMusicasService } from './tecnologia-musicas.service';
import { TecnologiaCardModule } from '../tecnologia-card/tecnologia-card.module';

@NgModule({
  imports: [CommonModule, FormsModule, TecnologiaCardModule],
  declarations: [TecnologiaMusicasComponent],
  exports: [TecnologiaMusicasComponent],
  providers: [TecnologiaMusicasService]
})
export class TecnologiaMusicasModule {}