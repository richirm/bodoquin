import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { JugueteriaComidasComponent } from './jugueteria-comidas.component';
import { JugueteriaComidasService } from './jugueteria-comidas.service';
import { JugueteriaCardModule } from '../jugueteria-card/jugueteria-card.module';

@NgModule({
  imports: [CommonModule, FormsModule, JugueteriaCardModule],
  declarations: [JugueteriaComidasComponent],
  exports: [JugueteriaComidasComponent],
  providers: [JugueteriaComidasService]
  
})
export class JugueteriaComidasModule {}