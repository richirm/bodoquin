import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { JugueteriaAlumnosComponent } from './jugueteria-alumnos.component';
import { JugueteriaAlumnosService } from './jugueteria-alumnos.service';
import { JugueteriaCardModule } from '../jugueteria-card/jugueteria-card.module';

@NgModule({
  imports: [CommonModule, FormsModule, JugueteriaCardModule],
  declarations: [JugueteriaAlumnosComponent],
  exports: [JugueteriaAlumnosComponent],
  providers: [JugueteriaAlumnosService]
})
export class JugueteriaAlumnosModule {}