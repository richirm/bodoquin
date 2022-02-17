import { Component, OnInit} from '@angular/core';

import { TecnologiaAlumnosService } from'./tecnologia-alumnos.service';
import { AlumnoInterface } from'./interfaces/alumno.interface';

@Component({
  selector: 'bodoquin-tecnologia-alumnos',
  templateUrl: './tecnologia-alumnos.component.html',
  styleUrls: ['./tecnologia-alumnos.component.scss']
})
export class TecnologiaAlumnosComponent implements OnInit {

  alumnos: Array<AlumnoInterface>;
  alumno: AlumnoInterface = {};
  
  constructor (
  
    private tecnologiaAlumnosService: TecnologiaAlumnosService) {}
    
  ngOnInit() {
    this.getAlumnos();
  }
  
  getAlumnos() {
    this.tecnologiaAlumnosService.getAlumnos().subscribe(
      (response) => {
        console.log(response);
        this.alumnos = response;
      },
      (error) => {
        console.log(error);
      }
    )
  }
  
  grabarAlumno() {
    if(!!this.alumno.idAlumno) {
      this.tecnologiaAlumnosService.putAlumno(this.alumno).subscribe(
        (response) => {
          this.getAlumnos();
          this.limpiarFormulario();
        },
        (error) => {
          console.log(error);
        }
      );
    } else {
      this.tecnologiaAlumnosService.postAlumno(this.alumno).subscribe(
        (response) => {
          this.getAlumnos();
          this.limpiarFormulario();
        },
        (error) => {
          console.log(error);
        }
      );
    }
  }
  
  seleccionarAlumno(alumnoSeleccionado: AlumnoInterface) {
    this.alumno =  { ...alumnoSeleccionado };
  }
  
  eliminarAlumno(alumnoSeleccionado: AlumnoInterface) {
    if(confirm('¡Esta seguro que desea eliminar?')) {
      this.tecnologiaAlumnosService.deleteAlumno(alumnoSeleccionado.idAlumno).subscribe(
        (response) => {
          this.getAlumnos();
          this.limpiarFormulario();
        },
        (error) => {
          console.log(error);
        }        
      );
    }
  }

  limpiarFormulario() {
    this.alumno = {};
  }
}