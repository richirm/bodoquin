import { NgModule } from'@angular/core';
import { CommonModule } from'@angular/common';
import { FormsModule } from'@angular/forms';

import { TecnologiaAlumnosComponent } from'./tecnologia-alumnos.component';
import { TecnologiaAlumnosService } from'./tecnologia-alumnos.service';
import { TecnologiaCardModule } from'../tecnologia-card/tecnologia-card.module';

@NgModule({
  imports: [CommonModule, FormsModule, TecnologiaCardModule],
  declarations: [TecnologiaAlumnosComponent],
  exports: [TecnologiaAlumnosComponent],
  providers: [TecnologiaAlumnosService]
})
export class TecnologiaAlumnosModule {}