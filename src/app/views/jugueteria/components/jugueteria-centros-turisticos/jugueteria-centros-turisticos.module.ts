import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { JugueteriaCentrosTuristicosComponent } from './jugueteria-centros-turisticos.component';
import { JugueteriaCentrosTuristicosService } from './jugueteria-centros-turisticos.service';
import { JugueteriaCardModule } from '../jugueteria-card/jugueteria-card.module';

@NgModule({
  imports: [CommonModule, FormsModule, JugueteriaCardModule],
  declarations: [JugueteriaCentrosTuristicosComponent],
  exports: [JugueteriaCentrosTuristicosComponent],
  providers: [JugueteriaCentrosTuristicosService]
  
})
export class JugueteriaCentrosTuristicosModule {}