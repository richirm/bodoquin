import { Component, OnInit } from '@angular/core';

import { ReposteriaCursosService } from './reposteria-cursos.service';
import { CursoInterface } from './interfaces/curso.interface';

@Component({
  selector: 'bodoquin-reposteria-cursos',
  templateUrl: './reposteria-cursos.component.html',
  styleUrls: ['./reposteria-cursos.component.scss']
})
export class ReposteriaCursosComponent implements OnInit {  
  cursos: Array<CursoInterface>;
  
  nombre: string;
  costo: number;

  constructor(
    private reposteriaCursosService: ReposteriaCursosService) {}
    
  ngOnInit() {
    this.getCursos();
  }
    
  getCursos() {
    this.reposteriaCursosService.getCursos().subscribe(
      (response) => {
        this.cursos = response;
      },
      (error) => {
        console.log(error);
      }
    );
  }
  
  grabarCurso() {
    this.cursos.push({
      nombre: this.nombre,
      costo: this.costo
    });
  }
  
  seleccionarCurso(curso: CursoInterface) {
    console.log('Editar curso', curso);
  }
  
  eliminarCurso(curso: CursoInterface) {
    console.log('Eliminiar curso', curso);
  }

}