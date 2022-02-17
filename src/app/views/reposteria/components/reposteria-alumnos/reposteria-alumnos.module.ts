import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ReposteriaCardModule } from '../reposteria-card/reposteria-card.module';

import { ReposteriaAlumnosComponent } from './reposteria-alumnos.component';
import { ReposteriaAlumnosService } from './reposteria-alumnos.service';

@NgModule({
  imports: [
    CommonModule, 
    FormsModule,
    ReposteriaCardModule
  ],
  declarations: [ReposteriaAlumnosComponent],
  exports: [ReposteriaAlumnosComponent],
  providers: [ReposteriaAlumnosService]
})
export class ReposteriaAlumnosModule {}