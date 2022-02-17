import { Component, OnInit } from '@angular/core';

import { JugueteriaAlumnosService } from './jugueteria-alumnos.service';
import { AlumnoInterface } from './interfaces/alumno.interface';

@Component({
  selector: 'bodoquin-jugueteria-alumnos',
  templateUrl: './jugueteria-alumnos.component.html',
  styleUrls: ['./jugueteria-alumnos.component.scss']
})

export class JugueteriaAlumnosComponent implements OnInit {

  alumnos: Array<AlumnoInterface>;
  alumno: AlumnoInterface = {};
  
  constructor(
    private jugueteriaAlumnosService: JugueteriaAlumnosService) {}
    
  ngOnInit() {
    this.getAlumnos();
  }
  
  getAlumnos() {
    this.jugueteriaAlumnosService.getAlumnos().subscribe(
      (response) => {
        console.log(response);
        this.alumnos = response;
      },
      (error) => {
        console.log(error);
      }
    );
  }
  
  grabarAlumno() {
    if(!!this.alumno.idAlumno) {
      //Actualizar
      this.jugueteriaAlumnosService.putAlumno(this.alumno).subscribe(
        (response) => {
          this.getAlumnos();
          this.limpiarFormulario();
        },
        (error) => {
          console.log(error);
        }
      );
    } else {
      //Crear
      this.jugueteriaAlumnosService.postAlumno(this.alumno).subscribe(
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
    this.alumno = { ...alumnoSeleccionado };
  }
  
  eliminarAlumno(alumnoSeleccionado: AlumnoInterface) {
    if(confirm('¿Esta seguro que desea eliminar?')) {
      this.jugueteriaAlumnosService.deleteAlumno(alumnoSeleccionado.idAlumno).subscribe(
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