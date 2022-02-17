import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ReposteriaCardModule } from '../reposteria-card/reposteria-card.module';

import { ReposteriaCursosComponent } from './reposteria-cursos.component';
import { ReposteriaCursosService } from './reposteria-cursos.service';

@NgModule({
  imports: [
    CommonModule, 
    FormsModule,
    ReposteriaCardModule
  ],
  declarations: [ReposteriaCursosComponent],
  exports: [ReposteriaCursosComponent],
  providers: [ReposteriaCursosService]
})
export class ReposteriaCursosModule {}