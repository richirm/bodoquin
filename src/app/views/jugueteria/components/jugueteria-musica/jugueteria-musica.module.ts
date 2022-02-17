import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { JugueteriaMusicaComponent } from './jugueteria-musica.component';
import { JugueteriaMusicaService } from './jugueteria-musica.service';
import { JugueteriaCardModule } from '../jugueteria-card/jugueteria-card.module';

@NgModule({
  imports: [CommonModule, FormsModule, JugueteriaCardModule],
  declarations: [JugueteriaMusicaComponent],
  exports: [JugueteriaMusicaComponent],
  providers: [JugueteriaMusicaService]
})
export class JugueteriaMusicaModule {}